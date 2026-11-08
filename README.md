![URLs](https://github.com/Afig-Asso/entreprises/actions/workflows/url.yml/badge.svg)

# Listing d'entreprises en Informatique Graphique

Entreprises françaises, ou présentes en France, en lien avec l'informatique graphique : rendu, VFX, animation, jeu vidéo, CAO, simulation, vision, XR... Listing maintenu par l'[AFIG](https://www.asso-afig.fr).

**Consulter le listing en ligne** (recherche, filtres par thème et par taille, vues liste et graphe) :
- sur le site de l'AFIG : https://www.asso-afig.fr/site/entreprises/
- ou directement : https://afig-asso.github.io/entreprises/
- sur la carte de France, avec les équipes de recherche : https://afig-asso.github.io/cartographie/

Le listing complet est aussi disponible plus bas dans ce fichier ([aller au listing](#listing)).

## Voir aussi

- Équipes de recherche en informatique graphique : https://afig-asso.github.io/research-team/ (dépôt [Afig-Asso/research-team](https://github.com/Afig-Asso/research-team))
- Carte de France des entreprises et des équipes de recherche : https://afig-asso.github.io/cartographie/ (dépôt [Afig-Asso/cartographie](https://github.com/Afig-Asso/cartographie))

## Ajouter ou modifier une entreprise

- Envoyez un email à contact[at]asso-afig.fr avec les informations,
- ou proposez une pull request qui modifie uniquement **`data.yaml`**. Les champs possibles sont décrits en tête de ce fichier.

`README.md` et `json/data.json` sont générés à partir de `data.yaml` : inutile de les modifier à la main.

## Maintenance

### Fichiers

| Fichier | Contenu |
|---|---|
| `data.yaml` | Base des entreprises (la syntaxe des champs est décrite en tête du fichier) |
| `keywords.yaml` | Mots-clés autorisés pour les domaines scientifiques et d'application |
| `places.yaml` | Coordonnées des villes et pays, pour la carte du site |
| `zones.yaml` | Regroupement des villes françaises en zones (ex. Villeurbanne avec Lyon), pour la vue par localité |
| `url_exceptions.yaml` | URLs ignorées par la vérification d'accessibilité, avec la raison et la date d'ajout |
| `json/data.json` | *Généré* : base complète lue par le site |
| `README.md` | *Généré* : ce fichier (tout ce qui suit le titre « Listing ») |
| `site/` | Le site web (HTML/CSS/JS, sans étape de compilation) |
| `scripts/` | Scripts Python décrits ci-dessous |

### Après une modification de `data.yaml`

Prérequis : Python 3 avec `pyyaml` et `tqdm` (`pip install pyyaml tqdm`).

```
python3 scripts/generate.py
```

Ce script régénère `json/data.json` et la partie « Listing » de `README.md`. **Commitez ces deux fichiers avec `data.yaml`** : le site lit `json/data.json` directement sur la branche `main` de GitHub, et rien ne le régénère automatiquement.

Le script signale aussi les clés inconnues dans `data.yaml` (faute de frappe probable) et les lieux sans coordonnées dans `places.yaml`.

Options de vérification :

```
python3 scripts/generate.py -c   # vérifie aussi les mots-clés et l'accessibilité des URLs, sans s'arrêter en cas d'erreur
python3 scripts/generate.py -C   # idem, mais s'arrête avec une erreur au premier problème bloquant
```

Pour les URLs, seules les pages disparues (HTTP 404/410) et les domaines introuvables sont bloquants. Les erreurs temporaires ou invérifiables (403, 429, 5xx, timeout, certificat SSL) sont de simples avertissements. Pour ignorer un site valide que le vérificateur ne sait pas tester, ajoutez-le dans `url_exceptions.yaml`.

### Autres scripts

| Commande | Rôle |
|---|---|
| `python3 scripts/sort_data.py` | Trie les entreprises de `data.yaml` par ordre alphabétique (une copie de sauvegarde est faite dans `.data-save.yaml`) |
| `python3 scripts/geocode_places.py [--dry-run]` | Ajoute à `places.yaml` les coordonnées des nouveaux lieux (OpenStreetMap). Résultat à vérifier à la main |
| `python3 scripts/siren_lookup.py --out <dossier>` | Cherche le SIREN et l'adresse des établissements français dans le registre SIRENE. N'écrit rien dans `data.yaml` : produit un tableau à relire |

### Tester le site en local

Depuis la racine du dépôt :

```
python3 -m http.server
```

puis ouvrir http://localhost:8000/site/. En local, le site lit le `json/data.json` du dépôt plutôt que celui publié sur GitHub.

### Ce qui se passe après un push sur `main`

- La base est vérifiée par GitHub Actions avec `python scripts/generate.py -C` (badge en haut de ce fichier).
- Le contenu de `site/` est copié dans le dépôt [Afig-Asso.github.io](https://github.com/Afig-Asso/Afig-Asso.github.io) et publié sur https://afig-asso.github.io/entreprises/, page intégrée au site de l'AFIG.


## Listing 

* **[2 minutes](https://2minutes.fr/)**  
  * _Société de production et studio d'animation fondée en 2000 (Paris, Angoulême, Réunion, Montréal, Nanjing) qui développe et fabrique des séries TV et longs métrages en 2D et 3D._
  * **Mots clés**: _séries d'animation, long métrage, animation 2D, animation 3D_
  * **Localisation**: Paris, Angoulême, Canada/Montréal, Chine/Nanjing
  * **Domaine scientifique/technique**: Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[3.0 Studio](https://www.3point0studio.com/en/home/)**  
  * _Studio d'animation d'Angoulême spécialisé en 2D exigeante pour courts et longs métrages et téléfilms (ex. Les Lapins à trois oreilles de Michel Ocelot, La Plus Précieuse des marchandises)._
  * **Mots clés**: _animation 2D, long métrage, court métrage_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[3D Factory Monaco](https://3dfactorymonaco.com/)**  
  * _Studio de création monégasque spécialisé depuis plus de dix ans dans la visualisation 3D (images et animations), la réalité virtuelle, les plans CAO 2D et l'impression 3D pour l'architecture, l'immobilier et le design._
  * **Mots clés**: _architecture, rendu photoréaliste, impression 3D, réalité virtuelle_
  * **Localisation**: Monaco
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Design/Fabrication
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité


* **[3Deus Dynamics](https://3deusdynamics.com/)**  
  * _Industriel de Rillieux-la-Pape qui imprime en 3D des pièces en silicone grâce à un procédé breveté de moulage dynamique en milieu granulaire (modèles anatomiques, dispositifs médicaux, aéronautique)._
  * **Mots clés**: _fabrication additive, silicone, dispositif médical, aéronautique_
  * **Localisation**: Rillieux-la-Pape
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO


* **[3DVerse](https://3dverse.com/)**  
  * _Plateforme cloud et moteur 3D temps réel pour construire et diffuser sur le web des jumeaux numériques et applications 3D collaboratives, intégrant IoT, IA et ERP._
  * **Mots clés**: _jumeau numérique, cloud/streaming, rendu temps réel, web 3D, plateforme collaborative, industrie/usinage_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Modélisation, Web/Cloud/Big Data
  * **Domaine d'application**: Générique


* **[3DVF](https://3dvf.com/)**  
  * _Média français de référence depuis 2000 sur l'image numérique (animation, VFX, jeu vidéo, logiciels), avec actualités, dossiers et cartes des studios et écoles._
  * **Mots clés**: _média spécialisé, actualité, effets visuels, animation 3D, écoles, annuaire des studios_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[4D Fun](https://4dfun.io/)**  
  * _Studio de capture volumétrique (32 points de vue) qui produit et diffuse des performances 4D en streaming pour l'XR (Quest, Vision Pro, web), les musées, la formation et les données d'entraînement IA._
  * **Mots clés**: _vidéo volumétrique, réalité virtuelle, réalité mixte, cloud/streaming, données d'entraînement IA, patrimoine/musée_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Acquisition, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[4D Pipeline](https://www.4dpipeline.com/)**  
  * _Société de services (depuis 2012) qui conçoit des produits, pipelines et expériences 3D/XR sur mesure : plugins DCC et CAO, intégrations PLM, pipelines USD/glTF, applications Unreal Engine._
  * **Mots clés**: _conseil, développement logiciel 3D, pipeline 3D, plugin/logiciel pour artistes, Unreal Engine, USD/glTF, réalité augmentée, réalité virtuelle_
  * **Localisation**: États-Unis/California
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.4dpipeline.com/jobs)


* **[4Dviews](https://www.4dviews.com/)**  
  * _Constructeur de systèmes de capture vidéo volumétrique (HOLOSYS, HOLOSYS+) et du logiciel 4Dfx, avec intégration Unity/Unreal pour l'XR, la publicité, la mode et la télévision._
  * **Mots clés**: _vidéo volumétrique, studio de capture, logiciel de traitement, Unity, Unreal Engine, réalité virtuelle_
  * **Localisation**: Grenoble
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[6freedom](https://6freedom.studio/)**  
  * _Studio XR parisien développant des applications sur mesure de réalité virtuelle, augmentée et mixte (formation, assistance terrain, marketing), modélisation 3D et photogrammétrie, sous Unity._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, Unity, photogrammétrie, serious game_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Reconstruction
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO, Commerce/Marketing/Publicité


* **[7-Shapes](https://www.7-shapes.com/)**  
  * _Entreprise fondée en 2017 qui développe et édite la 7-Shapes School, un serious game de simulation d'entreprise (Unity/WebGL) pour former au Lean Management dans l'industrie._
  * **Mots clés**: _serious game, lean management, formation en ligne, simulation d'entreprise_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Abbelight](https://www.abbelight.com/)**  
  * _Fabricant à Cachan de solutions de microscopie de super-résolution (nanoscopie de molécule unique) et des logiciels de reconstruction et d'analyse associés._
  * **Mots clés**: _imagerie scientifique, microscopie, super-résolution, reconstruction 3D_
  * **Localisation**: Cachan
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Reconstruction
  * **Domaine d'application**: Médical/Biologique


* **[ACFX](https://acfx.fr/)**  
  * _Studio indépendant d'effets visuels de la Plaine Images (Tourcoing) travaillant sur des longs métrages et des séries : supervision de tournage, environnements CG, extensions de décors, animation, compositing ; exploite aussi un plateau de tournage de 500 m²._
  * **Mots clés**: _effets visuels, compositing, long métrage, set extension_
  * **Localisation**: Tourcoing
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[ACRI-ST](https://www.acri-st.fr/)**  
  * _PME de R&D de Sophia Antipolis (Biot) spécialisée dans l'observation de la Terre : traitement de données et d'images satellitaires pour l'océanographie, l'environnement et le spatial, avec un centre de traitement à Grasse._
  * **Mots clés**: _imagerie satellite, télédétection, observation de la Terre, SIG_
  * **Localisation**: Biot, Grasse
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Analyse de données, Visualisation
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement


* **[Activision](https://www.activision.com/)**  
  * _Grand éditeur et développeur américain de jeux vidéo (filiale de Microsoft), connu pour la franchise Call of Duty développée par ses studios Treyarch, Infinity Ward, Raven Software._
  * **Mots clés**: _AAA, console/PC, mobile, édition de jeux, multijoueur en ligne, FPS, Call of Duty_
  * **Remarque**: _Filiale de Microsoft (Xbox) depuis le rachat d'Activision Blizzard en octobre 2023._
  * **Localisation**: États-Unis/Los Angeles, International
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.activision.com/)


* **[Actronika](https://www.actronika.com/)**  
  * _Start-up parisienne de l'haptique (actionneurs, moteur d'effets Skinetic, gilet haptique pour la VR, Unitouch Studio) cofondée en 2015 par Vincent Hayward._
  * **Mots clés**: _haptique, réalité virtuelle, retour d'effort, interfaces tangibles_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: IHM/Haptique, Hardware, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Jeu Vidéo, Automobile/Navigation/Aviation


* **[Adobe](https://www.adobe.com/fr/)**  
  * _Éditeur de logiciels de création (Photoshop, Illustrator, Premiere, Substance 3D) et de documents (Acrobat), intégrant l'IA générative Firefly._
  * **Mots clés**: _plugin/logiciel pour artistes, retouche d'image, montage vidéo, IA générative, Photoshop, Firefly, Substance 3D_
  * **Remarque**: _Centre de recherche à Paris_
  * **Produits**: Photoshop, Substance 3D, Premiere, Illustrator, etc.
  * **Localisation**: États-Unis, Canada, Paris, Royaume-Uni, Inde, International
  * **Nombres d'employés**: 31000
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Design/Fabrication
  * **Domaine d'application**: Art/Evenementiel, Cinéma/Films d'Animation/VFX


* **[Agenium](https://www.agenium.com/)**  
  * _Groupe français d'ingénierie pour l'industrie, la défense et le spatial : simulation d'entraînement, génération d'environnements 3D synthétiques, IA embarquée et traitement d'images spatiales._
  * **Mots clés**: _défense, spatial, simulateur d'entraînement, environnement synthétique, deep learning, traitement d'images, surveillance de l'espace_
  * **Localisation**: Toulouse, Saint-Germain-en-Laye, Rennes
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication, Modélisation, Animation
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation, Entrainement/Formation/Serious Game


* **[AI Verse](https://ai-verse.com/)**  
  * _Start-up deeptech de Sophia Antipolis (Biot) qui génère par rendu 3D procédural des jeux d'images synthétiques annotées (RGB, IR) pour entraîner des modèles de vision par ordinateur._
  * **Mots clés**: _données synthétiques, vision par ordinateur, deep learning, génération procédurale, rendu photoréaliste_
  * **Localisation**: Biot
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Vision, IA générative (image/3D), Modélisation
  * **Domaine d'application**: Sécurité/Défense, Générique
  * [_Jobs_](https://ai-verse.zohorecruit.eu/jobs/Careers)


* **[Airbus Defence and Space](https://www.airbus.com/en/space)**  
  * _Établissement toulousain d'Airbus Defence and Space (satellites, observation de la Terre), dont l'activité Intelligence exploite l'imagerie satellite (Pléiades, SPOT) et la plateforme OneAtlas de traitement d'images à grande échelle._
  * **Mots clés**: _imagerie satellite, observation de la Terre, traitement d'images, spatial_
  * **Localisation**: Toulouse
  * **Domaine scientifique/technique**: Imagerie, Simulation, Vision
  * **Domaine d'application**: Géospatial/Cartographie, Sécurité/Défense


* **[Aledia](https://www.aledia.com/)**  
  * _Concepteur de micro-LED à base de nanofils 3D sur silicium pour les écrans, notamment de réalité augmentée._
  * **Mots clés**: _micro-LED, nanofils, GaN sur silicium, puce/semi-conducteur, micro-écran, réalité augmentée_
  * **Localisation**: Champagnier, Échirolles
  * **Nombres d'employés**: 225
  * **Domaine scientifique/technique**: Hardware, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique


* **[Align Technology](https://www.aligntech.com/)**  
  * _Fabricant américain de dispositifs médicaux dentaires : aligneurs orthodontiques Invisalign et scanners intraoraux iTero._
  * **Mots clés**: _dentaire, orthodontie, aligneurs, scanner intraoral, Invisalign, iTero_
  * **Localisation**: États-Unis, Suisse/Rotkreuz, Singapour, Brésil/São Paulo
  * **Nombres d'employés**: 20000
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Alma](https://www.alma.fr/nos-activites/logiciels-cfao/)** (Alma Logiciels CFAO) 
  * _Edition de logiciels de Conception et Fabrication d'objets manufacturés._
  * **Mots clés**: _CFAO, imbrication automatique, découpe 2D/3D, tôlerie, soudage robotisé, industrie/usinage_
  * **Localisation**: Saint-Martin-d'Hères, Lyon, Tarbes, Annecy
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation, Robotique/Systèmes autonomes
  * [_Jobs_](https://recrutement.alma.fr/)


* **[Almédia](https://www.almedia.fr/)**  
  * _Agence ludique multimédia strasbourgeoise (2009) qui conçoit serious games, escape games, vidéo 360 interactive et applications de réalité virtuelle et augmentée pour la formation et la culture._
  * **Mots clés**: _serious game, réalité virtuelle, réalité augmentée, mobile_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Patrimoine/Culture


* **[Altametris](https://www.altametris.com/)**  
  * _Filiale de SNCF Réseau qui acquiert (drones, trains, lidar) et traite à grande échelle des données 3D pour construire les jumeaux numériques d'infrastructures._
  * **Mots clés**: _lidar, nuage de points, jumeau numérique, drone, deep learning_
  * **Localisation**: Saint-Denis
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, Vision
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Géospatial/Cartographie


* **[Alteia](https://alteia.com/)**  
  * _Éditeur français d'une plateforme d'intelligence visuelle (vision par ordinateur, IA) pour analyser des images aériennes et terrain dans l'énergie, les réseaux et les mines, racheté par GE Vernova._
  * **Mots clés**: _vision par ordinateur, deep learning, imagerie aérienne, drone, inspection d'infrastructures, énergie, GE Vernova_
  * **Remarque**: _Racheté par GE Vernova en 2025 (intégré à GridOS Visual Intelligence)._
  * **Localisation**: Toulouse, Paris
  * **Nombres d'employés**: 80
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Géospatial/Cartographie, Industrie/Manufacturing/CAO, Énergie/Environnement
  * [_Jobs_](https://careers.alteia.com/)


* **[AMA XpertEye](https://www.amaxperteye.com/)** (AMA) 
  * _Éditeur de solutions d'assistance à distance et de workflows en réalité augmentée sur lunettes connectées._
  * **Mots clés**: _réalité augmentée, assistance à distance, lunettes connectées, inspection, télémédecine, deep learning_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Web/Cloud/Big Data
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique


* **[AMD](https://www.amd.com/)**  
  * _Développement de processeurs et cartes graphiques: développement matériel et logiciel._
  * **Mots clés**: _GPU, CPU, puce/semi-conducteur, calcul haute performance, accélérateurs IA, pilotes graphiques, FPGA_
  * **Localisation**: États-Unis, International
  * **Nombres d'employés**: 31000
  * **Domaine scientifique/technique**: Hardware, Rendu temps réel/Moteurs 3D, Rendu offline/VFX
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.amd.com/careers-home/jobs)


* **[Amopix](https://amopix.com/)**  
  * _Studio d'animation et société de production (Strasbourg et Annecy) qui fabrique courts et longs métrages, séries et documentaires en 2D et 3D, ainsi que des films en motion design._
  * **Mots clés**: _animation 2D, animation 3D, séries d'animation, long métrage, motion design_
  * **Localisation**: Strasbourg, Annecy
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Amplitude Studios](https://www.amplitude-studios.com/)**  
  * _Studio parisien de jeux de stratégie sur PC, créateur des séries Endless (Endless Space, Endless Legend) et de Humankind._
  * **Mots clés**: _jeu de stratégie, 4X, console/PC, jeu indépendant, Humankind, Endless Legend_
  * **Remarque**: _Studio redevenu indépendant en novembre 2024 (rachat à Sega par son équipe dirigeante)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.amplitude-studios.com/#Careers)


* **[Anatoscope](https://www.anatoscope.com/)**  
  * _Logiciels pour l'anatomie 3D numérique personnalisé (orthopedie, dentaire, radiologique)._
  * **Mots clés**: _jumeau numérique, imagerie médicale, simulation biomécanique, CAO, dentaire, orthèses/prothèses_
  * **Remarque**: _Filiales : Circle Dental, COPOPSA, Capteo Tech, Anatopass. Siège à Meylan._
  * **Localisation**: Grenoble, Montpellier
  * **Domaine scientifique/technique**: Modélisation, Géométrie, Simulation, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Andarta Pictures](https://andarta-pictures.com/)**  
  * _Studio de fabrication d'animation 2D avec un pipeline R&D basé sur Blender mêlant 2D et 3D._
  * **Mots clés**: _animation 2D, séries d'animation, Blender, Grease Pencil, open source, hybride 2D/3D_
  * **Localisation**: Bourg-lès-Valence
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://andarta-pictures.com/fr/recrutement/)


* **[Animaj](https://www.animaj.com/)**  
  * _Groupe média jeunesse (Pocoyo, Maya l'abeille) développant ses propres outils d'animation assistée par IA (Sketch-to-Motion, PoseBind)._
  * **Mots clés**: _séries d'animation, jeunesse, animation 3D, IA générative, YouTube, Pocoyo_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: IA générative (image/3D), Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.animaj.com/careers)


* **[Animal Logic](https://animallogic.com/)**  
  * _Studio australien d'animation et d'effets visuels (Lego Movie, Peter Rabbit), intégré depuis 2024 à Netflix Animation Studios (Sydney, Vancouver, Burbank)._
  * **Mots clés**: _long métrage, animation 3D, effets visuels, USD, Netflix Animation Studios_
  * **Remarque**: _Racheté par Netflix (2022) ; fait partie de Netflix Animation Studios depuis 2024._
  * **Localisation**: Australie/Sydney, Canada/Vancouver, États-Unis/Burbank
  * **Nombres d'employés**: 1300
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Ankama](https://www.ankama.com)**  
  * _Studio transmédia : jeux vidéo en ligne (Dofus, Wakfu, Waven), films et séries d'animation, édition._
  * **Mots clés**: _MMORPG, multijoueur en ligne, jeu indépendant, séries d'animation, animation 2D, transmédia, édition BD/manga_
  * **Localisation**: Roubaix
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Animation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Ansys](https://ansys.synopsys.com/products/optics/ansys-speos)** (Ansys, part of Synopsys (ex-OPTIS)) 
  * _Éditeur de simulation numérique (groupe Synopsys depuis 2025) ; le centre R&D de La Farlède (ex-OPTIS) développe Speos, logiciel de simulation physique de la lumière et de rendu photoréaliste._
  * **Mots clés**: _simulation optique, rendu photoréaliste, rendu spectral, éclairage, automobile, capteurs, Speos_
  * **Localisation**: États-Unis/Canonsburg, France/La Farlède, Montigny-le-Bretonneux, Toulouse, Villeurbanne, Lille, Biot, International
  * **Domaine scientifique/technique**: Simulation, Rendu offline/VFX, Visualisation
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO, Générique
  * [_Jobs_](https://careers.ansys.com/)


* **[Apologue FX](https://www.apologuefx.com/)**  
  * _Studio lyonnais d'effets visuels temps réel pour le jeu vidéo, les cinématiques et la XR (Unreal, Unity, moteurs propriétaires, Houdini, EmberGen)._
  * **Mots clés**: _effets temps réel, Houdini, Unreal Engine, AAA_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation, Rendu offline/VFX
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Apple](https://www.apple.com/)**  
  * _Constructeur américain d'appareils grand public (Mac, iPhone, iPad, Vision Pro) conçus autour de ses propres puces Apple Silicon à GPU intégré._
  * **Mots clés**: _matériel grand public, puce/semi-conducteur, GPU, réalité mixte, Apple Vision Pro, écrans_
  * **Localisation**: États-Unis/Cupertino, International
  * **Nombres d'employés**: 160000
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Hardware, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://jobs.apple.com)


* **[Archi Graphi](https://archi-graphi.fr/)**  
  * _Studio d'infographie 3D fondé en 2003 (Lyon et Paris) réalisant perspectives, films, maquettes interactives et phasages 4D pour l'architecture, la construction et l'immobilier._
  * **Mots clés**: _architecture, rendu photoréaliste, immobilier, ferme de rendu_
  * **Localisation**: Lyon, Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme
  * [_Jobs_](https://join.com/companies/archi-graphi)


* **[Arcure](https://blaxtair.com/)**  
  * _Start-up du CEA List qui conçoit Blaxtair, caméra stéréo à IA embarquée détectant les piétons autour des engins industriels et de chantier._
  * **Mots clés**: _vision par ordinateur, caméra stéréo, vision embarquée, deep learning_
  * **Localisation**: Savigny-sur-Orge
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Vision, Hardware, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Industrie/Manufacturing/CAO


* **[Argolight](https://argolight.com/)**  
  * _Société pessacaise qui conçoit des lames et microplaques de calibration fluorescentes (gravure laser) et le logiciel associé pour mesurer la résolution et contrôler la qualité des systèmes d'imagerie de fluorescence._
  * **Mots clés**: _imagerie scientifique, microscopie, métrologie, calibration, analyse d'images_
  * **Produits**: Calibration Slides, Daybook (logiciel)
  * **Localisation**: Pessac
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique


* **[Arkane Studios](https://www.arkane-studios.com/fr)**  
  * _Studio lyonnais de jeux AAA en vue subjective (Dishonored, Prey, Deathloop), filiale de ZeniMax/Microsoft, actuellement sur Marvel's Blade._
  * **Mots clés**: _AAA, console/PC, jeu en vue subjective, immersive sim, moteur maison, Dishonored_
  * **Remarque**: _Arkane Austin fermé par Microsoft en mai 2024. Fin 2026, Arkane Lyon (Marvel's Blade) est menacé de fermeture : Microsoft cherche un repreneur (échéance repoussée au 13/12/2026)._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.arkane-studios.com/fr#studios)


* **[Arkhênum](https://www.arkhenum.fr/)** (Memorist (Arkhênum)) 
  * _Société bordelaise (groupe Memorist) de numérisation 2D, 3D et 360° du patrimoine (archives, bibliothèques, musées, collections industrielles) et de valorisation des fonds numérisés._
  * **Mots clés**: _numérisation patrimoniale, photogrammétrie, scanner 3D, traitement d'images, archives_
  * **Remarque**: _Entité légale MEMORIST (marque Arkhênum), établissement principal 7 rue Joseph Bonnet, Bordeaux._
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Web/Cloud/Big Data
  * **Domaine d'application**: Patrimoine/Culture


* **[Armada Studios](https://armada-studios.com/)**  
  * _Studio de numérisation 3D (LiDAR, photogrammétrie, drone) produisant des jumeaux numériques pour le cinéma, les VFX et la culture._
  * **Mots clés**: _lidar, photogrammétrie, drone, scanner 3D, jumeau numérique, effets visuels, patrimoine/musée_
  * **Localisation**: Paris
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Reconstruction, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Patrimoine/Culture


* **[Art Graphique & Patrimoine](https://www.artgp.fr/)** (Art Graphique et Patrimoine (AGP)) 
  * _Entreprise de relevés et numérisation 3D du patrimoine (laser, photogrammétrie) et de restitutions numériques._
  * **Mots clés**: _patrimoine/musée, scanner 3D, photogrammétrie, nuage de points, BIM, jumeau numérique, visite augmentée_
  * **Localisation**: Saint-Denis
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Modélisation
  * **Domaine d'application**: Patrimoine/Culture, Architecture/BTP/Urbanisme


* **[Artefacto](https://www.artefacto-ar.com/)**  
  * _Développement d'applications pour la Réalité augmentée pour la visualisation dans le domaine de l'immobilier, de l'industrie, ou de l'entrainement._
  * **Mots clés**: _réalité augmentée, réalité virtuelle, visite 360°, immobilier, formation professionnelle, industrie/usinage_
  * **Remarque**: _Le site annonce qu'Artefacto devient INVELON France._
  * **Localisation**: Rennes (Betton)
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Visualisation, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.artefacto-ar.com/entreprise/carrieres/)


* **[ArtefactoryLab](https://www.artefactorylab.com/)**  
  * _Studio parisien de visualisation architecturale : images de synthèse et films 3D de projets d'architecture, d'urbanisme et de paysage._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective_
  * **Localisation**: Paris
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Visualisation, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.artefactorylab.com/nous-rejoindre/)


* **[Artefacts Studio](https://www.artefacts-studio.fr/)**  
  * _Studio indépendant de jeux vidéo PC/consoles fondé en 2003 à Villeurbanne (Le Donjon de Naheulbeuk, Space Hulk Tactics, Disciples: Domination), en propre et pour des éditeurs._
  * **Mots clés**: _console/PC, co-développement, jeu de stratégie, RPG tactique_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.artefacts-studio.fr/en/career)


* **[Asile](https://asile-paris.com/)** (Asile Paris) 
  * _Studio parisien d'images de synthèse et de retouche (print et motion) pour le luxe, la cosmétique et l'automobile, combinant photographie et 3D._
  * **Mots clés**: _CGI, 3D, publicité, automobile, luxe_
  * **Localisation**: Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Automobile/Navigation/Aviation


* **[Asobo](https://www.asobostudio.com/)**  
  * _Studio bordelais de jeux AAA à moteur maison, créateur de la série A Plague Tale et développeur de Microsoft Flight Simulator._
  * **Mots clés**: _AAA, console/PC, moteur maison, co-développement, simulation de vol, A Plague Tale, Microsoft Flight Simulator_
  * **Produits**: Microsoft Flight Simulator, The Crew
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.asobostudio.com/careers)


* **[Ateme](https://www.ateme.com/)**  
  * _Spécialiste français de la compression et de la diffusion vidéo (encodage HEVC/VVC, streaming) dont le principal centre de R&D est à Rennes (Cesson-Sévigné)._
  * **Mots clés**: _compression vidéo, encodage, streaming, broadcast_
  * **Localisation**: Rennes, Vélizy-Villacoublay
  * **Nombres d'employés**: 375
  * **Domaine scientifique/technique**: Imagerie, Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.ateme.com/)


* **[Atlantiz Park](https://www.atlantizpark.com/)**  
  * _Studio d'animation 2D (traditionnelle, numérique, cut-out) d'une trentaine d'artistes, du storyboard au compositing, pour séries, documentaires, courts/longs métrages et clips._
  * **Mots clés**: _animation 2D, storyboard, compositing, Toon Boom Harmony, Blender_
  * **Localisation**: Angoulême, Gujan-Mestras
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Atlas V](https://atlasv.io/)**  
  * _Studio de création d'expériences immersives en réalité virtuelle et augmentée._
  * **Mots clés**: _réalité virtuelle, narration immersive, jeu VR, location-based entertainment, multijoueur en ligne, exposition immersive_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel, Jeu Vidéo


* **[Atypique Studio](https://www.atypique-studio.com/)**  
  * _Studio indépendant de jeux vidéo fondé en 2017 à La Ciotat, qui développe des jeux multijoueurs (Mixcity Arena, Noara: The Conspiracy) et propose des prestations de production._
  * **Mots clés**: _jeu indépendant, multijoueur, MOBA_
  * **Localisation**: La Ciotat
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Augmenta](https://augmenta.tech/)**  
  * _Société villeurbannaise (Pôle Pixel) éditant une solution matérielle et logicielle de suivi de personnes sans marqueur pour rendre interactifs sols, murs et espaces immersifs._
  * **Mots clés**: _tracking de personnes, installations interactives, vision par ordinateur, événementiel/mapping_
  * **Remarque**: _Technologie issue du studio Théoriz (même adresse au Pôle Pixel) ; société créée en 2023._
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Acquisition, Vision, IHM/Haptique
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers, Patrimoine/Culture


* **[Aurora Game Studio](https://auroragamestudio.com/)**  
  * _Studio fondé en 2016 qui crée des jeux vidéo et des jeux de plateau, dont le point-and-click Nefasto's Misadventure (Steam, Switch)._
  * **Mots clés**: _jeu vidéo, point-and-click, jeu de plateau_
  * **Localisation**: Gond-Pontouvre, Hiersac
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Autodesk](https://www.autodesk.com/)**  
  * _Éditeur américain de logiciels de conception (AutoCAD, Revit, Fusion) et de création 3D pour l'animation et les VFX (Maya, 3ds Max, Flow)._
  * **Mots clés**: _CAO, BIM, animation 3D, effets visuels, plugin/logiciel pour artistes, Maya, 3ds Max, AutoCAD_
  * **Remarque**: _A racheté en août 2024 la société rennaise Golaem (logiciel de simulation de foules pour les VFX), qui n'existe plus en tant que telle._
  * **Produits**: Maya, 3DS Max, AutoCAD, Golaem
  * **Localisation**: États-Unis, Canada, Inde, Royaume-Uni, Singapour, Norvège, International
  * **Nombres d'employés**: 15000
  * **Domaine scientifique/technique**: Modélisation, Animation, Design/Fabrication, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.autodesk.com/careers/overview)


* **[AutreChose](https://www.autrechose.fr/)**  
  * _Studio de post-production spécialisé dans la réalisation d'effets spéciaux numériques 2D et 3D pour le cinéma et les séries._
  * **Mots clés**: _effets visuels, compositing, long métrage, séries TV, supervision de tournage, post-production_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[AVA](https://www.ava-ux.com/)**  
  * _Éditeur près de Lyon d'instructions de travail digitales qui transforment les modèles 3D CAO en guides d'assemblage et de maintenance interactifs pour les opérateurs industriels._
  * **Mots clés**: _CAO, instructions de travail 3D, visualiseur 3D, industrie/usinage, web 3D_
  * **Localisation**: Saint-Bonnet-de-Mure
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Visualisation, Web/Cloud/Big Data
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Avatar Medical](https://www.avatarmedical.ai/)**  
  * _Logiciels transformant l'imagerie médicale en avatars 3D du patient pour la consultation, la planification préopératoire et la visualisation en réalité augmentée._
  * **Mots clés**: _imagerie médicale, chirurgie assistée, planification chirurgicale, réalité augmentée, avatar patient 3D, segmentation_
  * **Localisation**: France/Paris
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.avatarmedical.ai/careers)


* **[Aviwest](https://aviwest.com/)**  
  * _Concepteur à Saint-Grégoire d'encodeurs et de systèmes de transmission vidéo live (HEVC, 4K, bonding IP) pour le broadcast, filiale de Haivision._
  * **Mots clés**: _compression vidéo, encodage, broadcast, 4K_
  * **Localisation**: Saint-Grégoire
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Hardware
  * **Domaine d'application**: Générique


* **[AVT Simulation](https://www.avtsim.com/)**  
  * _Concepteur américain de simulateurs d'entraînement (aviation militaire, combat, engins de chantier, parachutisme) en VR/MR et de simulations médicales._
  * **Mots clés**: _simulateur d'entraînement, défense, aéronautique, réalité virtuelle, réalité mixte, simulation médicale, formation professionnelle_
  * **Localisation**: États-Unis/Orlando
  * **Domaine scientifique/technique**: VR/AR, Simulation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Sécurité/Défense, Automobile/Navigation/Aviation, Médical/Biologique
  * [_Jobs_](https://www.avtsim.com/careers/)


* **[Axilum Robotics](https://www.axilumrobotics.com/en/)**  
  * _Concepteur de robots et cobots pour la stimulation magnétique transcrânienne et les ultrasons transcrâniens, guidés par neuronavigation et suivi optique._
  * **Mots clés**: _robotique, navigation chirurgicale, dispositif médical, imagerie médicale_
  * **Localisation**: Schiltigheim
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Hardware, Visualisation, Imagerie
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


* **[b<>com](https://b-com.com/)**  
  * _Institut de recherche technologique rennais qui développe des technologies numériques, notamment en image et vision (vidéo immersive, IA pour l'image, imagerie médicale, réalité augmentée)._
  * **Mots clés**: _vidéo immersive, vision par ordinateur, deep learning, réalité augmentée_
  * **Remarque**: _Fondation de coopération scientifique (pas une société commerciale) ; ~180 personnes selon son site._
  * **Localisation**: Cesson-Sévigné
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision, VR/AR
  * **Domaine d'application**: Générique, Médical/Biologique


* **[BackLight](https://backlight.fr/)**  
  * _Studio de création d'expériences en réalité virtuelle et XR (location-based VR, attractions, spectacles immersifs) actif depuis 2008, auteur d'Eclipse, Iron Man Suit Up (Disneyland Paris) ou Le Bal de Paris de Blanca Li._
  * **Mots clés**: _réalité virtuelle, location-based VR, expérience immersive, rendu temps réel, multijoueur_
  * **Localisation**: Saint-Denis
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel


* **[Balyo](https://www.balyo.com/)**  
  * _Concepteur de chariots élévateurs autonomes dont la navigation et la cartographie des sites reposent sur le lidar 3D et des jumeaux numériques d'entrepôt._
  * **Mots clés**: _robotique, lidar, navigation autonome, jumeau numérique_
  * **Localisation**: Arcueil
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Vision, Acquisition, Simulation
  * **Domaine d'application**: Robotique/Systèmes autonomes, Industrie/Manufacturing/CAO


* **[Beemoov](https://www.beemoov.com/)**  
  * _Studio-éditeur nantais créé en 2006 de jeux gratuits sur navigateur et mobile, principalement des visual novels et jeux narratifs illustrés (Amour Sucré, Eldarya, Moonlight Lovers)._
  * **Mots clés**: _visual novel, jeu navigateur, jeu mobile, illustration 2D_
  * **Localisation**: Nantes
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.beemoov.com/recrutement)


* **[Beicip-Franlab](https://www.beicip.com/)**  
  * _Filiale d'IFP Energies nouvelles qui édite la plateforme OpenFlow de modélisation géologique 3D, de bassin et de réservoir pour l'énergie et le stockage du CO2._
  * **Mots clés**: _modélisation géologique, simulation, visualisation 3D, géosciences_
  * **Localisation**: Rueil-Malmaison
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Modélisation, Simulation, Visualisation
  * **Domaine d'application**: Énergie/Environnement


* **[Bentley](https://www.bentley.com/)**  
  * _Développement de logiciels pour l'ingénierie civile (simulation, visualisation, acquisition). Détient l'ancienne entreprise Francaise de reconstruction 3D "Acute 3D"._
  * **Mots clés**: _BIM, infrastructure, génie civil, photogrammétrie, jumeau numérique, CAO, MicroStation, iTwin_
  * **Remarque**: _Cesium (plateforme ouverte de données géospatiales 3D, Philadelphie) racheté en septembre 2024 et intégré à iTwin._
  * **Produits**: iTwin, Cesium
  * **Localisation**: États-Unis, Royaume-Uni, Pays-Bas, Paris, Singapour, Nouvelle-Zélande, Inde
  * **Nombres d'employés**: 5000
  * **Domaine scientifique/technique**: Modélisation, Simulation, Reconstruction, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Géospatial/Cartographie, Automobile/Navigation/Aviation
  * [_Jobs_](https://bentleysystems.wd5.myworkdayjobs.com/bentley)


* **[Bertin Technologies](https://www.bertin-technologies.com/)**  
  * _Groupe d'ingénierie et d'instrumentation dont le site de conception et production d'Aix-en-Provence développe notamment des caméras et systèmes optroniques (CamSight, imagerie thermique et infrarouge) pour la défense, la sécurité et le spatial._
  * **Mots clés**: _caméra thermique, optronique, infrarouge, IA embarquée_
  * **Localisation**: Montigny-le-Bretonneux, Aix-en-Provence
  * **Nombres d'employés**: 375
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Vision
  * **Domaine d'application**: Sécurité/Défense, Robotique/Systèmes autonomes
  * [_Jobs_](https://bertintechnologies.taleez.com/en/)


* **[Beview](https://www.beview.fr/)**  
  * _Agence du Barp (près de Bordeaux) associant ingénieurs et artistes pour concevoir des applications de réalité virtuelle et augmentée et des films et visuels en image de synthèse pour l'industrie (sécurité, maintenance, logistique)._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, animation 3D, serious game_
  * **Localisation**: Le Barp
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Animation, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Big Company](https://www.bigcompany.fr/)**  
  * _Studio lyonnais fondé en 2001 de production audiovisuelle, d'animation 2D/3D et de contenus interactifs et immersifs (3D temps réel, VR/AR, mapping, serious games)._
  * **Mots clés**: _animation 3D, rendu temps réel, événementiel/mapping, publicité_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.bigcompany.fr/news-jobs/)


* **[Black Cog](https://black-cog.com/)**  
  * _Studio d'effets visuels et de post-production (FX de destruction et fluides, compositing, assets 3D temps réel et précalculés)._
  * **Mots clés**: _effets visuels, long métrage, documentaire, publicité, simulation physique, assets temps réel_
  * **Localisation**: Beychac-et-Caillau
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Blackmeal](https://blackmeal.com/)**  
  * _Studio de motion design et d'animation 2D/3D fondé en 2011, avec des bureaux à Paris et Nantes, qui réalise films de marque, publicités et cinématiques._
  * **Mots clés**: _motion design, animation 3D, animation 2D, publicité_
  * **Remarque**: _Siège à Nantes, bureau 8 rue Jules Vallès, Paris 11e._
  * **Localisation**: Paris, Nantes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Jeu Vidéo


* **[Blippar](https://www.blipparstudios.com/)**  
  * _Développement d'outils pour la création de contenu en AR sur smartphone_
  * **Mots clés**: _réalité augmentée, agence créative, marketing, mobile, WebAR, éducation_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: VR/AR, Modélisation, Web/Cloud/Big Data
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Commerce/Marketing/Publicité


* **[Bloc D](https://bloc-d.com/)**  
  * _Studio d'animation 3D et d'effets visuels pour le cinéma, les séries, la publicité et les spectacles (dont temps réel)._
  * **Mots clés**: _animation 3D, effets visuels, publicité, événementiel/mapping, rendu temps réel, rigging, motion design_
  * **Localisation**: Villeurbanne, Villeurbanne
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel
  * [_Jobs_](https://bloc-d.com/jobs/)


* **[Blue Spirit](https://www.spirit-prod.com/)**  
  * _Producteur et studio d'animation intégré (Paris, Angoulême, Montréal, ~300 personnes) fabriquant séries et longs métrages, dont Blue Eye Samurai et Marvel What If…?_
  * **Mots clés**: _séries d'animation, long métrage, animation 2D, animation 3D_
  * **Localisation**: Paris, Angoulême, Canada/Montréal
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.spirit-prod.com/en/jobs/)


* **[Blue Twelve Studio](http://www.bluetwelvestudio.com/)**  
  * _Studio indépendant fondé par d'anciens d'Ubisoft Montpellier, créateur du jeu d'aventure Stray (Unreal Engine 4, édité par Annapurna Interactive)._
  * **Mots clés**: _jeu indépendant, console/PC, Unreal Engine, jeu d'aventure_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Bobbypills](https://www.bobbypills.com/)**  
  * _Studio d'animation français spécialisé dans l'animation pour adultes (Peepoodo, Vermin, Captain Laserhawk) et les adaptations de jeux vidéo (Dead Cells)._
  * **Mots clés**: _séries d'animation, animation pour adultes, animation 2D, adaptation de jeux vidéo, Captain Laserhawk_
  * **Localisation**: Paris, Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Bold Brush VFX](https://boldbrushvfx.com/)**  
  * _Studio d'effets visuels spécialisé en environnements numériques et matte painting pour films, séries et publicités._
  * **Mots clés**: _matte painting, concept art, développement visuel, environnements numériques, séries TV, long métrage, publicité_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Borderline Films](https://borderlinefilms.fr/)** (Schmuby Productions (Borderline Films)) 
  * _Société de production et studio de fabrication d'animation 2D et 3D, coproducteur et prestataire de films d'Autour de Minuit (Unicorn Wars, Jean-Michel Super Caribou, La Grande Rêvasion) et de Mars Express._
  * **Mots clés**: _animation 2D, animation 3D, long métrage, court métrage, coproduction_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[BrandXR](https://www.brandxr.io/)**  
  * _Agence et plateforme américaine de réalité augmentée (WebAR, filtres Instagram/Snapchat, fresques AR) pour le marketing, l'éducation et le commerce._
  * **Mots clés**: _réalité augmentée, agence créative, marketing, WebAR, filtres réseaux sociaux, e-commerce/configurateur 3D_
  * **Localisation**: États-Unis/{Orlando, Detroit}
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[Break First Games](https://www.breakfirst.games/)** (Break First) 
  * _Studio indépendant fondé en 2009 dans la métropole lyonnaise, spécialisé dans les jeux familiaux et multijoueurs coopératifs (Instant Sports, Sheep & Socks, King of Tokyo) sur consoles, PC et mobile._
  * **Mots clés**: _console/PC, jeu indépendant, jeu casual, multijoueur local_
  * **Remarque**: _Siège social au registre : Bron ; adresse du studio sur le site : Vaulx-en-Velin._
  * **Localisation**: Bron
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Vision
  * **Domaine d'application**: Jeu Vidéo


* **[BrightHeart](https://www.brightheart.ai/)**  
  * _Start-up parisienne d'IA d'aide au dépistage des cardiopathies fœtales et à l'examen morphologique en échographie prénatale._
  * **Mots clés**: _imagerie médicale, échographie, deep learning_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Broad Studios](https://www.broad-studios.fr/)**  
  * _Société de production audiovisuelle charentaise qui propose tournage (dont drone FPV), effets spéciaux, animation 3D et photogrammétrie pour l'événementiel, la publicité et le cinéma (making of de Voyage en Terre de Cognac)._
  * **Mots clés**: _VFX, animation 3D, photogrammétrie, drone, production vidéo_
  * **Localisation**: Nersac
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Reconstruction
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel


* **[Broadpeak](https://broadpeak.tv/)**  
  * _Éditeur et fabricant rennais de solutions de diffusion vidéo en streaming (CDN, packaging, publicité dynamique) pour opérateurs et diffuseurs._
  * **Mots clés**: _streaming, diffusion vidéo, CDN_
  * **Localisation**: Cesson-Sévigné
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Générique


* **[Brunch Studio](https://www.brunchstudio.tv/)**  
  * _Studio parisien d'animation 2D/3D spécialisé dans les cinématiques et trailers de jeux vidéo (Apex Legends, League of Legends), les clips et les courts métrages._
  * **Mots clés**: _cinématiques de jeu, animation 2D, animation 3D, clips, publicité, trailers_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[BUF](https://buf.com/)**  
  * _Studio d'effets visuels pionnier (Paris, Montréal) actif depuis près de 30 ans sur plus de 100 films et 900 publicités, avec ses propres outils logiciels._
  * **Mots clés**: _effets visuels, long métrage, séries TV, publicité, clips, pipeline maison_
  * **Localisation**: Paris
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://buf.com/jobs/)


* **[Bulwark Studios](http://www.bulwarkstudios.com/)**  
  * _Studio indépendant de jeux vidéo fondé en 2012, spécialisé dans la stratégie et la tactique, développeur de Warhammer 40,000 Mechanicus et de sa suite Mechanicus II._
  * **Mots clés**: _jeu vidéo, jeu de stratégie, tactique au tour par tour, PC, consoles_
  * **Localisation**: Gond-Pontouvre, Brie
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Bureau 81](https://store.steampowered.com/app/1771980/The_Operator/)**  
  * _Studio indépendant bordelais créé en 2024, développeur et éditeur du jeu d'enquête The Operator (2024)._
  * **Mots clés**: _jeu indépendant, console/PC, jeu narratif_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Canon Research Centre France](https://www.crf.canon.fr/)**  
  * _Centre de recherche européen de Canon à Cesson-Sévigné, spécialisé en traitement d'image et de vidéo, réseaux pour la vidéo haute qualité et IA, contributeur aux standards internationaux._
  * **Mots clés**: _compression vidéo, traitement d'images, vidéosurveillance, standardisation_
  * **Localisation**: Cesson-Sévigné
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Générique, Sécurité/Défense
  * [_Jobs_](https://www.crf.canon.fr/Internship_en.html)


* **[Caribara Animation](https://www.caribara-animation.com/)**  
  * _Studio d'animation indépendant (2D, 3D et hybride) basé à Paris avec des studios à Annecy, Angoulême, Montréal et Liège, prestataire de fabrication de séries et films._
  * **Mots clés**: _animation 2D, animation 3D, séries d'animation, fabrication_
  * **Remarque**: _Établissement annexe Caribara Annecy (SIREN 503980476)._
  * **Localisation**: Paris, Annecy, Angoulême
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Cavrnus](https://www.cavrnus.com/)**  
  * _Plateforme et SDK qui ajoutent multi-utilisateurs, synchronisation d'objets, voix/vidéo et persistance aux applications 3D Unreal Engine et Unity._
  * **Mots clés**: _multi-utilisateurs, collaboration temps réel, Unreal Engine, Unity, SDK, jumeau numérique_
  * **Localisation**: États-Unis/California/Carlsbad
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[Cevilog](https://www.cevilog.com/)**  
  * _Intégrateur et développeur de systèmes de vision industrielle par caméras pour le contrôle qualité (agroalimentaire, pharmacie, automobile)._
  * **Mots clés**: _vision par ordinateur, métrologie, contrôle qualité_
  * **Localisation**: Entzheim
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[CGEV](https://www.cgev.fr/)**  
  * _Studio d'effets visuels pour le cinéma et les séries (compositing, 3D, FX fluides et particules, matte painting)._
  * **Mots clés**: _effets visuels, compositing, matte painting, simulation de fluides, long métrage, séries TV, supervision de tournage_
  * **Localisation**: Paris, Angoulême
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.cgev.fr/jobs)


* **[CGWire](https://www.cg-wire.com/)**  
  * _Éditeur de Kitsu, logiciel open source de suivi de production pour studios d'animation, de VFX et de jeu vidéo._
  * **Mots clés**: _suivi de production, Kitsu, open source, gestion de pipeline, review, plugin/logiciel pour artistes_
  * **Localisation**: Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Pipeline/Outils de production, Web/Cloud/Big Data
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Chaos](https://www.chaos.com/)**  
  * _Éditeur de logiciels de rendu photoréaliste et temps réel (V-Ray, Corona, Enscape, Vantage) pour l'architecture, le design produit et les VFX._
  * **Mots clés**: _path tracing, rendu temps réel, plugin/logiciel pour artistes, architecture, ferme de rendu, V-Ray, Enscape, Corona_
  * **Produits**: V-Ray, Corona, Enscape
  * **Localisation**: International
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Architecture/BTP/Urbanisme
  * [_Jobs_](https://careers.chaos.com/)


* **[Christie](https://www.christiedigital.com/en-gb)**  
  * _Systèmes de projections vidéo et d'immersion (projecteur de cinéma, ecrans géants, projection immersive, etc)._
  * **Mots clés**: _projecteur, cinéma numérique, mur LED, événementiel/mapping, dôme, production virtuelle, salle de contrôle_
  * **Localisation**: États-Unis/California, Canada/Ontario
  * **Nombres d'employés**: 2000
  * **Domaine scientifique/technique**: VR/AR, Visualisation
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers


* **[Cintoo](https://cintoo.com/)**  
  * _Plateforme cloud de gestion et de diffusion de nuages de points de scans laser, convertis en maillages légers et comparés aux maquettes BIM (jumeau numérique)._
  * **Mots clés**: _nuage de points, scan laser, BIM, jumeau numérique, maillage, cloud/streaming, scan-to-BIM_
  * **Localisation**: Biot
  * **Domaine scientifique/technique**: Reconstruction, Géométrie, Web/Cloud/Big Data, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO
  * [_Jobs_](https://cintoo.factorial.fr/)


* **[Circle Dental](https://www.circle.dental/)**  
  * _Logiciel de conception dentaire au fauteuil (Circle One) : IA, jumeau numérique et simulation biomécanique._
  * **Mots clés**: _dentaire, CAO, prothèse dentaire, conception au fauteuil, jumeau numérique, deep learning_
  * **Produits**: Circle One
  * **Localisation**: Montpellier
  * **Domaine scientifique/technique**: Imagerie, Design/Fabrication, Simulation
  * **Domaine d'application**: Médical/Biologique


* **[Clipdrop](https://clipdrop.co/)**  
  * _Suite web d'outils d'image par IA (détourage, nettoyage, upscaling, relighting, génération texte-image), issue d'Init ML puis rachetée par Stability AI et Jasper._
  * **Mots clés**: _IA générative, retouche d'image, détourage, super-résolution, API, Jasper_
  * **Remarque**: _Clipdrop a été créé par la start-up parisienne Init ML, rachetée par Stability AI en 2023 ; Clipdrop a ensuite été racheté par Jasper en 2024, l'équipe restant à Paris._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision
  * **Domaine d'application**: Générique


* **[CLO Virtual Fashion](https://www.clo3d.com/en/)**  
  * _Éditeur coréen de CLO, logiciel de conception 3D de vêtements avec simulation physique de tissus et patrons utilisables en production._
  * **Mots clés**: _mode/textile, simulation de tissus, conception de vêtements 3D, jumeau numérique, plugin/logiciel pour artistes, CLO3D_
  * **Produits**: Marvelous Designer, Clo3D
  * **Localisation**: Corée du Sud, États-Unis, International
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Design/Fabrication
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Mode/Vêtements/Accessoires
  * [_Jobs_](https://jobs.lever.co/clovirtualfashion)


* **[Cognitive Design Systems](https://www.cognitive-design-systems.com/)**  
  * _Éditeur de logiciels de conception générative et d'optimisation topologique pour la fabrication additive._
  * **Mots clés**: _conception générative, optimisation topologique, fabrication additive, CAO, aéronautique, allègement structurel_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Design/Fabrication, Géométrie, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation


* **[Computational Surgery](https://computationalsurgery.eu/)**  
  * _Jeune société strasbourgeoise développant algorithmes et logiciels de vision par ordinateur, réalité augmentée et recalage pour la chirurgie robotique et endoscopique._
  * **Mots clés**: _vision par ordinateur, réalité augmentée, navigation chirurgicale, robotique, planification chirurgicale_
  * **Remarque**: _Très petite structure (effectif non déclaré) ; site principal peu renseigné._
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Vision, VR/AR, Imagerie
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


* **[CoreTechnologie](https://coretechnologie.com/)** (CT CoreTechnologie France) 
  * _Éditeur de logiciels de conversion et d'analyse CAO (3D_Evolution, 3D_Analyzer, SDK 3D_Kernel_IO) et de préparation pour l'impression 3D (4D_Additive), avec une filiale française près de Lyon._
  * **Mots clés**: _CAO, conversion de formats 3D, SDK, fabrication additive, maillage_
  * **Localisation**: Lyon, Saint-Genis-Laval
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication, Géométrie, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://coretechnologie.com/ct-core-technologie-company-profile/career/)


* **[Cousin Bizarre](https://www.cousinbizarre.com/)**  
  * _Studio d'effets visuels : 3D/CGI, FX (simulations de fluides, particules, cheveux, destruction), compositing et matte painting._
  * **Mots clés**: _effets visuels, compositing, matte painting, simulation de fluides, long métrage, séries TV, look development_
  * **Localisation**: Les Lilas
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Creative Touch Studios](https://www.specialtouchstudios.com/)**  
  * _Studio d'animation implanté à Valenciennes, adossé à la société de production Special Touch Studios de Sébastien Onomo, impliqué dans la fabrication de longs métrages d'animation comme Allah n'est pas obligé (Zaven Najjar)._
  * **Mots clés**: _animation, long métrage, Valenciennes_
  * **Localisation**: Valenciennes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Creative VR3D](https://www.studio-creativevr3d.com/)**  
  * _Studio familial de création numérique basé à Cannes qui développe des jeux et expériences en réalité virtuelle (PlayStation VR2, SteamVR, Meta Quest), des applications immersives B2B et des contenus 3D._
  * **Mots clés**: _réalité virtuelle, jeu indépendant, console/PC, serious game, événementiel/mapping_
  * **Localisation**: Cannes
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers, Entrainement/Formation/Serious Game


* **[Culturespaces Studio](https://www.culturespaces-studio.com/)**  
  * _Studio de production de Culturespaces qui conçoit, produit et diffuse les expositions numériques immersives grand format (Atelier des Lumières, Bassins des Lumières...) et leurs dispositifs de projection._
  * **Mots clés**: _exposition immersive, événementiel/mapping, motion design, scénographie numérique_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Visualisation, Animation, Rendu offline/VFX
  * **Domaine d'application**: Art/Evenementiel, Patrimoine/Culture


* **[Cyanide Studio](https://cyanide-studio.com/fr/)**  
  * _Studio de développement et d'édition de Nanterre (groupe Nacon), connu pour Pro Cycling Manager, Tour de France, Blood Bowl, Styx et Chef Life._
  * **Mots clés**: _console/PC, jeu de simulation sportive, édition de jeux, Pro Cycling Manager, Blood Bowl, Styx_
  * **Remarque**: _Filiale du groupe Nacon. Studio Big Bad Wolf (The Council, Vampire The Masquerade - Swansong) à Bordeaux._
  * **Localisation**: Nanterre, Bordeaux
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://cyanide-studio.com/fr/nous-rejoindre/)


* **[Cyclife Digital Solutions](https://www.cyclife-edf.com/en/our-governance/cyclife-digital-solutions)**  
  * _Filiale du groupe EDF (Cyclife) qui édite DEMplus, logiciel de simulation 3D temps réel collaboratif pour préparer les interventions et le démantèlement nucléaires (jumeaux numériques, planification 4D)._
  * **Mots clés**: _nucléaire, jumeau numérique, simulation physique, rendu temps réel, réalité virtuelle, formation professionnelle_
  * **Localisation**: Bagnols-sur-Cèze, Lyon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Simulation, Visualisation, VR/AR
  * **Domaine d'application**: Énergie/Environnement, Industrie/Manufacturing/CAO


* **[D-ICE Engineering](https://www.dice-engineering.com/)**  
  * _Société nantaise d'ingénierie et d'édition logicielle pour la navigation et la performance des navires : simulation hydrodynamique, jumeaux numériques, routage météo (OCEANiCS, TACTiCS) et simulation d'opérations offshore (BOLTS)._
  * **Mots clés**: _hydrodynamique, jumeau numérique, routage météo, naval_
  * **Localisation**: Nantes
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Simulation, Analyse de données
  * **Domaine d'application**: Automobile/Navigation/Aviation, Énergie/Environnement
  * [_Jobs_](https://www.dice-engineering.com/carriere)


* **[D-Tech 3D](https://www.dtech-3d.fr/)**  
  * _Prestataire de relevés par scanner laser 3D et photogrammétrie par drone, produisant nuages de points, maquettes BIM et rendus réalistes._
  * **Mots clés**: _scanner 3D, photogrammétrie, nuage de points, lidar_
  * **Localisation**: Molsheim
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Patrimoine/Culture


* **[Dada! Animation](https://www.dada-animation.com/)**  
  * _Studio d'animation: Storytelling et conception créative, animation 3D, immersion et interactivité._
  * **Mots clés**: _animation 3D, séries d'animation, documentaire animé, jeu VR, œuvres originales_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Damae Medical](https://www.damae-medical.com/)**  
  * _Medtech parisienne qui développe deepLive, imageur dermatologique LC-OCT produisant des images 3D de la peau à résolution cellulaire._
  * **Mots clés**: _imagerie médicale, tomographie optique, imagerie 3D_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique


* **[Damnatio Games](https://damnatiogames.com/)**  
  * _Studio de jeux vidéo fondé à Bordeaux en 2021, auteur du jeu multijoueur en ligne Heat and Run (Steam, 2022) et de Teamcrafter, qui collabore aussi avec d'autres studios en game design et UX._
  * **Mots clés**: _jeu indépendant, multijoueur en ligne, console/PC_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Dassault Systèmes](https://www.3ds.com/fr/)**  
  * _Éditeur français de logiciels de conception, simulation et gestion du cycle de vie produit (CATIA, SOLIDWORKS, SIMULIA, 3DEXPERIENCE) pour l'industrie et la santé._
  * **Mots clés**: _CAO, PLM, simulation physique, éléments finis, jumeau numérique, CATIA, SOLIDWORKS, aéronautique_
  * **Produits**: Catia, SolidWorks
  * **Localisation**: France/Paris, France/Aix-en-Provence, Vélizy-Villacoublay, Colomiers, Plouzané, Lyon, Cesson-Sévigné, Bouguenais, Limonest, Saint-Romain-de-Colbosc, Meylan, Colomiers, Nancy, Villeneuve-d'Ascq, États-Unis, Chine, International
  * **Nombres d'employés**: 20000
  * **Domaine scientifique/technique**: Modélisation, Simulation, Géométrie, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO, Médical/Biologique
  * [_Jobs_](https://careers.3ds.com/)


* **[Datakit](https://www.datakit.com/)**  
  * _Éditeur de convertisseurs et bibliothèques d'échange de données CAO 3D (B-Rep et maillages) entre formats natifs et standards._
  * **Mots clés**: _CAO, échange de données, conversion de formats, B-Rep, SDK, maillage_
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Géométrie, Design/Fabrication, Modélisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Générique


* **[Deepnight Games](https://deepnight.net/)**  
  * _Studio bordelais de Sébastien Bénard (directeur de Dead Cells) qui développe des jeux indépendants (Nuclear Blaze) et l'éditeur de niveaux 2D open source LDtk._
  * **Mots clés**: _jeu indépendant, console/PC, plugin/logiciel pour artistes, level design_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Pipeline/Outils de production, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Delair](https://delair.aero/)**  
  * _Constructeur toulousain de drones professionnels à voilure fixe et VTOL et de charges utiles EO/IR, utilisés notamment pour la cartographie, le relevé géospatial et la modélisation de jumeaux numériques, ainsi que pour la défense._
  * **Mots clés**: _drones, cartographie aérienne, capteurs EO/IR, jumeau numérique_
  * **Localisation**: Labège
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Hardware
  * **Domaine d'application**: Géospatial/Cartographie, Sécurité/Défense, Robotique/Systèmes autonomes
  * [_Jobs_](https://delair.teamtailor.com/jobs)


* **[DentalMonitoring](https://dentalmonitoring.com/)**  
  * _Éditeur parisien de solutions d'IA qui analysent les photos intra-orales prises par les patients pour le suivi orthodontique à distance._
  * **Mots clés**: _vision par ordinateur, imagerie médicale, orthodontie, deep learning_
  * **Localisation**: Paris
  * **Nombres d'employés**: 225
  * **Domaine scientifique/technique**: Vision, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[DESKi](https://www.heartfocus.ai/)**  
  * _Healthtech bordelaise qui édite HeartFocus, logiciel d'échographie cardiaque assisté par IA (guidage 3D de la sonde en temps réel, superpositions visuelles, score de qualité d'image), autorisé par la FDA._
  * **Mots clés**: _imagerie médicale, échographie, deep learning, guidage, réalité augmentée_
  * **Remarque**: _HeartFocus est une marque de DESKi (le domaine deski.ai redirige vers heartfocus.ai)._
  * **Produits**: HeartFocus, HeartFocus Link
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Vision, VR/AR
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.heartfocus.ai/careers)


* **[Diagnoly](https://www.diagnoly.com/)**  
  * _Medtech lyonnaise qui développe Fetoly, assistant d'IA embarqué temps réel pour l'échographie prénatale (sélection d'images, mesures, contrôle de complétude), intégré aux échographes GE HealthCare._
  * **Mots clés**: _imagerie médicale, échographie, deep learning, diagnostic, dispositif médical_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.diagnoly.com/careers/)


* **[Digital District](https://www.digital-district.fr)**  
  * _Studio d'effets visuels et de post-production pour le cinéma, les séries et la publicité._
  * **Mots clés**: _effets visuels, post-production, étalonnage, publicité, long métrage, matte painting, simulation de fluides_
  * **Localisation**: Paris, Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[DigitalFish](https://www.digitalfish.com/)**  
  * _Société californienne de R&D et logiciels graphiques : outils d'animation Reflex (3D) et Lune (2D), développements sur mesure pour Pixar, DreamWorks, Google, NASA._
  * **Mots clés**: _plugin/logiciel pour artistes, animation 3D, animation 2D, réalité virtuelle, jumeau numérique, R&D sur mesure_
  * **Produits**: [Reflex](https://www.digitalfish.com/reflex/), [Lune](https://www.digitalfish.com/lune/)
  * **Localisation**: États-Unis/California/San Mateo
  * **Domaine scientifique/technique**: Animation, VR/AR, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.digitalfish.com/careers/)


* **[Digiteyes](https://www.digiteyes.fr/)**  
  * _Studio CGI et VFX du Grand Paris (Saint-Ouen) qui réalise packshots 3D, films produits et visuels CGI/IA pour le luxe, la beauté et l'automobile._
  * **Mots clés**: _CGI, publicité, effets visuels, packshot 3D, IA générative_
  * **Remarque**: _Siège déclaré Paris 17e, studio à Saint-Ouen._
  * **Localisation**: Saint-Ouen
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité


* **[Digixart](https://www.digixart.com/)**  
  * _Studio montpelliérain de jeux narratifs au style graphique marqué (11-11 Memories Retold, Road 96, Tides of Tomorrow), filiale de THQ Nordic._
  * **Mots clés**: _jeu indépendant, console/PC, jeu narratif, rendu stylisé_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Disney](https://www.disneystudios.com/)**  
  * _Branche cinéma de The Walt Disney Company regroupant Walt Disney Animation Studios, Pixar, Lucasfilm (avec ILM), Marvel Studios et 20th Century Studios._
  * **Mots clés**: _long métrage, animation 3D, effets visuels, Pixar, Lucasfilm, Marvel Studios_
  * **Remarque**: _<a href="https://studios.disneyresearch.com/">Disney Research</a> implanté à Zurich est l'un des plus gros centre de R&amp;D en graphique._
  * **Localisation**: États-Unis, International
  * **Nombres d'employés**: 220000
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Simulation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Robotique/Systèmes autonomes
  * [_Jobs_](https://join.disneycareers.com/global/en)


* **[Distant Shore](https://store.steampowered.com/app/3892370/)**  
  * _Studio indépendant qui développe et édite Distant Shore BRETAGNE, un jeu de plateforme sandbox de science-fiction à la première personne (démo sur Steam)._
  * **Mots clés**: _jeu vidéo, jeu 3D, plateforme, première personne_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[DON'T NOD](https://dont-nod.com/en/)**  
  * _Développeur et éditeur indépendant de jeux narratifs (Paris, Montréal), créateur de Life is Strange, Jusant, Lost Records et Aphelion._
  * **Mots clés**: _jeu narratif, console/PC, Unreal Engine, édition de jeux, jeu indépendant, Life is Strange_
  * **Localisation**: Paris, Canada/Montréal
  * **Nombres d'employés**: 250
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://dont-nod.com/en/careers/)


* **[Donecle](https://www.donecle.com/)**  
  * _Start-up toulousaine qui conçoit des drones autonomes d'inspection d'aéronefs (gamme Iris) couplés à des algorithmes d'analyse d'images pour détecter les défauts de surface ; clients dont Dassault Falcon Services et Japan Airlines._
  * **Mots clés**: _inspection par drone, analyse d'images, aéronautique, détection de défauts_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, Acquisition, Imagerie
  * **Domaine d'application**: Automobile/Navigation/Aviation, Robotique/Systèmes autonomes, Industrie/Manufacturing/CAO
  * [_Jobs_](https://donecle.taleez.com/)


* **[Double Jack](https://maestro-game.com/)**  
  * _Studio francilien de vétérans du AAA, créateur de Maestro, jeu VR de direction d'orchestre jouable au suivi des mains (Meta Quest, SteamVR), primé jeu de l'année 2024 du Meta Horizon Store._
  * **Mots clés**: _réalité virtuelle, suivi des mains, jeu musical, Meta Quest_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, IHM/Haptique
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Dowino](https://www.dowino.com/)**  
  * _Studio lyonnais de serious games et d'outils pédagogiques (jeux mobiles et web, VR et réalité mixte, films d'animation) sur la santé, le handicap et la RSE._
  * **Mots clés**: _serious game, e-santé, réalité virtuelle, éducation_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Médical/Biologique


* **[Doxa Vision](https://www.doxa-vision.com/)**  
  * _Entreprise de mapping vidéo créée en 2020 (Floirac, près de Bordeaux, et Lyon) qui conçoit des projections mapping sur bâtiments, objets et décors pour l'événementiel, le sport, les vignobles ou la restauration._
  * **Mots clés**: _événementiel/mapping, motion design_
  * **Localisation**: Floirac
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Art/Evenementiel


* **[Drama Studios](https://studiosdrama.com/)**  
  * _Studio de jeu vidéo indépendant rennais qui développe Unrecord, FPS tactique narratif en monde ouvert au rendu photoréaliste sous Unreal Engine 5._
  * **Mots clés**: _console/PC, Unreal Engine, rendu temps réel, FPS_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://studiosdrama.com/career/)


* **[Draw Me A Pixel](https://drawmeapixel.com/)**  
  * _Studio indépendant de jeux vidéo fondé en 2017 par des vétérans de l'industrie, auteur de There Is No Game: Wrong Dimension et Crushed In Time._
  * **Mots clés**: _jeu indépendant, console/PC, jeu narratif, point-and-click_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[DreamWall](https://www.dreamwall.be/en)**  
  * _Studio belge d'animation (séries, longs métrages, rides) et de solutions temps réel pour la télévision et le sport : AR en direct, publicité virtuelle, mapping vidéo._
  * **Mots clés**: _séries d'animation, long métrage, animation 3D, réalité augmentée en direct, publicité virtuelle, événementiel/mapping, diffusion sportive_
  * **Localisation**: Belgique/Charleroi
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dreamwall.be/en/jobs)


* **[Dronisos](https://www.dronisos.com/)**  
  * _Leader français des spectacles lumineux de drones pour parcs à thème (fournisseur officiel de Disneyland Paris) et grands événements._
  * **Mots clés**: _spectacle de drones, drone, événementiel/mapping, parc d'attractions, essaims de drones_
  * **Localisation**: France/Bordeaux, États-Unis/Orlando
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, VR/AR
  * **Domaine d'application**: Art/Evenementiel
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/dronisos)


* **[DUSK](https://www.duskvfx.fr/)**  
  * _Studio généraliste d'effets visuels (ex-IIW Studio) : CG, FX, compositing, environnements, avec laboratoire image intégré._
  * **Mots clés**: _effets visuels, compositing, matte painting, long métrage, séries TV, publicité, laboratoire image_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Dwarf Animation](https://www.dwarfanimation.com)** (Dwarf Animation Studio) 
  * _Studio d'animation 3D montpelliérain produisant et coproduisant des séries et longs métrages haut de gamme pour le marché international, avec un fort volet technologique._
  * **Mots clés**: _animation 3D, séries d'animation, long métrage, cinématiques de jeu, pipeline maison_
  * **Localisation**: Montpellier
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[DWorld VR](https://dworldvr.com/)**  
  * _Start-up monégasque fondée en 2021 qui modélise en 3D des villes réelles (Monaco, La Valette) pour en faire des métavers explorables sur PC et en réalité virtuelle._
  * **Mots clés**: _réalité virtuelle, métavers, modélisation 3D de villes, jumeau numérique_
  * **Localisation**: Monaco
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Patrimoine/Culture


* **[DxO](https://www.dxo.com/)**  
  * _Éditeur de logiciels de traitement d'images photographiques (DxO PhotoLab, PureRAW, FilmPack, Nik Collection) : dématriçage RAW, débruitage par IA et corrections optiques._
  * **Mots clés**: _traitement d'images, photographie, RAW, deep learning, débruitage_
  * **Localisation**: Boulogne-Billancourt
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Art/Evenementiel, Générique


* **[DXOMARK](https://www.dxomark.com/)**  
  * _Laboratoire d'évaluation de la qualité d'image et de son des smartphones et caméras, qui développe ses protocoles, bancs de mesure et outils logiciels d'analyse d'image._
  * **Mots clés**: _qualité d'image, caméra, mesure, traitement d'images_
  * **Localisation**: Boulogne-Billancourt
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Analyse de données
  * **Domaine d'application**: Générique


* **[Easy Mile](https://easymile.com/)**  
  * _Véhicules autonomes industriels (logistique, aéroports, sites industriels) : perception et logiciels de conduite autonome._
  * **Mots clés**: _véhicule autonome, robotique, perception, lidar, logistique, aéroports_
  * **Localisation**: Toulouse, Allemagne/Berlin
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Analyse de données
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/easymile/jobs)


* **[eCential Robotics](https://www.ecential-robotics.com/)**  
  * _Fabricant d'une plateforme intégrant imagerie 3D peropératoire, navigation et robotique pour la chirurgie du rachis et orthopédique._
  * **Mots clés**: _chirurgie assistée, robotique, imagerie peropératoire, navigation chirurgicale, rachis, orthopédie_
  * **Localisation**: Gières, Saint-Martin-d'Hères
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Visualisation
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


* **[EDAP TMS](https://focalone.com/)** (EDAP-TMS France) 
  * _Fabricant de Vaulx-en-Velin de dispositifs à ultrasons focalisés (HIFU) robotisés, dont Focal One qui fusionne en 3D IRM, biopsies et échographie temps réel pour traiter le cancer de la prostate._
  * **Mots clés**: _imagerie médicale, échographie, fusion d'images, chirurgie assistée, dispositif médical_
  * **Localisation**: Vaulx-en-Velin
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Hardware
  * **Domaine d'application**: Médical/Biologique


* **[Eden Games](https://www.edengames.com/)**  
  * _Studio lyonnais spécialisé depuis 25 ans dans les jeux de course (V-Rally, Test Drive Unlimited, Gear.Club, Smurfs Kart), sur consoles et mobile, filiale d'Animoca Brands._
  * **Mots clés**: _jeu de course, console/PC, mobile, Gear.Club, Animoca Brands_
  * **Remarque**: _Filiale d'Animoca Brands._
  * **Localisation**: France/Lyon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.edengames.com/career/)


* **[Effigy 3D](https://effigy-3d.com/)**  
  * _Studio de création 3D et d'humains numériques : avatars IA conversationnels, vidéo volumétrique (4DGS), scan 3D, Mocap, production virtuelle._
  * **Mots clés**: _doublure numérique, avatar IA, vidéo volumétrique, Gaussian splatting, scanner 3D, motion capture, production virtuelle_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Acquisition, Reconstruction, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[EikoSim](https://eikosim.com/)**  
  * _Éditeur de logiciels de corrélation d'images numériques (stéréo-DIC) couplée à la simulation éléments finis pour la validation d'essais._
  * **Mots clés**: _corrélation d'images, éléments finis, stéréovision, essais mécaniques, aéronautique, jumeau numérique_
  * **Localisation**: Montrouge
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Vision, Simulation, Reconstruction
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation


* **[Eisko](https://www.eisko.com/)**  
  * _Société parisienne spécialisée dans la numérisation 3D et la production de doublures numériques (digital doubles) photoréalistes et d'humains numériques._
  * **Mots clés**: _scanner 3D, photogrammétrie, humain numérique, digital double, effets visuels_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://eisko.com/careers/)


* **[Ekinnox](https://www.ekinnox.com/)**  
  * _Start-up de Valbonne (Sophia Antipolis) issue de l'Inria (2017) qui analyse la marche et le mouvement des patients à partir d'une simple vidéo grâce à des algorithmes de vision par ordinateur, pour la rééducation._
  * **Mots clés**: _vision par ordinateur, analyse du mouvement, capture de mouvement sans marqueur, santé_
  * **Localisation**: Valbonne
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Vision, Animation, Acquisition
  * **Domaine d'application**: Médical/Biologique


* **[Eko Software](http://www.ekosystem.com/)**  
  * _Studio de développement de jeux vidéo (How to Survive, Warhammer: Chaosbane, Rugby)._
  * **Mots clés**: _console/PC, jeu de sport, action-RPG, moteur maison, adaptation de licences_
  * **Remarque**: _Filiale du groupe Nacon._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Elcia](https://www.elcia.com/)**  
  * _Éditeur de Brignais de logiciels pour la menuiserie et la fermeture, dont des configurateurs 3D en ligne (MyConfigurator) pour chiffrer et visualiser les produits._
  * **Mots clés**: _e-commerce/configurateur 3D, web 3D, menuiserie, architecture_
  * **Localisation**: Brignais
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Visualisation, Web/Cloud/Big Data
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.elcia.com/nos-offres-demploi/)


* **[Ellipse Animation](https://www.ellipseanimation.com/)** (Ellipse Studio Angoulême (Dargaud Media / Média-Participations)) 
  * _Studio de fabrication de séries et longs métrages d'animation 2D et 3D du groupe Média-Participations (La Famille Blaireau-Renard, Belfort & Lupin, Yakari) ; l'antenne d'Angoulême développe aussi le webtoon (Angoulême Webtoon Academy)._
  * **Mots clés**: _animation 2D, animation 3D, séries TV, long métrage, webtoon_
  * **Localisation**: Angoulême, Paris
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.ellipseanimation.com/careers/)


* **[Embers](https://embers.games/)**  
  * _Studio de jeu vidéo indépendant strasbourgeois, développeur et éditeur de Strayed Lights, Storebound et Murky Divers._
  * **Mots clés**: _console/PC, jeu indépendant, game art, animation 3D_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://embers.games/)


* **[Emersya](https://www.emersya.com/)**  
  * _Plateforme 3D et AR pour le e-commerce : configurateurs et visualiseurs 3D interactifs, AR web, rendu automatisé de produits._
  * **Mots clés**: _e-commerce/configurateur 3D, web 3D, réalité augmentée, visualiseur 3D, rendu produit, mode/textile_
  * **Localisation**: France/Montpellier
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Design/Fabrication
  * **Domaine d'application**: Commerce/Marketing/Publicité, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.emersya.com/join-us/)


* **[Emissive](https://www.emissive.fr/)**  
  * _Studio de création d'expériences en réalité virtuelle et augmentée fondé en 2005 (expéditions immersives Excurio, Éternelle Notre-Dame), environ 25 personnes à Paris._
  * **Mots clés**: _réalité virtuelle, location-based VR, patrimoine, expérience immersive, Unreal Engine_
  * **Localisation**: Paris, Montreuil
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Reconstruction
  * **Domaine d'application**: Patrimoine/Culture, Loisir Interactif/Immersion/Metavers


* **[Emova](https://emova.me/)**  
  * _Start-up de Cesson-Sévigné qui propose essayage virtuel, packshots 3D photoréalistes, visualisation 3D interactive et mannequins générés par IA pour l'e-commerce._
  * **Mots clés**: _essayage virtuel, web 3D, IA générative, réalité augmentée_
  * **Localisation**: Cesson-Sévigné
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Rendu offline/VFX, IA générative (image/3D)
  * **Domaine d'application**: Mode/Vêtements/Accessoires, Commerce/Marketing/Publicité


* **[Enchanted Tools](https://enchanted.tools/)**  
  * _Concepteur du robot humanoïde Mirokaï, combinant perception, IA et animation expressive de personnages._
  * **Mots clés**: _robotique, robot humanoïde, robot social, animation de personnages, deep learning, santé_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Vision, Animation, IHM/Haptique
  * **Domaine d'application**: Robotique/Systèmes autonomes, Médical/Biologique


* **[Endroad](https://www.the-endroad.com/)**  
  * _Studio indépendant de jeu vidéo fondé à Nantes en 2017, développeur de Fallback, Fallback 2, UFO Robot Grendizer et Court of the Dead sur PC et consoles._
  * **Mots clés**: _jeu vidéo, PC et consoles, jeu d'action, 3D temps réel_
  * **Localisation**: Nantes
  * **Nombres d'employés**: 10
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[EODE](https://eode.studio/)**  
  * _Studio transmédia de Couëron fondé en 2015 qui développe ses univers (Grinn's Universe) en jeux vidéo, animation, livres et jeux de rôle, et propose des solutions créatives interactives aux entreprises (marque WEKER)._
  * **Mots clés**: _transmédia, jeu vidéo, animation, univers_
  * **Localisation**: Couëron
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Epic Games](https://www.epicgames.com/site/en-US/home)**  
  * _Éditeur américain du moteur Unreal Engine et du jeu Fortnite, également propriétaire de l'Epic Games Store, de Quixel, RealityCapture et MetaHuman._
  * **Mots clés**: _Unreal Engine, AAA, free-to-play, multijoueur en ligne, Fortnite, MetaHuman, boutique de jeux_
  * **Produits**: [Unreal Engine](https://www.unrealengine.com/)
  * **Localisation**: États-Unis, International
  * **Nombres d'employés**: 2000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.epicgames.com/site/en-US/careers/jobs)


* **[Ernestine](https://ernestine-games.fr/)**  
  * _Studio de jeu vidéo indépendant strasbourgeois fondé en 2009 (Castelet, Apocalypsheim), issu du serious game, qui propose aussi des prestations artistiques et d'animation temps réel._
  * **Mots clés**: _jeu indépendant, console/PC, serious game, game art_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo, Entrainement/Formation/Serious Game


* **[ESI](https://www.keysight.com/us/en/products/design-engineering-software/computer-aided-engineering-software.html)**  
  * _Entreprise Francaise de simulation, prototypage virtuel, et Double numérique pour l'industrie_
  * **Mots clés**: _simulation physique, éléments finis, prototypage virtuel, jumeau numérique, automobile, simulation de procédés, Keysight_
  * **Remarque**: _Racheté par Keysight Technologies (finalisé en janvier 2024) ; l'entité française est devenue Keysight Technologies France. Le site esi-group.com redirige vers Keysight._
  * **Localisation**: Bagneux, Lyon, Mérignac, International
  * **Nombres d'employés**: 1000
  * **Domaine scientifique/technique**: Modélisation, Simulation
  * **Domaine d'application**: Automobile/Navigation/Aviation, Sécurité/Défense, Industrie/Manufacturing/CAO
  * [_Jobs_](https://jobs.keysight.com/)


* **[Eugen Systems](https://eugensystems.com)**  
  * _Studio de développement de jeux de stratégie temps réel (Steel Division, WARNO), moteur maison IRISZOOM._
  * **Mots clés**: _console/PC, jeu de stratégie, moteur maison, multijoueur en ligne, simulation militaire_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[EVA](https://www.eva.gg/en-FR)** (Esports Virtual Arenas) 
  * _Réseau de plus de 55 arènes de réalité virtuelle en free roaming (500 m², jusqu'à 10 joueurs) proposant des jeux VR exclusifs et des compétitions d'eSport._
  * **Mots clés**: _jeu VR, réalité virtuelle, free roaming, eSport, arènes VR, multijoueur en ligne_
  * **Localisation**: Montreuil
  * **Domaine scientifique/technique**: Modélisation, VR/AR, Analyse de données
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.eva.gg/fr/careers/jobs/list)


* **[Evaveo](https://evaveo.com/)**  
  * _Studio d'innovation numérique de la métropole lyonnaise développant des applications 3D temps réel, VR/AR, jumeaux numériques de formation et maquettes en réalité mixte (Plateau 3D)._
  * **Mots clés**: _rendu temps réel, réalité mixte, jumeau numérique, formation professionnelle_
  * **Localisation**: Saint-Didier-au-Mont-d'Or
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Patrimoine/Culture, Industrie/Manufacturing/CAO


* **[Evil Empire](https://evilempire.com/)**  
  * _Studio de développement de jeux vidéo (Dead Cells, The Rogue Prince of Persia)._
  * **Mots clés**: _jeu indépendant, console/PC, roguelite, jeu 2D, co-développement, jeu d'action_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 65
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Ex Persona](https://ex-persona.com/)**  
  * _Studio de motion capture et d'animation équipé d'un système optique Vicon (40 caméras, volume 13 x 9 x 4 m)._
  * **Mots clés**: _motion capture, Vicon, animation 3D, cinématiques de jeu, effets visuels, location de studio_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Acquisition, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://ex-persona.com/the-studio/jobs/)


* **[Exalt3D](https://www.exalt3d.com/)**  
  * _Éditeur aubagnais de configurateurs 3D temps réel pour le web (horlogerie, joaillerie, luxe, mobilier, mode) et de visites virtuelles._
  * **Mots clés**: _configurateur 3D, web 3D, rendu temps réel, visite virtuelle_
  * **Localisation**: Aubagne
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires


* **[Exkee](https://www.exkee.com/)**  
  * _Studio marseillais de jeux vidéo, à la fois prestataire (portage console/PC de The 7th Guest VR) et producteur de jeux indépendants et de serious games._
  * **Mots clés**: _jeu indépendant, console/PC, mobile, portage, serious game, jeu VR_
  * **Localisation**: Marseille
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Extende](https://www.extende.com/)**  
  * _Start-up du CEA List qui distribue et développe le logiciel CIVA de simulation des contrôles non destructifs (ultrasons, courants de Foucault, radiographie)._
  * **Mots clés**: _simulation physique, contrôle non destructif, CAO_
  * **Localisation**: Massy
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Simulation, Imagerie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Énergie/Environnement


* **[Exwayz](https://www.exwayz.com/)**  
  * _Logiciel de localisation et cartographie 3D (SLAM lidar) temps réel pour la robotique autonome et la cartographie mobile._
  * **Mots clés**: _lidar, SLAM, localisation, cartographie, robotique, véhicule autonome, nuage de points_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


* **[EyeLights](https://eye-lights.com/)**  
  * _Start-up de Labège qui conçoit des affichages tête haute en réalité augmentée pour casques de moto (EyeRide, visière GT-AIR 3 Smart avec SHOEI) et des lunettes HUD pour l'aviation générale._
  * **Mots clés**: _réalité augmentée, affichage tête haute, moto, HUD_
  * **Localisation**: Labège
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Hardware, IHM/Haptique
  * **Domaine d'application**: Automobile/Navigation/Aviation, Loisir Interactif/Immersion/Metavers


* **[Fairvision](https://www.fairvision.fr/)**  
  * _PME niçoise de vision par ordinateur qui conçoit des systèmes de captation vidéo autonomes et des caméras à IA pour le sport (suivi des joueurs, plan tactique en direct) et des solutions de vision sur mesure._
  * **Mots clés**: _vision par ordinateur, deep learning, analyse vidéo, sport_
  * **Localisation**: Nice
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique


* **[Falcon's Creative Group](https://falconscreativegroup.com/)**  
  * _Agence américaine de conception d'expériences pour parcs à thème, parcs aquatiques et resorts : planification, design d'attractions, production média immersive et jumeaux numériques._
  * **Mots clés**: _parc d'attractions, conception d'attractions, exposition immersive, production média, jumeau numérique_
  * **Remarque**: _Division de Falcon's Beyond Global (Nasdaq : FBYD)._
  * **Localisation**: États-Unis/Orlando
  * **Domaine scientifique/technique**: VR/AR, Animation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel
  * [_Jobs_](https://falconscreativegroup.com/careers/)


* **[Farsight VR](https://www.farsight-vr.com/)**  
  * _Studio rennais de formations en réalité virtuelle et 3D temps réel (WebGL/WebXR, casques Quest/Pico) pour l'industrie, l'énergie et la défense._
  * **Mots clés**: _réalité virtuelle, serious game, WebXR, formation professionnelle_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game


* **[First Light Imaging](https://andor.oxinst.com/products/first-light-imaging-cameras)**  
  * _Concepteur et fabricant de caméras scientifiques ultra-rapides et bas bruit (infrarouge SWIR, EMCCD) pour l'astronomie, l'optique adaptative et les sciences de la vie, basé à Meyreuil et filiale du groupe Oxford Instruments (Andor)._
  * **Mots clés**: _caméra, infrarouge, astronomie, imagerie scientifique_
  * **Localisation**: Meyreuil
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Hardware, Imagerie
  * **Domaine d'application**: Médical/Biologique, Autres


* **[Fluidyn](https://www.fluidyn.com/)**  
  * _Éditeur de logiciels de mécanique des fluides numérique (CFD) et multiphysique pour l'environnement, la dispersion atmosphérique et les risques industriels._
  * **Mots clés**: _CFD, simulation physique, dispersion atmosphérique_
  * **Localisation**: Saint-Denis
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Simulation, Visualisation
  * **Domaine d'application**: Énergie/Environnement, Industrie/Manufacturing/CAO


* **[Focus Entertainment](https://www.focus-entmt.com/fr)**  
  * _Éditeur français de jeux vidéo console/PC (A Plague Tale, Warhammer 40,000: Space Marine 2) travaillant avec des studios internes et partenaires._
  * **Mots clés**: _édition de jeux, AA, console/PC, Space Marine 2, A Plague Tale_
  * **Remarque**: _Branche édition (Focus Entertainment Publishing) du groupe <a href="https://pullupent.com/">PULLUP Entertainment</a>, nouveau nom de Focus Entertainment depuis avril 2024. Studios du groupe en France : Dotemu (Paris), Leikir Studio (Ivry-sur-Seine), Douze Dixièmes (Aubervilliers) et Streum On Studio (Nogent-sur-Marne)._
  * **Localisation**: Paris, Ivry-sur-Seine, Aubervilliers, Nogent-sur-Marne
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://focusentertainment.recruitee.com/)


* **[Folimage](https://www.folimage.fr/)**  
  * _Studio d'animation historique (2D traditionnelle, 2D numérique et stop motion) installé à La Cartoucherie._
  * **Mots clés**: _animation 2D, stop motion, long métrage, séries d'animation, court métrage, film d'auteur, résidence d'artistes_
  * **Localisation**: Valence, Valence
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Fortiche Production](https://forticheprod.com)**  
  * _Studio d'animation parisien au rendu stylisé mêlant 2D et 3D, réalisateur de la série Arcane (Riot Games, Netflix), de cinématiques de jeux et de clips._
  * **Mots clés**: _séries d'animation, animation 3D, rendu stylisé, cinématiques de jeu, clips, Arcane_
  * **Localisation**: Paris, Montpellier
  * **Nombres d'employés**: 50-99 (plus intermittents)
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Fost](https://fost.studio/)**  
  * _Studio d'animation 2D et de pré-production pour l'image de synthèse, pour longs métrages, séries et web._
  * **Mots clés**: _animation 2D, séries d'animation, long métrage, storyboard, layout, compositing_
  * **Localisation**: Paris, Angoulême
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[French Touch Factory](https://www.frenchtouchfactory.com/)**  
  * _Studio parisien de création XR (VR, AR, 3D, photogrammétrie) qui développe ITHACA, solution de capture vidéo volumétrique et 4D Gaussian splatting._
  * **Mots clés**: _vidéo volumétrique, Gaussian splatting, photogrammétrie, réalité virtuelle, réalité augmentée_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, VR/AR, Modélisation
  * **Domaine d'application**: Patrimoine/Culture, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.frenchtouchfactory.com/careers/)


* **[Frigo Films](https://frigofilms.fr/)**  
  * _Studio d'animation fondé en 2024 par cinq associés aux Ateliers Magelis, travaillant en 2D, stop motion, aquarelle et papier découpé._
  * **Mots clés**: _animation 2D, stop motion, papier découpé, court métrage_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Fygostudio](https://fygostudio.com/)**  
  * _Studio d'animation et société de production bordelaise réalisant des films publicitaires et du brand content en animation 2D, 3D et techniques mixtes au rendu pictural._
  * **Mots clés**: _animation 2D, animation 3D, publicité, motion design_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Commerce/Marketing/Publicité


* **[Game Atelier](https://www.game-atelier.com/)**  
  * _Studio parisien de jeux d'action-aventure au style cartoon animé (Flying Hamster, Monster Boy and the Cursed Kingdom, Otherskin)._
  * **Mots clés**: _console/PC, jeu indépendant, animation 2D, action-aventure_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.game-atelier.com/careers)


* **[Gameleon Studio](https://gameleon-studio.fr/)**  
  * _Studio lyonnais de production d'art 2D/3D pour le jeu vidéo (personnages, environnements, FX, optimisation) sous Unity, Unreal et moteurs propriétaires, qui développe aussi ses propres jeux._
  * **Mots clés**: _game art, co-développement, environnements numériques_
  * **Remarque**: _Bureaux affichés au 91 cours Charlemagne, Lyon 2e ; siège au registre à Sainte-Foy-lès-Lyon._
  * **Localisation**: Sainte-Foy-lès-Lyon
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Gameloft](https://www.gameloft.com/)**  
  * _Développeur et éditeur de jeux vidéo historiquement mobile (Asphalt, Dragon Mania Legends), aussi sur PC et consoles (Disney Dreamlight Valley), avec des studios dans le monde entier._
  * **Mots clés**: _mobile, free-to-play, console/PC, moteur maison, Asphalt, Disney Dreamlight Valley_
  * **Localisation**: France/Paris, États-Unis, Canada, Espagne, Inde, International
  * **Nombres d'employés**: 2400
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.gameloft.com/jobs)


* **[Ganymed Robotics](https://www.ganymedrobotics.com/)**  
  * _Développe un robot de chirurgie orthopédique (genou) guidé par vision par ordinateur 3D sans marqueurs._
  * **Mots clés**: _chirurgie assistée, robotique, orthopédie, vision par ordinateur, capture sans marqueurs, genou_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, Reconstruction, Imagerie
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


* **[Gao Shan Pictures](https://www.gaoshanpictures.com)**  
  * _Studio d'animation 3D ayant participé à des longs métrages (Mars Express, J'ai perdu mon corps)._
  * **Mots clés**: _animation 3D, long métrage, coproduction_
  * **Localisation**: France/Saint-Paul (La Réunion), Angoulême, Maurice
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[GeometryFactory](https://geometryfactory.com/)**  
  * _Développement de bibliothèque logicielle open-source de calcul géométrique._
  * **Mots clés**: _géométrie algorithmique, maillage, open source, CGAL, nuage de points, SIG_
  * **Produits**: [the Computational Geometry Algorithms Library (CGAL)](https://www.cgal.org/)
  * **Localisation**: Valbonne
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Reconstruction, Géométrie
  * **Domaine d'application**: Générique
  * [_Jobs_](https://geometryfactory.com/open-positions/)


* **[Geosat](https://www.geo-sat.com/)**  
  * _Groupe de géomètres-experts dont le siège est à Canéjan, spécialisé dans la mesure 3D : scan laser et modélisation BIM/CIM, cartographie mobile lidar, détection de réseaux et SIG._
  * **Mots clés**: _scanner 3D, lidar, nuage de points, cartographie mobile, SIG, jumeau numérique_
  * **Remarque**: _Réseau national de cabinets ; siège et principal établissement à Canéjan (Gironde)._
  * **Localisation**: Canéjan, Bordeaux, Villenave-d'Ornon, Libourne
  * **Nombres d'employés**: 375
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Modélisation
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Geovariances](https://www.geovariances.com/)**  
  * _Éditeur des logiciels de géostatistique Isatis.neo et Kartotrak pour la modélisation 3D des ressources minérales, du sous-sol et des sols pollués._
  * **Mots clés**: _géostatistique, modélisation 3D, SIG, géosciences_
  * **Localisation**: Avon
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Analyse de données, Modélisation, Visualisation
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie


* **[Gleamer](https://www.gleamer.ai/)**  
  * _Éditeur français de logiciels d'IA pour la radiologie (BoneView, ChestView, BreastView...) d'aide à la détection sur radiographie, scanner, mammographie et IRM._
  * **Mots clés**: _imagerie médicale, diagnostic, deep learning, radiologie, dispositif médical_
  * **Localisation**: Paris, Saint-Mandé
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Glitchr Studio](https://www.glitchr-studio.com/)**  
  * _Studio indépendant bordelais d'ingénieurs multimédia et d'artistes spécialisé dans les jeux et expériences en réalité virtuelle et augmentée (Taiko Frenzy), les installations interactives et les applications mobiles._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, jeu indépendant, Unity_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Goblinz Studio](https://goblinz.com/)**  
  * _Studio de développement et éditeur de jeux vidéo indépendants (Legend of Keepers)._
  * **Mots clés**: _jeu indépendant, édition de jeux, console/PC, jeu de stratégie, roguelite, Legend of Keepers_
  * **Localisation**: Yutz
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Google](https://about.google/)**  
  * _Groupe américain du moteur de recherche, d'Android, de Google Maps et des modèles d'IA Gemini, avec des activités de recherche en vision, rendu et IA._
  * **Mots clés**: _deep learning, IA générative, cartographie, réalité augmentée, cloud/streaming, Gemini_
  * **Remarque**: _<a href="https://ai.google/">Google AI</a> est une entité de recherche développant des projets en graphique_
  * **Localisation**: États-Unis/Mountain View, International
  * **Nombres d'employés**: 140000
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.google.com/)


* **[GoPro Technology](https://gopro.com/fr/fr/)**  
  * _Fabricant américain de caméras d'action et 360° et de leurs logiciels (stabilisation, édition, diffusion en direct)._
  * **Mots clés**: _caméra d'action, vidéo 360°, stabilisation d'image, matériel grand public_
  * **Remarque**: _Entité R&D en France à Issy Les Moulineaux._
  * **Localisation**: Paris, International
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Vision
  * **Domaine d'application**: Générique


* **[Goupil Technology](https://goupil.technology/)**  
  * _Éditeur de logiciels XR créé fin 2023 (incubé par Eurekatech) : formation immersive en VR (UNI VR SITY), vidéo 360° interactive (ARGOS 360), jumeaux numériques connectés aux machines, photogrammétrie et visites virtuelles._
  * **Mots clés**: _réalité étendue, formation immersive, jumeau numérique, vidéo 360, photogrammétrie, visite virtuelle_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: VR/AR, Reconstruction, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Graitec](https://graitec.com/fr/)**  
  * _Éditeur et intégrateur de logiciels BIM et de calcul de structures (Advance Design, Arche, PowerPack pour Revit et Advance Steel)._
  * **Mots clés**: _BIM, CAO, calcul de structures, plugins Revit_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Simulation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[GridRaster](https://gridraster.com/)**  
  * _Plateforme d'intelligence spatiale (SPIDER) combinant IA, segmentation et recalage 3D pour la réalité mixte industrielle : inspection, maintenance, robotique, formation (aéronautique, défense)._
  * **Mots clés**: _réalité mixte, vision par ordinateur, recalage 3D, jumeau numérique, aéronautique, défense, industrie/usinage_
  * **Localisation**: États-Unis/California/Mountain View, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, VR/AR
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://gridraster.com/careers-jobs/)


* **[Hapticmedia](https://hapticmedia.com/)**  
  * _Éditeur d'une plateforme de configurateurs 3D et réalité augmentée pour l'e-commerce._
  * **Mots clés**: _e-commerce/configurateur 3D, réalité augmentée, web 3D, rendu photoréaliste, luxe_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data, VR/AR
  * **Domaine d'application**: Commerce/Marketing/Publicité


* **[Haption](https://www.haption.com/)**  
  * _Conception et fabrication de systèmes haptiques à retour d'effort (gamme Virtuose) et logiciels de simulation interactive pour la réalité virtuelle._
  * **Mots clés**: _haptique, retour d'effort, téléopération, robotique, réalité virtuelle, nucléaire, Virtuose_
  * **Localisation**: Laval
  * **Domaine scientifique/technique**: IHM/Haptique, VR/AR, Simulation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Médical/Biologique, Industrie/Manufacturing/CAO


* **[Harfang3D](https://www.harfang3d.com/)**  
  * _Outils de visualisation 3D en temps réel, C++ et Python, pour l'industrie, la recherche et l'enseignement,_
  * **Mots clés**: _rendu temps réel, moteur 3D, open source, Python, réalité virtuelle, IHM_
  * **Localisation**: Orléans
  * **Domaine scientifique/technique**: Visualisation, Simulation, VR/AR
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Hari Studios](https://hari-studios.com/)**  
  * _Studio de production et de fabrication de séries et films d'animation 3D (Grizzy et les Lemmings, Mystery Lane)._
  * **Mots clés**: _séries d'animation, animation 3D, jeunesse, Grizzy et les Lemmings_
  * **Localisation**: Paris, Angoulême
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://hari-studios.com/recrutements/)


* **[Harmonic](https://www.harmonicinc.com/)**  
  * _Groupe américain de traitement et diffusion vidéo (encodeurs, plateforme VOS) disposant à Cesson-Sévigné d'un centre de R&D issu de Thomson Video Networks._
  * **Mots clés**: _compression vidéo, encodage, broadcast, streaming_
  * **Remarque**: _Entité active : Harmonic Technologies France SAS (l'ancienne Harmonic France 477555718 est fermée) ; effectif du site à confirmer._
  * **Localisation**: Cesson-Sévigné
  * **Domaine scientifique/technique**: Imagerie, Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.harmonicinc.com/)


* **[Headbang Club](https://headbang.club/)**  
  * _Collectif de développeurs indépendants, créateur du jeu d'action musical metal Double Kick Heroes, qui fait aussi de la prestation (contribution à Warhammer 40,000 Mechanicus)._
  * **Mots clés**: _jeu vidéo, pixel art, prestation, Unity_
  * **Localisation**: Gond-Pontouvre
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Healthy Mind](https://healthymind.fr/)**  
  * _Concepteur d'un dispositif médical de réalité virtuelle thérapeutique (environnements 3D, hypnose) pour réduire douleur et anxiété en milieu hospitalier._
  * **Mots clés**: _réalité virtuelle, santé, thérapie VR, environnements 3D_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Médical/Biologique


* **[Hectiq](https://hectiq.games/)**  
  * _Studio de développement de jeux vidéo fondé à Bordeaux en 2023, qui développe Painted Kingdoms en misant sur la créativité, le gameplay et l'innovation technique._
  * **Mots clés**: _jeu indépendant, console/PC, multijoueur en ligne_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://hectiq.games/careers)


* **[Hera-MI](https://www.hera-mi.com/)**  
  * _Medtech nantaise fondée en 2017 qui développe Breast-SlimView, logiciel d'aide à la décision par intelligence artificielle pour la mammographie 2D et la tomosynthèse._
  * **Mots clés**: _mammographie, tomosynthèse, IA, aide au diagnostic_
  * **Localisation**: Saint-Herblain
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Hexagon](https://hexagon.com/)**  
  * _Groupe suédois de technologies de mesure et de géospatial (Leica Geosystems, Intergraph) : métrologie, scanners laser, positionnement, logiciels pour l'industrie et les infrastructures._
  * **Mots clés**: _métrologie, lidar, scanner 3D, SIG, jumeau numérique, Leica Geosystems, industrie/usinage_
  * **Localisation**: Suède/Stockholm
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie, Vision
  * **Domaine d'application**: Géospatial/Cartographie, Industrie/Manufacturing/CAO


* **[Hibernian Workshop](https://hibernian-workshop.com/)**  
  * _Studio de jeux vidéo fondé en 2017, auteur de jeux d'action en pixel art Dark Devotion et Astral Ascent (PC, Switch, PlayStation), et de l'action-RPG Fallen Fates en développement._
  * **Mots clés**: _jeu vidéo, pixel art, roguelite, action-RPG, consoles_
  * **Localisation**: Soyaux
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Histovery](https://histovery.com/)**  
  * _Créateur de l'HistoPad, tablette de visite en réalité augmentée reconstituant en 3D des lieux patrimoniaux._
  * **Mots clés**: _patrimoine/musée, réalité augmentée, visite augmentée, HistoPad, reconstitution historique, tablette_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Patrimoine/Culture


* **[Hocus Pocus Studio](https://hocuspocusstudio.fr/)**  
  * _Studio d'animation 3D, d'effets visuels et de post-production pour la publicité, le documentaire et le cinéma._
  * **Mots clés**: _effets visuels, animation 3D, motion design, publicité, documentaire, clips, post-production_
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Holo3](https://holo3.com/)**  
  * _Centre de ressources technologiques de Saint-Louis spécialisé en métrologie optique, avec une équipe de réalité virtuelle qui développe des applications VR pour l'industrie, l'architecture et la formation._
  * **Mots clés**: _réalité virtuelle, jumeau numérique, métrologie optique_
  * **Localisation**: Saint-Louis
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Acquisition
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Holusion](https://holusion.com/fr/)**  
  * _PME roubaisienne qui conçoit, fabrique et loue des dispositifs d'affichage holographique (de quelques centimètres à plus de 2 m) et crée les contenus 3D et applications interactives associés, notamment pour la valorisation du patrimoine culturel et scientifique._
  * **Mots clés**: _hologramme, affichage 3D, contenus interactifs, muséographie_
  * **Localisation**: Roubaix
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Hardware, VR/AR, IHM/Haptique
  * **Domaine d'application**: Patrimoine/Culture, Commerce/Marketing/Publicité, Art/Evenementiel


* **[Holy Cap](https://www.holycapstudio.com/)**  
  * _Studio indépendant nantais de jeu vidéo fondé en 2020, auteur du jeu de plateforme 2D Promenade (Switch, Xbox, PC, édité par Red Art Games, soutenu par le CNC)._
  * **Mots clés**: _jeu indépendant, plateforme 2D, consoles_
  * **Localisation**: Nantes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Honikou](https://honikou.com/)**  
  * _Petit studio marseillais de jeux vidéo fondé en 2014, passé du mobile au PC et aux consoles (série Leo and Mia, Warchief, Kraken Odyssey)._
  * **Mots clés**: _jeu indépendant, mobile, console/PC_
  * **Localisation**: Plan-de-Cuques
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[HRV Simulation](https://hrv-simulation.com/)**  
  * _Éditeur de simulateurs médicaux et industriels combinant haptique, réalité virtuelle et capture de mouvement : Virteasy Dental (simulateur de chirurgie dentaire pour la formation), Nawo (analyse ergonomique et biomécanique) et vélo virtuel Cottos Medical pour les EHPAD._
  * **Mots clés**: _simulateur dentaire, retour haptique, simulation médicale, capture de mouvement, ergonomie_
  * **Localisation**: Changé
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Simulation, IHM/Haptique, VR/AR, Acquisition
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Huawei Nice Research Center](https://www.huawei.com/fr/)** (Huawei Technologies France - Nice Research Center) 
  * _Centre de recherche Huawei à Sophia Antipolis avec une équipe de rendu 3D basse consommation pour le jeu mobile (ray tracing mobile, super-résolution, génération de frames)._
  * **Mots clés**: _ray tracing, mobile, GPU, rendu temps réel, super-résolution, basse consommation, Vulkan_
  * **Localisation**: Valbonne, Boulogne-Billancourt
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware, IA générative (image/3D)
  * **Domaine d'application**: Jeu Vidéo, Générique


* **[HypnoVR](https://hypnovr.io/fr/)** (Hypno VR) 
  * _Start-up strasbourgeoise de thérapie numérique associant hypnose médicale et environnements 3D en réalité virtuelle contre la douleur et l'anxiété._
  * **Mots clés**: _réalité virtuelle, dispositif médical, rendu temps réel_
  * **Localisation**: Lampertheim
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Médical/Biologique


* **[I Am A Dog Studio](https://www.cibogame.com/)**  
  * _Studio de jeu vidéo indépendant strasbourgeois (2025) qui développe Cosmic Holidays, jeu d'aventure et de plateforme 2D pour PC._
  * **Mots clés**: _jeu indépendant, console/PC, animation 2D_
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Jeu Vidéo


* **[I-MC](https://www.mistralis.fr/)**  
  * _Solutions de contrôle et d'inspection industrielle automatisées par capteur optique (marque Mistralis)._
  * **Mots clés**: _contrôle non destructif, inspection industrielle, capteur optique, machines spéciales, nucléaire, fabrication additive_
  * **Localisation**: France/Pertuis
  * **Domaine scientifique/technique**: Vision, Acquisition, Simulation, Design/Fabrication
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation, Sécurité/Défense


* **[i2S](https://i2s.fr/)** (Innovative Imaging Solutions (I2S)) 
  * _Concepteur et fabricant pessacais de caméras techniques, de systèmes de vision intégrée et de scanners de numérisation patrimoniale (livres, documents grand format) avec leurs logiciels de traitement d'image._
  * **Mots clés**: _vision par ordinateur, caméras, numérisation patrimoniale, scanner 3D, traitement d'images_
  * **Localisation**: Pessac, Cestas
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Acquisition, Vision, Imagerie, Hardware
  * **Domaine d'application**: Patrimoine/Culture, Industrie/Manufacturing/CAO, Sécurité/Défense


* **[Iconem](https://iconem.com/)**  
  * _Numérisation 3D du patrimoine par photogrammétrie, drones et lidar ; plateforme web de visualisation (nuages de points, maillages, Gaussian splats)._
  * **Mots clés**: _patrimoine/musée, photogrammétrie, drone, lidar, nuage de points, Gaussian splatting, exposition immersive_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Visualisation
  * **Domaine d'application**: Patrimoine/Culture, Géospatial/Cartographie


* **[Iconeus](https://iconeus.com/)**  
  * _Société parisienne fondée par les inventeurs de l'échographie fonctionnelle (fUS), qui conçoit des systèmes d'imagerie haute résolution de l'activité et de la vascularisation cérébrales._
  * **Mots clés**: _imagerie médicale, échographie, neuro-imagerie_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique


* **[iGlobe Scientific](https://www.linkedin.com/company/iglobe-scientific)**  
  * _Start-up strasbourgeoise issue de l'IHU Strasbourg et de Medi-Globe qui développe des logiciels d'IA d'aide à l'écho-endoscopie pour la détection précoce du cancer du pancréas._
  * **Mots clés**: _imagerie médicale, deep learning, segmentation, dispositif médical_
  * **Remarque**: _Pas de site web propre identifié (page LinkedIn)._
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[IGO](https://www.igo.fr/)**  
  * _Société française spécialiste du jumeau numérique de territoire : exploitation de données géospatiales 3D pour la simulation de projets, la gestion de patrimoine et la sûreté._
  * **Mots clés**: _jumeau numérique, SIG, territoire, 3D géospatiale, sûreté, aménagement urbain_
  * **Localisation**: Nîmes
  * **Domaine scientifique/technique**: Modélisation, VR/AR
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[IHMTEK](https://www.ihmtek.com/)**  
  * _Agence de développement en réalité étendue fondée en 2012 au sud de Lyon (Les Roches-de-Condrieu), réalisant serious games, simulateurs VR de formation, showrooms virtuels et modélisation 3D._
  * **Mots clés**: _réalité virtuelle, simulateur d'entraînement, serious game, formation professionnelle_
  * **Localisation**: Les Roches-de-Condrieu
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Ikigai Games](https://www.gfc.ikigai.games/)**  
  * _Pôle national de production et de recherche en gamification (Games for Citizens) soutenu par le ministère de l'Enseignement supérieur, créant des jeux pour l'apprentissage et la médiation culturelle._
  * **Mots clés**: _serious game, ludopédagogie, éducation, médiation scientifique_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.gfc.ikigai.games/recrutement)


* **[Illumination Studios Paris](https://www.illuminationstudiosparis.com/)**  
  * _Studio parisien d'Illumination (Universal) qui fabrique les longs métrages d'animation 3D de la franchise Moi, moche et méchant/Minions et Super Mario Bros._
  * **Mots clés**: _long métrage, animation 3D, Moi, moche et méchant, Super Mario, Universal_
  * **Remarque**: _Anciennement Illumination Mac Guff._
  * **Localisation**: Paris
  * **Nombres d'employés**: 700
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.illuminationstudiosparis.com/careers/)


* **[IMA Solutions](https://ima-solutions.fr/)**  
  * _Société créée en 2008 à Castanet-Tolosan, spécialisée dans la numérisation 3D du patrimoine culturel et scientifique (scan 3D, tomographie X) et les applications multimédias, visites virtuelles et AR/VR pour musées (British Museum, Louvre-Lens, Muséum de Toulouse)._
  * **Mots clés**: _numérisation 3D, patrimoine, tomographie, musées_
  * **Localisation**: Castanet-Tolosan
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, VR/AR
  * **Domaine d'application**: Patrimoine/Culture


* **[Imag'ing](https://www.imag-ing.com/)**  
  * _Bureau d'études alsacien spécialisé dans le relevé 3D par scanner laser et photogrammétrie, la métrologie, le scan-to-BIM et les jumeaux numériques industriels._
  * **Mots clés**: _scanner 3D, photogrammétrie, nuage de points, jumeau numérique, métrologie_
  * **Localisation**: Lixhausen, Strasbourg
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Modélisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Énergie/Environnement, Architecture/BTP/Urbanisme


* **[Imageens](https://www.imageens.com/)**  
  * _Éditeur français de logiciels d'aide à la décision clinique par IA (ArtFun+, dispositif CE IIa) mesurant des biomarqueurs d'imagerie pour stratifier le risque cardiovasculaire._
  * **Mots clés**: _imagerie médicale, diagnostic, cardiologie, deep learning, biomarqueurs d'imagerie, dispositif médical_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Analyse de données, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Imagin-VR](https://imagin-vr.com/)**  
  * _Concepteur lavallois de solutions de réalité virtuelle sans casque (Cube-VR de type CAVE jusqu'à 5 écrans, Valise-VR brevetée, VR-Wall) pour la revue de maquettes 3D à l'échelle 1 dans l'industrie, la santé et l'éducation (clients : Orano, Sanofi, Thales, SNCF, Futuroscope)._
  * **Mots clés**: _CAVE, réalité virtuelle sans casque, visualisation 3D échelle 1, projection immersive_
  * **Localisation**: Changé, Changé
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Visualisation, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique, Entrainement/Formation/Serious Game


* **[Imagination Technologies](https://www.imaginationtech.com/)**  
  * _Concepteur britannique de propriété intellectuelle GPU (PowerVR, séries A à E) pour graphismes, ray tracing et IA embarquée, licenciée aux fabricants de puces mobiles et automobiles._
  * **Mots clés**: _GPU, puce/semi-conducteur, propriété intellectuelle, ray tracing, accélérateurs IA, mobile, automobile_
  * **Localisation**: Royaume-Uni, Pologne
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.imaginationtech.com/careers/vacancies/)


* **[Imagine Eyes](https://www.imagine-eyes.com/)**  
  * _Concepteur à Orsay de systèmes d'imagerie rétinienne haute résolution par optique adaptative et d'instruments d'optique ophtalmique._
  * **Mots clés**: _imagerie médicale, optique adaptative, ophtalmologie_
  * **Localisation**: Orsay
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique


* **[Imagine Optic](https://www.imagine-optic.com/)**  
  * _Fabricant d'analyseurs de front d'onde (Shack-Hartmann), de miroirs déformables et de logiciels d'optique adaptative et de métrologie optique, avec un établissement à Talence._
  * **Mots clés**: _métrologie, optique adaptative, laser, microscopie, front d'onde_
  * **Remarque**: _Siège à Orsay ; établissement actif de petite taille à Talence (l'ancien établissement de la Cité de la Photonique à Pessac est fermé). Effectif = tranche de l'entreprise._
  * **Localisation**: Orsay, Talence
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Hardware
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO, Générique


* **[Imajing](https://imajing.eu/)**  
  * _Concepteur de systèmes de cartographie mobile (capteurs embarqués, images et lidar) et de logiciels d'exploitation 3D géoréférencée._
  * **Mots clés**: _cartographie mobile, lidar, SIG, gestion d'infrastructures, nuage de points, routes_
  * **Localisation**: Labège
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Imavita](https://imavita.com/)**  
  * _CRO préclinique de l'agglomération toulousaine spécialisée en imagerie in vivo (bioluminescence, fluorescence, OCT, TEP/TDM) et en analyse d'images quantitative pour l'évaluation de thérapies._
  * **Mots clés**: _imagerie préclinique, analyse d'images, biomarqueurs_
  * **Localisation**: Escalquens
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Immersion](https://www.immersion.fr/)**  
  * _Intégrateur et éditeur de solutions de réalité virtuelle et augmentée et de collaboration 3D pour l'industrie et la recherche (Shariiing, Shariiing Review)._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, collaboration 3D, salle immersive, intégrateur, Shariiing_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: VR/AR, Visualisation, IHM/Haptique
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Immersiv Element](https://www.immersivelement.fr/)**  
  * _Studio 3D de l'Eurométropole de Strasbourg spécialisé en modélisation et animation 3D, VFX, motion design et expériences immersives (VR, réalité augmentée) pour la publicité et l'événementiel._
  * **Mots clés**: _animation 3D, effets visuels, motion design, publicité, réalité augmentée_
  * **Localisation**: Bischheim
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, VR/AR
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel


* **[Immersiv.io](https://www.immersiv.io/)**  
  * _Start-up parisienne fondée en 2016 qui développe ARISE, plateforme 3D interactive et de réalité augmentée pour le spectacle sportif (vision par ordinateur, XR) à destination des diffuseurs et ligues._
  * **Mots clés**: _réalité augmentée, sport, vision par ordinateur, rendu temps réel_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Vision, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Commerce/Marketing/Publicité
  * [_Jobs_](https://immersiv.welcomekit.co/)


* **[Immersive Factory](https://immersivefactory.com/)**  
  * _Éditeur de formations immersives à la sécurité au travail en réalité virtuelle, augmentée et web 3D, proposées en catalogue par abonnement._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, serious game, formation immersive, sécurité_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Immersive Garden](https://immersive-g.com/)**  
  * _Studio parisien d'expériences web immersives et de narration numérique 3D pour les marques de luxe (Louis Vuitton, Cartier, Dior, Omega)._
  * **Mots clés**: _web 3D, WebGL, rendu temps réel, luxe_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires


* **[In Extenso Studio](https://www.inextenso.studio/)**  
  * _Agence bordelaise de visualisation architecturale fondée par un architecte-perspectiviste, produisant images et films 3D de projets publics et privés (écoles, EHPAD, équipements culturels)._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Inbolt](https://www.inbolt.com/)**  
  * _Guidage de robots industriels en temps réel par vision 3D et IA (localisation d'objets à partir de capteurs de profondeur)._
  * **Mots clés**: _robotique, vision par ordinateur, caméra 3D, deep learning, industrie/usinage, automobile, bin picking_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


* **[InfinyTech3D](https://infinytech3d.com/)**  
  * _Start-up lyonnaise de simulation physique temps réel (framework SOFA, intégrations Unity/Unreal, haptique) pour simulateurs chirurgicaux en réalité virtuelle._
  * **Mots clés**: _simulation physique, simulation médicale, haptique, réalité virtuelle, SOFA, Unity_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Simulation, VR/AR, IHM/Haptique
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game


* **[inHEART](https://www.inheartmedical.com/)**  
  * _Jumeau numérique 3D du coeur du patient construit à partir de l'imagerie médicale (IA et simulation) pour guider l'ablation des arythmies._
  * **Mots clés**: _imagerie médicale, jumeau numérique, cardiologie, planification chirurgicale, deep learning, segmentation, dispositif médical_
  * **Localisation**: Pessac, États-Unis/Boston
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Simulation
  * **Domaine d'application**: Médical/Biologique


* **[InnerSpace VR](https://www.innerspacevr.com/)**  
  * _Studio parisien de jeux et expériences narratives en réalité virtuelle (A Fisherman's Tale, Another Fisherman's Tale, Maskmaker, Spymaster)._
  * **Mots clés**: _jeu VR, jeu indépendant, expérience narrative, réalité virtuelle, A Fisherman's Tale_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Innodura](https://www.innodura.fr/)** (Innodura TB) 
  * _Société d'ingénierie de Rillieux-la-Pape spécialisée en vision 3D et IA : contrôle 3D, bin-picking robotisé, détection d'obstacles et cartographie pour véhicules._
  * **Mots clés**: _vision par ordinateur, robotique, bin-picking, métrologie, véhicule autonome_
  * **Localisation**: Rillieux-la-Pape
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.innodura.fr/recrutement-2/)


* **[Inod](https://www.inod.solutions/)**  
  * _Studio lavallois de solutions immersives (VR, AR, réalité mixte, configurateurs 3D, salons virtuels) éditeur de ScaleView, logiciel de revue de projets 3D en VR compatible Revit, SketchUp, SolidWorks ou CATIA (Laval Virtual Award 2019), et de Mix Design en réalité mixte._
  * **Mots clés**: _ScaleView, visite virtuelle, configurateur 3D, réalité mixte, salons virtuels_
  * **Localisation**: Laval
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité, Entrainement/Formation/Serious Game


* **[InSimo](https://www.insimo.com/)**  
  * _Éditeur de simulateurs logiciels pour la formation aux gestes médicaux et chirurgicaux (ponctions échoguidées, chirurgie robotique, cataracte pour HelpMeSee, sutures pour VirtaMed)._
  * **Mots clés**: _simulation médicale, chirurgie assistée, formation professionnelle, simulation physique, échographie, chirurgie robotique_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Simulation, Modélisation, Animation, Visualisation
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.insimo.com/fr/career-2/)


* **[InterDigital](https://www.interdigital.com/)**  
  * _Centre de R&D (ex-Technicolor R&I) sur la vidéo immersive, la vidéo volumétrique, le light field, l'haptique et la compression vidéo._
  * **Mots clés**: _vidéo volumétrique, compression vidéo, normalisation, HDR, haptique, deep learning, brevets_
  * **Remarque**: _Centre de R&D issu de Technicolor Research & Innovation, repris par le groupe américain InterDigital._
  * **Localisation**: Cesson-Sévigné
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers


* **[Inui](https://www.inui.fr/)** (Agence Inui) 
  * _Agence parisienne d'images de synthèse et de films d'animation 3D pour l'architecture et les projets immobiliers._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective, animation 3D_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Visualisation, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Inventive](https://www.inventive-studio.com/)**  
  * _Studio strasbourgeois de médiation numérique et de design qui crée images de synthèse, réalité virtuelle et augmentée et installations immersives pour musées et patrimoine (musée Unterlinden, cathédrale de Strasbourg)._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, exposition immersive, architecture_
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: VR/AR, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Patrimoine/Culture, Architecture/BTP/Urbanisme


* **[IRCAD](https://www.ircad.fr/)** (Institut de Recherche contre les Cancers de l'Appareil Digestif) 
  * _Institut de recherche et de formation en chirurgie mini-invasive dont l'équipe R&D développe Sight, framework C++ open source de visualisation 3D, réalité augmentée et chirurgie assistée par ordinateur._
  * **Mots clés**: _imagerie médicale, réalité augmentée, navigation chirurgicale, robotique, segmentation_
  * **Remarque**: _Structure associative (non une société commerciale) ; Visible Patient, déjà au listing, en est issue._
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, VR/AR, Visualisation
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game


* **[IronEqual](https://www.ironequal.com/)**  
  * _Studio de jeu vidéo de cinq personnes installé à la Plaine Images (Tourcoing), qui développe depuis une dizaine d'années des jeux premium, mobiles et serious games._
  * **Mots clés**: _jeu vidéo, serious game, studio indépendant_
  * **Localisation**: Tourcoing
  * **Nombres d'employés**: 5
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Entrainement/Formation/Serious Game


* **[Irregular Shapes](https://irregular-shapes.com/)**  
  * _Studio indépendant francilien (2022) créateur de City Tales: Medieval Era, city-builder où les villes médiévales se génèrent de façon organique et procédurale._
  * **Mots clés**: _city-builder, génération procédurale, jeu indépendant, console/PC_
  * **Localisation**: Nanterre
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Ishtar Games](https://ishtar.games/)**  
  * _Studio bordelais de jeux de gestion et de RPG tactiques (Dead in Vinland, The Last Spell), filiale de Nacon depuis 2021 et label d'édition indépendante._
  * **Mots clés**: _console/PC, RPG tactique, roguelite, édition de jeux_
  * **Remarque**: _Filiale du groupe Nacon._
  * **Localisation**: Tourcoing
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[JPL Films](https://jplfilms.com/)**  
  * _Société de production rennaise de films d'animation (marionnettes, papier découpé, 2D, coproductions 3D), courts métrages et séries._
  * **Mots clés**: _stop motion, animation 2D, court métrage, séries d'animation_
  * **Remarque**: _Studio de tournage associé : Pupps' Motion Studio (SIREN 842399768), même contact._
  * **Localisation**: Rennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Kafi](https://www.kafi-games.com/)**  
  * _Petit studio indépendant (Saint-Mandé, Avignon) de jeux coopératifs 3D, auteur de The Headliners (2025) et de Snow Panic en développement._
  * **Mots clés**: _jeu coopératif, jeu indépendant, console/PC_
  * **Localisation**: Saint-Mandé
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Kalank Games](https://kalank.games/)**  
  * _Studio de jeux vidéo et éditeur fondé en 2017, qui développe ses propres jeux et fait du co-développement sous Unity et Unreal (Toko Toko, Winky Play, Miraculous Rise of the Sphinx), ainsi que des expériences VR/AR (Quest, Vive, Apple Vision Pro)._
  * **Mots clés**: _jeu vidéo, co-développement, réalité virtuelle, réalité augmentée, Unity, Unreal Engine_
  * **Localisation**: Gond-Pontouvre
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Kayrros](https://www.kayrros.com/)**  
  * _Mesure par satellite de l'empreinte environnementale des activités humaines (analyse d'images satellitaires, géospatial)._
  * **Mots clés**: _imagerie satellite, SIG, deep learning, méthane, risque climatique, feux de forêt, déforestation_
  * **Remarque**: _Rachetée en 2026 par Energy Aspects (Londres) ; la marque et l'équipe parisienne sont maintenues._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie


* **[Kazoo Animation](https://kazooanimation.com/)**  
  * _Studio de prestation en animation 3D haut de gamme fondé en 2022 à la Plaine Images (Tourcoing), de la préproduction au compositing, membre du groupe Samka et partenaire de Blue Zoo (Lego City No Limits saison 4, Mojo Swoptops)._
  * **Mots clés**: _animation 3D, séries jeunesse, compositing, Plaine Images_
  * **Localisation**: Tourcoing
  * **Nombres d'employés**: 20
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Keosys](https://www.banook.com/)**  
  * _Imaging CRO fondée en 2001 à Saint-Herblain, filiale du groupe Banook depuis 2024, qui centralise et analyse les images médicales des essais cliniques internationaux (phases I à IV) avec ses propres outils logiciels d'imagerie._
  * **Mots clés**: _imagerie médicale, essais cliniques, lecture centralisée, RECIST_
  * **Localisation**: Saint-Herblain
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Kermap](https://kermap.com/)**  
  * _Start-up de Cesson-Sévigné qui analyse images satellites et aériennes par intelligence artificielle pour l'aménagement, l'environnement et l'agriculture._
  * **Mots clés**: _imagerie satellite, deep learning, SIG, télédétection_
  * **Localisation**: Cesson-Sévigné
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, Imagerie
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement


* **[KeyShot](https://www.keyshot.com/)** (KeyShot (ex Luxion)) 
  * _Logiciel de rendu d'images (KeyShot Studio) et gestion d'actifs numériques_
  * **Mots clés**: _rendu produit, ray tracing, plugin/logiciel pour artistes, gestion d'actifs numériques, design industriel, ferme de rendu_
  * **Remarque**: _Luxion a fusionné avec Digizuite et a été renommée KeyShot en 2024._
  * **Produits**: KeyShot Studio, KeyShot Dock
  * **Localisation**: États-Unis/Costa Mesa, Danemark/Aarhus
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.keyshot.com/careers/)


* **[Kinetix](https://kinetix.tech/)**  
  * _Génération d'animations 3D d'humains par IA à partir de vidéo ou de texte (emotes pour jeux vidéo et mondes virtuels)._
  * **Mots clés**: _IA générative, animation 3D, estimation de pose humaine, génération vidéo, vision par ordinateur, animation de personnages_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, IA générative (image/3D), Vision, Acquisition
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://kinetix-tech.welcomekit.co/)


* **[Kitware](https://www.kitware.com/)**  
  * _Développement de logiciels scientifique, de visualisation, et de compilation. Beaucoup de développement open-source._
  * **Mots clés**: _open source, visualisation scientifique, VTK, ParaView, vision par ordinateur, imagerie médicale, deep learning_
  * **Produits**: ParaView, VTK, 3D Slicer, ITK, CMake
  * **Localisation**: États-Unis, France/Lyon
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Visualisation, Imagerie, Vision, Reconstruction
  * **Domaine d'application**: Médical/Biologique, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.kitware.com/careers/)


* **[Koelis](https://koelis.com/)**  
  * _Concepteur de systèmes d'échographie 3D et de fusion IRM/écho pour le diagnostic et le traitement du cancer de la prostate._
  * **Mots clés**: _imagerie médicale, échographie 3D, fusion IRM/écho, diagnostic, prostate, biopsie_
  * **Localisation**: Meylan
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Géométrie
  * **Domaine d'application**: Médical/Biologique


* **[Kreon Technologies](https://www.kreon3d.com/)**  
  * _Conception et fabrication de scanners laser 3D et de bras de mesure pour la métrologie et le contrôle dimensionnel._
  * **Mots clés**: _scanner 3D, métrologie, bras de mesure, contrôle qualité, rétro-ingénierie, industrie/usinage_
  * **Localisation**: Limoges
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation


* **[Kylotonn](https://www.kylotonn.com/)** (KT Racing) 
  * _Studio français de jeux vidéo spécialisé dans les sports mécaniques (WRC, TT Isle of Man), doté de son propre moteur KT Engine également décliné pour l'automobile._
  * **Mots clés**: _console/PC, moteur maison, sports mécaniques, jeu de course, simulation physique, automobile_
  * **Remarque**: _Filiale de Nacon. Placée en redressement judiciaire en mars 2026 dans le cadre des difficultés du groupe Nacon._
  * **Localisation**: France/Paris, France/Lyon
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://kylotonn.com/carrieres/)


* **[L'Autre Image](https://www.autreimage.com/)**  
  * _Studio parisien de visualisation architecturale fondé en 1995 : images de synthèse, films et VR pour architectes et promoteurs (concours, appels à projets)._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective, réalité virtuelle_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Visualisation, Modélisation, VR/AR
  * **Domaine d'application**: Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.autreimage.com/jobs/)


* **[La Chouette Compagnie](https://www.chouetteco.com/)**  
  * _Producteur et studio de séries d'animation (Droners, Azuro et la brigade des dragons, Dragon Striker) disposant d'un studio de fabrication à Angoulême, incluant animation 2D type anime et compositing._
  * **Mots clés**: _animation 2D, anime, séries TV, compositing, production_
  * **Localisation**: Angoulême, Montreuil
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.chouetteco.com/jobs)


* **[La Planète Rouge](https://www.laplaneterouge.fr/)**  
  * _Studio d'effets visuels et de production virtuelle (plateau à mur LED The Next Stage aux Provence Studios) et de post-production._
  * **Mots clés**: _production virtuelle, mur LED, effets visuels, post-production, services de tournage, long métrage_
  * **Localisation**: Martigues
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[La Poule Noire](https://www.lapoulenoire.fr/)**  
  * _Coopérative de jeux vidéo fondée en 2018 par d'anciens élèves de l'Enjmin, qui crée des jeux narratifs humoristiques (To Hell With The Ugly, Looking For Fael, Edgar Bokbok in Boulzac) et fait de la prestation pour d'autres studios._
  * **Mots clés**: _jeu vidéo, jeu narratif, coopérative, consoles, PC_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[La Station Animation](https://www.lastationanimation.com/)**  
  * _Société de création et de fabrication de films et séries d'animation 2D et 3D (télévision, cinéma, publicité), fondée à Paris en 2002 avec des studios à Avignon et Angoulême._
  * **Mots clés**: _animation 2D, animation 3D, séries d'animation, long métrage_
  * **Remarque**: _Entités LA STATION ANIMATION (441942331) et STATION ANIMATION STUDIOS (530852367), même adresse._
  * **Localisation**: Paris, Avignon, Angoulême
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Le Cartel Studio](https://lecartelstudio.fr/)**  
  * _Studio indépendant parisien de jeux d'action et coopératifs publiés par Devolver Digital (Mother Russia Bleeds, Heave Ho, Heave Ho 2)._
  * **Mots clés**: _jeu indépendant, console/PC, beat'em all, jeu coopératif_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Lectra](https://www.lectra.com/fr)**  
  * _Éditeur de logiciels et fournisseur d'équipements de découpe pour la mode, l'automobile et l'ameublement (PLM Kubix Link, patronage Modaris, Gerber AccuMark)._
  * **Mots clés**: _CAO, mode/textile, découpe automatique, patronage, PLM, automobile, ameublement_
  * **Localisation**: France/Paris, Cestas, International
  * **Nombres d'employés**: 2800
  * **Domaine scientifique/technique**: Modélisation, Simulation, Design/Fabrication
  * **Domaine d'application**: Mode/Vêtements/Accessoires


* **[Leonard Technologies](https://leonard-rv.com/)**  
  * _Éditeur de LEONARD, simulateur de peinture au pistolet en réalité virtuelle avec pistolet réel instrumenté, pour la formation, le recrutement et la programmation de robots de peinture (clients : John Deere, MBDA, Base aérienne 721)._
  * **Mots clés**: _simulateur de peinture, formation VR, peinture industrielle, robotique_
  * **Localisation**: Bonchamp-lès-Laval
  * **Nombres d'employés**: 3
  * **Domaine scientifique/technique**: VR/AR, Simulation, IHM/Haptique
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Les Androïds Associés](https://www.androids.fr/)**  
  * _Studio de prévisualisation (previs) fondé en 2010 à Paris, qui conçoit en 3D les séquences de films en prises de vues réelles, VFX et animation._
  * **Mots clés**: _prévisualisation, previs, animation 3D, long métrage, effets visuels_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Les Ateliers BK](https://ateliers-bk.com/)**  
  * _Studio lyonnais créant des spectacles vidéo monumentaux, parcours lumière et expériences immersives patrimoniales (Fête des Lumières, Notre-Dame de Fourvière, Mont-Saint-Michel, Let's Glow SF)._
  * **Mots clés**: _événementiel/mapping, patrimoine/musée, Fête des Lumières_
  * **Remarque**: _Lien probable avec Studio BK (https://studio-bk.com/, créé en 2012), non vérifié._
  * **Localisation**: Lyon
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Art/Evenementiel, Patrimoine/Culture


* **[Les Films du Poisson Rouge](https://www.lesfilmsdupoissonrouge.com/)**  
  * _Studio de production et de création de films animés en 2D, 3D et techniques mixtes (longs, courts, documentaires, séries), avec technologies maison (Picasso à Royan, Josep)._
  * **Mots clés**: _animation 2D, animation 3D, techniques mixtes, long métrage, documentaire_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Les fées spéciales](https://les-fees-speciales.coop/)**  
  * _Studio coopératif d'animation 2D/3D à Montpellier, sous Blender, réalisant longs métrages, séries, documentaires et dispositifs immersifs pour musées, avec une équipe R&D outils._
  * **Mots clés**: _animation 2D, animation 3D, long métrage, séries d'animation, Blender, patrimoine/musée, open source_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[Light VFX](https://lightvfx.com/)**  
  * _Studio indépendant d'effets visuels et d'animation pour le cinéma, les séries et la publicité (FX fluides, particules, modélisation 3D, matte painting)._
  * **Mots clés**: _effets visuels, long métrage, séries TV, publicité, environnements numériques, simulation de fluides_
  * **Localisation**: Royan, Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://lightvfx.com/careers)


* **[Lightbulb Crew](https://lightbulbcrew.fr/)**  
  * _Studio indépendant de jeux vidéo, développeur d'Othercide et d'Ex Sanguis (RPG tactiques au tour par tour), également éditeur via le label Firesquid._
  * **Mots clés**: _jeu indépendant, console/PC, RPG tactique, tour par tour, roguelite, édition de jeux_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Little Workshop](https://www.littleworkshop.fr/)**  
  * _Studio parisien fondé en 2010 spécialisé dans les expériences 3D temps réel : sites et jeux WebGL, applications Unity/Unreal pour mobile, desktop et XR, et production d'assets temps réel._
  * **Mots clés**: _web 3D, WebGL, rendu temps réel, Unity_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Commerce/Marketing/Publicité, Jeu Vidéo


* **[Lizardcube](https://www.lizardcube.com/)**  
  * _Studio de Montreuil spécialisé dans les jeux 2D dessinés et animés à la main (Wonder Boy: The Dragon's Trap, Streets of Rage 4, Shinobi: Art of Vengeance pour Sega), cofondé par Omar Cornut, auteur de la bibliothèque Dear ImGui._
  * **Mots clés**: _animation 2D, console/PC, jeu indépendant, Dear ImGui, game art_
  * **Localisation**: Montreuil
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo


* **[Logyline](https://logyline.com/)**  
  * _Éditeur mérignacais de logiciels de conception 3D pour l'aménagement extérieur (piscines, ombrage, paysagisme, bâches) avec rendu 3D et visite en réalité virtuelle._
  * **Mots clés**: _CAO, conception 3D, rendu temps réel, réalité virtuelle, e-commerce/configurateur 3D_
  * **Produits**: Logyline Studio Piscine, Logyconcept3D, Logydraw
  * **Localisation**: Mérignac
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité


* **[Loops Creative Studio](https://loopscreativestudio.com/)**  
  * _Studio d'animation 3D fondé en 2022 proposant lookdev, R&D et pipeline temps réel (Unreal Engine, Blender, USD) aux producteurs (Les Légendaires avec 2 Minutes, Liminals de Pierre Huyghe)._
  * **Mots clés**: _lookdev, Unreal Engine, USD, temps réel, pipeline, animation 3D_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel
  * [_Jobs_](https://loopscreativestudio.com/jobs/)


* **[LS Group](https://www.ls-group.fr/)** (LS Group (ex Light and Shadows)) 
  * _Solutions 3D temps réel : jumeaux numériques, VR/AR et visuels pour la conception, la fabrication et la vente_
  * **Mots clés**: _jumeau numérique, rendu temps réel, réalité virtuelle, réalité augmentée, e-commerce/configurateur 3D, NVIDIA Omniverse, industrie/usinage_
  * **Localisation**: Suresnes
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.ls-group.fr/careers)


* **[LTT (Les Tontons Truqueurs)](https://www.ltt-vfx.com/)**  
  * _Studio VFX de production virtuelle près de Montpellier (Vendargues) : plateau fond vert, studio XR, création d'environnements, motion capture et post-production VFX._
  * **Mots clés**: _production virtuelle, mur LED, effets visuels, motion capture, fond vert, supervision VFX, rendu temps réel_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Vision, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lucid Realities](https://lucidrealities.studio/)**  
  * _Société parisienne de production et de distribution d'œuvres immersives et interactives (VR, AR, expositions immersives) portées par des auteurs, comme The Enemy._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, narration immersive, exposition immersive, documentaire_
  * **Localisation**: Romainville
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel, Patrimoine/Culture


* **[Ludogram](https://ludogram.io/)**  
  * _Studio lillois de jeux vidéo narratifs, multijoueurs et multiplateformes fondé en 2019 (Worlds of Aria, Heroes Never Die, Invokyr, Ascenders: Beyond the Peak)._
  * **Mots clés**: _jeu vidéo, multijoueur, jeu narratif, PC et consoles_
  * **Localisation**: Lille
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Lumiscaphe](https://lumiscaphe.com/)**  
  * _Éditeur du logiciel Patchwork 3D et de solutions de rendu temps réel et de configurateurs 3D pour le design industriel._
  * **Mots clés**: _Patchwork 3D, rendu temps réel, e-commerce/configurateur 3D, design industriel, automobile, Blender_
  * **Localisation**: Canéjan
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation, Commerce/Marketing/Publicité


* **[Luxcarta](https://www.luxcarta.com/)** (Luxcarta Technology) 
  * _Producteur de données géospatiales 3D (modèles numériques de terrain, bâtiments 3D, jumeaux numériques) à partir d'imagerie satellite par IA._
  * **Mots clés**: _SIG, imagerie satellite, modèle numérique de terrain, jumeau numérique, deep learning, télécoms, simulateur d'entraînement_
  * **Localisation**: Mouans-Sartoux, Valbonne
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Reconstruction, Vision, Modélisation
  * **Domaine d'application**: Géospatial/Cartographie, Sécurité/Défense, Automobile/Navigation/Aviation


* **[Luxigon](https://www.luxigon.com/)**  
  * _Studio parisien spécialisé dans les images de synthèse et la visualisation architecturale (perspectives, films, 3D temps réel, VR) pour architectes et concours._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Visualisation, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[LVCim](https://lvcim.com/)**  
  * _Start-up aixoise fondée en 2020 qui édite des composants logiciels de réalité mixte, de simulation et de liaisons tactiques pour la préparation opérationnelle des forces armées (simulateur de drone RAPAS)._
  * **Mots clés**: _simulation, réalité mixte, défense, simulateur_
  * **Localisation**: Aix-en-Provence
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Simulation, VR/AR
  * **Domaine d'application**: Sécurité/Défense, Entrainement/Formation/Serious Game


* **[Lynx](https://lynx-r.com/)**  
  * _Concepteur et fabricant français du casque de réalité mixte Lynx-R (passthrough couleur, capteurs de profondeur, LynxOS) pour usages professionnels, médicaux et recherche._
  * **Mots clés**: _réalité mixte, réalité augmentée, casque XR, vision par ordinateur, Android_
  * **Localisation**: Boulogne-Billancourt
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Hardware, Vision
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique, Générique


* **[Lynxdrone](https://www.lynxdrone.fr/)**  
  * _Fabricant girondin de drones et robots d'inspection en milieux confinés (réseaux d'eau, bâtiments, sites industriels) et prestataire de numérisation 3D._
  * **Mots clés**: _drone, inspection, scanner 3D, nuage de points, robotique_
  * **Localisation**: Canéjan, Saint-Médard-en-Jalles
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Hardware
  * **Domaine d'application**: Robotique/Systèmes autonomes, Architecture/BTP/Urbanisme, Énergie/Environnement


* **[M-Covision](https://fr.mcovision.com/)**  
  * _Cabinet de conseil et R&D en IA spécialisé en vision par ordinateur (deep learning), avec des projets en imagerie médicale, biologie et industrie._
  * **Mots clés**: _vision par ordinateur, deep learning, conseil R&D, imagerie médicale, segmentation, formation professionnelle_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Analyse de données
  * **Domaine d'application**: Générique


* **[M4VFX](https://www.m4vfx.com/)**  
  * _Studio de Pessac spécialisé en matchmove/tracking 3D, layout et modélisation pour les effets visuels de longs métrages, séries, publicités et jeux (John Wick 4, The Nun II, Les Animaux Fantastiques 3)._
  * **Mots clés**: _effets visuels, matchmove, tracking caméra, layout, long métrage_
  * **Localisation**: Pessac
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Reconstruction, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Mac Guff](https://macguff.com)** (Mac Guff Ligne) 
  * _Studio parisien d'effets visuels et d'animation fondé en 1986, pour le cinéma, la publicité, les séries, le documentaire et l'IA créative._
  * **Mots clés**: _effets visuels, animation 3D, publicité, long métrage, séries, IA générative, documentaire_
  * **Localisation**: Paris, Paris
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Machina Films](https://www.machina-films.com/)**  
  * _Petite société de post-production fondée en 2007 à Nice (avec une activité à Paris) spécialisée dans les effets numériques, les décors virtuels, l'animation 3D et architecturale et l'étalonnage._
  * **Mots clés**: _effets visuels, post-production, animation 3D, étalonnage_
  * **Localisation**: Nice
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Architecture/BTP/Urbanisme


* **[Madbox](https://www.madbox.io/)**  
  * _Studio et éditeur parisien de jeux mobiles casual free-to-play à très large audience (Stickman Hook, Sausage Flip, Idle Ants, Pocket Champs)._
  * **Mots clés**: _mobile, free-to-play, jeu casual, hypercasual, édition de jeux, Stickman Hook_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Maelstrom Studios](https://www.maelstrom-studios.fr/)**  
  * _Studio de post-production de Bègles (étalonnage, VFX, 3D photoréaliste, motion design) intervenant sur des longs métrages, documentaires TV et films publicitaires._
  * **Mots clés**: _effets visuels, post-production, motion design, long métrage, publicité_
  * **Localisation**: Bègles
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Magellium](https://www.magellium.com/)**  
  * _Société d'ingénierie et éditeur de logiciels (groupe Magellium Artal) spécialisé en vision artificielle, observation de la Terre et surveillance de l'espace, géographie numérique et traitement d'image, avec un siège à Ramonville-Saint-Agne._
  * **Mots clés**: _vision artificielle, observation de la Terre, traitement d'image, géo-intelligence_
  * **Localisation**: Ramonville-Saint-Agne
  * **Nombres d'employés**: 225
  * **Domaine scientifique/technique**: Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Sécurité/Défense, Robotique/Systèmes autonomes
  * [_Jobs_](https://www.magellium.com/carriere/)


* **[Magic Design Studios](https://www.magicdesignstudios.com/)**  
  * _Studio de jeux vidéo et d'animation fondé par d'anciens d'Ubisoft Montpellier (Unruly Heroes)._
  * **Mots clés**: _jeu indépendant, console/PC, jeu 2D, animation 2D, jeu d'action_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Magic Leap](https://www.magicleap.com/)**  
  * _Optique pour la réalité augmentée (guides d'onde) et prototypage de lunettes AR_
  * **Mots clés**: _réalité augmentée, guides d'onde, optique, lunettes AR, micro-écran, prototypage matériel_
  * **Remarque**: _En 2026, Magic Leap abandonne ses propres casques pour devenir fournisseur de guides d'onde (partenariat avec Google) ; plusieurs centaines de licenciements._
  * **Localisation**: États-Unis/Florida, États-Unis/Colorado
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Générique


* **[Magic Pockets](https://www.magicpockets.com/)**  
  * _Studio francilien (Torcy) de développement externalisé et de portage multiplateforme depuis 2001, plus de 60 jeux pour Activision, EA, Ubisoft, Square Enix ou Sega (Miraculous, Harry Potter, Les Sims, TMNT)._
  * **Mots clés**: _co-développement, portage, console/PC, jeux sous licence_
  * **Localisation**: Torcy
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Mago](https://www.mago.studio/)**  
  * _Start-up parisienne d'IA générative vidéo qui restyle des séquences (playblasts, prévis, prises réelles) en conservant mouvement et performance, issue du projet open source WarpFusion._
  * **Mots clés**: _IA générative, vidéo, stylisation, animation 3D_
  * **Localisation**: Vincennes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: IA générative (image/3D), Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Mainframe Industries](https://themainframe.com/)**  
  * _Studio finlandais qui a une équipe à Paris, créateur de Pax Dei, MMO bac à sable médiéval natif du cloud sous Unreal Engine 5._
  * **Mots clés**: _Unreal Engine, MMO, cloud gaming, console/PC_
  * **Localisation**: Paris, Finlande/Helsinki
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo


* **[Malil'Art](https://www.malil-art.com/)** (Malil'Art Productions) 
  * _Studio et prestataire d'animation 2D et 3D fondé en 2014, spécialisé dans la fabrication de séries et films et la mise en place de pipelines de production (Foot 2 Rue, Gus le chevalier minus)._
  * **Mots clés**: _animation 2D, animation 3D, séries TV, pipeline_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Manufacture 43](https://manufacture43.com/)**  
  * _Studio indépendant de jeux vidéo bordelais (Pawarumi, Highway to Heal) sortis sur PC, Switch, Xbox One et PS4, qui propose aussi des services de développement._
  * **Mots clés**: _jeu indépendant, console/PC, co-développement_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Manus](https://www.manus-meta.com/)**  
  * _Fabricant néerlandais de gants de données (Metagloves) pour la capture précise des mains, utilisés en motion capture, réalité virtuelle et apprentissage robotique._
  * **Mots clés**: _gants de données, motion capture, capture des mains, haptique, réalité virtuelle, robotique_
  * **Localisation**: Pays-Bas/Eindhoven
  * **Domaine scientifique/technique**: Acquisition, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Entrainement/Formation/Serious Game


* **[Manzalab](https://www.manzalab.com/)**  
  * _Studio de serious games et d'expériences immersives (VR, mobile learning) pour la formation et la communication, éditeur de la plateforme collaborative Teemew._
  * **Mots clés**: _serious game, réalité virtuelle, formation professionnelle, plateforme collaborative VR, avatars, Teemew_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Modélisation, VR/AR, Web/Cloud/Big Data
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Entrainement/Formation/Serious Game


* **[Marmoset](https://marmoset.co/)**  
  * _Éditeur de Marmoset Toolbag, logiciel temps réel de baking, texturing et rendu de modèles 3D pour artistes du jeu vidéo et du film._
  * **Mots clés**: _Marmoset Toolbag, baking de textures, texturing, rendu temps réel, plugin/logiciel pour artistes, visualiseur 3D_
  * **Localisation**: États-Unis, International
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[MassVirtual](https://massvirtual.com/)**  
  * _Éditeur américain de solutions de formation en réalité étendue (plateforme MassXR), déployées notamment pour l'US Air Force._
  * **Mots clés**: _réalité étendue, formation professionnelle, simulateur d'entraînement, défense, aéronautique, MassXR_
  * **Localisation**: États-Unis/Orlando
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: VR/AR, Simulation
  * **Domaine d'application**: Automobile/Navigation/Aviation


* **[Mathematic](https://mathematic.tv)**  
  * _Studio de création visuelle : effets visuels, animation, production virtuelle et temps réel._
  * **Mots clés**: _effets visuels, animation 3D, motion design, publicité, clips, cinématiques de jeu, IA générative_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité, Art/Evenementiel


* **[Mauna Kea Technologies](https://www.maunakeatech.com/)**  
  * _Medtech parisienne qui conçoit Cellvizio, plateforme d'endomicroscopie confocale par fibre pour l'imagerie cellulaire in vivo en temps réel._
  * **Mots clés**: _imagerie médicale, endomicroscopie, traitement d'images_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique


* **[Maxon](https://www.maxon.net/)**  
  * _Éditeur allemand de logiciels de création 3D et vidéo : Cinema 4D, ZBrush, moteur de rendu Redshift et effets Red Giant._
  * **Mots clés**: _Cinema 4D, ZBrush, Redshift, motion design, plugin/logiciel pour artistes, effets visuels, sculpture numérique_
  * **Produits**: ZBrush, Cinema4D, etc.
  * **Localisation**: États-Unis, Canada, Allemagne
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.maxon.net/fr/about-maxon/careers)


* **[Median Technologies](https://mediantechnologies.com/)**  
  * _Entreprise de Valbonne (Sophia Antipolis) spécialisée dans l'analyse d'images médicales par IA (plateforme eyonis de détection précoce du cancer) et les services d'imagerie pour les essais cliniques en oncologie._
  * **Mots clés**: _imagerie médicale, deep learning, oncologie, scanner CT_
  * **Localisation**: Valbonne
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://mediantechnologies.com/careers/)


* **[Medicrea](https://www.medicrea.com/)** (Medicrea International (Medtronic)) 
  * _Medtech de Rillieux-la-Pape (groupe Medtronic) pionnière de la chirurgie du rachis personnalisée : planification préopératoire UNiD ASI et implants sur mesure imprimés en 3D._
  * **Mots clés**: _planification chirurgicale, imagerie médicale, fabrication additive, orthopédie, dispositif médical_
  * **Localisation**: Rillieux-la-Pape
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Design/Fabrication
  * **Domaine d'application**: Médical/Biologique


* **[Mercenaries Engineering](http://guerillarender.com/)**  
  * _Développement de logiciel de rendu (Guerilla Render) et d'animation (Rumba) pour la création de films d'animation._
  * **Mots clés**: _path tracing, Guerilla Render, animation 3D, long métrage, plugin/logiciel pour artistes, look development, Rumba_
  * **Produits**: [Guerilla Render](http://guerillarender.com/), [Rumba Animation](https://rumba-animation.com/)
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Merci-Michel](https://www.merci-michel.com/)**  
  * _Studio créatif parisien concevant jeux, mini-jeux et expériences interactives pour les marques (Red Bull, La Vache qui rit) et expositions interactives._
  * **Mots clés**: _web 3D, advergame, expérience interactive_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Commerce/Marketing/Publicité, Jeu Vidéo


* **[Meta](https://ai.meta.com/research/)**  
  * _Groupe technologique ; son laboratoire FAIR Paris (ouvert en 2015) mène des recherches en IA et vision par ordinateur (DINOv2/DINOv3)._
  * **Mots clés**: _vision par ordinateur, deep learning, IA générative, segmentation, apprentissage auto-supervisé, open source_
  * **Localisation**: États-Unis/Menlo Park, Paris, International
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, VR/AR, Reconstruction
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique
  * [_Jobs_](https://www.metacareers.com/)


* **[Method Animation](https://mediawankidsandfamily.com/)**  
  * _Société de production et d'animation de Mediawan Kids & Family (Clichy) qui développe et produit des séries et longs métrages d'animation en images de synthèse et en 2D._
  * **Mots clés**: _séries d'animation, long métrage, animation 3D, animation 2D_
  * **Remarque**: _Groupe Mediawan Kids & Family._
  * **Localisation**: Clichy
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[MIAM!](https://www.miam-animation.com/)** (MIAM! animation / MIAM! studio) 
  * _Groupe parisien de production d'animation dont le studio MIAM! studio fabrique des séries en images de synthèse temps réel (Unity, Unreal Engine)._
  * **Mots clés**: _séries d'animation, animation 3D, rendu temps réel, Unreal Engine, Unity_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[MicroFilms](https://www.microfilms.fr/)**  
  * _Machinerie de prise de vue (grues, têtes gyrostabilisées trackées) pour la télévision et la production virtuelle_
  * **Mots clés**: _machinerie de prise de vue, têtes gyrostabilisées, grues caméra, tracking caméra, production virtuelle, télévision_
  * **Localisation**: Saint-Denis
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Imagerie
  * **Domaine d'application**: Art/Evenementiel, Cinéma/Films d'Animation/VFX


* **[Microids](https://www.microids.com/)**  
  * _Éditeur et développeur de jeux vidéo d'aventure, avec studios internes à Paris et Lyon._
  * **Mots clés**: _édition de jeux, console/PC, jeu d'aventure, adaptation de licences BD, portage_
  * **Localisation**: Paris, Lyon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Microoled](https://microoled.net/)**  
  * _Fabricant de micro-écrans OLED et de lunettes connectées/AR (ActiveLook) pour viseurs et réalité augmentée._
  * **Mots clés**: _micro-écran, OLED, puce/semi-conducteur, lunettes connectées, réalité augmentée, viseur_
  * **Localisation**: Grenoble, Grenoble
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Hardware, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Sécurité/Défense


* **[Microsoft](https://www.microsoft.com/)**  
  * _Multinationale du logiciel et du cloud (Windows, Microsoft 365, Azure, Copilot), également acteur du jeu vidéo avec Xbox et de la réalité mixte._
  * **Mots clés**: _console/PC, édition de jeux, Xbox, cloud/streaming, réalité mixte, IA générative, système d'exploitation_
  * **Remarque**: _<a href=\"https://www.microsoft.com/en-us/research/research-area/graphics-multimedia/?\">Microsoft research</a> est active en informatique graphique._
  * **Localisation**: États-Unis/Redmond, International
  * **Nombres d'employés**: 228000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, IA générative (image/3D), Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.microsoft.com/)


* **[MiddleVR](https://www.middlevr.com/)** (I'm in VR (MiddleVR)) 
  * _Éditeur de logiciels de réalité virtuelle (middleware pour CAVE/casques, plateforme Improov pour revue de projet 3D immersive)._
  * **Mots clés**: _réalité virtuelle, CAVE, cluster rendering, multi-écrans, Unity, plugin/logiciel pour artistes_
  * **Localisation**: Truchtersheim
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, IHM/Haptique
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Midralgar](https://www.midralgar.fr/)**  
  * _Maison de production bordelaise (SARL Marmitafilms, nom commercial Midralgar depuis 2020) de films d'animation, documentaires et fiction, dotée depuis 2015 d'un atelier d'animation dans ses locaux à Bordeaux._
  * **Mots clés**: _animation 2D, court métrage, long métrage, séries d'animation_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Mikimo Studio](https://mikimostudio.com/)**  
  * _Studio bordelais de motion design et VFX 2D/3D fondé en 2016 (films institutionnels, génériques et séquences 3D de documentaires, habillages TV) travaillant sous Cinema 4D, Arnold, RealFlow et X-Particles._
  * **Mots clés**: _motion design, animation 3D, effets visuels, publicité_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX


* **[Mikros Animation](https://www.mikrosanimation.com/fr/)**  
  * _Studio d'animation CG (groupe Rodeo FX) produisant longs métrages et séries au rendu stylisé, notamment Orion and the Dark, La Pat' Patrouille : le film et Teenage Mutant Ninja Turtles._
  * **Mots clés**: _animation 3D, long métrage, séries d'animation, rendu stylisé, Rodeo FX_
  * **Remarque**: _Société du groupe Rodeo FX depuis 2025 (rachat après la faillite de Technicolor)._
  * **Localisation**: France/Paris, Canada/Montréal, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.mikrosanimation.com/en/people-and-culture/careers/)


* **[Milk VFX](https://www.milk-vfx.com/)**  
  * _Studio d'effets visuels britannique primé (séries haut de gamme et longs métrages) qui a ouvert en 2023 un studio à Bordeaux, aux côtés de Londres, Barcelone et Dublin._
  * **Mots clés**: _effets visuels, long métrage, séries TV, compositing_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.milk-vfx.com/careers/)


* **[Million Victories](https://millionvictories.com/)**  
  * _Studio villeurbannais de jeux mobiles massivement multijoueurs, créateur du MMORTS Million Lords._
  * **Mots clés**: _mobile, multijoueur en ligne, jeu de stratégie, free-to-play_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://millionvictories.com/join-us/)


* **[Milvue](https://www.milvue.com/)**  
  * _Start-up parisienne d'IA pour la radiologie (Milvue Suite) qui détecte et mesure les anomalies sur les radiographies dès l'acquisition._
  * **Mots clés**: _imagerie médicale, deep learning, radiologie_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Mimbus](https://mimbus.com/)**  
  * _Solutions de formation professionnelle en réalité virtuelle (bâtiment, automobile, aéronautique, industrie)._
  * **Mots clés**: _réalité virtuelle, formation professionnelle, simulateur d'entraînement, bâtiment, automobile, aéronautique, industrie/usinage_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Simulation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Miyu Productions](https://www.miyu.fr/)**  
  * _Société de production spécialisée en animation (courts, séries, longs) disposant d'un studio de fabrication à Angoulême, aux côtés de Paris et Valence._
  * **Mots clés**: _animation 2D, court métrage, séries, production_
  * **Localisation**: Angoulême, Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Mobigame](https://www.mobigame.net/)**  
  * _Studio parisien de jeux mobiles créateur d'Edge (primé à l'IGF) et de Zombie Tsunami (plus de 500 millions de téléchargements)._
  * **Mots clés**: _mobile, jeu indépendant, free-to-play_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[MocapLab](https://www.mocaplab.com/)**  
  * _Studio parisien de motion capture (corps, visage, yeux, doigts) équipé de caméras Vicon, au service du cinéma, du jeu vidéo, de la XR, des datasets IA et de la recherche._
  * **Mots clés**: _motion capture, capture faciale, capture des mains, Vicon, données d'entraînement IA_
  * **Localisation**: Paris (Aubervilliers)
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Analyse de données, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Jeu Vidéo


* **[ModaLive](https://www.modalive.fr/)**  
  * _Solution d'essayage virtuel de vêtements destinée aux marques de mode._
  * **Mots clés**: _essayage virtuel, mode/textile, e-commerce/configurateur 3D_
  * **Localisation**: Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Vision, Modélisation
  * **Domaine d'application**: Mode/Vêtements/Accessoires


* **[Modjaw](https://www.modjaw.com/fr/)**  
  * _Système de capture 4D des mouvements de la mâchoire, couplé aux scans 3D dentaires pour la CFAO dentaire._
  * **Mots clés**: _dentaire, motion capture, mâchoire, CFAO, scanner 3D, 4D_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Animation, Design/Fabrication
  * **Domaine d'application**: Médical/Biologique


* **[Modulo Pi](https://www.modulo-pi.com/)**  
  * _Concepteur français de serveurs média (Modulo Player, Modulo Kinetic) pour le mapping architectural, les spectacles, l'événementiel et les installations permanentes._
  * **Mots clés**: _serveur média, événementiel/mapping, mapping architectural, spectacle vivant, installations permanentes, Modulo Kinetic_
  * **Localisation**: Paris (Saint-Denis)
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Art/Evenementiel


* **[Moment Factory](https://momentfactory.com/)**  
  * _Studio multimédia montréalais dont le studio de Paris (depuis 2017) conçoit des expériences immersives, mappings et parcours nocturnes (AURA Invalides, Regalia à Reims, Géode)._
  * **Mots clés**: _événementiel/mapping, exposition immersive, rendu temps réel, scénographie numérique_
  * **Localisation**: Paris, Canada/Montréal
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Visualisation, IHM/Haptique
  * **Domaine d'application**: Art/Evenementiel, Patrimoine/Culture
  * [_Jobs_](https://momentfactory.com/pages/careers)


* **[Moments Lab](https://www.momentslab.com/)**  
  * _Éditeur (ex-Newsbridge) d'une plateforme d'IA multimodale d'indexation et d'édition vidéo (MXT) pour diffuseurs, studios et producteurs, ayant levé 24 M€ en 2025._
  * **Mots clés**: _vision par ordinateur, deep learning, vidéo, IA générative_
  * **Localisation**: Boulogne-Billancourt
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, IA générative (image/3D), Web/Cloud/Big Data
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.momentslab.com/careers)


* **[Moon Surgical](https://www.moonsurgical.com/)**  
  * _Start-up parisienne de robotique chirurgicale (Maestro) dont la fonction ScoPilot guide le laparoscope par vision par ordinateur temps réel._
  * **Mots clés**: _chirurgie assistée, robotique, vision par ordinateur, GPU_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, IHM/Haptique
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


* **[Motion Twin](https://motiontwin.com/)**  
  * _Studio bordelais indépendant organisé en coopérative sans hiérarchie, passé des jeux web aux jeux console/PC roguelite (Dead Cells, Windblown)._
  * **Mots clés**: _jeu indépendant, console/PC, roguelite, jeu 2D, jeux web_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Movea (TDK InvenSense)](https://invensense.tdk.com/)**  
  * _Fabricant de capteurs MEMS (inertiels, magnétiques, ultrasons) et de logiciels de fusion de capteurs pour mobiles, AR/VR, automobile et robotique ; filiale de TDK ayant absorbé Movea._
  * **Mots clés**: _capteurs inertiels, MEMS, fusion de capteurs, suivi de mouvement, réalité virtuelle, stabilisation d'image_
  * **Remarque**: _Movea, spin-off du CEA-Léti, a été rachetée par InvenSense en 2014, elle-même filiale de TDK depuis 2017 ; le site R&D de Grenoble reste actif._
  * **Localisation**: Grenoble
  * **Domaine scientifique/technique**: Acquisition, VR/AR, IHM/Haptique
  * **Domaine d'application**: Générique


* **[MPC / The Mill](https://www.themill.com/)**  
  * _Création de VFX pour le cinéma, les séries et la publicité (studios MPC et The Mill)_
  * **Mots clés**: _effets visuels, publicité, séries, long métrage, luxe_
  * **Remarque**: _MPC et The Mill, anciens studios du groupe Technicolor, ont été repris par TransPerfect en 2025 après la faillite de Technicolor, puis réunis sous la marque The Mill en juin 2026. Le site <a href="https://www.mpcvfx.com/fr/">MPC Paris</a> reste actif._
  * **Localisation**: Paris, Royaume-Uni/Londres, Belgique/Liège, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.mpcvfx.com/fr/carrieres/)


* **[My Digital Buildings](https://www.mydigitalbuildings.com/)**  
  * _Startup qui produit des jumeaux numériques de bâtiments à partir d'un réseau de scan 3D et d'une plateforme logicielle._
  * **Mots clés**: _scanner 3D, nuage de points, BIM, jumeau numérique, visite virtuelle, architecture_
  * **Localisation**: Meylan
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[MyFit Solutions](https://myfit-solutions.com/)** (Myned Corporation (MyFit Solutions)) 
  * _Start-up lyonnaise de scan 3D du corps humain par smartphone (applications et SDK marque blanche) pour la conception d'orthèses, prothèses et vêtements de compression._
  * **Mots clés**: _scanner 3D, mobile, SDK, orthopédie, mode/textile_
  * **Localisation**: Saint-Genis-Laval
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Médical/Biologique, Mode/Vêtements/Accessoires


* **[Nacon](https://www.nacongaming.com/)**  
  * _Éditeur de jeux vidéo et fabricant d'accessoires, maison mère de nombreux studios de développement._
  * **Mots clés**: _édition de jeux, console/PC, accessoires de jeu, manettes, jeu de sport_
  * **Remarque**: _Placée en redressement judiciaire en mars 2026 (période d'observation prolongée en juillet 2026)._
  * **Localisation**: Fretin, Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware
  * **Domaine d'application**: Jeu Vidéo


* **[Nalu Animation](https://www.naluanimation.com/)**  
  * _Société de production exécutive et de fabrication d'animation (layout, animation, compositing ; Totally Spies! saison 8, Lana Longuebarbe, Mumfie) qui a ouvert en 2026 un studio aux Ateliers Magelis._
  * **Mots clés**: _production exécutive, layout, animation, compositing, séries TV_
  * **Localisation**: Angoulême, Aubervilliers
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Naver Labs Europe](https://europe.naverlabs.com/)**  
  * _Centre de recherche européen de Naver en IA, vision par ordinateur 3D et robotique (DUSt3R, MASt3R)._
  * **Mots clés**: _vision par ordinateur, deep learning, robotique, modèles de fondation 3D, modèle de corps humain_
  * **Localisation**: Meylan, Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Générique


* **[Navya](https://www.navya.tech/)** (Navya Mobility) 
  * _Concepteur villeurbannais de véhicules autonomes (navettes, tracteurs) et de leur pile logicielle Navya Drive, dont la perception multi-capteurs._
  * **Mots clés**: _véhicule autonome, lidar, vision par ordinateur, robotique_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


* **[NDunes](https://www.ndunes.com/)**  
  * _Logiciel de visualisation 3D pour les projets d'énergies renouvelables (éolien, solaire, stockage)_
  * **Mots clés**: _énergies renouvelables, éolien, solaire, génération d'environnements 3D, rendu temps réel, étude paysagère_
  * **Localisation**: France/Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Visualisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Énergie/Environnement, Architecture/BTP/Urbanisme


* **[Neels](https://neels.fr/)**  
  * _Studio de post-production spécialisé en animation 3D et effets visuels (animation, lookdev, lighting, FX, compositing, matchmove)._
  * **Mots clés**: _animation 3D, effets visuels, look development, lighting, compositing, publicité_
  * **Localisation**: Saint-Ouen
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Netcarbon](https://www.netcarbon.fr/)**  
  * _Éditeur bordelais d'une application de cartographie environnementale qui analyse l'imagerie satellite et aérienne par IA pour mesurer et simuler l'impact de projets d'aménagement et de renaturation._
  * **Mots clés**: _imagerie satellite, SIG, deep learning, cartographie, simulation_
  * **Localisation**: Bordeaux, Mérignac
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Analyse de données, Web/Cloud/Big Data
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement, Architecture/BTP/Urbanisme


* **[Neural Concept](https://www.neuralconcept.com/)**  
  * _Plateforme d'IA pour l'ingénierie qui prédit les performances physiques de designs 3D (CFD, structure) afin d'accélérer la conception, utilisée par des constructeurs automobiles et aéronautiques._
  * **Mots clés**: _deep learning, simulation physique, CAO, conception assistée par IA, automobile, aéronautique_
  * **Localisation**: Suisse/Lausanne, Allemagne/Munich
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.neuralconcept.com/careers)


* **[Neuronality](https://neuronality.com/)**  
  * _Petit studio de Molsheim qui développe depuis 2015 des jeux multijoueurs en ligne jouables dans le navigateur, dont le shooter spatial Starblast.io et Neuronball._
  * **Mots clés**: _multijoueur en ligne, jeu indépendant, jeu navigateur_
  * **Localisation**: Molsheim
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo


* **[New Imaging Technologies](https://new-imaging-technologies.com/)**  
  * _Concepteur et fabricant de capteurs et caméras CMOS à grande dynamique et InGaAs SWIR pour la vision industrielle, la défense et la science._
  * **Mots clés**: _capteur d'image, caméra, infrarouge, vision industrielle_
  * **Localisation**: Verrières-le-Buisson
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Hardware, Imagerie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Sécurité/Défense


* **[Newtone Technologies](https://qima-lifesciences.com/)**  
  * _Research & Innovation company expert in Image Analysis for skin and hair appearance._
  * **Mots clés**: _imagerie cosmétique, analyse d'images de la peau, cheveux, deep learning, essais cliniques, ColorFace_
  * **Remarque**: _Intégrée au groupe QIMA Life Sciences depuis 2021._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Next Limit](https://nextlimit.com/)**  
  * _Éditeur espagnol de logiciels de simulation et de rendu, créateur de RealFlow (simulation de fluides pour VFX) et de Maxwell Render._
  * **Mots clés**: _simulation de fluides, RealFlow, Maxwell Render, rendu photoréaliste, effets visuels, particules_
  * **Produits**: [RealFlow](https://realflow.com/), [Maxwell Render](https://maxwellrender.com/)
  * **Localisation**: Espagne/Madrid
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[NHImages](https://nhimages.fr/)**  
  * _Studio strasbourgeois de perspectives 3D fondé par un architecte DPLG, qui produit images et films de synthèse pour concours d'architecture et promotion immobilière._
  * **Mots clés**: _architecture, rendu photoréaliste_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Nightshift](https://www.nightshift.fr/)**  
  * _Société parisienne (et New York) de post-production pour le luxe, la mode et la beauté : montage, étalonnage, finishing et VFX, print et contenus produits._
  * **Mots clés**: _post-production, effets visuels, publicité, luxe_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires
  * [_Jobs_](https://www.nightshift.fr/join-us/)


* **[Nobody Studio](https://nobody-studio.com/)**  
  * _Studio 3D d'externalisation en lighting, compositing, modélisation, temps réel et previs pour l'animation, les VFX et le jeu vidéo._
  * **Mots clés**: _externalisation, lighting, compositing, prévisualisation, cinématiques de jeu, rendu temps réel, AAA_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://nobody-studio.com/jobs/)


* **[NOID](https://www.noid-studio.com/)**  
  * _Studio d'effets visuels pour longs métrages et séries (environnements, créatures, effets) appuyé sur un pipeline maison._
  * **Mots clés**: _effets visuels, long métrage, séries TV, environnements numériques, créatures, matte painting, pipeline maison_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.noid-studio.com/join-us)


* **[Normaal Angoulême](https://normaal.fr/)**  
  * _Studio du producteur Normaal Animation dédié à la fabrication de dessins animés 2D et stop motion (Barbapapa, Zouk, Unicorn Wars en prestation)._
  * **Mots clés**: _animation 2D, stop motion, séries TV_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Nova-box](https://www.nova-box.com/)**  
  * _Studio et éditeur bordelais de jeux narratifs (romans graphiques interactifs After the Wane, End of Lines) pour PC, Mac, Linux et Switch, fondé en 2007._
  * **Mots clés**: _jeu indépendant, console/PC, jeu narratif_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[NovaQuark](https://www.novaquark.com/)**  
  * _Studio parisien créateur du jeu bac à sable spatial Dual Universe / myDU, monde persistant entièrement éditable en voxels, et développant un jeu PC/console sous Unreal Engine 5._
  * **Mots clés**: _voxels, bac à sable, multijoueur en ligne, console/PC, Unreal Engine, Dual Universe_
  * **Localisation**: Canada/Montréal, France/Paris, Paris
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Simulation, Animation, Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/novaquark/jobs)


* **[Novark Entertainment](https://www.novarkentertainment.com/)**  
  * _Jeune studio fondé en 2024 qui développe son premier jeu narratif (Rise//Protocol, 2e promotion de l'incubateur jeu vidéo de Magelis) et propose des services à d'autres studios._
  * **Mots clés**: _jeu vidéo, jeu narratif, incubateur Magelis_
  * **Localisation**: Saint-Michel
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Novelab](https://www.novelab.io/)**  
  * _Studio parisien d'expériences immersives primé (VR, AR, installations interactives) pour le divertissement, les musées, les marques et la formation._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, installations interactives, patrimoine/musée, Apple Vision Pro, jeu VR_
  * **Localisation**: Paris
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[Novo3D](http://www.novo3d.fr/)**  
  * _Société angoumoise fondée en 2013, spécialisée dans les environnements 3D temps réel et la réalité virtuelle (musées virtuels, restitutions de sites patrimoniaux disparus, visioguides VR), issue de la prévisualisation architecturale._
  * **Mots clés**: _3D temps réel, réalité virtuelle, musée virtuel, restitution patrimoniale, visite virtuelle_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, VR/AR
  * **Domaine d'application**: Patrimoine/Culture, Loisir Interactif/Immersion/Metavers, Architecture/BTP/Urbanisme


* **[nTop](https://www.ntop.com/)**  
  * _Éditeur de nTop, logiciel de conception paramétrique fondé sur la modélisation implicite, permettant de générer et valider automatiquement des géométries complexes (aéronautique, propulsion, sport auto)._
  * **Mots clés**: _surfaces implicites, conception générative, CAO, fabrication additive, aéronautique, simulation physique_
  * **Localisation**: États-Unis/New York
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://jobs.gem.com/ntop)


* **[Nurea](https://nurea-soft.com/)**  
  * _Éditeur de logiciels d'analyse automatique d'imagerie vasculaire (anévrismes aortiques) avec segmentation et reconstruction 3D par IA._
  * **Mots clés**: _imagerie médicale, deep learning, segmentation, vasculaire, aorte, planification chirurgicale_
  * **Localisation**: Bègles
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Visualisation
  * **Domaine d'application**: Médical/Biologique


* **[NVidia](https://www.nvidia.com/)**  
  * _Concepteur américain de GPU et de plateformes de calcul (CUDA, RTX, Omniverse) pour le jeu vidéo, la création numérique, l'IA, le HPC et la robotique._
  * **Mots clés**: _GPU, puce/semi-conducteur, ray tracing, deep learning, rendu temps réel, robotique, véhicule autonome_
  * **Remarque**: _NVidia Research est présent partout dans le monde, dont en France._
  * **Localisation**: États-Unis/California/Santa Clara, France/Paris, International
  * **Nombres d'employés**: 42000
  * **Domaine scientifique/technique**: Hardware, Rendu temps réel/Moteurs 3D, IA générative (image/3D), Simulation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite)


* **[Ocellus](https://ocellus-studio.com/)** (Ocellus Services) 
  * _Studio lyonnais de game art stylisé 2D/3D et de développement (Ocellus Services) ayant travaillé sur Fortnite, Clash of Clans ou Brawl Stars, qui développe aussi ses propres jeux (Ocellus Games)._
  * **Mots clés**: _game art, co-développement, cinématiques de jeu, rendu stylisé, mobile_
  * **Remarque**: _Le site mentionne aussi une entité Ocellus d.o.o. (Croatie) ; Ocellus Games (SIREN 901239269) porte les IP propres._
  * **Localisation**: Lyon
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Modélisation, Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://ocellus-studio.com/careers)


* **[Octarina](https://www.octarina.com/)**  
  * _Société aixoise fondée en 2011 qui développe des applications interactives 3D en réalité virtuelle et augmentée, ainsi que des solutions de vision par ordinateur et deep learning (Pocket Vision)._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, vision par ordinateur, deep learning, Unity_
  * **Localisation**: Aix-en-Provence
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Vision, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.octarina.com/emplois/)


* **[Oh BiBi](https://www.ohbibi.com/)**  
  * _Studio parisien de jeux mobiles free-to-play multijoueurs, dont Ratchet & Clank: Ranger Rumble développé avec PlayStation Studios et Insomniac Games._
  * **Mots clés**: _mobile, free-to-play, multijoueur en ligne, jeu casual, adaptation de licences_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Oktal-SE](https://www.oktal-se.fr/)** (OKTAL Synthetic Environment) 
  * _Éditeur de SE-Workbench, simulation physique de capteurs (visible, infrarouge, lidar, radar) par rendu de scènes 3D. Groupe Sogeclair._
  * **Mots clés**: _simulation de capteurs, infrarouge, radar, lidar, défense, aéronautique, données synthétiques, SE-Workbench_
  * **Localisation**: Toulouse
  * **Domaine scientifique/technique**: Simulation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation


* **[Old Skull Games](https://www.oldskullgames.com/)**  
  * _Studio de développement et co-développement de jeux vidéo console, PC et mobile._
  * **Mots clés**: _co-développement, console/PC, mobile, jeu indépendant_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Omi](https://www.omi.so/)**  
  * _Plateforme parisienne de jumeaux numériques 3D de produits couplés à l'IA générative pour produire packshots et visuels marketing (partenariat L'Oréal, série A de 13 M€ en 2024)._
  * **Mots clés**: _IA générative, rendu photoréaliste, jumeau numérique, e-commerce, web 3D_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: IA générative (image/3D), Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires
  * [_Jobs_](https://omivideo.notion.site/Omi-I-Job-Center-dfdeffd012374fa0827b3ad5afcc6c0a)


* **[One of Us Paris](https://www.oneofusvfx.com/)**  
  * _Studio parisien (ouvert en 2021) du studio d'effets visuels londonien One of Us : VFX pour longs métrages, séries et publicités._
  * **Mots clés**: _effets visuels, long métrage, séries TV, compositing_
  * **Remarque**: _Filiale française du studio One of Us (Londres)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://apply.workable.com/one-of-us/)


* **[OneOrtho Medical](https://oneortho-medical.com)** (One Ortho) 
  * _Medtech de Saint-Genis-Laval qui crée des jumeaux numériques 3D de patients à partir d'imagerie (segmentation par IA) pour la planification chirurgicale, les guides sur mesure imprimés en 3D et la réalité mixte._
  * **Mots clés**: _imagerie médicale, segmentation, jumeau numérique, planification chirurgicale, fabrication additive, réalité mixte_
  * **Localisation**: Saint-Genis-Laval
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Design/Fabrication, VR/AR
  * **Domaine d'application**: Médical/Biologique


* **[Opia Games](https://store.steampowered.com/app/3524780/)**  
  * _Studio indépendant installé aux Ateliers Magelis, auteur du jeu de plateforme 3D The Lone Blade (2023) et du FPS Sydless (2026)._
  * **Mots clés**: _jeu vidéo, jeu 3D, FPS, plateforme_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Optiive](https://optiive.com/)** (Optiive Rise Reality) 
  * _Start-up issue du laboratoire ICube qui conçoit et fabrique des moteurs optiques et guides d'onde pour lunettes de réalité augmentée._
  * **Mots clés**: _réalité augmentée, optique, afficheur, lunettes AR_
  * **Localisation**: Illkirch-Graffenstaden
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Hardware
  * **Domaine d'application**: Médical/Biologique, Loisir Interactif/Immersion/Metavers


* **[optim.aize](https://optimaize.fr/)**  
  * _Start-up bordelaise qui édite YAAPS, plateforme de jumeau numérique d'infrastructures combinant capteurs IoT, imagerie drone et satellite (InSAR), IA et SIG._
  * **Mots clés**: _jumeau numérique, SIG, imagerie satellite, drone, photogrammétrie_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Vision, Web/Cloud/Big Data, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement, Architecture/BTP/Urbanisme


* **[OptiTrack](https://optitrack.com/)**  
  * _Fabricant américain (NaturalPoint) de systèmes de motion capture optique utilisés en production virtuelle, tracking VR, biomécanique et robotique._
  * **Mots clés**: _motion capture, caméras infrarouges, production virtuelle, tracking caméra, réalité virtuelle, biomécanique, robotique_
  * **Localisation**: États-Unis/Oregon/Corvallis
  * **Domaine scientifique/technique**: Acquisition, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://optitrack.com/careers)


* **[Orbit Studio](https://orbit.studio/)**  
  * _Studio d'animation 3D bordelais spécialisé dans les contenus haut de gamme : films de marque pour le luxe, projections monumentales et immersives, motion design 3D et VFX pour prise de vue réelle._
  * **Mots clés**: _animation 3D, motion design, effets visuels, exposition immersive, publicité_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel


* **[Orus](https://www.orus.space/)**  
  * _Start-up de Valbonne (Sophia Antipolis) fondée en 2024 qui développe une constellation de microsatellites d'imagerie hyperspectrale haute résolution pour l'agriculture, l'environnement, la défense et les infrastructures._
  * **Mots clés**: _imagerie satellite, imagerie hyperspectrale, observation de la Terre, new space_
  * **Localisation**: Valbonne
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement


* **[Oslandia](https://oslandia.com/)**  
  * _Société de services et d'édition open source en SIG et 3D géospatiale (QGIS, Giro3D, py3dtiles, PostGIS)._
  * **Mots clés**: _SIG, open source, web 3D, QGIS, PostGIS, nuage de points, formation professionnelle_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Visualisation, Web/Cloud/Big Data, Géométrie
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[OSome Studio](https://www.osome-studio.com/)**  
  * _Studio lyonnais fondé en 2013 qui développe des jeux PC et consoles sous licence (Astérix & Obélix XXL 2/3, Les Schtroumpfs, Garfield)._
  * **Mots clés**: _console/PC, jeu sous licence, jeunesse, jeu d'action_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Otoy](https://home.otoy.com/)**  
  * _Éditeur d'OctaneRender (rendu GPU path tracing) et du Render Network de rendu distribué, et créateur de la technologie de scan facial Lightstage._
  * **Mots clés**: _path tracing, OctaneRender, GPU, ferme de rendu, cloud/streaming, Lightstage, capture faciale_
  * **Produits**: Octane Render
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu offline/VFX, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[OtterWays](https://otterways.com/)**  
  * _Studio de jeu vidéo indépendant d'Ille-et-Vilaine qui crée des jeux narratifs d'exploration avec des outils libres._
  * **Mots clés**: _jeu indépendant, logiciel libre, jeu narratif_
  * **Localisation**: Louvigné-de-Bais
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Outsight](https://www.outsight.ai/)**  
  * _Plateforme logicielle de traitement de données lidar 3D (perception, suivi, analyse de flux) pour aéroports, gares et industrie._
  * **Mots clés**: _lidar, nuage de points, suivi de personnes, analyse de flux, aéroports, vision par ordinateur_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Vision, Acquisition, Analyse de données
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


* **[Overlay](https://www.figmin.com/)**  
  * _Éditeur de Figmin XR, application de réalité mixte pour dessiner, créer, jouer et prototyper en 3D (Meta Quest, Vision Pro, Android XR)._
  * **Mots clés**: _réalité mixte, création 3D en VR, Figmin XR, Meta Quest, jeux physiques, prototypage spatial_
  * **Produits**: Figmin XR
  * **Localisation**: États-Unis/Portland
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Parangon](https://parangon.eu/)**  
  * _Jeune studio d'animation strasbourgeois (2021) qui fabrique animation 2D traditionnelle, décors, FX et compositing pour courts et longs métrages (séquences animées de Hiver à Sokcho)._
  * **Mots clés**: _animation 2D, long métrage, court métrage, compositing_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Parrot](https://www.parrot.com/)**  
  * _Constructeur parisien de drones professionnels (ANAFI) intégrant caméras, vision embarquée et cartographie, maison mère de l'éditeur de photogrammétrie Pix4D._
  * **Mots clés**: _drone, vision embarquée, photogrammétrie, cartographie_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Hardware, Acquisition, Vision, Reconstruction
  * **Domaine d'application**: Géospatial/Cartographie, Sécurité/Défense
  * [_Jobs_](https://www.parrot.com/fr/jobs)


* **[Passion Paris](https://www.passion-pictures.com/)** (Passion Paris Production) 
  * _Studio d'animation parisien du groupe Passion Pictures : animation 2D, 3D stylisée ou full CG, stop motion et techniques mixtes pour publicités, séries, longs métrages et cinématiques de jeux._
  * **Mots clés**: _animation 2D, animation 3D, publicité, séries d'animation, cinématiques_
  * **Remarque**: _Filiale française de Passion Pictures (Londres)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité, Jeu Vidéo


* **[Passtech Games](https://www.passtechgames.com)**  
  * _Studio lyonnais de jeux d'action roguelite console/PC fondé en 2012 (Curse of the Dead Gods, Ravenswatch)._
  * **Mots clés**: _jeu indépendant, console/PC, roguelite, jeu d'action, multijoueur en ligne_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Pastagames](https://www.pastagames.com/)**  
  * _Studio indépendant de jeux vidéo (Rayman Mini, KarmaZoo, Arkanoid – Eternal Battle)._
  * **Mots clés**: _jeu indépendant, console/PC, mobile, Apple Arcade, multijoueur en ligne, Rayman Mini_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Perception4D](https://perception4d.com/)**  
  * _Système d'acquisition par caméra et scanners, de visualisation scientifique et d'approches d'IA pour la Vision._
  * **Mots clés**: _lidar, nuage de points, SLAM, vision par ordinateur, deep learning, open source, visualisation scientifique_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 5
  * **Domaine scientifique/technique**: Vision, Acquisition, Visualisation, Géométrie
  * **Domaine d'application**: Générique


* **[Personne n'est parfait !](https://personnenestparfait.fr/)**  
  * _Studio rennais de fabrication d'animation en stop motion et 2D (plateaux de tournage, postes 2D), lauréat France 2030 « Grande Fabrique de l'image »._
  * **Mots clés**: _stop motion, animation 2D, séries d'animation_
  * **Remarque**: _Studio frère de Vivement Lundi !_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Phasics](https://www.phasics.com/)**  
  * _Société de Paris-Saclay qui conçoit des analyseurs de front d'onde à haute résolution pour la métrologie optique, l'optique adaptative et l'imagerie de phase quantitative._
  * **Mots clés**: _optique, imagerie de phase, métrologie_
  * **Localisation**: Saint-Aubin
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Imagerie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique


* **[Philomec](https://philomec.com/)**  
  * _Bureau d'études marseillais en mécanique et biomécanique qui réalise modélisation 3D, simulation par éléments finis du corps humain, rendus photoréalistes et impression 3D pour les équipements sportifs et de protection._
  * **Mots clés**: _simulation physique, biomécanique, CAO, éléments finis_
  * **Localisation**: Marseille
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO


* **[Photoroom](https://www.photoroom.com/)**  
  * _Éditeur d'une application et d'API d'édition d'images par IA générative (détourage, génération de fonds et de visuels produits)._
  * **Mots clés**: _IA générative, détourage, retouche photo, e-commerce/configurateur 3D, génération vidéo, API, applications mobiles_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Imagerie, Vision
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/photoroom)


* **[Picsellia](https://www.picsellia.com/)**  
  * _Éditeur toulousain d'une plateforme MLOps dédiée à la vision par ordinateur (gestion et annotation de données image, entraînement, déploiement et suivi de modèles), utilisée par SGS, RTE ou Pellenc._
  * **Mots clés**: _vision par ordinateur, MLOps, annotation d'images, IA_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Pipeline/Outils de production, Web/Cloud/Big Data
  * **Domaine d'application**: Générique, Industrie/Manufacturing/CAO


* **[Piece of Cake Studios](https://www.pieceofcake-studios.com/)**  
  * _Studio parisien fondé par des anciens d'Ankama, Eden Games et Eugen Systems, spécialiste des jeux 3D coopératifs (Hacktag, Dark Hours, jeu d'horreur coopératif vendu à plus de 500 000 exemplaires)._
  * **Mots clés**: _jeu coopératif, multijoueur en ligne, console/PC, jeu indépendant_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Piranèse](https://studiopiranese.com/)**  
  * _Maison de production 3D (Boulogne-Billancourt) spécialisée dans le retail, la mode/beauté et l'architecture : images, animations, réalité virtuelle et données 3D._
  * **Mots clés**: _3D, architecture, réalité virtuelle, retail, rendu photoréaliste_
  * **Localisation**: Boulogne-Billancourt
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Visualisation, VR/AR, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Architecture/BTP/Urbanisme


* **[Pixacare](https://www.pixacare.com/)**  
  * _Éditeur strasbourgeois d'une plateforme de photographie médicale dont l'IA mesure automatiquement les plaies chroniques à partir d'une photo (dispositif médical CE IIa)._
  * **Mots clés**: _vision par ordinateur, deep learning, segmentation, imagerie médicale, dispositif médical_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Imagerie
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://pixacare.welcomekit.co/)


* **[Pixee Medical](https://pixee-medical.com/)**  
  * _Navigation chirurgicale en réalité augmentée par lunettes connectées et vision par ordinateur pour la chirurgie orthopédique._
  * **Mots clés**: _réalité augmentée, chirurgie assistée, orthopédie, navigation chirurgicale, vision par ordinateur, lunettes connectées_
  * **Localisation**: Besançon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: VR/AR, Vision, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Pixel Wizards](https://pixel-wizards.com/)**  
  * _Studio de jeux indépendants fondé à Paris en 2016, aujourd'hui basé à Bordeaux, développeur et éditeur de Chessaria: The Tactical Adventure, jeu tactique inspiré des échecs._
  * **Mots clés**: _jeu indépendant, RPG tactique, échecs, puzzle_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://pixel-wizards.com/jobs/)


* **[Pixelnest Studio](https://pixelnest.io/)**  
  * _Studio indépendant rennais de deux personnes (Steredenn) qui développe ses jeux et propose du développement Unity, de la tech art, des VFX et de la 3D._
  * **Mots clés**: _jeu indépendant, Unity, game art, tech art_
  * **Remarque**: _Très petite structure (2 associés)._
  * **Localisation**: Rennes
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Pixience](https://www.pixience.com/)**  
  * _Fabricant toulousain de systèmes d'imagerie dermatologique : vidéodermoscope C-Cube à restitution colorimétrique TrueColors, photographie corps entier BodyMapper et logiciels d'analyse 2D/3D de la peau._
  * **Mots clés**: _imagerie dermatologique, dermoscopie, colorimétrie, analyse cutanée_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique


* **[Pixstart](https://pixstart.io/)**  
  * _Start-up toulousaine de services de surveillance environnementale par satellite (Waterwatch, Woodwatch, Ecoscan, Buildspot) pour les gestionnaires d'eau, de forêts et d'infrastructures._
  * **Mots clés**: _imagerie satellite, surveillance environnementale, télédétection_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement


* **[Playdigious](https://playdigious.com/)**  
  * _Éditeur et studio de portage parisien qui adapte et optimise des jeux PC/console premium pour mobile (Dead Cells, Chants of Sennaar, Northgard...)._
  * **Mots clés**: _portage, mobile, co-développement, optimisation_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Playrion](https://www.playrion.com/)**  
  * _Studio de Montrouge (2010) de jeux de gestion et simulation sur mobile et PC (Airlines Manager, Airport Simulator: First Class), ancien studio interne de Paradox Interactive racheté par Trophy Games en 2026._
  * **Mots clés**: _mobile, jeu de gestion, simulation, free-to-play_
  * **Localisation**: Montrouge
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[Playtouch](https://playtouch.net/)**  
  * _Studio de jeux casual HTML5 fondé en 2010 à Roquefort-les-Pins (près de Sophia Antipolis), avec une filiale de production à Maurice, qui a développé et auto-édité plus de 400 jeux instantanés pour le web, le mobile, les TV connectées et l'automobile._
  * **Mots clés**: _jeu mobile, HTML5, jeux casual, web_
  * **Localisation**: Roquefort-les-Pins
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo


* **[Playwing](https://www.playwing.com/)**  
  * _Développeur et éditeur indépendant fondé en 2017 (Playwing Ltd, établissement à Bordeaux) auteur du jeu multijoueur en ligne de combats de dragons Century: Age of Ashes et du jeu de stratégie Instant War._
  * **Mots clés**: _multijoueur en ligne, console/PC, mobile, Unreal Engine_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.playwing.com/#careers)


* **[Pollen Robotics](https://pollen-robotics.com/)**  
  * _Start-up bordelaise, filiale de Hugging Face depuis 2025, qui conçoit des robots humanoïdes et expressifs open source (Reachy 2, Reachy Mini) avec perception par caméras et téléopération en réalité virtuelle._
  * **Mots clés**: _robotique, vision par ordinateur, téléopération, réalité virtuelle, open source_
  * **Remarque**: _Rachetée par Hugging Face (non présente dans le listing)._
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, VR/AR, Hardware
  * **Domaine d'application**: Robotique/Systèmes autonomes, Générique


* **[PopcornFX](https://www.popcornfx.com/)**  
  * _Suite d'outils de création et moteur runtime d'effets de particules temps réel, intégrée à Unreal Engine, Unity, Godot et O3DE et utilisée dans des jeux AAA (Forza Horizon, WWE 2K)._
  * **Mots clés**: _middleware, effets de particules, rendu temps réel, Unreal Engine, Unity, plugin/logiciel pour artistes, programmation visuelle_
  * **Remarque**: _Développé par la société Persistant Studios._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[POWER.xyz](https://power.xyz/)**  
  * _Plateforme française de 3D et d'IA générative pour les marques (jumeaux 3D produits, packshots, visuels lifestyle, WebAR, configurateurs), ex-Metav.rs, fondée en 2022 par Simon et Clément Foucher._
  * **Mots clés**: _IA générative, web 3D, configurateur 3D, réalité augmentée, e-commerce_
  * **Localisation**: Angers, Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: IA générative (image/3D), Web/Cloud/Big Data, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité
  * [_Jobs_](https://power.xyz/company/careers)


* **[PowerZ](https://powerz.tech/fr-fr/)**  
  * _Studio de Montreuil qui développe PowerZ, jeu éducatif d'aventure en 3D sans publicité pour les 6-12 ans (maths, géographie, grammaire, histoire)._
  * **Mots clés**: _jeu éducatif, serious game, mobile, 3D temps réel_
  * **Localisation**: Montreuil
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo, Entrainement/Formation/Serious Game


* **[Praxinos](https://www.praxinos.coop/)**  
  * _Développement d'outils créatifs 2D pour l'animation sous Unreal Engine (Odyssey) et services de développement Unreal._
  * **Mots clés**: _Unreal Engine, animation 2D, Odyssey, plugin/logiciel pour artistes, prestations de développement_
  * **Remarque**: _SARL Coopérative, mot clés: Animation 2D, Storyboard, Drawing, Realtime 3D_
  * **Produits**: Iliad, Epos, Odyssey, Ulis, etc.
  * **Localisation**: France/Metz
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.praxinos.coop/job.php)


* **[Pretty Simple](https://prettysimplegames.com/)**  
  * _Studio parisien de jeux mobiles free-to-play d'enquête et d'objets cachés (Criminal Case, Sorcery School), plus de 100 millions de joueurs._
  * **Mots clés**: _mobile, free-to-play, jeu casual, objets cachés, jeu social_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[preWatch](https://www.prewatch.io/)**  
  * _Jeune société de Changé qui réalise par capture 3D et lidar sur site des jumeaux numériques photoréalistes de lieux réels, consultables dans un navigateur, pour l'événementiel, l'audiovisuel (repérages) et les gestionnaires de sites._
  * **Mots clés**: _jumeau numérique, lidar, capture 3D, visite virtuelle web_
  * **Localisation**: Changé
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, Web/Cloud/Big Data
  * **Domaine d'application**: Art/Evenementiel, Architecture/BTP/Urbanisme, Cinéma/Films d'Animation/VFX


* **[Primaa](https://primaalab.com/)**  
  * _Diagnostic du cancer par IA et analyse d'images de lames histologiques (Cleo Breast, Cleo Skin)._
  * **Mots clés**: _diagnostic, anatomopathologie, deep learning, oncologie, lames histologiques, CE-IVDR_
  * **Localisation**: Paris, Orsay
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Prodways](https://www.prodways.com/)**  
  * _Concepteur et fabricant français d'imprimantes 3D industrielles (technologie MOVINGLight) et de matériaux, notamment pour le dentaire et l'industrie._
  * **Mots clés**: _impression 3D, fabrication additive, CAO_
  * **Localisation**: Montigny-le-Bretonneux
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique


* **[Prométhée Earth Intelligence](https://promethee.earth/)**  
  * _Start-up aixoise fondée en 2020 qui développe une constellation de nanosatellites d'observation de la Terre et des services de géo-intelligence fondés sur l'imagerie spatiale._
  * **Mots clés**: _imagerie satellite, observation de la Terre, géo-intelligence, SIG_
  * **Localisation**: Aix-en-Provence
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Sécurité/Défense, Énergie/Environnement


* **[Prophesee.AI](https://www.prophesee.ai/)**  
  * _Concepteur français de capteurs de vision événementielle (neuromorphique) et de caméras associées pour détecter et suivre des mouvements rapides (industrie, défense, robotique)._
  * **Mots clés**: _capteur événementiel, vision par ordinateur, puce/semi-conducteur, neuromorphique, défense, robotique, industrie/usinage_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Générique


* **[Protozoaire](https://www.protozoaire.com/)**  
  * _Studio strasbourgeois de production et d'animation 3D qui réalise depuis plus de 20 ans animation 3D et effets visuels pour séries, longs et courts métrages._
  * **Mots clés**: _animation 3D, effets visuels, séries d'animation, long métrage_
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Pump](https://www.univers-pump.fr/)** (Arfmat Studio (Pump)) 
  * _Studio de création 3D et motion design basé à Lyon et Paris (images et animations 3D, VFX, réalité virtuelle) pour l'industrie, les marques et l'audiovisuel._
  * **Mots clés**: _animation 3D, motion design, effets visuels, publicité_
  * **Remarque**: _Studio VFX associé : Behind (https://behind-studio.fr/, SIREN 884799529, même adresse 1 impasse Brachet, Lyon 8e)._
  * **Localisation**: Lyon, Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX


* **[Purple Meadows](https://www.purple-meadows.com/)**  
  * _Studio de jeux narratifs à forte direction artistique, inspirés des contes et de la dark fantasy, qui développe Blue Bird's Song et fait de la prestation._
  * **Mots clés**: _jeu vidéo, jeu narratif, prestation_
  * **Localisation**: Gond-Pontouvre
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Qarnot Computing](https://qarnot.com/)**  
  * _Fournisseur français de cloud HPC bas carbone (récupération de chaleur des serveurs) pour les simulations d'ingénieurs et le rendu, racheté par Scaleway._
  * **Mots clés**: _calcul haute performance, cloud/streaming, bas carbone, simulation physique, ferme de rendu, Scaleway_
  * **Remarque**: _Racheté par Scaleway (groupe Iliad) en juillet 2026._
  * **Localisation**: Paris (Montrouge)
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Générique


* **[QB Technologies](https://qbtechnologies.fr/)**  
  * _Bureau d'études mayennais en réalité virtuelle et augmentée, tracking, robotique et électronique embarquée : stands de tir XR, tables tangibles en réalité augmentée, arènes free-roaming en réalité mixte et robots de cadrage photo (QBOT) utilisés par l'AFP._
  * **Mots clés**: _tracking, réalité mixte, interfaces tangibles, free roaming, bureau d'études XR_
  * **Localisation**: Louvigné
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Hardware, IHM/Haptique, Acquisition
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Loisir Interactif/Immersion/Metavers, Sécurité/Défense


* **[Quantacell](https://www.quantacell.com/)**  
  * _Analyse d'images biomédicales par IA (histologie, organoïdes 3D) : logiciels HistoMetriX, AssayScope._
  * **Mots clés**: _imagerie médicale, histologie, organoïdes 3D, deep learning, microscopie, segmentation_
  * **Localisation**: France/Montpellier
  * **Nombres d'employés**: 5
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Quantic Dream](https://www.quanticdream.com/fr)**  
  * _Studio et éditeur français de jeux narratifs AAA (Heavy Rain, Beyond: Two Souls, Detroit: Become Human), réputé pour la performance capture, avec des studios à Paris et Montréal._
  * **Mots clés**: _AAA, console/PC, jeu narratif, motion capture, capture faciale, moteur maison, édition de jeux_
  * **Remarque**: _Filiale de NetEase Games depuis 2022._
  * **Localisation**: Paris, Canada/Montréal
  * **Nombres d'employés**: 400
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://jobs.eu.lever.co/quanticdream)


* **[QuantifiCare](https://www.quantificare.com/)**  
  * _Société de Sophia Antipolis (Biot) issue de l'Inria (2001) qui conçoit des systèmes de photographie 3D (LifeViz) et des logiciels d'analyse d'images pour la dermatologie, la chirurgie esthétique et les essais cliniques._
  * **Mots clés**: _imagerie médicale, photographie 3D, stéréophotogrammétrie, dermatologie_
  * **Localisation**: Biot
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Reconstruction
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.quantificare.com/careers/)


* **[R&D Vision](https://www.rd-vision.com/)**  
  * _Groupe spécialisé dans la conception de systèmes d'imagerie (caméras rapides, vision industrielle, solutions optiques et IA) pour l'aérospatial, le ferroviaire et l'industrie, avec un bureau à Bordeaux._
  * **Mots clés**: _vision par ordinateur, caméras rapides, deep learning, aéronautique, métrologie_
  * **Remarque**: _Siège à Saint-Maur-des-Fossés ; établissement bordelais de très petite taille (1-2 salariés). Effectif = tranche de l'entreprise._
  * **Localisation**: Saint-Maur-des-Fossés, Bordeaux
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Vision, Imagerie
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO


* **[Ranch Computing](https://www.ranchcomputing.com/)**  
  * _Ferme de rendu en ligne CPU/GPU pour les logiciels 3D (Arnold, V-Ray, Redshift, Octane, Cycles, RenderMan...)._
  * **Mots clés**: _ferme de rendu, cloud/streaming, GPU, path tracing, Blender, Houdini_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Web/Cloud/Big Data
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Générique


* **[Ratel Studio](https://ratel-studio.com/)**  
  * _Studio de jeux vidéo girondin (Espiet) qui développe Toria, MMORPG sandbox médiéval, ainsi que le jeu tactique spatial Hunter Oden et le jeu mobile Onima._
  * **Mots clés**: _multijoueur en ligne, jeu indépendant, mobile, console/PC_
  * **Localisation**: Espiet
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[RealityCAD](https://www.realitycad.com/)**  
  * _Start-up lavalloise éditrice de RCad'Touch, application qui permet de visualiser et modifier en réalité virtuelle ou augmentée des projets 3D issus de logiciels de CAO, pour l'industrie._
  * **Mots clés**: _CAO immersive, réalité virtuelle, revue de conception, CFAO_
  * **Localisation**: Laval
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Design/Fabrication
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Rebound](https://www.reboundcg.com/)**  
  * _Studio de développement et d'édition de jeux vidéo fondé en 2017 (Rebound Capital Games), auteur de la série Tennis Manager et du roguelite Furyball Rogue Revenge, qui propose aussi du développement pour d'autres studios._
  * **Mots clés**: _jeu vidéo, édition, jeu de sport, Tennis Manager, roguelite_
  * **Localisation**: Angoulême, Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Reemo](https://reemo.io/)**  
  * _Plateforme souveraine d'accès distant Zero Trust sans agent, basée sur un protocole de streaming haute performance de postes de travail (utilisée notamment par des studios d'animation et le broadcast)._
  * **Mots clés**: _cloud/streaming, accès distant, Zero Trust, cybersécurité, streaming de postes de travail, broadcast_
  * **Localisation**: Montévrain
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Générique
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/reemo)


* **[Reepost](http://www.reepoststudio.fr/)**  
  * _Studio de post-production parisien : VFX 2D/3D, montage, étalonnage et motion design pour la publicité, le luxe, le clip et le cinéma._
  * **Mots clés**: _effets visuels, post-production, publicité, motion design, 3D_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Reissad Studio](https://reissad.com/)**  
  * _Studio de Nanterre créateur de Bodycam, FPS multijoueur photoréaliste en vue caméra-piéton développé sous Unreal Engine 5._
  * **Mots clés**: _Unreal Engine, photoréalisme, FPS, multijoueur en ligne, console/PC_
  * **Localisation**: Nanterre
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://reissad.com/studio#careers)


* **[Rekka Games](https://braveryandgreed.com/)**  
  * _Studio fondé par deux anciens élèves de l'Enjmin, développeur du beat'em up roguelite coopératif Bravery and Greed (édité par Team17 en 2022 sur PC et consoles)._
  * **Mots clés**: _jeu vidéo, roguelite, beat'em up, pixel art_
  * **Localisation**: Gond-Pontouvre
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Retail VR](https://www.retail-vr.com/)**  
  * _Éditeur nantais d'une plateforme de merchandising 3D : planogrammes et magasins en 3D temps réel, jumeau numérique de points de vente, tests d'activations en réalité augmentée et moteur IA de conversion photo vers 3D (clients Carrefour, L'Oréal, Nestlé, Intermarché)._
  * **Mots clés**: _merchandising 3D, planogramme, jumeau numérique, réalité augmentée_
  * **Localisation**: Nantes
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Reconstruction, IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité


* **[Revelt](https://www.revelt-vs.com/)**  
  * _Studio de visualisation et de perspective 3D photoréaliste (Bordeaux et Paris) pour architectes, promoteurs et aménageurs._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Ride FX](https://ride-fx.com/)**  
  * _Studio d'animation 3D, d'effets visuels, de VR et de vidéo-mapping pour le cinéma et les expériences immersives._
  * **Mots clés**: _événementiel/mapping, exposition immersive, réalité étendue, installations interactives, effets visuels, location-based entertainment_
  * **Localisation**: Vannes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, VR/AR, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Art/Evenementiel


* **[Roblox](https://www.roblox.com/)**  
  * _Plateforme de jeux en ligne free-to-play où les expériences sont créées et partagées par la communauté des joueurs._
  * **Mots clés**: _free-to-play, contenu généré par les joueurs, multijoueur en ligne, mobile, console/PC, plateforme de création_
  * **Remarque**: _Développe une entité de <a href="https://research.roblox.com/">recherche internationale</a>_
  * **Localisation**: États-Unis/San Mateo
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://careers.roblox.com/)


* **[Roboflow](https://roboflow.com/)**  
  * _Plateforme américaine de vision par ordinateur pour annoter des images, entraîner et déployer des modèles de détection, utilisée surtout dans l'industrie._
  * **Mots clés**: _vision par ordinateur, deep learning, annotation de données, détection d'objets, industrie/usinage, plateforme MLOps_
  * **Localisation**: États-Unis/{New York, San Francisco}
  * **Domaine scientifique/technique**: Analyse de données, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://roboflow.com/careers)


* **[Roboptic](https://www.roboptic.fr/)**  
  * _Spécialiste stéphanois de la vision industrielle et intégrateur robotique : systèmes de vision standards, cellules robotisées guidées par caméra et postes de contrôle sur mesure avec IA._
  * **Mots clés**: _vision par ordinateur, robotique, contrôle qualité, industrie/usinage, deep learning_
  * **Localisation**: Saint-Étienne
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Robotique/Systèmes autonomes, Industrie/Manufacturing/CAO


* **[Royal Post](https://royalpost.tv/)**  
  * _Studio parisien de post-production haut de gamme créé en 2004 : VFX, CGI 3D, compositing, montage et étalonnage pour la publicité, le clip et la fiction._
  * **Mots clés**: _effets visuels, post-production, CGI, publicité, compositing_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Rundisc](https://www.rundisc.io/)**  
  * _Studio indépendant de jeu vidéo de l'agglomération toulousaine, auteur de Varion (2018) et du jeu d'aventure/énigmes Chants of Sennaar (2023), multi-récompensé._
  * **Mots clés**: _jeu vidéo, indépendant, Chants of Sennaar_
  * **Localisation**: Fenouillet
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Safran.AI](https://www.safran-group.com/companies/safran-ai)**  
  * _Ex-Preligens, filiale IA de Safran Electronics & Defense qui analyse automatiquement par deep learning l'imagerie satellite et aérienne pour le renseignement._
  * **Mots clés**: _imagerie satellite, vision par ordinateur, deep learning, défense_
  * **Localisation**: Paris
  * **Nombres d'employés**: 225
  * **Domaine scientifique/technique**: Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Sécurité/Défense, Géospatial/Cartographie


* **[Saint-Gobain](https://www.saint-gobain.com/fr)**  
  * _Groupe industriel français de matériaux de construction (vitrage, isolation Isover, plâtre Placo, Weber) et de matériaux haute performance (céramiques, abrasifs, vitrage automobile)._
  * **Mots clés**: _matériaux de construction, vitrage, isolation thermique, plaques de plâtre, céramiques, vitrage automobile_
  * **Localisation**: Courbevoie, International
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO


* **[Saltitude](https://saltitude.fr/)**  
  * _Studio de jeu vidéo toulousain fondé en 2022, qui développe le roguelite d'action Big Hunt._
  * **Mots clés**: _jeu vidéo, roguelite, indépendant_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[SAMP](https://samp.ai/)**  
  * _Éditeur d'une plateforme de jumeaux numériques industriels qui structure les nuages de points et scans 3D par IA._
  * **Mots clés**: _jumeau numérique, nuage de points, deep learning, industrie/usinage, scanner 3D, Shared Reality_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Reconstruction, Vision, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Énergie/Environnement


* **[Sandfall Interactive](https://www.sandfall.co)**  
  * _Studio de développement de jeux vidéo, créateur de Clair Obscur: Expedition 33 (Unreal Engine 5)._
  * **Mots clés**: _jeu indépendant, console/PC, Unreal Engine, jeu solo, RPG, narration_
  * **Localisation**: Montpellier
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Sandflow](https://sandflow.ai/)** (Chat3D (Sandflow)) 
  * _Start-up stéphanoise (ex-Chat3D, fondée à Lyon en 2023) qui développe des modèles d'IA générative fondationnels pour créer des objets 3D à partir de texte, d'images ou de croquis._
  * **Mots clés**: _IA générative, génération 3D, text-to-3D, maillage, deep learning_
  * **Localisation**: Saint-Étienne
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: IA générative (image/3D), Modélisation
  * **Domaine d'application**: Jeu Vidéo, Industrie/Manufacturing/CAO, Commerce/Marketing/Publicité


* **[Saola Studio](https://www.saolastudio.com/)**  
  * _Studio parisien de création d'expositions en réalité augmentée pour musées et lieux culturels (REVIVRE à la Grande Galerie de l'Évolution, Grand Large à Nausicaá)._
  * **Mots clés**: _réalité augmentée, exposition immersive, animation 3D, patrimoine_
  * **Localisation**: Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Animation, Modélisation
  * **Domaine d'application**: Patrimoine/Culture, Art/Evenementiel


* **[Savage Level](https://www.savage-level.com/)**  
  * _Studio parisien de jeux AA console/PC à la direction artistique inspirée des arts traditionnels, auteur du RPG tactique Flint: Treasure of Oblivion (Microids, 2024)._
  * **Mots clés**: _AA, console/PC, RPG tactique, game art_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Scenario](https://www.scenario.com/)**  
  * _Plateforme d'IA générative pour les équipes de production (entraînement de modèles sur son propre style, génération d'images, vidéo, 3D, plugin Blender), cofondée par Emmanuel de Maistre et Hervé Nivon, avec une société à Paris._
  * **Mots clés**: _IA générative, game art, génération 3D, pipeline_
  * **Localisation**: Paris, États-Unis/San Francisco
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: IA générative (image/3D), Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.scenario.com/careers)


* **[Scenesis](https://www.scenesis.com/)**  
  * _Studio parisien d'images de synthèse architecturales (intérieur et extérieur) pour architectes, designers et promoteurs depuis plus de 20 ans._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Visualisation, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Scialytics](https://www.scialytics.io/)**  
  * _Spin-off de l'IHU Strasbourg (laboratoire CAMMA) qui développe une plateforme d'IA d'analyse de vidéos chirurgicales et des assistants temps réel au bloc opératoire._
  * **Mots clés**: _vision par ordinateur, deep learning, chirurgie assistée, dispositif médical_
  * **Remarque**: _Créée en mai 2025 ; effectif non encore déclaré au registre._
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Scortex](https://scortex.io/)**  
  * _Éditeur parisien d'une solution d'inspection visuelle par IA qui automatise la détection de défauts sur les lignes de production._
  * **Mots clés**: _vision par ordinateur, contrôle qualité, deep learning_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Sculpteo](https://www.sculpteo.com/)**  
  * _Service en ligne d'impression 3D à la demande basé à Villejuif (groupe 3D Prod depuis 2026), avec outils web d'analyse et de réparation de fichiers 3D._
  * **Mots clés**: _impression 3D, fabrication additive, web 3D_
  * **Localisation**: Villejuif
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Design/Fabrication, Géométrie, Web/Cloud/Big Data
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Seaviews](https://seaviews.fr/)**  
  * _Société ciotadenne d'observation du milieu marin qui produit des cartes bathymétriques et des modèles 3D de sites sous-marins par sondeur multifaisceau et photogrammétrie._
  * **Mots clés**: _photogrammétrie, cartographie sous-marine, bathymétrie, modélisation 3D_
  * **Localisation**: La Ciotat
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Reconstruction, Acquisition
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie


* **[Seed by Seed](https://www.seedbyseed.studio/)**  
  * _Studio indépendant de jeux vidéo créé en 2018 pour développer Pile Up!, un jeu de plateforme coopératif en 3D._
  * **Mots clés**: _jeu vidéo, jeu coopératif, plateforme 3D_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Seppia](https://www.seppia.eu/)**  
  * _Société de production audiovisuelle strasbourgeoise (2002) de documentaires qui développe aussi des expériences interactives et immersives (visite virtuelle de la cathédrale de Strasbourg)._
  * **Mots clés**: _réalité virtuelle, exposition immersive, documentaire_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Patrimoine/Culture, Cinéma/Films d'Animation/VFX


* **[Serious Factory](https://seriousfactory.com/)**  
  * _Éditeur du logiciel auteur VTS Editor de création sans code de serious games et simulations 3D avec personnages virtuels, déployables sur PC, mobile et VR._
  * **Mots clés**: _serious game, personnages 3D, formation immersive, réalité virtuelle_
  * **Localisation**: Suresnes
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game


* **[Shiro Games](https://shirogames.com)**  
  * _Studio de développement et d'édition de jeux vidéo (Northgard, Dune: Spice Wars, Wartales), moteur maison Heaps._
  * **Mots clés**: _jeu indépendant, console/PC, moteur maison, jeu de stratégie, édition de jeux, Haxe/Heaps_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 50-99
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Shot Over](https://shotover.com/)** (SHOTOVER Systems) 
  * _Système d'imagerie gyro stabilisée pour des prises de vues sur véhicules (cinéma, sécurité, défense, etc)._
  * **Mots clés**: _caméra gyrostabilisée, prise de vue aérienne, défense, sécurité publique, réalité augmentée_
  * **Remarque**: _Issu de la fusion en 2020 de SHOTOVER Camera Systems (Queenstown, Nouvelle-Zélande) et Churchill Navigation (Boulder, Colorado)._
  * **Localisation**: États-Unis/Colorado/Boulder, Nouvelle-Zélande/Queenstown
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel, Sécurité/Défense


* **[SideFX](https://www.sidefx.com/)**  
  * _Développement du logiciel de VFX Houdini - Modélisation et Animation procédurale, simulation._
  * **Mots clés**: _Houdini, procédural, simulation de fluides, effets visuels, Karma, Gaussian splatting, plugin/logiciel pour artistes_
  * **Produits**: Houdini
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.sidefx.com/company/careers/)


* **[Silex Animation](https://www.silexfilms.com/animation/)**  
  * _Studio 2D d'Angoulême créé en 2014 par Silex Films, qui fabrique ses séries et films d'animation (Culottées, Les QuiQuoi, L'Armée des Romantiques, In Waves)._
  * **Mots clés**: _animation 2D, séries TV, long métrage, documentaire animé_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[SILIOS Technologies](https://www.silios.com/)**  
  * _Fabricant de micro-optiques basé à Rousset (filtres et caméras d'imagerie multispectrale snapshot VIS/NIR/SWIR, imagerie de front d'onde, mise en forme laser, optiques spatiales pour Euclid)._
  * **Mots clés**: _imagerie multispectrale, caméra, micro-optique, front d'onde_
  * **Localisation**: Rousset
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique, Autres


* **[Siléane](https://www.sileane.com/)**  
  * _Concepteur stéphanois de robots intelligents guidés par vision 3D et IA (bin-picking Kamido, pick-and-place Flowpick, Rovaldy) pour environnements non structurés._
  * **Mots clés**: _vision par ordinateur, robotique, bin-picking, deep learning, industrie/usinage_
  * **Localisation**: Saint-Étienne
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Industrie/Manufacturing/CAO
  * [_Jobs_](https://careers.werecruit.io/fr/sileane)


* **[Sim&Cure](https://www.sim-and-cure.com/)**  
  * _Logiciel de modélisation 3D et de simulation numérique pour le traitement endovasculaire des anévrismes intracrâniens (Sim&Size)._
  * **Mots clés**: _imagerie médicale, neurovasculaire, planification chirurgicale, dispositif médical, modélisation 3D patient_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Simulation, Imagerie, Reconstruction
  * **Domaine d'application**: Médical/Biologique


* **[Simaptic](https://simaptic.com/)**  
  * _Deeptech lilloise associant réalité virtuelle et textile haptique pour la simulation médicale, notamment la formation à la réanimation cardiopulmonaire et à la prise en charge des hémorragies._
  * **Mots clés**: _simulation médicale, haptique, réalité virtuelle, formation_
  * **Localisation**: Loos, Tourcoing
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, IHM/Haptique, Simulation
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game


* **[Simerics](https://www.simerics.com/)**  
  * _Éditeur de logiciels de simulation CFD (Simerics-MP, PumpLinx) spécialisés dans les écoulements multiphasiques, la cavitation et les pompes et moteurs._
  * **Mots clés**: _simulation de fluides, CFD, maillage automatique, cavitation, automobile, aéronautique_
  * **Localisation**: États-Unis/Washington/Bellevue
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://www.simerics.com/careers/)


* **[Siradel](https://siradel.com/fr/)**  
  * _Société de Saint-Grégoire spécialisée en intelligence géospatiale : modèles 3D de villes, jumeaux numériques et simulation de propagation radio._
  * **Mots clés**: _jumeau numérique, SIG, modèle 3D urbain, simulation physique_
  * **Localisation**: Saint-Grégoire, Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Reconstruction, Simulation, Visualisation
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme
  * [_Jobs_](https://siradel.com/fr/carriere/)


* **[Sirehna](https://www.sirehna.com/)**  
  * _Filiale de Naval Group basée à Bouguenais, spécialisée en hydrodynamique navale (bassin numérique, essais de maquettes), jumeaux numériques, systèmes de positionnement dynamique, drones de surface et aide à la décision optronique._
  * **Mots clés**: _hydrodynamique, bassin numérique, jumeau numérique, naval_
  * **Localisation**: Bouguenais
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Simulation, Vision
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.sirehna.com/careers/)


* **[Sixense](https://www.sixense-group.com/)**  
  * _Filiale de Soletanche Freyssinet (Vinci) qui propose cartographie lidar aérienne et mobile, inspection numérisée et jumeaux numériques d'infrastructures (plateforme Beyond)._
  * **Mots clés**: _lidar, jumeau numérique, SIG, nuage de points_
  * **Localisation**: Rueil-Malmaison, Nanterre
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Géospatial/Cartographie


* **[SkyReal](https://skyreal.tech/)** (SKR Technologies) 
  * _Éditeur d'une solution de réalité virtuelle pour la revue de maquettes numériques 3D industrielles (aéronautique, automobile, défense)._
  * **Mots clés**: _réalité virtuelle, revue de maquette numérique, CAO, aéronautique, défense, spatial, Unreal Engine_
  * **Localisation**: Paris, Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Visualisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation


* **[Sloclap](https://www.sloclap.com)**  
  * _Studio indépendant parisien de jeux d'action console/PC au style visuel marqué et aux animations de combat soignées (Absolver, Sifu, Rematch)._
  * **Mots clés**: _jeu indépendant, console/PC, Unreal Engine, jeu d'action, multijoueur en ligne, animation de combat_
  * **Localisation**: Paris
  * **Nombres d'employés**: 100-199
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Smode Tech](https://www.smode.io/)**  
  * _Éditeur parisien de SMODE, moteur de compositing 2D/3D temps réel et media server pour les événements, la scène, la télévision et les lieux immersifs._
  * **Mots clés**: _rendu temps réel, compositing, media server, événementiel/mapping_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers


* **[Sogitec](https://www.sogitec.fr/)**  
  * _Filiale de Dassault Aviation spécialisée dans la simulation de vol et la formation des équipages (simulateurs Rafale, Mirage), pionnière de l'imagerie de synthèse._
  * **Mots clés**: _simulateur de vol, rendu temps réel, simulation, défense_
  * **Localisation**: Suresnes
  * **Nombres d'employés**: 375
  * **Domaine scientifique/technique**: Simulation, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Sécurité/Défense, Automobile/Navigation/Aviation


* **[Solaya](https://www.solaya.ai/)**  
  * _Laboratoire/startup de numérisation 3D de produits par Gaussian splatting (application de scan mobile et pipeline entreprise)._
  * **Mots clés**: _Gaussian splatting, scanner 3D, mobile, e-commerce/configurateur 3D, jumeau numérique, réalité augmentée_
  * **Localisation**: Nice
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité, Industrie/Manufacturing/CAO


* **[Sonio](https://www.sonio.ai/)**  
  * _Start-up parisienne (groupe Samsung Medison) d'IA d'aide à l'échographie prénatale et de compte rendu._
  * **Mots clés**: _imagerie médicale, échographie, deep learning_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Sony CSL](https://csl.sony.fr/)**  
  * _Centre de recherche de Sony - Computer Science Laboratories: Creativy, Music, Language, Sustainability_
  * **Mots clés**: _laboratoire de recherche, IA pour la musique, créativité assistée par IA, langage, développement durable_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Générique


* **[Soqut Imaging](https://soqut-imaging.com/)**  
  * _Start-up de Bègles qui développe ELiBio, logiciel breveté de biopsie numérique du foie par analyse d'images IRM pour le diagnostic précoce de la MASH._
  * **Mots clés**: _imagerie médicale, IRM, segmentation, analyse quantitative, diagnostic_
  * **Produits**: ELiBio
  * **Localisation**: Bègles
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[SoulGame Studio](https://soulgamestudio.com/)**  
  * _Studio de jeu vidéo toulousain dirigé par deux cousins, auteur de Minishoot' Adventures._
  * **Mots clés**: _jeu vidéo, indépendant, Minishoot' Adventures_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[SpirOPS](https://www.spirops.com/)**  
  * _Laboratoire indépendant d'IA depuis 2004 : simulateur de foules, moteur d'animation procédurale temps réel, IA décisionnelle pour véhicules et trains autonomes (Stellantis, SNCF, Alstom)._
  * **Mots clés**: _simulation de foules, animation procédurale, véhicule autonome, agents autonomes, IA décisionnelle, ferroviaire_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Simulation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Automobile/Navigation/Aviation, Jeu Vidéo
  * [_Jobs_](https://www.spirops.com/en/jobs.php)


* **[Spline](https://spline.fr/)**  
  * _Studio d'ingénierie visuelle : motion control robotisé, camera tracking temps réel sur plateau et VFX._
  * **Mots clés**: _motion control, tracking caméra, production virtuelle, effets visuels, publicité, robotique, location de studio_
  * **Localisation**: Aubervilliers, Valence
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Rendu temps réel/Moteurs 3D, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Spring Technologies](https://hexagon.com/products/product-groups/cnc-simulation-software/ncsimul)**  
  * _Éditeur de NCSIMUL, logiciel de simulation 3D d'usinage et de jumeau numérique de machines-outils à commande numérique._
  * **Mots clés**: _industrie/usinage, simulation d'usinage, machine-outil, commande numérique, jumeau numérique, NCSIMUL_
  * **Remarque**: _Le logiciel NCSIMUL est désormais commercialisé par Hexagon (ncsimul.com redirige vers Hexagon)._
  * **Localisation**: Montreuil, Labège
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Square Enix](https://www.square-enix-games.com/fr_FR/home)**  
  * _Éditeur et développeur japonais de jeux vidéo, connu pour les sagas Final Fantasy (dont le MMORPG FINAL FANTASY XIV) et Dragon Quest._
  * **Mots clés**: _AAA, console/PC, édition de jeux, multijoueur en ligne, RPG, Final Fantasy_
  * **Localisation**: États-Unis/California/Los Angeles, Royaume-Uni/Londres, France/Paris, Allemagne/Hamburg, Japon/Tokyo
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://apply.workable.com/square-enix/)


* **[Stability AI](https://stability.ai/)**  
  * _Développeur de modèles d'IA générative (Stable Diffusion, Stable Audio, modèles vidéo et 3D) pour la production de contenus créatifs, en API ou auto-hébergés._
  * **Mots clés**: _IA générative, Stable Diffusion, génération vidéo, génération 3D, audio génératif, open source_
  * **Localisation**: Royaume-Uni/Londres, Japon/Tokyo
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision
  * **Domaine d'application**: Générique, Cinéma/Films d'Animation/VFX


* **[Steamroller Studios](https://www.steamrollerstudios.com/)**  
  * _Studio pour film d'animation, jeux et expérience immersive pour parc d'attraction_
  * **Mots clés**: _animation 3D, cinématiques de jeu, parcs à thème, AAA, co-développement, animation de personnages_
  * **Localisation**: États-Unis/Mount Dora, Canada/Vancouver, Maurice
  * **Nombres d'employés**: 260
  * **Domaine scientifique/technique**: Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.steamrolleranimation.com/careers)


* **[Stereograph](https://www.stereograph.fr/)**  
  * _Éditeur lillois de TEIA Suite, plateforme de jumeau numérique et d'hypervision des bâtiments permettant de visualiser un patrimoine immobilier en 2D et 3D et d'y connecter les données d'exploitation ; à l'origine studio d'images 3D pour l'architecture._
  * **Mots clés**: _jumeau numérique, BIM, visualisation 3D, hypervision_
  * **Localisation**: Lille
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Visualisation, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO


* **[Stereolabs](https://www.stereolabs.com/)**  
  * _Concepteur parisien des caméras stéréoscopiques ZED et de leur SDK de perception 3D temps réel (profondeur, SLAM, suivi d'objets et de corps), filiale d'Ouster._
  * **Mots clés**: _vision par ordinateur, caméra stéréo, perception 3D, SLAM, robotique_
  * **Localisation**: Montrouge
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, Acquisition, Reconstruction
  * **Domaine d'application**: Robotique/Systèmes autonomes, Industrie/Manufacturing/CAO
  * [_Jobs_](https://careers.stereolabs.com/)


* **[Stim Studio](https://www.stimstudio.com/)**  
  * _Studio créatif d'animation 3D, d'effets visuels et 2D pour le cinéma, la télévision et la publicité._
  * **Mots clés**: _animation 3D, effets visuels, animation 2D, séries d'animation, long métrage, publicité_
  * **Localisation**: Lyon, Angoulême
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.stimstudio.com/en/careers/)


* **[Stormancer](https://www.stormancer.com/)**  
  * _Société d'ingénierie spécialisée dans les technologies en ligne pour jeux vidéo (backend, multijoueur, crossplay), ayant travaillé sur plus de 30 jeux pour studios et éditeurs._
  * **Mots clés**: _multijoueur en ligne, backend de jeu, crossplay, co-développement, serveurs de jeu_
  * **Localisation**: France/Lille (Tourcoing)
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo


* **[Strollhunt](https://strollhunt.com/)**  
  * _Plateforme mobile de jeux d'exploration urbaine en réalité augmentée, proposée aux offices de tourisme, institutions culturelles et entreprises._
  * **Mots clés**: _réalité augmentée, jeu géolocalisé, tourisme, patrimoine/musée, mobile, chasse au trésor_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Vision, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Studio Black Flag](https://studioblackflag.com/)**  
  * _Studio indépendant bordelais de jeux PC/Mac/Linux (Orphan Age, Yrminsul, Click of Cthulhu)._
  * **Mots clés**: _jeu indépendant, console/PC, Mac/Linux_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Studio Corto](https://studiocorto.com/)** (Studio Corto (LFxSC, Lesterfilm x Studio Corto)) 
  * _Studio de post-production image et son installé à Lagora (VFX, compositing, motion design, étalonnage, restauration/colorisation 2K-8K, mixage) pour le cinéma et les séries._
  * **Mots clés**: _post-production, VFX, compositing, étalonnage, restauration, colorisation_
  * **Localisation**: Gond-Pontouvre
  * **Domaine scientifique/technique**: Rendu offline/VFX, Imagerie
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Studio Draconis](https://studio-draconis.com/)**  
  * _Studio indépendant développant Zodiac Legion, RPG tactique au tour par tour de fantasy inspiré du jeu de rôle sur table (combats en formation, gestion d'escouade, royaume)._
  * **Mots clés**: _jeu indépendant, RPG tactique, tour par tour, console/PC, Zodiac Legion_
  * **Localisation**: Paris
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Studio La Cachette](https://www.studiolacachette.com/)**  
  * _Studio d'animation parisien fondé en 2014 (séries, courts métrages, clips), primé aux Emmy Awards._
  * **Mots clés**: _séries d'animation, animation 2D, court métrage, clips, Primal, Love, Death & Robots_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Studio Nyx](https://www.studio-nyx.com/)**  
  * _Studio de jeux vidéo et de simulateurs en réalité virtuelle : formation immersive, jumeaux numériques et simulation scientifique (environnements 3D des simulateurs de formation des marins de Naval Group, simulation réaliste des océans), applications pour la culture et le patrimoine._
  * **Mots clés**: _simulateur, réalité virtuelle, formation immersive, jumeau numérique, serious game, simulation d'océan_
  * **Localisation**: Gond-Pontouvre
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Simulation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Sécurité/Défense, Patrimoine/Culture, Jeu Vidéo
  * [_Jobs_](https://www.studio-nyx.com/jobs)


* **[Studio Raclette](https://www.studioraclette.com/)**  
  * _Studio 3D de la métropole lilloise fondé en 2021 par des anciens de grands studios européens, spécialisé en animation 3D, animation médicale, packshots, motion design, réalité virtuelle et scan 3D._
  * **Mots clés**: _animation 3D, packshot, animation médicale, motion design_
  * **Localisation**: Saint-André-lez-Lille
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Médical/Biologique


* **[Subsea Tech](https://www.subsea-tech.com/)**  
  * _Concepteur marseillais de robots sous-marins et de surface (ROV Tortuga, micro-ROV, AUV, drones SeaCat) et de systèmes de caméras vidéo sous-marines pour l'inspection, la défense et la recherche._
  * **Mots clés**: _robotique sous-marine, ROV, caméra sous-marine, inspection_
  * **Localisation**: Marseille
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Hardware
  * **Domaine d'application**: Robotique/Systèmes autonomes, Sécurité/Défense, Énergie/Environnement


* **[Sun Creature](https://www.suncreature.com/)**  
  * _Studio d'animation et de production danois avec une filiale de fabrication à Bordeaux (animation 2D/3D)._
  * **Mots clés**: _animation 2D, séries d'animation, long métrage, contenus de marque, coproduction internationale_
  * **Localisation**: Bègles
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Sunny Peak](https://www.symphonia-game.com/)**  
  * _Studio indépendant francilien fondé par des anciens d'ISART Digital, créateur du jeu de plateforme musical 3D Symphonia (PC, PlayStation, Xbox)._
  * **Mots clés**: _jeu indépendant, console/PC, jeu de plateforme_
  * **Localisation**: Saint-Maur-des-Fossés
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Superbien](https://www.superbien.studio/)**  
  * _Studio créatif parisien (et New York) qui produit des images animées 3D, du contenu CGI, des expériences immersives et de la réalité augmentée pour les marques._
  * **Mots clés**: _motion design, 3D, publicité, réalité augmentée, exposition immersive_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, VR/AR, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel
  * [_Jobs_](https://www.superbien.studio/career)


* **[Superprod Animation](https://www.superprod.net/fr)**  
  * _Producteur indépendant européen de films et des séries d'animation et de fiction._
  * **Mots clés**: _séries d'animation, long métrage, animation 2D, animation 3D_
  * **Remarque**: _Studios d'animation à Paris, Angoulême, Milan et Luxembourg, bureau à Los Angeles._
  * **Localisation**: Paris, Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.werecruit.io/en/superprod)


* **[Surgar](https://www.surgar-surgery.com/)**  
  * _Logiciel de réalité augmentée pour la chirurgie laparoscopique, superposant le modèle 3D des organes à la vidéo opératoire._
  * **Mots clés**: _chirurgie assistée, réalité augmentée, laparoscopie, organes déformables, vision par ordinateur, guidage peropératoire_
  * **Localisation**: Clermont-Ferrand
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Reconstruction, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Swing Swing Submarine](https://www.swingswingsubmarine.com/)**  
  * _Petit studio de jeux vidéo créé en 2009, qui fait des jeux narratifs, de réflexion et d'exploration pour PC et consoles (Blocks That Matter, Seasons after Fall)._
  * **Mots clés**: _jeu vidéo, jeu indépendant, puzzle, jeu narratif_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Synamedia](https://www.synamedia.com/)**  
  * _Éditeur de solutions de traitement et diffusion vidéo (encodage HEVC/VVC, compression par IA, Quortex Play) disposant d'une équipe R&D à Cesson-Sévigné issue du rachat de Quortex._
  * **Mots clés**: _compression vidéo, streaming, cloud, encodage_
  * **Remarque**: _Quortex (SIREN 842176141, Cesson-Sévigné, 20-49 salariés) est la filiale rennaise._
  * **Localisation**: Cesson-Sévigné
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.synamedia.com/careers/)


* **[Synergiz](https://www.synergiz.com/)**  
  * _Société malouine spécialisée en réalité mixte (HoloLens, Magic Leap) qui édite la suite Synergiz Harbor pour l'industrie._
  * **Mots clés**: _réalité augmentée, réalité mixte, HoloLens, jumeau numérique_
  * **Remarque**: _Site en maintenance (HTTP 503) le 2026-11-07, à revérifier._
  * **Localisation**: Saint-Malo
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Synnoïa](https://synnoia.fr/)**  
  * _Start-up créée en 2024 (Technoparc Krysalide, Eurekatech) qui conçoit des expériences immersives et interactives sur mesure (VR, AR, motion capture, sièges dynamiques), dont l'attraction mobile Voyage en Terre 2 et des attractions pour le Futuroscope et EDF._
  * **Mots clés**: _expérience immersive, réalité virtuelle, réalité augmentée, motion capture, attraction, photobooth IA_
  * **Localisation**: Saint-Michel
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, IHM/Haptique
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel, Patrimoine/Culture, Commerce/Marketing/Publicité


* **[Synthes'3D](https://www.synthes3d.com/)**  
  * _Studio 3D fondé en 2007 à Aix-en-Provence qui produit des animations et illustrations 3D pour le médical et l'industrie, ainsi que des hologrammes, applications de réalité virtuelle et 3D temps réel._
  * **Mots clés**: _animation 3D, motion design, imagerie médicale 3D, réalité virtuelle_
  * **Localisation**: Aix-en-Provence, Angers
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, VR/AR
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO, Commerce/Marketing/Publicité


* **[SysNav](https://www.sysnav.fr/)**  
  * _Spécialiste français de la géolocalisation de précision sans GPS par navigation magnéto-inertielle brevetée, pour la défense, la sécurité, les véhicules autonomes et la mesure du mouvement en essais cliniques._
  * **Mots clés**: _navigation magnéto-inertielle, géolocalisation sans GPS, défense, véhicule autonome, santé, capteurs inertiels_
  * **Localisation**: Vernon, Paris
  * **Nombres d'employés**: 120
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation, Médical/Biologique
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/sysnav/jobs)


* **[Tactical Adventures](https://www.tacticaladventures.com/)**  
  * _Studio parisien de jeux de rôle tactiques au tour par tour inspirés de Donjons et Dragons 5e (Solasta: Crown of the Magister, Solasta II), développés sous Unity._
  * **Mots clés**: _jeu indépendant, console/PC, Unity, RPG tactique, Donjons et Dragons_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Take-Two Interactive](https://www.take2games.com/)**  
  * _Développement de jeux vidéo, et détenant d'autres entreprises (Rockstar, 2K) ainsi que l'équipe de R&D Dynamixyz à Rennes._
  * **Mots clés**: _AAA, console/PC, édition de jeux, mobile, multijoueur en ligne, capture faciale_
  * **Remarque**: _Équipe de R&D à Cesson-Sévigné (Rennes) issue de Dynamixyz (capture faciale sans marqueurs), rachetée en 2021 : travaille pour les studios du groupe (Rockstar, 2K) et publie dans les conférences de graphique._
  * **Localisation**: États-Unis/New York, Cesson-Sévigné, France/Paris, International
  * **Nombres d'employés**: 12900
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition, Vision
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.take2games.com/jobs)


* **[TAT](https://www.tatprod.com)** (TAT Productions) 
  * _Studio de production et de fabrication de films et séries d'animation 3D (Les As de la Jungle, Astérix et Obélix : le Combat des Chefs)._
  * **Mots clés**: _animation 3D, séries d'animation, long métrage, jeunesse_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Tchack](https://www.tchack.com/fr/)**  
  * _Société de production et studio lillois créé en 2008 qui réalise des séries et films d'animation ainsi que des documentaires (Petit Malabar, première série entièrement fabriquée en interne, diffusée sur France Télévisions)._
  * **Mots clés**: _séries d'animation, courts métrages, production_
  * **Localisation**: Lille
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Team Empreintes](https://linktr.ee/empreintes_Studio)**  
  * _Studio indépendant de jeux non violents et émotionnels, dont le premier jeu Fireside Feelings a été nommé aux Pégases 2025._
  * **Mots clés**: _jeu vidéo, jeu indépendant, jeu narratif_
  * **Localisation**: Soyaux
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[TeamTO](https://www.teamto.com)**  
  * _Studio d'animation 3D et 2D (séries et longs métrages), développant ses propres outils de production (suite Citrus : Tangerine, Yuzu)._
  * **Mots clés**: _séries d'animation, animation 3D, animation 2D, long métrage, outils de production, rendu temps réel, jeunesse_
  * **Remarque**: _Repris par RIVA Studios en décembre 2024 (nouvelle structure TeamTO Animation / TeamTO Technology)._
  * **Localisation**: Paris, Valence
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Tech Soft 3D](https://www.techsoft3d.com/)**  
  * _Outils de développement (SDK HOOPS, échange de données CAO, visualisation 3D) pour la CAO/IAO_
  * **Mots clés**: _SDK, CAO, HOOPS, échange de données CAO, web 3D_
  * **Localisation**: France/Lyon, France/Sophia Antipolis, États-Unis/Oregon/Bend, International
  * **Domaine scientifique/technique**: Design/Fabrication, Visualisation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Générique
  * [_Jobs_](https://www.techsoft3d.com/company/#careers)


* **[Technicolor Games](https://www.technicolorgames.com/)**  
  * _Studio de services artistiques pour le jeu vidéo (groupe TransPerfect, équipes en Inde) : concept art, 3D, animation, VFX, cinématiques et tech art pour de grands éditeurs._
  * **Mots clés**: _co-développement, concept art, animation 3D, cinématiques de jeu, effets visuels, tech art_
  * **Remarque**: _Racheté en mars 2025 par TransPerfect (division TransPerfect Gaming) après la faillite du groupe Technicolor._
  * **Localisation**: Inde/Bangalore, International
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Technodigit](https://www.linkedin.com/company/technodigit-sarl/)**  
  * _Traitement de nuages de points 3D issus de mesures (Cyclone 3DR, 3DReshaper). Filiale du groupe Hexagon._
  * **Mots clés**: _nuage de points, maillage, scanner 3D, inspection, BIM, Cyclone 3DR_
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/technodigit)


* **[Techviz](https://www.techviz.net/)**  
  * _Éditeur de logiciels affichant directement les modèles CAO en réalité virtuelle, sans conversion, pour les revues de projet collaboratives, l'ergonomie et la formation industrielle._
  * **Mots clés**: _réalité virtuelle, CAO, revue de projet immersive, collaboration à distance, ergonomie, industrie/usinage_
  * **Localisation**: France/Paris, Paris, États-Unis
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: VR/AR, Visualisation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.techviz.net/careers/)


* **[TerraNIS](https://www.terranis.fr/)**  
  * _PME de Ramonville-Saint-Agne qui transforme l'imagerie satellite en services de géo-information pour l'agriculture (Pixagri), la viticulture (Oenoview), les territoires (Landia) et la forêt._
  * **Mots clés**: _imagerie satellite, télédétection, viticulture, agriculture de précision_
  * **Localisation**: Ramonville-Saint-Agne
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement


* **[Thales](https://www.thalesgroup.com/fr)**  
  * _Multi-nationale française à forte composante R&amp;D développant des produits pour l'aérospatiale, la défense, et la sécurité tel que la biométrie._
  * **Mots clés**: _défense, aéronautique, spatial, cybersécurité, biométrie_
  * **Localisation**: France/Paris, Palaiseau, International
  * **Nombres d'employés**: 80000
  * **Domaine scientifique/technique**: Reconstruction, Vision, Imagerie
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.thalesgroup.com/fr/candidat)


* **[The Firehouse](https://www.firehousevfx.com/)**  
  * _Studio d'effets visuels pour films et séries : CGI, FX (Houdini), matte painting, compositing, capture LiDAR/photogrammétrie et LED volume._
  * **Mots clés**: _effets visuels, compositing, matte painting, Houdini, lidar, photogrammétrie, long métrage, séries TV_
  * **Localisation**: Saint-Ouen, Champagne-au-Mont-d'Or
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[The Foundry](https://www.foundry.com/)**  
  * _Éditeur britannique de logiciels pour les VFX et l'animation : Nuke (compositing), Mari (texturing), Katana (lookdev et éclairage), Modo et outils de production virtuelle._
  * **Mots clés**: _Nuke, compositing, effets visuels, Mari, Katana, production virtuelle, plugin/logiciel pour artistes_
  * **Produits**: [Nuke](https://www.foundry.com/products/nuke-family), [Katana](https://www.foundry.com/products/katana), [Mari](https://www.foundry.com/products/mari)
  * **Localisation**: Royaume-Uni, États-Unis, Australie
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://apply.workable.com/foundry/)


* **[The Game Bakers](https://www.thegamebakers.com/)**  
  * _Studio indépendant montpelliérain auteur de Furi, Haven et Cairn, des jeux d'action et d'aventure sur console et PC._
  * **Mots clés**: _jeu indépendant, console/PC, jeu d'action, jeu d'aventure, édition de jeux_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.thegamebakers.com/category/jobs/)


* **[The Pixel Hunt](https://www.thepixelhunt.com/)**  
  * _Studio parisien de jeux narratifs inspirés du réel (Bury me, my Love, Inua, Wednesdays, primé à l'IGF et aux Pégases 2026, Ithaca en production)._
  * **Mots clés**: _jeu narratif, jeu indépendant, game art_
  * **Localisation**: Paris
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[The Tiny Digital Factory](https://tinydigitalfactory.com/)**  
  * _Studio lyonnais (et montréalais) de jeux mobiles de course et de sports mécaniques (GT Manager, Revv Racing, Shell Racing Legends), ayant contribué à Fallout Shelter et Gear.Club._
  * **Mots clés**: _mobile, jeu de course, free-to-play_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[The Yard VFX](https://theyard-vfx.com/)**  
  * _Studio français d'effets visuels photoréalistes pour longs métrages et séries, internationaux comme indépendants, implanté en France et à l'étranger._
  * **Mots clés**: _effets visuels, long métrage, séries, compositing_
  * **Localisation**: Vanves, Montpellier, Royaume-Uni/Londres
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Simulation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.theyard-vfx.com/en-GB)


* **[Theia](https://www.theiamarkerless.com/)**  
  * _Système de motion capture sans marqueurs à partir de vidéos multi-caméras (Theia3D), utilisé en recherche biomécanique, sport et équipement sportif._
  * **Mots clés**: _motion capture, capture sans marqueurs, vision par ordinateur, deep learning, biomécanique, sport_
  * **Localisation**: Canada/Ontario/Kingston
  * **Domaine scientifique/technique**: Animation, Acquisition
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.theiamarkerless.com/careers)


* **[Therapixel](https://www.therapixel.fr/)**  
  * _Éditeur niçois issu de l'Inria Sophia Antipolis (2013) de logiciels d'intelligence artificielle appliquée à l'imagerie médicale, notamment pour le dépistage du cancer du sein en mammographie._
  * **Mots clés**: _imagerie médicale, deep learning, mammographie, aide au diagnostic_
  * **Localisation**: Nice
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Therenva](https://www.therenva.com/)**  
  * _Logiciels de planification et de navigation 3D par fusion d'images pour la chirurgie vasculaire endovasculaire (EndoNaut, EndoSize)._
  * **Mots clés**: _imagerie médicale, fusion d'images, navigation chirurgicale, chirurgie vasculaire, planification chirurgicale, deep learning_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Visualisation, VR/AR
  * **Domaine d'application**: Médical/Biologique


* **[Thermo Fisher Scientific](https://www.thermofisher.com/amira-avizo)**  
  * _Groupe d'instrumentation scientifique ; son site de Bordeaux (FEI SAS, ex-Visualization Sciences Group) développe les logiciels de visualisation et d'analyse 3D Amira et Avizo._
  * **Mots clés**: _visualisation scientifique, microscopie électronique, segmentation, imagerie médicale, analyse de matériaux, Amira/Avizo_
  * **Localisation**: États-Unis/Waltham, Bordeaux, International
  * **Domaine scientifique/technique**: Visualisation, Imagerie
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO
  * [_Jobs_](https://jobs.thermofisher.com/)


* **[Théoriz](https://www.theoriz.com/)**  
  * _Studio de création villeurbannais (Pôle Pixel) fondé en 2013 réalisant mapping vidéo, installations interactives et espaces immersifs pour musées, marques et événements (dont la Fête des Lumières)._
  * **Mots clés**: _événementiel/mapping, installations interactives, exposition immersive, Fête des Lumières_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, IHM/Haptique
  * **Domaine d'application**: Art/Evenementiel, Patrimoine/Culture, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.theoriz.com/fr/jobs/)


* **[Timescope](https://www.timescope.com/)**  
  * _Entreprise parisienne de visites guidées en réalité virtuelle (« jumelles » VR) restituant en 3D l'histoire de Paris, et de projets VR patrimoniaux sur mesure._
  * **Mots clés**: _réalité virtuelle, patrimoine, reconstitution 3D, borne VR_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Reconstruction, Hardware
  * **Domaine d'application**: Patrimoine/Culture, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.timescope.com/jobs)


* **[Tindalos Interactive](https://www.tindalos-interactive.com/)**  
  * _Studio indépendant parisien (2010) de jeux de stratégie et tactique 3D sur PC/console, sous licences Games Workshop et Disney (Battlefleet Gothic: Armada 1 et 2, Aliens: Dark Descent)._
  * **Mots clés**: _console/PC, jeu de stratégie, temps réel, jeu indépendant_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[TNZPV](https://www.tnzpv.com/)**  
  * _Société de production et studio d'animation 2D/3D fondé à Arles en 2011 (Gus, le chevalier minuscule ; Les Légendaires ; Séraphine), qui produit ses propres séries et longs métrages et fabrique pour des partenaires._
  * **Mots clés**: _animation 2D, animation 3D, séries d'animation, long métrage_
  * **Localisation**: Arles, Annecy
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.tnzpv.com/jobs/)


* **[Toe Bean Club](https://toebeanclubgames.com/)**  
  * _Studio de jeu vidéo indépendant strasbourgeois créé en 2024, qui développe Mirage: Miracle Quest, un jeu au style visuel dessiné à la main._
  * **Mots clés**: _jeu indépendant, console/PC, animation 2D, game art_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Toku](https://tokustudio.com/)**  
  * _Studio de stop motion et mix média (tournage, montage, production déléguée, coproduction, outils et recherche), auteur de la série Bienvenue à Vegetown et de courts métrages._
  * **Mots clés**: _stop motion, mix média, court métrage, outils_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Toon Factory](https://toonfactory.fr/)**  
  * _Producteur de séries d'animation jeunesse dont le studio d'Angoulême, installé à Lagora en 2025, assure développement graphique, storyboard et animatique (La Bande à Ducobu pour Canal+ Kids)._
  * **Mots clés**: _storyboard, animatique, développement graphique, séries jeunesse_
  * **Localisation**: Gond-Pontouvre, Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Toonkit](https://www.toonkit-studio.com/)**  
  * _Studio technique spécialisé dans le setup/rigging de personnages 3D livrés clés en main avec leurs outils d'animation (autorig et gestion d'assets maison), prestataire notamment pour Yakari, le film._
  * **Mots clés**: _rigging, setup, autorig, outils d'animation, gestion d'assets, Maya_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.toonkit-studio.com/carrieres/)


* **[TopSolid](https://www.topsolid.com/)** (TopSolid (ex-Missler Software)) 
  * _Éditeur français de logiciels de CAO/FAO intégrés (TopSolid) pour la mécanique, l'outillage, le bois et la tôlerie._
  * **Mots clés**: _CAO, FAO, ERP, industrie/usinage, tôlerie, menuiserie/bois, outillage_
  * **Localisation**: Évry-Courcouronnes, Vandœuvre-lès-Nancy, Saint-Quentin-Fallavier, Saint-Herblain, Gières, Labège
  * **Nombres d'employés**: 420
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Toyota ED²](https://ed2.toyota-europe.com/)** (Toyota Europe Design Development) 
  * _Studio de design avancé européen de Toyota et Lexus, installé à Sophia Antipolis (Biot), qui conçoit les concepts et extérieurs/intérieurs de véhicules avec une équipe de modélisation numérique (Alias, Blender)._
  * **Mots clés**: _design automobile, modélisation NURBS, CAO, visualisation 3D_
  * **Localisation**: Biot
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Visualisation
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://ed2.toyota-europe.com/projects/digitalmodellerneeded)


* **[Transvalor](https://www.transvalor.com/en/homepage)**  
  * _Éditeur de logiciels de simulation numérique des procédés de mise en forme (Forge, Thercast, Rem3D) issus de Mines Paris._
  * **Mots clés**: _simulation physique, éléments finis, mise en forme des métaux, forgeage, fonderie, industrie/usinage_
  * **Localisation**: Biot
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Simulation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Tribun Health](https://www.tribun.health/)**  
  * _Éditeur de la plateforme de pathologie numérique CaloPix (gestion de lames virtuelles, télépathologie, intégration d'IA d'analyse d'images)._
  * **Mots clés**: _imagerie médicale, pathologie numérique, analyse d'images_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Web/Cloud/Big Data
  * **Domaine d'application**: Médical/Biologique


* **[Trimaran](https://www.trimaran.com/)**  
  * _Studio d'effets visuels et d'animation 3D pour films et séries internationales (FX, environnements, matchmove, lighting)._
  * **Mots clés**: _effets visuels, reconstitution historique, environnements numériques, long métrage, séries TV, documentaire, matchmove_
  * **Localisation**: Vanves, Valenciennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[TVPaint](https://www.tvpaint.com/)**  
  * _Éditeur français de TVPaint Animation, logiciel d'animation 2D bitmap reproduisant le dessin traditionnel, utilisé par les studios, écoles et animateurs indépendants._
  * **Mots clés**: _animation 2D, plugin/logiciel pour artistes, dessin bitmap, logiciel commercial_
  * **Localisation**: Metz
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Ubisoft](https://www.ubisoft.com/)**  
  * _Éditeur et développeur français de jeux vidéo AAA (Assassin's Creed, Far Cry, Rainbow Six Siege, The Division) avec des studios dans le monde entier et des moteurs maison (Anvil, Snowdrop)._
  * **Mots clés**: _AAA, console/PC, édition de jeux, moteur maison, multijoueur en ligne, free-to-play_
  * **Remarque**: _Ubisoft a créé une entité de recherche à Bordeaux appelée "La Forge" à l'image de celle existante à Montréal. Depuis fin 2025, les licences Assassin's Creed, Far Cry et Rainbow Six sont gérées par la filiale Vantage Studios (participation de Tencent). Restructuration importante en 2026 (fermetures de studios hors de France). Studios en France : Ubisoft Paris, Ubisoft Mobile Games (Saint-Mandé), Nadeo (Trackmania, Paris), Ivory Tower (The Crew, Villeurbanne), Ubisoft Bordeaux et Ubisoft Annecy._
  * **Localisation**: Montreuil, France/Bordeaux, France/Annecy, Villeurbanne, Canada/{Montréal, Toronto}, États-Unis/{San Francisco, New York, Atlanta}, Inde, Allemagne, Pologne, International
  * **Nombres d'employés**: 16500
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.ubisoft.com/en-us/company/careers)


* **[Umeshu Lovers](https://umeshulovers.com/)**  
  * _Studio toulousain de développement visuel (concept art 2D/3D) et de game design fondé autour de Sylvain Sarrailh, travaillant pour Riot, Ubisoft, Illumination, Netflix ou Supercell, et associé au jeu Danghost._
  * **Mots clés**: _concept art, développement visuel, jeu vidéo, prototypage_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Unique Animation](https://uniqueanimation.com/)**  
  * _Prestataire de production exécutive et de fabrication de séries d'animation 2D numérique haut de gamme, de la préproduction au compositing (Les Sisters, Loup, Viking Skool pour Samka)._
  * **Mots clés**: _animation 2D, séries TV, production exécutive, compositing_
  * **Localisation**: Angoulême, Paris
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Unit Image](https://www.unit-image.fr/)**  
  * _Studio d'animation 3D et d'effets visuels (cinématiques de jeux vidéo, séries, publicité)._
  * **Mots clés**: _animation 3D, effets visuels, cinématiques de jeu, publicité, scanner 3D, motion design_
  * **Localisation**: Paris, Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Unity Technologies](https://unity.com/)**  
  * _Éditeur du moteur temps réel Unity, multiplateforme (mobile, PC, console, XR), et de services associés de LiveOps, monétisation et applications industrielles._
  * **Mots clés**: _Unity, moteur de jeu, rendu temps réel, mobile, console/PC, réalité virtuelle, jumeau numérique, monétisation publicitaire_
  * **Remarque**: _Equipes de développement en France: <a target="_blank" href="https://unity.com/srp/High-Definition-Render-Pipeline">rendu graphique</a> (Paris, Grenoble), <a target="_blank" href="https://unity.com/products/pixyz">geometry processing</a> (Compiegne, Grenoble) et <a target="_blank" href="https://unity.com/products/sentis">IA</a> (Lille)_
  * **Localisation**: États-Unis, France/Paris, France/Grenoble, France/Compiègne, France/Lille, Canada, Danemark, Finlande, Royaume-Uni, Lituanie, Allemagne, Belgique, Suisse, International
  * **Nombres d'employés**: 7000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://unity.com/careers)


* **[Uptale](https://www.uptale.io/)**  
  * _Éditeur d'une plateforme de formation immersive (VR, 360°, IA conversationnelle) qui capture des environnements réels pour créer des modules déployables sur casque, mobile et web._
  * **Mots clés**: _réalité virtuelle, vidéo 360, formation immersive, serious game, IA générative_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Web/Cloud/Big Data, Acquisition
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/uptale/jobs)


* **[Utopia](https://www.allutopias.com/)**  
  * _Studio de jeux et de mods à forte direction artistique (modes de jeu USL! et Slashers), qui développe son premier jeu commercial, le RPG 2D White Week._
  * **Mots clés**: _jeu vidéo, mods, RPG 2D_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[UVR](https://www.united-vr.com/)** (United Visual Researchers) 
  * _Logiciel d'analyse optique et de rendu avancé (spectral, lumière polarisée)._
  * **Mots clés**: _rendu spectral, lumière polarisée, simulation optique, automobile, mesure de matériaux, prototypage virtuel, Predict_
  * **Produits**: [Predict](https://www.united-vr.com/home)
  * **Localisation**: France/Paris, Changé
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/united-visual-researchers)


* **[valeo.ai](https://www.valeo.com/en/valeo-ai/)**  
  * _Laboratoire de recherche en IA de Valeo à Paris, sur la perception 3D (lidar, caméras), l'apprentissage de représentations et la conduite autonome._
  * **Mots clés**: _automobile, conduite autonome, vision par ordinateur, deep learning, lidar, perception 3D_
  * **Remarque**: _Laboratoire de recherche du groupe Valeo (équipementier automobile)._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, IA générative (image/3D)
  * **Domaine d'application**: Automobile/Navigation/Aviation, Robotique/Systèmes autonomes


* **[VDS (Pure View)](https://www.vds.live/)**  
  * _Virtual Display Services exploite à La Plaine Saint-Denis le studio Pure View (volume LED XR 14 x 4,5 m) pour la production virtuelle, la réalité augmentée broadcast et les plateaux XR temps réel avec suivi caméra._
  * **Mots clés**: _production virtuelle, réalité augmentée, rendu temps réel, Unreal Engine, studio LED_
  * **Localisation**: Saint-Denis
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[Vectuel](https://vectuel.com/)**  
  * _Studio 3D urbain qui produit maquettes 3D de villes, jumeaux numériques, VR collaborative et films 3D pour collectivités, aménageurs et promoteurs._
  * **Mots clés**: _jumeau numérique, maquette 3D, rendu temps réel, réalité virtuelle_
  * **Localisation**: Bry-sur-Marne
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Visualisation, Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Veesual](https://www.veesual.ai/)**  
  * _Éditeur de solutions d'IA générative pour l'e-commerce, d'abord d'essayage virtuel de vêtements puis VidCap AI, qui transforme automatiquement des images produits en courtes vidéos._
  * **Mots clés**: _IA générative, e-commerce/configurateur 3D, génération vidéo, animation d'images, mode/textile, essayage virtuel_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision
  * **Domaine d'application**: Mode/Vêtements/Accessoires, Commerce/Marketing/Publicité


* **[Vicon](https://www.vicon.com/)**  
  * _Fabricant britannique de systèmes de motion capture optique (caméras et logiciels, avec ou sans marqueurs) pour le cinéma, le jeu vidéo, la biomécanique et l'ingénierie._
  * **Mots clés**: _motion capture, capture optique, capture sans marqueurs, biomécanique, analyse de la marche, production virtuelle, réalité virtuelle_
  * **Remarque**: _Filiale du groupe Oxford Metrics._
  * **Localisation**: Royaume-Uni/Oxford
  * **Domaine scientifique/technique**: Acquisition, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.vicon.com/careers/)


* **[Videtics](https://videtics.com/)**  
  * _Start-up de Sophia Antipolis (Biot), filiale du groupe Technis, qui développe Videtics Perception, un logiciel d'analyse vidéo par IA transformant les caméras existantes en capteurs (comptage, détection d'événements, recherche dans les enregistrements)._
  * **Mots clés**: _vision par ordinateur, deep learning, analyse vidéo, ville intelligente_
  * **Localisation**: Biot
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Sécurité/Défense, Architecture/BTP/Urbanisme


* **[Viridien](https://www.viridiengroup.com/)**  
  * _Groupe de géosciences (ex-CGG) basé à Massy, spécialiste de l'imagerie sismique du sous-sol (FWI), du calcul haute performance et des données géophysiques._
  * **Mots clés**: _imagerie sismique, calcul GPU, HPC, géosciences_
  * **Localisation**: Massy
  * **Domaine scientifique/technique**: Imagerie, Simulation, Visualisation
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie


* **[Virteem](https://www.virteem.fr/)** (DDGI (Virteem, VIP Studio 360)) 
  * _Éditeur azuréen (siège à Carros, longtemps installé à Sophia Antipolis), ex-VIP Studio 360, de solutions immersives : visites virtuelles 360°/3D, environnements de formation en réalité virtuelle accessibles en WebXR._
  * **Mots clés**: _visite virtuelle, réalité virtuelle, WebXR, vidéo 360_
  * **Localisation**: Carros
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Web/Cloud/Big Data
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Commerce/Marketing/Publicité, Patrimoine/Culture


* **[Virtual Creation](https://www.virtualcreation.fr/)**  
  * _Agence de Schiltigheim qui développe des formations et expériences immersives en réalité virtuelle, augmentée et mixte, serious games PC et simulations 3D._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, serious game, simulation 3D_
  * **Localisation**: Schiltigheim
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Virtual Regatta](https://www.virtualregatta.com/)**  
  * _Concepteur, développeur et éditeur de jeux de simulation de voile en ligne (Virtual Regatta Offshore et Inshore) qui reproduisent en temps réel les grandes courses au large ; filiale du groupe 52 Entertainment._
  * **Mots clés**: _simulation de voile, jeu en ligne, e-sailing, temps réel_
  * **Localisation**: Villeneuve-d'Ascq
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[Virtualis](https://www.virtualisvr.com/)**  
  * _Éditeur de solutions de rééducation en réalité virtuelle pour kinésithérapeutes (PhysioVR, BalanceVR pour les troubles de l'équilibre et vestibulaires, plateformes StaticVR et MotionVR)._
  * **Mots clés**: _réalité virtuelle, rééducation, troubles vestibulaires, kinésithérapie, dispositif médical, plateforme dynamique_
  * **Localisation**: France/Montpellier
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Médical/Biologique


* **[VirtualiSurg](https://virtualisurg.com/)**  
  * _Éditeur strasbourgeois de simulateurs de formation médicale et chirurgicale combinant réalité virtuelle/mixte et retour haptique sur instruments réels._
  * **Mots clés**: _simulation médicale, réalité virtuelle, haptique, chirurgie assistée_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, IHM/Haptique, Simulation
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game


* **[Virtuallyz](https://www.virtuallyz.com/)**  
  * _Agence aixoise de technologies immersives qui conçoit des applications 3D en réalité virtuelle, augmentée et mixte pour la formation, la communication et l'industrie._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, serious game, formation professionnelle_
  * **Localisation**: Aix-en-Provence
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Virtuallyz Gaming](https://www.virtuallyz-gaming.com/)**  
  * _Studio de jeux vidéo fondé en 2021 par d'anciens de Visual Impact, qui a développé Syberia Remastered et Syberia VR avec Microids et réalise des portages consoles, PC et Meta Quest._
  * **Mots clés**: _console/PC, réalité virtuelle, co-développement, portage_
  * **Localisation**: Bouc-Bel-Air
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Virtuos](https://www.virtuosgames.com/)**  
  * _Studio de co-développement de jeux vidéo (portages, remasters, production d'art 3D)_
  * **Mots clés**: _co-développement, portage, remaster, production d'art 3D, AAA, console/PC_
  * **Localisation**: Chine/Shanghai, Singapour, Cergy, Lyon, Montpellier, International
  * **Nombres d'employés**: 3600
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/virtuos)


* **[Visiativ](https://www.visiativ.com/)**  
  * _Groupe lyonnais intégrateur des solutions Dassault Systèmes (SOLIDWORKS, CATIA, 3DEXPERIENCE, SIMULIA) et éditeur de logiciels PLM/CPQ pour l'industrie._
  * **Mots clés**: _CAO, PLM, SOLIDWORKS, 3DEXPERIENCE, simulation physique_
  * **Localisation**: Charbonnières-les-Bains
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Design/Fabrication, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://jobs.visiativ.com/jobs)


* **[Visible Patient](https://www.visiblepatient.com/)**  
  * _Modélisation 3D personnalisée des patients à partir d'imagerie médicale (scanner, IRM) pour la planification chirurgicale._
  * **Mots clés**: _imagerie médicale, segmentation, modélisation 3D patient, planification chirurgicale, chirurgie assistée, dispositif médical_
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Visualisation
  * **Domaine d'application**: Médical/Biologique


* **[Visiolab](https://www.visio-lab.com/)**  
  * _Studio 3D toulousain (Visiolab Creative Factory) fondé en 2002, spécialisé en perspectives et films 3D d'architecture et en outils de commercialisation immobilière (showroom virtuel, configurateur, visites 360°), environ 300 projets par an._
  * **Mots clés**: _visualisation architecturale, rendu 3D, immobilier, visite 360_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité


* **[Vivement Lundi !](https://www.vivement-lundi.com/)**  
  * _Studio et société de production rennaise de films et séries d'animation en stop motion et 2D (Mémorable, nommé aux Oscars ; Interdit aux chiens et aux Italiens)._
  * **Mots clés**: _stop motion, animation 2D, long métrage, court métrage_
  * **Remarque**: _Studio de prestation associé : Personne n'est parfait !_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[VizGraphics](https://vizgraphics.com/)**  
  * _Visualisation architecturale : rendus 3D photoréalistes, animations, visites virtuelles et expériences VR pour l'immobilier._
  * **Mots clés**: _visualisation architecturale, rendu photoréaliste, visite virtuelle, immobilier, réalité virtuelle, plans interactifs_
  * **Localisation**: États-Unis/Conifer
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[VRAI Learning](https://vrailearning.com/)**  
  * _Start-up lilloise de formation immersive qui produit des mises en situation en réalité virtuelle et des avatars conversationnels IA, utilisables sur PC, mobile et casque VR._
  * **Mots clés**: _formation immersive, réalité virtuelle, avatars IA_
  * **Localisation**: Lille
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game


* **[Wacom](https://www.wacom.com/)**  
  * _Fabricant japonais de tablettes à stylet (Intuos), d'écrans interactifs (Cintiq, Movink) et de stylets pour le dessin, la 3D, l'animation et la retouche photo._
  * **Mots clés**: _tablette graphique, stylet, écran interactif, matériel pour artistes, dessin numérique, Cintiq_
  * **Localisation**: Japon/Saitama, Allemagne/Dusseldorf, États-Unis/Oregon/Portland, International
  * **Domaine scientifique/technique**: Hardware, Acquisition
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.wacom.com/en-us/about-wacom/careers-at-wacom)


* **[Wanadev](https://www.wanadevstudio.com/)**  
  * _Studio lyonnais indépendant de jeux PC et VR (Ragnarock, Propagation: Paradise Hotel, Vestiges: Fallen Tribes) proposant aussi des services aux professionnels du jeu vidéo._
  * **Mots clés**: _jeu VR, console/PC, jeu indépendant, multijoueur en ligne, Ragnarock, rendu temps réel_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Jeu Vidéo, Commerce/Marketing/Publicité, Architecture/BTP/Urbanisme


* **[Wandercraft](https://en.wandercraft.eu/)**  
  * _Concepteur français d'exosquelettes auto-équilibrés pour la marche et la rééducation (Atalante X, Eve) et de robots humanoïdes industriels (Calvin), acquéreur d'Ekso Bionics._
  * **Mots clés**: _exosquelette, robotique, rééducation, marche auto-équilibrée, robot humanoïde, dispositif médical_
  * **Localisation**: Paris
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Simulation, IHM/Haptique
  * **Domaine d'application**: Robotique/Systèmes autonomes
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/wandercraft/jobs)


* **[Warpfrog](https://warpfrog.com/)**  
  * _Studio indépendant de jeu vidéo spécialisé en réalité virtuelle, créateur de Blade & Sorcery (PC VR) et Blade & Sorcery: Nomad (casques autonomes), avec une équipe internationale en télétravail._
  * **Mots clés**: _jeu VR, Blade & Sorcery, physique temps réel, Unity_
  * **Localisation**: Saint-Herblain
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Simulation, Animation
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://warpfrog.com/all-jobs)


* **[Wassa](https://wassa.io/fr/)**  
  * _Agence digitale pour applications mobiles, traitement d'image et Data Science_
  * **Mots clés**: _applications mobiles, traitement d'images, deep learning, data science, géolocalisation indoor, agence digitale_
  * **Localisation**: France/Paris (Boulogne-Billancourt)
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: IHM/Haptique, Web/Cloud/Big Data, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://wassa.io/fr/offres-emploi/)


* **[WetaFX](https://www.wetafx.co.nz/)**  
  * _Studio néo-zélandais d'effets visuels (Avatar, Le Seigneur des anneaux), réputé pour ses créatures et doublures numériques et son moteur de rendu spectral maison Manuka._
  * **Mots clés**: _effets visuels, long métrage, séries, doublure numérique, motion capture, path tracing, moteur de rendu maison_
  * **Remarque**: _Entreprise majeure du domaine des VFX avec équipe de recherche active._
  * **Localisation**: Nouvelle-Zélande/Wellington
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.wetafx.co.nz/)


* **[Weviz](https://weviz.com/)** (Meshroom VR (Weviz)) 
  * _Éditeur bordelais (ex-MeshroomVR) d'un logiciel de visualisation 3D et VR pour revoir des maquettes CAO industrielles en collaboratif sans être expert CAO._
  * **Mots clés**: _CAO, réalité virtuelle, rendu temps réel, revue de projet, visualisation 3D_
  * **Remarque**: _Entité légale MESHROOM VR active à Bordeaux, mais sans effectif déclaré ni comptes publiés récents : activité à confirmer._
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Visualisation, VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité


* **[Wild Wits Games](https://wildwits.games/)**  
  * _Studio de jeu vidéo indépendant rennais (Sovereign Tower, Crown Gambit, Aetheris), jeux narratifs et roguelikes tactiques sur PC._
  * **Mots clés**: _jeu indépendant, console/PC, roguelike_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Wildblood Studio](https://wildbloodstudio.com/)**  
  * _Studio de jeux vidéo et de contenus interactifs temps réel (applications ludiques, réalité mixte), qui développe le beat'em up coopératif Gangs of Cats._
  * **Mots clés**: _jeu vidéo, réalité mixte, beat'em up_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Wintics](https://wintics.com/)**  
  * _Éditeur parisien de logiciels d'analyse vidéo par IA pour la mobilité et la sécurité urbaine (comptage, détection d'événements, aide à l'enquête)._
  * **Mots clés**: _vision par ordinateur, analyse vidéo, deep learning, mobilité_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Analyse de données
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Sécurité/Défense


* **[Wolcen Studio](https://wolcengame.com/)**  
  * _Studio indépendant de jeux d'action-RPG hack'n'slash sur PC et consoles (Wolcen: Lords of Mayhem)._
  * **Mots clés**: _jeu indépendant, console/PC, action-RPG, CryEngine_
  * **Localisation**: Nice
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Xilam](https://xilam.com)** (Xilam Animation) 
  * _Studio de production et de distribution de séries et films d'animation 2D et 3D._
  * **Mots clés**: _séries d'animation, animation 2D, animation 3D, long métrage, jeunesse_
  * **Localisation**: Paris, Angoulême
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Xishan Studio](https://www.xishan.studio/)**  
  * _Studio créatif franco-chinois créé en 2024 spécialisé dans le développement visuel (concept art, character design, storyboard, animatique) et la supervision artistique de projets d'animation, de jeu et d'édition._
  * **Mots clés**: _développement visuel, concept art, storyboard, direction artistique_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[YellowScan](https://www.yellowscan.com/)**  
  * _Systèmes LiDAR embarqués sur drone pour la cartographie et la topographie_
  * **Mots clés**: _lidar, drone, nuage de points, cartographie, topographie, matériel embarqué_
  * **Localisation**: France/Montpellier (Saint-Clément-de-Rivière)
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie
  * **Domaine d'application**: Géospatial/Cartographie, Patrimoine/Culture, Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.yellowscan.com/career/)


* **[Yorf Studio](https://yorfstudio.com/)**  
  * _Studio de jeux vidéo installé aux Ateliers Magelis, auteur de jeux mobiles (Z Escape, Zombie Defense) et du jeu VR Super Hyper, ULTRA! pour Meta Quest et Steam._
  * **Mots clés**: _jeu vidéo, jeu mobile, réalité virtuelle, Meta Quest_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[YZAR](https://yzar.fr/)** (YZAR (Smartbottle)) 
  * _Start-up bordelaise qui développe des jumeaux numériques 3D, des applications de réalité virtuelle et augmentée pour la formation, la maintenance et la vente dans l'industrie._
  * **Mots clés**: _jumeau numérique, réalité virtuelle, réalité augmentée, formation professionnelle, industrie 4.0_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game, Énergie/Environnement


* **[Zag](https://www.zag.com/)**  
  * _Studio d'animation 3D (Miraculous, les aventures de Ladybug et Chat Noir)_
  * **Mots clés**: _séries d'animation, animation 3D, long métrage, licences/merchandising, jeunesse, Miraculous_
  * **Remarque**: _La franchise Miraculous est gérée depuis 2024 par Miraculous Corp., coentreprise de Mediawan et Zag._
  * **Localisation**: Paris, États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[ZeDrimeTim](https://zedrimetim.com/)**  
  * _Studio francilien (ZDT Studio) fondé par des vétérans du jeu vidéo, de l'animation et des VFX (ex-Arkane, Focus), créateur de Darwin's Paradox!, jeu d'aventure-plateforme sous Unreal Engine 5 publié par Konami (2026)._
  * **Mots clés**: _Unreal Engine, console/PC, jeu de plateforme, animation 3D_
  * **Localisation**: Paris, Fontenay-sous-Bois
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://zedrimetim.com/careers)


* **[Zero Games Studios](https://www.zerogamesstudios.com/)**  
  * _Studio de jeux vidéo (siège parisien, équipe en télétravail) spécialisé dans la prestation, le co-développement et le portage console, PC, mobile et VR, ainsi que ses propres jeux (Hot Lap Racing)._
  * **Mots clés**: _co-développement, portage, console/PC, réalité virtuelle_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.zerogamesstudios.com/careers)


* **[ZSpace](https://zspace.com/)**  
  * _Ordinateurs portables de réalité augmentée/3D stéréoscopique sans casque, avec stylet d'interaction 3D, pour l'éducation (STEM, formation technique)_
  * **Mots clés**: _réalité augmentée, affichage stéréoscopique, suivi de tête, stylet 3D, éducation, formation professionnelle_
  * **Localisation**: États-Unis/San Jose
  * **Domaine scientifique/technique**: IHM/Haptique, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game


