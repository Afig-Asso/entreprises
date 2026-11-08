"use strict";

// ---------------------------------------------------------------------------
// Graph view: the companies of the current selection as nested circles (circle packing): clusters
// of similar profiles contain sub-clusters, which contain the companies. A click zooms into a circle
// with one continuous animation, so the user always sees where he is in the hierarchy; a click on a
// company shows its most similar companies (whole listing).
// Similarity = shared scientific themes, application themes, keywords (Keywords of data.yaml)
// and size (Employees). Clustering and layout are deterministic: same selection, same picture.
// Uses the globals of listing.js (company_data, UX, esc, compare_fr, french_zone...).
// ---------------------------------------------------------------------------

const GRAPH = {
    'element': document.querySelector('#graph-view'),
    'stage': document.querySelector('#graph-stage'),
    'svg': document.querySelector('#graph-svg'),
    'up': document.querySelector('#graph-up'),
    'tip': document.querySelector('#graph-tip'),
    'zone': document.querySelector('#graph-zone'),
    'crumb': document.querySelector('#graph-crumb'),
    'info': document.querySelector('#graph-info'),
    'rows': document.querySelector('#graph-rows'),
    'features': null,  // per company of the listing: {s, a, k, e, zones}
    'selection': [],   // indices (in the listing) of the companies of the current selection
    'trail': [],       // path from the root: opened clusters (nodes of the tree), then possibly a company (index in the listing)
    'cache': null,     // hierarchy of the last first level {key, merges}
    'tree': null,      // packed tree of the companies shown {key, root, nodes, leaf}
    'view': null,      // circle shown in the viewport {x, y, r}
    'busy': false,     // a zoom is running
};

// Weights of the similarity, and their colors in the explanation bars
const GRAPH_WEIGHTS = [
    {'label': 'domaines scientifiques', 'w': 0.35, 'color': '#534AB7'},
    {'label': "domaines d'application", 'w': 0.15, 'color': '#1D9E75'},
    {'label': 'mots-clés', 'w': 0.35, 'color': '#2a78d6'},
    {'label': 'taille', 'w': 0.15, 'color': '#BA7517'},
];
const GRAPH_MAX_CLUSTERS = 16;
const GRAPH_THRESHOLD = 0.36;  // minimal average similarity to merge two clusters (first level)
const GRAPH_SUB_CLUSTERS = 8;  // at most 8 sub-clusters in a cluster
const GRAPH_SUB_COVER = 0.7;   // ...gathering at least 70 % of its companies
const GRAPH_MIN_ZOOM = 4;      // a cluster of at least 4 companies is split into sub-clusters
// Short names of the themes, for the names of the clusters
const GRAPH_SHORT = {
    "Cinéma/Films d'Animation/VFX": 'cinéma/animation', 'Jeu Vidéo': 'jeu vidéo', 'Industrie/Manufacturing/CAO': 'industrie',
    'Médical/Biologique': 'médical', 'Automobile/Navigation/Aviation': 'transport', 'Loisir Interactif/Immersion/Metavers': 'immersion',
    'Commerce/Marketing/Publicité': 'commerce', 'Architecture/BTP/Urbanisme': 'BTP/urbanisme', 'Art/Evenementiel': 'événementiel',
    'Entrainement/Formation/Serious Game': 'formation', 'Robotique/Systèmes autonomes': 'robotique', 'Sécurité/Défense': 'défense',
    'Géospatial/Cartographie': 'géospatial', 'Patrimoine/Culture': 'patrimoine', 'Mode/Vêtements/Accessoires': 'mode',
    'Énergie/Environnement': 'énergie', 'Générique': 'générique',
    'Rendu temps réel/Moteurs 3D': 'temps réel', 'Rendu offline/VFX': 'rendu offline', 'IA générative (image/3D)': 'IA générative',
    'Pipeline/Outils de production': 'pipeline', 'Web/Cloud/Big Data': 'web/cloud', 'Design/Fabrication': 'design/fabrication',
    'Analyse de données': 'données', 'IHM/Haptique': 'IHM/haptique',
};
const short_theme = (t) => GRAPH_SHORT[t] || t.toLowerCase();
const GRAPH_NEIGHBORS = 12;
const GRAPH_MAX_SCALE = 2.6;  // at most x2.6: a company is never drawn bigger than ~40 px
const SVG_NS = 'http://www.w3.org/2000/svg';

function as_list(value) {
    if(value==undefined) return [];
    if(Array.isArray(value)) return value.map((v) => String(v).trim()).filter((v) => v!='');
    return String(value).split(',').map((v) => v.trim()).filter((v) => v!='');
}

// French zones of a company (zones.yaml), ex. ['Lyon', 'Paris – Île-de-France']
function company_zones(entry) {
    const zones = new Set();
    for(const p of get_list_places_exhaustive(get_list_places(entry['Place']))) {
        const city = String(p['City'] || '').trim();
        if(p['Country']=='France' && city!='') zones.add(french_zone(city));
    }
    return [...zones];
}

function graph_features() {
    if(GRAPH['features']==null) {
        GRAPH['features'] = company_data['Listing'].map((entry) => ({
            's': as_list(entry['Scientific-domain']),
            'a': as_list(entry['Application-domain']),
            'k': as_list(entry['Keywords']),
            'e': employees_count(entry),
            'zones': company_zones(entry),
        }));
    }
    return GRAPH['features'];
}

function jaccard(x, y, neutral) {
    if(x.length==0 && y.length==0) return neutral;
    const union = new Set([...x, ...y]);
    return x.filter((v) => y.includes(v)).length / union.size;
}

// The four parts of the similarity of two companies (their sum is the similarity, between 0 and 1)
function similarity_parts(p, q) {
    const size = (p.e && q.e) ? Math.max(0, 1 - Math.abs(Math.log10(p.e) - Math.log10(q.e))/3) : 0.5;
    return [jaccard(p.s, q.s, 0), jaccard(p.a, q.a, 0), jaccard(p.k, q.k, 0.3), size].map((v, i) => v*GRAPH_WEIGHTS[i]['w']);
}

function similarity(p, q) {
    return similarity_parts(p, q).reduce((sum, v) => sum + v, 0);
}

// Average-linkage agglomerative clustering (deterministic), run to the end: the whole hierarchy
// (dendrogram) as the list of the merges {i, j, h}, i and j being positions in ids, h the average
// similarity of the two merged clusters. h decreases from a merge to the next (average linkage
// has no inversion), so cutting the hierarchy = keeping the first merges.
function graph_dendrogram(ids) {
    const F = graph_features();
    const M = ids.map((p) => ids.map((q) => p==q ? 0 : similarity(F[p], F[q])));
    const size = ids.map(() => 1);
    const active = ids.map((k, i) => i);  // each cluster is known by the position of its first member
    const merges = [];
    while(active.length>1) {
        let bx = 0, by = 1, best = -1;
        for(let x=0; x<active.length; x++) {
            const row = M[active[x]];
            for(let y=x+1; y<active.length; y++) {
                if(row[active[y]] > best) { best = row[active[y]]; bx = x; by = y; }
            }
        }
        const i = active[bx], j = active[by], ni = size[i], nj = size[j];
        for(const k of active) {
            if(k!=i && k!=j) M[i][k] = M[k][i] = (ni*M[i][k] + nj*M[j][k]) / (ni + nj);
        }
        size[i] = ni + nj;
        merges.push({i, j, 'h': best});
        active.splice(by, 1);
    }
    return merges;
}

