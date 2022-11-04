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
}


let company_data;




fetch(url)
.then(convertJSON)
.then(answer);

function convertJSON(response){
  return response.json();
}




function neutral_str(s){
    return s.toLowerCase();
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
            txt += `<a href="${url}">`
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


function display_company_entry(entry) {

    
    const name = entry['Name'];
    let id = name.replace(/[^A-Z0-9]/ig, "_");
    const url = entry['url'];
    if(UX['details'].checked==false) {
        return `
        <div id="${id}">\n
        <h3><a href="${url}">${name}</a></h3> <br>\n
        </div>
        `;
    }

    let name_long = get_string(entry['Name-long']);
    if(name_long!=''){
        name_long = `(${name_long})`;
    }
    let description = get_string(entry['Description']);
    let info = get_string(entry['Info']);
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
    txt += `<h3><a href="${url}">${name}</a></h3> ${name_long} <br>\n`;
    txt += `<div class="content">\n`;
    txt += display_div(description, 'description');
    txt += display_div(info, 'info', '<strong>Remarque</strong>: ');
    txt += display_div(product, 'products', '<strong>Produits</strong>: ');
    txt += display_div(place_txt, 'place', '<strong>Localisation</strong>: ');

    txt += display_div(number_txt, 'employees', "<strong>Nombre employés</strong>: ");
  
    txt += display_div(scientific_domain, 'scientific-domain', '<strong>Domaine scientifique</strong>: ');
    txt += display_div(application_domain, 'application-domain', "<strong>Domaine d'application</strong>: ");
    if(jobs!=''){
        txt += `[<a href="${jobs}">Jobs</a>]\n`
    }


    txt += `</div>\n`; // end Content
    txt += '</div>\n'; //end ID

    return txt;
}


function display_company(data, sorted_type) {
    let HTML_txt = '';

    if(UX['sorting']['alphabetical'].checked) {
        let N = data.length;
        for(let k=0; k<N; ++k){
            let entry = data[k];
            HTML_txt += display_company_entry(entry);
        }
    }
    else if(UX['sorting']['place'].checked) {
        const all_countries = Object.keys(data).sort();

        // Display France first
        const french_entries = data['France'];
        if(french_entries != undefined) {
            HTML_txt += `<h2 class="title-place">France</h2>\n`
            HTML_txt += '<div class="container-place">\n'
            const all_city = Object.keys(french_entries).sort();
            for(let city of all_city) {
                HTML_txt += `<h2 class="title-place title-city">${city}</h2>\n`
                HTML_txt += '<div class="container-place-city">\n'
                for(let entry_city of data['France'][city]) {
                    HTML_txt += display_company_entry(entry_city);
                }
                HTML_txt += '</div>\n'
            }
            HTML_txt += '</div>\n'
        }

        for(const country of all_countries) {
            if(country!='France') {
                HTML_txt += `<h2 class="title-place">${country}</h2>\n`
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




    // filter data
    let data_to_display = []
    for(let k=0; k<N; k++) {
        if(Global['active-entry'][k]) {
            data_to_display.push(company_data['Listing'][k]);
        }
    }

    if(UX['sorting']['place'].checked){
        data_to_display = sort_by_place(data_to_display);
    }

    

    listing_element.innerHTML = display_company(data_to_display, UX);
   

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
    `;
    container.appendChild(button_detail);
    UX['details'] = document.querySelector('#display-details');
    selection_element.addEventListener('change', update_display);

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

function build_keywords(data, label){

    const container = document.createElement('div');
    container.classList.add('selection-'+label);


    for(let data_keyword of data){
        
        let keyword = data_keyword;
        if(is_type_string(data_keyword)==false && is_type_array(Object.keys(data_keyword))) {
            keyword = Object.keys(data_keyword)[0];
        }
        
        let id = keyword.replace(/[^A-Z0-9]/ig, "_");
    
        const new_input = document.createElement('div');
        new_input.classList.add(label+'-entry');
        new_input.innerHTML = `
        <input type="checkbox" class="keyword-checkbox-element" id="display-${label}-${id}" name="${label}" value="${keyword}" checked>
        <label for="display-${label}-${id}">${keyword}</label>
        `;
        container.appendChild(new_input);

        UX['filter-keyword-container'][label].appendChild(new_input);

        new_input.addEventListener('change', update_display);
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

build_sorting(ux_left);
build_detail_button(ux_left);
build_filter_keyword(ux_right);

function answer(data) {

    company_data = data;


    build_keywords(data['Keywords']['Scientific-domain'], 'scientific-domain', UX['filter-keyword-container']['scientific-domain']);
    build_keywords(data['Keywords']['Application-domain'], 'application-domain', UX['filter-keyword-container']['application-domain']);


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