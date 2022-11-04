import os, sys
import yaml # pip3 install pyyaml
import urllib.request, urllib.error
import tqdm


def yaml_read_file(pathname):
    assert os.path.isfile(pathname)
    with open(pathname, 'r') as fid:
        content = yaml.safe_load(fid)
    return content



def recursive_url_get(data, all_urls):
    if isinstance(data, dict):
        labels = list(data.keys())
        for label in labels:
            if label=='url' or label.startswith('url-'):
                url = data[label]
                all_urls.append(url)

        for element in data:
            recursive_url_get(data[element], all_urls)
    if isinstance(data,list):
        for element in data:
            recursive_url_get(element, all_urls)



def get_all_urls(data):
    all_urls = []
    recursive_url_get(data, all_urls)
    return all_urls


def is_url_valid(url):
    try:
        url_open = urllib.request.urlopen(url)
    except urllib.error.HTTPError as e:
        if e.code==403: # server that doesn't allow non browser request
            return True
        print(f'\n\nWarning: URL seems down {url}')
        print('Error code: ', e.code)
        return False
    except urllib.error.URLError as e:
        # Not accessible but not an error
        if str(e.reason).find('SSL: WRONG_SIGNATURE_TYPE')!=-1: 
            return True
        if str(e.reason).find('SSL: CERTIFICATE_VERIFY_FAILED')!=-1: 
            return True

        print(f'\n\nWarning: URL seems wrong: {url}')
        print('Reason: ', e.reason)
        return False
    else:
        return True

def check_urls(urls, exitOnError=False):
    success = True
    for url in tqdm.tqdm(urls):
        ret = is_url_valid(url)
        if ret!=True:
            success=False

    if exitOnError==True and success==False:
        print("Exit due to Error")
        exit(1)


def get_key_list_to_string(key, data, separator=', '):

    element = data[key]
    if isinstance(element,list):
        out = ', '.join(element)
    else:
        out = str(element)
    return out


def get_optional(key, data):
    if key in data:
        return get_key_list_to_string(key, data)
    else:
        return ''

def display_optional(s, indent=2, pre='* ', post='', bold=False, italic=False):

    additional_pre = ''
    additional_post = ''
    if bold==True:
        additional_pre = '**'
        additional_post = '**'
    if italic==True:
        additional_pre = '_'
        additional_post = '_'

    if s!='':
        space_fill = ' '*indent
        out = f'{space_fill}{pre}{additional_pre}{s}{additional_post}{post}\n'
        return out
    else:
        return ''

def get_list_name_url(key, data):
    if key not in data:
        return []
    
    element = data[key]


    L = []
    if isinstance(element,str):
        for token in element.split(','): # Product: "ProdA, ProdB, ProdC, etc."
            L.append({'Name':token})
        return L

    elif isinstance(element, list):
        L = []
        for e in element:
            if isinstance(e, str): # Product: ["ProdA", "ProdB", "ProdC"]
                L.append({'Name':e})
            elif isinstance(e, dict): # Product:  [{Name:ProdA, url:urlA}, {Name:ProdB, url:urlB}]
                node = {}
                assert 'Name' in e
                node['Name'] = e['Name']
                if 'url' in e:
                    node['url'] = e['url']
                L.append(node)
        return L
            