// Clusters given by the first N merges of the hierarchy (indices in the listing), biggest first
function dendrogram_cut(ids, merges, N) {
    const parent = ids.map((k, i) => i);
    const find = (x) => { while(parent[x]!=x) x = parent[x] = parent[parent[x]]; return x; };
    merges.slice(0, N).forEach((m) => { parent[find(m.j)] = find(m.i); });
    const groups = new Map();
    ids.forEach((k, i) => { const r = find(i); if(!groups.has(r)) groups.set(r, []); groups.get(r).push(k); });
    const name = (k) => company_data['Listing'][k]['Name'];
    return [...groups.values()].map((c) => c.sort((a, b) => compare_fr(name(a), name(b))))
        .sort((a, b) => b.length - a.length || compare_fr(name(a[0]), name(b[0])));
}

// Sub-clusters of a cluster: the cut of its hierarchy giving the most groups of at least `min`
// companies (at most GRAPH_SUB_CLUSTERS) while these groups still gather most of the companies
function graph_split(ids, merges, min) {
    let best = null;
    for(let parts=2; parts<=ids.length; parts++) {
        const raw = dendrogram_cut(ids, merges, ids.length - parts);
        const big = raw.filter((c) => c.length>=min);
        const covered = big.reduce((s, c) => s + c.length, 0)/ids.length;
        if(covered<GRAPH_SUB_COVER || big.length>GRAPH_SUB_CLUSTERS) break;
        if(big.length>=2 && (best==null || big.length>best.N)) best = {raw, 'N': big.length};
    }
    return best ? best.raw : [ids.slice()];
}

// Name of a cluster: the keywords, application and scientific themes shared by most of its members
// (themes shared by the whole selection are left out: they come from the filters)
// In an opened cluster (base = share of each term in the whole cluster), the sub-clusters are named
// by what sets them apart: the terms much more frequent in the sub-cluster than in the cluster
function term_shares(members) {
    const F = graph_features();
    const count = new Map();
    const add = (type, label) => {
        const key = type + label;
        count.set(key, {'type': type, 'label': label, 'key': key, 'n': (count.get(key)?.n || 0) + 1});
    };
    for(const k of members) {
        new Set(F[k].k).forEach((v) => add('k', v));
        new Set(F[k].a.map(short_theme)).forEach((v) => add('a', v));
        new Set(F[k].s.map(short_theme)).forEach((v) => add('s', v));
    }
    return [...count.values()].map((c) => ({...c, 'p': c.n/members.length}));
}

function cluster_name(members, common, base) {
    const lift = (c) => base ? c.p - (base.get(c.key) || 0) : c.p;
    const all = term_shares(members).filter((c) => !common.has(c.key) && (!base || lift(c)>=0.1))
        .sort((x, y) => lift(y) - lift(x) || y.p - x.p || compare_fr(x.label, y.label));
    const pick = (type, min, N) => all.filter((c) => c.type==type && c.p>=min).slice(0, N);
    const parts = [...pick('k', 0.4, 2), ...pick('a', 0.5, 1), ...pick('s', 0.5, 1)]
        .filter((c, i, L) => L.findIndex((o) => o.label.toLowerCase()==c.label.toLowerCase())==i).slice(0, 3);
    if(parts.length==0 && base) return cluster_name(members, common, null);  // nothing sets it apart: its most shared terms
    return {
        'label': parts.map((c) => c.label).join(' · ') || 'profils variés',
        'tags': all.filter((c) => c.p>=0.3).slice(0, 6).map((c) => `${c.label} ${Math.round(100*c.p)} %`),
    };
}

function size_text(e) {
    if(!e) return 'effectif inconnu';
    if(e<10) return `${e} pers.`;
    if(e<250) return `~${e} pers., PME`;
    if(e<5000) return `~${e} pers., ETI`;
    return `~${e.toLocaleString('fr-FR')} pers., grand groupe`;
}

function node_radius(e) {
    return e ? 4 + 2.4*Math.log10(e) : 6;
}

// ---------------------------------------------------------------------------
// SVG helpers
// ---------------------------------------------------------------------------

function svg_el(tag, attributes, parent) {
    const element = document.createElementNS(SVG_NS, tag);
    for(const [k, v] of Object.entries(attributes)) element.setAttribute(k, v);
    if(parent) parent.appendChild(element);
    return element;
}

function svg_text(txt, attributes, parent) {
    const element = svg_el('text', attributes, parent);
    element.textContent = txt;
    return element;
}

// ---------------------------------------------------------------------------
// Hierarchy: clusters, sub-clusters... down to the companies
// ---------------------------------------------------------------------------

// Merges of the hierarchy of a cluster, taken from the hierarchy of its parent. With average
// linkage, the similarity of two groups depends only on their members, so the hierarchy of a
// cluster (a node of the parent hierarchy) is the part of the parent hierarchy inside it.
function sub_merges(ids, merges, subset) {
    const pos = new Map(subset.map((k, i) => [k, i]));
    const out = [];
    for(const m of merges) {
        const a = pos.get(ids[m.i]), b = pos.get(ids[m.j]);
        if(a!==undefined && b!==undefined) out.push({'i': a, 'j': b, 'h': m.h});
    }
    return out;
}

// Themes and keywords shared by (nearly) all the companies of a group: they come from the filters
// or from the parent cluster, so they are not used to name its sub-clusters
function graph_common(ids) {
    const F = GRAPH['features'], common = new Set();
    for(const field of ['k', 'a', 's']) {
        const label = (v) => field=='k' ? v : short_theme(v);
        const count = new Map();
        ids.forEach((k) => new Set(F[k][field].map(label)).forEach((v) => count.set(v, (count.get(v) || 0) + 1)));
        count.forEach((n, v) => { if(n>=0.8*ids.length) common.add(field + v); });
    }
    return common;
}

const leaf_node = (k) => ({k, 'ids': [k], 'children': []});

