"use strict";

// local
//const url = '../json/data.json'

// Site
const url = 'https://raw.githubusercontent.com/Afig-Asso/entreprises/main/json/data.json'

const listing_element = document.querySelector('#listing-company');
const summary_element = document.querySelector('#listing-summary');

// Controls of the toolbar (static HTML in index.html)
const UX = {
    'sorting': {
        'alphabetical': document.querySelector('#sort-alphabetical'),
        'place': document.querySelector('#sort-place'),
    },
    'details': document.querySelector('#display-details'),
    'france-only': document.querySelector('#france-only'),
    'jobs-only': document.querySelector('#jobs-only'),
    'search': document.querySelector('#search-company'),
    'filter-toggle': document.querySelector('#filter-toggle'),
    'filter-count': document.querySelector('#filter-toggle .filter-count'),
    'filter-panel': document.querySelector('#filter-panel'),
    'filter-close': document.querySelector('#filter-close'),
    'active-filters': document.querySelector('#active-filters'),
    'filter-options': {
        'scientific': document.querySelector('.filter-group[data-domain="scientific"] .filter-options'),
        'application': document.querySelector('.filter-group[data-domain="application"] .filter-options'),
    },
};

// Name of the domain keys in data.json
const DOMAIN_KEY = {
    'scientific': 'Scientific-domain',
    'application': 'Application-domain',
};

const Global = {
    // Keywords selected in the filter panel. Empty set = no filter on this domain.
    'selected': {
        'scientific': new Set(),
        'application': new Set(),
    },
    'search-text': null, // per company: searchable text (name, description, places, themes...), without accents
    'in-france': null, // per company: true if the company has at least one place in France
    'has-jobs': null, // per company: true if a job page is given
    'rendered-ids': null, // ids already used in the current rendering (a company can appear several times by place)
};

// Badges shown next to the name, from the 'Highlight' key of data.yaml
const HIGHLIGHT_BADGES = [
    {'match': (h) => h.includes('Graphics') && h.includes('R&D'), 'text': 'Acteur majeur du graphique, R&amp;D en France'},
    {'match': (h) => h.includes('R&D'), 'text': 'R&amp;D en France'},
];

const NEW_TAB = '<span class="visually-hidden"> (nouvel onglet)</span>';

let company_data;



fetch(url)
.then(convertJSON)
.then(answer)
.catch(display_loading_error);

