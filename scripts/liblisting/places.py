"""Places of the companies: normalization and coordinates (places.yaml).

A place of data.yaml is expanded into a list of locations (country, city). The city is the
City entry, or the State entry when there is no city (ex. California), or '' when only the
country is known. Locations of "International" are skipped (they are not on the map).

places.yaml stores the coordinates, reviewed by hand:

    États-Unis:
      Pays: [39.8, -98.6]          # used when only the country is known
      Villes:
        Orlando: [28.54, -81.38]
"""


def split_names(value):
    """'Paris, Lyon' or ['Paris', 'Lyon'] -> ['Paris', 'Lyon']"""
    if value is None:
        return []
    if isinstance(value, str):
        return [v.strip() for v in value.split(',') if v.strip() != '']
    if isinstance(value, list):
        out = []
        for v in value:
            out += split_names(v)
        return out
    return [str(value)]


def expand_places(place):
    """Return the list of locations {'Country', 'City', 'Coordinates'} of a Place entry of data.yaml."""
    if isinstance(place, str):
        return [{'Country': 'France', 'City': c, 'Coordinates': None} for c in split_names(place)]
    if isinstance(place, list):
        out = []
        for p in place:
            out += expand_places(p)
        return out
    if not isinstance(place, dict):
        return []
    countries = split_names(place.get('Country')) or ['France']
    cities = split_names(place.get('City')) or split_names(place.get('State'))
    if len(cities) == 0 and place.get('International') is True and 'Country' not in place:
        return []
    coordinates = place.get('Coordinates')
    out = []
    for country in countries:
        for city in (cities or ['']):
            # precise coordinates only make sense for a single location
            precise = coordinates if (len(countries) == 1 and len(cities) <= 1) else None
            out.append({'Country': country, 'City': city, 'Coordinates': precise})
    return out


def place_key(country, city):
    """Key of a location in the 'Places' table of data.json (same rule in site/listing.js)."""
    return country if city == '' else f'{country}/{city}'


def lookup(places_table, country, city):
    """Coordinates [lat, lon] of a location in places.yaml, or None."""
    entry = (places_table or {}).get(country) or {}
    if city == '':
        return entry.get('Pays')
    return (entry.get('Villes') or {}).get(city)


def all_locations(data):
    """Set of (country, city) used in data.yaml."""
    locations = set()
    for entry in data:
        for loc in expand_places(entry.get('Place')):
            locations.add((loc['Country'], loc['City']))
    return locations


def coordinates_table(data, places_table):
    """Table key -> [lat, lon] for data.json, and the list of locations without coordinates."""
    table, missing = {}, []
    for country, city in sorted(all_locations(data)):
        coords = lookup(places_table, country, city)
        if coords is None:
            missing.append((country, city))
        else:
            table[place_key(country, city)] = [round(float(coords[0]), 4), round(float(coords[1]), 4)]
    return table, missing
