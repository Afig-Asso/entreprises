"use strict";

// Data: the local json when the site is served locally (python3 -m http.server from the repository root),
// otherwise the json published on github
const is_local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
const url = is_local ? '../json/data.json' : 'https://raw.githubusercontent.com/Afig-Asso/entreprises/main/json/data.json'

const listing_element = document.querySelector('#listing-company');
const summary_element = document.querySelector('#listing-summary');

// Controls of the toolbar (static HTML in index.html)
const UX = {
    'sorting': {
        'list': document.querySelector('#view-list'),  // view: list (sorted by name or place) or graph
        'alphabetical': document.querySelector('#sort-alphabetical'),
        'place': document.querySelector('#sort-place'),
        'graph': document.querySelector('#sort-graph'),
    },
    'details': document.querySelector('#display-details'),
    'france-only': document.querySelector('#france-only'),
    'jobs-only': document.querySelector('#jobs-only'),
    'place-filter': document.querySelector('#place-filter'),
    'search': document.querySelector('#search-company'),
    'filter-toggle': document.querySelector('#filter-toggle'),
    'filter-count': document.querySelector('#filter-toggle .filter-count'),
    'filter-panel': document.querySelector('#filter-panel'),
    'filter-close': document.querySelector('#filter-close'),
    'active-filters': document.querySelector('#active-filters'),
    'filter-options': {
        'scientific': document.querySelector('.filter-group[data-domain="scientific"] .filter-options'),
        'application': document.querySelector('.filter-group[data-domain="application"] .filter-options'),
        'size': document.querySelector('.filter-group[data-domain="size"] .filter-options'),
    },
};

// Size classes of the size filter, from the 'Employees' key of data.yaml (French categories, by headcount)
const SIZE_CLASSES = [
    {'key': 'micro', 'text': '1 à 9 (micro)', 'max': 9},
    {'key': 'small', 'text': '10 à 49 (petite)', 'max': 49},
    {'key': 'medium', 'text': '50 à 249 (moyenne)', 'max': 249},
    {'key': 'eti', 'text': '250 à 4 999 (ETI)', 'max': 4999},
    {'key': 'large', 'text': '5 000 et plus (grande)', 'max': Infinity},
    {'key': 'unknown', 'text': 'Non renseignée'},
];

// Name of the domain keys in data.json
const DOMAIN_KEY = {
    'scientific': 'Scientific-domain',
    'application': 'Application-domain',
};

const Global = {
    // How the keywords of one domain are combined: 'or' (at least one) or 'and' (all: crossing themes)
    'mode': {
        'scientific': 'or',
        'application': 'or',
    },
    // Keywords selected in the filter panel. Empty set = no filter on this domain.
    'selected': {
        'scientific': new Set(),
        'application': new Set(),
        'size': new Set(), // keys of SIZE_CLASSES, combined with 'or'
    },
    'size-class': null, // per company: key of its size class
    'search-text': null, // per company: searchable text (name, description, places, themes...), without accents
    'in-france': null, // per company: true if the company has at least one place in France
    'has-jobs': null, // per company: true if a job page is given
    'rendered-ids': null, // ids already used in the current rendering (a company can appear several times by place)
};

const NEW_TAB = '<span class="visually-hidden"> (nouvel onglet)</span>';

let company_data;



// Fetch once every deferred script (graph.js included) has run: otherwise a fast answer could reach
// answer() before graph.js defines GRAPH ("GRAPH is not defined").
// A network error and a rendering error get different messages.
document.addEventListener('DOMContentLoaded', () => {
    if(typeof GRAPH==='undefined') document.documentElement.classList.add('no-graph'); // graph.js missing: list only
    fetch(url, AbortSignal.timeout ? {signal: AbortSignal.timeout(20000)} : {}) // no endless "Chargement..."
    .then(convertJSON)
    .then((data) => {
        try { answer(data); }
        catch(error) { display_loading_error(error, 'Erreur lors de l\'affichage de la liste des entreprises'); }
    }, (error) => display_loading_error(error, 'Impossible de charger la liste des entreprises'));
});

