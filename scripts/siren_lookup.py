"""Find the precise address of the French establishments of the companies of data.yaml.

Source: API Recherche d'entreprises (https://recherche-entreprises.api.gouv.fr, register SIRENE,
open data, no key). For each company with a place in France:
  1. search the company by name (then by Name-long), keep the best candidate (name, active, sector);
  2. for each French city of data.yaml, find the establishment of this company in this city,
     or else in the same departement (suburbs).
Nothing is written in data.yaml: the result is a table to review (CSV + Markdown + JSON).

Usage:
    python3 scripts/siren_lookup.py --out <dir> [--only "Name1,Name2"]
"""
import os, sys, json, time, csv, re, argparse, unicodedata
import urllib.request, urllib.parse

sys.path.append(os.path.dirname(os.path.realpath(__file__)))
import liblisting
from liblisting import places

root = os.path.dirname(os.path.realpath(__file__)) + '/..'
API = 'https://recherche-entreprises.api.gouv.fr/search'
GEO = 'https://geo.api.gouv.fr/communes'
USER_AGENT = 'AFIG-entreprises-listing (https://github.com/Afig-Asso/entreprises)'
DELAY = 0.25  # the API allows 7 requests per second

# Places of data.yaml that are not a commune
DEPARTEMENT_OVERRIDES = {'Sophia Antipolis': '06', 'Saint-Paul (La Réunion)': '974'}
# NAF sections of the graphics / software / creative activities (bonus when choosing a candidate)
NAF_PREFIXES = ('58', '59', '60', '62', '63', '70', '71', '72', '73', '74', '85', '90', '26', '28', '30')
LEGAL_WORDS = {'sas', 'sasu', 'sarl', 'sa', 'eurl', 'sci', 'snc', 'france', 'group', 'groupe', 'the', 'inc', 'ltd', 'gmbh'}


def norm(s):
    s = unicodedata.normalize('NFD', s or '').encode('ascii', 'ignore').decode().lower()
    s = re.sub(r'[^a-z0-9]+', ' ', s)
    return ' '.join(w for w in s.split() if w not in LEGAL_WORDS)


def get_json(url, params):
    full = url + '?' + urllib.parse.urlencode(params)
    for attempt in range(4):
        try:
            request = urllib.request.Request(full, headers={'User-Agent': USER_AGENT})
            with urllib.request.urlopen(request, timeout=20) as response:
                result = json.load(response)
            time.sleep(DELAY)
            return result
        except urllib.error.HTTPError as error:
            if error.code == 429:  # too many requests: wait and retry
                time.sleep(2 + 2*attempt)
                continue
            raise
    raise RuntimeError('too many retries: ' + full)


_departements = {}
def departement_of(city):
    if city in DEPARTEMENT_OVERRIDES:
        return DEPARTEMENT_OVERRIDES[city]
    if city not in _departements:
        name = re.sub(r'\s*\(.*\)', '', city)
        result = get_json(GEO, {'nom': name, 'fields': 'codeDepartement,population', 'boost': 'population', 'limit': 1})
        _departements[city] = result[0]['codeDepartement'] if result else None
    return _departements[city]


def name_score(company_names, candidate):
    """1.0 = same name, 0.7 = one name contains the other, else word overlap."""
    labels = [candidate.get('nom_raison_sociale'), candidate.get('nom_complet'), candidate.get('sigle')]
    for e in candidate.get('matching_etablissements') or []:
        labels += [e.get('nom_commercial')] + (e.get('liste_enseignes') or [])
    labels = [norm(l) for l in labels if l]
    best = 0.0
    for name in company_names:
        n = norm(name)
        if n == '':
            continue
        for l in labels:
            if l == n:
                best = max(best, 1.0)
            elif re.search(r'\b' + re.escape(n) + r'\b', l) or re.search(r'\b' + re.escape(l) + r'\b', n):
                best = max(best, 0.7)
            else:
                a, b = set(n.split()), set(l.split())
                if a and b:
                    best = max(best, 0.6 * len(a & b) / len(a | b))
    return best


def candidate_score(company_names, candidate):
    score = name_score(company_names, candidate)
    if candidate.get('etat_administratif') != 'A':
        score -= 0.5
    naf = (candidate.get('activite_principale') or '')
    if naf.startswith(NAF_PREFIXES):
        score += 0.1
    if candidate.get('nature_juridique', '').startswith('1'):  # sole trader: rarely a company of the listing
        score -= 0.2
    return score


def search(query, **filters):
    params = {'q': query, 'per_page': 5, 'etat_administratif': 'A'}
    params.update(filters)
    return get_json(API, params).get('results', [])


def choose_company(entry):
    names = [entry['Name']] + ([entry['Name-long']] if entry.get('Name-long') else [])
    candidates = {}
    for query in names:
        for c in search(query):
            candidates[c['siren']] = c
        if candidates and max(candidate_score(names, c) for c in candidates.values()) >= 1.0:
            break
    ranked = sorted(candidates.values(), key=lambda c: -candidate_score(names, c))
    return names, ranked


def same_commune(city, libelle):
    a, b = norm(re.sub(r'\(.*\)', '', city)), norm(re.sub(r'\d+', '', libelle or ''))
    return a == b or a.replace('saint', 'st') == b.replace('saint', 'st')


def establishments(candidate, area):
    etabs = [e for e in (candidate.get('matching_etablissements') or []) if e.get('etat_administratif') == 'A']
    siege = candidate.get('siege') or {}
    if not etabs and (siege.get('departement') == area.get('departement') or siege.get('region') == area.get('region')):
        etabs = [siege]
    return etabs