// Children of a node of the tree: its clusters (first level: cut of the hierarchy at GRAPH_THRESHOLD,
// below: best split of the cluster), then the companies that belong to none of them
function graph_children(node, merges, top) {
    const ids = node.ids;
    if(!top && ids.length<GRAPH_MIN_ZOOM) return ids.map(leaf_node);
    const min = !top && ids.length<40 ? 2 : 3;
    const raw = top ? dendrogram_cut(ids, merges, merges.filter((m) => m.h>GRAPH_THRESHOLD).length) : graph_split(ids, merges, min);
    const big = raw.filter((c) => c.length>=min).slice(0, top ? GRAPH_MAX_CLUSTERS : raw.length);
    if(big.length==1 && big[0].length==ids.length) return ids.map(leaf_node);  // too close to be split
    const single = raw.filter((c) => !big.includes(c)).flat();
    const common = graph_common(ids);
    const base = top ? null : new Map(term_shares(ids).map((c) => [c.key, c.p]));
    const groups = big.map((members) => ({'ids': members, ...cluster_name(members, common, base)}));
    // two clusters with the same name: numbered
    const seen = new Map();
    groups.forEach((c) => { const n = (seen.get(c.label) || 0) + 1; seen.set(c.label, n); if(n>1) c.label += ` (${n})`; });
    groups.forEach((c) => { c.children = graph_children(c, sub_merges(ids, merges, c.ids), false); });
    if(single.length==0) return groups;
    // first level: the companies alike to no other one, in their own circle; below: left loose in the cluster
    // (grouped too, more loosely, when they can be)
    if(top) {
        const node = {'ids': single, 'label': 'profils singuliers', 'tags': ['peu semblables aux autres entreprises'], 'single': true};
        node.children = single.length>=2*GRAPH_MIN_ZOOM ? graph_children(node, graph_dendrogram(single), false) : single.map(leaf_node);
        return groups.concat([node]);
    }
    return groups.concat(single.map(leaf_node));
}

// Whole tree of the companies shown, packed once (kept while the selection and the zone stay the same)
function graph_tree(ids) {
    const key = ids.join(',');
    if(GRAPH['tree']?.key==key) return GRAPH['tree'];
    if(GRAPH['cache']?.key!=key) GRAPH['cache'] = {key, 'merges': graph_dendrogram(ids)};
    const root = {ids, 'label': 'Sélection', 'tags': []};
    root.children = graph_children(root, GRAPH['cache'].merges, true);
    // a single cluster and nothing else: it is the root
    if(root.children.length==1 && root.children[0].children.length>0) root.children = root.children[0].children;
    const nodes = [], leaf = new Map();
    const walk = (n, parent, depth) => {
        n.parent = parent; n.depth = depth; n.id = nodes.length;
        nodes.push(n);
        if(n.k!==undefined) leaf.set(n.k, n);
        n.children.forEach((c) => walk(c, n, depth + 1));
    };
    walk(root, null, 0);
    graph_pack(root);
    GRAPH['tree'] = {key, root, nodes, leaf};
    return GRAPH['tree'];
}

// ---------------------------------------------------------------------------
// Circle packing (front-chain algorithm of Wang et al., as in d3-hierarchy, without randomness)
// ---------------------------------------------------------------------------

function pack_place(b, a, c) {  // c tangent to a and b
    const dx = b.x - a.x, dy = b.y - a.y, d2 = dx*dx + dy*dy;
    if(d2) {
        let a2 = a.r + c.r, b2 = b.r + c.r;
        a2 *= a2; b2 *= b2;
        if(a2>b2) {
            const x = (d2 + b2 - a2)/(2*d2), y = Math.sqrt(Math.max(0, b2/d2 - x*x));
            c.x = b.x - x*dx - y*dy; c.y = b.y - x*dy + y*dx;
        }
        else {
            const x = (d2 + a2 - b2)/(2*d2), y = Math.sqrt(Math.max(0, a2/d2 - x*x));
            c.x = a.x + x*dx - y*dy; c.y = a.y + x*dy + y*dx;
        }
    }
    else { c.x = a.x + c.r; c.y = a.y; }
}

function pack_intersects(a, b) {
    const dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
    return dr>0 && dr*dr>dx*dx + dy*dy;
}

function pack_score(node) {
    const a = node.c, b = node.next.c, ab = a.r + b.r;
    const dx = (a.x*b.r + b.x*a.r)/ab, dy = (a.y*b.r + b.y*a.r)/ab;
    return dx*dx + dy*dy;
}

// Places the circles {r} side by side around (0, 0); returns the radius of the enclosing circle
function pack_siblings(circles) {
    const n = circles.length;
    if(n==0) return 0;
    let a = circles[0], b, c;
    a.x = 0; a.y = 0;
    if(n==1) return a.r;
    b = circles[1];
    a.x = -b.r; b.x = a.r; b.y = 0;
    if(n==2) return a.r + b.r;
    pack_place(b, a, c = circles[2]);
    a = {'c': a}; b = {'c': b}; c = {'c': c};
    a.next = c.previous = b;
    b.next = a.previous = c;
    c.next = b.previous = a;
    pack: for(let i=3; i<n; i++) {
        pack_place(a.c, b.c, circles[i]);
        c = {'c': circles[i]};
        let j = b.next, k = a.previous, sj = b.c.r, sk = a.c.r;
        do {
            if(sj<=sk) {
                if(pack_intersects(j.c, c.c)) { b = j; a.next = b; b.previous = a; i--; continue pack; }
                sj += j.c.r; j = j.next;
            }
            else {
                if(pack_intersects(k.c, c.c)) { a = k; a.next = b; b.previous = a; i--; continue pack; }
                sk += k.c.r; k = k.previous;
            }
        } while(j!==k.next);
        c.previous = a; c.next = b; a.next = b.previous = b = c;
        let aa = pack_score(a);
        while((c = c.next)!==b) { const ca = pack_score(c); if(ca<aa) { a = c; aa = ca; } }
        b = a.next;
    }
    const chain = [b.c];
    for(c = b.next; c!==b; c = c.next) chain.push(c.c);
    const e = pack_enclose(chain, circles);
    circles.forEach((o) => { o.x -= e.x; o.y -= e.y; });
    return e.r;
}

