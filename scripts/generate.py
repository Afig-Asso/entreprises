import os, sys
import json
import argparse
import tqdm


sys.path.append(os.path.dirname(os.path.realpath(__file__)))
import liblisting

meta = {
    'filename_yaml': 'data.yaml',
    'filename_yaml_keywords': 'keywords.yaml',
    'filename_yaml_url_exceptions': 'url_exceptions.yaml',
    'filename_json_out': 'json/data.json',
    'filename_md_out': 'README.md'
}
root_path = os.path.dirname(os.path.realpath(__file__))





def export_list_url_to_MD(data):
    if len(data)==0:
        return ''
    
    out = ''
    for element in data:
        if out!='':
            out += ', '

        assert 'Name' in element
        name = element['Name']
        if 'url' in element:
            url = element['url']
            out += f'[{name}]({url})'
        else: 
            out += f'{name}'
    return out


def get_list_places(data):
    L = []
    if isinstance(data, str): # City1, City2, etc
        token = data.split(',')
        for t in token:
            if t.strip()!='':
                L.append({'City':t.strip()})
    elif isinstance(data, dict):
        # wrap in a list and restart
        return get_list_places([data])
    elif isinstance(data, list):
        L = data    
    return L

def export_place_to_MD(data):
    out = ''
    for element in data:
        entry_txt = ''
        if 'Country' in element:
            country_entry = element['Country']
            if isinstance(country_entry, str):
                country_entry = [c.strip() for c in country_entry.split(',')]
            assert isinstance(country_entry, list)
            entry_txt += ', '.join(country_entry)
            
        if 'State' in element:
            if entry_txt!='':
                entry_txt += '/'
            entry_txt += element['State']
        if 'City' in element:
            city_entry = element['City']
            if isinstance(city_entry, str):
                city_entry = [c.strip() for c in city_entry.split(',')]
            assert isinstance(city_entry, list)
            if entry_txt=='':
                entry_txt += ', '.join(city_entry)
            else:
                if len(city_entry)==1:
                    entry_txt += '/'+city_entry[0]
                elif len(city_entry)>1:
                    entry_txt += '/{'+', '.join(city_entry)+'}'
        if 'Exact' in element:
            entry_txt += ' ('+element['Exact']+')'
        if ('International' in element) and (element['International']==True):
            if entry_txt!='':
                entry_txt += ', '
            entry_txt += 'International'



        if out!='' and entry_txt!='':
            out += ', '
        out += entry_txt

    return out


def prettyMD_company(data):
    out = ''

   
    name = data['Name']
    url = data['url']

    jobs_url = liblisting.get_optional('Jobs',data)


    nom_long = liblisting.get_optional('Name-long',data)
    descriptif = liblisting.get_optional('Description',data)
    place = export_place_to_MD(get_list_places(data['Place']))
    product = export_list_url_to_MD(liblisting.get_list_name_url('Product',data))
    domaines_scientifiques = liblisting.get_optional('Scientific-domain',data)
    domaines_applications = liblisting.get_optional('Application-domain',data)
    information = liblisting.get_optional('Info',data)
    highlight = liblisting.get_optional('Highlight',data)
    employees = liblisting.get_optional('Employees',data)
    keywords = liblisting.get_optional('Keywords',data)

    nom_long_str = ''
    if nom_long!='':
        nom_long_str = f'({nom_long})'

    highlight_txt = ''
    if highlight!='':
        if highlight.find('Graphics')!=-1 and highlight.find('R&D')!=-1:
            highlight_txt = ' :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_'
        elif highlight.find('R&D')!=-1:
            highlight_txt = ' :small_orange_diamond: _[Entreprise majeure avec R&D avancée en France]_'

    out += f'* **[{name}]({url})** {nom_long_str} {highlight_txt}\n'
    out += liblisting.display_optional(descriptif, pre='* _', post='_')
    out += liblisting.display_optional(keywords, pre='* **Mots clés**: _', post='_')
    out += liblisting.display_optional(information, pre='* **Remarque**: _', post='_')
    out += liblisting.display_optional(product, pre='* **Produits**: ')
    out += liblisting.display_optional(place, pre='* **Localisation**: ')
    out += liblisting.display_optional(employees, pre='* **Nombres d\'employés**: ')
    out += liblisting.display_optional(domaines_scientifiques, pre='* **Domaine scientifique/technique**: ')
    out += liblisting.display_optional(domaines_applications, pre='* **Domaine d\'application**: ')
    out += liblisting.display_optional(jobs_url, pre='* [_Jobs_](',post=')')
    out += '\n\n'

    return out

def listing_to_md(data):
    out = ''

    companies = sorted(data, key=lambda x: x['Name'].lower() )
    print('Export Companies ...')
    for k in tqdm.tqdm(range(len(companies))):
        try:
            out += prettyMD_company(companies[k])
        except KeyError as keyError:
            print('Key '+str(keyError)+' cannot be found in entry \n', companies[k],'\n\n')
        except Exception as e:
            print("Undefined Problem with entry ",companies[k])
            print(e)
            print()

    
    return out

def extract_keywords_from_list(data):
    S = set()
    for element in data:
        if isinstance(element, str):
            S.add(element)
        elif isinstance(element, dict):
            S.add(list(element.keys())[0])
    return S

