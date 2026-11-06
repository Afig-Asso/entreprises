"use strict";

// local
//const url = '../json/data.json'

// Site
const url = 'https://raw.githubusercontent.com/Afig-Asso/entreprises/main/json/data.json'

const listing_element = document.querySelector('#listing-company');

const selection_element = document.querySelector('#selection-listing-company');



const UX = {
    'sorting': {'alphabetical':null, 'place':null},
    'details': null,
    'search': null, // text input
    'france-only': null, // checkbox
    'filter-keyword-container': {
        'scientific-domain':null, 
        'application-domain':null, 
        'check':{'scientific':null, 'application':null},
        'uncheck':{'scientific':null, 'application':null},
    },
    'filter-keyword-scientific-domain': [],
    'filter-keyword-application-domain': [],
};

const Global = {
    'active-keyword-set': {
        'scientific': null,
        'application': null,
    },
    'active-entry': null, // company entry that are currently displayed
    'search-text': null, // per company: searchable text (name, description, places, etc.), without accents
    'in-france': null, // per company: true if the company has at least one place in France
}

// Badges shown next to the name, from the 'Highlight' key of data.yaml
const HIGHLIGHT_BADGES = [
    {'match': (h) => h.includes('Graphics') && h.includes('R&D'), 'text': 'Acteur majeur du graphique, R&amp;D avancée en France'},
    {'match': (h) => h.includes('R&D'), 'text': 'R&amp;D avancée en France'},
];


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
    listing_element.innerHTML = `
    <p class="loading-message loading-error" role="alert">
    Impossible de charger la liste des entreprises (${error.message}).
    Réessayez dans quelques instants, ou consultez directement
    <a target="_blank" href="https://github.com/Afig-Asso/entreprises">le dépôt GitHub du listing</a>.
    </p>`;
}




function neutral_str(s){
    return s.toLowerCase();
}

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



