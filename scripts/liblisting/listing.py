import os
import socket
import time
import yaml # pip3 install pyyaml
import urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor


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


USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'

# HTTP codes meaning the page really does not exist anymore
HARD_HTTP_ERRORS = {404, 410}


def classify_url(url):
    """Return (status, message) with status in 'ok', 'warn' (temporary or
    unverifiable, does not fail the check) or 'fail' (page or domain gone)."""
    request = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(request, timeout=25):
            pass
    except urllib.error.HTTPError as e:
        if e.code in HARD_HTTP_ERRORS:
            return 'fail', f'HTTP {e.code}'
        return 'warn', f'HTTP {e.code}'
    except urllib.error.URLError as e:
        if isinstance(e.reason, socket.gaierror):
            return 'fail', f'domain not found ({e.reason})'
        return 'warn', str(e.reason)
    except Exception as e:
        return 'warn', f'{type(e).__name__}: {e}'
    return 'ok', ''


def classify_url_with_retry(url, retry_delay=3):
    """Retry once a 'fail' result to avoid transient DNS errors."""
    status, message = classify_url(url)
    if status == 'fail':
        time.sleep(retry_delay)
        status, message = classify_url(url)
    return status, message


def is_url_valid(url):
    return classify_url(url)[0] != 'fail'


def check_urls(urls, exitOnError=False, exceptions=()):
    to_check = sorted(set(u for u in urls if u not in exceptions))
    with ThreadPoolExecutor(max_workers=20) as pool:
        results = list(pool.map(classify_url_with_retry, to_check))

    warnings = [(u, m) for u, (s, m) in zip(to_check, results) if s == 'warn']
    failures = [(u, m) for u, (s, m) in zip(to_check, results) if s == 'fail']
    print(f'{len(to_check)} URLs checked, {len(exceptions)} ignored (url_exceptions.yaml)')
    for u, m in warnings:
        print(f'  Warning (not blocking): {u} -> {m}')
    for u, m in failures:
        print(f'  ERROR: {u} -> {m}')

    if exitOnError==True and len(failures)>0:
        print(f"Exit due to {len(failures)} unreachable URL(s)")
        exit(1)
    return len(failures)==0


def get_key_list_to_string(key, data, separator=', '):

    element = data[key]
    if isinstance(element,list):
        out = separator.join(element)
    else:
        out = str(element)
    return out


def get_optional(key, data):
    if key in data:
        return get_key_list_to_string(key, data)
    else:
        return ''

def display_optional(s, indent=2, pre='* ', post=''):

    if s!='':
        space_fill = ' '*indent
        out = f'{space_fill}{pre}{s}{post}\n'
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
            if token.strip()!='':
                L.append({'Name':token.strip()})
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
            
