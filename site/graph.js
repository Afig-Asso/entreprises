"use strict";

// ---------------------------------------------------------------------------
// Graph view: companies of the current selection grouped into clusters of similar profiles,
// then, on a click, the most similar companies of a company (whole listing).
// Similarity = shared scientific themes, application themes, keywords (Keywords of data.yaml)
// and size (Employees). Clustering and layout are deterministic: same selection, same picture.
// Uses the globals of listing.js (company_data, UX, esc, compare_fr, french_zone...).
// ---------------------------------------------------------------------------

const GRAPH = {
    'element': document.querySelector('#graph-view'),
    'svg': document.querySelector('#graph-svg'),
    'zone': document.querySelector('#graph-zone'),
    'crumb': document.querySelector('#graph-crumb'),
    'info': document.querySelector('#graph-info'),
    'rows': document.querySelector('#graph-rows'),
    'features': null,  // per company of the listing: {s, a, k, e, zones}
    'selection': [],   // indices (in the listing) of the companies of the current selection
    'trail': [],       // path from the selection: opened clusters {ids, label} and companies (indices in the listing)
    'clusters': [],    // clusters currently drawn
    'cache': null,     // hierarchy of the last first level {key, merges}
};

// Weights of the similarity, and their colors in the explanation bars
const GRAPH_WEIGHTS = [
    {'label': 'domaines scientifiques', 'w': 0.35, 'color': '#534AB7'},
    {'label': "domaines d'application", 'w': 0.15, 'color': '#1D9E75'},
    {'label': 'mots-clés', 'w': 0.35, 'color': '#2a78d6'},
    {'label': 'taille', 'w': 0.15, 'color': '#BA7517'},
];
const GRAPH_COLORS = ['#2a78d6', '#eb6834', '#1baf7a', '#c98500', '#d55181', '#008300', '#6250d6', '#e34948', '#3d8fa8', '#8a5a2b'];
const GRAPH_MAX_CLUSTERS = 16;
const GRAPH_THRESHOLD = 0.36;  // minimal average similarity to merge two clusters (first level)
const GRAPH_SUB_CLUSTERS = 8;  // at most 8 sub-clusters when a cluster is opened
const GRAPH_SUB_COVER = 0.7;   // ...gathering at least 70 % of its companies
const GRAPH_MIN_ZOOM = 4;      // a cluster of at least 4 companies can be opened
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

// Convex hull (monotone chain) of a list of points [x, y]
function convex_hull(points) {
    const P = points.slice().sort((a, b) => a[0]-b[0] || a[1]-b[1]);
    if(P.length<3) return P;
    const cross = (o, a, b) => (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0]);
    const lower = [], upper = [];
    for(const p of P) { while(lower.length>=2 && cross(lower[lower.length-2], lower[lower.length-1], p)<=0) lower.pop(); lower.push(p); }
    for(const p of P.slice().reverse()) { while(upper.length>=2 && cross(upper[upper.length-2], upper[upper.length-1], p)<=0) upper.pop(); upper.push(p); }
    return lower.slice(0, -1).concat(upper.slice(0, -1));
}

// Deterministic layout of the clusters: each cluster around its center (sunflower spiral, biggest
// companies in the middle), then a few passes to remove the overlaps
function layout_clusters(nodes, centers) {
    const by_cluster = new Map();
    nodes.forEach((n) => { if(!by_cluster.has(n.c)) by_cluster.set(n.c, []); by_cluster.get(n.c).push(n); });
    for(const [c, list] of by_cluster) {
        list.sort((a, b) => (b.e||0) - (a.e||0) || a.k - b.k);
        list.forEach((n, i) => {
            const r = 9*Math.sqrt(i), angle = i*2.39996;
            n.x = centers[c][0] + r*Math.cos(angle);
            n.y = centers[c][1] + r*Math.sin(angle);
        });
    }
    for(let pass=0; pass<120; pass++) {
        for(let i=0; i<nodes.length; i++) {
            const a = nodes[i];
            for(let j=i+1; j<nodes.length; j++) {
                const b = nodes[j];
                const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 0.01;
                const min = a.r + b.r + (a.c==b.c ? 2 : 14);
                if(d<min) {
                    const push = (min - d)/2, ux = dx/d, uy = dy/d;
                    a.x -= ux*push; a.y -= uy*push; b.x += ux*push; b.y += uy*push;
                }
            }
        }
        for(const n of nodes) { // keep each cluster compact
            n.x += (centers[n.c][0] - n.x)*0.02;
            n.y += (centers[n.c][1] - n.y)*0.02;
        }
    }
}

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
    GRAPH['trail'] = []; // a new selection starts again from the clusters
    graph_render();
}