function get_string_recursive(element, out) {
    
    if(element==undefined){
        return;
    }
    else if((typeof element=="string") || (typeof stringObject=="string")) {
        if(out[0]!=''){
            out[0] += ', ';
        }
        out[0] += element;
    }
    else if(typeof element=='number') {
        out[0] += element;
    }
    else if(Array.isArray(element)==true) {
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
            txt += `</a>`
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
    return out;
}

function display_div(txt, className, pre='') {
    if(txt==''){
        return '';
    }

    return `<div class="${className}">${pre}${txt}</div>\n`;
}

function is_type_string(element) {
    return ((typeof element=="string") || (typeof stringObject=="string"));
}
function is_type_array(element) {
    return Array.isArray(element);
}

function get_list_places(element) {
    let L = [];
    if(is_type_string(element)) {
        let element_split = element.split(',')
        for(let e of element_split){
            L.push({'City':e});
        }
    }
    else if( is_type_array(element) ) {
        L = element;
    }
    else { //Dictionnary 
        L = get_list_places([element])
    }
    return L;
}

function get_list_places_exhaustive(element) {
    let L = [];
    for(let e of element){
        if(is_type_string(e)) {
            L.push({'Country': 'France', 'City': e});
        }
        else { // dictionary

            // Special case of international
            if(e['International']!=undefined) {
                L.push(e);
            }
            else{
                let D = {...e};
                // Add France if no country
                if(e['Country']==undefined) { 
                    D['Country']='France';
                }
                
                if(is_type_array(e['Country'])) { // multiple countries
                    for(let country of e['Country']) {
                        let D = {...e};
                        D['Country'] = country;
                        L.push(D);
                    }
                }
                else if(is_type_array(e['City'])) { // multiple cities
                    for(let city of e['City']) {
                        let D = {...e};
                        if(e['Country']==undefined) { // in case France is omitted
                            D['Country']='France';
                        }
                        D['City'] = city;
                        L.push(D);
                    }
                }
                else { //only one city
                    L.push(D);
                }
            }
        }
    }
    return L;
}

function export_places_to_txt(data) {

    let txt = ''
    for(let element of data){
        let entry_txt = '';

        let country_entry = element['Country'];
        if(country_entry!=undefined) {
            if(is_type_array(country_entry)){
                entry_txt += country_entry.join(', ');
            }
            else {
                entry_txt += country_entry;
            }
        }

        let state_entry = element['State'];
        if(state_entry!=undefined) {
            entry_txt += '/'+state_entry;
        }

        let city_entry = element['City'];
        if(city_entry!=undefined) {
            if(entry_txt!='') {
                entry_txt += '/';
            }
            if(is_type_array(city_entry)) {
                let city_txt = city_entry.join(', ');
                if(country_entry!=undefined){
                    city_txt = '{'+city_txt+'}';
                }
                entry_txt += city_txt;
            }
            else if(is_type_string(city_entry)) {
                entry_txt += city_entry;
            }
        }

        let exact_entry = element['Exact'];
        if(exact_entry!=undefined) {
            entry_txt += ' ('+exact_entry+')';
        }

        let international_entry = element['International'];
        if(international_entry==true) {
            entry_txt = 'International';
        }

        if(txt!='' && entry_txt!=''){
            txt +=', ';
        }
        txt += entry_txt;
    }

    return txt;
}


function highlight_badge(entry) {
    const highlight = get_string(entry['Highlight'])[0];
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

function display_company_entry(entry) {

    const name = entry['Name'];
    let id = name.replace(/[^A-Z0-9]/ig, "_");
    const url = entry['url'];
    const badge = highlight_badge(entry);
    if(UX['details'].checked==false) {
        return `
        <div id="${id}">\n
        <h3><a target="_blank" href="${url}">${name}</a>${badge}</h3>\n
        </div>
        `;
    }

    let name_long = get_string(entry['Name-long']);
    if(name_long!=''){
        name_long = `(${name_long})`;
    }
    let description = get_string(entry['Description']);
    let info = get_string(entry['Info']);
    const keywords = get_string(entry['Keywords'])
    const scientific_domain = get_string(entry['Scientific-domain']);
    const application_domain = get_string(entry['Application-domain']);
    const product = get_string(entry['Product']);
    const jobs = get_string(entry['Jobs']);
    const employees = get_string(entry['Employees']);
    let number_txt='';
    if(employees!='' && Number(employees)>100) {
        number_txt = String(Number(employees).toLocaleString('fr'));
    }
    const place_struct = get_list_places(entry['Place']);
    const place_txt = export_places_to_txt(place_struct);
    //const place_split = get_list_places_exhaustive(place_struct);
    

    let txt = ''

    txt += `<div id="${id}">\n`;
    txt += `<h3><a target="_blank" href="${url}">${name}</a>${badge}</h3> ${name_long} \n`;
    txt += `<div class="content">\n`;
    txt += display_div(description, 'description');
    txt += display_div(keywords, 'keywords', '<strong>Mot clés</strong>: ')
    txt += display_div(info, 'info', '<strong>Remarque</strong>: ');
    txt += display_div(product, 'products', '<strong>Produits</strong>: ');
    txt += display_div(place_txt, 'place', '<strong>Localisation</strong>: ');

    txt += display_div(number_txt, 'employees', "<strong>Nombre d'employés</strong>: ");
  
    txt += display_div(scientific_domain, 'scientific-domain', '<strong>Domaine scientifique</strong>: ');
    txt += display_div(application_domain, 'application-domain', "<strong>Domaine d'application</strong>: ");
    if(jobs!=''){
        txt += `[<a target="_blank" href="${jobs}">Jobs</a>]\n`
    }


    txt += `</div>\n`; // end Content
    txt += '</div>\n'; //end ID

    return txt;
}


function plural_companies(N) {
    return N>1 ? `${N} entreprises` : `${N} entreprise`;
}

function display_summary(N) {
    let txt = `<p class="listing-summary"><strong>${N>1 ? N+' entreprises répertoriées' : N+' entreprise répertoriée'}</strong>`;
    const updated = company_data['Updated'];
    if(updated!=undefined) {
        const date = new Date(updated+'T12:00:00');
        txt += ` <span class="listing-updated">(mise à jour le ${date.toLocaleDateString('fr-FR', {day:'numeric', month:'long', year:'numeric'})})</span>`;
    }
    txt += '</p>\n';
    if(N==0) {
        txt += '<p class="no-result">Aucune entreprise ne correspond à la recherche et aux filtres sélectionnés.</p>\n';
    }
    return txt;
}

function display_city(city, entries) {
    let HTML_txt = `<h2 class="title-place title-city">${city} (${plural_companies(entries.length)})</h2>\n`;
    HTML_txt += '<div class="container-place-city">\n';
    for(let entry_city of entries) {
        HTML_txt += display_company_entry(entry_city);
    }
    HTML_txt += '</div>\n';
    return HTML_txt;
}

function display_company(data, N_displayed) {
    let HTML_txt = display_summary(N_displayed);

    if(UX['sorting']['alphabetical'].checked) {
        let N = data.length;
        for(let k=0; k<N; ++k){
            let entry = data[k];
            HTML_txt += display_company_entry(entry);
        }
    }
    else if(UX['sorting']['place'].checked) {
        const all_countries = Object.keys(data).sort(compare_fr);

        // Display France first
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
                const N_companies = data[country].length;
                HTML_txt += `<h2 class="title-place">${country} (${plural_companies(N_companies)})</h2>\n`
                HTML_txt += '<div class="container-place">\n'
                for(let entry_country of data[country]) {
                    HTML_txt += display_company_entry(entry_country);
                }
                HTML_txt += '</div>\n'
            }
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
                    if(sorted_data['International']==undefined){
                        sorted_data['International'] = [];
                    }
                    sorted_data['International'].push(entry);
                }
                else { // Should not happen
                    console.log("Error sorting place for entry ", entry, place);
                }
            }
            else{
                if(sorted_data[country]==undefined) { // create new entry for this country
                    if(country=='France') {
                        sorted_data['France'] = {}; // France is also sorted by city
                    }
                    else {
                        sorted_data[country] = [];
                    }
                }                

                if(country=='France') { // then also sort by city
                    let city = place['City'];
                    if(city==undefined) {
                        console.log("Error reading city for entry", entry);
                    }
                    while(city[0]==' '){
                        city = city.substring(1,city.length);
                    }
                    if(sorted_data['France'][city]==undefined) {
                        sorted_data['France'][city] = [];
                    }
                    sorted_data['France'][city].push(entry);
                }
                else {
                    // check no duplicate before adding
                    const N = sorted_data[country].length;
                    if(N==0) {
                        sorted_data[country].push(entry);
                    }
                    else {
                        const previous_name = sorted_data[country][N-1]['Name'];
                        const current_name = entry['Name'];
                        if(previous_name!==current_name) {
                            sorted_data[country].push(entry);
                        }
                    }
                }
            }
        }
    }

    return sorted_data;
    
}