// Smallest circle enclosing circles (Welzl, move-to-front); falls back on a simple enclosing circle
function pack_enclose(chain, all) {
    const weak = (a, b) => { const dr = a.r - b.r + Math.max(a.r, b.r, 1)*1e-9, dx = b.x - a.x, dy = b.y - a.y; return dr>0 && dr*dr>dx*dx + dy*dy; };
    const not = (a, b) => { const dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y; return dr<0 || dr*dr<dx*dx + dy*dy; };
    const weak_all = (a, B) => B.every((b) => weak(a, b));
    const basis2 = (a, b) => {
        const x21 = b.x - a.x, y21 = b.y - a.y, r21 = b.r - a.r, l = Math.hypot(x21, y21);
        return {'x': (a.x + b.x + x21/l*r21)/2, 'y': (a.y + b.y + y21/l*r21)/2, 'r': (l + a.r + b.r)/2};
    };
    const basis3 = (a, b, c) => {
        const x1 = a.x, y1 = a.y, r1 = a.r, a2 = x1 - b.x, a3 = x1 - c.x, b2 = y1 - b.y, b3 = y1 - c.y, c2 = b.r - r1, c3 = c.r - r1;
        const d1 = x1*x1 + y1*y1 - r1*r1, d2 = d1 - b.x*b.x - b.y*b.y + b.r*b.r, d3 = d1 - c.x*c.x - c.y*c.y + c.r*c.r;
        const ab = a3*b2 - a2*b3, xa = (b2*d3 - b3*d2)/(ab*2) - x1, xb = (b3*c2 - b2*c3)/ab;
        const ya = (a3*d2 - a2*d3)/(ab*2) - y1, yb = (a2*c3 - a3*c2)/ab;
        const A = xb*xb + yb*yb - 1, B = 2*(r1 + xa*xb + ya*yb), C = xa*xa + ya*ya - r1*r1;
        const r = -(Math.abs(A)>1e-6 ? (B + Math.sqrt(B*B - 4*A*C))/(2*A) : C/B);
        return {'x': x1 + xa + xb*r, 'y': y1 + ya + yb*r, r};
    };
    const basis = (B) => B.length==1 ? {'x': B[0].x, 'y': B[0].y, 'r': B[0].r} : B.length==2 ? basis2(B[0], B[1]) : basis3(B[0], B[1], B[2]);
    const extend = (B, p) => {
        if(weak_all(p, B)) return [p];
        for(let i=0; i<B.length; i++) {
            if(not(p, B[i]) && weak_all(basis2(B[i], p), B)) return [B[i], p];
        }
        for(let i=0; i<B.length-1; i++) {
            for(let j=i+1; j<B.length; j++) {
                if(not(basis2(B[i], B[j]), p) && not(basis2(B[i], p), B[j]) && not(basis2(B[j], p), B[i]) && weak_all(basis3(B[i], B[j], p), B)) return [B[i], B[j], p];
            }
        }
        throw new Error('enclose');
    };
    try {
        let i = 0, B = [], e = null;
        while(i<chain.length) {
            const p = chain[i];
            if(e && weak(e, p)) i++;
            else { B = extend(B, p); e = basis(B); i = 0; }
        }
        if(e && isFinite(e.x) && isFinite(e.y) && isFinite(e.r) && all.every((o) => Math.hypot(o.x - e.x, o.y - e.y) + o.r<=e.r*1.001 + 1e-6)) return e;
    }
    catch(error) { /* degenerate case: simple circle below */ }
    const x = all.reduce((s, o) => s + o.x, 0)/all.length, y = all.reduce((s, o) => s + o.y, 0)/all.length;
    return {x, y, 'r': Math.max(...all.map((o) => Math.hypot(o.x - x, o.y - y) + o.r))};
}

// Packs the tree: a company is a disc sized by its headcount (log scale), a cluster the smallest
// circle around its children (so its area follows its number of companies)
function graph_pack(node) {
    if(node.children.length==0) {
        node.r = node_radius(GRAPH['features'][node.k].e);
        return;
    }
    node.children.forEach(graph_pack);
    const pad = node.children.some((c) => c.children.length>0) ? 5 : 2;
    // biggest first, then by name: deterministic and compact
    const name = (n) => n.k!==undefined ? company_data['Listing'][n.k]['Name'] : n.label;
    const order = node.children.slice().sort((a, b) => b.r - a.r || compare_fr(name(a), name(b)));
    const circles = order.map((c) => ({'r': c.r + pad, 'node': c}));
    node.r = pack_siblings(circles) + pad;
    circles.forEach((o) => { o.node.dx = o.x; o.node.dy = o.y; });
    if(node.parent==null) graph_place(node, 0, 0);
}

// Absolute positions from the positions relative to the parent
function graph_place(node, x, y) {
    node.x = x; node.y = y;
    node.children.forEach((c) => graph_place(c, x + c.dx, y + c.dy));
}

const is_ancestor = (a, n) => { for(; n; n = n.parent) if(n==a) return true; return false; };
const node_name = (n) => n.k!==undefined ? company_data['Listing'][n.k]['Name'] : n.label;
const node_count = (n) => `${n.ids.length} entreprise${n.ids.length>1 ? 's' : ''}`;

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function display_graph(entries) {
    graph_features();
    const index = new Map(company_data['Listing'].map((e, k) => [e, k]));
    GRAPH['selection'] = entries.map((e) => index.get(e));
    // zones present in the selection, for the zone filter
    const F = GRAPH['features'];
    const zones = new Map();
    GRAPH['selection'].forEach((k) => F[k].zones.forEach((z) => zones.set(z, (zones.get(z) || 0) + 1)));
    const current = GRAPH['zone'].value;
    GRAPH['zone'].innerHTML = '<option value="">Toutes</option>' + [...zones.entries()]
        .sort((a, b) => b[1] - a[1] || compare_fr(a[0], b[0]))
        .map(([z, N]) => `<option value="${esc(z)}"${z==current ? ' selected' : ''}>${esc(z)} (${N})</option>`).join('');
    GRAPH['trail'] = []; // a new selection starts again from the top
    graph_render();
}

const is_company = (item) => typeof item=='number';
const reduced_motion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function graph_crumb() {
    const crumb = ['Sélection'].concat(GRAPH['trail'].map((item) => is_company(item) ? company_data['Listing'][item]['Name'] : item.label));
    GRAPH['crumb'].innerHTML = crumb.map((label, j) => j<crumb.length-1
        ? `<button type="button" class="graph-crumb-link" data-depth="${j}">${esc(label)}</button>`
        : `<span aria-current="page">${esc(label)}</span>`).join(' <span aria-hidden="true">›</span> ');
}

// Size of the drawing: the width of the page, about square (circles), in screen pixels
function graph_size() {
    const W = Math.max(280, Math.min(1400, GRAPH['stage'].clientWidth || GRAPH['element'].clientWidth || 1000));
    return [W, Math.round(Math.max(300, Math.min(620, W)))];
}

function graph_render() {
    GRAPH['busy'] = false;
    GRAPH['svg'].classList.remove('is-zooming');
    graph_tip(null);
    const F = GRAPH['features'], zone = GRAPH['zone'].value;
    const ids = GRAPH['selection'].filter((k) => zone=='' || F[k].zones.includes(zone));
    const tree = ids.length>=2 ? graph_tree(ids) : null;
    const trail = GRAPH['trail'];
    // a company asked from elsewhere (card, map): shown at its place in the tree
    if(tree && trail.length==1 && is_company(trail[0]) && tree.leaf.has(trail[0])) {
        const path = [];
        for(let n = tree.leaf.get(trail[0]).parent; n && n.parent; n = n.parent) path.unshift(n);
        GRAPH['trail'] = path.concat(trail);
    }
    graph_crumb();
    const last = GRAPH['trail'][GRAPH['trail'].length - 1];
    if(is_company(last)) {
        const previous = GRAPH['trail'][GRAPH['trail'].length - 2];
        GRAPH['up'].hidden = false;
        GRAPH['up'].textContent = is_company(previous) ? `↑ Retour à ${company_data['Listing'][previous]['Name']}` : '↑ Revenir aux grappes';
        graph_neighbors(last);
    }
    else graph_pack_view(tree, ids.length, last || null);
    GRAPH['svg'].classList.remove('is-entering');
    void GRAPH['svg'].getBBox();  // restart the fade-in
    GRAPH['svg'].classList.add('is-entering');
}