const is_company = (item) => typeof item=='number';

function graph_render() {
    const crumb = ['Sélection'].concat(GRAPH['trail'].map((item) => is_company(item) ? company_data['Listing'][item]['Name'] : item.label));
    GRAPH['crumb'].innerHTML = crumb.map((label, j) => j<crumb.length-1
        ? `<button type="button" class="graph-crumb-link" data-depth="${j}">${esc(label)}</button>`
        : `<span aria-current="page">${esc(label)}</span>`).join(' <span aria-hidden="true">›</span> ');
    const last = GRAPH['trail'][GRAPH['trail'].length - 1];
    if(is_company(last)) graph_neighbors(last);
    else graph_overview(last || null);
    GRAPH['svg'].classList.remove('is-entering');
    void GRAPH['svg'].getBBox();  // restart the fade-in
    GRAPH['svg'].classList.add('is-entering');
}

function graph_width() {
    return Math.max(640, Math.min(1400, GRAPH['element'].clientWidth || 1000));
}

// Clusters of the selection (level = null), or sub-clusters of an opened cluster (level = {ids, label})
function graph_overview(level) {
    const F = GRAPH['features'], listing = company_data['Listing'];
    const zone = GRAPH['zone'].value;
    const ids = level ? level.ids : GRAPH['selection'].filter((k) => zone=='' || F[k].zones.includes(zone));
    const svg = GRAPH['svg'];
    svg.innerHTML = '';
    GRAPH['rows'].innerHTML = '';
    GRAPH['clusters'] = [];
    if(ids.length<2) {
        svg.setAttribute('viewBox', '0 0 640 60');
        GRAPH['info'].textContent = ids.length==0 ? 'Aucune entreprise dans cette sélection.' : 'Une seule entreprise dans cette sélection : élargir les filtres pour comparer.';
        return;
    }
    // themes and keywords shared by (nearly) all the companies shown: they come from the filters or
    // from the opened cluster, so they are not used to name the clusters
    const common = new Set();
    for(const field of ['k', 'a', 's']) {
        const label = (v) => field=='k' ? v : short_theme(v);
        const count = new Map();
        ids.forEach((k) => new Set(F[k][field].map(label)).forEach((v) => count.set(v, (count.get(v) || 0) + 1)));
        count.forEach((n, v) => { if(n>=0.8*ids.length) common.add(field + v); });
    }
    // whole hierarchy of these companies (kept: going back up or down again is immediate)
    let merges;
    if(level) merges = level.merges ||= graph_dendrogram(ids);
    else {
        const key = ids.join(',');
        if(GRAPH['cache']?.key!=key) GRAPH['cache'] = {key, 'merges': graph_dendrogram(ids)};
        merges = GRAPH['cache'].merges;
    }
    // first level: clusters of companies similar enough; opened cluster: its best split
    const min = level && ids.length<40 ? 2 : 3;
    const raw = level ? graph_split(ids, merges, min) : dendrogram_cut(ids, merges, merges.filter((m) => m.h>GRAPH_THRESHOLD).length);
    const big = raw.filter((c) => c.length>=min).slice(0, GRAPH_MAX_CLUSTERS);
    const single = raw.filter((c) => !big.includes(c)).flat();
    const base = level ? new Map(term_shares(ids).map((c) => [c.key, c.p])) : null;
    const clusters = big.map((members) => ({members, ...cluster_name(members, common, base)}));
    // two clusters with the same name: numbered
    const seen = new Map();
    clusters.forEach((c) => { const n = (seen.get(c.label) || 0) + 1; seen.set(c.label, n); if(n>1) c.label += ` (${n})`; });
    if(single.length>0) clusters.push({'members': single, 'label': 'profils singuliers', 'tags': [], 'single': true});
    GRAPH['clusters'] = clusters;
    const zoomable = (c) => c.members.length>=GRAPH_MIN_ZOOM && c.members.length<ids.length;

    // clusters placed in rows (biggest first), each in a disc sized by the area of its companies
    const W = graph_width();
    const discs = clusters.map((c) => {
        const area = c.members.reduce((s, k) => s + Math.pow(node_radius(F[k].e) + 2, 2), 0);
        return Math.max(30, 1.25*Math.sqrt(area) + 10);
    });
    const centers = [];
    let x = 0, y = 26, row_height = 0;
    discs.forEach((R, j) => {
        const label = clusters[j].label.length*3.4 + 10;
        const half = Math.max(R, label);
        if(x + 2*half > W && x>0) { x = 0; y += row_height + 34; row_height = 0; }
        centers.push([x + half, y + R]);
        x += 2*half + 24;
        row_height = Math.max(row_height, 2*R);
    });
    // center each row horizontally
    const rows = new Map();
    centers.forEach((c, j) => { if(!rows.has(c[1] - discs[j])) rows.set(c[1] - discs[j], []); rows.get(c[1] - discs[j]).push(j); });
    for(const list of rows.values()) {
        const last = list[list.length - 1];
        const right = centers[last][0] + Math.max(discs[last], clusters[last].label.length*3.4 + 10);
        const shift = (W - right)/2;
        list.forEach((j) => { centers[j][0] += shift; });
    }
    const H = Math.round(y + row_height + 16);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const nodes = [];
    clusters.forEach((c, j) => c.members.forEach((k) => nodes.push({'k': k, 'c': j, 'e': F[k].e, 'r': node_radius(F[k].e)})));
    layout_clusters(nodes, centers);
    nodes.forEach((n) => { n.x = Math.max(n.r + 2, Math.min(W - n.r - 2, n.x)); n.y = Math.max(n.r + 2, Math.min(H - n.r - 2, n.y)); });

    const color = (j) => clusters[j].single ? '#b4b2a9' : GRAPH_COLORS[j % GRAPH_COLORS.length];
    const g_hulls = svg_el('g', {}, svg), g_nodes = svg_el('g', {}, svg), g_labels = svg_el('g', {}, svg);
    const labels = [];
    clusters.forEach((c, j) => {
        const pts = [];
        nodes.filter((n) => n.c==j).forEach((n) => { for(let a=0; a<8; a++) pts.push([n.x + (n.r + 8)*Math.cos(a*Math.PI/4), n.y + (n.r + 8)*Math.sin(a*Math.PI/4)]); });
        const hull = convex_hull(pts);
        const path = svg_el('path', {'d': 'M' + hull.map((p) => p.join(',')).join('L') + 'Z', 'fill': color(j), 'fill-opacity': c.single ? 0.05 : 0.1, 'stroke': color(j), 'stroke-opacity': c.single ? 0.3 : 0.5, 'stroke-dasharray': c.single ? '4 3' : '', 'stroke-linejoin': 'round', 'class': 'graph-hull' + (zoomable(c) ? ' is-zoomable' : ''), 'data-cluster': j}, g_hulls);
        if(zoomable(c)) svg_text(`${c.label} (${c.members.length}) : cliquer pour voir ses sous-grappes`, {}, svg_el('title', {}, path));
        labels.push({'j': j, 'x': hull.reduce((s, p) => s + p[0], 0)/hull.length, 'y': Math.min(...hull.map((p) => p[1])) - 6});
    });
    // cluster names: pushed down when two names overlap
    labels.sort((a, b) => a.y - b.y).forEach((l, i, L) => {
        for(let m=0; m<i; m++) {
            const o = L[m], w = (clusters[l.j].label.length + clusters[o.j].label.length)*3.4;
            if(Math.abs(l.x - o.x)<w && Math.abs(l.y - o.y)<16) l.y = o.y + 16;
        }
        l.y = Math.max(14, l.y);
        const half = clusters[l.j].label.length*3.4 + 4;
        const text = svg_text(clusters[l.j].label, {'x': Math.max(half, Math.min(W - half, l.x)), 'y': l.y, 'class': 'graph-cluster-label', 'text-anchor': 'middle', 'data-cluster': l.j}, g_labels);
        if(zoomable(clusters[l.j])) {
            text.classList.add('is-zoomable');
            for(const [k, v] of Object.entries({'tabindex': 0, 'role': 'button', 'aria-label': `Grappe ${clusters[l.j].label}, ${clusters[l.j].members.length} entreprises : voir ses sous-grappes`})) text.setAttribute(k, v);
        }
    });
    // the two biggest companies of each cluster keep their name visible
    const named = new Set();
    clusters.forEach((c) => { if(!c.single) c.members.filter((k) => F[k].e).sort((a, b) => F[b].e - F[a].e).slice(0, 2).forEach((k) => named.add(k)); });
    for(const n of nodes) {
        const g = svg_el('g', {'class': 'graph-node', 'transform': `translate(${n.x.toFixed(1)},${n.y.toFixed(1)})`, 'data-k': n.k, 'data-cluster': n.c, 'tabindex': 0, 'role': 'button', 'aria-label': `${listing[n.k]['Name']}, voir les entreprises proches`}, g_nodes);
        svg_el('circle', {'r': n.r.toFixed(1), 'fill': n.e ? color(n.c) : 'white', 'stroke': n.e ? 'white' : color(n.c), 'stroke-dasharray': n.e ? '' : '2 2', 'stroke-width': 1.3}, g);
        svg_text(`${listing[n.k]['Name']} (${size_text(n.e)})`, {}, svg_el('title', {}, g));
        svg_text(listing[n.k]['Name'], {'x': (n.r + 2).toFixed(1), 'y': 4, 'class': 'graph-node-label' + (named.has(n.k) ? ' is-named' : '')}, g);
    }

    const N_groups = big.length, sub = level ? 'sous-grappe' : 'grappe';
    const where = level ? ` de la grappe « ${esc(level.label)} »` : (zone ? ' (' + esc(zone) + ')' : '');
    const unsplit = level && clusters.length==1;
    GRAPH['info'].innerHTML = `<strong>${ids.length} entreprises${where}${unsplit ? '' : `, ${N_groups} ${sub}${N_groups>1 ? 's' : ''}`}.</strong> `
        + (unsplit ? `Ces entreprises ont des profils trop proches pour être redécoupées. `
           : level ? `Les entreprises de cette grappe sont redécoupées en groupes plus proches, nommés par ce qui les distingue du reste de la grappe. `
                 : `Les entreprises proches sont regroupées ; une grappe est nommée par les mots-clés et thèmes partagés par la plupart de ses membres. `)
        + `Taille d'un point : effectif (pointillés : inconnu). Cliquer une grappe pour la détailler en sous-grappes, une entreprise pour voir ses plus proches voisines.`;
    GRAPH['rows'].innerHTML = clusters.map((c, j) => {
        const sizes = c.members.map((k) => F[k].e).filter((e) => e).sort((a, b) => a - b);
        const median = sizes.length ? ` · taille médiane ~${sizes[Math.floor(sizes.length/2)]} pers.` : '';
        const title = zoomable(c)
            ? `<button type="button" class="graph-zoom" data-cluster="${j}" aria-label="${esc(c.label)}, ${c.members.length} entreprises : voir ses sous-grappes">${esc(c.label)} <span aria-hidden="true">›</span></button>`
            : `<span class="graph-row-title">${esc(c.label)}</span>`;
        return `<div class="graph-row" data-cluster="${j}"><span class="graph-swatch" style="background:${color(j)}"></span>`
            + `<div>${title} <span class="graph-muted">${c.members.length}</span><div class="graph-why">${esc(c.tags.join(' · '))}${median}</div></div>`
            + `<div class="graph-why">${c.members.map((k) => `<button type="button" class="graph-company" data-k="${k}">${esc(listing[k]['Name'])}</button>`).join(', ')}</div></div>`;
    }).join('');
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
    const goto_map = company_on_map(listing[k0]) ? `<button type="button" class="graph-goto" data-goto="map" data-k="${k0}">Sur la carte</button>` : '';
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

function graph_open(k) {
    if(GRAPH['svg'].classList.contains('is-zooming')) return;
    GRAPH['trail'].push(k);
    graph_render();
    GRAPH['element'].scrollIntoView({'block': 'nearest'});
}

// Open a cluster: the view zooms on it, then its sub-clusters are drawn
function graph_zoom(j) {
    const c = GRAPH['clusters'][j], svg = GRAPH['svg'];
    if(c==undefined || c.members.length<GRAPH_MIN_ZOOM || svg.classList.contains('is-zooming')) return;
    let opened = false;
    const open = () => {
        if(opened) return;
        opened = true;
        svg.classList.remove('is-zooming');
        GRAPH['trail'].push({'ids': c.members.slice(), 'label': c.label});
        graph_render();
        // the new picture is often shorter: bring its top back under the sticky header
        if(GRAPH['element'].getBoundingClientRect().top<120) scroll_to(GRAPH['element']);
    };
    const hull = svg.querySelector(`.graph-hull[data-cluster="${j}"]`);
    if(hull==null || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return open();
    const vb = svg.viewBox.baseVal, from = [vb.x, vb.y, vb.width, vb.height];
    const b = hull.getBBox(), ratio = from[2]/from[3];
    let w = b.width + 40, h = b.height + 40;
    if(w/h<ratio) w = h*ratio; else h = w/ratio;  // same aspect: the height of the picture does not jump
    const to = [b.x + b.width/2 - w/2, b.y + b.height/2 - h/2, w, h];
    graph_highlight('cluster', String(j));
    svg.classList.add('is-zooming');
    const t0 = performance.now(), D = 420;
    const step = (now) => {
        if(opened) return;  // a late frame must not move the new picture
        const t = Math.min(1, (now - t0)/D), e = t<0.5 ? 2*t*t : 1 - Math.pow(2 - 2*t, 2)/2;
        svg.setAttribute('viewBox', from.map((v, i) => (v + (to[i] - v)*e).toFixed(1)).join(' '));
        if(t<1) requestAnimationFrame(step); else open();
    };
    requestAnimationFrame(step);
    setTimeout(open, D + 300);  // animation frames are paused in a hidden tab: open anyway
}

function graph_highlight(attribute, value) {
    GRAPH['svg'].querySelectorAll('.graph-node').forEach((g) => g.classList.toggle('is-dim', value!=null && g.dataset[attribute]!=value && !g.classList.contains('is-center')));
    GRAPH['svg'].querySelectorAll('.graph-hull').forEach((h) => h.classList.toggle('is-dim', value!=null && h.dataset[attribute]!=value));
    GRAPH['svg'].querySelectorAll('.graph-link').forEach((l) => l.classList.toggle('is-active', value!=null && l.dataset[attribute]==value));
    GRAPH['rows'].querySelectorAll('.graph-row').forEach((r) => r.classList.toggle('is-active', value!=null && r.dataset[attribute]==value));
}

const in_neighbors = () => is_company(GRAPH['trail'][GRAPH['trail'].length - 1]);

GRAPH['svg'].addEventListener('click', (event) => {
    if(GRAPH['svg'].classList.contains('is-zooming')) return;
    const node = event.target.closest('.graph-node');
    if(node) { if(!node.classList.contains('is-center')) graph_open(+node.dataset.k); return; }
    const cluster = event.target.closest('.is-zoomable');
    if(cluster) graph_zoom(+cluster.dataset.cluster);
});
GRAPH['svg'].addEventListener('keydown', (event) => {
    if(event.key!='Enter' && event.key!=' ') return;
    const node = event.target.closest('.graph-node'), cluster = event.target.closest('.graph-cluster-label.is-zoomable');
    if(node) { event.preventDefault(); if(!node.classList.contains('is-center')) graph_open(+node.dataset.k); }
    else if(cluster) { event.preventDefault(); graph_zoom(+cluster.dataset.cluster); }
});
GRAPH['svg'].addEventListener('mouseover', (event) => {
    if(GRAPH['svg'].classList.contains('is-zooming')) return;
    const node = event.target.closest('.graph-node');
    if(in_neighbors()) { if(node) graph_highlight('k', node.dataset.k); return; }
    // clusters: the hovered cluster stands out
    const cluster = event.target.closest('[data-cluster]');
    graph_highlight('cluster', cluster ? cluster.dataset.cluster : null);
});
GRAPH['svg'].addEventListener('mouseleave', () => { if(!GRAPH['svg'].classList.contains('is-zooming')) { graph_highlight('cluster', null); graph_highlight('k', null); } });
GRAPH['rows'].addEventListener('click', (event) => {
    const company = event.target.closest('.graph-company');
    if(company) graph_open(+company.dataset.k);
    const zoom = event.target.closest('.graph-zoom');
    if(zoom) graph_zoom(+zoom.dataset.cluster);
});
GRAPH['rows'].addEventListener('mouseover', (event) => {
    const row = event.target.closest('.graph-row');
    if(!row) return;
    if(row.dataset.cluster!=undefined) graph_highlight('cluster', row.dataset.cluster);
    else graph_highlight('k', row.dataset.k);
});
GRAPH['rows'].addEventListener('mouseleave', () => { graph_highlight('cluster', null); graph_highlight('k', null); });
GRAPH['crumb'].addEventListener('click', (event) => {
    const link = event.target.closest('.graph-crumb-link');
    if(!link) return;
    GRAPH['trail'] = GRAPH['trail'].slice(0, +link.dataset.depth);
    graph_render();
});
GRAPH['zone'].addEventListener('change', () => { GRAPH['trail'] = []; graph_render(); });
GRAPH['info'].addEventListener('click', (event) => {
    const button = event.target.closest('.graph-goto');
    if(!button) return;
    if(button.dataset.goto=='card') show_card(+button.dataset.k);
    else show_on_map(+button.dataset.k);
});