function compute_active_entry(domain, domain_label, data) {

    const N = data.length;
    let active_entry = [];
    for(let k=0; k<N; k++){
        active_entry.push(0);
    }
    for(let k=0; k<domain.length; k++) {
        if(domain[k].checked==true) {
            let domain_target = domain[k].value;

            for(let k=0; k<N; k++) {
                if(active_entry[k]==false) {
                    const candidate = data[k];
                    const candidate_domain = candidate[domain_label];

                    if(candidate_domain!=undefined){
                        const find_domain = candidate_domain.some((x) => neutral_str(x)==neutral_str(domain_target) );
                        if(find_domain==true){
                            active_entry[k] = true;
                        }
                    }
                    else { // does not filter along non existing criteria
                        active_entry[k] = true;
                    }
                }
            }
        }
    }

    return active_entry;
}

function filter_active_entry_keyword(data, keyword_label, active_keywords, active_entry) {

    const N = company_data['Listing'].length;
    for(let k=0; k<N; k++) {
        const entry = data[k];
        const entry_keyword = entry[keyword_label];

        if(active_entry[k]==1 && entry_keyword[0]!=='Arbitraire') { // Arbitraire is considered as an accept
            const match = entry_keyword.some( (x) => active_keywords.has(x) );
            if(match===false) {
                active_entry[k] = 0;
            }
        }

    }
}

function update_display(event) {

    if(company_data==undefined) { // data not loaded yet
        return;
    }
    const N = company_data['Listing'].length;
    // set all active entry to 1
    for(let k=0; k<N; k++) {
        Global['active-entry'][k] = 1;
    }

    // Create a set with all active keywords to speed-up the lookup
    Global["active-keyword-set"]["scientific"].clear();
    Global["active-keyword-set"]["application"].clear();
    for(let element of UX['filter-keyword-scientific-domain']) {
        if(element.checked===true) {
            Global["active-keyword-set"]["scientific"].add(element.value);
        }
    }
    for(let element of UX['filter-keyword-application-domain']) {
        if(element.checked===true) {
            Global["active-keyword-set"]["application"].add(element.value);
        }
    }
    


    filter_active_entry_keyword(company_data['Listing'], 'Scientific-domain', Global['active-keyword-set']['scientific'], Global['active-entry']);
    filter_active_entry_keyword(company_data['Listing'], 'Application-domain', Global['active-keyword-set']['application'], Global['active-entry']);




    // filter by text search (every word must be found, accents ignored) and by location
    const search_words = search_str(UX['search'].value).split(/\s+/).filter((w) => w!='');
    const france_only = UX['france-only'].checked;
    for(let k=0; k<N; k++) {
        if(Global['active-entry'][k]) {
            if(france_only && !Global['in-france'][k]) {
                Global['active-entry'][k] = 0;
            }
            else if(!search_words.every((w) => Global['search-text'][k].includes(w))) {
                Global['active-entry'][k] = 0;
            }
        }
    }

    // filter data
    let data_to_display = []
    for(let k=0; k<N; k++) {
        if(Global['active-entry'][k]) {
            data_to_display.push(company_data['Listing'][k]);
        }
    }
    const N_displayed = data_to_display.length;

    if(UX['sorting']['place'].checked){
        data_to_display = sort_by_place(data_to_display);
    }

    listing_element.innerHTML = display_company(data_to_display, N_displayed);
   

}




