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
    out += liblisting.display_optional(place, pre='* **Localisation**: ')
    out += liblisting.display_optional(employees, pre='* **Nombres d\'employés**: ')
    out += liblisting.display_optional(domaines_scientifiques, pre='* **Domaine scientifique/technique**: ')
    out += liblisting.display_optional(domaines_applications, pre='* **Domaine d\'application**: ')
    out += liblisting.display_optional(jobs_url, pre='* [_Jobs_](',post=')')
    out += '\n\n'

    return out

def prettyMD(data):

    # # badge Github check URL vality
    # out = '![URLs](https://github.com/Afig-Asso/entreprises/actions/workflows/url.yml/badge.svg) \n\n'

    # out += '# Listing d\'entreprises en Informatique Graphique \n'
  
    # out += '## Compléter/Modifier les informations \n'
    # out += '  - Envoyez un email à contact[at]asso-afig.fr avec vos informations\n' 
    # out += '  - Ou faites un push-request sur le dépot.\n'
    # out += '## Utilisation de la base en locale \n'
    # out += '  - `data.yaml`: Base de données des entreprises \n'
    # out += '  - `keywords.yaml`: Mots clés \n\n'
    # out += '### Générer un site après modification: \n'
    # out += '```\n'
    # out += 'python scripts/generate.py \n\n'
    # out += '```\n'
    # out += 'Génère les fichiers suivants: \n'
    # out += '- README.md: Vue des entreprises au format markdown pour github. \n'
    # out += '- json/data.json: Base de donnée accessible pour générer des pages web dynamique. \n'
    # out += '### Arguments \n'
    # out += '```\n'
    # out += 'generate.py [-c] [-C] \n'
    # out += '  -c --checkValidity: Check coherence of keyword and accessibility of URLs.\n'
    # out += '        Do not exit if errors are detected (see -C for this). \n'
    # out += '  -C --checkValiditywithFailure: Check coherence of keyword and accessibility of URLs.\n'
    # out += '        Quit if errors are detected.\n'
    # out += '```\n'
    # out += '### Site web: \n'
    # out += 'Le répertoire site/ contient un example de page web dynamique chargée dynamiquement depuis le fichier json présent sur github.\n'
    # out += '### Action push sur github: \n'
    # out += 'Après un push sur github, les éléments suivants sont mis à jours:\n'
    # out += '- La nouvelle base est vérifiée localement avec `python generate.py -C`\n'
    # out += '- Le contenu de site/ est déployé sur une page github.io: https://afig-asso.github.io/entreprises/\n'
    # out += '\n\n'


    # out += '## Listing \n\n' 

    # Read existing README until "## Listing"
    #  Then replace the remaining with the list of companies
    with open(meta['filename_md_out']) as fid:
        readme_txt = fid.read()
        pos = readme_txt.find('## Listing')
        new_readme = readme_txt[:pos]
        print(readme_txt)
    assert len(new_readme)>10
    
    
def listing_to_md(data):
    out = ''

    companies = sorted(data, key=lambda x: x['Name'].lower() )
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

        scientific = entry['Scientific-domain']
        application = entry['Application-domain']
        
        for s in scientific:
            if s not in scientific_keywords and s!='Arbitraire':
                print(f"\n !! Warning cannot find scientific keyword [{s}] in entry [{name}]")
        for s in application:
            if s not in application_keywords and s!='Arbitraire':
                print(f"\n !! Warning cannot find application keyword [{s}] in entry [{name}]")

    if res==False and exit_on_failure==True:
        print("Check failed, exit")
        exit(1)


def check_validity_data(data, data_keywords):

    required_keywords = ['Application-domain', 'Scientific-domain']
    for entry in data:
        assert 'Name' in entry
        name = entry['Name']
        for key in required_keywords:
            if key not in entry:
                print(f'!! Warning: Missing {key} in entry {name}\n')

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='Generate Listing')
    parser.add_argument('-c','--checkValidity', help='Check data validity: URL, keywords, etc.', action='store_true')
    parser.add_argument('-C','--checkValiditywithFailure', help='Check data validity and fails if some are unreachable', action='store_true')
    args = parser.parse_args()  

    is_check = args.checkValidity or args.checkValiditywithFailure
    exit_on_failure = args.checkValiditywithFailure


    filename_yaml = root_path+'/../'+meta['filename_yaml']
    filename_yaml_keywords = root_path+'/../'+meta['filename_yaml_keywords']
    filename_json_out = root_path+'/../'+meta['filename_json_out']
    filename_md_out = root_path+'/../'+meta['filename_md_out']


    data = liblisting.yaml_read_file(filename_yaml)
    data_keywords = liblisting.yaml_read_file(filename_yaml_keywords)

    check_validity_data(data, data_keywords)

    if is_check:
        print('Check Keywords ...')
        check_keywords(data_keywords, data)
        print('Check Keywords done\n')

        print('Check URLs ...')
        urls = liblisting.get_all_urls(data)
        exceptions = {'https://www.amd.com/', 'https://www.microsoft.com/', 'https://www.clo3d.com/en/', 'https://shotover.com/', 'https://www.lestontonstruqueurs.com/'}
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
    with open(meta['filename_md_out'], 'r') as fid:
        readme_txt = fid.read()
        pos = readme_txt.find('## Listing')
        new_readme = readme_txt[:pos]
    assert len(new_readme)>10
    new_readme = new_readme + "## Listing \n\n" + listing_txt

    # write the final file
    with open(meta['filename_md_out'], 'w') as fid:
        fid.write(new_readme)
   
    print()