function convertJSON(response){
  if(!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

function display_loading_error(error) {
    console.log('Error while loading the listing', error);
    summary_element.textContent = '';
    listing_element.innerHTML = `
    <p class="loading-message loading-error" role="alert">
    Impossible de charger la liste des entreprises (${error.message}).
    Réessayez dans quelques instants, ou consultez directement
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
        else if(is_type_array(e['City'])) { // multiple cities
            for(let city of e['City']) {
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



// ---------------------------------------------------------------------------
// Display of one company
// ---------------------------------------------------------------------------

function highlight_badge(entry) {
    const highlight = get_string(entry['Highlight']);
    if(highlight=='') {
        return '';
    }
    for(const badge of HIGHLIGHT_BADGES) {
        if(badge['match'](highlight)) {
            return ` <span class="highlight-badge">${badge['text']}</span>`;
        }
    }
    return '';
}

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
    const pre = label=='' ? '' : `<strong class="field-label">${label}</strong><span class="field-sep">: </span>`;
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

function display_company_entry(entry, level) {

    const name = entry['Name'];
    const id_attribute = company_id_attribute(name);
    const url = entry['url'];
    const badge = highlight_badge(entry);
    const title = `<h${level} class="company-name"><a target="_blank" href="${url}">${name}${NEW_TAB}</a>${badge}</h${level}>`;

    if(UX['details'].checked==false) {
        return `<li${id_attribute} class="company company-compact">${title}</li>\n`;
    }

    const name_long = get_string(entry['Name-long']);
    const description = get_string(entry['Description']);
    const info = get_string(entry['Info']);
    const keywords = get_string(entry['Keywords'])
    const product = get_string(entry['Product']);
    const jobs = get_string(entry['Jobs']);
    const employees = get_string(entry['Employees']);
    let number_txt='';
    if(employees!='' && Number(employees)>100) {
        number_txt = String(Number(employees).toLocaleString('fr'));
    }
    const place_txt = export_places_to_txt(get_list_places(entry['Place']));

    let txt = `<li${id_attribute} class="company">\n${title}`;
    if(name_long!='') {
        txt += `<div class="name-long">(${name_long})</div>`;
    }
    txt += '\n<div class="content">\n';
    txt += display_div(description, 'description');
    txt += display_div(keywords, 'keywords', 'Mot clés')
    txt += display_div(info, 'info', 'Remarque');
    txt += display_div(product, 'products', 'Produits');
    txt += display_div(place_txt, 'place', 'Localisation');
    txt += display_div(number_txt, 'employees', "Nombre d'employés");
    txt += display_div(display_tags(entry['Scientific-domain'], 'scientific'), 'scientific-domain', 'Domaine scientifique');
    txt += display_div(display_tags(entry['Application-domain'], 'application'), 'application-domain', "Domaine d'application");
    if(jobs!=''){
        txt += `<div class="jobs"><a class="jobs-link" target="_blank" href="${jobs}">Offres d'emploi<span class="visually-hidden"> chez ${esc(name)} (nouvel onglet)</span></a></div>\n`
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
    return Global['selected']['scientific'].size>0 || Global['selected']['application'].size>0
        || UX['france-only'].checked || UX['jobs-only'].checked || UX['search'].value.trim()!='';
}

function display_summary(N) {
    const N_total = company_data['Listing'].length;
    let txt = '';
    if(any_filter_active()) {
        txt = `<strong>${N>1 ? N+' entreprises affichées' : N+' entreprise affichée'}</strong> sur ${N_total}`;
    }
    else {
        txt = `<strong>${N_total} entreprises répertoriées</strong>`;
    }
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
    let txt = '<ul class="company-list" role="list">\n';
    for(const entry of entries) {
        txt += display_company_entry(entry, level);
    }
    return txt + '</ul>\n';
}

function display_city(city, entries) {
    let txt = `<h3 class="title-place title-city">${city} <span class="place-count">(${plural_companies(entries.length)})</span></h3>\n`;
    txt += '<div class="container-place-city">\n' + display_list(entries, 4) + '</div>\n';
    return txt;
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

    // Display France first, sorted by city
    const french_entries = data['France'];
    if(french_entries != undefined) {
        HTML_txt += `<h2 class="title-place">France</h2>\n`
        HTML_txt += '<div class="container-place">\n'
        const all_city = Object.keys(french_entries).sort(compare_fr);

        // Display Paris first
        if(french_entries['Paris']!=undefined) {
            HTML_txt += display_city('Paris', french_entries['Paris']);
        }
        for(let city of all_city) {
            if(city!='Paris'){
                HTML_txt += display_city(city, french_entries[city]);
            }
        }
        HTML_txt += '</div>\n'
    }

    for(const country of all_countries) {
        if(country!='France') {
            HTML_txt += `<h2 class="title-place">${country} <span class="place-count">(${plural_companies(data[country].length)})</span></h2>\n`
            HTML_txt += '<div class="container-place">\n' + display_list(data[country], 3) + '</div>\n'
        }
    }

    return HTML_txt;
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

            if(country==undefined) {
                if(place['International']){ // Case of 'International:true' -> used like a country
                    country = 'International';
                }
                else { // Should not happen
                    console.log("Error sorting place for entry ", entry, place);
                    continue;
                }
            }

            if(country=='France') { // France is also sorted by city
                const city = String(place['City'] || '').trim();
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
    return entry_keyword.some((x) => selected.has(x));
}

function update_display() {

    if(company_data==undefined) { // data not loaded yet
        return;
    }
    const listing = company_data['Listing'];
    const search_words = search_str(UX['search'].value).split(/\s+/).filter((w) => w!='');
    const france_only = UX['france-only'].checked;
    const jobs_only = UX['jobs-only'].checked;

    let data_to_display = [];
    for(let k=0; k<listing.length; k++) {
        const entry = listing[k];
        if(!match_domain(entry, 'scientific') || !match_domain(entry, 'application')) continue;
        if(france_only && !Global['in-france'][k]) continue;
        if(jobs_only && !Global['has-jobs'][k]) continue;
        if(!search_words.every((w) => Global['search-text'][k].includes(w))) continue;
        data_to_display.push(entry);
    }
    const N_displayed = data_to_display.length;

    if(UX['sorting']['place'].checked){
        data_to_display = sort_by_place(data_to_display);
    }

    Global['rendered-ids'] = new Set();
    display_summary(N_displayed);
    listing_element.innerHTML = display_company(data_to_display, N_displayed);
    update_filter_state();
}

// Synchronize the checkboxes, the counter of the filter button and the active filter pills
function update_filter_state() {
    let N_selected = 0;
    for(const domain of ['scientific', 'application']) {
        const selected = Global['selected'][domain];
        N_selected += selected.size;
        for(const input of UX['filter-options'][domain].querySelectorAll('input')) {
            input.checked = selected.has(input.value);
        }
    }
    UX['filter-count'].hidden = (N_selected==0);
    UX['filter-count'].textContent = N_selected>0 ? `(${N_selected})` : '';

    // Pills of the active filters
    let pills = [];
    const search_value = UX['search'].value.trim();
    if(search_value!='') {
        pills.push({'type':'search', 'text':`Recherche : « ${esc(search_value)} »`});
    }
    for(const domain of ['scientific', 'application']) {
        for(const keyword of Global['selected'][domain]) {
            pills.push({'type':domain, 'keyword':keyword, 'text':esc(keyword)});
        }
    }
    if(UX['france-only'].checked) {
        pills.push({'type':'france-only', 'text':'France uniquement'});
    }
    if(UX['jobs-only'].checked) {
        pills.push({'type':'jobs-only', 'text':"Avec offres d'emploi"});
    }

    if(pills.length==0) {
        UX['active-filters'].hidden = true;
        UX['active-filters'].innerHTML = '';
        return;
    }
    let txt = '<span class="active-filters-label">Filtres actifs :</span> ';
    for(const pill of pills) {
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
    else {
        Global['selected'][type].delete(pill.dataset.keyword);
    }
    update_display();
}

function reset_all_filters() {
    UX['search'].value = '';
    UX['france-only'].checked = false;
    UX['jobs-only'].checked = false;
    Global['selected']['scientific'].clear();
    Global['selected']['application'].clear();
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

for(const element of [UX['sorting']['alphabetical'], UX['sorting']['place'], UX['details'], UX['france-only'], UX['jobs-only']]) {
    element.addEventListener('change', update_display);
}

UX['filter-toggle'].addEventListener('click', () => open_filter_panel(UX['filter-panel'].hidden));
UX['filter-close'].addEventListener('click', () => { open_filter_panel(false); UX['filter-toggle'].focus(); });
UX['filter-panel'].addEventListener('keydown', (event) => {
    if(event.key==='Escape') {
        open_filter_panel(false);
        UX['filter-toggle'].focus();
    }
});
UX['filter-panel'].addEventListener('change', (event) => {
    const input = event.target;
    const domain = input.closest('.filter-group').dataset.domain;
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
    const fields = ['Name', 'Name-long', 'Description', 'Info', 'Keywords', 'Product', 'Scientific-domain', 'Application-domain'];
    let txt = fields.map((f) => strip_html(get_string(entry[f]))).join(' ');
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

    for(const domain of ['scientific', 'application']) {
        build_keywords(data['Keywords'][DOMAIN_KEY[domain]], domain, count_keywords(data['Listing'], DOMAIN_KEY[domain]));
    }

    update_display();
}