// Draws all the circles of the tree once; a zoom only changes the transform of the drawing
function graph_pack_view(tree, N, focus) {
    const svg = GRAPH['svg'];
    svg.innerHTML = '';
    GRAPH['rows'].innerHTML = '';
    if(tree==null) {
        GRAPH['focus'] = null;
        svg.setAttribute('viewBox', '0 0 640 60');
        GRAPH['up'].hidden = true;
        GRAPH['info'].textContent = N==0 ? 'Aucune entreprise dans cette sélection.' : 'Une seule entreprise dans cette sélection : élargir les filtres pour comparer.';
        return;
    }
    const [W, H] = graph_size();
    GRAPH['W'] = W; GRAPH['H'] = H;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg_el('rect', {'x': 0, 'y': 0, 'width': W, 'height': H, 'class': 'graph-bg'}, svg);
    const g = svg_el('g', {'class': 'graph-pack'}, svg);
    const F = GRAPH['features'], listing = company_data['Listing'];
    for(const n of tree.nodes) {
        const leaf = n.k!==undefined;
        const attributes = {'cx': n.x.toFixed(2), 'cy': n.y.toFixed(2), 'r': n.r.toFixed(2), 'data-n': n.id, 'vector-effect': 'non-scaling-stroke'};
        if(leaf && !F[n.k].e) attributes['class'] = 'is-unknown';
        n.el = svg_el('circle', attributes, g);
        n.base = leaf ? (F[n.k].e ? 'graph-company-dot' : 'graph-company-dot is-unknown')
            : n.parent==null ? 'graph-root' : `graph-group depth-${Math.min(4, n.depth)}${n.single ? ' is-single' : n.parent.single || n.parent.in_single ? ' in-single' : ''}`;
        n.in_single = n.parent!=null && (n.parent.single || n.parent.in_single);
    }
    GRAPH['labels'] = svg_el('g', {'class': 'graph-labels'}, svg);
    graph_focus(focus || tree.root, false);
}

// Viewport transform showing the circle v = {x, y, r}
function graph_transform(v) {
    const W = GRAPH['W'], H = GRAPH['H'], k = (Math.min(W, H) - 12)/(2*v.r);
    return {k, 'tx': W/2 - v.x*k, 'ty': H/2 - v.y*k};
}

function graph_apply_view(v) {
    const t = graph_transform(v);
    GRAPH['view'] = v;
    GRAPH['svg'].querySelector('.graph-pack').setAttribute('transform', `translate(${t.tx.toFixed(2)},${t.ty.toFixed(2)}) scale(${t.k.toFixed(5)})`);
}

// Focus on a node of the tree: its children are the current level (labelled, clickable), its
// grandchildren are drawn inside them, its companies are always visible
function graph_focus(focus, animate, from_keyboard, back_from) {
    const tree = GRAPH['tree'];
    GRAPH['focus'] = focus;
    const path = [];
    for(let n = focus; n && n.parent; n = n.parent) path.unshift(n);
    GRAPH['trail'] = path;
    graph_crumb();
    graph_tip(null);
    // classes: current level, inside, outside
    for(const n of tree.nodes) {
        const inside = n!=focus && is_ancestor(focus, n);
        const rel = n==focus ? 'is-focus' : !inside ? 'is-outside'
            : n.parent==focus ? 'is-level' : n.k!==undefined ? 'is-inner' : n.depth==focus.depth + 2 ? 'is-inner' : 'is-deep';
        n.el.setAttribute('class', `${n.base} ${rel}`);
        if(rel=='is-level') {
            n.el.setAttribute('tabindex', 0);
            n.el.setAttribute('role', 'button');
            n.el.setAttribute('aria-label', n.k!==undefined ? `${node_name(n)} : voir les entreprises proches`
                : `Grappe ${node_name(n)}, ${node_count(n)} : entrer`);
        }
        else ['tabindex', 'role', 'aria-label'].forEach((a) => n.el.removeAttribute(a));
    }
    GRAPH['up'].hidden = focus.parent==null;
    GRAPH['up'].textContent = focus.parent ? `↑ Remonter${focus.parent.parent ? ' à « ' + focus.parent.label + ' »' : ' à la sélection'}` : '';
    graph_info(focus);
    GRAPH['labels'].innerHTML = '';
    // a small cluster is not magnified more than GRAPH_MAX_SCALE: its neighbours stay in sight around it
    const target = {'x': focus.x, 'y': focus.y, 'r': Math.max(focus.r, (Math.min(GRAPH['W'], GRAPH['H']) - 12)/(2*GRAPH_MAX_SCALE))};
    const done = () => {
        GRAPH['busy'] = false;
        GRAPH['svg'].classList.remove('is-zooming');
        graph_apply_view(target);
        graph_labels(focus);
        // keyboard: on the circle we come from when going up, else on the first circle
        if(from_keyboard) (back_from?.parent==focus ? back_from.el : GRAPH['svg'].querySelector('.is-level'))?.focus();
    };
    if(!animate || GRAPH['view']==null || reduced_motion()) return done();
    graph_animate(GRAPH['view'], target, 650, done);
}

// Continuous zoom from the circle a to the circle b: center moved linearly, radius geometrically
// (the apparent speed stays even), ease in and out
function graph_animate(a, b, D, done) {
    GRAPH['busy'] = true;
    GRAPH['svg'].classList.add('is-zooming');
    let finished = false;
    const finish = () => { if(!finished) { finished = true; done(); } };
    const t0 = performance.now();
    const step = (now) => {
        if(finished) return;  // a late frame must not move the final picture
        const t = Math.min(1, (now - t0)/D), e = t<0.5 ? 4*t*t*t : 1 - Math.pow(2 - 2*t, 3)/2;
        graph_apply_view({'x': a.x + (b.x - a.x)*e, 'y': a.y + (b.y - a.y)*e, 'r': a.r*Math.pow(b.r/a.r, e)});
        if(t<1) requestAnimationFrame(step); else finish();
    };
    requestAnimationFrame(step);
    setTimeout(finish, D + 250);  // animation frames are paused in a hidden tab: finish anyway
}

// Lines of a label inside a circle: one term of the name per line (at most 3), each line of at most
// `max` characters (ellipsis when longer)
function wrap_label(text, max) {
    const cut = (t) => t.length<=max ? t : t.slice(0, max - 1).trim() + '…';
    if(text.length<=max) return [text];
    const parts = text.split(' · ');
    const lines = [];
    for(const part of parts) {
        const last = lines.length - 1;
        if(last>=0 && (lines[last] + ' · ' + part).length<=max) lines[last] += ' · ' + part;
        else lines.push(part);
    }
    return lines.slice(0, 3).map(cut);
}