function build_sorting(container) {
    const sorting_input_element = document.createElement('div');
    sorting_input_element.classList.add('sorting_input');

    sorting_input_element.innerHTML = `
    <input type="radio" id="sort-alphabetical" name="sort" value="Alphabetical" checked>
    <label for="sort-alphabetical">Alphabétique</label>
    <input type="radio" id="sort-place" name="sort" value="Localization">
    <label for="sort-place">Localité</label>
    `;

    container.appendChild(sorting_input_element);
    UX['sorting']['alphabetical'] = document.querySelector('#sort-alphabetical');
    UX['sorting']['place']= document.querySelector('#sort-place');
    container.addEventListener('change', update_display);
}

function build_detail_button(container) {
    const button_detail = document.createElement('div');
    button_detail.innerHTML = `
    <input type="checkbox" id="display-details" name="detail" checked>
    <label for="display-details">Détails</label>
    <input type="checkbox" id="france-only" name="france-only" class="france-only-checkbox">
    <label for="france-only">France uniquement</label>
    `;
    container.appendChild(button_detail);
    UX['details'] = document.querySelector('#display-details');
    UX['france-only'] = document.querySelector('#france-only');
    container.addEventListener('change', update_display);

}

function build_search(container) {
    const search_element = document.createElement('div');
    search_element.classList.add('search-container');
    search_element.innerHTML = `
    <input type="search" id="search-company" class="search-input" placeholder="Rechercher (nom, ville, produit...)" aria-label="Rechercher une entreprise">
    `;
    container.appendChild(search_element);
    UX['search'] = document.querySelector('#search-company');
    UX['search'].addEventListener('input', () => { if(company_data!=undefined) { update_display(); } });
}

function build_filter_keyword(container) {

    const filter_keywords_dropdown_element = document.createElement('div');
    filter_keywords_dropdown_element.innerHTML = `
    <button type="button" class="button-basic dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Filtre mot clés
    </button>
    <div class="dropdown-menu filter-keyword-menu">
    <div class="container-checkbox container-checkbox-scientific-domain">
    <strong>Domaine Scientifique</strong>
    <div class="check-all-container">Tout
        <button type="button" class="button-basic" id="button-check-all-scientific">Cocher</button>
        <button type="button" class="button-basic" id="button-uncheck-all-scientific">Décocher</button>
    </div>
    </div>
    <div class="container-checkbox container-checkbox-application-domain">
    <strong>Domaine d'Application</strong>
    <div class="check-all-container">Tout
        <button type="button" class="button-basic" id="button-check-all-application">Cocher</button>
        <button type="button" class="button-basic" id="button-uncheck-all-application">Décocher</button>
    </div>
    </div>
    </div>
    `
    container.appendChild(filter_keywords_dropdown_element);
    UX['filter-keyword-container']['scientific-domain'] = selection_element.querySelector('.container-checkbox-scientific-domain');
    UX['filter-keyword-container']['application-domain'] = selection_element.querySelector('.container-checkbox-application-domain');

    UX['filter-keyword-container']['check']['scientific'] = selection_element.querySelector('#button-check-all-scientific');
    UX['filter-keyword-container']['uncheck']['scientific'] = selection_element.querySelector('#button-uncheck-all-scientific');
    UX['filter-keyword-container']['check']['application'] = selection_element.querySelector('#button-check-all-application');
    UX['filter-keyword-container']['uncheck']['application'] = selection_element.querySelector('#button-uncheck-all-application');
    UX['filter-keyword-container']['check']['scientific'].addEventListener('click',change_filter_check);
    UX['filter-keyword-container']['uncheck']['scientific'].addEventListener('click',change_filter_check);
    UX['filter-keyword-container']['check']['application'].addEventListener('click',change_filter_check);
    UX['filter-keyword-container']['uncheck']['application'].addEventListener('click',change_filter_check);
    
}

