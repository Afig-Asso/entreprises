import os, sys
import yaml
import json
import urllib.request, urllib.error
import argparse
import tqdm


sys.path.append(os.path.dirname(os.path.realpath(__file__)))
import liblisting

meta = {
    'filename_yaml': 'data.yaml',
    'filename_yaml_keywords': 'keywords.yaml',
    'filename_json_out': 'json/data.json',
    'filename_md_out': 'README.md'
}
root_path = os.path.join(os.path.dirname(__file__))





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
            L.append({'City':t})
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
                country_entry = country_entry.split(',')
            assert isinstance(country_entry, list)
            entry_txt += ', '.join(country_entry)
            
        if 'State' in element:
            if entry_txt!='':
                entry_txt += '/'+element['State']
        if 'City' in element:
            city_entry = element['City']
            if isinstance(city_entry, str):
                city_entry = city_entry.split(',')
            assert isinstance(city_entry, list)
            if 'Country' not in element:
                entry_txt += ', '.join(city_entry)
            else:
                if len(city_entry)==1:
                    entry_txt += '/'+city_entry[0]
                elif len(city_entry)>1:
                    entry_txt += '/{'+', '.join(city_entry)+'}'
        if 'Exact' in element:
            entry_txt += ' ('+element['Exact']+')'
        if ('International' in element) and (element['International']==True):
                entry_txt += 'International'



        if out!='' and entry_txt!='' and entry_txt!=' (+ International)':
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
    #localisation_secondaires = liblisting.get_optional('Localization-minor',data)
    #localisation_exact = liblisting.get_optional('Localization-exact',data)
    country = liblisting.get_optional('Country',data)
    product = export_list_url_to_MD(liblisting.get_list_name_url('Product',data))
    domaines_scientifiques = liblisting.get_optional('Scientific-domain',data)
    domaines_applications = liblisting.get_optional('Application-domain',data)
    information = liblisting.get_optional('Info',data)
    highlight = liblisting.get_optional('Highlight',data)
    employees = liblisting.get_optional('Employees',data)

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
    out += liblisting.display_optional(information, pre='* **Remarque**: _', post='_')
    out += liblisting.display_optional(product, pre='* **Produits**: ')

    # localisation_txt = localisation
    # if localisation_exact!='':
    #     localisation_txt += f' ({localisation_exact})'
    # if localisation_secondaires!='':
    #     localisation_txt += f' (+ {localisation_secondaires})'


    out += liblisting.display_optional(place, pre='* **Place**: ')
    out += liblisting.display_optional(country, pre='* **Pays**: ')
    out += liblisting.display_optional(employees, pre='* **Nombres d\'employées**: ')
    out += liblisting.display_optional(domaines_scientifiques, pre='* **Domaine scientifique**: ')
    out += liblisting.display_optional(domaines_applications, pre='* **Domaine d\'application**: ')
    out += liblisting.display_optional(jobs_url, pre='* [_Jobs_](',post=')')
    out += '\n\n'

    return out

def prettyMD(data):

    # badge Github check URL vality
    out = '![URLs](https://github.com/Afig-Asso/entreprises/actions/workflows/url.yml/badge.svg) \n\n'

    out += '# Listing d\'entreprises en Informatique Graphique \n'
  
    out += '## Compléter/Modifier les informations \n'
    out += '  - Envoyez un email à contact[at]asso-afig.fr avec vos informations\n' 
    out += '  - Ou faites un push-request sur le dépot.\n'
    
    out += '\n\n'


    out += '## Listing \n\n' 
    

    companies = sorted(data, key=lambda x: x['Name'])
    print('Export Companies ...')
    for k in tqdm.tqdm(range(len(companies))):
        try:
            out += prettyMD_company(companies[k])
        except KeyError as keyError:
            print('Key '+str(keyError)+' cannot be found in entry \n', company,'\n\n')
        except Exception as e:
            print("Undefined Problem with entry ",company)
            print(e)
            print()

    
    return out



if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='Generate Listing')
    parser.add_argument('-c','--checkURL', help='Check url validity', action='store_true')
    parser.add_argument('-C','--checkURLwithFailure', help='Check url validity and fails if some are unreachable', action='store_true')
    args = parser.parse_args()  

    is_check_url = args.checkURL or args.checkURLwithFailure
    exit_on_failure = args.checkURLwithFailure


    filename_yaml = root_path+'/../'+meta['filename_yaml']
    filename_yaml_keywords = root_path+'/../'+meta['filename_yaml_keywords']
    filename_json_out = root_path+'/../'+meta['filename_json_out']
    filename_md_out = root_path+'/../'+meta['filename_md_out']


    data = liblisting.yaml_read_file(filename_yaml)
    data_keywords = liblisting.yaml_read_file(filename_yaml_keywords)

    if is_check_url:
        urls = liblisting.get_all_urls(data)
        liblisting.check_urls(urls, exitOnError=exit_on_failure)
        print('Check URLs done\n')

    # export json
    json_data = {'Keywords':data_keywords, 'Listing':data}
    with open(filename_json_out, 'w') as json_fid:
        json.dump(json_data, json_fid, indent=4)

    # export pretty md
    with open(filename_md_out, 'w') as md_fid:
        mdTXT = prettyMD(data)
        md_fid.write(mdTXT)
    
    print()