// Names of the current level, in screen coordinates: the clusters inside their circle (never much
// wider than it), then the companies under their disc when there is room (no overlap)
function graph_labels(focus) {
    const t = graph_transform(GRAPH['view']), layer = GRAPH['labels'];
    layer.innerHTML = '';
    const W = GRAPH['W'], H = GRAPH['H'], placed = [];
    const free = (b) => b.x0>=2 && b.x1<=W - 2 && b.y0>=2 && b.y1<=H - 2
        && placed.every((o) => b.x1<o.x0 || b.x0>o.x1 || b.y1<o.y0 || b.y0>o.y1);
    if(!GRAPH['up'].hidden) placed.push({'x0': 0, 'x1': GRAPH['up'].offsetWidth + 12, 'y0': 0, 'y1': 44});  // under the button
    const screen = (n) => ({n, 'x': t.tx + n.x*t.k, 'y': t.ty + n.y*t.k, 'r': n.r*t.k});
    const items = focus.children.map(screen).sort((a, b) => b.r - a.r);
    for(const {n, x, y, r} of items.filter((i) => i.n.k===undefined)) {
        if(r<12) continue;
        const max = Math.floor(1.9*r/6.8), count = String(n.ids.length);
        const lines = max<7 ? [] : wrap_label(n.label, max).slice(0, Math.max(1, Math.min(3, Math.floor((1.7*r - 12)/15))));
        const below = lines.length==0 ? count : r>55 ? node_count(n) : count;
        const top = y - (lines.length*15)/2 + 4;
        const width = Math.max(below.length*6.2, ...lines.map((l) => l.length*6.8));
        const box = {'x0': x - width/2, 'x1': x + width/2, 'y0': top - 12, 'y1': top + lines.length*15 + 3};
        if(!free(box)) continue;
        placed.push(box);
        lines.forEach((line, i) => svg_text(line, {'x': x.toFixed(1), 'y': (top + i*15).toFixed(1), 'text-anchor': 'middle', 'class': 'graph-group-label'}, layer));
        svg_text(below, {'x': x.toFixed(1), 'y': (top + lines.length*15).toFixed(1), 'text-anchor': 'middle', 'class': 'graph-count'}, layer);
    }
    for(const {n, x, y, r} of items.filter((i) => i.n.k!==undefined)) {
        if(r<6) continue;  // too small: the name shows on hover and in the list
        const max = Math.max(8, Math.floor((2*r + 50)/6.2));
        const name = node_name(n).length>max ? node_name(n).slice(0, max - 1) + '…' : node_name(n);
        const width = name.length*6.2;
        const box = {'x0': x - width/2, 'x1': x + width/2, 'y0': y + r + 1, 'y1': y + r + 15};
        if(!free(box)) continue;
        placed.push(box);
        svg_text(name, {'x': x.toFixed(1), 'y': (y + r + 12).toFixed(1), 'text-anchor': 'middle', 'class': 'graph-leaf-label'}, layer);
    }
}

// Text above the list, and the list of the current level (also the text alternative of the drawing)
function graph_info(focus) {
    const F = GRAPH['features'], listing = company_data['Listing'], zone = GRAPH['zone'].value;
    const groups = focus.children.filter((c) => c.k===undefined), loose = focus.children.filter((c) => c.k!==undefined);
    const top = focus.parent==null;
    const name = top ? `Sélection${zone ? ' (' + esc(zone) + ')' : ''}` : `« ${esc(focus.label)} »`;
    const sub = top ? 'grappe' : 'sous-grappe';
    const legend = `<span class="graph-key"><span class="graph-key-group" aria-hidden="true"></span>grappe d'entreprises proches</span>`
        + `<span class="graph-key"><span class="graph-key-dot" aria-hidden="true"></span>entreprise, taille selon l'effectif</span>`
        + `<span class="graph-key"><span class="graph-key-dot is-unknown" aria-hidden="true"></span>effectif inconnu</span>`;
    let text;
    if(groups.length==0) text = (top ? `Ces entreprises ont des profils trop variés pour être regroupées. ` : `Ces entreprises ont des profils trop proches pour être redécoupées. `) + `Cliquer une entreprise pour voir ses plus proches voisines.`;
    else text = (top ? `Les entreprises aux profils proches (thèmes, mots-clés, taille) sont regroupées en cercles, nommés par ce que partagent la plupart de leurs membres. `
                     : `Cette grappe est redécoupée en groupes plus proches, nommés par ce qui les distingue du reste de la grappe. `)
        + `Cliquer un cercle pour y entrer${loose.length ? ', une entreprise pour voir ses plus proches voisines' : ''}${top ? '' : ' ; cliquer à côté pour remonter'}.`;
    const counts = [groups.filter((c) => !c.single).length ? `${groups.filter((c) => !c.single).length} ${sub}${groups.filter((c) => !c.single).length>1 ? 's' : ''}` : '',
        loose.length && groups.length ? `${loose.length} hors ${sub}` : '',
        groups.some((c) => c.single) ? `${groups.find((c) => c.single).ids.length} profils singuliers` : ''].filter((s) => s).join(', ');
    GRAPH['info'].innerHTML = `<strong>${name} : ${node_count(focus)}${counts ? ', ' + counts : ''}.</strong> ${text}`
        + (top || !focus.tags?.length ? '' : `<br><span class="graph-keywords">${esc(focus.tags.join(' · '))}</span>`)
        + `<p class="graph-legend">${legend}</p>`;
    const median = (ids) => {
        const sizes = ids.map((k) => F[k].e).filter((e) => e).sort((a, b) => a - b);
        return sizes.length ? ` · taille médiane ~${sizes[Math.floor(sizes.length/2)]} pers.` : '';
    };
    const company = (k) => `<button type="button" class="graph-company" data-k="${k}">${esc(listing[k]['Name'])}</button>`;
    GRAPH['rows'].innerHTML = groups.map((c) => {
        const title = `<button type="button" class="graph-zoom" data-n="${c.id}" aria-label="${esc(c.label)}, ${node_count(c)} : entrer dans la grappe">${esc(c.label)} <span aria-hidden="true">›</span></button>`;
        const inner = c.children.filter((s) => s.k===undefined).length;
        return `<div class="graph-row" data-n="${c.id}"><span class="graph-swatch depth-${Math.min(4, c.depth)}${c.single ? ' is-single' : c.in_single ? ' in-single' : ''}" aria-hidden="true"></span>`
            + `<div>${title} <span class="graph-muted">${c.ids.length}${inner ? ` · ${inner} sous-grappes` : ''}</span><div class="graph-why">${esc(c.tags.join(' · '))}${median(c.ids)}</div></div>`
            + `<div class="graph-why">${c.ids.slice().sort((a, b) => compare_fr(listing[a]['Name'], listing[b]['Name'])).map(company).join(', ')}</div></div>`;
    }).join('') + loose.map((c) => {
        const f = F[c.k];
        return `<div class="graph-row" data-n="${c.id}"><span class="graph-swatch is-company${f.e ? '' : ' is-unknown'}" aria-hidden="true"></span>`
            + `<div>${company(c.k)} <span class="graph-muted">${size_text(f.e)}</span></div>`
            + `<div class="graph-why">${esc(f.s.concat(f.a).map(short_theme).join(', '))}${f.k.length ? ' · ' + esc(f.k.slice(0, 6).join(', ')) : ''}${f.zones.length ? ' · ' + esc(f.zones.join(', ')) : ''}</div></div>`;
    }).join('');
}