function change_filter_check(event) {

    const id = event.currentTarget.id;
    if(id==='button-check-all-scientific') {
        for(let k=0; k<UX['filter-keyword-scientific-domain'].length; k++){
            UX['filter-keyword-scientific-domain'][k].checked=true;
        }
    }
    if(id==='button-uncheck-all-scientific') {
        for(let k=0; k<UX['filter-keyword-scientific-domain'].length; k++){
            UX['filter-keyword-scientific-domain'][k].checked=false;
        }
    }
    if(id==='button-check-all-application') {
        for(let k=0; k<UX['filter-keyword-application-domain'].length; k++){
            UX['filter-keyword-application-domain'][k].checked=true;
        }
    }
    if(id==='button-uncheck-all-application') {
        for(let k=0; k<UX['filter-keyword-application-domain'].length; k++){
            UX['filter-keyword-application-domain'][k].checked=false;
        }
    }
    update_display();


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

// Keep only one keyword of a domain checked
function keep_only_keyword(event) {
    const label = event.currentTarget.dataset.label;
    const keyword = event.currentTarget.dataset.keyword;
    for(const element of UX['filter-keyword-'+label]) {
        element.checked = (element.value===keyword);
    }
    update_display();
}

function build_keywords(data, label, count){

    const container = document.createElement('div');
    container.classList.add('selection-'+label);


    for(let data_keyword of data){
        
        let keyword = data_keyword;
        let explanation = undefined;
        if(is_type_string(data_keyword)==false && is_type_array(Object.keys(data_keyword))) {
            keyword = Object.keys(data_keyword)[0];
            explanation = data_keyword[keyword];
        }
        let id = keyword.replace(/[^A-Z0-9]/ig, "_");

        let content_checkbox = undefined;
        if(explanation!=undefined) {
            content_checkbox = `<span title="${explanation}">${keyword}</span> <img for="display-${label}-${id}" title="${explanation}" class="question-mark">`;
        }
        else {
            content_checkbox = `<span>${keyword}</span>`;
        }
    
        const N_keyword = count[keyword] || 0;
        const new_input = document.createElement('div');
        new_input.classList.add(label+'-entry');
        new_input.innerHTML = `
        <input type="checkbox" class="keyword-checkbox-element" id="display-${label}-${id}" name="${label}" value="${keyword}" checked>
        <label for="display-${label}-${id}"> ${content_checkbox} <span class="keyword-count">(${N_keyword})</span></label>
        <button type="button" class="keyword-only" title="Afficher uniquement ce domaine" data-label="${label}" data-keyword="${keyword}">seul</button>
        `;

        container.appendChild(new_input);

        UX['filter-keyword-container'][label].appendChild(new_input);

        new_input.querySelector('input').addEventListener('change', update_display);
        new_input.querySelector('.keyword-only').addEventListener('click', keep_only_keyword);
        UX['filter-keyword-'+label].push(new_input.querySelector('input'));


    }
    selection_element.appendChild(container);

}

const ux_left = document.createElement('div');
ux_left.classList.add('ux-left');
const ux_right = document.createElement('div');
ux_right.classList.add('ux-right');
selection_element.appendChild(ux_left);
selection_element.appendChild(ux_right);

const ux_middle = document.createElement('div');
ux_middle.classList.add('ux-middle');
selection_element.insertBefore(ux_middle, ux_right);

build_sorting(ux_left);
build_detail_button(ux_left);
build_search(ux_middle);
build_filter_keyword(ux_right);

// Text used by the search box for one company
function company_search_text(entry) {
    const fields = ['Name', 'Name-long', 'Description', 'Info', 'Keywords', 'Product', 'Scientific-domain', 'Application-domain'];
    let txt = fields.map((f) => strip_html(get_string(entry[f])[0])).join(' ');
    txt += ' ' + export_places_to_txt(get_list_places(entry['Place']));
    return search_str(txt);
}

function company_in_france(entry) {
    const places = get_list_places_exhaustive(get_list_places(entry['Place']));
    return places.some((p) => p['Country']=='France');
}

function answer(data) {


    // sort data by French alphabetic order
    data['Listing'].sort((a,b) => compare_fr(a['Name'], b['Name']));
    company_data = data;

    Global['search-text'] = data['Listing'].map(company_search_text);
    Global['in-france'] = data['Listing'].map(company_in_france);

    build_keywords(data['Keywords']['Scientific-domain'], 'scientific-domain', count_keywords(data['Listing'], 'Scientific-domain'));
    build_keywords(data['Keywords']['Application-domain'], 'application-domain', count_keywords(data['Listing'], 'Application-domain'));


    Global["active-keyword-set"]["scientific"] = new Set();
    Global["active-keyword-set"]["application"] = new Set();

    // Allocate the active entry to true for all of them
    Global['active-entry'] = [];
    const N_company = company_data['Listing'].length;
    for(let k=0; k<N_company; k++){
        Global['active-entry'].push(1);
    }


    update_display();
        
}