def find_establishment(names, siren, city):
    """Establishment of company siren in city (or its area), else of another company with the same name
    in this area (groups with one company per studio, ex. Ubisoft Annecy).
    Return (establishment, where, other_company or None)."""
    dep = departement_of(city)
    if dep is None:
        return None, 'département inconnu', None
    # Paris: companies are often in the suburbs (Montreuil, Boulogne...), search the whole Ile-de-France
    area = {'region': '11'} if city == 'Paris' else {'departement': dep}
    fallback = None
    for query in names + [f'{names[0]} {city}']:
        for c in search(query, **area):
            etabs = establishments(c, area)
            in_city = [e for e in etabs if same_commune(city, e.get('libelle_commune'))]
            pick = sorted(in_city or etabs, key=lambda e: not e.get('est_siege', False))
            if not pick:
                continue
            where = 'ville' if in_city else ('région parisienne' if city == 'Paris' else 'département')
            if c['siren'] == siren:
                return pick[0], where, None
            if fallback is None and name_score(names, c) >= 0.7:
                fallback = (pick[0], where + ' (autre SIREN du même nom)', c)
    if fallback:
        return fallback
    return None, 'aucun établissement dans la zone', None


def confidence(score, gap, where):
    if score >= 1.0 and gap >= 0.3 and where == 'ville':
        return 'sûr'
    if score >= 0.7 and where in ('ville', 'département', 'région parisienne'):
        return 'probable'
    if where in ('ville', 'département', 'région parisienne'):
        return 'ambigu'
    return 'introuvable'


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Find the French establishments of the companies of data.yaml')
    parser.add_argument('--out', required=True, help='output directory (CSV, Markdown, JSON)')
    parser.add_argument('--only', default='', help='comma separated company names (test)')
    args = parser.parse_args()
    os.makedirs(args.out, exist_ok=True)

    data = liblisting.yaml_read_file(root + '/data.yaml')
    only = set(n.strip() for n in args.only.split(',') if n.strip())
    todo = []
    for entry in data:
        cities = sorted({l['City'] for l in places.expand_places(entry.get('Place')) if l['Country'] == 'France' and l['City']})
        if cities and (not only or entry['Name'] in only):
            todo.append((entry, cities))

    rows = []
    for k, (entry, cities) in enumerate(todo):
        try:
            names, ranked = choose_company(entry)
        except Exception as error:
            print(f'[{k+1}/{len(todo)}] {entry["Name"]} : erreur {error}', flush=True)
            names, ranked = [entry['Name']], []
        best = ranked[0] if ranked else None
        score = candidate_score(names, best) if best else 0
        gap = score - (candidate_score(names, ranked[1]) if len(ranked) > 1 else 0)
        others = '; '.join(f"{c['nom_complet']} ({c['siren']})" for c in ranked[1:3])
        for city in cities:
            etab, where, other = (None, 'entreprise non trouvée', None)
            if best is not None:
                try:
                    etab, where, other = find_establishment(names, best['siren'], city)
                except Exception as error:
                    etab, where, other = None, f'erreur {error}', None
            company = other or best
            conf = confidence(score, gap, where) if best else 'introuvable'
            if other is not None:
                conf = 'probable' if name_score(names, other) >= 1.0 else 'ambigu'
            row = {
                'Entreprise': entry['Name'], 'Ville data.yaml': city, 'Confiance': conf,
                'Raison sociale': company['nom_complet'] if company else '', 'SIREN': company['siren'] if company else '',
                'SIRET': (etab or {}).get('siret', ''), 'Adresse': (etab or {}).get('adresse', ''),
                'Commune registre': (etab or {}).get('libelle_commune', ''), 'Trouvé dans': where,
                'Latitude': (etab or {}).get('latitude', ''), 'Longitude': (etab or {}).get('longitude', ''),
                'Siège': 'oui' if (etab or {}).get('est_siege') else '',
                'Code NAF': company.get('activite_principale', '') if company else '', 'Score nom': round(score, 2),
                'Autres candidats': others,
            }
            rows.append(row)
            print(f"[{k+1}/{len(todo)}] {entry['Name']} / {city} : {conf} - {row['Raison sociale']} - {row['Adresse']}", flush=True)

    fields = list(rows[0].keys()) if rows else []
    with open(os.path.join(args.out, 'adresses_france.csv'), 'w', newline='', encoding='utf-8') as fid:
        writer = csv.DictWriter(fid, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)
    with open(os.path.join(args.out, 'adresses_france.json'), 'w', encoding='utf-8') as fid:
        json.dump(rows, fid, ensure_ascii=False, indent=1)
    order = {'introuvable': 0, 'ambigu': 1, 'probable': 2, 'sûr': 3}
    with open(os.path.join(args.out, 'adresses_france.md'), 'w', encoding='utf-8') as fid:
        counts = {c: sum(1 for r in rows if r['Confiance'] == c) for c in order}
        fid.write('# Adresses des établissements français (registre SIRENE)\n\n')
        fid.write(f"{len(rows)} lieux en France pour {len(todo)} entreprises : "
                  + ', '.join(f'{n} {c}' for c, n in counts.items()) + '.\n\n')
        fid.write('| Confiance | Entreprise | Ville data.yaml | Raison sociale (SIREN) | Adresse | Trouvé dans | Autres candidats |\n|---|---|---|---|---|---|---|\n')
        for r in sorted(rows, key=lambda r: (order[r['Confiance']], r['Entreprise'].lower())):
            fid.write(f"| {r['Confiance']} | {r['Entreprise']} | {r['Ville data.yaml']} | {r['Raison sociale']} ({r['SIREN']}) | "
                      f"{r['Adresse']} | {r['Trouvé dans']} | {r['Autres candidats']} |\n")
    print('Terminé :', len(rows), 'lieux')