// Tooltip of the circle under the pointer (the circle of the current level containing it)
function graph_tip(node, event, hovered) {
    const tip = GRAPH['tip'];
    if(node==null) { tip.hidden = true; return; }
    const F = GRAPH['features'];
    let html;
    if(node.k!==undefined) {
        const f = F[node.k];
        html = `<strong>${esc(node_name(node))}</strong><br>${size_text(f.e)}${f.zones.length ? ' · ' + esc(f.zones.join(', ')) : ''}<br><span class="graph-tip-hint">Cliquer : entreprises les plus proches</span>`;
    }
    else {
        html = `<strong>${esc(node.label)}</strong> · ${node_count(node)}`
            + (node.tags.length ? `<br><span class="graph-tip-tags">${esc(node.tags.slice(0, 4).join(' · '))}</span>` : '')
            + (hovered && hovered!=node && hovered.k!==undefined ? `<br>Point survolé : ${esc(node_name(hovered))} (${size_text(F[hovered.k].e)})` : '')
            + `<br><span class="graph-tip-hint">Cliquer : entrer dans la grappe</span>`;
    }
    tip.innerHTML = html;
    tip.hidden = false;
    const box = GRAPH['stage'].getBoundingClientRect();
    const x = event.clientX - box.left, y = event.clientY - box.top;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = Math.max(4, Math.min(box.width - w - 4, x + 14)) + 'px';
    tip.style.top = (y + 18 + h>box.height ? Math.max(4, y - h - 12) : y + 18) + 'px';
}

function graph_width() {
    return Math.max(640, Math.min(1400, GRAPH['element'].clientWidth || 1000));
}

function graph_neighbors(k0) {
    const F = GRAPH['features'], listing = company_data['Listing'], me = F[k0];
    const neighbors = listing.map((e, k) => k).filter((k) => k!=k0)
        .map((k) => { const parts = similarity_parts(me, F[k]); return {k, parts, 'v': parts.reduce((s, v) => s + v, 0)}; })
        .sort((a, b) => b.v - a.v || compare_fr(listing[a.k]['Name'], listing[b.k]['Name'])).slice(0, GRAPH_NEIGHBORS);
    const svg = GRAPH['svg'];
    svg.innerHTML = '';
    const W = graph_width(), H = 520, cx = W*0.4, cy = H/2;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    // neighbors around the company: the more similar, the closer
    const g_links = svg_el('g', {}, svg), g_nodes = svg_el('g', {}, svg);
    const place = neighbors.map((n, i) => {
        const angle = -Math.PI/2 + 2*Math.PI*i/neighbors.length;
        const d = 70 + 330*(1 - n.v);
        return {...n, 'x': cx + Math.cos(angle)*d*(W>900 ? 1.25 : 1), 'y': cy + Math.sin(angle)*d*0.62, 'r': node_radius(F[n.k].e)};
    });
    for(const n of place) {
        svg_el('line', {'x1': cx, 'y1': cy, 'x2': n.x.toFixed(1), 'y2': n.y.toFixed(1), 'stroke': '#888780', 'stroke-opacity': (0.3 + 0.5*n.v).toFixed(2), 'stroke-width': (0.5 + 4*n.v).toFixed(1), 'class': 'graph-link', 'data-k': n.k}, g_links);
    }
    const draw = (k, x, y, r, label, center) => {
        const g = svg_el('g', {'class': 'graph-node' + (center ? ' is-center' : ''), 'transform': `translate(${x.toFixed(1)},${y.toFixed(1)})`, 'data-k': k}, g_nodes);
        if(!center) { g.setAttribute('tabindex', 0); g.setAttribute('role', 'button'); g.setAttribute('aria-label', `${listing[k]['Name']}, voir ses entreprises proches`); }
        svg_el('circle', {'r': r.toFixed(1), 'fill': F[k].e ? (center ? '#3C3489' : '#7F77DD') : 'white', 'stroke': F[k].e ? 'white' : '#7F77DD', 'stroke-dasharray': F[k].e ? '' : '2 2', 'stroke-width': 1.3}, g);
        svg_text(label, {'x': (r + 3).toFixed(1), 'y': 4, 'class': 'graph-node-label is-named'}, g);
    };
    place.forEach((n) => draw(n.k, n.x, n.y, n.r, `${listing[n.k]['Name']} ${Math.round(100*n.v)} %`, false));
    draw(k0, cx, cy, Math.max(12, node_radius(me.e)), listing[k0]['Name'], true);

    const themes = me.s.concat(me.a).join(', ');
    const carto = carto_link(listing[k0]);
    const goto_map = carto ? `<a class="graph-goto" href="${esc(carto)}" target="_blank" rel="noopener">Sur la carte${NEW_TAB}</a>`
        : (company_on_map(listing[k0]) ? `<button type="button" class="graph-goto" data-goto="map" data-k="${k0}">Sur la carte</button>` : '');
    GRAPH['info'].innerHTML = `<div class="graph-goto-row"><button type="button" class="graph-goto" data-goto="card" data-k="${k0}">Fiche</button>${goto_map}</div>`
        + `<strong>${esc(listing[k0]['Name'])}</strong> · ${size_text(me.e)}${me.zones.length ? ' · ' + esc(me.zones.join(', ')) : ''}<br>`
        + `${esc(themes)}${me.k.length ? '<br><span class="graph-keywords">' + esc(me.k.join(', ')) + '</span>' : ''}`
        + `<p class="graph-legend">Ressemblance : ${GRAPH_WEIGHTS.map((w) => `<span class="graph-swatch" style="background:${w.color}"></span>${w.label} (${Math.round(100*w.w)} %)`).join(' ')}</p>`;
    GRAPH['rows'].innerHTML = place.map((n) => {
        const f = F[n.k];
        const shared = (x, y) => x.filter((v) => y.includes(v));
        const why = [
            shared(f.s, me.s).length ? 'scientifique : ' + shared(f.s, me.s).join(', ') : '',
            shared(f.a, me.a).length ? 'application : ' + shared(f.a, me.a).join(', ') : '',
            shared(f.k, me.k).length ? 'mots-clés : ' + shared(f.k, me.k).join(', ') : '',
        ].filter((t) => t!='').join(' · ') || 'peu de points communs';
        const bar = n.parts.map((p, i) => `<span style="width:${Math.round(140*p)}px;background:${GRAPH_WEIGHTS[i].color}"></span>`).join('');
        return `<div class="graph-row is-neighbor" data-k="${n.k}"><div><button type="button" class="graph-company" data-k="${n.k}">${esc(listing[n.k]['Name'])}</button> <span class="graph-muted">${Math.round(100*n.v)} %</span></div>`
            + `<div class="graph-bar" aria-hidden="true">${bar}</div>`
            + `<div class="graph-why">${esc(why)} · <span class="graph-muted">${size_text(f.e)}${f.zones.length ? ', ' + esc(f.zones.join(', ')) : ''}</span></div></div>`;
    }).join('');
}

// ---------------------------------------------------------------------------
// Interactions
// ---------------------------------------------------------------------------

const in_neighbors = () => is_company(GRAPH['trail'][GRAPH['trail'].length - 1]);

