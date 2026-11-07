"""Add to places.yaml the coordinates of the places of data.yaml that are not there yet.

Coordinates come from Nominatim (OpenStreetMap), one request per second (usage policy).
The result must be reviewed by hand (homonyms, states, countries).

Usage:
    python3 scripts/geocode_places.py --dry-run   # list the missing places only
    python3 scripts/geocode_places.py             # geocode them and update places.yaml
"""
import os, sys, json, time, argparse
import urllib.request, urllib.parse

sys.path.append(os.path.dirname(os.path.realpath(__file__)))
import liblisting
from liblisting import places

root = os.path.dirname(os.path.realpath(__file__)) + '/..'
FILE_DATA = root + '/data.yaml'
FILE_PLACES = root + '/places.yaml'
USER_AGENT = 'AFIG-entreprises-listing (https://github.com/Afig-Asso/entreprises)'

# Country names of data.yaml (French) -> ISO code, to restrict the search of a city
COUNTRY_CODES = {
    'Allemagne': 'de', 'Australie': 'au', 'Belgique': 'be', 'Brésil': 'br', 'Canada': 'ca', 'Chine': 'cn',
    'Corée du Sud': 'kr', 'Danemark': 'dk', 'Espagne': 'es', 'États-Unis': 'us', 'Finlande': 'fi',
    'France': 'fr', 'Inde': 'in', 'Israël': 'il', 'Italie': 'it', 'Japon': 'jp', 'Lituanie': 'lt',
    'Maurice': 'mu', 'Norvège': 'no', 'Nouvelle-Zélande': 'nz', 'Pays-Bas': 'nl', 'Pologne': 'pl',
    'Portugal': 'pt', 'Royaume-Uni': 'gb', 'Singapour': 'sg', 'Suède': 'se', 'Suisse': 'ch', 'Taïwan': 'tw',
}


def states_of_cities(data):
    """(country, city) -> State given in data.yaml, to tell homonyms apart (ex. Portland, Oregon)."""
    states = {}
    for entry in data:
        place = entry.get('Place')
        for p in (place if isinstance(place, list) else [place]):
            if isinstance(p, dict) and p.get('State') and p.get('City'):
                for country in places.split_names(p.get('Country')) or ['France']:
                    for city in places.split_names(p['City']):
                        states[(country, city)] = p['State']
    return states


def nominatim(country, city, state=''):
    params = {'format': 'json', 'limit': 1, 'accept-language': 'fr'}
    code = COUNTRY_CODES.get(country)
    if city == '':
        params['country'] = country
    else:
        params['q'] = f'{city}, {state}' if state else city
        if code:
            params['countrycodes'] = code
    url = 'https://nominatim.openstreetmap.org/search?' + urllib.parse.urlencode(params)
    request = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    with urllib.request.urlopen(request, timeout=20) as response:
        result = json.load(response)
    if len(result) == 0:
        return None, ''
    return [round(float(result[0]['lat']), 4), round(float(result[0]['lon']), 4)], result[0].get('display_name', '')


def write_places(table, filename):
    """Write places.yaml sorted by country then city, one location per line."""
    lines = ['# Coordonnées [latitude, longitude] des lieux de data.yaml, pour la carte du site.',
             '# Pays : position utilisée quand seul le pays est connu. Villes : une ligne par ville',
             '# (ou par État quand il n\'y a pas de ville). Compléter avec scripts/geocode_places.py,',
             '# puis vérifier à la main.', '']
    for country in sorted(table, key=liblisting_sort_key):
        lines.append(f'{country}:')
        entry = table[country]
        if entry.get('Pays') is not None:
            lines.append(f"  Pays: [{entry['Pays'][0]}, {entry['Pays'][1]}]")
        cities = entry.get('Villes') or {}
        if cities:
            lines.append('  Villes:')
            for city in sorted(cities, key=liblisting_sort_key):
                c = cities[city]
                name = f'"{city}"' if (':' in city or city[0] in '[{') else city
                lines.append(f'    {name}: [{c[0]}, {c[1]}]')
    with open(filename, 'w', encoding='utf-8') as fid:
        fid.write('\n'.join(lines) + '\n')


def liblisting_sort_key(s):
    import unicodedata
    return unicodedata.normalize('NFD', s).encode('ascii', 'ignore').decode().lower()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Geocode the places of data.yaml into places.yaml')
    parser.add_argument('--dry-run', action='store_true', help='only list the missing places')
    args = parser.parse_args()

    data = liblisting.yaml_read_file(FILE_DATA)
    table = liblisting.yaml_read_file(FILE_PLACES) if os.path.isfile(FILE_PLACES) else {}
    table = table or {}
    _, missing = places.coordinates_table(data, table)
    print(f'{len(missing)} lieux sans coordonnées')
    if args.dry_run:
        for country, city in missing:
            print(' -', places.place_key(country, city))
        sys.exit(0)

    states = states_of_cities(data)
    for k, (country, city) in enumerate(missing):
        try:
            coords, name = nominatim(country, city, states.get((country, city), ''))
        except Exception as error:
            coords, name = None, f'erreur : {error}'
        print(f'[{k+1}/{len(missing)}] {places.place_key(country, city)} -> {coords} {name}', flush=True)
        if coords is not None:
            entry = table.setdefault(country, {})
            if city == '':
                entry['Pays'] = coords
            else:
                entry.setdefault('Villes', {})[city] = coords
            write_places(table, FILE_PLACES)  # save after each place: the run can be interrupted
        time.sleep(1.1)
    print('Terminé. Vérifier places.yaml à la main.')