def check_keywords(data_keywords, data, exitOnError=False):

    res = True

    # get possible keywords
    scientific_keywords = extract_keywords_from_list(data_keywords['Scientific-domain'])
    application_keywords = extract_keywords_from_list(data_keywords['Application-domain'])

    for entry in data:
        assert 'Name' in entry
        name = entry['Name']
        if 'Scientific-domain' not in entry:
            print("\n !! Warning Scientific-domain missing for entry: ",name)
            res = False
        if 'Application-domain' not in entry:
            print("\n !! Warning Application-domain missing for entry: ",name)
            res = False

        scientific = entry.get('Scientific-domain', [])
        application = entry.get('Application-domain', [])
        if isinstance(scientific, str):
            scientific = [scientific]
        if isinstance(application, str):
            application = [application]

        for s in scientific:
            if s not in scientific_keywords and s!='Arbitraire':
                print(f"\n !! Warning cannot find scientific keyword [{s}] in entry [{name}]")
                res = False
        for s in application:
            if s not in application_keywords and s!='Arbitraire':
                print(f"\n !! Warning cannot find application keyword [{s}] in entry [{name}]")
                res = False

    if res==False and exitOnError==True:
        print("Check failed, exit")
        exit(1)


# Keys accepted in data.yaml (anything else is most likely a typo)
REQUIRED_KEYS = ['Name', 'url', 'Place', 'Scientific-domain', 'Application-domain']
OPTIONAL_KEYS = ['Description', 'Name-long', 'Jobs', 'Info', 'Product', 'Employees', 'Keywords', 'Highlight']
PLACE_KEYS = ['Country', 'State', 'City', 'Exact', 'International']
PRODUCT_KEYS = ['Name', 'url']

def check_validity_data(data):
    """Check required and unknown keys of each entry. Return True if no problem was found."""
    valid = True
    allowed_keys = set(REQUIRED_KEYS + OPTIONAL_KEYS)
    for entry in data:
        assert 'Name' in entry
        name = entry['Name']
        for key in REQUIRED_KEYS:
            if key not in entry:
                print(f'!! Warning: Missing {key} in entry {name}\n')
                valid = False
        for key in entry:
            if key not in allowed_keys:
                print(f'!! Warning: Unknown key [{key}] in entry {name} (allowed: {", ".join(sorted(allowed_keys))})\n')
                valid = False

        places = entry.get('Place')
        if isinstance(places, dict):
            places = [places]
        if isinstance(places, list):
            for place in places:
                for key in (place if isinstance(place, dict) else {}):
                    if key not in PLACE_KEYS:
                        print(f'!! Warning: Unknown Place key [{key}] in entry {name} (allowed: {", ".join(PLACE_KEYS)})\n')
                        valid = False

        products = entry.get('Product')
        if isinstance(products, list):
            for product in products:
                for key in (product if isinstance(product, dict) else {}):
                    if key not in PRODUCT_KEYS:
                        print(f'!! Warning: Unknown Product key [{key}] in entry {name} (allowed: {", ".join(PRODUCT_KEYS)})\n')
                        valid = False
    return valid

def load_url_exceptions(filename, urls):
    """Read url_exceptions.yaml (list of {url, reason, since}) and return the set of urls."""
    if not os.path.isfile(filename):
        return set()
    entries = liblisting.yaml_read_file(filename) or []
    exceptions = set()
    for entry in entries:
        assert isinstance(entry, dict) and 'url' in entry, f'Invalid entry in {filename}: {entry}'
        if 'reason' not in entry:
            print(f"!! Warning: no 'reason' for url exception {entry['url']}")
        exceptions.add(entry['url'])
    for url in sorted(exceptions - set(urls)):
        print(f'!! Warning: url exception {url} is not used in data.yaml anymore, it can be removed')
    return exceptions

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='Generate Listing')
    parser.add_argument('-c','--checkValidity', help='Check data validity: URL, keywords, etc.', action='store_true')
    parser.add_argument('-C','--checkValiditywithFailure', help='Check data validity and fails if some are unreachable', action='store_true')
    args = parser.parse_args()  

    is_check = args.checkValidity or args.checkValiditywithFailure
    exit_on_failure = args.checkValiditywithFailure


    filename_yaml = root_path+'/../'+meta['filename_yaml']
    filename_yaml_keywords = root_path+'/../'+meta['filename_yaml_keywords']
    filename_yaml_url_exceptions = root_path+'/../'+meta['filename_yaml_url_exceptions']
    filename_json_out = root_path+'/../'+meta['filename_json_out']
    filename_md_out = root_path+'/../'+meta['filename_md_out']


    data = liblisting.yaml_read_file(filename_yaml)
    data_keywords = liblisting.yaml_read_file(filename_yaml_keywords)

    is_data_valid = check_validity_data(data)
    if exit_on_failure and not is_data_valid:
        print('Invalid data.yaml (see warnings above), exit')
        exit(1)

    if is_check:
        print('Found',len(data),'Companies\n')
        print('Check Keywords ...')
        check_keywords(data_keywords, data, exitOnError=exit_on_failure)
        print('Check Keywords done\n')

        print('Check URLs ...')
        urls = liblisting.get_all_urls(data)
        exceptions = load_url_exceptions(filename_yaml_url_exceptions, urls)
        liblisting.check_urls(urls, exitOnError=exit_on_failure, exceptions=exceptions)
        print('Check URLs done\n')

    # export json
    json_data = {'Keywords':data_keywords, 'Listing':data}
    with open(filename_json_out, 'w') as json_fid:
        json.dump(json_data, json_fid, indent=4)


    # Update README.md
    ###################

    # Export listing as .md
    listing_txt = listing_to_md(data)

    # now read previous readme and update it
    with open(filename_md_out, 'r', encoding='utf-8') as fid:
        readme_txt = fid.read()
        pos = readme_txt.find('## Listing')
    if pos==-1:
        print(f"Error: cannot find '## Listing' in {filename_md_out}, README not updated")
        exit(1)
    new_readme = readme_txt[:pos]
    assert len(new_readme)>10
    new_readme = new_readme + "## Listing \n\n" + listing_txt

    # write the final file
    with open(filename_md_out, 'w', encoding='utf-8') as fid:
        fid.write(new_readme)
   
    print()