// Neighbors of a company; from the circles, the view first zooms on its disc
function graph_open(k) {
    if(GRAPH['busy']) return;
    const tree = GRAPH['tree'], node = tree?.leaf.get(k);
    const go = () => {
        GRAPH['trail'] = GRAPH['trail'].concat([k]);
        graph_render();
        if(GRAPH['element'].getBoundingClientRect().top<0) scroll_to(GRAPH['element']);
    };
    if(in_neighbors() || node==null || node.el==null || !node.el.isConnected || reduced_motion()) return go();
    GRAPH['labels'].innerHTML = '';
    graph_tip(null);
    graph_animate(GRAPH['view'], {'x': node.x, 'y': node.y, 'r': node.r*4}, 450, go);
}

// The circle of the current level containing the node n (null: outside the current circle)
function level_node(n) {
    const focus = GRAPH['focus'];
    if(n==null || n==focus || !is_ancestor(focus, n)) return null;
    while(n.parent!=focus) n = n.parent;
    return n;
}

function graph_enter(n, from_keyboard) {
    if(GRAPH['busy'] || n==null) return;
    if(n.k!==undefined) return graph_open(n.k);
    graph_focus(n, true, from_keyboard);
}

function graph_up(from_keyboard) {
    if(GRAPH['busy']) return;
    if(in_neighbors()) { GRAPH['trail'].pop(); graph_render(); return; }
    const focus = GRAPH['focus'];
    if(focus?.parent) graph_focus(focus.parent, true, from_keyboard, focus);
}

const node_of = (target) => {
    const circle = target.closest?.('circle[data-n]');
    return circle && GRAPH['tree'] ? GRAPH['tree'].nodes[+circle.dataset.n] : null;
};

function graph_hover(n) {
    GRAPH['svg'].querySelectorAll('.is-hover').forEach((e) => e.classList.remove('is-hover'));
    GRAPH['rows'].querySelectorAll('.graph-row.is-active').forEach((e) => e.classList.remove('is-active'));
    if(n==null) return;
    n.el.classList.add('is-hover');
    GRAPH['rows'].querySelector(`.graph-row[data-n="${n.id}"]`)?.classList.add('is-active');
}

GRAPH['svg'].addEventListener('click', (event) => {
    if(GRAPH['busy']) return;
    if(in_neighbors()) {
        const node = event.target.closest('.graph-node');
        if(node && !node.classList.contains('is-center')) graph_open(+node.dataset.k);
        return;
    }
    const n = node_of(event.target);
    const level = level_node(n);
    if(level) graph_enter(level, false);
    else if(n!=GRAPH['focus']) graph_up(false);  // a click beside the current circle goes up
});
GRAPH['svg'].addEventListener('keydown', (event) => {
    if(event.key=='Escape' || event.key=='Backspace') {
        if(GRAPH['trail'].length>0) { event.preventDefault(); graph_up(true); }
        return;
    }
    if(event.key!='Enter' && event.key!=' ') return;
    if(in_neighbors()) {
        const node = event.target.closest('.graph-node');
        if(node) { event.preventDefault(); if(!node.classList.contains('is-center')) graph_open(+node.dataset.k); }
        return;
    }
    const n = node_of(event.target);
    if(n && n.parent==GRAPH['focus']) { event.preventDefault(); graph_enter(n, true); }
});
GRAPH['svg'].addEventListener('mousemove', (event) => {
    if(GRAPH['busy'] || in_neighbors()) return;
    const n = node_of(event.target), level = level_node(n);
    graph_hover(level);
    graph_tip(level, event, n);
    GRAPH['svg'].classList.toggle('can-go-up', level==null && n!=GRAPH['focus'] && GRAPH['focus']?.parent!=null);
});
GRAPH['svg'].addEventListener('focusin', (event) => {
    if(in_neighbors()) return;
    const n = node_of(event.target);
    graph_hover(n && n.parent==GRAPH['focus'] ? n : null);
});
GRAPH['svg'].addEventListener('mouseover', (event) => {
    if(GRAPH['busy'] || !in_neighbors()) return;
    const node = event.target.closest('.graph-node');
    if(node) graph_highlight('k', node.dataset.k);
});
GRAPH['svg'].addEventListener('mouseleave', () => {
    graph_tip(null);
    if(in_neighbors()) graph_highlight('k', null); else graph_hover(null);
});

// Neighbors view: the hovered company and its row stand out
function graph_highlight(attribute, value) {
    GRAPH['svg'].querySelectorAll('.graph-node').forEach((g) => g.classList.toggle('is-dim', value!=null && g.dataset[attribute]!=value && !g.classList.contains('is-center')));
    GRAPH['svg'].querySelectorAll('.graph-link').forEach((l) => l.classList.toggle('is-active', value!=null && l.dataset[attribute]==value));
    GRAPH['rows'].querySelectorAll('.graph-row').forEach((r) => r.classList.toggle('is-active', value!=null && r.dataset[attribute]==value));
}

GRAPH['rows'].addEventListener('click', (event) => {
    const company = event.target.closest('.graph-company');
    if(company) return graph_open(+company.dataset.k);
    const zoom = event.target.closest('.graph-zoom');
    if(zoom && GRAPH['tree']) {
        graph_enter(GRAPH['tree'].nodes[+zoom.dataset.n], false);
        if(GRAPH['element'].getBoundingClientRect().top<0) scroll_to(GRAPH['element']);
    }
});
GRAPH['rows'].addEventListener('mouseover', (event) => {
    const row = event.target.closest('.graph-row');
    if(!row || GRAPH['busy']) return;
    if(row.dataset.n!=undefined) graph_hover(GRAPH['tree'].nodes[+row.dataset.n]);
    else graph_highlight('k', row.dataset.k);
});
GRAPH['rows'].addEventListener('mouseleave', () => { if(in_neighbors()) graph_highlight('k', null); else graph_hover(null); });
GRAPH['up'].addEventListener('click', () => graph_up(false));
GRAPH['crumb'].addEventListener('click', (event) => {
    const link = event.target.closest('.graph-crumb-link');
    if(!link || GRAPH['busy']) return;
    const depth = +link.dataset.depth;
    if(!in_neighbors() && GRAPH['tree']) {  // going up in the circles: zoom out
        const target = depth==0 ? GRAPH['tree'].root : GRAPH['trail'][depth - 1];
        return graph_focus(target, true, false);
    }
    GRAPH['trail'] = GRAPH['trail'].slice(0, depth);
    graph_render();
});
GRAPH['zone'].addEventListener('change', () => { GRAPH['trail'] = []; graph_render(); });
GRAPH['info'].addEventListener('click', (event) => {
    const button = event.target.closest('.graph-goto');
    if(!button) return;
    if(button.dataset.goto=='card') show_card(+button.dataset.k);
    else show_on_map(+button.dataset.k);
});
// a new width: drawn again at the same place
let graph_resize_timer = null;
let graph_last_width = 0;
window.addEventListener('resize', () => {
    clearTimeout(graph_resize_timer);
    graph_resize_timer = setTimeout(() => {
        const W = GRAPH['stage'].clientWidth;
        if(GRAPH['element'].hidden || W==graph_last_width || GRAPH['busy']) return;
        graph_last_width = W;
        if(!in_neighbors()) graph_render();
    }, 200);
});