function convertJSON(response){
  if(!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

function display_loading_error(error, message) {
    console.log(message, error);
    summary_element.textContent = '';
    listing_element.innerHTML = `
    <p class="loading-message loading-error" role="alert">
    ${message} (${error.name=='TimeoutError' ? 'pas de réponse du serveur' : esc(error.message)}).
    <a href="">Réessayer</a>, ou consulter directement
    <a target="_blank" href="https://github.com/Afig-Asso/entreprises">le dépôt GitHub du listing${NEW_TAB}</a>.
    </p>`;
}



// ---------------------------------------------------------------------------
// String helpers
// ---------------------------------------------------------------------------

// Lowercase without accents, used for the text search
function search_str(s){
    return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

// French alphabetical order (accents and case ignored: "Évry" goes with the E)
function compare_fr(a, b){
    return a.localeCompare(b, 'fr', {sensitivity: 'base'});
}

function strip_html(s){
    return String(s).replace(/<[^>]*>/g, ' ');
}

// Escape a value placed inside an HTML attribute or text
function esc(s){
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function is_type_string(element) {
    return (typeof element=="string");
}
function is_type_array(element) {
    return Array.isArray(element);
}

function get_string_recursive(element, out) {

    if(element==undefined){
        return;
    }
    else if(is_type_string(element)) {
        if(out[0]!=''){
            out[0] += ', ';
        }
        out[0] += element;
    }
    else if(typeof element=='number') {
        out[0] += element;
    }
    else if(is_type_array(element)) {
        for(let e of element) {
            get_string_recursive(e, out);
        }
    }
    else {
        let txt = '';
        const url = element['url']
        const name = element['Name']
        if(url!=undefined){
            txt += `<a target="_blank" href="${url}">`
        }
        if(name!=undefined){
            txt += name;
        }
        if(url!=undefined){
            txt += `${NEW_TAB}</a>`
        }

        if(txt!=''){
            if(out[0]!=''){
                out[0] += ', ';
            }
            out[0] += txt
        }
    }
}

function get_string(element) {
    let out = ['']
    get_string_recursive(element, out);
    return out[0];
}



// ---------------------------------------------------------------------------
// Places
// ---------------------------------------------------------------------------

// Normalize the 'Place' entry into a list of dictionaries {Country, State, City, Exact, International}.
// A plain string is a French city (ex. "Toulouse" or "Toulouse, Paris").
function get_list_places(element) {
    let L = [];
    if(element==undefined) {
        return L;
    }
    if(is_type_string(element)) {
        for(let e of element.split(',')){
            L.push({'City':e.trim()});
        }
    }
    else if(is_type_array(element)) {
        for(let e of element) {
            L = L.concat(get_list_places(e));
        }
    }
    else { // dictionary
        L.push(element);
    }
    return L;
}

// One entry per (country, city), France added when the country is omitted
function get_list_places_exhaustive(element) {
    let L = [];
    for(let e of element){
        // Special case of international
        if(e['International']!=undefined) {
            L.push(e);
            continue;
        }
        let D = {...e};
        if(e['Country']==undefined) {
            D['Country']='France';
        }

        if(is_type_array(e['Country'])) { // multiple countries
            for(let country of e['Country']) {
                L.push({...e, 'Country': country});
            }
        }
        else if(split_names(e['City']).length>1) { // multiple cities (list, or 'Bordeaux, Lyon')
            for(let city of split_names(e['City'])) {
                L.push({...D, 'City': city});
            }
        }
        else { //only one city
            L.push(D);
        }
    }
    return L;
}

function export_places_to_txt(data) {

    let all_txt = [];
    for(let element of data){
        if(element['International']==true) {
            all_txt.push('International');
            continue;
        }

        let entry_txt = '';
        const country_entry = element['Country'];
        if(country_entry!=undefined) {
            entry_txt += is_type_array(country_entry) ? country_entry.join(', ') : country_entry;
        }

        const state_entry = element['State'];
        if(state_entry!=undefined) {
            entry_txt += '/'+state_entry;
        }

        const city_entry = element['City'];
        if(city_entry!=undefined) {
            if(entry_txt!='') {
                entry_txt += '/';
            }
            if(is_type_array(city_entry)) {
                let city_txt = city_entry.join(', ');
                if(country_entry!=undefined && city_entry.length>1){
                    city_txt = '{'+city_txt+'}';
                }
                entry_txt += city_txt;
            }
            else {
                entry_txt += city_entry;
            }
        }

        const exact_entry = element['Exact'];
        if(exact_entry!=undefined) {
            entry_txt += ' ('+exact_entry+')';
        }

        if(entry_txt!='') {
            all_txt.push(entry_txt);
        }
    }

    return all_txt.join(', ');
}



// Places for a card, readable at a glance: French cities first, then "City (Country)".
// Ex. "Paris, Angoulême, Montréal (Canada), Nanjing (Chine)"
function places_for_card(entry) {
    const places = get_list_places_exhaustive(get_list_places(entry['Place']));
    const french = [], abroad = [];
    let international = false;
    for(const p of places) {
        if(p['International']!=undefined) { international = true; continue; }
        const city = get_string(p['City'] || p['State'] || '');
        if(p['Country']=='France') {
            if(city!='' && !french.includes(city)) french.push(city);
        }
        else {
            const txt = city!='' ? `${city} (${p['Country']})` : p['Country'];
            if(!abroad.includes(txt)) abroad.push(txt);
        }
    }
    const all = french.concat(abroad);
    if(international) all.push('International');
    return all.join(', ');
}

// ---------------------------------------------------------------------------
// Display of one company
// ---------------------------------------------------------------------------

// Theme tags of a card: buttons that filter the listing on this theme
function display_tags(element, domain) {
    if(element==undefined || element.length==0) {
        return '';
    }
    const L = is_type_array(element) ? element : String(element).split(',');
    return L.map((x) => {
        const keyword = String(x).trim();
        const active = Global['selected'][domain].has(keyword) ? ' is-active' : '';
        return `<button type="button" class="tag ${domain}-tag${active}" data-domain="${domain}" data-keyword="${esc(keyword)}" title="Afficher uniquement : ${esc(keyword)}">${keyword}</button>`;
    }).join('<span class="tag-sep">, </span>');
}

function display_div(txt, className, label='') {
    if(txt==''){
        return '';
    }
    const pre = label=='' ? '' : `<strong class="field-label">${label}</strong><span class="field-sep"> : </span>`;
    return `<div class="${className}">${pre}${txt}</div>\n`;
}

// Unique id: only the first card of a company gets it (a company may appear in several places)
function company_id_attribute(name) {
    const id = name.replace(/[^A-Z0-9]/ig, "_");
    if(Global['rendered-ids'].has(id)) {
        return '';
    }
    Global['rendered-ids'].add(id);
    return ` id="${id}"`;
}

// Index of a company in the listing (used by the links between the list, the map and the graph)
function company_index(entry) {
    if(Global['index']==undefined) {
        Global['index'] = new Map(company_data['Listing'].map((e, k) => [e, k]));
    }
    return Global['index'].get(entry);
}

// Carte de l'informatique graphique en France (entreprises et équipes de recherche) : lien vers une entreprise
// qui a un lieu placé en France ; null sinon (pas de carte pour les entreprises uniquement à l'étranger)
const CARTO_URL = 'https://afig-asso.github.io/cartographie/';
function carto_link(entry) {
    const places = company_data['Places'] || {};
    const in_france = expand_places(entry['Place']).some((loc) => loc['Country']=='France' && (loc['Coordinates'] || places[map_place_key('France', loc['City'])]));
    return in_france ? CARTO_URL + '?entreprise=' + encodeURIComponent(entry['Name']) : null;
}

// Links of a card to the same company on the map of France and in the graph
function company_links(entry) {
    const k = company_index(entry);
    const name = esc(entry['Name']);
    let txt = '<div class="company-goto">';
    const carto = carto_link(entry);
    if(carto) {
        txt += `<a class="goto-carto" href="${esc(carto)}" target="_blank" rel="noopener">Carte<span class="visually-hidden"> : ${name}, avec les équipes de recherche proches${NEW_TAB}</span></a>`;
    }
    txt += `<button type="button" class="goto-graph" data-k="${k}">Graphe<span class="visually-hidden"> : entreprises proches de ${name}</span></button>`;
    return txt + '</div>\n';
}

function display_company_entry(entry, level) {

    const name = entry['Name'];
    const id_attribute = company_id_attribute(name);
    const url = entry['url'];
    const title = `<h${level} class="company-name"><a target="_blank" href="${url}">${esc(name)}${NEW_TAB}</a></h${level}>`;

    const jobs = get_string(entry['Jobs']);
    const jobs_txt = jobs=='' ? '' :
        `<div class="jobs"><a class="jobs-link" target="_blank" href="${jobs}">Offres d'emploi<span class="visually-hidden"> chez ${esc(name)} (nouvel onglet)</span></a></div>\n`;
    const place_txt = places_for_card(entry);
    const has_jobs = jobs=='' ? '' : ' has-jobs';
    // Place under the name, with a hidden label for screen readers (the pin icon is decorative)
    const place_div = place_txt=='' ? '' :
        `<div class="place"><span class="visually-hidden">Localisation : </span>${place_txt}</div>\n`;

    if(UX['details'].checked==false) {
        let txt = `<li${id_attribute} class="company company-compact${has_jobs}">${title}`;
        txt += place_div;
        txt += jobs_txt;
        txt += company_links(entry);
        return txt + '</li>\n';
    }

    const name_long = get_string(entry['Name-long']);
    const description = get_string(entry['Description']);
    const info = get_string(entry['Info']);
    const keywords = get_string(entry['Keywords'])
    const product = get_string(entry['Product']);
    const employees = get_string(entry['Employees']);
    let number_txt='';
    if(employees!='' && Number(employees)>100) {
        number_txt = String(Number(employees).toLocaleString('fr'));
    }
    // Left column: identity of the company (who, where, size, jobs)
    let txt = `<li${id_attribute} class="company${has_jobs}">\n<div class="company-id">\n${title}`;
    if(name_long!='') {
        txt += `<div class="name-long">${name_long}</div>`;
    }
    txt += place_div;
    if(number_txt!='') {
        txt += `<div class="employees">${number_txt} employés</div>\n`;
    }
    txt += jobs_txt;
    txt += company_links(entry);
    txt += '</div>\n'; // end company-id
    // Right column: what the company does
    txt += '<div class="content">\n';
    txt += display_div(description, 'description');
    txt += display_div(keywords, 'keywords', 'Mots-clés')
    txt += display_div(info, 'info', 'Remarque');
    txt += display_div(product, 'products', 'Produits');
    const tags = display_div(display_tags(entry['Scientific-domain'], 'scientific'), 'scientific-domain', 'Domaine scientifique')
        + display_div(display_tags(entry['Application-domain'], 'application'), 'application-domain', "Domaine d'application");
    if(tags!='') {
        txt += `<div class="tags">${tags}</div>\n`;
    }
    txt += '</div>\n'; // end content
    txt += '</li>\n';

    return txt;
}



// ---------------------------------------------------------------------------
// Display of the listing
// ---------------------------------------------------------------------------

function plural_companies(N) {
    return N>1 ? `${N} entreprises` : `${N} entreprise`;
}

function any_filter_active() {
    return Global['selected']['scientific'].size>0 || Global['selected']['application'].size>0 || Global['selected']['size'].size>0
        || UX['france-only'].checked || UX['jobs-only'].checked || UX['place-filter'].value!='' || UX['search'].value.trim()!='';
}

function display_summary(N, N_jobs) {
    const N_total = company_data['Listing'].length;
    let txt = '';
    if(any_filter_active()) {
        txt = `<strong>${N>1 ? N+' entreprises affichées' : N+' entreprise affichée'}</strong> sur ${N_total}`;
    }
    else {
        txt = `<strong>${N_total} entreprises répertoriées</strong>`;
    }
    if(N>0 && !UX['jobs-only'].checked) {
        txt += `, <span class="summary-jobs">dont ${N_jobs} avec offres d'emploi</span>`;
    }
    // Filter panel: the close button tells how many companies will be shown
    UX['filter-close'].textContent = N>1 ? `Voir les ${N} entreprises` : (N==1 ? "Voir l'entreprise" : 'Fermer');
    const updated = company_data['Updated'];
    if(updated!=undefined) {
        const date = new Date(updated+'T12:00:00');
        txt += ` <span class="listing-updated">(mise à jour le ${date.toLocaleDateString('fr-FR', {day:'numeric', month:'long', year:'numeric'})})</span>`;
    }
    summary_element.innerHTML = txt;
}

function display_no_result() {
    return `<div class="no-result">
    <p>Aucune entreprise ne correspond à la recherche et aux filtres sélectionnés.</p>
    <button type="button" class="reset-all">Tout réinitialiser</button>
    </div>\n`;
}

function display_list(entries, level) {
    const compact = UX['details'].checked ? '' : ' compact';
    let txt = `<ul class="company-list${compact}" role="list">\n`;
    for(const entry of entries) {
        txt += display_company_entry(entry, level);
    }
    return txt + '</ul>\n';
}

// Id of a place heading, used by the index of the place view
function place_id(prefix, name) {
    return prefix + '-' + search_str(name).replace(/[^a-z0-9]+/g, '-');
}

function place_count(N) {
    return `<span class="place-count">${plural_companies(N)}</span>`;
}

// Zone of a French city (zones.yaml, exported in data.json 'Zones'): ex. Villeurbanne -> Lyon.
// A city absent from the table is its own zone.
function french_zone(city) {
    const zones = (company_data && company_data['Zones']) || {};
    return zones[city] || city;
}

// Cities of a zone where the listed companies are, when they are not just the zone name
function zone_cities(zone, entries) {
    const cities = new Set();
    for(const entry of entries) {
        for(const p of get_list_places_exhaustive(get_list_places(entry['Place']))) {
            const city = String(p['City'] || '').trim();
            if((p['Country']==undefined || p['Country']=='France') && city!='' && french_zone(city)==zone) {
                cities.add(city);
            }
        }
    }
    const list = [...cities].sort(compare_fr);
    return (list.length==1 && list[0]==zone) ? [] : list;
}

// Region of a French zone (regions.yaml, exported in data.json 'Regions'): ex. Lyon -> Auvergne-Rhône-Alpes
function french_region(zone) {
    const regions = (company_data && company_data['Regions']) || {};
    return regions[zone] || 'Autres villes';
}

// Below this number of companies, the zones of a region are gathered in one block "Autres villes"
const MIN_COMPANIES_ZONE = 3;

function unique_entries(lists) {
    const all = [];
    for(const list of lists) {
        for(const entry of list) {
            if(!all.includes(entry)) all.push(entry);
        }
    }
    return all;
}

// French zones grouped by region: [{name, entries, blocks:[{name, id, entries, cities}]}], largest region first.
// In a region, the zones with enough companies have their own block (largest first), the others share one block.
function french_regions(french_entries) {
    const by_region = {};
    for(const zone of Object.keys(french_entries)) {
        const region = french_region(zone);
        (by_region[region] = by_region[region] || []).push(zone);
    }
    const regions = [];
    for(const [region, zones] of Object.entries(by_region)) {
        const big = zones.filter((z) => french_entries[z].length>=MIN_COMPANIES_ZONE)
            .sort((a, b) => french_entries[b].length - french_entries[a].length || compare_fr(a, b));
        const small = zones.filter((z) => !big.includes(z)).sort(compare_fr);
        const blocks = big.map((z) => ({'name': z, 'id': place_id('ville', z), 'entries': french_entries[z], 'cities': zone_cities(z, french_entries[z])}));
        if(small.length>0) {
            const entries = unique_entries(small.map((z) => french_entries[z])).sort((a, b) => compare_fr(a['Name'], b['Name']));
            const cities = [...new Set(small.flatMap((z) => zone_cities(z, french_entries[z]).length>0 ? zone_cities(z, french_entries[z]) : [z]))].sort(compare_fr);
            blocks.push({'name': big.length>0 ? 'Autres villes' : '', 'id': place_id('autres', region), 'entries': entries, 'cities': cities, 'others': true,
                'zones': small.map((z) => ({'name': z, 'N': french_entries[z].length}))});
        }
        regions.push({'name': region, 'id': place_id('region', region), 'blocks': blocks,
            'entries': unique_entries(zones.map((z) => french_entries[z]))});
    }
    return regions.sort((a, b) => b['entries'].length - a['entries'].length || compare_fr(a['name'], b['name']));
}

// Cities under a heading; a long list (Île-de-France) is shortened to its main city and a count
const MAX_CITIES_HEADING = 15;
function cities_span(cities, zone) {
    if(cities.length==0) {
        return '';
    }
    let txt = cities.join(', ');
    if(cities.length>MAX_CITIES_HEADING) {
        const main = cities.find((c) => zone!=undefined && zone.startsWith(c));
        txt = main!=undefined ? `${main} et ${cities.length-1} autres communes` : `${cities.length} communes`;
    }
    return ` <span class="zone-cities" title="${esc(cities.join(', '))}">${txt}</span>`;
}

// One region: its heading, then one sub-heading per block (none when the region has a single block)
function display_region(region) {
    const blocks = region['blocks'];
    const single = blocks.length==1;
    const cities = single ? cities_span(blocks[0]['cities'], blocks[0]['name']) : '';
    // a single zone keeps its id, for the links to a city
    const ids = single && !blocks[0]['others'] ? `<span id="${blocks[0]['id']}"></span>` : '';
    let txt = `<h3 class="title-place title-region" id="${region['id']}" tabindex="-1">${ids}${region['name']}${cities} ${place_count(region['entries'].length)}</h3>\n`;
    if(single) {
        return txt + '<div class="container-place-city">\n' + display_list(blocks[0]['entries'], 4) + '</div>\n';
    }
    for(const block of blocks) {
        const cls = block['others'] ? ' title-others' : '';
        txt += `<h4 class="title-place title-city${cls}" id="${block['id']}" tabindex="-1">${block['name']}${cities_span(block['cities'], block['name'])} ${place_count(block['entries'].length)}</h4>\n`;
        txt += '<div class="container-place-city">\n' + display_list(block['entries'], 5) + '</div>\n';
    }
    return txt;
}

// Location of a place for the place filter: country, and for France the zone and the region
function place_location(place) {
    const country = place['Country'] || (place['International'] ? 'International' : '');
    if(country!='France') {
        return {'country': country};
    }
    const zone = french_zone(String(place['City'] || '').trim());
    return {'country': country, 'zone': zone, 'region': french_region(zone)};
}

// Place filter (select of the toolbar): '' all, 'fr' France, 'r:<region>', 'z:<zone>', 'c:<country>'
function place_selected(location) {
    const value = UX['place-filter'].value;
    if(value=='') return true;
    if(value=='fr') return location['country']=='France';
    const key = value.slice(2);
    if(value.startsWith('r:')) return location['region']==key;
    if(value.startsWith('z:')) return location['zone']==key;
    return location['country']==key;
}

// Options of the place filter: France and its regions (with their main cities), then the other countries
function build_place_filter() {
    const count = (test) => Global['places'].filter((locations) => locations.some(test)).length;
    const option = (value, text, N, label, indent) =>
        `<option value="${esc(value)}" data-label="${esc(label || text)}">${indent || ''}${esc(text)} (${N})</option>`;
    const french = Global['places'].map((locations) => locations.filter((l) => l['country']=='France'));
    const by_zone = {};
    const by_region = {};
    french.forEach((locations, k) => {
        for(const l of locations) {
            (by_zone[l['zone']] = by_zone[l['zone']] || new Set()).add(k);
            (by_region[l['region']] = by_region[l['region']] || new Set()).add(k);
        }
    });
    const regions = Object.keys(by_region).sort((a, b) => by_region[b].size - by_region[a].size || compare_fr(a, b));
    let txt = '<option value="">Tous les lieux</option>';
    txt += '<optgroup label="France">' + option('fr', 'Toute la France', count((l) => l['country']=='France'), 'France');
    for(const region of regions) {
        txt += option('r:'+region, region, by_region[region].size);
        const zones = Object.keys(by_zone).filter((z) => french_region(z)==region && by_zone[z].size>=MIN_COMPANIES_ZONE && by_zone[z].size<by_region[region].size)
            .sort((a, b) => by_zone[b].size - by_zone[a].size || compare_fr(a, b));
        for(const zone of zones) {
            txt += option('z:'+zone, zone, by_zone[zone].size, zone, '    ');
        }
    }
    txt += '</optgroup>';
    const countries = [...new Set(Global['places'].flat().map((l) => l['country']))].filter((c) => c!='' && c!='France').sort(compare_fr);
    txt += '<optgroup label="Autres pays">';
    for(const country of countries) {
        txt += option('c:'+country, country, count((l) => l['country']==country));
    }
    UX['place-filter'].innerHTML = txt + '</optgroup>';
}

// Index of the place view: one link per French region, then per country
function display_place_index(regions, countries, data) {
    const link = (id, name, N) => `<a class="place-link" href="#${id}">${name}<span class="place-link-count"><span class="visually-hidden"> : </span>${N}</span></a>`;
    // Folded by default on small screens
    const open = window.matchMedia('(min-width: 761px)').matches ? ' open' : '';
    const N_places = regions.length + countries.length;
    let txt = `<nav class="place-index" aria-label="Aller à une localité"><details${open}>`
        + `<summary>Aller à une localité <span class="place-index-total">${N_places} lieux</span></summary>\n`;
    if(regions.length>0) {
        // One line per region: the region, its main cities, and the small towns folded behind "+ N villes"
        txt += '<div class="place-index-row"><span class="place-index-label">France</span><div class="place-index-regions">';
        for(const region of regions) {
            const main = region['blocks'].filter((b) => !b['others'] && b['entries'].length<region['entries'].length);
            const others = region['blocks'].find((b) => b['others']);
            txt += '<div class="place-index-region">'
                + `<a class="place-link place-link-region" href="#${region['id']}">${region['name']}<span class="place-link-count"><span class="visually-hidden"> : </span>${region['entries'].length}</span></a>`;
            const links = main.map((b) => link(b['id'], b['name'], b['entries'].length));
            if(others!=undefined) {
                const towns = others['zones'].map((z) => link(others['id'], z['name'], z['N'])).join('');
                const N = others['zones'].length;
                links.push(`<details class="place-more"><summary>+ ${N} ville${N>1 ? 's' : ''}</summary><div class="place-index-links">${towns}</div></details>`);
            }
            txt += `<div class="place-index-links">${links.join('')}</div></div>\n`;
        }
        txt += '</div></div>\n';
    }
    if(countries.length>0) {
        txt += '<div class="place-index-row"><span class="place-index-label">Autres pays</span><div class="place-index-links">';
        txt += countries.map((c) => link(place_id('pays', c), c, data[c].length)).join('');
        txt += '</div></div>\n';
    }
    return txt + '</details></nav>\n';
}

function display_company(data, N_displayed) {
    if(N_displayed==0) {
        return display_no_result();
    }

    if(UX['sorting']['alphabetical'].checked) {
        return display_list(data, 2);
    }

    let HTML_txt = '';
    const all_countries = Object.keys(data).sort(compare_fr);
    const other_countries = all_countries.filter((c) => c!='France');

    // France first, by region (regions.yaml) then by zone (zones.yaml), the largest first
    const french_entries = data['France'];
    const regions = french_entries!=undefined ? french_regions(french_entries) : [];
    HTML_txt += display_place_index(regions, other_countries, data);

    if(french_entries != undefined) {
        const N_france = unique_entries(regions.map((r) => r['entries'])).length;
        HTML_txt += `<h2 class="title-place" id="pays-france" tabindex="-1">France ${place_count(N_france)}</h2>\n`
        HTML_txt += '<div class="container-place">\n'
        for(const region of regions) {
            HTML_txt += display_region(region);
        }
        HTML_txt += '</div>\n'
    }

    for(const country of other_countries) {
        HTML_txt += `<h2 class="title-place" id="${place_id('pays', country)}" tabindex="-1">${country} ${place_count(data[country].length)}</h2>\n`
        HTML_txt += '<div class="container-place">\n' + display_list(data[country], 3) + '</div>\n'
    }

    return HTML_txt;
}

// Jump to a place heading (inside the AFIG iframe, the parent page has to scroll)
function jump_to_place(link) {
    jump_to_target(document.getElementById(link.getAttribute('href').slice(1)));
}

function jump_to_target(target) {
    if(!target) {
        return;
    }
    if(document.documentElement.classList.contains('embedded') && window.parentIFrame!=undefined) {
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.parentIFrame.scrollToOffset(0, Math.max(0, top - 16));
    }
    else {
        // keep the target below the sticky green toolbar
        const toolbar = document.querySelector('#toolbar');
        const offset = getComputedStyle(toolbar).position=='sticky' ? toolbar.getBoundingClientRect().height + 12 : 12;
        window.scrollTo({'top': Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset)});
    }
    target.focus({preventScroll: true});
}

function sort_by_place(data) {
    const sorted_data = {};
    for(let entry of data) {
        const place_entry = get_list_places_exhaustive(get_list_places(entry['Place']));

        for(const place of place_entry) {
            let country = place['Country'];

            if(UX['france-only'].checked && country!='France') {
                continue; // only French places are displayed in this mode
            }
            if(UX['place-filter'].value!='' && !place_selected(place_location(place))) {
                continue; // only the places of the place filter are displayed
            }

            if(country==undefined) {
                if(place['International']){ // Case of 'International:true' -> used like a country
                    country = 'International';
                }
                else { // Should not happen
                    console.log("Error sorting place for entry ", entry, place);
                    continue;
                }
            }

            if(country=='France') { // France is also sorted by zone of cities (ex. Villeurbanne -> Lyon)
                const city = french_zone(String(place['City'] || '').trim());
                if(city=='') {
                    console.log("Error reading city for entry", entry);
                    continue;
                }
                sorted_data['France'] = sorted_data['France'] || {};
                sorted_data['France'][city] = sorted_data['France'][city] || [];
                if(!sorted_data['France'][city].includes(entry)) {
                    sorted_data['France'][city].push(entry);
                }
            }
            else {
                sorted_data[country] = sorted_data[country] || [];
                if(!sorted_data[country].includes(entry)) { // no duplicate in a country
                    sorted_data[country].push(entry);
                }
            }
        }
    }

    return sorted_data;
}



// ---------------------------------------------------------------------------
// Filtering
// ---------------------------------------------------------------------------

function match_domain(entry, domain) {
    const selected = Global['selected'][domain];
    if(selected.size==0) {
        return true;
    }
    const entry_keyword = entry[DOMAIN_KEY[domain]];
    if(entry_keyword==undefined || entry_keyword[0]==='Arbitraire') { // does not filter along non existing criteria
        return true;
    }
    if(Global['mode'][domain]=='and') {
        return [...selected].every((x) => entry_keyword.includes(x));
    }
    return entry_keyword.some((x) => selected.has(x));
}

// All the filters, except the theme filter of one domain (skip_domain='' : all the filters)
function match_filters(k, search_words, skip_domain) {
    const entry = company_data['Listing'][k];
    for(const domain of ['scientific', 'application']) {
        if(domain!=skip_domain && !match_domain(entry, domain)) return false;
    }
    const sizes = Global['selected']['size'];
    if(skip_domain!='size' && sizes.size>0 && !sizes.has(Global['size-class'][k])) return false;
    if(UX['france-only'].checked && !Global['in-france'][k]) return false;
    if(UX['jobs-only'].checked && !Global['has-jobs'][k]) return false;
    if(UX['place-filter'].value!='' && !Global['places'][k].some(place_selected)) return false;
    return search_words.every((w) => Global['search-text'][k].includes(w));
}

// Counts of the filter panel: number of companies shown if this theme is checked, given the other filters
function update_keyword_counts(search_words) {
    const listing = company_data['Listing'];
    for(const domain of ['scientific', 'application']) {
        const base = [];
        for(let k=0; k<listing.length; k++) {
            if(match_filters(k, search_words, domain)) base.push(listing[k]);
        }
        const selected = Global['selected'][domain];
        for(const input of UX['filter-options'][domain].querySelectorAll('input')) {
            const keyword = input.value;
            let N = 0;
            for(const entry of base) {
                const kw = entry[DOMAIN_KEY[domain]] || [];
                if(!kw.includes(keyword)) continue;
                if(Global['mode'][domain]=='and' && ![...selected].every((x) => kw.includes(x))) continue;
                N++;
            }
            const option = input.closest('.filter-option');
            option.querySelector('.keyword-count').textContent = `(${N})`;
            option.classList.toggle('is-empty', N==0 && !input.checked);
        }
    }
    // Size: number of companies of each class, given the other filters
    const count = {};
    for(let k=0; k<listing.length; k++) {
        if(match_filters(k, search_words, 'size')) count[Global['size-class'][k]] = (count[Global['size-class'][k]] || 0) + 1;
    }
    for(const input of UX['filter-options']['size'].querySelectorAll('input')) {
        const N = count[input.value] || 0;
        const option = input.closest('.filter-option');
        option.querySelector('.keyword-count').textContent = `(${N})`;
        option.classList.toggle('is-empty', N==0 && !input.checked);
    }
}

function update_display() {

    if(company_data==undefined) { // data not loaded yet
        return;
    }
    const listing = company_data['Listing'];
    const search_words = search_str(UX['search'].value).split(/\s+/).filter((w) => w!='');
    let data_to_display = [];
    for(let k=0; k<listing.length; k++) {
        if(match_filters(k, search_words, '')) data_to_display.push(listing[k]);
    }
    const N_displayed = data_to_display.length;
    const N_jobs = data_to_display.filter((e) => get_string(e['Jobs'])!='').length;

    Global['rendered-ids'] = new Set();
    display_summary(N_displayed, N_jobs);
    const graph_view = UX['sorting']['graph'].checked && typeof GRAPH!=='undefined';
    document.documentElement.classList.toggle('view-graph', graph_view);
    document.getElementById('graph-view').hidden = !graph_view;
    if(graph_view) {
        listing_element.innerHTML = N_displayed==0 ? display_no_result() : '';
        display_graph(data_to_display);
    }
    else {
        if(UX['sorting']['place'].checked){
            data_to_display = sort_by_place(data_to_display);
        }
        listing_element.innerHTML = display_company(data_to_display, N_displayed);
    }
    update_filter_state();
    update_keyword_counts(search_words);
    update_shortcuts();
}

// Theme shortcuts above the listing (one tap): toggle a keyword of the filter
const SHORTCUTS = [
    {'text': 'Jeu vidéo', 'domain': 'application', 'keyword': 'Jeu Vidéo'},
    {'text': 'Animation / VFX', 'domain': 'application', 'keyword': "Cinéma/Films d'Animation/VFX"},
    {'text': 'Temps réel / moteurs 3D', 'domain': 'scientific', 'keyword': 'Rendu temps réel/Moteurs 3D'},
    {'text': 'Vision', 'domain': 'scientific', 'keyword': 'Vision'},
    {'text': 'VR / AR', 'domain': 'scientific', 'keyword': 'VR/AR'},
    {'text': 'Simulation', 'domain': 'scientific', 'keyword': 'Simulation'},
    {'text': 'IA générative', 'domain': 'scientific', 'keyword': 'IA générative (image/3D)'},
];
const shortcuts_element = document.querySelector('#shortcuts');

function build_shortcuts() {
    let txt = '<span class="shortcuts-label" id="shortcuts-label">Thèmes fréquents :</span>';
    SHORTCUTS.forEach((s, k) => {
        txt += `<button type="button" class="shortcut" data-index="${k}" aria-pressed="false">${s['text']}</button>`;
    });
    shortcuts_element.innerHTML = txt;
}

function update_shortcuts() {
    for(const button of shortcuts_element.querySelectorAll('.shortcut')) {
        const s = SHORTCUTS[button.dataset.index];
        button.setAttribute('aria-pressed', Global['selected'][s['domain']].has(s['keyword']) ? 'true' : 'false');
    }
}

shortcuts_element.addEventListener('click', (event) => {
    const button = event.target.closest('.shortcut');
    if(!button) return;
    const s = SHORTCUTS[button.dataset.index];
    const selected = Global['selected'][s['domain']];
    if(selected.has(s['keyword'])) selected.delete(s['keyword']);
    else selected.add(s['keyword']);
    update_display();
});

// Synchronize the checkboxes, the counter of the filter button and the active filter pills
function update_filter_state() {
    let N_selected = 0;
    for(const domain of ['scientific', 'application']) {
        const selected = Global['selected'][domain];
        N_selected += selected.size;
        for(const input of UX['filter-options'][domain].querySelectorAll('input')) {
            input.checked = selected.has(input.value);
        }
        document.querySelector(`#mode-${domain}-${Global['mode'][domain]}`).checked = true;
    }
    N_selected += Global['selected']['size'].size;
    for(const input of UX['filter-options']['size'].querySelectorAll('input')) {
        input.checked = Global['selected']['size'].has(input.value);
    }
    UX['filter-count'].hidden = (N_selected==0);
    UX['filter-count'].innerHTML = N_selected>0 ? `${N_selected}<span class="visually-hidden"> sélectionnés</span>` : '';

    // Pills of the active filters
    let pills = [];
    const search_value = UX['search'].value.trim();
    if(search_value!='') {
        pills.push({'type':'search', 'text':`Recherche : « ${esc(search_value)} »`});
    }
    for(const domain of ['scientific', 'application']) {
        let first = true;
        for(const keyword of Global['selected'][domain]) {
            const join = first ? '' : (Global['mode'][domain]=='and' ? 'et' : 'ou');
            pills.push({'type':domain, 'keyword':keyword, 'text':esc(keyword), 'join':join});
            first = false;
        }
    }
    // Size pills, in the order of the classes
    let first_size = true;
    for(const c of SIZE_CLASSES) {
        if(!Global['selected']['size'].has(c['key'])) continue;
        pills.push({'type':'size', 'keyword':c['key'], 'text':`Taille : ${c['text']}`, 'join':first_size ? '' : 'ou'});
        first_size = false;
    }
    if(UX['france-only'].checked) {
        pills.push({'type':'france-only', 'text':'France uniquement'});
    }
    if(UX['jobs-only'].checked) {
        pills.push({'type':'jobs-only', 'text':"Avec offres d'emploi"});
    }
    UX['place-filter'].classList.toggle('is-active', UX['place-filter'].value!='');
    if(UX['place-filter'].value!='') {
        const option = UX['place-filter'].selectedOptions[0];
        pills.push({'type':'place-filter', 'text':`Lieu : ${esc(option.dataset.label || option.textContent)}`});
    }

    if(pills.length==0) {
        UX['active-filters'].hidden = true;
        UX['active-filters'].innerHTML = '';
        return;
    }
    let txt = '<span class="active-filters-label">Filtres actifs :</span> ';
    for(const pill of pills) {
        if(pill['join']) {
            txt += `<span class="pill-join">${pill['join']}</span> `;
        }
        const keyword_attribute = pill['keyword']!=undefined ? ` data-keyword="${esc(pill['keyword'])}"` : '';
        txt += `<button type="button" class="pill pill-${pill['type']}" data-type="${pill['type']}"${keyword_attribute}>${pill['text']}<span class="pill-remove" aria-hidden="true">&times;</span><span class="visually-hidden"> (retirer ce filtre)</span></button> `;
    }
    txt += '<button type="button" class="reset-all">Tout réinitialiser</button>';
    UX['active-filters'].innerHTML = txt;
    UX['active-filters'].hidden = false;
}

function remove_filter(pill) {
    const type = pill.dataset.type;
    if(type=='search') {
        UX['search'].value = '';
    }
    else if(type=='france-only' || type=='jobs-only') {
        UX[type].checked = false;
    }
    else if(type=='place-filter') {
        UX['place-filter'].value = '';
    }
    else {
        Global['selected'][type].delete(pill.dataset.keyword);
    }
    update_display();
}

function reset_all_filters() {
    UX['search'].value = '';
    UX['france-only'].checked = false;
    UX['jobs-only'].checked = false;
    UX['place-filter'].value = '';
    Global['selected']['scientific'].clear();
    Global['selected']['application'].clear();
    Global['selected']['size'].clear();
    update_display();
}

// Click on a theme tag of a card: show only this theme
function filter_on_tag(tag) {
    const domain = tag.dataset.domain;
    Global['selected'][domain] = new Set([tag.dataset.keyword]);
    update_display();
    scroll_to_top();
    summary_element.focus({preventScroll: true});
}

function scroll_to_top() {
    if(document.documentElement.classList.contains('embedded') && window.parentIFrame!=undefined) {
        window.parentIFrame.scrollToOffset(0, 0); // scroll the AFIG page to the top of the iframe
    }
    else {
        window.scrollTo({top: 0});
    }
}



// ---------------------------------------------------------------------------
// Filter panel
// ---------------------------------------------------------------------------

function open_filter_panel(open) {
    UX['filter-panel'].hidden = !open;
    UX['filter-toggle'].setAttribute('aria-expanded', open ? 'true' : 'false');
    if(open) {
        const first = UX['filter-panel'].querySelector('input');
        if(first) first.focus();
    }
}

// Number of companies per keyword, displayed next to each filter
function count_keywords(listing, domain_label) {
    const count = {};
    for(const entry of listing) {
        for(const keyword of (entry[domain_label] || [])) {
            count[keyword] = (count[keyword] || 0) + 1;
        }
    }
    return count;
}

function build_keywords(data, domain, count){

    let txt = '';
    for(let data_keyword of data){

        let keyword = data_keyword;
        let explanation = undefined;
        if(!is_type_string(data_keyword)) {
            keyword = Object.keys(data_keyword)[0];
            explanation = data_keyword[keyword];
        }
        const id = `filter-${domain}-${keyword.replace(/[^A-Z0-9]/ig, "_")}`;
        const N_keyword = count[keyword] || 0;
        const title = explanation!=undefined ? ` title="${esc(explanation)}"` : '';
        const help = explanation!=undefined ? `<span class="visually-hidden" id="${id}-help">${esc(explanation)}</span>` : '';
        const described = explanation!=undefined ? ` aria-describedby="${id}-help"` : '';
        const mark = explanation!=undefined ? ' <img class="question-mark" alt="" aria-hidden="true">' : '';

        txt += `<div class="filter-option">
        <input type="checkbox" id="${id}" value="${esc(keyword)}"${described}>
        <label for="${id}"${title}>${keyword}${mark} <span class="keyword-count">(${N_keyword})</span></label>${help}
        </div>\n`;
    }
    UX['filter-options'][domain].innerHTML = txt;
}

// Size class of a company. 'Employees' is a number, or a range such as "50-99" (middle of the range)
function size_class(entry) {
    const numbers = (get_string(entry['Employees']).replace(/\s/g, '').match(/\d+/g) || []).map(Number);
    if(numbers.length==0) return 'unknown';
    const N = numbers.length>1 ? (numbers[0]+numbers[1])/2 : numbers[0];
    return SIZE_CLASSES.find((c) => c['max']!=undefined && N<=c['max'])['key'];
}

function build_sizes() {
    let txt = '';
    for(const c of SIZE_CLASSES) {
        const N = Global['size-class'].filter((x) => x==c['key']).length;
        txt += `<div class="filter-option">
        <input type="checkbox" id="filter-size-${c['key']}" value="${c['key']}">
        <label for="filter-size-${c['key']}">${c['text']} <span class="keyword-count">(${N})</span></label>
        </div>\n`;
    }
    UX['filter-options']['size'].innerHTML = txt;
}



// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

let search_timer = undefined;
UX['search'].addEventListener('input', () => {
    clearTimeout(search_timer);
    search_timer = setTimeout(update_display, 150);
});
UX['search'].addEventListener('search', () => { // clear button of the search field
    clearTimeout(search_timer);
    update_display();
});

for(const element of [UX['sorting']['list'], UX['sorting']['alphabetical'], UX['sorting']['place'], UX['sorting']['graph'], UX['details'], UX['france-only'], UX['jobs-only'], UX['place-filter']]) {
    element.addEventListener('change', update_display);
}

UX['filter-toggle'].addEventListener('click', () => open_filter_panel(UX['filter-panel'].hidden));
UX['filter-close'].addEventListener('click', () => {
    open_filter_panel(false);
    // On a phone the panel is long: bring the results back into view
    if(UX['filter-toggle'].getBoundingClientRect().top < 0) scroll_to_top();
    UX['filter-toggle'].focus({preventScroll: true});
});
UX['filter-panel'].addEventListener('keydown', (event) => {
    if(event.key==='Escape') {
        open_filter_panel(false);
        UX['filter-toggle'].focus();
    }
});
UX['filter-panel'].addEventListener('change', (event) => {
    const input = event.target;
    const domain = input.closest('.filter-group').dataset.domain;
    if(input.type=='radio') { // combination mode of the domain
        Global['mode'][domain] = input.value;
        update_display();
        return;
    }
    if(input.checked) {
        Global['selected'][domain].add(input.value);
    }
    else {
        Global['selected'][domain].delete(input.value);
    }
    update_display();
});
UX['filter-panel'].addEventListener('click', (event) => {
    const button = event.target.closest('.filter-clear');
    if(button) {
        Global['selected'][button.dataset.domain].clear();
        update_display();
    }
});

UX['active-filters'].addEventListener('click', (event) => {
    if(event.target.closest('.reset-all')) {
        reset_all_filters();
        UX['search'].focus();
        return;
    }
    const pill = event.target.closest('.pill');
    if(pill) {
        remove_filter(pill);
        // keep the keyboard focus in the pill area
        const next = UX['active-filters'].querySelector('.pill, .reset-all');
        (next || UX['search']).focus();
    }
});

listing_element.addEventListener('click', (event) => {
    const goto_graph = event.target.closest('.goto-graph');
    if(goto_graph) {
        show_in_graph(+goto_graph.dataset.k);
        return;
    }
    const place_link = event.target.closest('.place-link');
    if(place_link) {
        event.preventDefault();
        jump_to_place(place_link);
        return;
    }
    const tag = event.target.closest('.tag[data-keyword]');
    if(tag) {
        filter_on_tag(tag);
        return;
    }
    if(event.target.closest('.reset-all')) {
        reset_all_filters();
        UX['search'].focus();
    }
});



// ---------------------------------------------------------------------------
// Initialization once the data is loaded
// ---------------------------------------------------------------------------

// Text used by the search box for one company (themes included, with their explanation)
function company_search_text(entry, explanations) {
    // names as written ("b<>com" is not html) and without punctuation ("bcom")
    const names = get_string(entry['Name']) + ' ' + get_string(entry['Name-long']);
    const fields = ['Description', 'Info', 'Keywords', 'Product', 'Scientific-domain', 'Application-domain'];
    let txt = names + ' ' + names.replace(/[^\p{L}\p{N} ]/gu, '') + ' ' + fields.map((f) => strip_html(get_string(entry[f]))).join(' ');
    txt += ' ' + export_places_to_txt(get_list_places(entry['Place']));
    for(const domain of ['Scientific-domain', 'Application-domain']) {
        for(const keyword of (entry[domain] || [])) {
            txt += ' ' + (explanations[keyword] || '');
        }
    }
    return search_str(txt);
}

function company_in_france(entry) {
    const places = get_list_places_exhaustive(get_list_places(entry['Place']));
    return places.some((p) => p['Country']=='France');
}

function keyword_explanations(data) {
    const explanations = {};
    for(const domain of ['Scientific-domain', 'Application-domain']) {
        for(const k of data['Keywords'][domain]) {
            if(!is_type_string(k)) {
                const keyword = Object.keys(k)[0];
                explanations[keyword] = k[keyword];
            }
        }
    }
    return explanations;
}

function answer(data) {

    // sort data by French alphabetic order
    data['Listing'].sort((a,b) => compare_fr(a['Name'], b['Name']));
    company_data = data;

    const explanations = keyword_explanations(data);
    Global['search-text'] = data['Listing'].map((entry) => company_search_text(entry, explanations));
    Global['in-france'] = data['Listing'].map(company_in_france);
    Global['has-jobs'] = data['Listing'].map((entry) => get_string(entry['Jobs'])!='');
    Global['size-class'] = data['Listing'].map(size_class);
    Global['places'] = data['Listing'].map((entry) => get_list_places_exhaustive(get_list_places(entry['Place'])).map(place_location));
    build_place_filter();
    build_sizes();

    for(const domain of ['scientific', 'application']) {
        build_keywords(data['Keywords'][DOMAIN_KEY[domain]], domain, count_keywords(data['Listing'], DOMAIN_KEY[domain]));
    }

    // Number of companies with a job page, shown on the toggle
    document.querySelector('#jobs-count').textContent = Global['has-jobs'].filter((x) => x).length;
    build_shortcuts();

    update_display();

    // lien direct vers la fiche d'une entreprise : ?e=Nom (utilisé par la carte)
    const wanted = new URLSearchParams(location.search).get('e');
    if(wanted) {
        const simple = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
        const k = data['Listing'].findIndex((entry) => simple(entry['Name'])==simple(wanted));
        if(k>=0) show_card(k);
    }
}




// ---------------------------------------------------------------------------
// Places of a company (for the links to the map of France)
// ---------------------------------------------------------------------------

// Same rules as scripts/liblisting/places.py
function split_names(value) {
    if(value==undefined) return [];
    if(is_type_string(value)) return value.split(',').map((v) => v.trim()).filter((v) => v!='');
    if(is_type_array(value)) return value.flatMap(split_names);
    return [String(value)];
}

function expand_places(place) {
    if(place==undefined) return [];
    if(is_type_string(place)) return split_names(place).map((c) => ({'Country': 'France', 'City': c, 'Coordinates': null, 'Address': ''}));
    if(is_type_array(place)) return place.flatMap(expand_places);
    const countries = split_names(place['Country']);
    const cities = split_names(place['City']).length>0 ? split_names(place['City']) : split_names(place['State']);
    if(cities.length==0 && place['International']===true && countries.length==0) return [];
    const single = countries.length<=1 && cities.length<=1;
    const precise = single ? (place['Coordinates'] || null) : null;
    const address = single ? (place['Address'] || '') : '';
    const out = [];
    for(const country of (countries.length>0 ? countries : ['France'])) {
        for(const city of (cities.length>0 ? cities : [''])) {
            out.push({'Country': country, 'City': city, 'Coordinates': precise, 'Address': address});
        }
    }
    return out;
}

function map_place_key(country, city) {
    return city=='' ? country : `${country}/${city}`;
}

// Number of employees of a company (null if unknown), used by the graph
function employees_count(entry) {
    const m = String(entry['Employees'] ?? '').match(/\d[\d\s]*/);
    if(m==null) return null;
    const N = parseInt(m[0].replace(/\s/g, ''));
    return N>0 ? N : null;
}

// ---------------------------------------------------------------------------
// Links between the list and the graph
// ---------------------------------------------------------------------------

function scroll_to(element) {
    const go = () => jump_to_target(element);
    if(document.documentElement.classList.contains('embedded') && window.parentIFrame!=undefined) {
        window.parentIFrame.size();
        setTimeout(go, 250);
    }
    else {
        go();
    }
}

// The card of a company in the alphabetical list, briefly highlighted
function show_card(k) {
    UX['sorting']['list'].checked = true;
    UX['sorting']['alphabetical'].checked = true;
    update_display();
    const card_id = company_data['Listing'][k]['Name'].replace(/[^A-Z0-9]/ig, '_');
    if(document.getElementById(card_id)==null) reset_all_filters(); // the filters hide this company
    const card = document.getElementById(card_id);
    if(card==null) return;
    card.setAttribute('tabindex', '-1');
    card.classList.remove('is-target');
    void card.offsetWidth; // restart the highlight animation
    card.classList.add('is-target');
    scroll_to(card);
}

// The company and its closest neighbors in the graph
function show_in_graph(k) {
    UX['sorting']['graph'].checked = true;
    update_display();
    GRAPH['trail'] = [k];
    graph_render();
    scroll_to(GRAPH['element']);
}
