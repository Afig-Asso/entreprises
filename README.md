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


* **[2.21](https://www.littlebigadventure.com/)**  
  * _Studio de jeux vidéo de Chantilly (société 2 Point 21) qui a développé Little Big Adventure – Twinsen's Quest, remake 3D du classique de 1994 sorti en novembre 2024 sur PC et consoles, désormais autoédité, et prépare S.Y.N.C. - One Mecha, Two Pilots (aide au prototypage Pictanovo 2025)._
  * **Mots clés**: _jeu vidéo, remake, Little Big Adventure, consoles, 3D temps réel_
  * **Localisation**: Chantilly
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


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


* **[3DCeram Sinto](https://3dceram.com/)**  
  * _Concepteur et fabricant d'imprimantes 3D céramiques par stéréolithographie (gammes C101, C900, C1000, C3601) fondé en 2001, filiale du groupe japonais Sinto, qui fournit aussi les logiciels de préparation d'impression (CPS 2.0, Build-It) et une solution d'IA (CERIA) pour l'aéronautique, les noyaux de fonderie et le biomédical._
  * **Mots clés**: _impression 3D céramique, stéréolithographie, fabrication additive, logiciel d'impression_
  * **Localisation**: Bonnac-la-Côte
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique


* **[3Deus Dynamics](https://3deusdynamics.com/)**  
  * _Industriel de Rillieux-la-Pape qui imprime en 3D des pièces en silicone grâce à un procédé breveté de moulage dynamique en milieu granulaire (modèles anatomiques, dispositifs médicaux, aéronautique)._
  * **Mots clés**: _fabrication additive, silicone, dispositif médical, aéronautique_
  * **Localisation**: Rillieux-la-Pape
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO
  * [_Jobs_](https://3deusdynamics.com/3deus-dynamics-talents/)


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


* **[5Discovery](https://www.5discovery.com/)**  
  * _Start-up nivernaise éditrice d'une plateforme de formation en réalité virtuelle et IA (soft skills, prise de parole, gestion du stress, sensibilisation au handicap) accessible en casque VR ou en e-learning immersif 360°._
  * **Mots clés**: _formation VR, soft skills, e-learning immersif, métavers_
  * **Localisation**: Nevers
  * **Nombres d'employés**: 7
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game


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


* **[A Thinking Ape](https://www.athinkingape.com/)**  
  * _Studio vancouvérois de jeux mobiles sociaux (Kingdoms of Heckfire, Kingdoms at War, Island Hoppers, Witch Arcana) organisé en petites équipes._
  * **Mots clés**: _jeu mobile, free-to-play, jeux sociaux_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.athinkingape.com/careers/)


* **[Aardman](https://www.aardman.com/)**  
  * _Studio d'animation de Bristol fondé en 1972, spécialiste de la stop-motion et de la 3D (Wallace & Gromit, Shaun le mouton, Chicken Run)._
  * **Mots clés**: _animation, stop-motion, CGI, long métrage_
  * **Localisation**: Royaume-Uni/Bristol
  * **Nombres d'employés**: 450
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Aaron Sims Creative](https://www.aaronsimscreative.com/)**  
  * _Studio de design de personnages et de créatures, d'effets visuels et de cinématiques sous Unreal Engine fondé par Aaron Sims, ayant travaillé sur Stranger Things, Love, Death & Robots, Ready Player One, La Planète des singes et Les Anneaux de Pouvoir._
  * **Mots clés**: _design de créatures, concept art, effets visuels, Unreal Engine_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Modélisation, Rendu offline/VFX, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Abbelight](https://www.abbelight.com/)**  
  * _Fabricant à Cachan de solutions de microscopie de super-résolution (nanoscopie de molécule unique) et des logiciels de reconstruction et d'analyse associés._
  * **Mots clés**: _imagerie scientifique, microscopie, super-résolution, reconstruction 3D_
  * **Localisation**: Cachan
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Reconstruction
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.abbelight.com/company/join-us/)


* **[Absurd Ventures](https://absurdventures.com/)**  
  * _Société de médias et de jeux vidéo de Santa Monica fondée en 2023 par Dan Houser (cofondateur de Rockstar Games), qui développe un jeu AAA en monde ouvert dans l'univers A Better Paradise, édité par Smilegate._
  * **Mots clés**: _AAA, monde ouvert, jeu narratif, animation_
  * **Localisation**: États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://absurdventures.com/careers)


* **[ACFX](https://acfx.fr/)**  
  * _Studio indépendant d'effets visuels de la Plaine Images (Tourcoing) travaillant sur des longs métrages et des séries : supervision de tournage, environnements CG, extensions de décors, animation, compositing ; exploite aussi un plateau de tournage de 500 m²._
  * **Mots clés**: _effets visuels, compositing, long métrage, set extension_
  * **Localisation**: Tourcoing
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Acreos](https://acreos.eu/)**  
  * _Concepteur et fabricant de simulateurs de conduite d'engins pour la formation professionnelle (pelles, grues, poids lourds, engins portuaires, agricoles et miniers), avec plateformes de simulation et mode collaboratif._
  * **Mots clés**: _simulateur, engins de chantier, formation, grue_
  * **Localisation**: Metz, Morhange
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Simulation, Rendu temps réel/Moteurs 3D, IHM/Haptique
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://acreos.eu/rejoindre-acreos/)


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
  * **Localisation**: États-Unis/Santa Monica, Canada/{Québec, Montréal}, International
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
  * [_Jobs_](https://jobs.stationf.co/companies/actronika)


* **[ADCIS](https://www.adcis.net/)**  
  * _Éditeur normand de logiciels de vision par ordinateur et d'analyse d'images depuis 1995 (suite Aphelion, solutions d'ophtalmologie OphtAI, stéréologie), pour la santé et l'industrie (contrôle qualité, matériaux, microélectronique) ; filiale du groupe Evolucare._
  * **Mots clés**: _analyse d'images, Aphelion, ophtalmologie, contrôle qualité, IA_
  * **Localisation**: Saint-Contest
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Imagerie, IA générative (image/3D)
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO


* **[AdHoc Studio](https://adhocla.com/)**  
  * _Studio de Los Angeles fondé par d'anciens de Telltale Games, auteur du jeu narratif de super-héros Dispatch (2025, plus de 2 millions de joueurs), qui développe un jeu Critical Role et envisage une saison 2._
  * **Mots clés**: _jeu narratif, animation 3D, épisodique, Unreal Engine_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.adhocla.com)


* **[Adobe](https://www.adobe.com/fr/)**  
  * _Éditeur de logiciels de création (Photoshop, Illustrator, Premiere, Substance 3D) et de documents (Acrobat), intégrant l'IA générative Firefly._
  * **Mots clés**: _plugin/logiciel pour artistes, retouche d'image, montage vidéo, IA générative, Photoshop, Firefly, Substance 3D_
  * **Remarque**: _Centre de recherche à Paris_
  * **Produits**: Photoshop, Substance 3D, Premiere, Illustrator, etc.
  * **Localisation**: États-Unis, Canada, Paris, Royaume-Uni, Inde, International
  * **Nombres d'employés**: 31000
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Design/Fabrication
  * **Domaine d'application**: Art/Evenementiel, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.adobe.com/us/en)


* **[Agenium](https://www.agenium.com/)**  
  * _Groupe français d'ingénierie pour l'industrie, la défense et le spatial : simulation d'entraînement, génération d'environnements 3D synthétiques, IA embarquée et traitement d'images spatiales._
  * **Mots clés**: _défense, spatial, simulateur d'entraînement, environnement synthétique, deep learning, traitement d'images, surveillance de l'espace_
  * **Localisation**: Toulouse, Saint-Germain-en-Laye, Rennes
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication, Modélisation, Animation
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation, Entrainement/Formation/Serious Game


* **[Agfa HealthCare (Waterloo)](https://www.agfahealthcare.com/)**  
  * _Centre mondial de R&D d'Agfa HealthCare (groupe belge Agfa-Gevaert) ouvert en 2012 à Waterloo, qui développe la plateforme d'imagerie médicale d'entreprise (PACS IMPAX, Enterprise Imaging, visualiseurs diagnostiques, pathologie numérique)._
  * **Mots clés**: _PACS, imagerie d'entreprise, radiologie, pathologie numérique_
  * **Localisation**: Canada/Waterloo, Canada/Mississauga, Belgique/Mortsel
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Web/Cloud/Big Data
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://careers.agfa.com/HealthCare/)


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
  * [_Jobs_](https://www.airbus.com/en/careers)


* **[Airy3D](https://www.airy3d.com/)**  
  * _Société montréalaise de vision 3D qui transforme un capteur d'image 2D standard en capteur de profondeur grâce à un masque de diffraction breveté et à des algorithmes d'imagerie computationnelle (DepthIQ), pour l'électronique grand public, la robotique et l'automobile._
  * **Mots clés**: _capteur de profondeur, imagerie computationnelle, vision 3D, DepthIQ_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Acquisition, Vision, Imagerie
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation, Sécurité/Défense
  * [_Jobs_](https://www.airy3d.com/join-us/)


* **[Alcon](https://www.alcon.com/)** (Alcon (campus de Lake Forest)) 
  * _Groupe d'ophtalmologie dont le campus principal de Lake Forest développe des équipements chirurgicaux et des produits de diagnostic et de visualisation ophtalmiques (imagerie, optique, logiciels de dispositifs médicaux)._
  * **Mots clés**: _ophtalmologie, imagerie médicale, visualisation chirurgicale, dispositifs médicaux_
  * **Localisation**: États-Unis/Lake Forest
  * **Domaine scientifique/technique**: Imagerie, Visualisation
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://alcon.wd5.myworkdayjobs.com/careers_alcon)


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
  * [_Jobs_](https://jobs.aligntech.com/)


* **[Alkemy X](https://alkemy-x.com/)**  
  * _Studio d'effets visuels, d'animation, de montage et de production pour le cinéma, les séries et la publicité, avec un bureau à Burbank aux côtés de ses studios du New Jersey, de New York et de Vancouver._
  * **Mots clés**: _effets visuels, séries, publicité_
  * **Localisation**: États-Unis/Burbank, Canada/Vancouver, Canada/Toronto
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


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
  * [_Jobs_](https://almedia.fr/jobs/)


* **[Alt Shift](https://altshift.fr/)**  
  * _Studio indépendant de jeux vidéo à Montpellier, créateur du roguelite spatial Crying Suns, du puzzle game Not Not et de Battlestar Galactica: Scattered Hopes (2026)._
  * **Mots clés**: _jeu indépendant, roguelite, PC/console, stratégie_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Altametris](https://www.altametris.com/)**  
  * _Filiale de SNCF Réseau qui acquiert (drones, trains, lidar) et traite à grande échelle des données 3D pour construire les jumeaux numériques d'infrastructures._
  * **Mots clés**: _lidar, nuage de points, jumeau numérique, drone, deep learning_
  * **Localisation**: Saint-Denis
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, Vision
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Géospatial/Cartographie
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/altametris/jobs)


* **[Alteia](https://alteia.com/)**  
  * _Éditeur français d'une plateforme d'intelligence visuelle (vision par ordinateur, IA) pour analyser des images aériennes et terrain dans l'énergie, les réseaux et les mines, racheté par GE Vernova._
  * **Mots clés**: _vision par ordinateur, deep learning, imagerie aérienne, drone, inspection d'infrastructures, énergie, GE Vernova_
  * **Remarque**: _Racheté par GE Vernova en 2025 (intégré à GridOS Visual Intelligence)._
  * **Localisation**: Toulouse, Paris
  * **Nombres d'employés**: 80
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Géospatial/Cartographie, Industrie/Manufacturing/CAO, Énergie/Environnement
  * [_Jobs_](https://careers.alteia.com/)


* **[Altis Labs](https://www.altislabs.com/)**  
  * _Start-up torontoise (2019) d'IA d'imagerie médicale pour l'oncologie, dont le modèle IPRO prédit la survie des patients à partir de scanners de routine pour accélérer les essais cliniques ; série A de 25 M$ US en septembre 2026._
  * **Mots clés**: _imagerie oncologique, scanner, biomarqueurs d'imagerie, essais cliniques_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://builtintoronto.com/company/altis-labs)


* **[AMA XpertEye](https://www.amaxperteye.com/)** (AMA) 
  * _Éditeur de solutions d'assistance à distance et de workflows en réalité augmentée sur lunettes connectées._
  * **Mots clés**: _réalité augmentée, assistance à distance, lunettes connectées, inspection, télémédecine, deep learning_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Web/Cloud/Big Data
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique
  * [_Jobs_](https://www.amaxperteye.com/job-offers/)


* **[AMD](https://www.amd.com/)**  
  * _Développement de processeurs et cartes graphiques: développement matériel et logiciel._
  * **Mots clés**: _GPU, CPU, puce/semi-conducteur, calcul haute performance, accélérateurs IA, pilotes graphiques, FPGA_
  * **Localisation**: États-Unis, Canada/Markham, International
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


* **[Anduril](https://www.anduril.com/)** (Anduril Industries) 
  * _Entreprise de technologies de défense (logiciel Lattice, drones et véhicules autonomes) dont le siège de Costa Mesa abrite des équipes de perception par vision, de simulation de capteurs (imagerie synthétique sous Unreal Engine) et de plateformes de simulation de mission._
  * **Mots clés**: _défense, perception, simulation de capteurs, imagerie synthétique, systèmes autonomes_
  * **Localisation**: États-Unis/Costa Mesa
  * **Nombres d'employés**: 5000
  * **Domaine scientifique/technique**: Vision, Simulation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Sécurité/Défense, Robotique/Systèmes autonomes
  * [_Jobs_](https://www.anduril.com/careers/)


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
  * [_Jobs_](https://animallogic.com/careers/)


* **[Animatrik](https://www.animatrik.com/)**  
  * _Studio de capture de performance (corps et visage) et de tournage temps réel basé à Burnaby, doté d'un des plus grands plateaux de motion capture indépendants d'Amérique du Nord, au service du cinéma, du jeu vidéo et de la XR._
  * **Mots clés**: _motion capture, capture faciale, production virtuelle, Burnaby_
  * **Localisation**: Canada/Burnaby, États-Unis/Culver City
  * **Domaine scientifique/technique**: Acquisition, Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Ankama](https://www.ankama.com)**  
  * _Studio transmédia : jeux vidéo en ligne (Dofus, Wakfu, Waven), films et séries d'animation, édition._
  * **Mots clés**: _MMORPG, multijoueur en ligne, jeu indépendant, séries d'animation, animation 2D, transmédia, édition BD/manga_
  * **Localisation**: Roubaix
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Animation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://recrutement.ankama.com/)


* **[Ansys](https://ansys.synopsys.com/products/optics/ansys-speos)** (Ansys, part of Synopsys (ex-OPTIS)) 
  * _Éditeur de simulation numérique (groupe Synopsys depuis 2025) ; le centre R&D de La Farlède (ex-OPTIS) développe Speos, logiciel de simulation physique de la lumière et de rendu photoréaliste._
  * **Mots clés**: _simulation optique, rendu photoréaliste, rendu spectral, éclairage, automobile, capteurs, Speos_
  * **Localisation**: États-Unis/Canonsburg, France/La Farlède, Montigny-le-Bretonneux, Toulouse, Villeurbanne, Lille, Biot, International
  * **Domaine scientifique/technique**: Simulation, Rendu offline/VFX, Visualisation
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO, Générique
  * [_Jobs_](https://careers.ansys.com/)


* **[Apera AI](https://apera.ai/)**  
  * _Start-up vancouvéroise de vision 3D par IA pour la robotique industrielle (« 4D Vision ») permettant aux robots de saisir et manipuler des pièces en vrac._
  * **Mots clés**: _vision 3D, robotique, bin picking, IA_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Vision, Reconstruction
  * **Domaine d'application**: Robotique/Systèmes autonomes, Industrie/Manufacturing/CAO
  * [_Jobs_](https://job-boards.greenhouse.io/aperaaiinc)


* **[Apologue FX](https://www.apologuefx.com/)**  
  * _Studio lyonnais d'effets visuels temps réel pour le jeu vidéo, les cinématiques et la XR (Unreal, Unity, moteurs propriétaires, Houdini, EmberGen)._
  * **Mots clés**: _effets temps réel, Houdini, Unreal Engine, AAA_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation, Rendu offline/VFX
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.apologuefx.com/career)


* **[Apple](https://www.apple.com/)**  
  * _Constructeur américain d'appareils grand public (Mac, iPhone, iPad, Vision Pro) conçus autour de ses propres puces Apple Silicon à GPU intégré._
  * **Mots clés**: _matériel grand public, puce/semi-conducteur, GPU, réalité mixte, Apple Vision Pro, écrans_
  * **Localisation**: États-Unis/Cupertino, États-Unis/Culver City, International
  * **Nombres d'employés**: 160000
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Hardware, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://jobs.apple.com)


* **[AppliedVR](https://www.appliedvr.io/)**  
  * _Entreprise de Van Nuys qui développe des thérapies en réalité virtuelle (RelieVRx, dispositif médical autorisé par la FDA contre la lombalgie chronique, SustainVR) et mène des programmes de recherche clinique sur les « thérapeutiques immersives »._
  * **Mots clés**: _réalité virtuelle, thérapeutique numérique, douleur chronique, dispositif médical_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: VR/AR, IHM/Haptique
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.appliedvr.io/careers)


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
  * [_Jobs_](https://blaxtair.com/offres-emplois)


* **[Argolight](https://argolight.com/)**  
  * _Société pessacaise qui conçoit des lames et microplaques de calibration fluorescentes (gravure laser) et le logiciel associé pour mesurer la résolution et contrôler la qualité des systèmes d'imagerie de fluorescence._
  * **Mots clés**: _imagerie scientifique, microscopie, métrologie, calibration, analyse d'images_
  * **Produits**: Calibration Slides, Daybook (logiciel)
  * **Localisation**: Pessac
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://argolight.com/offers/)


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
  * [_Jobs_](https://www.arkhenum.fr/nous-rejoindre/)


* **[Arm (Cambridge)](https://www.arm.com/)**  
  * _Concepteur de microarchitectures, dont les GPU Mali; la R&D graphique (GPU, ray tracing mobile, outils de profilage) est basée à Cambridge._
  * **Mots clés**: _GPU Mali, architecture, ray tracing mobile_
  * **Localisation**: Royaume-Uni/Cambridge
  * **Nombres d'employés**: 3500
  * **Domaine scientifique/technique**: Hardware, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Générique


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
  * [_Jobs_](https://artgp.fr/nous-rejoindre/)


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


* **[Artisan Studios](https://www.artisangamestudios.com/)**  
  * _Studio de jeux de rôle 2D (Astria Ascending, Lost Hellden, Super Neptunia RPG) travaillant avec des éditeurs japonais, implanté à Québec et à Mauguio près de Montpellier._
  * **Mots clés**: _RPG, jeu 2D, co-développement, marché japonais_
  * **Localisation**: Mauguio
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


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
  * [_Jobs_](https://atlasv.io/career/)


* **[Atomic Arts](https://atomicarts.com/)**  
  * _Studio d'effets visuels et d'animation fondé en 1994 dans le West End de Londres, avec des bureaux à Los Angeles, Mumbai et Bangalore, pour le cinéma, les séries et l'événementiel (Game of Thrones, Stranger Things, Les Anneaux de pouvoir, Mission: Impossible – Dead Reckoning), associé à la post-production Molinare (Atomic@Molinare)._
  * **Mots clés**: _effets visuels, animation, séries, Soho_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[Atomic Cartoons](https://www.atomiccartoons.com/)**  
  * _Studio d'animation 2D et 3D de Vancouver (Spidey et ses amis extraordinaires, Hilda), racheté avec sa maison mère Thunderbird par Blue Ant Media en 2026, avec des équipes à Ottawa et Los Angeles._
  * **Mots clés**: _animation 3D, séries jeunesse, Marvel, Blue Ant_
  * **Localisation**: Canada/Vancouver, États-Unis/Los Angeles
  * **Nombres d'employés**: 600
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://job-boards.greenhouse.io/atomiccartoons)


* **[Atypique Studio](https://www.atypique-studio.com/)**  
  * _Studio indépendant de jeux vidéo fondé en 2017 à La Ciotat, qui développe des jeux multijoueurs (Mixcity Arena, Noara: The Conspiracy) et propose des prestations de production._
  * **Mots clés**: _jeu indépendant, multijoueur, MOBA_
  * **Localisation**: La Ciotat
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Audace Digital Learning](https://www.audace-digital-learning.fr/)**  
  * _Agence de digital learning de Douvrin (Pas-de-Calais), active depuis 25 ans, qui conçoit des e-learnings en 2D/3D, des serious games, de l'immersive learning et une gamme de simulateurs de conduite en réalité virtuelle (ponts roulants, pont polaire nucléaire, chariots élévateurs, nacelles, grues, extinction de feu)._
  * **Mots clés**: _simulateur VR, serious game, formation industrielle, e-learning 3D_
  * **Localisation**: Douvrin
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Simulation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Augmenta](https://augmenta.tech/)**  
  * _Société villeurbannaise (Pôle Pixel) éditant une solution matérielle et logicielle de suivi de personnes sans marqueur pour rendre interactifs sols, murs et espaces immersifs._
  * **Mots clés**: _tracking de personnes, installations interactives, vision par ordinateur, événementiel/mapping_
  * **Remarque**: _Technologie issue du studio Théoriz (même adresse au Pôle Pixel) ; société créée en 2023._
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Acquisition, Vision, IHM/Haptique
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers, Patrimoine/Culture


* **[Augmenta AI](https://www.augmenta.ai/)**  
  * _Start-up torontoise (2018, fondée par des pionniers de la conception générative d'Autodesk) qui automatise par IA la conception 3D des systèmes électriques des bâtiments (tracé des chemins de câbles dans la maquette BIM, intégration Revit) ; plateforme ACP 2.0 sortie en juin 2026._
  * **Mots clés**: _conception générative, BIM, génie électrique, Revit_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Géométrie
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Augmentalix](https://www.augmentalix.com/)**  
  * _Intégrateur de réalité virtuelle, augmentée et mixte installé à Anglet : sélection de matériels et logiciels XR, jumeau numérique et BIM en VR (GISinVR), formation immersive et maintenance assistée, pour l'Éducation nationale, KNDS ou Airbus._
  * **Mots clés**: _Réalité virtuelle, Réalité augmentée, Formation immersive, Jumeau numérique, Intégrateur XR_
  * **Localisation**: Anglet
  * **Nombres d'employés**: 10
  * **Domaine scientifique/technique**: VR/AR, Reconstruction
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[Auroch Digital](https://aurochdigital.com/)**  
  * _Studio de Bristol (Space Hulk: Tactics, Chernobyl VR Project), appartenant au groupe Sumo._
  * **Mots clés**: _jeu vidéo, serious game, Bristol_
  * **Localisation**: Royaume-Uni/Bristol
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo, Entrainement/Formation/Serious Game


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
  * **Localisation**: États-Unis, Inde, Royaume-Uni, Singapour, Norvège, Canada/{Montréal, Toronto}, International
  * **Nombres d'employés**: 15000
  * **Domaine scientifique/technique**: Modélisation, Animation, Design/Fabrication, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.autodesk.com/careers/overview)


* **[AutoForm France](https://www.autoform.com/fr)**  
  * _Filiale française (Éguilles, près d'Aix) de l'éditeur suisse AutoForm, logiciels de simulation de la mise en forme de tôle et de l'assemblage de caisse en blanc (jumeau numérique du process)._
  * **Mots clés**: _emboutissage, simulation par éléments finis, caisse en blanc, jumeau numérique_
  * **Localisation**: Éguilles
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO


* **[Automotus](https://www.automotus.ai/)**  
  * _Start-up angeline de gestion automatisée des bordures de trottoir : caméras à vision par ordinateur fixées sur l'éclairage public qui détectent stationnements et livraisons (zones de livraison zéro émission avec le LADOT, aéroports)._
  * **Mots clés**: _vision par ordinateur, gestion de la voirie, ville intelligente, caméras_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 24
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.automotus.ai/)


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


* **[Avigilon](https://www.avigilon.com/)**  
  * _Entreprise de vidéosurveillance fondée à Vancouver, filiale de Motorola Solutions depuis 2018, qui conçoit caméras, logiciels de gestion vidéo et analyses vidéo par IA (détection et recherche d'objets et de personnes)._
  * **Mots clés**: _analyse vidéo, vidéosurveillance, IA, Motorola Solutions_
  * **Localisation**: Canada/Vancouver
  * **Nombres d'employés**: 236
  * **Domaine scientifique/technique**: Vision, Analyse de données, Hardware
  * **Domaine d'application**: Sécurité/Défense


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
  * [_Jobs_](https://www.axilumrobotics.com/en/jobs/)


* **[b<>com](https://b-com.com/)**  
  * _Institut de recherche technologique rennais qui développe des technologies numériques, notamment en image et vision (vidéo immersive, IA pour l'image, imagerie médicale, réalité augmentée)._
  * **Mots clés**: _vidéo immersive, vision par ordinateur, deep learning, réalité augmentée_
  * **Remarque**: _Fondation de coopération scientifique (pas une société commerciale) ; ~180 personnes selon son site._
  * **Localisation**: Cesson-Sévigné
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision, VR/AR
  * **Domaine d'application**: Générique, Médical/Biologique
  * [_Jobs_](https://b-com.com/nous-rejoindre)


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
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/balyo/jobs)


* **[Bardel Entertainment](https://bardel.ca/)**  
  * _Studio d'animation 2D et 3D fondé en 1987 à Vancouver (Rick et Morty, The Dragon Prince, Carol & the End of the World), filiale du groupe italien Rainbow, avec un second studio à Montréal._
  * **Mots clés**: _animation 2D, animation 3D, séries, long métrage_
  * **Localisation**: Canada/Vancouver, Canada/Montréal
  * **Nombres d'employés**: 478
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://apply.workable.com/bardel-entertainment/)


* **[Barnstorm VFX](https://www.barnstormvfx.com/)**  
  * _Studio d'effets visuels nommé aux Emmy et aux VES Awards, fondé à Los Angeles, avec un studio à Vancouver ainsi qu'à Montréal, Toronto, New York, Atlanta et Londres (Spider-Noir pour Prime Video)._
  * **Mots clés**: _effets visuels, séries, compositing, environnements_
  * **Localisation**: Canada/Vancouver, États-Unis/Los Angeles
  * **Nombres d'employés**: 126
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Beemoov](https://www.beemoov.com/)**  
  * _Studio-éditeur nantais créé en 2006 de jeux gratuits sur navigateur et mobile, principalement des visual novels et jeux narratifs illustrés (Amour Sucré, Eldarya, Moonlight Lovers)._
  * **Mots clés**: _visual novel, jeu navigateur, jeu mobile, illustration 2D_
  * **Localisation**: Nantes
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.beemoov.com/recrutement)


* **[Behaviour Interactive](https://www.bhvr.com/)**  
  * _Plus grand studio indépendant de jeu vidéo au Canada (fondé en 1992, siège à Montréal), créateur et éditeur de Dead by Daylight, il fait aussi du co-développement (Gears of War: E-Day) et a des studios à Toronto, au Royaume-Uni et à Rotterdam._
  * **Mots clés**: _jeu vidéo, jeu en ligne, co-développement, Dead by Daylight, console/PC_
  * **Localisation**: Canada/Montréal, Canada/Toronto
  * **Nombres d'employés**: 1200
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.bhvr.com/jobs/)


* **[Beicip-Franlab](https://www.beicip.com/)**  
  * _Filiale d'IFP Energies nouvelles qui édite la plateforme OpenFlow de modélisation géologique 3D, de bassin et de réservoir pour l'énergie et le stockage du CO2._
  * **Mots clés**: _modélisation géologique, simulation, visualisation 3D, géosciences_
  * **Localisation**: Rueil-Malmaison
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Modélisation, Simulation, Visualisation
  * **Domaine d'application**: Énergie/Environnement
  * [_Jobs_](https://www.beicip.com/careers/)


* **[Believer](https://believer.gg/)**  
  * _Studio de jeu vidéo fondé en 2023 par d'anciens dirigeants de Riot Games et basé à Los Angeles, qui développe un jeu en monde ouvert coopératif sous Unreal Engine 5 et publie des outils libres pour Unreal (Friendshipper, Claireon)._
  * **Mots clés**: _monde ouvert, Unreal Engine 5, outils open source, start-up_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 33
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://believer.gg/jobs/)


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


* **[Bento Box Entertainment](https://www.bentoboxent.com/)**  
  * _Studio d'animation 2D pour adultes de Fox Entertainment (Bob's Burgers, The Great North, Housebroken, Grimsburg), installé à North Hollywood et Burbank avec des studios à Atlanta et Toronto._
  * **Mots clés**: _animation 2D, animation adulte, séries TV, Fox_
  * **Localisation**: États-Unis/Los Angeles, États-Unis/Burbank, Canada/Toronto
  * **Nombres d'employés**: 350
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://jobs.lever.co/bentoboxent)


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


* **[Beyond Capture Studios](https://www.beyond-capture.com/)**  
  * _Studio de capture de mouvement et de performance (siège à Vancouver) dont le plateau de Montréal, ouvert en 2023 (3 700 m², 145 caméras Qualisys), est présenté comme le plus grand du monde ; travaille pour le jeu vidéo, le cinéma et la télévision (Mortal Kombat 1, Street Fighter 6)._
  * **Mots clés**: _motion capture, performance capture, photogrammétrie, production virtuelle_
  * **Localisation**: Canada/Montréal, Canada/Vancouver
  * **Domaine scientifique/technique**: Acquisition, Animation, Reconstruction
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Big Company](https://www.bigcompany.fr/)**  
  * _Studio lyonnais fondé en 2001 de production audiovisuelle, d'animation 2D/3D et de contenus interactifs et immersifs (3D temps réel, VR/AR, mapping, serious games)._
  * **Mots clés**: _animation 3D, rendu temps réel, événementiel/mapping, publicité_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.bigcompany.fr/news-jobs/)


* **[Bild Studios](https://www.bildstudios.com/)**  
  * _Société de technologies visuelles qui exploite MARS Volume, plateau indépendant de production virtuelle et d'effets in-camera (mur LED de 25,5 m, moteurs de jeu, suivi de caméra) à Ruislip (Grand Londres), utilisé pour 3 Body Problem, Culprits ou Gangs of London, avec un centre de formation (MARS Academy)._
  * **Mots clés**: _production virtuelle, mur LED, VFX in-camera, Unreal Engine_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel
  * [_Jobs_](https://www.marsvolume.com/careers/)


* **[BIM&CO](https://www.bimandco.com/)**  
  * _Éditeur normand d'une plateforme d'objets BIM (bibliothèque de milliers d'objets 3D de fabricants et gestion de données produits) pour l'architecture et la construction._
  * **Mots clés**: _BIM, objets 3D, maquette numérique, construction_
  * **Localisation**: Saint-Romain-de-Colbosc
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication, Web/Cloud/Big Data
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Black Cog](https://black-cog.com/)**  
  * _Studio d'effets visuels et de post-production (FX de destruction et fluides, compositing, assets 3D temps réel et précalculés)._
  * **Mots clés**: _effets visuels, long métrage, documentaire, publicité, simulation physique, assets temps réel_
  * **Localisation**: Beychac-et-Caillau
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Black Kite Studios](https://www.blackkitestudios.com/)**  
  * _Studio indépendant d'effets visuels, de design et d'étalonnage fondé en 2019 à Londres, pour la publicité, les clips et les séries (KFC x Stranger Things en CG intégral, M&S, Honda, McDonald's)._
  * **Mots clés**: _effets visuels, publicité, CGI, étalonnage_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://joinus.blackkitestudios.com/)


* **[Blackbird Interactive](https://www.blackbirdinteractive.com/)**  
  * _Studio de jeu vidéo indépendant de Vancouver (environ 200 personnes) fondé par des vétérans de Relic, développeur de Homeworld: Deserts of Kharak, Homeworld 3, Hardspace: Shipbreaker et Minecraft Legends, et co-développeur pour Starfield, Subnautica et Minecraft._
  * **Mots clés**: _stratégie, co-développement, Homeworld, Unity_
  * **Localisation**: Canada/Vancouver
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.blackbirdinteractive.com/careers)


* **[Blackmeal](https://blackmeal.com/)**  
  * _Studio de motion design et d'animation 2D/3D fondé en 2011, avec des bureaux à Paris et Nantes, qui réalise films de marque, publicités et cinématiques._
  * **Mots clés**: _motion design, animation 3D, animation 2D, publicité_
  * **Remarque**: _Siège à Nantes, bureau 8 rue Jules Vallès, Paris 11e._
  * **Localisation**: Paris, Nantes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Jeu Vidéo


* **[Blind Squirrel Games](https://blindsquirrelentertainment.com/)**  
  * _Studio de co-développement fondé en 2010 à Irvine, connu pour les remasters BioShock: The Collection et Borderlands, qui développe aussi ses propres jeux comme Cosmorons._
  * **Mots clés**: _co-développement, remaster, AAA, Cosmorons_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://blindsquirrelentertainment.com/careers)


* **[Blippar](https://www.blipparstudios.com/)**  
  * _Développement d'outils pour la création de contenu en AR sur smartphone_
  * **Mots clés**: _réalité augmentée, agence créative, marketing, mobile, WebAR, éducation_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: VR/AR, Modélisation, Web/Cloud/Big Data
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Commerce/Marketing/Publicité


* **[Blizzard Entertainment](https://www.blizzard.com/)**  
  * _Développeur et éditeur de jeux vidéo (filiale de Microsoft via Activision Blizzard) dont le siège et les principales équipes sont à Irvine, auteur de World of Warcraft, Diablo IV, Overwatch 2 et Hearthstone._
  * **Mots clés**: _MMORPG, World of Warcraft, Diablo, Overwatch, AAA_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 1300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.blizzard.com/)


* **[Bloc D](https://bloc-d.com/)**  
  * _Studio d'animation 3D et d'effets visuels pour le cinéma, les séries, la publicité et les spectacles (dont temps réel)._
  * **Mots clés**: _animation 3D, effets visuels, publicité, événementiel/mapping, rendu temps réel, rigging, motion design_
  * **Localisation**: Villeurbanne, Villeurbanne
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel
  * [_Jobs_](https://bloc-d.com/jobs/)


* **[Blue Ortho](https://www.exac.com/)**  
  * _Filiale d'Exactech qui conçoit à Meylan la plateforme de navigation chirurgicale ExactechGPS (épaule, genou, première navigation pour prothèse de cheville, homologuée FDA)._
  * **Mots clés**: _chirurgie assistée par ordinateur, navigation, orthopédie_
  * **Localisation**: Meylan
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Visualisation, Acquisition, Imagerie
  * **Domaine d'application**: Médical/Biologique


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


* **[Blue Zoo](https://www.bluezoo.co.uk/)**  
  * _Studio d'animation 3D et de production de séries pour enfants (Numberblocks, Alphablocks) basé à Londres._
  * **Mots clés**: _Animation 3D, Séries TV_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 250
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[BlueBolt](https://www.blue-bolt.com/)**  
  * _Studio indépendant d'effets visuels basé à Londres pour séries et films (The Last Kingdom, Downton Abbey : Le Grand Final)._
  * **Mots clés**: _VFX, Séries TV, Cinéma_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Bluecham](https://www.bluecham.net/)**  
  * _Société calédonienne fondée en 2008 qui traite l'imagerie satellitaire (dont Pléiades) par traitement du signal et IA pour des plateformes géospatiales d'aide à la décision (QËHNELÖ, QVX) : risques naturels, environnement, mines, lagons._
  * **Mots clés**: _télédétection, imagerie satellite, SIG, Nouvelle-Calédonie_
  * **Localisation**: France/Nouméa (Nouvelle-Calédonie)
  * **Domaine scientifique/technique**: Imagerie, Vision, Web/Cloud/Big Data
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement


* **[Blur Studio](https://www.blur.com/)**  
  * _Studio indépendant d'animation 3D et d'effets visuels fondé par Tim Miller, spécialiste des cinématiques de jeux vidéo (Call of Duty) et des séries d'animation (Love, Death & Robots, Secret Level, dont un dérivé Warhammer 40,000 a été annoncé en 2026)._
  * **Mots clés**: _animation 3D, cinématiques, séries, Love, Death & Robots_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.blur.com/careers)


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


* **[Bonfire Studios](https://www.bonfirestudios.com/)**  
  * _Studio indépendant d'Irvine fondé en 2016 par Rob Pardo (ex-Blizzard, World of Warcraft), qui développe Arkheron, jeu d'action multijoueur PvP en équipe dévoilé en 2025._
  * **Mots clés**: _Arkheron, PvP, multijoueur, Rob Pardo_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 90
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.bonfirestudios.com/careers)


* **[Borderline Films](https://borderlinefilms.fr/)** (Schmuby Productions (Borderline Films)) 
  * _Société de production et studio de fabrication d'animation 2D et 3D, coproducteur et prestataire de films d'Autour de Minuit (Unicorn Wars, Jean-Michel Super Caribou, La Grande Rêvasion) et de Mars Express._
  * **Mots clés**: _animation 2D, animation 3D, long métrage, court métrage, coproduction_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://borderlinefilms.fr/?page_id=2)


* **[Borea](https://borea-dental.com/)**  
  * _Concepteur et fabricant, issu d'une collaboration avec le laboratoire XLIM et incubé à ESTER Technopole (2013), de solutions numériques de prise de teinte dentaire : le Cobra Shade Scan, appareil de mesure spectrophotométrique multipoint de la couleur et de la translucidité des dents, et son logiciel d'analyse._
  * **Mots clés**: _spectrophotométrie, colorimétrie dentaire, prise de teinte, imagerie_
  * **Localisation**: Limoges
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Acquisition, Imagerie
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://borea-dental.com/borea/rejoignez-nous/)


* **[Boulder Media](https://bouldermedia.tv/)**  
  * _Studio d'animation dublinois (Hasbro 2016, puis Princess Productions) produisant séries et films 2D et 3D pour enfants et adultes (Rick et Morty, Les Simpson en sous-traitance)._
  * **Mots clés**: _animation 2D/3D, séries TV, Dublin_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Brace Yourself Games](https://braceyourselfgames.com/)**  
  * _Studio indépendant de jeu vidéo de Vancouver, créateur de Crypt of the NecroDancer, Cadence of Hyrule (avec Nintendo) et Rift of the NecroDancer, et éditeur de jeux indépendants (Cobalt Core, Phantom Brigade)._
  * **Mots clés**: _jeu de rythme, jeu indépendant, NecroDancer, édition_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Brainomix](https://www.brainomix.com/)**  
  * _Spin-out d'Oxford en IA pour l'imagerie médicale (AVC, poumon), logiciels e-ASPECTS et e-Stroke._
  * **Mots clés**: _imagerie médicale, IA, AVC, scanner_
  * **Localisation**: Royaume-Uni/Oxford
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Brand New School](https://www.brandnewschool.com/)**  
  * _Studio de création de Los Angeles fondé il y a une vingtaine d'années, qui réalise pour des marques du motion design, de l'animation 3D, des effets visuels et des expériences interactives, avec une activité de technologie créative (pipelines IA, outils)._
  * **Mots clés**: _motion design, animation 3D, effets visuels, technologie créative_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 64
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.brandnewschool.com/careers)


* **[BrandXR](https://www.brandxr.io/)**  
  * _Agence et plateforme américaine de réalité augmentée (WebAR, filtres Instagram/Snapchat, fresques AR) pour le marketing, l'éducation et le commerce._
  * **Mots clés**: _réalité augmentée, agence créative, marketing, WebAR, filtres réseaux sociaux, e-commerce/configurateur 3D_
  * **Localisation**: États-Unis/{Orlando, Detroit}
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.brandxr.io/careers)


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
  * [_Jobs_](https://broadpeak.tv/join-our-team/)


* **[Brompton Technology](https://www.bromptontech.com/)**  
  * _Fabricant londonien de processeurs vidéo pour écrans LED (gamme Tessera) utilisés sur les volumes de production virtuelle, les plateaux de tournage et les grandes tournées, comme le Debí Tirar Más Fotos World Tour de Bad Bunny (2025-2026)._
  * **Mots clés**: _processeur LED, production virtuelle, Tessera, écrans LED_
  * **Localisation**: États-Unis/Burbank, Royaume-Uni/Londres
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Hardware, Imagerie, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel
  * [_Jobs_](https://www.bromptontech.com/careers/)


* **[Brown Bag Films](https://www.brownbagfilms.com/)**  
  * _Studio d'animation dublinois (groupe 9 Story Media) produisant séries 2D/3D pour enfants (Doc McStuffins, Octonauts, Hey Duggee) depuis ses studios de Smithfield._
  * **Mots clés**: _animation 2D/3D, séries TV, Smithfield, 9 Story_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Brunch Studio](https://www.brunchstudio.tv/)**  
  * _Studio parisien d'animation 2D/3D spécialisé dans les cinématiques et trailers de jeux vidéo (Apex Legends, League of Legends), les clips et les courts métrages._
  * **Mots clés**: _cinématiques de jeu, animation 2D, animation 3D, clips, publicité, trailers_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.brunchstudio.tv/careers)


* **[BUCK](https://buck.co/)**  
  * _Studio créatif international fondé en 2004 (Los Angeles, New York, Sydney, Amsterdam...) spécialisé en motion design, animation 2D/3D, expériences numériques et technologie créative, avec un studio à Londres ; a lancé BUCK Games en 2025._
  * **Mots clés**: _motion design, animation 3D, publicité, technologie créative_
  * **Localisation**: Royaume-Uni/Londres, États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Jeu Vidéo
  * [_Jobs_](https://buck.co/careers)


* **[Budge Studios](https://budgestudios.com/)**  
  * _Studio montréalais de jeux mobiles pour enfants sur grandes licences (Barbie DreamHouse Adventures, PAW Patrol Rescue World, Bluey, Dora, Hello Kitty), racheté par Haveli Investments en 2026._
  * **Mots clés**: _jeu mobile, jeux pour enfants, jeux sur licence_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 125
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[BUF](https://buf.com/)**  
  * _Studio d'effets visuels pionnier (Paris, Montréal) actif depuis près de 30 ans sur plus de 100 films et 900 publicités, avec ses propres outils logiciels._
  * **Mots clés**: _effets visuels, long métrage, séries TV, publicité, clips, pipeline maison_
  * **Localisation**: Paris
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://buf.com/jobs/)


* **[BulletFarm](https://www.bulletfarm.com/)**  
  * _Studio AAA de Los Angeles fondé en 2024 par David Vonderhaar (ex-Treyarch, Call of Duty: Black Ops) qui développe un jeu de tir sous Unreal Engine 5, financé par NetEase puis, depuis mai 2026, par GreaterThan Group._
  * **Mots clés**: _AAA, FPS, Unreal Engine, multijoueur en ligne_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.bulletfarm.com/careers)


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


* **[C2Care](https://c2.care/)**  
  * _Éditeur varois d'une plateforme de réalité virtuelle pour les professionnels de la santé mentale : bibliothèque de plus de 250 situations d'exposition 3D (phobies, addictions, relaxation) utilisée par 350 établissements._
  * **Mots clés**: _thérapie par réalité virtuelle, phobies, santé mentale, environnements 3D_
  * **Localisation**: Sanary-sur-Mer
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Médical/Biologique


* **[Caddev](https://www.caddev.info/)**  
  * _Éditeur de Saône (groupe W4C) qui développe des plugins pour le logiciel de CAO bois cadwork 3D (assemblages, calcul statique, programmation visuelle DeepNode, optimisation de panneaux), des applications web métier (Lisa.Blue pour le dimensionnement de charpentes) et des outils de visualisation 3D et d'IA._
  * **Mots clés**: _plugins CAO, cadwork, construction bois, calcul de structure, 3D_
  * **Localisation**: Saône
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Design/Fabrication, Pipeline/Outils de production, Visualisation, Simulation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO


* **[Cadwork France](https://www.04.cadwork.com/)**  
  * _Filiale française, installée à Saône (près de Besançon), de l'éditeur suisse Cadwork, logiciels de CAO/FAO 3D pour la construction bois, la charpente et la menuiserie (cadwork 3D) : distribution, formation et support technique pour la France._
  * **Mots clés**: _CAO bois, charpente, FAO, BIM, modélisation 3D_
  * **Localisation**: Saône, Suisse/Châtel-Saint-Denis
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.04.cadwork.com/offres-demploi/)


* **[CAE](https://www.cae.com/)**  
  * _Leader mondial des simulateurs de vol et de la formation (aviation civile, défense, santé), dont le siège et la principale usine sont à Saint-Laurent ; développe ses propres systèmes visuels, dont le générateur d'images CAE Prodigy basé sur Unreal Engine, premier simulateur de vol à moteur de jeu qualifié niveau D._
  * **Mots clés**: _simulateur de vol, générateur d'images, formation des pilotes, Unreal Engine_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 13000
  * **Domaine scientifique/technique**: Simulation, Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Automobile/Navigation/Aviation, Entrainement/Formation/Serious Game, Sécurité/Défense
  * [_Jobs_](https://www.cae.com/careers/)


* **[Calty](https://pressroom.toyota.com/)** (CALTY Design Research (Toyota)) 
  * _Centre de design nord-américain de Toyota, dont le studio de design avancé de Newport Beach crée concepts et véhicules Toyota et Lexus (esquisses, modélisation 3D numérique, films en images de synthèse et maquettes), avec un studio satellite à Ann Arbor._
  * **Mots clés**: _design automobile, modélisation numérique, concept-cars, Toyota, Lexus_
  * **Localisation**: États-Unis/Newport Beach
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Visualisation
  * **Domaine d'application**: Automobile/Navigation/Aviation


* **[Canon Research Centre France](https://www.crf.canon.fr/)**  
  * _Centre de recherche européen de Canon à Cesson-Sévigné, spécialisé en traitement d'image et de vidéo, réseaux pour la vidéo haute qualité et IA, contributeur aux standards internationaux._
  * **Mots clés**: _compression vidéo, traitement d'images, vidéosurveillance, standardisation_
  * **Localisation**: Cesson-Sévigné
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Générique, Sécurité/Défense
  * [_Jobs_](https://www.crf.canon.fr/Internship_en.html)


* **[Cantina Creative](https://www.cantinacreative.com/)**  
  * _Studio d'effets visuels et de design d'interfaces holographiques (FUI) du groupe Territory, connu pour les écrans et HUD des films Marvel (Avengers, Spider-Man: Homecoming, Loki, Echo), d'Avatar : La Voie de l'eau et de Black Adam._
  * **Mots clés**: _effets visuels, interfaces futuristes, motion design, HUD_
  * **Localisation**: États-Unis/Los Angeles, Canada/Vancouver
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Capture4cad](https://capture4cad.com/)**  
  * _Société de numérisation 3D de Saône (près de Besançon) : scan laser statique et dynamique (SLAM), photogrammétrie, modélisation BIM et 3D, et, via sa marque Héritage Virtuel, restitutions 3D immersives de monuments et sites archéologiques._
  * **Mots clés**: _scan 3D, photogrammétrie, BIM, patrimoine virtuel_
  * **Localisation**: Saône
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Modélisation, VR/AR
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Patrimoine/Culture


* **[Capybara Games](https://www.capybaragames.com/)**  
  * _Studio indépendant de jeu vidéo torontois fondé en 2003, auteur de Superbrothers: Sword & Sworcery, Below et Grindstone ; prépare Battle Vision Network sur PC._
  * **Mots clés**: _jeu vidéo indépendant, Grindstone, Below_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Caribara Animation](https://www.caribara-animation.com/)**  
  * _Studio d'animation indépendant (2D, 3D et hybride) basé à Paris avec des studios à Annecy, Angoulême, Montréal et Liège, prestataire de fabrication de séries et films._
  * **Mots clés**: _animation 2D, animation 3D, séries d'animation, fabrication_
  * **Remarque**: _Établissement annexe Caribara Annecy (SIREN 503980476)._
  * **Localisation**: Paris, Annecy, Angoulême, Canada/Montréal
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Cartoon Saloon](https://www.cartoonsaloon.ie/)**  
  * _Studio d'animation fondé en 1999 à Kilkenny, produisant longs métrages et séries en 2D, trois fois nommé aux Oscars (Brendan et le Secret de Kells, Le Chant de la mer, Wolfwalkers)._
  * **Mots clés**: _animation 2D, long métrage, Kilkenny, Wolfwalkers_
  * **Localisation**: Irlande/Kilkenny
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Casis](https://casis.fr/)**  
  * _Éditeur de logiciels d'imagerie cardiaque issu de la recherche au CHU de Dijon (CArdiac Simulation & Imaging Software) : suite QIR d'analyse d'IRM cardiaque (fonction, strain, perfusion, flux 4D) avec segmentation par apprentissage profond._
  * **Mots clés**: _IRM cardiaque, imagerie médicale, flux 4D, segmentation IA_
  * **Localisation**: Quetigny
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://casis.fr/careers-en/)


* **[Cavrnus](https://www.cavrnus.com/)**  
  * _Plateforme et SDK qui ajoutent multi-utilisateurs, synchronisation d'objets, voix/vidéo et persistance aux applications 3D Unreal Engine et Unity._
  * **Mots clés**: _multi-utilisateurs, collaboration temps réel, Unreal Engine, Unity, SDK, jumeau numérique_
  * **Localisation**: États-Unis/California/Carlsbad
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[Celsius Online](https://www.celsius-online.com/)**  
  * _Studio parisien de jeux en ligne et mobiles fondé en 2004 (Renaissance Kingdoms, Mutants: Genetic Gladiators, Les Loups-Garous de Thiercelieux Online), filiale de Plug In Digital depuis 2023, une trentaine de personnes._
  * **Mots clés**: _jeu mobile, jeu en ligne, free-to-play, Plug In Digital_
  * **Localisation**: Paris
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Cervval](https://cervval.com/)**  
  * _Société d'ingénierie informatique fondée en 2003, issue du Centre européen de réalité virtuelle de l'ENIB, spécialisée en simulation 3D, jumeaux numériques (Digitwin, Zurvan Project BIM) et solutions de planification pour l'industrie, le maritime, les transports et la défense._
  * **Mots clés**: _Jumeau numérique, Simulation 3D, Réalité virtuelle, BIM, Planification_
  * **Localisation**: Plouzané
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Simulation, Reconstruction, VR/AR, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Architecture/BTP/Urbanisme, Automobile/Navigation/Aviation, Sécurité/Défense
  * [_Jobs_](https://cervval.com/recrutement.html)


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
  * **Localisation**: États-Unis/California, Canada/Kitchener
  * **Nombres d'employés**: 2000
  * **Domaine scientifique/technique**: VR/AR, Visualisation
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.christiedigital.com/en-gb/about/careers/)


* **[Cinesite](https://www.cinesite.com/)**  
  * _Studio d'effets visuels et d'animation de longs métrages basé à Londres (Soho) avec des studios à Montréal et ailleurs ; travaille pour les grands studios hollywoodiens et produit ses propres films d'animation._
  * **Mots clés**: _VFX, Animation 3D, Long métrage_
  * **Localisation**: Royaume-Uni/Londres, Canada/{Montréal, Vancouver}
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://cinesite.com/careers/)


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


* **[Circus](https://circus.fr/)**  
  * _Studio d'effets visuels et d'animation créé en 2008 à Paris, avec un second studio à Avignon : cinéma, séries animées, publicité, parcs à thème et documentaires (clip animé Dungeon & Fighter pour Tencent), plus de 70 personnes et un pipeline développé en interne._
  * **Mots clés**: _effets visuels, animation 3D, séries animées, pipeline_
  * **Localisation**: Paris, Avignon
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://circus.fr/jobs/)


* **[Clarius Mobile Health](https://clarius.com/)**  
  * _Fabricant vancouvérois d'échographes portables sans fil connectés à un smartphone, avec traitement d'image et assistance par IA pour l'échographie au point de soin._
  * **Mots clés**: _échographie, imagerie médicale, IA, dispositif portable_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Imagerie, Vision, Hardware
  * **Domaine d'application**: Médical/Biologique


* **[Clear Angle Studios](https://www.clearanglestudios.co.uk/)**  
  * _Spécialiste du scan 3D pour le cinéma (photogrammétrie de personnages, rig volumétrique, LiDAR d'environnements, scan d'accessoires, TopoTrack) présent à Culver City, Pinewood, Atlanta et Vancouver, qui a acquis en 2026 la technologie de capture faciale de DI4D._
  * **Mots clés**: _photogrammétrie, scan 3D, LiDAR, capture volumétrique, doublures numériques_
  * **Localisation**: États-Unis/Culver City, Royaume-Uni/Iver, Canada/Burnaby
  * **Nombres d'employés**: 160
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.clearanglestudios.co.uk/career-opportunities/)


* **[Climax Studios](https://www.climaxstudios.com/)**  
  * _Studio de Portsmouth fondé en 1988 (Silent Hill: Origins, Silent Hill: Shattered Memories), développant jeux et VR._
  * **Mots clés**: _jeu vidéo, VR, Portsmouth_
  * **Localisation**: Royaume-Uni/Portsmouth
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Clipdrop](https://clipdrop.co/)**  
  * _Suite web d'outils d'image par IA (détourage, nettoyage, upscaling, relighting, génération texte-image), issue d'Init ML puis rachetée par Stability AI et Jasper._
  * **Mots clés**: _IA générative, retouche d'image, détourage, super-résolution, API, Jasper_
  * **Remarque**: _Clipdrop a été créé par la start-up parisienne Init ML, rachetée par Stability AI en 2023 ; Clipdrop a ensuite été racheté par Jasper en 2024, l'équipe restant à Paris._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.jasper.ai/careers)


* **[CLO Virtual Fashion](https://www.clo3d.com/en/)**  
  * _Éditeur coréen de CLO, logiciel de conception 3D de vêtements avec simulation physique de tissus et patrons utilisables en production._
  * **Mots clés**: _mode/textile, simulation de tissus, conception de vêtements 3D, jumeau numérique, plugin/logiciel pour artistes, CLO3D_
  * **Produits**: Marvelous Designer, Clo3D
  * **Localisation**: Corée du Sud, États-Unis, International
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Design/Fabrication
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Mode/Vêtements/Accessoires
  * [_Jobs_](https://jobs.lever.co/clovirtualfashion)


* **[Cloud Imperium Games](https://cloudimperiumgames.com/)**  
  * _Studio de Star Citizen et Squadron 42; le site de Manchester est l'un de ses plus grands studios, avec une équipe technique et graphique importante._
  * **Mots clés**: _Star Citizen, moteur CryEngine/StarEngine, jeu vidéo_
  * **Localisation**: Royaume-Uni/Manchester
  * **Nombres d'employés**: 500
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[CM Labs](https://www.cm-labs.com/)** (CM Labs Simulations) 
  * _Éditeur montréalais de Vortex Studio, moteur de simulation mécanique temps réel haute fidélité, et de simulateurs de formation pour grues, engins de chantier et opérations maritimes (plus de 2 000 installations dans 50 pays)._
  * **Mots clés**: _simulation physique temps réel, simulateurs de formation, Vortex Studio, engins de chantier_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Simulation, Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO, Robotique/Systèmes autonomes
  * [_Jobs_](https://cm-labs.com/en/careers/)


* **[Coatsink](https://coatsink.com/)**  
  * _Studio de Gateshead (Thunderful Group), spécialisé en portage sur consoles et développement de jeux VR._
  * **Mots clés**: _jeu vidéo, VR, portage console_
  * **Localisation**: Royaume-Uni/Gateshead
  * **Nombres d'employés**: 80
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Cococucumber](https://cococucumber.co/)**  
  * _Studio indépendant de jeu vidéo torontois (Riverbond, Ravenlok, Echo Generation), qui a sorti Echo Generation 2 sur PC et Xbox en mai 2026._
  * **Mots clés**: _jeu indépendant, voxel, RPG_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 11
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Codemasters](https://www.ea.com/ea-studios/codemasters)**  
  * _Studio de jeux de course (F1, DiRT, GRID) basé à Southam près de Leamington, filiale d'Electronic Arts depuis 2021._
  * **Mots clés**: _jeu de course, F1, simulation_
  * **Localisation**: Royaume-Uni/Southam
  * **Nombres d'employés**: 400
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[Coffee & TV](https://www.coffeeand.tv/)**  
  * _Studio londonien de post-production et d'effets visuels (VFX 2D/3D, CG, étalonnage) pour la publicité, les clips, le cinéma et les séries, avec un studio à New York depuis 2024._
  * **Mots clés**: _effets visuels, publicité, CGI, étalonnage_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX


* **[Cogniscan](https://www.cogniscan.fr/)**  
  * _Start-up issue du laboratoire XLIM, créée en 2022 et installée au CIRE d'ESTER Technopole, qui développe STCAN, un scanner cérébral portable à micro-ondes (capteur, réseau d'antennes commutées, logiciel de reconstruction d'image et classification par IA) pour détecter AVC, tumeurs et hémorragies hors de l'hôpital._
  * **Mots clés**: _imagerie micro-ondes, neuro-imagerie, reconstruction d'image, dispositif médical_
  * **Localisation**: Limoges
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Hardware
  * **Domaine d'application**: Médical/Biologique


* **[Cognitive Design Systems](https://www.cognitive-design-systems.com/)**  
  * _Éditeur de logiciels de conception générative et d'optimisation topologique pour la fabrication additive._
  * **Mots clés**: _conception générative, optimisation topologique, fabrication additive, CAO, aéronautique, allègement structurel_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Design/Fabrication, Géométrie, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.cognitive-design-systems.com/careers)


* **[Colorfront](https://colorfront.com/)**  
  * _Éditeur de logiciels de dailies, de transcodage et de mastering (Transkoder, Express Dailies, Streaming Server, Colorfront Engine) utilisés par les studios hollywoodiens et les plateformes, avec en avril 2026 Colorfront Immersive Utility pour l'Apple Immersive Video._
  * **Mots clés**: _dailies, transcodage, HDR, gestion des couleurs_
  * **Localisation**: États-Unis/Santa Monica
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Imagerie, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Company 3](https://www.company3.com/)**  
  * _Studio de post-production haut de gamme (étalonnage, finition, dailies, VFX de finition) pour le cinéma, les séries et la publicité, avec des références récentes comme Blade Runner 2099 et The Mosquito Bowl._
  * **Mots clés**: _étalonnage, finition, post-production, dailies_
  * **Localisation**: États-Unis/Santa Monica, États-Unis/Los Angeles, Canada/Toronto, Canada/Vancouver, Royaume-Uni/Londres
  * **Nombres d'employés**: 500
  * **Domaine scientifique/technique**: Rendu offline/VFX, Imagerie, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Compusoft France](https://www.compusoftgroup.com/fr/)**  
  * _Filiale française de Compusoft (groupe Cyncly) qui édite et distribue les logiciels de conception 3D de cuisines et salles de bains Winner Flex, Innoplus et 3CAD._
  * **Mots clés**: _conception 3D, cuisine, salle de bains, configurateur_
  * **Localisation**: Lunéville
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.compusoftgroup.com/fr/carriere/)


* **[Computational Surgery](https://computationalsurgery.eu/)**  
  * _Jeune société strasbourgeoise développant algorithmes et logiciels de vision par ordinateur, réalité augmentée et recalage pour la chirurgie robotique et endoscopique._
  * **Mots clés**: _vision par ordinateur, réalité augmentée, navigation chirurgicale, robotique, planification chirurgicale_
  * **Remarque**: _Très petite structure (effectif non déclaré) ; site principal peu renseigné._
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Vision, VR/AR, Imagerie
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


* **[Conscience Robotics](https://conscience-robotics.com/)**  
  * _Concepteur normand de robots autonomes (traçage au sol, inspection, surveillance de patients, robot bipède en R&D) avec son système Conscience OS et Conscience Studio pour la conception et la simulation de missions ; primé au challenge CoHoMa III 2025._
  * **Mots clés**: _robotique, perception, cartographie, simulation de missions_
  * **Localisation**: Hérouville-Saint-Clair
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Simulation, Reconstruction
  * **Domaine d'application**: Robotique/Systèmes autonomes, Sécurité/Défense


* **[Corel](https://www.corel.com/)**  
  * _Éditeur ottavien de logiciels graphiques (CorelDRAW Graphics Suite, Corel Painter, PaintShop Pro, Corel Designer, CorelCAD), redevenu indépendant en 2026 sous le contrôle de Vector Capital après la scission avec Parallels._
  * **Mots clés**: _dessin vectoriel, retouche d'image, peinture numérique, CorelDRAW_
  * **Localisation**: Canada/Ottawa
  * **Nombres d'employés**: 1000
  * **Domaine scientifique/technique**: Modélisation, Imagerie, Design/Fabrication
  * **Domaine d'application**: Générique, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.corel.com/en/careers/)


* **[CoreTechnologie](https://coretechnologie.com/)** (CT CoreTechnologie France) 
  * _Éditeur de logiciels de conversion et d'analyse CAO (3D_Evolution, 3D_Analyzer, SDK 3D_Kernel_IO) et de préparation pour l'impression 3D (4D_Additive), avec une filiale française près de Lyon._
  * **Mots clés**: _CAO, conversion de formats 3D, SDK, fabrication additive, maillage_
  * **Localisation**: Lyon, Saint-Genis-Laval
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication, Géométrie, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://coretechnologie.com/ct-core-technologie-company-profile/career/)


* **[Corridor Digital](https://www.corridordigital.com/)**  
  * _Studio de production indépendant fondé en 2009 par Sam Gorski et Niko Pueringer, spécialisé dans les courts métrages à effets visuels pour YouTube (chaînes Corridor Digital et Corridor Crew, plus de 10 millions d'abonnés) et les analyses d'effets de films._
  * **Mots clés**: _effets visuels, YouTube, courts métrages_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 24
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[CORYS](https://www.corys.com/)**  
  * _Concepteur grenoblois de simulateurs d'entraînement et d'ingénierie pour le nucléaire, le ferroviaire et l'industrie des procédés, partenaire de services d'Epic Games pour des environnements Unreal Engine ; plus de 380 ingénieurs dans le monde._
  * **Mots clés**: _simulateurs, formation, nucléaire, ferroviaire, Unreal Engine_
  * **Localisation**: Grenoble
  * **Nombres d'employés**: 380
  * **Domaine scientifique/technique**: Simulation, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Énergie/Environnement, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.corys.com/en/home/career/)


* **[CoSA VFX](https://www.cosavfx.com/)**  
  * _Studio d'effets visuels pour les séries, primé aux Emmy (Gotham, Westworld, Marvel : Les Agents du S.H.I.E.L.D.), crédité en 2025 sur The Terminal List: Dark Wolf et Criminal Minds._
  * **Mots clés**: _effets visuels, séries, environnements numériques_
  * **Localisation**: États-Unis/Los Angeles, Canada/Toronto, Canada/Vancouver
  * **Nombres d'employés**: 110
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Cosm](https://www.cosm.com/)**  
  * _Entreprise de technologies immersives qui conçoit des dômes LED (système CX) et exploite des salles « Shared Reality » à Inglewood et Dallas diffusant sport en direct et films adaptés au dôme (The Matrix, Willy Wonka, Harry Potter en 2026), propriétaire des fabricants de planétariums Evans & Sutherland et Spitz._
  * **Mots clés**: _dôme LED, immersion, planétarium, Shared Reality, production immersive_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.cosm.com/careers)


* **[Cousin Bizarre](https://www.cousinbizarre.com/)**  
  * _Studio d'effets visuels : 3D/CGI, FX (simulations de fluides, particules, cheveux, destruction), compositing et matte painting._
  * **Mots clés**: _effets visuels, compositing, matte painting, simulation de fluides, long métrage, séries TV, look development_
  * **Localisation**: Les Lilas
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Crafty Apes](https://craftyapes.com/)**  
  * _Studio américain d'effets visuels complet (Los Angeles, Atlanta, Vancouver, Montréal, New York, Sydney) avec un studio à Londres (Clerkenwell) pour le cinéma et les séries._
  * **Mots clés**: _effets visuels, cinéma, séries, lighting_
  * **Localisation**: Royaume-Uni/Londres, Canada/{Montréal, Vancouver}, États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Creaform](https://www.creaform3d.com/)**  
  * _Fabricant de Lévis (près de Québec) de scanners 3D portables (HandySCAN, Go!SCAN, MetraSCAN) et de logiciels de métrologie et d'inspection 3D, filiale d'AMETEK réunie à FARO depuis 2026._
  * **Mots clés**: _scanner 3D, métrologie, inspection, numérisation 3D_
  * **Localisation**: Canada/Lévis
  * **Nombres d'employés**: 570
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://careers.creaform3d.com/)


* **[Creative Assembly](https://www.creative-assembly.com/)**  
  * _Studio d'Horsham de Sega (Total War, Alien: Isolation), l'un des plus grands studios de jeu au Royaume-Uni avec installation de capture de mouvement._
  * **Mots clés**: _jeu vidéo, Total War, capture de mouvement_
  * **Localisation**: Royaume-Uni/Horsham
  * **Nombres d'employés**: 850
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo


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


* **[Criterion Games](https://www.ea.com/studios/criterion-games)**  
  * _Studio de Guildford d'Electronic Arts (Burnout, Need for Speed), également à l'origine du moteur RenderWare._
  * **Mots clés**: _jeu de course, Need for Speed, Burnout_
  * **Localisation**: Royaume-Uni/Guildford
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[CTEC Vision](https://ctecvision.com/)**  
  * _Bureau d'études belfortain spécialisé dans la mesure 3D sans contact par scanner laser : relevés et nuages de points, plans 2D/3D et visites virtuelles d'installations industrielles (nucléaire, métallurgie, ferroviaire, maritime, patrimoine)._
  * **Mots clés**: _scan laser 3D, nuage de points, relevé industriel, visite virtuelle_
  * **Localisation**: Belfort
  * **Nombres d'employés**: 7
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Design/Fabrication
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Énergie/Environnement, Patrimoine/Culture


* **[Culturespaces Studio](https://www.culturespaces-studio.com/)**  
  * _Studio de production de Culturespaces qui conçoit, produit et diffuse les expositions numériques immersives grand format (Atelier des Lumières, Bassins des Lumières...) et leurs dispositifs de projection._
  * **Mots clés**: _exposition immersive, événementiel/mapping, motion design, scénographie numérique_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Visualisation, Animation, Rendu offline/VFX
  * **Domaine d'application**: Art/Evenementiel, Patrimoine/Culture
  * [_Jobs_](https://www.culturespaces.com/fr/propos/nous-rejoindre)


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
  * [_Jobs_](https://www.cyclife-edf.com/rejoignez-nous)


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


* **[Da Viking Code](https://davikingcode.com/)**  
  * _Studio dijonnais créé en 2014 qui conçoit des expériences interactives issues des technologies du jeu vidéo : serious games, applications VR/AR, jumeaux numériques en réalité virtuelle et jeux pour l'industrie, l'ingénierie, le médical et le patrimoine._
  * **Mots clés**: _serious game, réalité virtuelle, réalité augmentée, jumeau numérique, 3D temps réel_
  * **Localisation**: Dijon
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO, Patrimoine/Culture, Jeu Vidéo
  * [_Jobs_](https://davikingcode.com/en/join-us/)


* **[Dada! Animation](https://www.dada-animation.com/)**  
  * _Studio d'animation: Storytelling et conception créative, animation 3D, immersion et interactivité._
  * **Mots clés**: _animation 3D, séries d'animation, documentaire animé, jeu VR, œuvres originales_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dada-animation.com/jobs/)


* **[Damae Medical](https://www.damae-medical.com/)**  
  * _Medtech parisienne qui développe deepLive, imageur dermatologique LC-OCT produisant des images 3D de la peau à résolution cellulaire._
  * **Mots clés**: _imagerie médicale, tomographie optique, imagerie 3D_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://damaemedical.teamtailor.com/)


* **[Damavan Imaging](https://www.damavan-imaging.com/)**  
  * _Concepteur troyen d'imageurs gamma (gamme Temporal : monoculaire, binoculaire, 3D) qui localisent et cartographient les sources de rayonnement pour le nucléaire et la santé._
  * **Mots clés**: _imagerie gamma, caméra Compton, nucléaire, spectrométrie_
  * **Localisation**: Troyes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Reconstruction
  * **Domaine d'application**: Énergie/Environnement, Médical/Biologique


* **[Dambuster Studios](https://dsdambuster.com/)**  
  * _Studio de Nottingham de Deep Silver (Dead Island 2, Homefront: The Revolution), anciennement Crytek UK._
  * **Mots clés**: _jeu vidéo, Dead Island 2, Unreal Engine_
  * **Localisation**: Royaume-Uni/Nottingham
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Damnatio Games](https://damnatiogames.com/)**  
  * _Studio de jeux vidéo fondé à Bordeaux en 2021, auteur du jeu multijoueur en ligne Heat and Run (Steam, 2022) et de Teamcrafter, qui collabore aussi avec d'autres studios en game design et UX._
  * **Mots clés**: _jeu indépendant, multijoueur en ligne, console/PC_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Dark Slope](https://www.darkslope.com/)**  
  * _Studio torontois de production virtuelle (grand volume LED, plateaux, capture de mouvement) qui produit aussi des séries et des jeux et expériences VR/MR ; a annoncé un nouveau studio de 75 000 pieds carrés à Scarborough._
  * **Mots clés**: _production virtuelle, volume LED, Unreal Engine, réalité virtuelle_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers


* **[Dassault Systèmes](https://www.3ds.com/fr/)**  
  * _Éditeur français de logiciels de conception, simulation et gestion du cycle de vie produit (CATIA, SOLIDWORKS, SIMULIA, 3DEXPERIENCE) pour l'industrie et la santé._
  * **Mots clés**: _CAO, PLM, simulation physique, éléments finis, jumeau numérique, CATIA, SOLIDWORKS, aéronautique_
  * **Produits**: Catia, SolidWorks
  * **Localisation**: France/Paris, France/Aix-en-Provence, Vélizy-Villacoublay, Colomiers, Plouzané, Limoges, Lyon, Cesson-Sévigné, Bouguenais, Limonest, Saint-Romain-de-Colbosc, Meylan, Colomiers, Nancy, Villeneuve-d'Ascq, États-Unis, Chine, International
  * **Nombres d'employés**: 20000
  * **Domaine scientifique/technique**: Modélisation, Simulation, Géométrie, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO, Médical/Biologique
  * [_Jobs_](https://careers.3ds.com/)


* **[Data Pixel](https://www.data-pixel.com/)**  
  * _Fabricant annécien d'équipements de métrologie pour connecteurs de fibre optique : interféromètres 3D de surface (DAISI, DAFFI, 3D Scope), microscopes d'inspection et analyse d'images par IA._
  * **Mots clés**: _interférométrie, métrologie 3D, inspection optique, fibre optique_
  * **Localisation**: Chavanod
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Vision
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Datakit](https://www.datakit.com/)**  
  * _Éditeur de convertisseurs et bibliothèques d'échange de données CAO 3D (B-Rep et maillages) entre formats natifs et standards._
  * **Mots clés**: _CAO, échange de données, conversion de formats, B-Rep, SDK, maillage_
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Géométrie, Design/Fabrication, Modélisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Générique
  * [_Jobs_](https://www.datakit.com/en/join_datakit.php)


* **[Datexim](https://datexim.ai/)**  
  * _Société caennaise de pathologie numérique qui développe CytoProcessor, solution d'analyse d'images de lames de cytologie par IA pour le dépistage du cancer du col de l'utérus (certifiée IVD, plus d'un million de lames traitées)._
  * **Mots clés**: _cytologie numérique, pathologie numérique, IA, dépistage du cancer_
  * **Localisation**: Caen
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Day for Nite](https://www.dayfornite.com/)**  
  * _Studio de visualisation (previs, postvis, techvis, caméra virtuelle, mocap et plans VFX finaux) pour le cinéma, les séries et le jeu vidéo, basé à Los Angeles avec des équipes à Atlanta, Vancouver, Londres, en Australie et en Nouvelle-Zélande._
  * **Mots clés**: _prévisualisation, postvis, techvis, caméra virtuelle_
  * **Localisation**: États-Unis/Los Angeles, Canada/Vancouver, Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dayfornite.com/jobs)


* **[Deep Voodoo](https://deepvoodoo.com/)**  
  * _Studio d'effets visuels par IA (deepfake, rajeunissement, remplacement de visage) fondé par Trey Parker et Matt Stone, crédité sur la saison 27 de South Park, la saison 2 de Ted, le clip In the Stars des Rolling Stones et une publicité Dunkin' du Super Bowl LX (2026)._
  * **Mots clés**: _deepfake, humains numériques, rajeunissement, IA_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: IA générative (image/3D), Rendu offline/VFX, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


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
  * [_Jobs_](https://dentalmonitoring.com/careers/)


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


* **[DIAGNOS](https://diagnosmedical.com/)** (DIAGNOS inc.) 
  * _Société de Brossard cotée à la Bourse de croissance TSX qui développe CARA, plateforme d'analyse d'images rétiniennes assistée par IA (détection de la rétinopathie diabétique et de la DMLA, analyse microvasculaire, amélioration d'image), homologuée par Santé Canada en juillet 2026._
  * **Mots clés**: _imagerie rétinienne, IA médicale, rétinopathie diabétique, analyse d'images_
  * **Localisation**: Canada/Brossard
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Digital District](https://www.digital-district.fr)**  
  * _Studio d'effets visuels et de post-production pour le cinéma, les séries et la publicité._
  * **Mots clés**: _effets visuels, post-production, étalonnage, publicité, long métrage, matte painting, simulation de fluides_
  * **Localisation**: Paris, Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Digital Domain](https://digitaldomain.com/)**  
  * _Studio d'effets visuels fondé à Los Angeles (Titanic, Avengers: Infinity War, Les Quatre Fantastiques : premiers pas), pionnier des humains numériques et de la capture faciale, avec un studio à Vancouver depuis 2010 et un autre à Montréal._
  * **Mots clés**: _effets visuels, humains numériques, capture faciale, long métrage_
  * **Localisation**: Canada/Vancouver, États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Digital Surf](https://www.digitalsurf.com/)**  
  * _Éditeur bisontin fondé en 1989 du logiciel Mountains d'imagerie, de visualisation 3D et d'analyse de surfaces (profilométrie, microscopie électronique et à sonde locale, spectroscopie), intégré par plus de 50 fabricants d'instruments._
  * **Mots clés**: _métrologie de surface, microscopie, imagerie 3D, analyse d'images_
  * **Localisation**: Besançon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Géométrie, Reconstruction
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique
  * [_Jobs_](https://www.digitalsurf.com/about/jobs/)


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


* **[Dimension Studio](https://dimensionstudio.co/)**  
  * _Studio de capture volumétrique, de production virtuelle et de contenus XR basé à Londres (Wimbledon)._
  * **Mots clés**: _Capture volumétrique, Production virtuelle, XR_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Acquisition, VR/AR, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://dimensionstudio.co/join-us/)


* **[disguise](https://www.disguise.one/en)**  
  * _Éditeur londonien de serveurs média et de logiciels de production virtuelle et XR pour concerts, cinéma et événementiel._
  * **Mots clés**: _Production virtuelle, XR, Temps réel_
  * **Localisation**: Royaume-Uni/Londres, États-Unis/Los Angeles
  * **Nombres d'employés**: 350
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[Disney](https://www.disneystudios.com/)**  
  * _Branche cinéma de The Walt Disney Company regroupant Walt Disney Animation Studios, Pixar, Lucasfilm (avec ILM), Marvel Studios et 20th Century Studios._
  * **Mots clés**: _long métrage, animation 3D, effets visuels, Pixar, Lucasfilm, Marvel Studios_
  * **Remarque**: _<a href="https://studios.disneyresearch.com/">Disney Research</a> implanté à Zurich est l'un des plus gros centre de R&amp;D en graphique._
  * **Localisation**: États-Unis/{Burbank, Glendale}, Canada/Vancouver, International
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


* **[Divergent](https://www.divergent.com/)** (Divergent Technologies) 
  * _Entreprise de Torrance dont la plateforme DAPS associe logiciel de conception générative par IA, impression 3D métal et assemblage robotisé pour produire des structures de véhicules et de défense (composants de châssis de la Bugatti Tourbillon annoncés en juin 2026)._
  * **Mots clés**: _conception générative, impression 3D métal, CAO, fabrication additive, automobile_
  * **Localisation**: États-Unis/Torrance
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Simulation
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO, Sécurité/Défense


* **[DNEG](https://www.dneg.com/)**  
  * _Studio d'effets visuels et d'animation basé à Londres (Double Negative), multi-oscarisé (Inception, Interstellar, Dune), avec de nombreux studios dans le monde ; développe ses propres outils de rendu et de production._
  * **Mots clés**: _VFX, Animation, Pipeline, Rendu_
  * **Localisation**: Royaume-Uni/Londres, Canada/{Montréal, Toronto, Vancouver}, États-Unis/Los Angeles
  * **Nombres d'employés**: 1500
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dneg.com/join-us)


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


* **[Dragonfly (Comet)](https://comet.tech/dragonfly)** (Comet Technologies Canada (ex-Object Research Systems)) 
  * _Logiciel Dragonfly de visualisation et d'analyse d'images 3D (tomographie, microscopie électronique et optique, segmentation par apprentissage profond), développé à Montréal par l'ex-Object Research Systems (ORS, 2004), filiale du groupe suisse Comet depuis 2020._
  * **Mots clés**: _imagerie 3D, tomographie, segmentation, microscopie_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Vision
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO
  * [_Jobs_](https://comet.tech/dragonfly/company/jobs)


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


* **[Dream Powered Games](https://store.steampowered.com/app/1608470/)**  
  * _Studio de jeu vidéo mosellan, développeur du FPS Warstride Challenges publié par Focus Entertainment sur PC, PS5 et Xbox Series (2023)._
  * **Mots clés**: _FPS, speedrun, consoles, Focus Entertainment_
  * **Localisation**: Diane-Capelle
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Dreamhaven](https://dreamhaven.com/)**  
  * _Éditeur et groupe de studios fondé à Irvine par Mike Morhaime (cofondateur de Blizzard), dont le studio Secret Door a créé Sunderfolk (2025) et prépare Shadowstone, et qui édite des jeux de studios partenaires comme The Legend of California._
  * **Mots clés**: _Sunderfolk, Secret Door, Mike Morhaime, édition de jeux_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://dreamhaven.com/careers)


* **[Dreamscape](https://dreamscapeimmersive.com/)** (Dreamscape Immersive) 
  * _Studio de Culver City qui crée des expériences de réalité virtuelle en libre déplacement pour six personnes dans des environnements 3D partagés, et des modules pédagogiques en VR avec l'Arizona State University (Dreamscape Learn, nouvelle application d'astronomie prévue à l'UNLV à l'automne 2026)._
  * **Mots clés**: _réalité virtuelle, free-roam, VR éducative, expériences immersives_
  * **Localisation**: États-Unis/Culver City
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Acquisition
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Entrainement/Formation/Serious Game


* **[DreamWall](https://www.dreamwall.be/en)**  
  * _Studio belge d'animation (séries, longs métrages, rides) et de solutions temps réel pour la télévision et le sport : AR en direct, publicité virtuelle, mapping vidéo._
  * **Mots clés**: _séries d'animation, long métrage, animation 3D, réalité augmentée en direct, publicité virtuelle, événementiel/mapping, diffusion sportive_
  * **Localisation**: Belgique/Charleroi
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dreamwall.be/en/jobs)


* **[DreamWorks Animation](https://www.dreamworks.com/)**  
  * _Studio américain de longs métrages et de séries d'animation 3D (Shrek, Dragons, Le Robot sauvage, Les Bad Guys 2), filiale de NBCUniversal, qui a sorti Forgotten Island en septembre 2026 depuis son campus de Glendale._
  * **Mots clés**: _animation 3D, longs métrages, séries, moteur de rendu MoonRay_
  * **Localisation**: États-Unis/Glendale
  * **Nombres d'employés**: 1000
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dreamworks.com/careers)


* **[Drinkbox Studios](https://www.drinkboxstudios.com/)**  
  * _Studio de jeu vidéo torontois fondé en 2008, créateur de Guacamelee!, Severed et Nobody Saves the World, qui développe le jeu d'action Blighted._
  * **Mots clés**: _jeu vidéo indépendant, Guacamelee, action_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Dronisos](https://www.dronisos.com/)**  
  * _Leader français des spectacles lumineux de drones pour parcs à thème (fournisseur officiel de Disneyland Paris) et grands événements._
  * **Mots clés**: _spectacle de drones, drone, événementiel/mapping, parc d'attractions, essaims de drones_
  * **Localisation**: France/Bordeaux, États-Unis/Orlando
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, VR/AR
  * **Domaine d'application**: Art/Evenementiel
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/dronisos)


* **[Dupe VFX](https://www.dupevfx.com/)**  
  * _Studio indépendant d'effets visuels basé à Dalston (Londres), certifié B Corp, pour le cinéma et les séries (Havoc, Black Doves, Sentimental Value) pour Netflix, BBC, Apple TV ou Disney._
  * **Mots clés**: _effets visuels, séries, compositing, B Corp_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dupevfx.com/careers/)


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
  * [_Jobs_](https://www.dwarfanimation.com/careers)


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
  * [_Jobs_](https://www.dxo.com/fr/company/careers/)


* **[DXOMARK](https://www.dxomark.com/)**  
  * _Laboratoire d'évaluation de la qualité d'image et de son des smartphones et caméras, qui développe ses protocoles, bancs de mesure et outils logiciels d'analyse d'image._
  * **Mots clés**: _qualité d'image, caméra, mesure, traitement d'images_
  * **Localisation**: Boulogne-Billancourt
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Analyse de données
  * **Domaine d'application**: Générique
  * [_Jobs_](https://corp.dxomark.com/careers/)


* **[E-Scopics](https://www.e-scopics.com/)**  
  * _Start-up aixoise qui développe une échographie entièrement logicielle (plateforme Hepatoscope, quantification des propriétés des tissus) et une plateforme d'accès aux données brutes pour la recherche et les OEM._
  * **Mots clés**: _échographie, ultrasons, imagerie logicielle, hépatologie_
  * **Localisation**: Aix-en-Provence
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[East Side Games](https://eastsidegamesgroup.com/)**  
  * _Développeur et éditeur vancouvérois de jeux mobiles free-to-play (studios East Side Games et LDRLY), connu pour ses jeux « idle » sous licence (Trailer Park Boys, Star Trek, Archer) et sa technologie de kit de jeux._
  * **Mots clés**: _jeu mobile, jeux idle, free-to-play, licences_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://eastsidegamesgroup.com/careers/)


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
  * [_Jobs_](https://www.ecential-robotics.com/fr-fr/carrieres)


* **[Ecopia AI](https://www.ecopiatech.com/)**  
  * _Start-up torontoise qui extrait par IA des cartes vectorielles et des données 3D (bâtiments, occupation du sol 3D, réseaux de transport) d'images aériennes et satellitaires à grande échelle, en partenariat avec Vantor (ex-Maxar) et Nearmap._
  * **Mots clés**: _cartographie par IA, imagerie aérienne, jumeau numérique, occupation du sol_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 45
  * **Domaine scientifique/technique**: Vision, Reconstruction, Imagerie
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme, Énergie/Environnement
  * [_Jobs_](https://www.ecopiatech.com/careers)


* **[EDAP TMS](https://focalone.com/)** (EDAP-TMS France) 
  * _Fabricant de Vaulx-en-Velin de dispositifs à ultrasons focalisés (HIFU) robotisés, dont Focal One qui fusionne en 3D IRM, biopsies et échographie temps réel pour traiter le cancer de la prostate._
  * **Mots clés**: _imagerie médicale, échographie, fusion d'images, chirurgie assistée, dispositif médical_
  * **Localisation**: Vaulx-en-Velin
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Hardware
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://focalone.com/focalone-careers/)


* **[Eden Games](https://www.edengames.com/)**  
  * _Studio lyonnais spécialisé depuis 25 ans dans les jeux de course (V-Rally, Test Drive Unlimited, Gear.Club, Smurfs Kart), sur consoles et mobile, filiale d'Animoca Brands._
  * **Mots clés**: _jeu de course, console/PC, mobile, Gear.Club, Animoca Brands_
  * **Remarque**: _Filiale d'Animoca Brands._
  * **Localisation**: France/Lyon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.edengames.com/career/)


* **[Edicad](https://www.edicad.com/)**  
  * _Éditeur lotois de logiciels pour le bâtiment : ArchiTECH.PC (plans 2D/3D d'architecture), KutchCAD (métré et devis) et APCSmart (patrimoine immobilier)._
  * **Mots clés**: _CAO bâtiment, plans 3D, métré, logiciel d'architecture_
  * **Localisation**: Fontanes
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Effigy 3D](https://effigy-3d.com/)**  
  * _Studio de création 3D et d'humains numériques : avatars IA conversationnels, vidéo volumétrique (4DGS), scan 3D, Mocap, production virtuelle._
  * **Mots clés**: _doublure numérique, avatar IA, vidéo volumétrique, Gaussian splatting, scanner 3D, motion capture, production virtuelle_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Acquisition, Reconstruction, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Eficad](https://eficad.com/)**  
  * _Éditeur de logiciels de FAO intégrés à SolidWorks, basé à La Grande-Motte : SWOOD (conception et fabrication pour l'agencement et le bois) et EFICN (usinage mécanique, enseignement)._
  * **Mots clés**: _CFAO, SolidWorks, usinage, bois et agencement_
  * **Localisation**: La Grande-Motte
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Eidos-Montréal](https://www.eidosmontreal.com/)**  
  * _Studio AAA montréalais (groupe Embracer, ex-Square Enix) créateur de Deus Ex: Human Revolution, Deus Ex: Mankind Divided, Shadow of the Tomb Raider et Marvel's Guardians of the Galaxy, aujourd'hui engagé en co-développement (Grounded 2, Fable)._
  * **Mots clés**: _jeu vidéo AAA, co-développement, Deus Ex, Embracer, console/PC_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.eidosmontreal.com/careers/)


* **[EikoSim](https://eikosim.com/)**  
  * _Éditeur de logiciels de corrélation d'images numériques (stéréo-DIC) couplée à la simulation éléments finis pour la validation d'essais._
  * **Mots clés**: _corrélation d'images, éléments finis, stéréovision, essais mécaniques, aéronautique, jumeau numérique_
  * **Localisation**: Montrouge
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Vision, Simulation, Reconstruction
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://eikosim.com/carrieres/)


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
  * [_Jobs_](http://www.ekosystem.com/jobs/)


* **[Elcia](https://www.elcia.com/)**  
  * _Éditeur de Brignais de logiciels pour la menuiserie et la fermeture, dont des configurateurs 3D en ligne (MyConfigurator) pour chiffrer et visualiser les produits._
  * **Mots clés**: _e-commerce/configurateur 3D, web 3D, menuiserie, architecture_
  * **Localisation**: Brignais
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Visualisation, Web/Cloud/Big Data
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.elcia.com/nos-offres-demploi/)


* **[Electric Theatre Collective](https://electrictheatre.com/)**  
  * _Studio de VFX et de CGI pour la publicité, le cinéma et les contenus de marque, basé à Londres avec des antennes à New York et Los Angeles._
  * **Mots clés**: _VFX, CGI, Publicité_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Elementary](https://www.elementaryml.com/)**  
  * _Éditeur de South Pasadena de systèmes d'inspection visuelle par apprentissage automatique pour les lignes de production (caméras, plateforme QualityOS, VisionLink), avec un bureau à Mexico._
  * **Mots clés**: _vision industrielle, contrôle qualité, apprentissage automatique, inspection automatisée_
  * **Localisation**: États-Unis/South Pasadena
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Ellipse Animation](https://www.ellipseanimation.com/)** (Ellipse Studio Angoulême (Dargaud Media / Média-Participations)) 
  * _Studio de fabrication de séries et longs métrages d'animation 2D et 3D du groupe Média-Participations (La Famille Blaireau-Renard, Belfort & Lupin, Yakari) ; l'antenne d'Angoulême développe aussi le webtoon (Angoulême Webtoon Academy)._
  * **Mots clés**: _animation 2D, animation 3D, séries TV, long métrage, webtoon_
  * **Localisation**: Angoulême, Paris
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.ellipseanimation.com/careers/)


* **[Elokence](https://www.elokence.com/)**  
  * _Éditeur chartrain de jeux et de solutions de dialogue homme-machine, créateur du jeu Akinator (le génie devineur, sur mobile, web et assistants vocaux)._
  * **Mots clés**: _Akinator, jeu mobile, dialogue homme-machine, IA_
  * **Localisation**: Chartres
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: IHM/Haptique, Autres
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Ember Lab](https://emberlab.com/)**  
  * _Studio indépendant de jeu vidéo installé à Orange, fondé en 2009 comme studio d'animation, auteur de Kena: Bridge of Spirits (2021, portage Nintendo Switch 2 en mars 2026) et qui développe sa suite Kena: Scars of Kosmora (PS5 et PC, repoussée à 2027)._
  * **Mots clés**: _Kena, action-aventure, Unreal Engine, animation, PlayStation_
  * **Localisation**: États-Unis/Orange
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://emberlab.com/careers/)


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
  * [_Jobs_](https://enchanted.tools/jobs/)


* **[Endroad](https://www.the-endroad.com/)**  
  * _Studio indépendant de jeu vidéo fondé à Nantes en 2017, développeur de Fallback, Fallback 2, UFO Robot Grendizer et Court of the Dead sur PC et consoles._
  * **Mots clés**: _jeu vidéo, PC et consoles, jeu d'action, 3D temps réel_
  * **Localisation**: Nantes
  * **Nombres d'employés**: 10
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Envy](https://www.envypost.co.uk/)**  
  * _Premier groupe indépendant de post-production du Royaume-Uni, basé à Fitzrovia (Londres) : montage, étalonnage, son et effets visuels pour la télévision, le cinéma et la publicité ; a racheté Halo en 2025._
  * **Mots clés**: _post-production, effets visuels, étalonnage, Soho_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


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
  * **Localisation**: États-Unis, Canada/Saint-Lambert, International
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
  * [_Jobs_](https://ernestine-games.fr/emploi/)


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
  * [_Jobs_](https://eugensystems.com/recruitment/)


* **[Eurekam](https://www.eurekam.fr/)**  
  * _Éditeur rochelais de Drugcam, système de vision par caméras et d'intelligence artificielle qui contrôle en temps réel les préparations médicamenteuses injectables (chimiothérapies, vaccins) et archive la vidéo pour la traçabilité, déployé dans plus de 100 établissements de santé._
  * **Mots clés**: _vision par ordinateur, contrôle vidéo, pharmacie hospitalière, intelligence artificielle_
  * **Localisation**: Lagord
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[EuroVisual](https://www.eurovisual.tv/)** (Euro Visual (ex-Cyber Group Studios)) 
  * _Société parisienne de production et d'animation qui a repris en 2026 la majorité des actifs de Cyber Group Studios et produit des séries jeunesse en 3D et en 2D (Gigantosaurus saison 4, Ozie Boo!, Zorro, Taffy, Mick the Mini Chef)._
  * **Mots clés**: _séries d'animation, jeunesse, 3D CGI, 2D, Gigantosaurus_
  * **Remarque**: _Cyber Group Studios (fondé en 2003) a été liquidé en avril 2025 ; Pierre Sissmann, son cofondateur, et Grégoire Parcollet ont racheté 80 % de ses actifs via Euro Visual en janvier 2026._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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


* **[Evil Raptor](https://www.evilraptor.com/)**  
  * _Studio indépendant de jeux d'action 3D (Pumpkin Jack, Akimbot, Far Far West en accès anticipé) installé dans l'Ain._
  * **Mots clés**: _jeu vidéo, action-aventure, 3D, indépendant_
  * **Localisation**: Sulignat
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
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


* **[Exalted Studio](https://exaltedstudio.com/)**  
  * _Studio de jeux vidéo gardois (Gallargues-le-Montueux), développeur du beat'em up 3D coopératif Big Helmet Heroes._
  * **Mots clés**: _beat'em up, coopération, 3D, console/PC_
  * **Localisation**: Gallargues-le-Montueux
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


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
  * [_Jobs_](https://www.extende.com/the-company/careers-in-ndt/)


* **[Exwayz](https://www.exwayz.com/)**  
  * _Logiciel de localisation et cartographie 3D (SLAM lidar) temps réel pour la robotique autonome et la cartographie mobile._
  * **Mots clés**: _lidar, SLAM, localisation, cartographie, robotique, véhicule autonome, nuage de points_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.exwayz.com/jobs/)


* **[EyeLights](https://eye-lights.com/)**  
  * _Start-up de Labège qui conçoit des affichages tête haute en réalité augmentée pour casques de moto (EyeRide, visière GT-AIR 3 Smart avec SHOEI) et des lunettes HUD pour l'aviation générale._
  * **Mots clés**: _réalité augmentée, affichage tête haute, moto, HUD_
  * **Localisation**: Labège
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Hardware, IHM/Haptique
  * **Domaine d'application**: Automobile/Navigation/Aviation, Loisir Interactif/Immersion/Metavers


* **[Eyeline (ex-Scanline VFX)](https://www.eyelinestudios.com/)**  
  * _Studio d'effets visuels et de production virtuelle de Netflix, né en 2025 de la fusion de Scanline VFX et d'Eyeline Studios, avec un studio à Londres (Fitzrovia) ouvert en 2019 aux côtés de Vancouver, Montréal, Los Angeles, Munich, Stuttgart et Séoul._
  * **Mots clés**: _effets visuels, production virtuelle, Netflix, simulation_
  * **Localisation**: Royaume-Uni/Londres, Canada/Vancouver, États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Pipeline/Outils de production, IA générative (image/3D)
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Fairvision](https://www.fairvision.fr/)**  
  * _PME niçoise de vision par ordinateur qui conçoit des systèmes de captation vidéo autonomes et des caméras à IA pour le sport (suivi des joueurs, plan tactique en direct) et des solutions de vision sur mesure._
  * **Mots clés**: _vision par ordinateur, deep learning, analyse vidéo, sport_
  * **Localisation**: Nice
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique
  * [_Jobs_](https://www.fairvision.fr/home-3-2-2-2-2-2-2-2/)


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


* **[Faubourg](https://faubourg.tv/)**  
  * _Studio VFX boutique parisien (division de Firm studio) : supervision de tournage, animation 2D/3D, simulations 3D, matte-painting et environnements CG pour la publicité (Renault, Peugeot, Dacia) et le cinéma (Fantômas)._
  * **Mots clés**: _VFX, publicité, matte-painting, simulations 3D, France VFX_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[FilmLight](https://www.filmlight.ltd.uk/)**  
  * _Éditeur londonien de systèmes d'étalonnage et de gestion des couleurs (Baselight, Daylight, Prelight, Truelight) utilisés en post-production cinéma, séries et publicité, avec un bureau à Hollywood._
  * **Mots clés**: _étalonnage, science des couleurs, Baselight, post-production_
  * **Localisation**: États-Unis/Los Angeles, Royaume-Uni/Londres
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Pipeline/Outils de production, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.filmlight.ltd.uk/contacts/recruitment/overview_rt.php)


* **[Firesprite](https://firesprite.com/)**  
  * _Studio de Liverpool de Sony Interactive Entertainment (The Playroom VR, The Persistence, Horizon Call of the Mountain)._
  * **Mots clés**: _jeu vidéo, VR, PlayStation_
  * **Localisation**: Royaume-Uni/Liverpool
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[First Light Imaging](https://andor.oxinst.com/products/first-light-imaging-cameras)**  
  * _Concepteur et fabricant de caméras scientifiques ultra-rapides et bas bruit (infrarouge SWIR, EMCCD) pour l'astronomie, l'optique adaptative et les sciences de la vie, basé à Meyreuil et filiale du groupe Oxford Instruments (Andor)._
  * **Mots clés**: _caméra, infrarouge, astronomie, imagerie scientifique_
  * **Localisation**: Meyreuil
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Hardware, Imagerie
  * **Domaine d'application**: Médical/Biologique, Autres
  * [_Jobs_](https://www.oxinst.com/careers)


* **[Flawless](https://www.flawlessai.com/)**  
  * _Éditeur d'outils d'IA générative pour le visage à l'écran (DeepEditor, doublage visuel TrueSync, ADR « In-Vision ») utilisés par les studios pour modifier les performances en post-production, lauréat d'un HPA Award et du Lumière Award 2026._
  * **Mots clés**: _humains numériques, doublage visuel, IA, post-production_
  * **Localisation**: États-Unis/Los Angeles, Royaume-Uni/Londres
  * **Nombres d'employés**: 80
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.flawlessai.com/careers)


* **[Float4](https://www.float4.com/en/)**  
  * _Studio montréalais de design et de production d'expériences numériques immersives intégrées aux lieux physiques (murs de LED interactifs, installations génératives pour halls d'hôtels, observatoires et espaces publics), éditeur de la plateforme Realmotion._
  * **Mots clés**: _installations interactives, contenu génératif, murs de LED, expériences immersives_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 25
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, IHM/Haptique, Animation
  * **Domaine d'application**: Art/Evenementiel, Commerce/Marketing/Publicité, Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.float4.com/en/careers/)


* **[Fluidyn](https://www.fluidyn.com/)**  
  * _Éditeur de logiciels de mécanique des fluides numérique (CFD) et multiphysique pour l'environnement, la dispersion atmosphérique et les risques industriels._
  * **Mots clés**: _CFD, simulation physique, dispersion atmosphérique_
  * **Localisation**: Saint-Denis
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Simulation, Visualisation
  * **Domaine d'application**: Énergie/Environnement, Industrie/Manufacturing/CAO


* **[Flying Bark Productions](https://www.flyingbark.com.au/)**  
  * _Studio d'animation 2D et 3D australien (groupe Studio 100), qui a ouvert un studio à Burbank et fabrique avec ses équipes de Los Angeles, Sydney et Madrid la série Stranger Things: Tales From '85 (Netflix, 2026) et le long métrage The Legend of Aang: The Last Airbender (Paramount)._
  * **Mots clés**: _animation 2D, animation 3D, séries, longs métrages, Studio 100_
  * **Localisation**: États-Unis/Burbank
  * **Nombres d'employés**: 700
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://flyingbarkproductions.applytojob.com/)


* **[Flying Oak Games](https://flying-oak.com/)**  
  * _Studio de jeu vidéo indépendant fondé en 2014, spécialisé dans les jeux d'action (NeuroVoider, ScourgeBringer, Knuckle Paradise) et le portage console (optimisations d'Absolum en 2025)._
  * **Mots clés**: _jeu indépendant, action, portage console, pixel art_
  * **Localisation**: Metz
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Focus Entertainment](https://www.focus-entmt.com/fr)**  
  * _Éditeur français de jeux vidéo console/PC (A Plague Tale, Warhammer 40,000: Space Marine 2) travaillant avec des studios internes et partenaires._
  * **Mots clés**: _édition de jeux, AA, console/PC, Space Marine 2, A Plague Tale_
  * **Remarque**: _Branche édition (Focus Entertainment Publishing) du groupe <a href="https://pullupent.com/">PULLUP Entertainment</a>, nouveau nom de Focus Entertainment depuis avril 2024. Studios du groupe en France : Dotemu (Paris), Leikir Studio (Ivry-sur-Seine), Douze Dixièmes (Aubervilliers) et Streum On Studio (Nogent-sur-Marne)._
  * **Localisation**: Paris, Ivry-sur-Seine, Aubervilliers, Nogent-sur-Marne, Castelnau-le-Lez
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


* **[Folks](https://folksvfx.com/)**  
  * _Studio d'effets visuels fondé à Montréal (siège avenue Papineau), qui a absorbé FuseFX en 2025 et revendique plus de 900 artistes dans le monde, pour les longs métrages et les séries (Wednesday, IT: Welcome to Derry, Five Nights at Freddy's 2)._
  * **Mots clés**: _effets visuels, séries, compositing, Pitch Black_
  * **Localisation**: Canada/Montréal, Canada/Toronto, États-Unis/Burbank
  * **Nombres d'employés**: 900
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://folksvfx.com/careers/open-positions/)


* **[Fortiche Production](https://forticheprod.com)**  
  * _Studio d'animation parisien au rendu stylisé mêlant 2D et 3D, réalisateur de la série Arcane (Riot Games, Netflix), de cinématiques de jeux et de clips._
  * **Mots clés**: _séries d'animation, animation 3D, rendu stylisé, cinématiques de jeu, clips, Arcane_
  * **Localisation**: Paris, Montpellier
  * **Nombres d'employés**: 50-99 (plus intermittents)
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://forticheprod.com/become-a-forticher/)


* **[Fost](https://fost.studio/)**  
  * _Studio d'animation 2D et de pré-production pour l'image de synthèse, pour longs métrages, séries et web._
  * **Mots clés**: _animation 2D, séries d'animation, long métrage, storyboard, layout, compositing_
  * **Localisation**: Paris, Angoulême
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://fost.studio/jobs/)


* **[FotoKem](https://www.fotokem.com/)**  
  * _Laboratoire film et studio de post-production indépendant de Burbank (depuis 1963) : dailies via sa plateforme logicielle nextLAB, étalonnage, VFX de finition, mastering et restauration, sur des titres récents comme The Odyssey, The Mandalorian & Grogu et Mayday._
  * **Mots clés**: _laboratoire film, post-production, étalonnage, nextLAB, dailies_
  * **Localisation**: États-Unis/Burbank
  * **Nombres d'employés**: 500
  * **Domaine scientifique/technique**: Imagerie, Pipeline/Outils de production, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Framestore](https://www.framestore.com/)**  
  * _Studio d'effets visuels, d'animation et de contenus immersifs/temps réel fondé en 1986 à Londres, oscarisé (À la croisée des mondes, Gravity) ; studios à Londres, Montréal, New York, Los Angeles, Mumbai._
  * **Mots clés**: _VFX, Animation, Production virtuelle, Pipeline_
  * **Localisation**: Royaume-Uni/Londres, Canada/Montréal, États-Unis/Santa Monica
  * **Nombres d'employés**: 1000
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.framestore.com/careers)


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


* **[Frima Studio](https://frimastudio.com/)**  
  * _Studio de développement de jeux vidéo basé à Québec et à Montréal depuis plus de 20 ans, qui fait du co-développement AAA (expertise Unreal), du développement complet et de la co-production, avec des centaines de personnes._
  * **Mots clés**: _co-développement, Unreal Engine, jeu vidéo, Québec_
  * **Localisation**: Canada/Québec, Canada/Montréal
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo


* **[Frontier Developments](https://www.frontier.co.uk/)**  
  * _Studio de jeu vidéo de Cambridge (Elite Dangerous, Planet Coaster, Jurassic World Evolution) développant son propre moteur COBRA._
  * **Mots clés**: _jeu vidéo, moteur COBRA, simulation de gestion_
  * **Localisation**: Royaume-Uni/Cambridge
  * **Nombres d'employés**: 750
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Frost Giant Studios](https://frostgiant.com/)**  
  * _Studio indépendant du comté d'Orange fondé en 2020 par d'anciens de Blizzard (StarCraft II), créateur du jeu de stratégie en temps réel Stormgate._
  * **Mots clés**: _stratégie en temps réel, Stormgate, Unreal Engine, ex-Blizzard_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 48
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://frostgiant.com/careers/)


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
  * **Localisation**: France/Paris, États-Unis, Canada/Montréal, Espagne, Inde, International
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
  * [_Jobs_](https://www.ganymedrobotics.com/careers)


* **[Gao Shan Pictures](https://www.gaoshanpictures.com)**  
  * _Studio d'animation 3D ayant participé à des longs métrages (Mars Express, J'ai perdu mon corps)._
  * **Mots clés**: _animation 3D, long métrage, coproduction_
  * **Localisation**: Annecy, France/Saint-Paul (La Réunion), Angoulême, Maurice
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.gaoshanpictures.com/recrutement)


* **[Genies](https://genies.com/)**  
  * _Éditeur d'une technologie d'avatars 3D et de personnages IA (SDK Genies, Genies Studio) qui donne une apparence et un corps animé à des agents conversationnels, des PNJ et des avatars de célébrités._
  * **Mots clés**: _avatars 3D, humains numériques, personnages IA, SDK_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Animation, IA générative (image/3D), Modélisation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Jeu Vidéo, Commerce/Marketing/Publicité
  * [_Jobs_](https://jobs.ashbyhq.com/genies)


* **[Gentle Giant Studios](https://www.gentlegiantstudios.com/)**  
  * _Studio de Burbank spécialisé dans le scan 3D et la photogrammétrie (studio mobile de photogrammétrie pour les VFX), le design numérique et la fabrication additive de figurines, prototypes et pièces pour le cinéma, les parcs à thème et les produits dérivés._
  * **Mots clés**: _scan 3D, photogrammétrie, impression 3D, sculpture numérique_
  * **Localisation**: États-Unis/Burbank
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Design/Fabrication
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Industrie/Manufacturing/CAO, Art/Evenementiel


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
  * [_Jobs_](https://emplois.geo-sat.com/)


* **[Geovariances](https://www.geovariances.com/)**  
  * _Éditeur des logiciels de géostatistique Isatis.neo et Kartotrak pour la modélisation 3D des ressources minérales, du sous-sol et des sols pollués._
  * **Mots clés**: _géostatistique, modélisation 3D, SIG, géosciences_
  * **Localisation**: Avon
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Analyse de données, Modélisation, Visualisation
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie
  * [_Jobs_](https://www.geovariances.com/en/careers/)


* **[Giant Ant](https://www.giantant.ca/)**  
  * _Studio d'animation et de motion design 2D/3D de Vancouver, réputé pour ses films de marque et habillages d'antenne (Cartoonito), dont l'activité a été rachetée par Buck en 2022._
  * **Mots clés**: _motion design, animation 2D, animation 3D, publicité_
  * **Localisation**: Canada/Vancouver
  * **Nombres d'employés**: 41
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX


* **[Giant Squid](https://www.giantsquidstudios.com/)**  
  * _Studio indépendant de Santa Monica fondé par Matt Nava (ancien directeur artistique de Journey), auteur d'ABZÛ, The Pathless et Sword of the Sea (portages Xbox et Switch 2 en octobre 2026)._
  * **Mots clés**: _direction artistique, jeu d'auteur, Unreal Engine, console/PC_
  * **Localisation**: États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.giantsquidstudios.com/jobs)


* **[Gleamer](https://www.gleamer.ai/)**  
  * _Éditeur français de logiciels d'IA pour la radiologie (BoneView, ChestView, BreastView...) d'aide à la détection sur radiographie, scanner, mammographie et IRM._
  * **Mots clés**: _imagerie médicale, diagnostic, deep learning, radiologie, dispositif médical_
  * **Localisation**: Paris, Saint-Mandé, La Tronche
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.gleamer.ai/jobs)


* **[Glidewell](https://glidewelldental.com/)** (Glidewell Dental) 
  * _Laboratoire et industriel dentaire d'Irvine qui conçoit ses propres solutions de CFAO (glidewell.io, logiciel fastdesign.io de conception de couronnes assistée par IA, usinage fastmill.io) et produit environ un demi-million de restaurations par mois par un flux entièrement numérique._
  * **Mots clés**: _CFAO dentaire, scan intra-oral, conception par IA, usinage, dentisterie numérique_
  * **Localisation**: États-Unis/Irvine
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Acquisition
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO


* **[Glitchr Studio](https://www.glitchr-studio.com/)**  
  * _Studio indépendant bordelais d'ingénieurs multimédia et d'artistes spécialisé dans les jeux et expériences en réalité virtuelle et augmentée (Taiko Frenzy), les installations interactives et les applications mobiles._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, jeu indépendant, Unity_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[GM Advanced Design California](https://www.gm.com/)** (General Motors Advanced Design Studio (Pasadena)) 
  * _Nouveau studio de design avancé de General Motors installé dans le nord-est de Pasadena, qui réunit designers, ingénieurs et maquettistes pour créer les concept-cars du groupe (GMC Hummer X), en combinant maquettes en argile, numérisation 3D et outils d'IA._
  * **Mots clés**: _design automobile, concept-cars, numérisation 3D, General Motors_
  * **Localisation**: États-Unis/Pasadena
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Acquisition
  * **Domaine d'application**: Automobile/Navigation/Aviation


* **[Goblinz Studio](https://goblinz.com/)**  
  * _Studio de développement et éditeur de jeux vidéo indépendants (Legend of Keepers)._
  * **Mots clés**: _jeu indépendant, édition de jeux, console/PC, jeu de stratégie, roguelite, Legend of Keepers_
  * **Localisation**: Yutz
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Goodbye Kansas Studios](https://www.goodbyekansas.com/)**  
  * _Studio de contenus visuels (cinématiques et trailers de jeux vidéo, VFX, capture de mouvement, scan 3D) d'origine suédoise, avec des bureaux à Londres, Stockholm, Belgrade et Mumbai (Indiana Jones et le Cercle ancien, Destiny 2, World of Warcraft)._
  * **Mots clés**: _cinématiques, trailers de jeux, capture de mouvement, scan 3D_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Acquisition
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://career.goodbyekansas.com)


* **[Google](https://about.google/)**  
  * _Groupe américain du moteur de recherche, d'Android, de Google Maps et des modèles d'IA Gemini, avec des activités de recherche en vision, rendu et IA._
  * **Mots clés**: _deep learning, IA générative, cartographie, réalité augmentée, cloud/streaming, Gemini_
  * **Remarque**: _<a href="https://ai.google/">Google AI</a> est une entité de recherche développant des projets en graphique_
  * **Localisation**: États-Unis/Mountain View, États-Unis/Los Angeles, International
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
  * [_Jobs_](https://job-boards.greenhouse.io/goprojobs)


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
  * [_Jobs_](https://careers.graitec.com/jobs)


* **[Gravity Sketch](https://gravitysketch.com/)**  
  * _Éditeur londonien d'une application de modélisation 3D et de design en réalité virtuelle/mixte utilisée pour le design de produits._
  * **Mots clés**: _Modélisation 3D, VR, Design produit_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication, VR/AR
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://gravitysketch.com/careers/)


* **[GridRaster](https://gridraster.com/)**  
  * _Plateforme d'intelligence spatiale (SPIDER) combinant IA, segmentation et recalage 3D pour la réalité mixte industrielle : inspection, maintenance, robotique, formation (aéronautique, défense)._
  * **Mots clés**: _réalité mixte, vision par ordinateur, recalage 3D, jumeau numérique, aéronautique, défense, industrie/usinage_
  * **Localisation**: États-Unis/California/Mountain View, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, VR/AR
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://gridraster.com/careers-jobs/)


* **[Guru Studio](https://gurustudio.com/)**  
  * _Studio d'animation torontois fondé en 2000, qui produit des séries 3D pour la jeunesse (True and the Rainbow Kingdom, Mecha Builders, PAW Patrol, Justin Time) et des créations originales._
  * **Mots clés**: _animation 3D, séries jeunesse, Sesame Street_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Hadean](https://hadean.com/)**  
  * _Éditeur londonien de plateforme de calcul distribué pour les simulations et mondes virtuels massifs._
  * **Mots clés**: _Simulation distribuée, Mondes virtuels, Cloud_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Simulation, Web/Cloud/Big Data
  * **Domaine d'application**: Sécurité/Défense, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://hadean.com/careers/)


* **[Halon Entertainment](https://halon.com/)**  
  * _Studio de visualisation temps réel fondé en 2003 (previs, postvis, cinématiques et production virtuelle) ayant travaillé sur Star Wars, Avatar, The Batman, John Wick, Un film Minecraft (2025) et Fortnite, redevenu indépendant de NEP Group en juillet 2026._
  * **Mots clés**: _prévisualisation, postvis, cinématiques, Unreal Engine, production virtuelle_
  * **Localisation**: États-Unis/Glendale, Royaume-Uni/Glasgow
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Commerce/Marketing/Publicité
  * [_Jobs_](https://halon.com/careers)


* **[Haply Robotics](https://www.haply.co/)**  
  * _Start-up montréalaise d'interfaces haptiques à retour d'effort (Inverse3, MinVerse) pour la téléopération de robots, la simulation médicale, la XR et la modélisation 3D ; double lauréate CES Innovation Awards 2026._
  * **Mots clés**: _haptique, retour d'effort, téléopération, simulation chirurgicale_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: IHM/Haptique, Hardware, VR/AR
  * **Domaine d'application**: Robotique/Systèmes autonomes, Médical/Biologique, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.haply.co/careers)


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


* **[Harbor](https://harborpicturecompany.com/)**  
  * _Studio de post-production et de production (étalonnage, VFX, dailies, son, montage) pour le cinéma, les séries et la publicité, avec en 2026 l'étalonnage de The Devil Wears Prada 2, Widow's Bay et Cape Fear._
  * **Mots clés**: _post-production, étalonnage, VFX, finition_
  * **Localisation**: États-Unis/Santa Monica, États-Unis/Los Angeles, Royaume-Uni/Londres
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu offline/VFX, Imagerie, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://harborpicturecompany.com/careers/)


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


* **[Haven Studios](https://havenstudios.com/en)**  
  * _Studio montréalais de PlayStation Studios (Sony), fondé en 2021 par Jade Raymond, qui développe Fairgames, jeu de braquage compétitif pour PS5 et PC._
  * **Mots clés**: _jeu vidéo AAA, jeu en ligne, PlayStation Studios, Fairgames_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://havenstudios.com/en/careers)


* **[Havok](https://www.havok.com/)**  
  * _Éditeur du moteur physique Havok (physique, navigation IA, cloth) utilisé dans de nombreux jeux AAA, basé à Dublin et filiale de Microsoft._
  * **Mots clés**: _moteur physique, middleware, simulation, jeu vidéo_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Simulation, Rendu temps réel/Moteurs 3D, Géométrie
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Hawk-Eye Innovations](https://www.hawkeyeinnovations.com/)**  
  * _Filiale de Sony, spécialiste du suivi et de la vision multi-caméras pour le sport (arbitrage vidéo, tracking 3D de balle et de joueurs)._
  * **Mots clés**: _vision par ordinateur, suivi 3D, sport_
  * **Localisation**: Royaume-Uni/Basingstoke
  * **Nombres d'employés**: 1400
  * **Domaine scientifique/technique**: Vision, Acquisition, Reconstruction
  * **Domaine d'application**: Générique


* **[Hawkswell](https://store.steampowered.com/app/2718100/)**  
  * _Studio parisien de vétérans du jeu vidéo qui développe Legends of Awen: Rise of the Fianna, RPG narratif solo dans un univers médiéval d'inspiration celtique._
  * **Mots clés**: _RPG, narratif, studio indépendant_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Hayes Davidson](https://www.hayesdavidson.com/)**  
  * _Studio londonien pionnier de l'imagerie de synthèse pour l'architecture, fondé en 1989 (visualisations de la Shard, du London Eye, de la Tate Modern), détenu par ses salariés, produisant images, films et contenus interactifs._
  * **Mots clés**: _visualisation architecturale, CGI, rendu photoréaliste, films d'architecture_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité


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
  * [_Jobs_](https://jobs.stationf.co/companies/healthy-mind)


* **[Hectiq](https://hectiq.games/)**  
  * _Studio de développement de jeux vidéo fondé à Bordeaux en 2023, qui développe Painted Kingdoms en misant sur la créativité, le gameplay et l'innovation technique._
  * **Mots clés**: _jeu indépendant, console/PC, multijoueur en ligne_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://hectiq.games/careers)


* **[Hello Games](https://hellogames.org/)**  
  * _Studio indépendant de Guildford, créateur de No Man's Sky, jeu à univers généré procéduralement._
  * **Mots clés**: _génération procédurale, No Man's Sky, jeu vidéo_
  * **Localisation**: Royaume-Uni/Guildford
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Hera-MI](https://www.hera-mi.com/)**  
  * _Medtech nantaise fondée en 2017 qui développe Breast-SlimView, logiciel d'aide à la décision par intelligence artificielle pour la mammographie 2D et la tomosynthèse._
  * **Mots clés**: _mammographie, tomosynthèse, IA, aide au diagnostic_
  * **Localisation**: Saint-Herblain
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.hera-mi.com/recrutement/)


* **[Hexagon](https://hexagon.com/)**  
  * _Groupe suédois de technologies de mesure et de géospatial (Leica Geosystems, Intergraph) : métrologie, scanners laser, positionnement, logiciels pour l'industrie et les infrastructures._
  * **Mots clés**: _métrologie, lidar, scanner 3D, SIG, jumeau numérique, Leica Geosystems, industrie/usinage_
  * **Localisation**: Vendôme, Suède/Stockholm
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie, Vision
  * **Domaine d'application**: Géospatial/Cartographie, Industrie/Manufacturing/CAO
  * [_Jobs_](https://hexagon.com/about/careers)


* **[HeyGen](https://www.heygen.com/)**  
  * _Éditeur d'une plateforme d'IA générative de vidéo (avatars numériques photoréalistes, synchronisation labiale, traduction vidéo) revendiquant plus de 30 millions d'utilisateurs et 200 M$ de revenus récurrents annuels en juin 2026._
  * **Mots clés**: _vidéo générative, avatars IA, synchronisation labiale, traduction vidéo_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 350
  * **Domaine scientifique/technique**: IA générative (image/3D), Animation, Vision
  * **Domaine d'application**: Commerce/Marketing/Publicité, Générique
  * [_Jobs_](https://www.heygen.com/careers)


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
  * [_Jobs_](https://www.holo3-rv.com/qui-sommes-nous/rejoignez-nous/)


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


* **[Homa](https://www.homagames.com/)**  
  * _Développeur et éditeur parisien de jeux mobiles qui fournit aux créateurs des outils data (Homa Lab, SDK, analyse de marché) et produit ses propres titres._
  * **Mots clés**: _jeux mobiles, édition, outils de production, data_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Analyse de données
  * **Domaine d'application**: Jeu Vidéo


* **[Homo Ludens](https://www.bloomingbusiness.games/)**  
  * _Studio de jeux vidéo et éditeur, au siège à Liancourt (Oise), créateur du jeu de gestion Blooming Business: Casino (PC, sorti en 2023, toujours mis à jour avec DLC et playtests communautaires)._
  * **Mots clés**: _jeu vidéo, jeu de gestion, tycoon, PC_
  * **Localisation**: Liancourt
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[Honikou](https://honikou.com/)**  
  * _Petit studio marseillais de jeux vidéo fondé en 2014, passé du mobile au PC et aux consoles (série Leo and Mia, Warchief, Kraken Odyssey)._
  * **Mots clés**: _jeu indépendant, mobile, console/PC_
  * **Localisation**: Plan-de-Cuques
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[House of Cool](https://www.houseofcool.com/)**  
  * _Studio torontois de pré-production pour l'animation (storyboard, développement visuel, previs), filiale de WildBrain depuis 2023, qui a travaillé sur Moi, moche et méchant, Angry Birds et Dragons._
  * **Mots clés**: _storyboard, pré-production, développement visuel, WildBrain_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 55
  * **Domaine scientifique/technique**: Animation, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://houseofcool-career.talent-soft.com/)


* **[House of Moves](https://www.moves.com/)**  
  * _Studio de motion et performance capture fondé en 1995, qui exploite des plateaux Vicon à Hollywood (Chaplin Studios), dans le centre de Los Angeles et à Santa Monica ainsi qu'à Austin, avec un pipeline d'animation pour Unreal Engine et Unity (Mortal Kombat 1, Black Adam, NBA 2K)._
  * **Mots clés**: _motion capture, performance capture, Vicon, animation_
  * **Localisation**: États-Unis/Los Angeles, États-Unis/Santa Monica
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Acquisition, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


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
  * [_Jobs_](https://career.huawei.com/en)


* **[Human Games](https://www.humangames.tv/)**  
  * _Studio nancéien d'expériences de réalité virtuelle pour la formation et la prévention (VisioBuild HSE, UrbanVR) qui s'oriente depuis 2024 vers les assistants conversationnels ; rattaché au groupe Actibac fin 2025._
  * **Mots clés**: _réalité virtuelle, serious game, formation, prévention_
  * **Localisation**: Nancy
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game


* **[Hundred Star Games](https://www.hundredstargames.com/)**  
  * _Studio de jeu vidéo AAA fondé en 2023 par Sefton Hill et Jamie Walker (cofondateurs de Rocksteady), installé à Here East (Queen Elizabeth Olympic Park, Londres), qui développe un jeu d'action-aventure solo sous Unreal Engine 5._
  * **Mots clés**: _jeu AAA, Unreal Engine 5, action-aventure, ex-Rocksteady_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 60
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Hutch](https://www.hutch.io/)**  
  * _Studio de jeux mobiles en 3D (F1 Mobile Racing, Top Drives) basé à Londres._
  * **Mots clés**: _Jeu mobile, Course, 3D temps réel_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.hutch.io/careers/)


* **[HypnoVR](https://hypnovr.io/fr/)** (Hypno VR) 
  * _Start-up strasbourgeoise de thérapie numérique associant hypnose médicale et environnements 3D en réalité virtuelle contre la douleur et l'anxiété._
  * **Mots clés**: _réalité virtuelle, dispositif médical, rendu temps réel_
  * **Localisation**: Lampertheim
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Médical/Biologique


* **[Hytech-imaging](https://hytech-imaging.fr/)**  
  * _Entreprise créée en 2016 (Télécom Bretagne) spécialisée en imagerie spectrale et hyperspectrale aérienne, drone et satellite pour le suivi de l'environnement littoral et marin (solutions Stormm, Flyspec, Littosat), avec des clients comme le Shom et le CNES._
  * **Mots clés**: _Imagerie hyperspectrale, Télédétection, Drones, Imagerie satellitaire_
  * **Localisation**: Plouzané
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Vision, Analyse de données
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie, Sécurité/Défense


* **[Hyundai Design Center](https://careers-americas.hyundai.com/)** (Hyundai Design Center (Hyundai America Technical Center)) 
  * _Studio de design nord-américain de Hyundai à Irvine, au sein du Hyundai America Technical Center, qui conçoit des véhicules futurs avec des équipes de design, de maquettes en argile et de modélisation numérique de surfaces (CAS) en lien avec la R&D coréenne._
  * **Mots clés**: _design automobile, modélisation numérique, CAS, Hyundai_
  * **Localisation**: États-Unis/Irvine
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://careers-americas.hyundai.com/hatci/)


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
  * [_Jobs_](https://www.mistralis.fr/recrutement-industriel-robotique/)


* **[i-Virtual](https://www.i-virtual.fr/)**  
  * _Éditeur messin de Saphere, moteur de mesure des signes vitaux à partir de la vidéo (rPPG) d'un simple selfie, intégré par API dans des applications de santé et d'assurance._
  * **Mots clés**: _rPPG, signes vitaux, vision par ordinateur, santé_
  * **Localisation**: Metz
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[i2S](https://i2s.fr/)** (Innovative Imaging Solutions (I2S)) 
  * _Concepteur et fabricant pessacais de caméras techniques, de systèmes de vision intégrée et de scanners de numérisation patrimoniale (livres, documents grand format) avec leurs logiciels de traitement d'image._
  * **Mots clés**: _vision par ordinateur, caméras, numérisation patrimoniale, scanner 3D, traitement d'images_
  * **Localisation**: Pessac, Cestas
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Acquisition, Vision, Imagerie, Hardware
  * **Domaine d'application**: Patrimoine/Culture, Industrie/Manufacturing/CAO, Sécurité/Défense
  * [_Jobs_](https://i2s.fr/offres-demploi/)


* **[ICON Creative Studio](https://www.iconcreativestudio.com/)**  
  * _Studio d'animation 3D indépendant fondé en 2013 à Gastown (Transformers: EarthSpark, Star Wars: Young Jedi Adventures, Batwheels), avec un bureau à Los Angeles._
  * **Mots clés**: _animation 3D, séries, Star Wars, Gastown_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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
  * [_Jobs_](https://iconeus.com/about-us/careers/)


* **[Iconik](https://iconik.gg/)**  
  * _Studio de La Ciotat qui conçoit des jeux et expériences immersives en réalité virtuelle (Little Nightmares VR: Altered Echoes avec Bandai Namco en 2026, Hunting VR, King Pong)._
  * **Mots clés**: _jeu VR, réalité virtuelle, Meta Quest, PS VR2_
  * **Localisation**: La Ciotat
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Ideogram](https://ideogram.ai/)**  
  * _Start-up torontoise d'IA générative d'images (2022, fondée par d'anciens chercheurs de Google Brain, auteurs d'Imagen), réputée pour le rendu de texte dans les images (Ideogram 3.0, modèles de marque personnalisés en 2026)._
  * **Mots clés**: _génération d'images, modèles de diffusion, typographie, design graphique_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 60
  * **Domaine scientifique/technique**: IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel
  * [_Jobs_](https://ideogram.ai/careers)


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
  * [_Jobs_](https://geofit.fr/nous-rejoindre/)


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


* **[Ikomia](https://www.ikomia.ai/)**  
  * _Éditeur rochelais d'outils de vision par ordinateur et d'IA (HUB de plus de 280 algorithmes, API Python, Ikomia STUDIO pour prototyper visuellement des pipelines et SCALE pour les déployer) destinés aux PME, ETI et éditeurs pour l'inspection visuelle et l'analyse d'images._
  * **Mots clés**: _vision par ordinateur, open source, workflows IA, inspection visuelle_
  * **Localisation**: La Rochelle
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Vision, Imagerie, Pipeline/Outils de production
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Énergie/Environnement, Générique


* **[Illogic Studios](https://www.illogicstudios.com/)**  
  * _Studio d'animation montpelliérain réunissant des réalisateurs nommés aux Oscars, auteur de publicités (le loup d'Intermarché) et prestataire pour Illumination Mac Guff, Mikros Animation et Ubisoft._
  * **Mots clés**: _animation 3D, publicité, court métrage, réalisation_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[iLLOGIKA](https://www.illogika.com/)**  
  * _Studio montréalais de développement et de co-développement de jeux vidéo et d'expériences interactives, qui a créé la filiale Studio Rabaska, consacrée à la réalité virtuelle en salle (LBVR)._
  * **Mots clés**: _co-développement, jeu vidéo, réalité virtuelle, LBVR_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


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


* **[Imactis](https://imactis.com/)**  
  * _Concepteur du système CT-Navigation de guidage d'aiguilles par imagerie 3D scanner pour la radiologie interventionnelle (marquage CE MDR, FDA), racheté par GE HealthCare en 2023._
  * **Mots clés**: _navigation chirurgicale, scanner, radiologie interventionnelle_
  * **Localisation**: Saint-Martin-d'Hères
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Visualisation, IHM/Haptique
  * **Domaine d'application**: Médical/Biologique


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


* **[Imaginary Forces](https://imaginaryforces.com/)**  
  * _Studio de design et de génériques animés (titres 2D/3D, motion design, effets) pour le cinéma, les séries, le sport et les marques, auteur en 2026 du générique des Jeux olympiques d'hiver de Milan Cortina pour NBC Sports et des génériques de Thursday Night Football sur Amazon Prime._
  * **Mots clés**: _génériques, motion design, CG, design_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


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
  * [_Jobs_](https://www.imagine-eyes.com/company/careers/)


* **[Imagine Optic](https://www.imagine-optic.com/)**  
  * _Fabricant d'analyseurs de front d'onde (Shack-Hartmann), de miroirs déformables et de logiciels d'optique adaptative et de métrologie optique, avec un établissement à Talence._
  * **Mots clés**: _métrologie, optique adaptative, laser, microscopie, front d'onde_
  * **Remarque**: _Siège à Orsay ; établissement actif de petite taille à Talence (l'ancien établissement de la Cité de la Photonique à Pessac est fermé). Effectif = tranche de l'entreprise._
  * **Localisation**: Orsay, Talence
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Hardware
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO, Générique
  * [_Jobs_](https://www.imagine-optic.com/careers/)


* **[Imajing](https://imajing.eu/)**  
  * _Concepteur de systèmes de cartographie mobile (capteurs embarqués, images et lidar) et de logiciels d'exploitation 3D géoréférencée._
  * **Mots clés**: _cartographie mobile, lidar, SIG, gestion d'infrastructures, nuage de points, routes_
  * **Localisation**: Labège
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme
  * [_Jobs_](https://imajing.eu/company/career/)


* **[Imascap](https://www.imascap.com/)**  
  * _Éditeur brestois (groupe Stryker, ex-Wright Medical) de logiciels de reconstruction 3D de l'épaule à partir du scanner, de planification préopératoire et de navigation guidée (technologie du logiciel Blueprint)._
  * **Mots clés**: _planification chirurgicale 3D, épaule, segmentation scanner, navigation chirurgicale, Stryker_
  * **Localisation**: Plouzané
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Visualisation
  * **Domaine d'application**: Médical/Biologique


* **[Imavita](https://imavita.com/)**  
  * _CRO préclinique de l'agglomération toulousaine spécialisée en imagerie in vivo (bioluminescence, fluorescence, OCT, TEP/TDM) et en analyse d'images quantitative pour l'évaluation de thérapies._
  * **Mots clés**: _imagerie préclinique, analyse d'images, biomarqueurs_
  * **Localisation**: Escalquens
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[IMAX](https://www.imax.com/)** (IMAX Corporation) 
  * _Groupe canadien de technologies cinématographiques immersives dont le siège technique de Mississauga conçoit projecteurs laser, caméras certifiées IMAX, procédé de remastérisation numérique DMR et traitement d'image et du son pour salles géantes._
  * **Mots clés**: _projection laser, caméras cinéma, remastérisation numérique, grand format_
  * **Localisation**: Canada/Mississauga, États-Unis/Los Angeles
  * **Nombres d'employés**: 650
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Hardware
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.imax.com/careers)


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


* **[Immervision](https://www.immervision.com/)**  
  * _Société montréalaise (fondée en France en 2000, à Montréal depuis 2003) spécialisée dans les objectifs panoramiques panomorphes, les modules caméra grand angle, les algorithmes de traitement d'image (redressement, fusion) et la simulation de caméras par jumeau numérique ; technologie intégrée aux ThinkPad de Lenovo présentés au CES 2026._
  * **Mots clés**: _optique grand angle, traitement d'image, simulation de caméra, vision embarquée_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Vision, Simulation
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation, Sécurité/Défense
  * [_Jobs_](https://www.immervision.com/immervision/careers/)


* **[Important Looking Pirates](https://www.ilpvfx.com/)**  
  * _Studio suédois d'effets visuels et d'animation (Shōgun, The Mandalorian and Grogu, Dune: Prophecy, The Sandman) avec un studio à Londres, aux côtés de Stockholm et Hambourg._
  * **Mots clés**: _effets visuels, séries, créatures, Shōgun_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 310
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://ilpvfx.teamtailor.com)


* **[IMRA Europe](https://www.imra.eu/)**  
  * _Centre de recherche européen du groupe japonais Aisin, installé à Sophia Antipolis depuis 1986, qui mène des travaux en vision par ordinateur et apprentissage profond pour les véhicules (prédiction, vision neuromorphique)._
  * **Mots clés**: _vision par ordinateur, deep learning, véhicule autonome, R&D Aisin_
  * **Localisation**: Valbonne
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Automobile/Navigation/Aviation, Robotique/Systèmes autonomes


* **[IMV Imaging France](https://www.imv-imaging.com/)**  
  * _Filiale angoumoisine du groupe IMV Technologies (marque Vet Solutions), spécialisée dans les équipements d'imagerie diagnostique vétérinaire (échographes, radiologie)._
  * **Mots clés**: _imagerie vétérinaire, échographie, radiologie, équipements médicaux_
  * **Localisation**: Angoulême
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Hardware
  * **Domaine d'application**: Médical/Biologique


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
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/inbolt/jobs)


* **[Industrial Brothers](https://www.industrialbrothers.com/)**  
  * _Studio d'animation torontois (majorité détenue par Boat Rocker depuis 2025) qui crée et produit des séries jeunesse en 3D comme Dino Ranch et Daniel Spellbound._
  * **Mots clés**: _animation 3D, séries jeunesse, Dino Ranch_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Infinity Ward](https://www.infinityward.com/)**  
  * _Studio d'Activision (Microsoft) à Woodland Hills, créateur de Call of Duty et de la sous-série Modern Warfare, qui sort Call of Duty: Modern Warfare 4 en 2026._
  * **Mots clés**: _AAA, FPS, Call of Duty, moteur IW, console/PC_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 340
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.activision.com/)


* **[InfinyTech3D](https://infinytech3d.com/)**  
  * _Start-up lyonnaise de simulation physique temps réel (framework SOFA, intégrations Unity/Unreal, haptique) pour simulateurs chirurgicaux en réalité virtuelle._
  * **Mots clés**: _simulation physique, simulation médicale, haptique, réalité virtuelle, SOFA, Unity_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Simulation, VR/AR, IHM/Haptique
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game


* **[Ingenuity Studios](https://www.ingenuitystudios.com/)**  
  * _Studio d'effets visuels de Los Angeles (films, séries, clips, publicité), filiale de Streamland Media, avec des studios à Vancouver et Toronto._
  * **Mots clés**: _effets visuels, Houdini, séries, Streamland_
  * **Localisation**: Canada/Vancouver, États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://job-boards.greenhouse.io/ingenuitystudios)


* **[inHEART](https://www.inheartmedical.com/)**  
  * _Jumeau numérique 3D du coeur du patient construit à partir de l'imagerie médicale (IA et simulation) pour guider l'ablation des arythmies._
  * **Mots clés**: _imagerie médicale, jumeau numérique, cardiologie, planification chirurgicale, deep learning, segmentation, dispositif médical_
  * **Localisation**: Pessac, États-Unis/Boston
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Simulation
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.inheartmedical.com/careers)


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


* **[Innoteo](https://www.innoteo.fr/)**  
  * _Société de Compiègne qui édite Dimeo, solution de réalité augmentée (lunettes AR, HoloLens) et d'IA pour la formation et la maintenance industrielle, en parallèle d'une activité d'intégration Microsoft Dynamics 365 et Power BI._
  * **Mots clés**: _réalité augmentée, maintenance industrielle, HoloLens, Dimeo_
  * **Localisation**: Compiègne
  * **Nombres d'employés**: 7
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[InnovMetric](https://www.polyworks.com/)** (InnovMetric Software) 
  * _Éditeur québécois (1994) de PolyWorks, suite logicielle de métrologie 3D universelle (traitement de nuages de points, inspection, comparaison CAO) utilisée dans l'automobile et l'aéronautique ; environ 650 employés._
  * **Mots clés**: _métrologie 3D, nuages de points, inspection, PolyWorks_
  * **Localisation**: Canada/Québec
  * **Nombres d'employés**: 650
  * **Domaine scientifique/technique**: Géométrie, Reconstruction, Acquisition, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://careers-innovmetric.icims.com/)


* **[Inod](https://www.inod.solutions/)**  
  * _Studio lavallois de solutions immersives (VR, AR, réalité mixte, configurateurs 3D, salons virtuels) éditeur de ScaleView, logiciel de revue de projets 3D en VR compatible Revit, SketchUp, SolidWorks ou CATIA (Laval Virtual Award 2019), et de Mix Design en réalité mixte._
  * **Mots clés**: _ScaleView, visite virtuelle, configurateur 3D, réalité mixte, salons virtuels_
  * **Localisation**: Laval
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.inod.solutions/jobs/)


* **[InSimo](https://www.insimo.com/)**  
  * _Éditeur de simulateurs logiciels pour la formation aux gestes médicaux et chirurgicaux (ponctions échoguidées, chirurgie robotique, cataracte pour HelpMeSee, sutures pour VirtaMed)._
  * **Mots clés**: _simulation médicale, chirurgie assistée, formation professionnelle, simulation physique, échographie, chirurgie robotique_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Simulation, Modélisation, Animation, Visualisation
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.insimo.com/fr/career-2/)


* **[Insomniac Games](https://insomniac.games/)**  
  * _Studio de PlayStation Studios (Sony) basé à Burbank, développeur de Ratchet & Clank et de Marvel's Spider-Man 2, qui sort Marvel's Wolverine sur PS5 le 15 septembre 2026._
  * **Mots clés**: _AAA, action-aventure, Marvel, moteur propriétaire, PlayStation_
  * **Localisation**: États-Unis/Burbank
  * **Nombres d'employés**: 400
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://insomniac.games/careers/)


* **[Intelerad](https://www.intelerad.com/)** (Intelerad Medical Systems) 
  * _Éditeur montréalais (1999) de logiciels d'imagerie médicale (PACS, visualiseurs diagnostiques, archivage et flux de travail radiologiques en cloud), environ 700 à 800 employés dans quatre pays ; classé n° 1 PACS Royaume-Uni/Irlande au Best in KLAS 2026._
  * **Mots clés**: _PACS, imagerie médicale, radiologie, visualisation diagnostique_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 750
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Web/Cloud/Big Data
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.intelerad.com/en/careers/)


* **[Intellijoint Surgical](https://intellijointsurgical.com/)**  
  * _Fabricant de Kitchener (2010, issu de l'Université de Waterloo) de systèmes de navigation chirurgicale à micro-caméra et suivi optique par IA pour la pose de prothèses de hanche et de genou._
  * **Mots clés**: _navigation chirurgicale, suivi optique, orthopédie, micro-caméra_
  * **Localisation**: Canada/Kitchener
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Vision, Acquisition, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[InterDigital](https://www.interdigital.com/)**  
  * _Centre de R&D (ex-Technicolor R&I) sur la vidéo immersive, la vidéo volumétrique, le light field, l'haptique et la compression vidéo._
  * **Mots clés**: _vidéo volumétrique, compression vidéo, normalisation, HDR, haptique, deep learning, brevets_
  * **Remarque**: _Centre de R&D issu de Technicolor Research & Innovation, repris par le groupe américain InterDigital._
  * **Localisation**: Cesson-Sévigné
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.interdigital.com/company/careers)


* **[InTheBox](https://www.inthebox.studio/)**  
  * _Studio annécien créé en 2011 spécialisé dans la production d'animation en images de synthèse, les VFX et le développement technique, recruteur de diplômés d'écoles 3D (ESMA)._
  * **Mots clés**: _animation 3D, VFX, images de synthèse_
  * **Localisation**: Annecy
  * **Nombres d'employés**: 7
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Intrasense](https://intrasense.fr/fr/)**  
  * _Éditeur montpelliérain de logiciels d'imagerie médicale : plateforme de visualisation Myrian et plateforme d'IA en oncologie DUOnco (suivi des cancers sur scanner), partenaire de Guerbet._
  * **Mots clés**: _imagerie médicale, visualisation 3D, IA oncologie, radiologie_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://intrasense.fr/fr/nous-rejoindre-logiciel-imagerie-medicale/)


* **[Inui](https://www.inui.fr/)** (Agence Inui) 
  * _Agence parisienne d'images de synthèse et de films d'animation 3D pour l'architecture et les projets immobiliers._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective, animation 3D_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Visualisation, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme
  * [_Jobs_](https://inui.fr/recrutement/)


* **[Inventive](https://www.inventive-studio.com/)**  
  * _Studio strasbourgeois de médiation numérique et de design qui crée images de synthèse, réalité virtuelle et augmentée et installations immersives pour musées et patrimoine (musée Unterlinden, cathédrale de Strasbourg)._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, exposition immersive, architecture_
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: VR/AR, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Patrimoine/Culture, Architecture/BTP/Urbanisme


* **[Inverted AI](https://www.inverted.ai/)**  
  * _Start-up vancouvéroise issue de l'UBC qui produit des modèles génératifs de comportement d'agents (véhicules, piétons) pour la simulation de conduite autonome et ADAS (TorchDriveSim)._
  * **Mots clés**: _simulation de conduite, agents, véhicule autonome_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Simulation, IA générative (image/3D), Animation
  * **Domaine d'application**: Automobile/Navigation/Aviation, Robotique/Systèmes autonomes


* **[Invoke Studios](https://www.invokestudios.com/)**  
  * _Studio montréalais de Wizards of the Coast (Hasbro), ex-Tuque Games (Dungeons & Dragons: Dark Alliance), qui développe Warlock: Dungeons & Dragons, montré à la Gamescom 2026._
  * **Mots clés**: _jeu vidéo AAA, Dungeons & Dragons, action-RPG, Hasbro_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[inXile Entertainment](https://www.inxile-entertainment.com/)**  
  * _Studio de jeux de rôle de Microsoft (Xbox Game Studios) installé à Tustin, auteur de Wasteland 3 et The Bard's Tale IV, qui développe Clockwork Revolution sous Unreal Engine 5._
  * **Mots clés**: _jeu de rôle, Wasteland, Clockwork Revolution, Unreal Engine 5, Xbox_
  * **Localisation**: États-Unis/Tustin
  * **Nombres d'employés**: 110
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


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
  * [_Jobs_](https://ishtar.games/join-us/)


* **[Jagex](https://www.jagex.com/)**  
  * _Studio de Cambridge, créateur de RuneScape et Old School RuneScape, jeux en ligne massivement multijoueurs._
  * **Mots clés**: _MMORPG, RuneScape, jeu en ligne_
  * **Localisation**: Royaume-Uni/Cambridge
  * **Nombres d'employés**: 450
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo


* **[Jam City](https://www.jamcity.com/)**  
  * _Développeur et éditeur de jeux mobiles basé à Culver City, auteur de Harry Potter: Hogwarts Mystery, Disney Emoji Blitz et Panda Pop._
  * **Mots clés**: _jeu mobile, free-to-play, licences, jeu narratif_
  * **Localisation**: États-Unis/Culver City
  * **Nombres d'employés**: 250
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.jamcity.com/careers/)


* **[Jam Filled Entertainment](https://www.jamfilled.com/)**  
  * _Studio d'animation 2D et 3D (division de Blue Ant Media) avec un siège à Ottawa et un studio 3D à Toronto issu du rachat d'Arc Productions, qui travaille notamment sur The Loud House._
  * **Mots clés**: _animation 2D, animation 3D, séries_
  * **Localisation**: Canada/Toronto, Canada/Ottawa
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[JAMM](https://www.jammvisual.com/)**  
  * _Studio indépendant d'effets visuels 2D/3D et d'étalonnage pour la publicité fondé en 2014 à Los Angeles, auteur de spots du Super Bowl (Hyundai) et de campagnes primées (Cannes, VES Awards, Emmy), avec un studio à Londres depuis 2025._
  * **Mots clés**: _effets visuels, publicité, étalonnage_
  * **Localisation**: États-Unis/Culver City, Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.jammvisual.com/careers/)


* **[JPL Films](https://jplfilms.com/)**  
  * _Société de production rennaise de films d'animation (marionnettes, papier découpé, 2D, coproductions 3D), courts métrages et séries._
  * **Mots clés**: _stop motion, animation 2D, court métrage, séries d'animation_
  * **Remarque**: _Studio de tournage associé : Pupps' Motion Studio (SIREN 842399768), même contact._
  * **Localisation**: Rennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Kabam](https://kabam.com/)**  
  * _Éditeur et développeur de jeux mobiles basé à Vancouver, filiale du coréen Netmarble, connu pour Marvel Contest of Champions et Transformers: Forged to Fight._
  * **Mots clés**: _jeu mobile, Marvel Contest of Champions, Netmarble, free-to-play_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Kaedim](https://www.kaedim3d.com/)**  
  * _Start-up londonienne fondée en 2020 qui produit des modèles 3D prêts pour le jeu à partir d'images ou de concepts 2D, en combinant apprentissage automatique et vérification par des artistes 3D, pour les studios de jeu vidéo, le cinéma et l'e-commerce._
  * **Mots clés**: _IA 3D, image vers 3D, assets de jeu, génération de maillages_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 79
  * **Domaine scientifique/technique**: IA générative (image/3D), Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo, Commerce/Marketing/Publicité


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


* **[Kamax Innovative System](https://kamax-innovative.com/)**  
  * _Jeune entreprise innovante issue des travaux du laboratoire XLIM (CNRS, Université de Limoges), créée en 2013, qui développe des technologies propriétaires d'imagerie optique (XPolar par polarisation, XFluo 3D, XLED), le scanner K-probe et ses logiciels de visualisation et traitement d'images (ODPManager, ODPViewer) pour mesurer l'efficacité des cosmétiques sur la peau, les cheveux et les fibres kératiniques._
  * **Mots clés**: _imagerie par polarisation, imagerie scientifique, analyse d'images, cosmétique_
  * **Localisation**: Limoges
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique


* **[Karrot Animation](https://www.karrotanimation.com/)**  
  * _Studio d'animation londonien primé aux BAFTA et aux Emmy, créateur de Sarah & Duck, qui produit des séries jeunesse (MaeBee, My Friend Maisy, Peppa Pig)._
  * **Mots clés**: _animation 2D, séries jeunesse, Sarah & Duck, CBeebies_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Karukera Studio](https://www.karukerastudio.com/)**  
  * _Studio guadeloupéen créé en 2023 de production audiovisuelle et d'expériences immersives : virtual production, plateau fond vert de 44 m², XR, capture de mouvement._
  * **Mots clés**: _virtual production, fond vert, motion capture, XR_
  * **Localisation**: Baie-Mahault (Guadeloupe)
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Acquisition, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Kavaleer Productions](https://kavaleer.com/)**  
  * _Studio d'animation de Dublin (Thomas Street) créant et produisant des séries d'animation diffusées dans plus de 140 pays._
  * **Mots clés**: _animation, séries TV, Dublin_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Kayrros](https://www.kayrros.com/)**  
  * _Mesure par satellite de l'empreinte environnementale des activités humaines (analyse d'images satellitaires, géospatial)._
  * **Mots clés**: _imagerie satellite, SIG, deep learning, méthane, risque climatique, feux de forêt, déforestation_
  * **Remarque**: _Rachetée en 2026 par Energy Aspects (Londres) ; la marque et l'équipe parisienne sont maintenues._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie
  * [_Jobs_](https://kayrros1.recruitee.com/)


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
  * **Localisation**: Saint-Herblain, Nancy
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.banook.com/about/careers)


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


* **[Keyveo](https://www.keyveo.com/)**  
  * _Entreprise rouennaise fondée en 2014, spécialisée dans les technologies immersives pour les entreprises et collectivités : réalité virtuelle, augmentée et mixte, configurateurs 3D, web 3D (WebGL), visites virtuelles 360° (plateforme KVT) et maquettes BIM ; références Renault, Areva, CCI Rouen._
  * **Mots clés**: _réalité virtuelle, configurateur 3D, WebGL, visite virtuelle, serious game_
  * **Localisation**: Le Petit-Quevilly
  * **Nombres d'employés**: 20
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game, Commerce/Marketing/Publicité


* **[Keywords Studios](https://www.keywordsstudios.com/)**  
  * _Groupe d'externalisation pour le jeu vidéo à siège irlandais (art 3D, animation, ingénierie, audio, tests), avec de nombreux studios dans le monde._
  * **Mots clés**: _externalisation, art 3D, jeu vidéo, Dublin_
  * **Localisation**: Irlande/Dublin, Canada/Montréal
  * **Nombres d'employés**: 12000
  * **Domaine scientifique/technique**: Pipeline/Outils de production, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Kinetix](https://kinetix.tech/)**  
  * _Génération d'animations 3D d'humains par IA à partir de vidéo ou de texte (emotes pour jeux vidéo et mondes virtuels)._
  * **Mots clés**: _IA générative, animation 3D, estimation de pose humaine, génération vidéo, vision par ordinateur, animation de personnages_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, IA générative (image/3D), Vision, Acquisition
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://kinetix-tech.welcomekit.co/)


* **[Kitfox Games](https://www.kitfoxgames.com/)**  
  * _Studio indépendant et éditeur montréalais fondé en 2013 (Moon Hunters, The Shrouded Isle, Boyfriend Dungeon), éditeur de Dwarf Fortress sur Steam._
  * **Mots clés**: _jeu indépendant, édition de jeux, Dwarf Fortress_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 12
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Kitware](https://www.kitware.com/)**  
  * _Développement de logiciels scientifique, de visualisation, et de compilation. Beaucoup de développement open-source._
  * **Mots clés**: _open source, visualisation scientifique, VTK, ParaView, vision par ordinateur, imagerie médicale, deep learning_
  * **Produits**: ParaView, VTK, 3D Slicer, ITK, CMake
  * **Localisation**: États-Unis, France/Lyon
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Visualisation, Imagerie, Vision, Reconstruction
  * **Domaine d'application**: Médical/Biologique, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.kitware.com/careers/)


* **[Klei Entertainment](https://www.klei.com/)**  
  * _Studio indépendant de jeu vidéo de Vancouver (environ 100 personnes) créateur de Don't Starve, Oxygen Not Included, Mark of the Ninja et Rotwood, avec une branche d'édition (Klei Publishing)._
  * **Mots clés**: _jeu indépendant, animation 2D, Don't Starve, Oxygen Not Included_
  * **Localisation**: Canada/Vancouver
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.klei.com/careers)


* **[Koelis](https://koelis.com/)**  
  * _Concepteur de systèmes d'échographie 3D et de fusion IRM/écho pour le diagnostic et le traitement du cancer de la prostate._
  * **Mots clés**: _imagerie médicale, échographie 3D, fusion IRM/écho, diagnostic, prostate, biopsie_
  * **Localisation**: Meylan
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Géométrie
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://koelis.com/career/)


* **[Krafton Montréal](https://kraftonmontreal.com/)**  
  * _Studio AAA de l'éditeur coréen Krafton (PUBG, inZOI), ouvert à Montréal en 2023 et dirigé par Patrik Méthé (ex-Far Cry), qui développe Project Windless, un RPG d'action en monde ouvert adapté de la série de romans The Bird That Drinks Tears._
  * **Mots clés**: _jeu vidéo AAA, monde ouvert, RPG, Krafton_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 90
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://kraftonmontreal.com/#careers)


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


* **[Larian Studios Dublin](https://larian.com/)**  
  * _Studio de Larian (Baldur's Gate 3, Divinity) installé à Dublin, l'un des sites de développement du groupe aux côtés de Gand, Québec, Guildford, Barcelone._
  * **Mots clés**: _jeu vidéo, RPG, moteur 3D, Dublin_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo


* **[Lasergraphics](https://lasergraphics.com/)**  
  * _Fabricant de scanners de films cinématographiques (Director, ScanStation) et de leurs logiciels de traitement d'image, utilisés en 2026 par la BFI, les archives de l'UCLA, Warner Bros. Motion Picture Imaging ou pour la restauration d'épisodes de Doctor Who de 1965._
  * **Mots clés**: _scanner de film, numérisation, restauration, HDR_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Hardware
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Patrimoine/Culture


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
  * [_Jobs_](https://careers.lectra.com/)


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
  * [_Jobs_](https://ateliers-bk.com/jobs/)


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
  * [_Jobs_](https://les-fees-speciales.coop/contact/recrutement/)


* **[Light Iron](https://www.lightiron.com/)**  
  * _Studio de post-production d'Hollywood (dailies, étalonnage, finition, mastering) qui développe sa propre plateforme logicielle de gestion d'images et de métadonnées Galixy, avec des crédits récents comme Freakier Friday, The Thursday Murder Club et Palm Royale._
  * **Mots clés**: _étalonnage, dailies, finition, Galixy_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 60
  * **Domaine scientifique/technique**: Imagerie, Pipeline/Outils de production, Web/Cloud/Big Data
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Light VFX](https://lightvfx.com/)**  
  * _Studio indépendant d'effets visuels et d'animation pour le cinéma, les séries et la publicité (FX fluides, particules, modélisation 3D, matte painting)._
  * **Mots clés**: _effets visuels, long métrage, séries TV, publicité, environnements numériques, simulation de fluides_
  * **Localisation**: Royan, Paris, Royaume-Uni/Londres
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
  * [_Jobs_](https://lightbulbcrew.fr/jobs/)


* **[Lightcraft](https://lightcraft.pro/)**  
  * _Éditeur de Jetset, application iPhone de production virtuelle (suivi de caméra, compositing temps réel, Gaussian splatting, intégration Unreal Engine) et de Spark Story, plateforme de prévisualisation 3D dans le navigateur présentée au SIGGRAPH 2026._
  * **Mots clés**: _production virtuelle, suivi de caméra, compositing temps réel, previs_
  * **Localisation**: États-Unis/Santa Monica
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Vision, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lighthouse Studios](https://lighthousestudios.ie/)**  
  * _Studio de production d'animation 2D et hybride à Kilkenny, né d'un partenariat entre Cartoon Saloon et Mercury Filmworks, pour plateformes et diffuseurs internationaux._
  * **Mots clés**: _animation 2D, hybride, Kilkenny_
  * **Localisation**: Irlande/Kilkenny
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lightspeed LA](https://www.lightspeed-studios.com/)**  
  * _Studio AAA d'Irvine de Tencent (LightSpeed Studios), consacré aux jeux en monde ouvert, qui développe Last Sentinel, annoncé en 2023 et réorienté en 2026._
  * **Mots clés**: _monde ouvert, AAA, Last Sentinel, Tencent_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
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


* **[Locksmith Animation](https://locksmithanimation.com/)**  
  * _Studio d'animation 3D de longs métrages fondé à Londres en 2014 (Ron débloque / Ron's Gone Wrong)._
  * **Mots clés**: _Animation 3D, Long métrage_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lockwood Publishing](https://www.lockwoodpublishing.com/)**  
  * _Studio de Nottingham, créateur d'Avakin Life, monde social 3D avec avatars personnalisables, sur mobile._
  * **Mots clés**: _métavers, avatars, mobile, jeu social_
  * **Localisation**: Royaume-Uni/Nottingham
  * **Nombres d'employés**: 170
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Logopress](https://www.logopress.com/)**  
  * _Éditeur fondé en 1989 à Pouilley-les-Vignes (près de Besançon), filiale d'AutoForm depuis 2018, de logiciels de conception d'outils de presse intégrés à SOLIDWORKS : mise en bande, dépliage et prédiction de flans, emboutissage, simulation de découpe (ProgSim), utilisés dans plus de 30 pays._
  * **Mots clés**: _CAO, outils de presse, tôlerie, dépliage, SOLIDWORKS_
  * **Localisation**: Pouilley-les-Vignes
  * **Nombres d'employés**: 7
  * **Domaine scientifique/technique**: Design/Fabrication, Géométrie, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.logopress.com/en/carrieres.php)


* **[Logyline](https://logyline.com/)**  
  * _Éditeur mérignacais de logiciels de conception 3D pour l'aménagement extérieur (piscines, ombrage, paysagisme, bâches) avec rendu 3D et visite en réalité virtuelle._
  * **Mots clés**: _CAO, conception 3D, rendu temps réel, réalité virtuelle, e-commerce/configurateur 3D_
  * **Produits**: Logyline Studio Piscine, Logyconcept3D, Logydraw
  * **Localisation**: Mérignac
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité


* **[Lola VFX](https://www.lolavfx.com/)**  
  * _Studio d'effets visuels spécialisé dans le rajeunissement et le vieillissement numériques d'acteurs (L'Étrange Histoire de Benjamin Button, Captain Marvel, Avengers: Endgame) et les retouches invisibles, auteur en 2026 du rajeunissement des acteurs de Jurassic Park dans la publicité Xfinity du Super Bowl._
  * **Mots clés**: _effets visuels, rajeunissement numérique, compositing, humains numériques_
  * **Localisation**: États-Unis/Los Angeles, Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Loops Creative Studio](https://loopscreativestudio.com/)**  
  * _Studio d'animation 3D fondé en 2022 proposant lookdev, R&D et pipeline temps réel (Unreal Engine, Blender, USD) aux producteurs (Les Légendaires avec 2 Minutes, Liminals de Pierre Huyghe)._
  * **Mots clés**: _lookdev, Unreal Engine, USD, temps réel, pipeline, animation 3D_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel
  * [_Jobs_](https://loopscreativestudio.com/jobs/)


* **[Lozange Lab](https://www.lozange-lab.com/)**  
  * _Studio de jeux indépendants et d'installations interactives créé en 2014 (Swim Out, Rip Them Off, The Unic), qui assure aussi des portages mobile et console._
  * **Mots clés**: _jeu indépendant, puzzle, portage, installation interactive_
  * **Localisation**: Metz
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Art/Evenementiel


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


* **[Lucid Games](https://lucidgames.co.uk/)**  
  * _Studio de Liverpool (Geometry Wars 3, Destruction AllStars), spécialisé dans le développement AAA._
  * **Mots clés**: _jeu vidéo, Baltic Triangle, AAA_
  * **Localisation**: Royaume-Uni/Liverpool
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Lucid Realities](https://lucidrealities.studio/)**  
  * _Société parisienne de production et de distribution d'œuvres immersives et interactives (VR, AR, expositions immersives) portées par des auteurs, comme The Enemy._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, narration immersive, exposition immersive, documentaire_
  * **Localisation**: Romainville
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel, Patrimoine/Culture


* **[Ludia](https://www.ludia.com/)**  
  * _Développeur et éditeur montréalais de jeux mobiles sur grandes licences (Jurassic World Alive, Jurassic World: The Game, Dragons: Rise of Berk), redevenu indépendant en 2025 après sa cession par Jam City à des investisseurs québécois._
  * **Mots clés**: _jeu mobile, free-to-play, Jurassic World, jeux sur licence_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 190
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.ludia.com/careers)


* **[Ludogram](https://ludogram.io/)**  
  * _Studio lillois de jeux vidéo narratifs, multijoueurs et multiplateformes fondé en 2019 (Worlds of Aria, Heroes Never Die, Invokyr, Ascenders: Beyond the Peak)._
  * **Mots clés**: _jeu vidéo, multijoueur, jeu narratif, PC et consoles_
  * **Localisation**: Lille
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Lumeto](https://lumeto.com/)**  
  * _Éditeur torontois d'InvolveXR, laboratoire de simulation en réalité virtuelle pour la formation des soignants (patients virtuels animés par IA, plus de 500 scénarios, évaluation automatisée), déployé dans les collèges et universités de l'Ontario._
  * **Mots clés**: _simulation médicale, réalité virtuelle, patients virtuels, formation des infirmiers_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: VR/AR, Simulation, Animation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Médical/Biologique


* **[Lumirithmic](https://www.lumirithmic.com/)**  
  * _Start-up londonienne issue de l'Imperial College London (cofondée par le professeur Abhijeet Ghosh) qui développe des systèmes de bureau de capture 3D du visage et de l'apparence de la peau, combinant imagerie computationnelle et IA, pour le jeu vidéo, la publicité et la beauté._
  * **Mots clés**: _capture faciale, réflectance, humains numériques, Imperial College_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Rendu offline/VFX
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX, Mode/Vêtements/Accessoires


* **[Lumiscaphe](https://lumiscaphe.com/)**  
  * _Éditeur du logiciel Patchwork 3D et de solutions de rendu temps réel et de configurateurs 3D pour le design industriel._
  * **Mots clés**: _Patchwork 3D, rendu temps réel, e-commerce/configurateur 3D, design industriel, automobile, Blender_
  * **Localisation**: Canéjan
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation, Commerce/Marketing/Publicité
  * [_Jobs_](https://lumiscaphe.com/carrieres/)


* **[Lupus Films](https://lupusfilms.com/)**  
  * _Studio et société de production d'animation 2D d'Islington (Londres) fondé en 2002 (The Snowman and the Snowdog, Ethel & Ernest, Kensuke's Kingdom, Mog's Christmas), nommé aux BAFTA 2025, avec un programme de formation de jeunes animateurs._
  * **Mots clés**: _animation 2D, long métrage, séries jeunesse, BAFTA_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lux Aeterna](https://luxaeterna.com/)**  
  * _Studio de VFX de Bristol indépendant depuis plus de 25 ans (simulation, environnements, foules), avec un département R&D._
  * **Mots clés**: _VFX, simulation, documentaire, Bristol_
  * **Localisation**: Royaume-Uni/Bristol
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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
  * [_Jobs_](https://www.luxigon.com/jobs)


* **[LVCim](https://lvcim.com/)**  
  * _Start-up aixoise fondée en 2020 qui édite des composants logiciels de réalité mixte, de simulation et de liaisons tactiques pour la préparation opérationnelle des forces armées (simulateur de drone RAPAS)._
  * **Mots clés**: _simulation, réalité mixte, défense, simulateur_
  * **Localisation**: Aix-en-Provence
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Simulation, VR/AR
  * **Domaine d'application**: Sécurité/Défense, Entrainement/Formation/Serious Game
  * [_Jobs_](https://lvcim.com/nous-recrutons/)


* **[Lynred](https://www.lynred.com/)**  
  * _Fabricant de détecteurs infrarouges refroidis et non refroidis et de capteurs SWIR (défense, spatial, automobile, vision industrielle), siège, R&D et production à Veurey-Voroize._
  * **Mots clés**: _infrarouge, imagerie thermique, capteurs, SWIR_
  * **Localisation**: Veurey-Voroize
  * **Nombres d'employés**: 750
  * **Domaine scientifique/technique**: Acquisition, Hardware, Imagerie
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO
  * [_Jobs_](https://lynred-career.talent-soft.com/)


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


* **[Lynxter](https://lynxter.com/fr)**  
  * _Fabricant français d'imprimantes 3D industrielles modulaires, pionnier de l'impression 3D silicone et multimatériaux (liquide, pâte, filament), avec son propre logiciel de pilotage et de découpage (slicer), fondé en 2016 à Bayonne._
  * **Mots clés**: _Impression 3D, Fabrication additive, Silicone, Slicer, Imprimante modulaire_
  * **Localisation**: Bayonne
  * **Nombres d'employés**: 33
  * **Domaine scientifique/technique**: Design/Fabrication, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique
  * [_Jobs_](https://lynxter.com/fr/entreprise/recrutement)


* **[M-Covision](https://fr.mcovision.com/)**  
  * _Cabinet de conseil et R&D en IA spécialisé en vision par ordinateur (deep learning), avec des projets en imagerie médicale, biologie et industrie._
  * **Mots clés**: _vision par ordinateur, deep learning, conseil R&D, imagerie médicale, segmentation, formation professionnelle_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Analyse de données
  * **Domaine d'application**: Générique
  * [_Jobs_](https://fr.mcovision.com/jobs)


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
  * [_Jobs_](https://www.illuminationstudiosparis.com/careers/)


* **[Machina Films](https://www.machina-films.com/)**  
  * _Petite société de post-production fondée en 2007 à Nice (avec une activité à Paris) spécialisée dans les effets numériques, les décors virtuels, l'animation 3D et architecturale et l'étalonnage._
  * **Mots clés**: _effets visuels, post-production, animation 3D, étalonnage_
  * **Localisation**: Nice
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Architecture/BTP/Urbanisme


* **[Madbox](https://www.madbox.io/)**  
  * _Studio et éditeur parisien de jeux mobiles casual free-to-play à très large audience (Stickman Hook, Sausage Flip, Idle Ants, Pocket Champs)._
  * **Mots clés**: _mobile, free-to-play, jeu casual, hypercasual, édition de jeux, Stickman Hook_
  * **Localisation**: Paris, Annecy
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.madbox.io/)


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
  * [_Jobs_](https://www.magicdesignstudios.com/jobs-alert)


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
  * [_Jobs_](https://join.com/companies/mago)


* **[Mainframe Industries](https://themainframe.com/)**  
  * _Studio finlandais qui a une équipe à Paris, créateur de Pax Dei, MMO bac à sable médiéval natif du cloud sous Unreal Engine 5._
  * **Mots clés**: _Unreal Engine, MMO, cloud gaming, console/PC_
  * **Localisation**: Paris, Finlande/Helsinki
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://themainframe.com/work-with-us/)


* **[Mainframe Studios](https://www.mainframe.ca/)**  
  * _Studio d'animation 3D fondé en 1993 à Vancouver (ReBoot, première série entièrement en images de synthèse), filiale de Kartoon Studios, qui produit des séries pour Spin Master, Sony ou Disney et ses propres projets (It's Andrew!, The Immortals & The Shadow Realm)._
  * **Mots clés**: _animation 3D, séries jeunesse, ReBoot, Kartoon Studios_
  * **Localisation**: Canada/Vancouver
  * **Nombres d'employés**: 650
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[MakeMake](https://makemake.com/)**  
  * _Studio créatif intégré fondé par Angus Wall qui réunit les anciens studios a52 (effets visuels et CG pour la publicité), Elastic (design, génériques) et Rock Paper Scissors (montage), avec des équipes VFX, animation, étalonnage et narrative design._
  * **Mots clés**: _effets visuels, publicité, design, génériques_
  * **Localisation**: États-Unis/Los Angeles, États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX


* **[Malil'Art](https://www.malil-art.com/)** (Malil'Art Productions) 
  * _Studio et prestataire d'animation 2D et 3D fondé en 2014, spécialisé dans la fabrication de séries et films et la mise en place de pipelines de production (Foot 2 Rue, Gus le chevalier minus)._
  * **Mots clés**: _animation 2D, animation 3D, séries TV, pipeline_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Maneva](https://www.maneva.ai/)**  
  * _Start-up torontoise (2021) de vision par ordinateur pour l'industrie qui analyse en temps réel les flux des caméras d'usine existantes pour détecter défauts, risques d'arrêt et problèmes de sécurité ; série A de 27 M$ US en juin 2026._
  * **Mots clés**: _vision industrielle, analyse vidéo, contrôle qualité, IA_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Vision, Analyse de données
  * **Domaine d'application**: Industrie/Manufacturing/CAO


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
  * [_Jobs_](https://www.manus-meta.com/careers)


* **[ManvsMachine](https://mvsm.com/)**  
  * _Studio de design et de réalisation (motion design, films CG) fondé à Londres, membre de Landor & Fitch, avec un second studio à Los Angeles, pour les grandes marques._
  * **Mots clés**: _motion design, CGI, publicité, direction artistique_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel
  * [_Jobs_](https://mvsm.com/jobs)


* **[Manzalab](https://www.manzalab.com/)**  
  * _Studio de serious games et d'expériences immersives (VR, mobile learning) pour la formation et la communication, éditeur de la plateforme collaborative Teemew._
  * **Mots clés**: _serious game, réalité virtuelle, formation professionnelle, plateforme collaborative VR, avatars, Teemew_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Modélisation, VR/AR, Web/Cloud/Big Data
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.manzalab.com/jobs)


* **[Maplesoft](https://www.maplesoft.com/)** (Waterloo Maple Inc. (Maplesoft)) 
  * _Éditeur waterlooïen (1988, filiale du japonais Cybernet Systems) du logiciel de calcul symbolique Maple et de MapleSim, outil de modélisation et de simulation multiphysique de systèmes (jumeaux numériques, mise en service virtuelle)._
  * **Mots clés**: _calcul symbolique, simulation multiphysique, jumeau numérique, mise en service virtuelle_
  * **Localisation**: Canada/Waterloo
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Simulation, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Robotique/Systèmes autonomes
  * [_Jobs_](https://www.maplesoft.com/company/careers/)


* **[Marmoset](https://marmoset.co/)**  
  * _Éditeur de Marmoset Toolbag, logiciel temps réel de baking, texturing et rendu de modèles 3D pour artistes du jeu vidéo et du film._
  * **Mots clés**: _Marmoset Toolbag, baking de textures, texturing, rendu temps réel, plugin/logiciel pour artistes, visualiseur 3D_
  * **Localisation**: États-Unis, International
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://marmoset.co/jobs/)


* **[MARZ](https://monstersaliensrobotszombies.com/)**  
  * _Studio d'effets visuels torontois (Monsters Aliens Robots Zombies) spécialisé dans les séries, qui développe ses propres outils d'IA pour le rajeunissement, la retouche de visages (Vanity AI) et le doublage labial (LipDub)._
  * **Mots clés**: _effets visuels, IA, rajeunissement, séries_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Rendu offline/VFX, IA générative (image/3D), Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[MassVirtual](https://massvirtual.com/)**  
  * _Éditeur américain de solutions de formation en réalité étendue (plateforme MassXR), déployées notamment pour l'US Air Force._
  * **Mots clés**: _réalité étendue, formation professionnelle, simulateur d'entraînement, défense, aéronautique, MassXR_
  * **Localisation**: États-Unis/Orlando
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: VR/AR, Simulation
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://www.massvirtual.com/career)


* **[Mathematic](https://mathematic.tv)**  
  * _Studio de création visuelle : effets visuels, animation, production virtuelle et temps réel._
  * **Mots clés**: _effets visuels, animation 3D, motion design, publicité, clips, cinématiques de jeu, IA générative_
  * **Localisation**: Paris, Montpellier, Canada/Montréal
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité, Art/Evenementiel
  * [_Jobs_](https://mathematic.tv/contact/careers/)


* **[Matrox](https://video.matrox.com/)** (Matrox Video / Matrox Graphics) 
  * _Groupe de Dorval (fondé en 1976) concevant cartes graphiques multi-écrans, contrôleurs de murs d'images et matériel de capture, d'encodage et de diffusion vidéo sur IP (Matrox Video)._
  * **Mots clés**: _cartes graphiques, murs d'images, vidéo sur IP, encodage_
  * **Localisation**: Canada/Dorval
  * **Domaine scientifique/technique**: Hardware, Acquisition, Web/Cloud/Big Data
  * **Domaine d'application**: Art/Evenementiel, Générique
  * [_Jobs_](https://video.matrox.com/en/careers)


* **[Mauna Kea Technologies](https://www.maunakeatech.com/)**  
  * _Medtech parisienne qui conçoit Cellvizio, plateforme d'endomicroscopie confocale par fibre pour l'imagerie cellulaire in vivo en temps réel._
  * **Mots clés**: _imagerie médicale, endomicroscopie, traitement d'images_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Acquisition
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.maunakeatech.com/join-us/)


* **[Maxon](https://www.maxon.net/)**  
  * _Éditeur allemand de logiciels de création 3D et vidéo : Cinema 4D, ZBrush, moteur de rendu Redshift et effets Red Giant._
  * **Mots clés**: _Cinema 4D, ZBrush, Redshift, motion design, plugin/logiciel pour artistes, effets visuels, sculpture numérique_
  * **Produits**: ZBrush, Cinema4D, etc.
  * **Localisation**: États-Unis/Newport Beach, Canada, Allemagne
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.maxon.net/fr/about-maxon/careers)


* **[Media Molecule](https://www.mediamolecule.com/)**  
  * _Studio de Guildford de Sony Interactive Entertainment (LittleBigPlanet, Dreams), connu pour des outils de création 3D._
  * **Mots clés**: _jeu vidéo, Dreams, création 3D_
  * **Localisation**: Royaume-Uni/Guildford
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Design/Fabrication
  * **Domaine d'application**: Jeu Vidéo


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


* **[Meerkatt Studio](https://meerkatt-studio.com/)**  
  * _Studio de jeu vidéo indépendant qui développe des jeux de simulation et de gestion à la première personne, centrés sur les interactions physiques (bakery cafe, etc.), publiés sur Steam._
  * **Mots clés**: _jeu indépendant, simulation à la première personne, Steam, interactions physiques, cozy game_
  * **Localisation**: Grand-Champ
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[Megapixel](https://megapixelvr.com/)**  
  * _Concepteur de systèmes de traitement vidéo pour écrans LED (plateforme HELIOS, technologie GhostFrame pour la production virtuelle) utilisés en broadcast, en ICVFX et par LG pour ses écrans MicroLED MAGNIT, récompensé d'un Emmy technique en 2024._
  * **Mots clés**: _écrans LED, traitement vidéo, production virtuelle, GhostFrame_
  * **Localisation**: États-Unis/Santa Clarita
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Hardware, Imagerie, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[Menhir FX](https://menhirfx.com/)**  
  * _Studio d'animation 2D/3D indépendant à Montpellier, spécialisé dans la réalisation de trailers et de films d'animation._
  * **Mots clés**: _animation 3D, trailers, cinématiques_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


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
  * [_Jobs_](https://jobs.merci-michel.com/)


* **[Mercury Filmworks](https://mercuryfilmworks.com/)**  
  * _Grand studio d'animation indépendant d'Ottawa, qui produit des séries 2D (Hilda, Kid Cosmic, Wander Over Yonder) et développe son premier long métrage, Once Our Land._
  * **Mots clés**: _animation 2D, Toon Boom, séries_
  * **Localisation**: Canada/Ottawa
  * **Nombres d'employés**: 340
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Meta](https://ai.meta.com/research/)**  
  * _Groupe technologique ; son laboratoire FAIR Paris (ouvert en 2015) mène des recherches en IA et vision par ordinateur (DINOv2/DINOv3)._
  * **Mots clés**: _vision par ordinateur, deep learning, IA générative, segmentation, apprentissage auto-supervisé, open source_
  * **Localisation**: États-Unis/Menlo Park, Paris, Canada/Montréal, International
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, VR/AR, Reconstruction
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique
  * [_Jobs_](https://www.metacareers.com/)


* **[Metaspectral](https://metaspectral.com/)**  
  * _Éditeur vancouvérois de logiciels d'analyse d'images hyperspectrales par apprentissage profond (plateforme Clarity/Fusion) pour l'observation de la Terre, le tri des plastiques et la défense._
  * **Mots clés**: _imagerie hyperspectrale, observation de la Terre, apprentissage profond_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Imagerie, Vision, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement


* **[Method Animation](https://mediawankidsandfamily.com/)**  
  * _Société de production et d'animation de Mediawan Kids & Family (Clichy) qui développe et produit des séries et longs métrages d'animation en images de synthèse et en 2D._
  * **Mots clés**: _séries d'animation, long métrage, animation 3D, animation 2D_
  * **Remarque**: _Groupe Mediawan Kids & Family._
  * **Localisation**: Clichy
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://mediawankidsandfamily.com/jobs)


* **[Metrologic Group](https://www.metrologicdcs.com/)**  
  * _Éditeur de logiciels de métrologie 3D basés sur la CAO (planification d'inspection, programmation hors ligne de machines à mesurer, robots d'inspection) et d'analyse de tolérances 3DCS, siège à Inovallée (Montbonnot)._
  * **Mots clés**: _métrologie 3D, CAO, inspection, tolérancement_
  * **Localisation**: Montbonnot-Saint-Martin
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Design/Fabrication, Géométrie, Acquisition
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://careers.metrologic.group/en)


* **[Metropolis](https://www.metropolis.io/)** (Metropolis Technologies) 
  * _Entreprise de Santa Monica qui exploite une plateforme de vision par ordinateur (reconnaissance de véhicules par apprentissage profond) pour le paiement sans contact dans plus de 4 200 parkings en Amérique du Nord, après le rachat de SP+ en 2024._
  * **Mots clés**: _vision par ordinateur, reconnaissance de véhicules, apprentissage profond, parkings_
  * **Localisation**: États-Unis/Santa Monica
  * **Nombres d'employés**: 1600
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Automobile/Navigation/Aviation, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.metropolis.io/careers)


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
  * [_Jobs_](https://www.microids.com/jobs/)


* **[Microoled](https://microoled.net/)**  
  * _Fabricant de micro-écrans OLED et de lunettes connectées/AR (ActiveLook) pour viseurs et réalité augmentée._
  * **Mots clés**: _micro-écran, OLED, puce/semi-conducteur, lunettes connectées, réalité augmentée, viseur_
  * **Localisation**: Grenoble, Grenoble
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Hardware, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Sécurité/Défense
  * [_Jobs_](https://microoled.net/careers/)


* **[Microsoft](https://www.microsoft.com/)**  
  * _Multinationale du logiciel et du cloud (Windows, Microsoft 365, Azure, Copilot), également acteur du jeu vidéo avec Xbox et de la réalité mixte._
  * **Mots clés**: _console/PC, édition de jeux, Xbox, cloud/streaming, réalité mixte, IA générative, système d'exploitation_
  * **Remarque**: _<a href=\"https://www.microsoft.com/en-us/research/research-area/graphics-multimedia/?\">Microsoft research</a> est active en informatique graphique._
  * **Localisation**: États-Unis/Redmond, Canada/{Montréal, Vancouver}, International
  * **Nombres d'employés**: 228000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, IA générative (image/3D), Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.microsoft.com/)


* **[Midas VFX](https://midasvfx.com/)**  
  * _Studio indépendant d'effets visuels installé à Covent Garden (Londres), avec une antenne à Mumbai : supervision sur le plateau, création d'assets, simulation, extensions de décor, outils d'IA et compositing pour le cinéma et les séries._
  * **Mots clés**: _effets visuels, beauty work, simulation, séries_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[MiddleVR](https://www.middlevr.com/)** (I'm in VR (MiddleVR)) 
  * _Éditeur de logiciels de réalité virtuelle (middleware pour CAVE/casques, plateforme Improov pour revue de projet 3D immersive)._
  * **Mots clés**: _réalité virtuelle, CAVE, cluster rendering, multi-écrans, Unity, plugin/logiciel pour artistes_
  * **Localisation**: Truchtersheim
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, IHM/Haptique
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game
  * [_Jobs_](https://emploi.afjv.com/annonces-societes/1278)


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
  * [_Jobs_](https://mimbus.com/carriere/)


* **[Miovision](https://miovision.com/)**  
  * _Entreprise de Kitchener (2005) de gestion intelligente du trafic : détection vidéo et analyse par vision par ordinateur aux intersections, optimisation des feux, collecte de données de circulation et V2X pour les villes._
  * **Mots clés**: _trafic routier, détection vidéo, ville intelligente, V2X_
  * **Localisation**: Canada/Kitchener
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Vision, Analyse de données
  * **Domaine d'application**: Automobile/Navigation/Aviation, Architecture/BTP/Urbanisme
  * [_Jobs_](https://miovision.com/company/careers/)


* **[Mirada](https://mirada.com/)**  
  * _Studio créatif de Los Angeles (design et animation, prise de vue réelle, immersif et grand format) ayant réalisé en 2026 la campagne ESPN Women's March Madness et des projets pour Netflix (Mercredi), la Sphere de Las Vegas et Call of Duty._
  * **Mots clés**: _design, animation, effets visuels, grand format_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel


* **[Mirada Medical](https://www.mirada-medical.com/)**  
  * _Logiciels d'imagerie médicale d'Oxford (fusion et segmentation multi-modalités, radiothérapie, DLCExpert)._
  * **Mots clés**: _imagerie médicale, segmentation, radiothérapie_
  * **Localisation**: Royaume-Uni/Oxford
  * **Nombres d'employés**: 60
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Mirage Creative Lab](https://miragecreativelab.com/)**  
  * _Studio de jeu vidéo familial corse, auteur de LOCKDOWN Protocol, jeu de déduction sociale multijoueur à la première personne sorti sur Steam et mis à jour régulièrement (versions 1.1 à 1.3 fin 2025)._
  * **Mots clés**: _jeu indépendant, multijoueur, déduction sociale, PC/Steam_
  * **Localisation**: Eccica-Suarella
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Miso](https://misorobotics.com/)** (Miso Robotics) 
  * _Entreprise de Pasadena qui développe des robots de cuisine guidés par vision par ordinateur (bras Flippy pour fritures et grillades) et dispose d'un laboratoire d'innovation en IA et robotique à Los Angeles._
  * **Mots clés**: _robotique, vision par ordinateur, automatisation de cuisine_
  * **Localisation**: États-Unis/Pasadena
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Robotique/Systèmes autonomes


* **[Mist Studio](https://www.miststudio.fr/)**  
  * _Start-up lorraine fondée en 2019 qui conçoit des expériences de réalité virtuelle et mixte pour la santé, la formation et la sensibilisation (Explore l'UniVR pour l'Université de Lorraine, PlastiXperience, IREMIA VR)._
  * **Mots clés**: _réalité virtuelle, serious game, santé, formation_
  * **Localisation**: Villers-lès-Nancy
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Médical/Biologique


* **[Miyu Productions](https://www.miyu.fr/)**  
  * _Société de production spécialisée en animation (courts, séries, longs) disposant d'un studio de fabrication à Angoulême, aux côtés de Paris et Valence._
  * **Mots clés**: _animation 2D, court métrage, séries, production_
  * **Localisation**: Angoulême, Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Mo-Sys](https://mo-sys.com/)**  
  * _Entreprise britannique de suivi de caméra et de production virtuelle (StarTracker, VP Pro XR, têtes robotisées) dont le bureau américain de Hawthorne accueille aussi les formations Mo-Sys Academy à Los Angeles._
  * **Mots clés**: _suivi de caméra, production virtuelle, réalité étendue, robotique caméra_
  * **Localisation**: États-Unis/Hawthorne, Royaume-Uni/Londres
  * **Nombres d'employés**: 60
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Acquisition, Hardware
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel
  * [_Jobs_](https://mo-sys.com/careers/)


* **[Mobigame](https://www.mobigame.net/)**  
  * _Studio parisien de jeux mobiles créateur d'Edge (primé à l'IGF) et de Zombie Tsunami (plus de 500 millions de téléchargements)._
  * **Mots clés**: _mobile, jeu indépendant, free-to-play_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[MobilityWare](https://www.mobilityware.com/)**  
  * _Éditeur et développeur de jeux mobiles d'Irvine, spécialiste des jeux de cartes et de réflexion gratuits (Solitaire by MobilityWare, jeux casual et puzzle), avec un second studio dans l'Utah._
  * **Mots clés**: _jeu mobile, solitaire, casual, Unity_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 220
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.mobilityware.com/careers)


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
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/modulopi/jobs)


* **[Molinare](https://www.molinare.co.uk/)**  
  * _Maison de post-production de Soho (Londres) pour la fiction, le cinéma et le documentaire (montage, étalonnage, son, effets visuels), devenue Molinare Creative Group, qui accueille le studio VFX Atomic Arts dans ses locaux._
  * **Mots clés**: _post-production, étalonnage, effets visuels, Soho_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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
  * [_Jobs_](https://moonsurgical.notion.site/Moon-Surgical-Jobs-Board-7a646bb4294a417d96d93875bddb4998)


* **[Moonraker VFX](https://moonrakervfx.com/)**  
  * _Studio de VFX de Bristol fondé en 2013 (Planet Earth III, Ancient Earth) pour télévision, cinéma et espaces muséographiques._
  * **Mots clés**: _VFX, télévision, documentaire_
  * **Localisation**: Royaume-Uni/Bristol
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Motion Twin](https://motiontwin.com/)**  
  * _Studio bordelais indépendant organisé en coopérative sans hiérarchie, passé des jeux web aux jeux console/PC roguelite (Dead Cells, Windblown)._
  * **Mots clés**: _jeu indépendant, console/PC, roguelite, jeu 2D, jeux web_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Motion-Up](https://www.motion-up.com/)**  
  * _Entreprise R&D de capture de mouvement haute précision (système optique sur 110 m², corps, mains et visage en temps réel) et de développement 3D, qui produit aussi des catalogues gestuels interactifs XR/VR pour la santé, le sport et l'audiovisuel._
  * **Mots clés**: _motion capture, catalogue gestuel 3D, jumeau numérique, langue des signes, serious game_
  * **Localisation**: Vannes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Acquisition, Animation, VR/AR
  * **Domaine d'application**: Médical/Biologique, Cinéma/Films d'Animation/VFX, Jeu Vidéo, Entrainement/Formation/Serious Game


* **[Motive Studio](https://www.ea.com/ea-studios/motive)**  
  * _Studio montréalais d'Electronic Arts fondé en 2015 (Star Wars: Squadrons, remake de Dead Space), qui développe Marvel's Iron Man sous Unreal Engine 5 et contribue à la franchise Battlefield._
  * **Mots clés**: _jeu vidéo AAA, Electronic Arts, Dead Space, Iron Man, Unreal Engine_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.ea.com/careers)


* **[Move'n See](https://shop.movensee.com/fr/)**  
  * _Société brestoise qui conçoit des caméras autonomes à suivi par IA (PIX4TEAM, PIXEM) et des services de captation, d'analyse vidéo et de streaming pour le sport amateur et le spectacle._
  * **Mots clés**: _Caméra autonome, Suivi par IA, Vidéo sport, Streaming_
  * **Localisation**: Brest
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Acquisition, Analyse de données, Hardware
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Commerce/Marketing/Publicité


* **[Movea (TDK InvenSense)](https://invensense.tdk.com/)**  
  * _Fabricant de capteurs MEMS (inertiels, magnétiques, ultrasons) et de logiciels de fusion de capteurs pour mobiles, AR/VR, automobile et robotique ; filiale de TDK ayant absorbé Movea._
  * **Mots clés**: _capteurs inertiels, MEMS, fusion de capteurs, suivi de mouvement, réalité virtuelle, stabilisation d'image_
  * **Remarque**: _Movea, spin-off du CEA-Léti, a été rachetée par InvenSense en 2014, elle-même filiale de TDK depuis 2017 ; le site R&D de Grenoble reste actif._
  * **Localisation**: Grenoble
  * **Domaine scientifique/technique**: Acquisition, VR/AR, IHM/Haptique
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.invensense.tdk.com/en-us/careers)


* **[MPC / The Mill](https://www.themill.com/)**  
  * _Création de VFX pour le cinéma, les séries et la publicité (studios MPC et The Mill)_
  * **Mots clés**: _effets visuels, publicité, séries, long métrage, luxe_
  * **Remarque**: _MPC et The Mill, anciens studios du groupe Technicolor, ont été repris par TransPerfect en 2025 après la faillite de Technicolor, puis réunis sous la marque The Mill en juin 2026. Le site <a href="https://www.mpcvfx.com/fr/">MPC Paris</a> reste actif._
  * **Localisation**: Paris, Royaume-Uni/Londres, Belgique/Liège, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.mpcvfx.com/fr/carrieres/)


* **[MTI Film](https://mtifilm.com/)**  
  * _Studio de post-production et de restauration de films à Hollywood qui développe aussi ses propres logiciels (Cortex pour les dailies et le mastering, DRS Nova pour la restauration, MTai pour la conversion de cadence et l'agrandissement par IA), en version 7.0 avec accélération GPU NVIDIA._
  * **Mots clés**: _restauration de films, post-production, traitement d'image, IA_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 59
  * **Domaine scientifique/technique**: Imagerie, Pipeline/Outils de production, IA générative (image/3D)
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Patrimoine/Culture


* **[My Digital Buildings](https://www.mydigitalbuildings.com/)**  
  * _Startup qui produit des jumeaux numériques de bâtiments à partir d'un réseau de scan 3D et d'une plateforme logicielle._
  * **Mots clés**: _scanner 3D, nuage de points, BIM, jumeau numérique, visite virtuelle, architecture_
  * **Localisation**: Meylan
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.mydigitalbuildings.com/carriere)


* **[My Serious Game](https://www.my-serious-game.com/)**  
  * _Studio tourangeau de formation digitale sur mesure : serious games, simulations 3D, réalité virtuelle et augmentée et simulateurs conversationnels à avatars IA (Croix-Rouge, Université de Reims)._
  * **Mots clés**: _serious game, réalité virtuelle, simulation 3D, e-learning_
  * **Localisation**: Tours
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.my-serious-game.com/carriere)


* **[Mycronic Saint-Égrève (ex-VIT)](https://www.mycronic.com/fr/contact-us/mycronic-saint-egreve/)**  
  * _Ancienne société Vi TECHNOLOGY rachetée par Mycronic, centre de R&D mondial du groupe pour l'inspection optique automatique 3D (AOI, inspection de pâte à braser, technologie de vision Iris 3D) des cartes électroniques._
  * **Mots clés**: _inspection optique automatique, vision 3D, AOI, électronique_
  * **Localisation**: Saint-Égrève
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, Acquisition, Reconstruction
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[MyFit Solutions](https://myfit-solutions.com/)** (Myned Corporation (MyFit Solutions)) 
  * _Start-up lyonnaise de scan 3D du corps humain par smartphone (applications et SDK marque blanche) pour la conception d'orthèses, prothèses et vêtements de compression._
  * **Mots clés**: _scanner 3D, mobile, SDK, orthopédie, mode/textile_
  * **Localisation**: Saint-Genis-Laval
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Médical/Biologique, Mode/Vêtements/Accessoires


* **[Nalu Animation](https://www.naluanimation.com/)**  
  * _Société de production exécutive et de fabrication d'animation (layout, animation, compositing ; Totally Spies! saison 8, Lana Longuebarbe, Mumfie) qui a ouvert en 2026 un studio aux Ateliers Magelis._
  * **Mots clés**: _production exécutive, layout, animation, compositing, séries TV_
  * **Localisation**: Angoulême, Aubervilliers
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[NantStudios](https://nantstudios.com/)**  
  * _Studio de production virtuelle qui exploite des volumes LED reconfigurables (Dynamic Volume System breveté), une scène de capture de mouvement avec Animatrik et des plateaux à El Segundo et Culver City, ainsi qu'à Melbourne._
  * **Mots clés**: _production virtuelle, volume LED, ICVFX, motion capture_
  * **Localisation**: États-Unis/El Segundo, États-Unis/Culver City
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Acquisition, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[Naughty Dog](https://www.naughtydog.com/)**  
  * _Studio de PlayStation Studios (Sony Interactive Entertainment) à Santa Monica, auteur des séries Uncharted et The Last of Us, qui développe Intergalactic: The Heretic Prophet._
  * **Mots clés**: _AAA, console/PC, jeu narratif, capture de performance, PlayStation_
  * **Localisation**: États-Unis/Santa Monica
  * **Nombres d'employés**: 350
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.naughtydog.com/careers)


* **[Naval Group](https://www.naval-group.com/fr)**  
  * _Groupe français de construction navale de défense dont le site d'Ollioules (Technopôle de la Mer) est la référence pour les technologies numériques des navires et sous-marins : jumeaux numériques 3D, environnements de bord visitables en réalité virtuelle, logiciels de simulation._
  * **Mots clés**: _jumeau numérique, réalité virtuelle, simulation navale, sous-marins_
  * **Localisation**: Ollioules
  * **Nombres d'employés**: 17000
  * **Domaine scientifique/technique**: Simulation, VR/AR, Reconstruction
  * **Domaine d'application**: Sécurité/Défense, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.naval-group.com/fr/carrieres)


* **[Naver Labs Europe](https://europe.naverlabs.com/)**  
  * _Centre de recherche européen de Naver en IA, vision par ordinateur 3D et robotique (DUSt3R, MASt3R)._
  * **Mots clés**: _vision par ordinateur, deep learning, robotique, modèles de fondation 3D, modèle de corps humain_
  * **Localisation**: Meylan, Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Générique
  * [_Jobs_](https://careers.werecruit.io/en/naver-labs-europe)


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


* **[NeoXperiences](https://www.neoxperiences.com/)**  
  * _Créateur caennais d'aires de jeu immersives et interactives (murs interactifs projetés, réalité augmentée) pour les parcs de loisirs, l'éducation, le sport et l'événementiel, avec une ludothèque de jeux renouvelée._
  * **Mots clés**: _mur interactif, réalité augmentée, jeux immersifs, loisirs_
  * **Localisation**: Carpiquet
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, IHM/Haptique
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Jeu Vidéo


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
  * [_Jobs_](https://careers.qima.com/jobs)


* **[Next Level Games](https://www.nlgames.com/)**  
  * _Studio de jeu vidéo de Vancouver, filiale de Nintendo depuis 2021, développeur de Luigi's Mansion 2 et 3, Mario Strikers: Battle League et Punch-Out!!._
  * **Mots clés**: _Nintendo, Luigi's Mansion, Mario Strikers, consoles_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Next Limit](https://nextlimit.com/)**  
  * _Éditeur espagnol de logiciels de simulation et de rendu, créateur de RealFlow (simulation de fluides pour VFX) et de Maxwell Render._
  * **Mots clés**: _simulation de fluides, RealFlow, Maxwell Render, rendu photoréaliste, effets visuels, particules_
  * **Produits**: [RealFlow](https://realflow.com/), [Maxwell Render](https://maxwellrender.com/)
  * **Localisation**: Espagne/Madrid
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Nexus Studios](https://nexusstudios.com/)**  
  * _Studio de création mêlant animation, VFX et expériences immersives (AR/VR) pour le cinéma, la publicité et les marques, basé à Londres._
  * **Mots clés**: _Animation, XR, VFX_
  * **Localisation**: Royaume-Uni/Londres, États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers


* **[NHImages](https://nhimages.fr/)**  
  * _Studio strasbourgeois de perspectives 3D fondé par un architecte DPLG, qui produit images et films de synthèse pour concours d'architecture et promotion immobilière._
  * **Mots clés**: _architecture, rendu photoréaliste_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Niantic Spatial](https://www.nianticspatial.com/)**  
  * _Société issue en 2025 de la scission de Niantic (Pokémon GO), consacrée au « Large Geospatial Model » et à la cartographie 3D, dont l'équipe de recherche londonienne (issue du rachat de Matrix Mill, spin-off de l'UCL) travaille sur la reconstruction 3D, le Gaussian splatting, le SfM/SLAM et la localisation visuelle._
  * **Mots clés**: _reconstruction 3D, Gaussian splatting, réalité augmentée, SLAM_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Reconstruction, Vision, VR/AR, IA générative (image/3D)
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Géospatial/Cartographie, Robotique/Systèmes autonomes
  * [_Jobs_](https://job-boards.greenhouse.io/niantic)


* **[Nickelodeon Animation Studio](https://www.nick.com/)**  
  * _Studio d'animation de Nickelodeon à Burbank qui produit séries et films 2D et 3D (Bob l'éponge, The Patrick Star Show, Avatar: Seven Havens, Rock Paper Scissors), rattaché à Paramount Skydance depuis la fusion de 2025._
  * **Mots clés**: _animation 2D, animation 3D, séries jeunesse, Bob l'éponge_
  * **Localisation**: États-Unis/Burbank
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Nightshift](https://www.nightshift.fr/)**  
  * _Société parisienne (et New York) de post-production pour le luxe, la mode et la beauté : montage, étalonnage, finishing et VFX, print et contenus produits._
  * **Mots clés**: _post-production, effets visuels, publicité, luxe_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires
  * [_Jobs_](https://www.nightshift.fr/join-us/)


* **[Ninja Theory](https://www.ninjatheory.com/)**  
  * _Studio de Cambridge de Microsoft (Hellblade, Heavenly Sword), réputé pour la capture de mouvement et le rendu temps réel Unreal Engine._
  * **Mots clés**: _jeu vidéo, capture de mouvement, Unreal Engine_
  * **Localisation**: Royaume-Uni/Cambridge
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Acquisition, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Nobody Studio](https://nobody-studio.com/)**  
  * _Studio 3D d'externalisation en lighting, compositing, modélisation, temps réel et previs pour l'animation, les VFX et le jeu vidéo._
  * **Mots clés**: _externalisation, lighting, compositing, prévisualisation, cinématiques de jeu, rendu temps réel, AAA_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://nobody-studio.com/jobs/)


* **[NOG Studio](https://www.nogstudio.com/en/)**  
  * _Studio créatif spécialisé Unreal Engine (éclairage, cinématiques, level art, VFX Niagara, tech art, shaders) prestataire de studios de jeu (EA, Cyanide, Don't Nod, Ember Lab) et de décors virtuels, formateur Unreal agréé._
  * **Mots clés**: _Unreal Engine, lighting, VFX temps réel, tech art_
  * **Localisation**: Chimilin
  * **Nombres d'employés**: 7
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


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


* **[Nothing2Install](https://nothing2install.com/)**  
  * _Entreprise marseillaise créée en 2018 qui rend les jeux mobiles natifs (APK Android) jouables instantanément depuis un navigateur, sans GPU serveur, grâce à sa technologie brevetée 3DPipe qui intercepte et compresse les commandes graphiques et les transmet au navigateur, où le rendu est exécuté localement en WebGL ou WebGPU._
  * **Mots clés**: _cloud gaming, streaming de commandes graphiques, WebGL, WebGPU, jeu mobile_
  * **Localisation**: Marseille
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://nothing2install.com/careers/)


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
  * [_Jobs_](https://nurea-soft.com/careers/)


* **[NVidia](https://www.nvidia.com/)**  
  * _Concepteur américain de GPU et de plateformes de calcul (CUDA, RTX, Omniverse) pour le jeu vidéo, la création numérique, l'IA, le HPC et la robotique._
  * **Mots clés**: _GPU, puce/semi-conducteur, ray tracing, deep learning, rendu temps réel, robotique, véhicule autonome_
  * **Remarque**: _NVidia Research est présent partout dans le monde, dont en France._
  * **Localisation**: États-Unis/California/Santa Clara, France/Paris, Canada/Toronto, International
  * **Nombres d'employés**: 42000
  * **Domaine scientifique/technique**: Hardware, Rendu temps réel/Moteurs 3D, IA générative (image/3D), Simulation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite)


* **[Obsidian Entertainment](https://www.obsidian.net/)**  
  * _Studio de jeux de rôle d'Irvine appartenant à Microsoft (Xbox Game Studios), auteur de Pillars of Eternity, Avowed, The Outer Worlds 2 et Grounded 2._
  * **Mots clés**: _jeu de rôle, Unreal Engine, Avowed, The Outer Worlds, Xbox_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 220
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.obsidian.net/careers)


* **[OceanDataLab](https://www.oceandatalab.com/home)**  
  * _Laboratoire privé créé en 2013 qui développe des logiciels de visualisation et d'analyse de données d'observation spatiale de l'océan (Syntool, SEAScope, Ocean Virtual Laboratory) en collaboration avec le laboratoire d'océanographie spatiale de l'Ifremer._
  * **Mots clés**: _Visualisation scientifique, Observation de la Terre, Océanographie, Télédétection_
  * **Localisation**: Locmaria-Plouzané
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Visualisation, Analyse de données, Imagerie, Web/Cloud/Big Data
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie


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
  * [_Jobs_](https://jobs.ohbibi.com/jobs)


* **[Oktal-SE](https://www.oktal-se.fr/)** (OKTAL Synthetic Environment) 
  * _Éditeur de SE-Workbench, simulation physique de capteurs (visible, infrarouge, lidar, radar) par rendu de scènes 3D. Groupe Sogeclair._
  * **Mots clés**: _simulation de capteurs, infrarouge, radar, lidar, défense, aéronautique, données synthétiques, SE-Workbench_
  * **Localisation**: Toulouse
  * **Domaine scientifique/technique**: Simulation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.oktal-se.fr/company/careers/)


* **[Old Skull Games](https://www.oldskullgames.com/)**  
  * _Studio de développement et co-développement de jeux vidéo console, PC et mobile._
  * **Mots clés**: _co-développement, console/PC, mobile, jeu indépendant_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.oldskullgames.com/careers)


* **[Olea Medical](https://www.olea-medical.com/fr/)**  
  * _Éditeur de La Ciotat, filiale du groupe Canon, de logiciels de post-traitement et d'aide au diagnostic en imagerie médicale IRM et scanner (suite Olea Sphere : perfusion, neurovasculaire, oncologie, cardiologie)._
  * **Mots clés**: _imagerie médicale, IRM, post-traitement, aide au diagnostic_
  * **Localisation**: La Ciotat
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.olea-medical.com/fr/recrutement/)


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


* **[Ooolala](https://ooolala.fr/)**  
  * _Studio d'animation 2D numérique (Harmony, TVPaint) installé au pôle de La Cartoucherie, fabricant de séries et spéciaux TV (Chien Pourri, Billy le hamster cowboy, Vee et la pomme d'or), jusqu'à 100 artistes sur site._
  * **Mots clés**: _animation 2D, séries TV, Harmony, TVPaint_
  * **Localisation**: Bourg-lès-Valence
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://ooolala.fr/jobs/)


* **[Opia Games](https://store.steampowered.com/app/3524780/)**  
  * _Studio indépendant installé aux Ateliers Magelis, auteur du jeu de plateforme 3D The Lone Blade (2023) et du FPS Sydless (2026)._
  * **Mots clés**: _jeu vidéo, jeu 3D, FPS, plateforme_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Optellum](https://www.optellum.com/)**  
  * _Start-up d'Oxford d'IA pour l'imagerie thoracique, aide au diagnostic des nodules pulmonaires sur scanner._
  * **Mots clés**: _imagerie médicale, poumon, IA_
  * **Localisation**: Royaume-Uni/Oxford
  * **Nombres d'employés**: 60
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


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


* **[Optina Diagnostics](https://www.optinadx.com/)**  
  * _Medtech montréalaise développant une caméra rétinienne hyperspectrale (autorisée par la FDA) couplée à des algorithmes d'IA pour le diagnostic et le suivi des maladies de la rétine (DMLA) et le dépistage précoce d'Alzheimer._
  * **Mots clés**: _imagerie hyperspectrale, rétine, IA médicale, Alzheimer_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Vision
  * **Domaine d'application**: Médical/Biologique


* **[OptiTrack](https://optitrack.com/)**  
  * _Fabricant américain (NaturalPoint) de systèmes de motion capture optique utilisés en production virtuelle, tracking VR, biomécanique et robotique._
  * **Mots clés**: _motion capture, caméras infrarouges, production virtuelle, tracking caméra, réalité virtuelle, biomécanique, robotique_
  * **Localisation**: États-Unis/Oregon/Corvallis
  * **Domaine scientifique/technique**: Acquisition, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://optitrack.com/careers)


* **[Opus Major](https://www.opusmajor.io/)**  
  * _Studio parisien fondé en 2023 par d'anciens de Gameloft et Madbox, qui développe un jeu multijoueur centré sur la musique (Opus #1) après une levée de 10 M$ en 2025._
  * **Mots clés**: _jeu multijoueur, musique, studio indépendant_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Orbit Studio](https://orbit.studio/)**  
  * _Studio d'animation 3D bordelais spécialisé dans les contenus haut de gamme : films de marque pour le luxe, projections monumentales et immersives, motion design 3D et VFX pour prise de vue réelle._
  * **Mots clés**: _animation 3D, motion design, effets visuels, exposition immersive, publicité_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel


* **[Orthotaxy](https://www.jnjmedtech.com/en-NZ/velys)**  
  * _Filiale de Johnson & Johnson (DePuy Synthes) à Gières, centre de R&D mondial qui a conçu le robot chirurgical VELYS pour la prothèse totale de genou (navigation par suivi optique, sans imagerie préopératoire)._
  * **Mots clés**: _chirurgie robotique, navigation, orthopédie_
  * **Localisation**: Gières
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Visualisation, IHM/Haptique
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


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


* **[Outpost VFX](https://www.outpost-vfx.com/)**  
  * _Studio de VFX avec site à Bournemouth (80 postes cités à l'ouverture), Londres, Montréal, Los Angeles et Mumbai, pour cinéma et séries._
  * **Mots clés**: _VFX, cinéma, séries, Bournemouth_
  * **Localisation**: Royaume-Uni/Bournemouth, Canada/Montréal
  * **Nombres d'employés**: 660
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Outsight](https://www.outsight.ai/)**  
  * _Plateforme logicielle de traitement de données lidar 3D (perception, suivi, analyse de flux) pour aéroports, gares et industrie._
  * **Mots clés**: _lidar, nuage de points, suivi de personnes, analyse de flux, aéroports, vision par ordinateur_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Vision, Acquisition, Analyse de données
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.outsight.ai/company/careers/)


* **[Overlay](https://www.figmin.com/)**  
  * _Éditeur de Figmin XR, application de réalité mixte pour dessiner, créer, jouer et prototyper en 3D (Meta Quest, Vision Pro, Android XR)._
  * **Mots clés**: _réalité mixte, création 3D en VR, Figmin XR, Meta Quest, jeux physiques, prototypage spatial_
  * **Produits**: Figmin XR
  * **Localisation**: États-Unis/Portland
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Panache Digital Games](https://panachedigitalgames.com/en/)**  
  * _Studio indépendant montréalais fondé en 2014 par Patrice Désilets (créateur d'Assassin's Creed), auteur d'Ancestors: The Humankind Odyssey, qui développe 1666: Amsterdam._
  * **Mots clés**: _jeu vidéo, action-aventure, Unreal Engine, console/PC_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Paralives Studio](https://www.paralives.com/)**  
  * _Studio indépendant montréalais fondé par Alex Massé, qui développe Paralives, un jeu de simulation de vie aux outils de construction sans grille, en accès anticipé sur Steam depuis mai 2026._
  * **Mots clés**: _simulation de vie, jeu indépendant, Unity, construction 3D_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Paramount Games Studio](https://www.paramountgames.com/)**  
  * _Studio de jeux de Paramount Skydance créé en juin 2026 par la fusion de Skydance Interactive (The Walking Dead: Saints & Sinners, Behemoth) et Skydance New Media (Marvel 1943: Rise of Hydra, sous la direction créative d'Amy Hennig), rapproché en octobre 2026 des studios de Warner Bros. Games._
  * **Mots clés**: _AAA, réalité virtuelle, Marvel, licences, Unreal Engine_
  * **Localisation**: États-Unis/{Marina del Rey, Santa Monica}
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, VR/AR
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.paramount.com/careers)


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
  * [_Jobs_](https://www.passtechgames.com/careers/)


* **[Pastagames](https://www.pastagames.com/)**  
  * _Studio indépendant de jeux vidéo (Rayman Mini, KarmaZoo, Arkanoid – Eternal Battle)._
  * **Mots clés**: _jeu indépendant, console/PC, mobile, Apple Arcade, multijoueur en ligne, Rayman Mini_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Pearl](https://hellopearl.com/)**  
  * _Éditeur angelin de logiciels d'IA de vision pour la radiologie dentaire (Second Opinion, premier logiciel d'IA de lecture de radiographies dentaires autorisé par la FDA, étendu aux panoramiques en décembre 2025) intégrés aux logiciels de cabinet (Dentrix Ascend en 2026, Open Dental)._
  * **Mots clés**: _imagerie dentaire, IA de diagnostic, radiographie, vision par ordinateur_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 220
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Perception4D](https://perception4d.com/)**  
  * _Système d'acquisition par caméra et scanners, de visualisation scientifique et d'approches d'IA pour la Vision._
  * **Mots clés**: _lidar, nuage de points, SLAM, vision par ordinateur, deep learning, open source, visualisation scientifique_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 5
  * **Domaine scientifique/technique**: Vision, Acquisition, Visualisation, Géométrie
  * **Domaine d'application**: Générique


* **[Perimeter Medical Imaging](https://perimetermed.com/)**  
  * _Société médicale (Toronto et Dallas) qui développe des systèmes d'imagerie par tomographie par cohérence optique (OCT) assistés par IA pour visualiser les marges chirurgicales en temps réel, dont Claire, premier appareil d'imagerie à IA approuvé par la FDA pour la chirurgie du cancer du sein._
  * **Mots clés**: _OCT, imagerie peropératoire, cancer du sein, IA médicale_
  * **Localisation**: Canada/Toronto, États-Unis/Dallas
  * **Domaine scientifique/technique**: Imagerie, Vision, Acquisition
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://perimetermed.com/careers/)


* **[Peripheral Labs](https://www.peripheral.so/)**  
  * _Start-up torontoise (2024, issue de l'équipe de voiture autonome de l'Université de Toronto) qui reconstruit en 3D les matchs de sport en direct à partir de flux multicaméras (rendu neuronal, ralentis navigables, données biomécaniques) ; amorçage Khosla Ventures puis 8,7 M$ menés par Inovia en 2026._
  * **Mots clés**: _reconstruction 4D, Gaussian splatting, ralentis 3D, sport_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 20
  * **Domaine scientifique/technique**: Reconstruction, Vision, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://jobs.khoslaventures.com/companies/peripheral-labs)


* **[Personne n'est parfait !](https://personnenestparfait.fr/)**  
  * _Studio rennais de fabrication d'animation en stop motion et 2D (plateaux de tournage, postes 2D), lauréat France 2030 « Grande Fabrique de l'image »._
  * **Mots clés**: _stop motion, animation 2D, séries d'animation_
  * **Remarque**: _Studio frère de Vivement Lundi !_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Perspectum](https://perspectum.com/)**  
  * _Société d'Oxford d'imagerie médicale quantitative (IRM du foie, cartographie multiparamétrique, LiverMultiScan)._
  * **Mots clés**: _IRM, imagerie quantitative, foie_
  * **Localisation**: Royaume-Uni/Oxford
  * **Nombres d'employés**: 350
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Phasics](https://www.phasics.com/)**  
  * _Société de Paris-Saclay qui conçoit des analyseurs de front d'onde à haute résolution pour la métrologie optique, l'optique adaptative et l'imagerie de phase quantitative._
  * **Mots clés**: _optique, imagerie de phase, métrologie_
  * **Localisation**: Saint-Aubin
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Imagerie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique
  * [_Jobs_](https://www.phasics.com/en/company/jobs-at-phasics/)


* **[Philomec](https://philomec.com/)**  
  * _Bureau d'études marseillais en mécanique et biomécanique qui réalise modélisation 3D, simulation par éléments finis du corps humain, rendus photoréalistes et impression 3D pour les équipements sportifs et de protection._
  * **Mots clés**: _simulation physique, biomécanique, CAO, éléments finis_
  * **Localisation**: Marseille
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO
  * [_Jobs_](https://philomec.com/careers/)


* **[Photon etc.](https://www.photonetc.com/)**  
  * _Fabricant montréalais (2003, issu de Caltech) de systèmes d'imagerie hyperspectrale et infrarouge (caméras SWIR, imageurs grand champ GRAND-EOS, microscopes hyperspectraux) et de leur logiciel d'analyse PHySpec, pour la recherche biomédicale, les matériaux et l'industrie._
  * **Mots clés**: _imagerie hyperspectrale, caméras infrarouges, microscopie, analyse spectrale_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Hardware
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO, Énergie/Environnement
  * [_Jobs_](https://www.photonetc.com/about-us/careers/)


* **[Photoroom](https://www.photoroom.com/)**  
  * _Éditeur d'une application et d'API d'édition d'images par IA générative (détourage, génération de fonds et de visuels produits)._
  * **Mots clés**: _IA générative, détourage, retouche photo, e-commerce/configurateur 3D, génération vidéo, API, applications mobiles_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Imagerie, Vision
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/photoroom)


* **[Picasso Pictures](https://www.picassopictures.com/)**  
  * _Société de production et studio d'animation de Fitzrovia (Londres), actif depuis plus de 30 ans, qui réalise des publicités et contenus animés 2D et 3D pour des marques internationales (Nike, Nestlé, Dove, McDonald's, Toyota)._
  * **Mots clés**: _animation publicitaire, 2D, 3D, Fitzrovia_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Commerce/Marketing/Publicité


* **[Picsellia](https://www.picsellia.com/)**  
  * _Éditeur toulousain d'une plateforme MLOps dédiée à la vision par ordinateur (gestion et annotation de données image, entraînement, déploiement et suivi de modèles), utilisée par SGS, RTE ou Pellenc._
  * **Mots clés**: _vision par ordinateur, MLOps, annotation d'images, IA_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Vision, Pipeline/Outils de production, Web/Cloud/Big Data
  * **Domaine d'application**: Générique, Industrie/Manufacturing/CAO


* **[Picture Shop](https://www.pictureshop.com/)**  
  * _Studio de post-production du groupe Streamland Media (étalonnage, science couleur, VFX, dailies, mastering) pour séries et films, avec des références récentes comme Dexter: Resurrection, The Diplomat et Monster: The Ed Gein Story._
  * **Mots clés**: _étalonnage, science couleur, post-production, VFX_
  * **Localisation**: États-Unis/Burbank, États-Unis/Los Angeles, Canada/Toronto, Canada/Vancouver, Royaume-Uni/Londres
  * **Nombres d'employés**: 500
  * **Domaine scientifique/technique**: Imagerie, Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Piece of Cake Studios](https://www.pieceofcake-studios.com/)**  
  * _Studio parisien fondé par des anciens d'Ankama, Eden Games et Eugen Systems, spécialiste des jeux 3D coopératifs (Hacktag, Dark Hours, jeu d'horreur coopératif vendu à plus de 500 000 exemplaires)._
  * **Mots clés**: _jeu coopératif, multijoueur en ligne, console/PC, jeu indépendant_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Piraknights Games](https://www.piraknights.com/)**  
  * _Studio de jeu vidéo savoyard (Le Bourget-du-Lac) qui développe Sintopia, jeu de gestion d'un enfer édité par Team17 sur Steam (sortie 2026)._
  * **Mots clés**: _jeu vidéo, jeu de gestion, PC, Team17_
  * **Localisation**: Le Bourget-du-Lac
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.piraknights.com/careers)


* **[Piranha Bar](https://piranhabar.ie/)**  
  * _Studio créatif de Dublin spécialisé en VFX, animation, motion design et production virtuelle, pour cinéma, séries et publicité._
  * **Mots clés**: _VFX, motion design, animation, Dublin_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Piranha Games](https://www.piranhagames.com/)**  
  * _Studio de jeu vidéo de Burnaby (groupe suédois Enad Global 7), développeur de MechWarrior Online, MechWarrior 5: Mercenaries et MechWarrior 5: Clans._
  * **Mots clés**: _MechWarrior, Unreal Engine, simulation de robots, EG7_
  * **Localisation**: Canada/Burnaby
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
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
  * [_Jobs_](https://pixee-medical.com/en/career/)


* **[Pixel 4D](https://www.pixel4d.fr/)**  
  * _Agence ardennaise de création 3D (modélisation, impression 3D, prises de vue par drone et réalité virtuelle) pour les entreprises._
  * **Mots clés**: _3D, impression 3D, drone, réalité virtuelle_
  * **Localisation**: Charleville-Mézières
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Modélisation, VR/AR
  * **Domaine d'application**: Commerce/Marketing/Publicité, Industrie/Manufacturing/CAO


* **[Pixel Magic](https://www.pixelmagicfx.com/)**  
  * _Studio d'effets visuels de Toluca Lake fondé dans les années 1980, lauréat d'un VES Award en 2024 pour Winning Time: The Rise of the Lakers Dynasty, avec des crédits sur Raised by Wolves, Green Book et Le Dernier Samouraï._
  * **Mots clés**: _effets visuels, séries, foules numériques, compositing_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Pixel Reef](https://www.pixelreef.fr/)**  
  * _Studio de jeux vidéo fondé en 2016 à Montpellier par Éric Chahi (Another World, From Dust), créateur du jeu VR Paper Beast._
  * **Mots clés**: _jeu VR, simulation, jeu indépendant_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 10
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation, VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


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
  * [_Jobs_](https://www.pixience.com/recrutement-pixience/)


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


* **[Playground Games](https://playground-games.com/)**  
  * _Studio de Leamington Spa de Microsoft, créateur de la série Forza Horizon._
  * **Mots clés**: _jeu vidéo, Forza Horizon, monde ouvert_
  * **Localisation**: Royaume-Uni/Leamington Spa
  * **Nombres d'employés**: 450
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[PlayQ](https://www.playq.com/)**  
  * _Studio de jeux mobiles fondé en 2007 dans le centre de Santa Monica, développeur de jeux free-to-play sur ses propres licences (plus de 60 millions de téléchargements)._
  * **Mots clés**: _jeu mobile, free-to-play, licences propres_
  * **Localisation**: États-Unis/Santa Monica
  * **Nombres d'employés**: 87
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://job-boards.greenhouse.io/playq)


* **[Playrion](https://www.playrion.com/)**  
  * _Studio de Montrouge (2010) de jeux de gestion et simulation sur mobile et PC (Airlines Manager, Airport Simulator: First Class), ancien studio interne de Paradox Interactive racheté par Trophy Games en 2026._
  * **Mots clés**: _mobile, jeu de gestion, simulation, free-to-play_
  * **Localisation**: Montrouge
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.playrion.com/recruitment/)


* **[Playtonic Games](https://playtonicgames.com/)**  
  * _Studio de Burton upon Trent fondé par d'anciens de Rare (Yooka-Laylee), avec un second site à Leamington Spa._
  * **Mots clés**: _jeu vidéo, plateforme 3D, Yooka-Laylee_
  * **Localisation**: Royaume-Uni/Burton upon Trent
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Playtouch](https://playtouch.net/)**  
  * _Studio de jeux casual HTML5 fondé en 2010 à Roquefort-les-Pins (près de Sophia Antipolis), avec une filiale de production à Maurice, qui a développé et auto-édité plus de 400 jeux instantanés pour le web, le mobile, les TV connectées et l'automobile._
  * **Mots clés**: _jeu mobile, HTML5, jeux casual, web_
  * **Localisation**: Roquefort-les-Pins
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://playtouch.net/career)


* **[Playwing](https://www.playwing.com/)**  
  * _Développeur et éditeur indépendant fondé en 2017 (Playwing Ltd, établissement à Bordeaux) auteur du jeu multijoueur en ligne de combats de dragons Century: Age of Ashes et du jeu de stratégie Instant War._
  * **Mots clés**: _multijoueur en ligne, console/PC, mobile, Unreal Engine_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.playwing.com/#careers)


* **[Plotly](https://plotly.com/)** (Plotly Technologies) 
  * _Éditeur montréalais des bibliothèques open source de visualisation interactive de données Plotly (Python, R, JavaScript) et de la plateforme Dash Enterprise pour construire des applications analytiques ; Dash Enterprise 6 et l'outil Plotly Studio en 2026._
  * **Mots clés**: _visualisation de données, graphiques interactifs, Dash, open source_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Visualisation, Web/Cloud/Big Data, Analyse de données
  * **Domaine d'application**: Générique
  * [_Jobs_](https://plotly.com/careers/)


* **[Plug In Digital](https://plugindigital.com/)**  
  * _Distributeur et éditeur de jeux vidéo basé à Montpellier (label d'édition Dear Villagers) : distribution numérique et développement commercial pour studios indépendants et éditeurs sur PC, consoles, cloud et mobile._
  * **Mots clés**: _édition de jeux vidéo, distribution numérique, Dear Villagers, jeu indépendant_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Pollen Robotics](https://pollen-robotics.com/)**  
  * _Start-up bordelaise, filiale de Hugging Face depuis 2025, qui conçoit des robots humanoïdes et expressifs open source (Reachy 2, Reachy Mini) avec perception par caméras et téléopération en réalité virtuelle._
  * **Mots clés**: _robotique, vision par ordinateur, téléopération, réalité virtuelle, open source_
  * **Remarque**: _Rachetée par Hugging Face (non présente dans le listing)._
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, VR/AR, Hardware
  * **Domaine d'application**: Robotique/Systèmes autonomes, Générique
  * [_Jobs_](https://apply.workable.com/pollen-robotics/)


* **[PopcornFX](https://www.popcornfx.com/)**  
  * _Suite d'outils de création et moteur runtime d'effets de particules temps réel, intégrée à Unreal Engine, Unity, Godot et O3DE et utilisée dans des jeux AAA (Forza Horizon, WWE 2K)._
  * **Mots clés**: _middleware, effets de particules, rendu temps réel, Unreal Engine, Unity, plugin/logiciel pour artistes, programmation visuelle_
  * **Remarque**: _Développé par la société Persistant Studios._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.popcornfx.com/jobs-careers/)


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
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies-v1/powerz/jobs)


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


* **[PrecisionOS](https://www.precisionostech.com/)**  
  * _Start-up vancouvéroise de formation chirurgicale en réalité virtuelle (« Digital Cadaver Lab » en orthopédie, arthroscopie, rachis) avec suivi de performance et mentor IA._
  * **Mots clés**: _réalité virtuelle, formation chirurgicale, orthopédie_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: VR/AR, Simulation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game


* **[Pretty Simple](https://prettysimplegames.com/)**  
  * _Studio parisien de jeux mobiles free-to-play d'enquête et d'objets cachés (Criminal Case, Sorcery School), plus de 100 millions de joueurs._
  * **Mots clés**: _mobile, free-to-play, jeu casual, objets cachés, jeu social_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://prettysimplegames.com/careers)


* **[Prevu3D](https://www.prevu3d.com/)**  
  * _Éditeur montréalais de RealityPlatform, logiciel de capture et de gestion de données de réalité (scans LiDAR, Gaussian splats, vidéo 360°, CAO/BIM) pour créer des jumeaux numériques d'usines et d'installations industrielles._
  * **Mots clés**: _jumeau numérique, nuages de points, Gaussian splatting, scan-to-CAD_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.prevu3d.com/careers/)


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
  * [_Jobs_](https://lush-glitter-03a.notion.site/Primaa-s-Career-359be377ea19802a8794c0422f8bc527)


* **[Prodways](https://www.prodways.com/)**  
  * _Concepteur et fabricant français d'imprimantes 3D industrielles (technologie MOVINGLight) et de matériaux, notamment pour le dentaire et l'industrie._
  * **Mots clés**: _impression 3D, fabrication additive, CAO_
  * **Localisation**: Montigny-le-Bretonneux
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique
  * [_Jobs_](https://www.prodways.com/about/careers/)


* **[Prologue](https://prologue.com/)**  
  * _Studio de design de génériques et d'effets visuels fondé par Kyle Cooper (Se7en), auteur des génériques de American Horror Story, The Beauty (2026), Tron: Ares et des génériques de fin en CG de The Gorge._
  * **Mots clés**: _génériques, motion design, effets visuels_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Promise](https://www.promise.ai/)** (Promise Advanced Imagination) 
  * _Studio de Venice fondé en 2024 pour produire films et séries avec l'IA générative, sur son pipeline propriétaire MUSE, soutenu par Andreessen Horowitz, The North Road Company et le Google AI Futures Fund (2025), et propriétaire de l'école Curious Refuge._
  * **Mots clés**: _IA générative, production de films, pipeline MUSE, effets visuels génératifs_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: IA générative (image/3D), Pipeline/Outils de production, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Prométhée Earth Intelligence](https://promethee.earth/)**  
  * _Start-up aixoise fondée en 2020 qui développe une constellation de nanosatellites d'observation de la Terre et des services de géo-intelligence fondés sur l'imagerie spatiale._
  * **Mots clés**: _imagerie satellite, observation de la Terre, géo-intelligence, SIG_
  * **Localisation**: Aix-en-Provence
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Sécurité/Défense, Énergie/Environnement
  * [_Jobs_](https://promethee.earth/en/careers/)


* **[Proof](https://www.proof-inc.com/)**  
  * _Studio de prévisualisation fondé en 2002 par Ron Frankel (previs, postvis, techvis et production virtuelle), auteur d'environ 1 900 plans de previs/postvis sous Unreal Engine pour la dernière saison de Stranger Things et de travaux sur Damsel ou Les Gardiens de la Galaxie._
  * **Mots clés**: _prévisualisation, postvis, techvis, Unreal Engine_
  * **Localisation**: États-Unis/Los Angeles, Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Prophesee.AI](https://www.prophesee.ai/)**  
  * _Concepteur français de capteurs de vision événementielle (neuromorphique) et de caméras associées pour détecter et suivre des mouvements rapides (industrie, défense, robotique)._
  * **Mots clés**: _capteur événementiel, vision par ordinateur, puce/semi-conducteur, neuromorphique, défense, robotique, industrie/usinage_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.prophesee.ai/jobs)


* **[Proto](https://protohologram.com/)** (Proto Hologram Inc.) 
  * _Fabricant de Van Nuys d'écrans « holographiques » grandeur nature (Proto Luma) et de table (Proto M2) avec système d'exploitation propriétaire, pour l'holoportation en direct de personnes et la diffusion d'avatars IA dans les commerces, événements, l'éducation et la santé._
  * **Mots clés**: _affichage holographique, holoportation, avatars IA, informatique spatiale_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: VR/AR, Hardware, Acquisition
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel, Loisir Interactif/Immersion/Metavers


* **[Protozoaire](https://www.protozoaire.com/)**  
  * _Studio strasbourgeois de production et d'animation 3D qui réalise depuis plus de 20 ans animation 3D et effets visuels pour séries, longs et courts métrages._
  * **Mots clés**: _animation 3D, effets visuels, séries d'animation, long métrage_
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Psyop](https://www.psyop.com/)**  
  * _Studio d'animation et de design fondé en 2000 (Los Angeles et New York), à la tête du collectif Psyop Group (Golden Wolf, Sun Creature, Le Cube…), qui produit des films publicitaires en 3D et 2D, des cinématiques de jeux et la série Common Side Effects pour Adult Swim, renouvelée pour une saison 2._
  * **Mots clés**: _animation 3D, publicité, séries, motion design_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX, Jeu Vidéo


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


* **[Purple Reality](https://www.purplereality.fr/)**  
  * _Studio créatif installé à ESTER Technopole qui conçoit des expériences interactives en 3D et réalité augmentée : configurateurs produits 3D/AR, maquettes 3D/AR, jeux et filtres AR (références : Lacoste, Hugo Boss, Sephora, GRDF, château de Pompadour)._
  * **Mots clés**: _réalité augmentée, configurateur 3D, filtres AR, expériences immersives_
  * **Localisation**: Limoges
  * **Nombres d'employés**: 6
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Patrimoine/Culture


* **[Pyxalis](https://pyxalis.com/)**  
  * _Concepteur et producteur de capteurs d'image CMOS sur mesure et standards (GIGAPYX, HDPYX) pour le spatial, l'imagerie médicale, la vision industrielle et le cinéma._
  * **Mots clés**: _capteurs CMOS, imagerie, HDR_
  * **Localisation**: Moirans
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Acquisition, Hardware, Imagerie
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO, Sécurité/Défense


* **[Qarnot Computing](https://qarnot.com/)**  
  * _Fournisseur français de cloud HPC bas carbone (récupération de chaleur des serveurs) pour les simulations d'ingénieurs et le rendu, racheté par Scaleway._
  * **Mots clés**: _calcul haute performance, cloud/streaming, bas carbone, simulation physique, ferme de rendu, Scaleway_
  * **Remarque**: _Racheté par Scaleway (groupe Iliad) en juillet 2026._
  * **Localisation**: Paris (Montrouge)
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://join.com/companies/qarnot)


* **[QB Technologies](https://qbtechnologies.fr/)**  
  * _Bureau d'études mayennais en réalité virtuelle et augmentée, tracking, robotique et électronique embarquée : stands de tir XR, tables tangibles en réalité augmentée, arènes free-roaming en réalité mixte et robots de cadrage photo (QBOT) utilisés par l'AFP._
  * **Mots clés**: _tracking, réalité mixte, interfaces tangibles, free roaming, bureau d'études XR_
  * **Localisation**: Louvigné
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: VR/AR, Hardware, IHM/Haptique, Acquisition
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Loisir Interactif/Immersion/Metavers, Sécurité/Défense


* **[Qualcomm Canada](https://www.qualcomm.com/)**  
  * _Filiale canadienne du concepteur américain de puces Snapdragon ; son site de Markham (ex-équipe ATI pour mobiles, rachetée en 2009) développe notamment le compilateur et les performances des GPU Adreno ainsi que des IP vidéo, multimédia et IA._
  * **Mots clés**: _GPU Adreno, compilateur GPU, Snapdragon, semi-conducteurs_
  * **Localisation**: Canada/Markham
  * **Nombres d'employés**: 1000
  * **Domaine scientifique/technique**: Hardware, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Générique, Jeu Vidéo
  * [_Jobs_](https://careers.qualcomm.com/careers)


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


* **[Quantum Surgical](https://www.quantumsurgical.com/)**  
  * _Medtech montpelliéraine qui développe Epione, robot d'ablation percutanée des tumeurs associant planification sur images, bras robotisé, navigation et caméra ; bureaux à Miami._
  * **Mots clés**: _robotique chirurgicale, navigation, planification sur images, oncologie interventionnelle_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 130
  * **Domaine scientifique/technique**: Imagerie, Vision, Simulation
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes
  * [_Jobs_](https://www.quantumsurgical.com/careers)


* **[R&D Vision](https://www.rd-vision.com/)**  
  * _Groupe spécialisé dans la conception de systèmes d'imagerie (caméras rapides, vision industrielle, solutions optiques et IA) pour l'aérospatial, le ferroviaire et l'industrie, avec un bureau à Bordeaux._
  * **Mots clés**: _vision par ordinateur, caméras rapides, deep learning, aéronautique, métrologie_
  * **Remarque**: _Siège à Saint-Maur-des-Fossés ; établissement bordelais de très petite taille (1-2 salariés). Effectif = tranche de l'entreprise._
  * **Localisation**: Saint-Maur-des-Fossés, Bordeaux
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Vision, Imagerie
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO
  * [_Jobs_](https://rd-vision.com/rejoignez-nous/)


* **[Raccoon Logic](https://www.raccoonlogic.com/)**  
  * _Studio montréalais fondé en 2021 par l'équipe de Typhoon Studios (fermé par Google), auteur de Revenge of the Savage Planet (2025), qui prépare Breakaway, un jeu de hockey compétitif en équipe._
  * **Mots clés**: _jeu vidéo, action-aventure, jeu indépendant, Savage Planet_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[RamSoft](https://www.ramsoft.com/)**  
  * _Éditeur torontois (1994) de logiciels d'imagerie médicale : PACS PowerServer, plateforme cloud RIS/PACS/VNA OmegaAI sur Azure, visualiseur diagnostique web et orchestration d'outils d'IA en radiologie._
  * **Mots clés**: _PACS, radiologie, visualiseur DICOM, cloud_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Web/Cloud/Big Data
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.ramsoft.com/careers)


* **[Ranch Computing](https://www.ranchcomputing.com/)**  
  * _Ferme de rendu en ligne CPU/GPU pour les logiciels 3D (Arnold, V-Ray, Redshift, Octane, Cycles, RenderMan...)._
  * **Mots clés**: _ferme de rendu, cloud/streaming, GPU, path tracing, Blender, Houdini_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Web/Cloud/Big Data
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Générique
  * [_Jobs_](https://www.ranchcomputing.com/fr/candidature/)


* **[Ratel Studio](https://ratel-studio.com/)**  
  * _Studio de jeux vidéo girondin (Espiet) qui développe Toria, MMORPG sandbox médiéval, ainsi que le jeu tactique spatial Hunter Oden et le jeu mobile Onima._
  * **Mots clés**: _multijoueur en ligne, jeu indépendant, mobile, console/PC_
  * **Localisation**: Espiet
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://ratel-studio.com/#jobs)


* **[Raynault VFX](https://raynault.com/)**  
  * _Studio d'effets visuels du Mile End à Montréal fondé en 2011 par Mathieu Raynault, spécialisé dans les environnements et la direction artistique pour le cinéma et les séries (Deadpool & Wolverine, Dune: Prophecy, Stranger Things, The Mandalorian)._
  * **Mots clés**: _effets visuels, matte painting, environnements, direction artistique_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://raynault.com/careers)


* **[Reaali](https://www.reaali.fr/)**  
  * _Studio de jeux vidéo en réalité augmentée et géolocalisés, membre d'un groupe d'entreprises créatives (Super Idée, Strong, AV Extended)._
  * **Mots clés**: _réalité augmentée, géolocalisation, jeu mobile_
  * **Localisation**: Metz
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Real by Fake](https://realbyfake.com/)**  
  * _Studio montréalais de post-production intégrée et d'effets visuels réalistes (retouche numérique, matte painting, effets invisibles) pour le cinéma, la télévision et la publicité (300, Black Summer), avec des bureaux à Los Angeles et Mexico._
  * **Mots clés**: _effets visuels, post-production, effets invisibles, retouche numérique_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[RealityCAD](https://www.realitycad.com/)**  
  * _Start-up lavalloise éditrice de RCad'Touch, application qui permet de visualiser et modifier en réalité virtuelle ou augmentée des projets 3D issus de logiciels de CAO, pour l'industrie._
  * **Mots clés**: _CAO immersive, réalité virtuelle, revue de conception, CFAO_
  * **Localisation**: Laval
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Design/Fabrication
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Rebellion](https://rebellion.com/)**  
  * _Studio indépendant d'Oxford (Sniper Elite, Zombie Army) avec moteur interne Asura, également éditeur de bande dessinée (2000 AD)._
  * **Mots clés**: _jeu vidéo, moteur Asura, Sniper Elite_
  * **Localisation**: Royaume-Uni/Oxford
  * **Nombres d'employés**: 450
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[Rebound](https://www.reboundcg.com/)**  
  * _Studio de développement et d'édition de jeux vidéo fondé en 2017 (Rebound Capital Games), auteur de la série Tennis Manager et du roguelite Furyball Rogue Revenge, qui propose aussi du développement pour d'autres studios._
  * **Mots clés**: _jeu vidéo, édition, jeu de sport, Tennis Manager, roguelite_
  * **Localisation**: Angoulême, Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Red 6](https://www.red6ar.com/)** (Red Six Aerospace) 
  * _Entreprise de réalité augmentée pour l'entraînement des pilotes de chasse (système ATARS affichant en vol des appareils adverses virtuels dans un casque AR), implantée à Santa Monica, Denver et Orlando._
  * **Mots clés**: _réalité augmentée, entraînement au vol, simulation aérienne, défense_
  * **Localisation**: États-Unis/Santa Monica
  * **Nombres d'employés**: 186
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Sécurité/Défense, Entrainement/Formation/Serious Game, Automobile/Navigation/Aviation
  * [_Jobs_](https://red6ar.com/careers/)


* **[Red Barrels](https://redbarrelsgames.com/)**  
  * _Studio indépendant montréalais fondé en 2011, spécialisé dans l'horreur à la première personne, créateur de la série Outlast (plus de 15 millions de joueurs) et du jeu coopératif The Outlast Trials._
  * **Mots clés**: _jeu d'horreur, Outlast, Unreal Engine, jeu indépendant_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[RED Digital Cinema](https://www.reddigitalcinema.com/)**  
  * _Fabricant de caméras de cinéma numérique (capteurs, traitement d'image, format RAW REDCODE) basé à Foothill Ranch, filiale de Nikon depuis 2024, dont les gammes V-RAPTOR et KOMODO-X existent désormais en monture Nikon Z._
  * **Mots clés**: _caméra cinéma numérique, capteur, RAW, traitement d'image_
  * **Localisation**: États-Unis/Lake Forest
  * **Nombres d'employés**: 220
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Hardware
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Reel FX](https://www.reelfx.com/)**  
  * _Studio américain d'animation 3D (siège à Dallas) qui fabrique des longs métrages d'animation (La Légende de Manolo, Rumble) et possède depuis 2018 un studio à Montréal, dans le bâtiment Le Nordelec._
  * **Mots clés**: _long métrage d'animation, animation 3D, Nordelec_
  * **Localisation**: Canada/Montréal, États-Unis/{Dallas, Los Angeles}
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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


* **[Reflector Entertainment](https://reflectorentertainment.com/)**  
  * _Studio montréalais du groupe Bandai Namco, créé en 2016, auteur du jeu d'action-aventure Unknown 9: Awakening (2024) et désormais centré sur un projet unique autour d'une licence Bandai Namco._
  * **Mots clés**: _jeu vidéo, action-aventure, Bandai Namco, Unknown 9_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


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


* **[Relic Entertainment](https://www.relic.com/)**  
  * _Studio de jeu vidéo de stratégie en temps réel fondé en 1997 à Vancouver, créateur des séries Homeworld, Company of Heroes et Dawn of War et développeur d'Age of Empires IV ; indépendant depuis sa cession par Sega en 2024._
  * **Mots clés**: _stratégie temps réel, Company of Heroes, Age of Empires IV, moteur propriétaire_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.relic.com/#careers)


* **[Respawn Entertainment](https://www.respawn.com/)**  
  * _Studio d'Electronic Arts installé dans la vallée de San Fernando, créateur de Titanfall, Apex Legends et Star Wars Jedi: Survivor, co-développeur de Star Wars Zero Company (sorti le 27 août 2026)._
  * **Mots clés**: _AAA, FPS, battle royale, Star Wars, console/PC_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.ea.com/careers)


* **[Retail VR](https://www.retail-vr.com/)**  
  * _Éditeur nantais d'une plateforme de merchandising 3D : planogrammes et magasins en 3D temps réel, jumeau numérique de points de vente, tests d'activations en réalité augmentée et moteur IA de conversion photo vers 3D (clients Carrefour, L'Oréal, Nestlé, Intermarché)._
  * **Mots clés**: _merchandising 3D, planogramme, jumeau numérique, réalité augmentée_
  * **Localisation**: Nantes
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Reconstruction, IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité


* **[Reuniwatt](https://reuniwatt.com/)**  
  * _Entreprise réunionnaise fondée en 2009, spécialisée dans l'observation des nuages et la prévision solaire : imageur infrarouge plein ciel Sky InSight, caméra Sky Cam Vision, traitement d'images satellites (SunSat) et prévisions pour le photovoltaïque._
  * **Mots clés**: _imageur plein ciel, imagerie satellite, prévision solaire, télédétection_
  * **Localisation**: Saint-Denis (La Réunion)
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Vision, Acquisition, Analyse de données
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie
  * [_Jobs_](https://reuniwatt.com/en/leader-cloud-observation-forecasting/careers/)


* **[Revelt](https://www.revelt-vs.com/)**  
  * _Studio de visualisation et de perspective 3D photoréaliste (Bordeaux et Paris) pour architectes, promoteurs et aménageurs._
  * **Mots clés**: _architecture, rendu photoréaliste, perspective_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Reviatech](https://reviatech.com/)**  
  * _Société de Venette (agglomération de Compiègne), créée en 2008, spécialisée dans les solutions de réalité virtuelle et augmentée pour l'industrie : formation (VR Industry Training), prototypage, revue de risques, showcase et traitement des phobies (Revia Phobies)._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, formation, prototypage virtuel_
  * **Localisation**: Venette
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO, Médical/Biologique


* **[Ride FX](https://ride-fx.com/)**  
  * _Studio d'animation 3D, d'effets visuels, de VR et de vidéo-mapping pour le cinéma et les expériences immersives._
  * **Mots clés**: _événementiel/mapping, exposition immersive, réalité étendue, installations interactives, effets visuels, location-based entertainment_
  * **Localisation**: Vannes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, VR/AR, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Art/Evenementiel
  * [_Jobs_](https://ride-fx.com/jobs/)


* **[Riot Games](https://www.riotgames.com/)**  
  * _Développeur et éditeur américain (filiale de Tencent) de League of Legends, VALORANT, Teamfight Tactics et du jeu de combat 2XKO (lancé en 2026), dont le siège et le campus principal sont à Los Angeles._
  * **Mots clés**: _jeu multijoueur en ligne, free-to-play, e-sport, MOBA, FPS_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 2700
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.riotgames.com/en/work-with-us)


* **[Ripple Effect Studios](https://www.ea.com/ea-studios/ripple-effect)**  
  * _Studio d'Electronic Arts à Los Angeles (ex-DICE LA), membre de Battlefield Studios, qui a contribué à Battlefield 6 (2025) et à Battlefield REDSEC._
  * **Mots clés**: _AAA, FPS, Battlefield, multijoueur en ligne_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.ea.com/careers)


* **[RISE](https://www.risefx.com/)**  
  * _Studio allemand d'effets visuels pour le cinéma et les séries (Berlin, Munich, Stuttgart, Cologne) qui a ouvert en 2020 un studio d'une cinquantaine de postes à Holborn (Londres) ; Last Breath, Heads of State._
  * **Mots clés**: _effets visuels, cinéma, séries, studio allemand_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Rivian](https://rivian.com/)**  
  * _Constructeur de véhicules électriques dont le siège d'Irvine abrite le studio de design (modélisation numérique 3D, animation et rendu des concepts) et des équipes logicielles, avec une interface embarquée développée sous Unreal Engine._
  * **Mots clés**: _véhicule électrique, design automobile, Unreal Engine, interface embarquée_
  * **Localisation**: États-Unis/Irvine
  * **Domaine scientifique/technique**: Design/Fabrication, Rendu temps réel/Moteurs 3D, Vision
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://careers.rivian.com/)


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


* **[Rocket Science VFX](https://www.rsvfx.com/)**  
  * _Studio d'effets visuels fondé en 2003 à Toronto (quartier de la Junction), crédité sur Wednesday, The Boys, IT: Welcome to Derry et Poker Face._
  * **Mots clés**: _effets visuels, séries, pipeline, compositing_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://rocketsciencevfx.applytojob.com/)


* **[Rocksteady Studios](https://www.rocksteadyltd.com/)**  
  * _Studio AAA de jeu vidéo londonien (filiale de Warner Bros. Games) créateur de la série Batman: Arkham et de Suicide Squad: Kill the Justice League._
  * **Mots clés**: _jeu AAA, Batman Arkham, Unreal Engine, Warner Bros. Games_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 214
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.rocksteadyltd.com/careers)


* **[Rodeo FX](https://www.rodeofx.com/)**  
  * _Studio indépendant d'effets visuels et d'animation fondé en 2006 à Montréal (plus de 750 artistes), oscarisé, qui travaille pour le cinéma, les séries et la publicité (Stranger Things, Dune, Game of Thrones) ; propriétaire de Mikros Animation depuis 2025._
  * **Mots clés**: _effets visuels, animation 3D, créatures, séries, publicité_
  * **Localisation**: Canada/Montréal, Paris, Canada/Toronto, États-Unis/Los Angeles
  * **Nombres d'employés**: 750
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://careers.smartrecruiters.com/RodeoFX)


* **[Rogue Factor](https://rogue-factor.com/)**  
  * _Studio montréalais fondé en 2013 (Mordheim: City of the Damned, Necromunda: Underhive Wars), filiale de Nacon, développeur du jeu d'action-aventure Hell is Us (2025)._
  * **Mots clés**: _jeu vidéo, action-aventure, Nacon, Unreal Engine_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Ross Video](https://www.rossvideo.com/)**  
  * _Fabricant canadien d'équipements et logiciels de production télévisée en direct, dont les solutions graphiques temps réel XPression et de production virtuelle Voyager (sur Unreal Engine) ; R&D à Ottawa, siège historique à Iroquois._
  * **Mots clés**: _habillage graphique télé, production virtuelle, réalité augmentée, Unreal Engine_
  * **Localisation**: Canada/Ottawa, Canada/Iroquois
  * **Nombres d'employés**: 1370
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Hardware
  * **Domaine d'application**: Art/Evenementiel, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.rossvideo.com/company/careers/)


* **[Rough Draft Studios](https://www.roughdraftstudios.com/)**  
  * _Studio d'animation 2D et 3D de Glendale (avec un studio partenaire à Séoul) qui anime Futurama depuis 1999, dont la saison 14 diffusée sur Hulu à partir d'août 2026, après Désenchantée pour Netflix._
  * **Mots clés**: _animation 2D, séries TV, Futurama, animation adulte_
  * **Localisation**: États-Unis/Glendale
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.roughdraftstudios.com/jobs.html)


* **[Royal Post](https://royalpost.tv/)**  
  * _Studio parisien de post-production haut de gamme créé en 2004 : VFX, CGI 3D, compositing, montage et étalonnage pour la publicité, le clip et la fiction._
  * **Mots clés**: _effets visuels, post-production, CGI, publicité, compositing_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[RSA Cosmos](https://www.rsacosmos.com/)**  
  * _Concepteur de planétariums numériques clés en main et du logiciel d'astronomie temps réel SkyExplorer (rendu volumétrique, rendu de planètes, dômes jusqu'en 10K), installés dans le monde entier ; associé à Konica Minolta._
  * **Mots clés**: _planétarium, fulldome, astronomie, rendu temps réel_
  * **Localisation**: Sorbiers
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Patrimoine/Culture, Loisir Interactif/Immersion/Metavers


* **[Rundisc](https://www.rundisc.io/)**  
  * _Studio indépendant de jeu vidéo de l'agglomération toulousaine, auteur de Varion (2018) et du jeu d'aventure/énigmes Chants of Sennaar (2023), multi-récompensé._
  * **Mots clés**: _jeu vidéo, indépendant, Chants of Sennaar_
  * **Localisation**: Fenouillet
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Runes Studio](https://runes-studio.com/)**  
  * _Studio de jeu vidéo caennais fondé en 2020 par des anciens d'autres studios, qui développe des jeux pour core-gamers (Battle Goblin's, arène multijoueur ; Wardens of Avalon annoncé pour 2027), soutenu par la Région Normandie et le CNC._
  * **Mots clés**: _jeu vidéo, Unity, multijoueur, technical art_
  * **Localisation**: Caen
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Sabotage Studio](https://sabotagestudio.com/)**  
  * _Studio indépendant de la ville de Québec fondé en 2016, créateur des jeux rétro The Messenger et Sea of Stars, un RPG au tour par tour largement primé._
  * **Mots clés**: _pixel art, RPG, jeu indépendant, Sea of Stars_
  * **Localisation**: Canada/Québec
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Safe Software](https://www.safe.com/)**  
  * _Éditeur de Surrey (Grand Vancouver) de la plateforme FME d'intégration et de transformation de données spatiales (SIG, CAO, BIM, nuages de points, 3D)._
  * **Mots clés**: _FME, données géospatiales, SIG, BIM_
  * **Localisation**: Canada/Surrey
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, Géométrie, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Safran.AI](https://www.safran-group.com/companies/safran-ai)**  
  * _Ex-Preligens, filiale IA de Safran Electronics & Defense qui analyse automatiquement par deep learning l'imagerie satellite et aérienne pour le renseignement._
  * **Mots clés**: _imagerie satellite, vision par ordinateur, deep learning, défense_
  * **Localisation**: Paris
  * **Nombres d'employés**: 225
  * **Domaine scientifique/technique**: Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Sécurité/Défense, Géospatial/Cartographie
  * [_Jobs_](https://jobs.lever.co/safran-ai)


* **[Saint-Gobain](https://www.saint-gobain.com/fr)**  
  * _Groupe industriel français de matériaux de construction (vitrage, isolation Isover, plâtre Placo, Weber) et de matériaux haute performance (céramiques, abrasifs, vitrage automobile)._
  * **Mots clés**: _matériaux de construction, vitrage, isolation thermique, plaques de plâtre, céramiques, vitrage automobile_
  * **Localisation**: Courbevoie, International
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.saint-gobain.com/fr/carrieres)


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
  * [_Jobs_](https://samp.ai/join-us/)


* **[Sandfall Interactive](https://www.sandfall.co)**  
  * _Studio de développement de jeux vidéo, créateur de Clair Obscur: Expedition 33 (Unreal Engine 5)._
  * **Mots clés**: _jeu indépendant, console/PC, Unreal Engine, jeu solo, RPG, narration_
  * **Localisation**: Montpellier
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.sandfall.co/careers)


* **[Sandflow](https://sandflow.ai/)** (Chat3D (Sandflow)) 
  * _Start-up stéphanoise (ex-Chat3D, fondée à Lyon en 2023) qui développe des modèles d'IA générative fondationnels pour créer des objets 3D à partir de texte, d'images ou de croquis._
  * **Mots clés**: _IA générative, génération 3D, text-to-3D, maillage, deep learning_
  * **Localisation**: Saint-Étienne
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: IA générative (image/3D), Modélisation
  * **Domaine d'application**: Jeu Vidéo, Industrie/Manufacturing/CAO, Commerce/Marketing/Publicité


* **[Santa Monica Studio](https://sms.playstation.com/)**  
  * _Studio de PlayStation Studios (Sony Interactive Entertainment) installé à Playa Vista, développeur de la série God of War (God of War Ragnarök), qui prépare en 2026 un remake de la trilogie originale._
  * **Mots clés**: _AAA, action-aventure, God of War, capture de performance, PlayStation_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://sms.playstation.com/careers)


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
  * [_Jobs_](https://www.savage-level.com/carri%C3%A8re)


* **[SCANable](https://www.scanable.com/)**  
  * _Spécialiste du scan 3D et 4D pour le cinéma et les séries (cyberscanning d'acteurs, doublures numériques, rig volumétrique C.A.L.V.I.N.N. de plus de 150 caméras, LiDAR de décors), crédité sur Superman, Weapons, Fallout S2, Marty Supreme, Michael et Lanterns._
  * **Mots clés**: _scan 3D, photogrammétrie, capture 4D, LiDAR, doublures numériques_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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


* **[Scholar](https://helloscholar.com/)**  
  * _Studio de création et de production (anciennement Gentleman Scholar) de Los Angeles et New York, spécialisé en animation 2D et 3D, design et effets visuels pour la publicité (Olipop, Okta)._
  * **Mots clés**: _animation 3D, motion design, publicité, effets visuels_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://helloscholar.com/contact)


* **[Scialytics](https://www.scialytics.io/)**  
  * _Spin-off de l'IHU Strasbourg (laboratoire CAMMA) qui développe une plateforme d'IA d'analyse de vidéos chirurgicales et des assistants temps réel au bloc opératoire._
  * **Mots clés**: _vision par ordinateur, deep learning, chirurgie assistée, dispositif médical_
  * **Remarque**: _Créée en mai 2025 ; effectif non encore déclaré au registre._
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Scopely Dublin](https://www.scopely.com/)**  
  * _Studio dublinois de Scopely issu du rachat de DIGIT (2019), éditeur de Star Trek Fleet Command, jeu mobile en 3D._
  * **Mots clés**: _jeu mobile, Star Trek Fleet Command, Dublin_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo


* **[Scortex](https://scortex.io/)**  
  * _Éditeur parisien d'une solution d'inspection visuelle par IA qui automatise la détection de défauts sur les lignes de production._
  * **Mots clés**: _vision par ordinateur, contrôle qualité, deep learning_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://scortex.welcomekit.co/)


* **[Screen Scene](https://screenscene.ie/)**  
  * _Société de post-production de Dublin (image, VFX, étalonnage, son) pour cinéma et séries._
  * **Mots clés**: _VFX, post-production, étalonnage, Dublin_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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


* **[Second Dinner](https://www.seconddinner.com/)**  
  * _Studio indépendant de jeu vidéo d'Irvine fondé par d'anciens de Blizzard (Hearthstone), créateur du jeu de cartes Marvel Snap, qui développe un nouveau jeu mobile free-to-play._
  * **Mots clés**: _Marvel Snap, jeu de cartes, jeu mobile, free-to-play_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.seconddinner.com/careers)


* **[Secret Level](https://www.secretlevel.co/)**  
  * _Studio de divertissement angelin fondé par le réalisateur Jason Zada qui produit films, séries et contenus de marque avec un pipeline propriétaire d'IA générative, dont Terrarium, long métrage hybride IA et prise de vue réelle annoncé en mai 2026 avec Artlist et le producteur Steven Schneider._
  * **Mots clés**: _IA générative, production de films, contenus de marque, pipeline IA_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: IA générative (image/3D), Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.secretlevel.co/about)


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
  * [_Jobs_](https://seriousfactory.com/recrutement/)


* **[ShadowMachine](https://www.shadowmachine.com/)**  
  * _Studio d'animation fondé en 1999 à Los Angeles (et Portland) qui travaille en stop-motion, 2D et 3D pour le cinéma et les séries (BoJack Horseman, Robot Chicken, Pinocchio de Guillermo del Toro, Long Story Short), avec la série Firefly: Still Flying et le film The Buried Giant en développement en 2026._
  * **Mots clés**: _animation 2D, stop-motion, séries adultes, longs métrages_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Shine Research](https://shine-group.tech/)**  
  * _Studio de jeu vidéo de Châtillon-le-Duc (près de Besançon) fondé en 2012, spécialisé dans le portage de jeux PC vers les consoles pour des éditeurs internationaux, qui développe et édite aussi ses propres titres (Architect Life, Rooftops & Alleys) et des applications AR/VR._
  * **Mots clés**: _portage console, jeu vidéo, édition de jeux, simulation_
  * **Localisation**: Châtillon-le-Duc
  * **Nombres d'employés**: 40
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Shiro Games](https://shirogames.com)**  
  * _Studio de développement et d'édition de jeux vidéo (Northgard, Dune: Spice Wars, Wartales), moteur maison Heaps._
  * **Mots clés**: _jeu indépendant, console/PC, moteur maison, jeu de stratégie, édition de jeux, Haxe/Heaps_
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 50-99
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://shirogames.com/jobs/)


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
  * **Localisation**: Canada/Toronto, États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.sidefx.com/company/careers/)


* **[SiLC](https://silc.com/)** (SiLC Technologies) 
  * _Concepteur à Monrovia de capteurs LiDAR FMCW sur puce unique (gamme Eyeonic, mesure de distance et de vitesse « 4D ») pour la vision des robots, de l'automobile et de la métrologie industrielle, soutenu par Honda._
  * **Mots clés**: _LiDAR FMCW, photonique sur silicium, vision 4D, capteurs 3D_
  * **Localisation**: États-Unis/Monrovia
  * **Domaine scientifique/technique**: Acquisition, Vision, Hardware
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO


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


* **[SimActive](https://www.simactive.com/)**  
  * _Éditeur montréalais (2003) de Correlator3D, logiciel de photogrammétrie de bout en bout (aérotriangulation, nuages de points, modèles numériques de terrain, orthomosaïques, maillages 3D et, depuis 2026, Gaussian splats) pour images de drones, d'avions et de satellites._
  * **Mots clés**: _photogrammétrie, drones, Gaussian splatting, orthophotos_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Reconstruction, Géométrie, Imagerie
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme, Énergie/Environnement


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


* **[Singularity 6](https://singularity6.com/)**  
  * _Studio de Los Angeles, filiale de Daybreak Game Company depuis 2024, développeur du MMO « cosy » Palia (10 millions de joueurs en 2026, PC et Switch)._
  * **Mots clés**: _MMO, jeu de simulation de vie, multijoueur en ligne, Unreal Engine_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://singularity6.com/careers)


* **[Sinking Ship Entertainment](https://www.sinkingship.ca/)**  
  * _Société de production torontoise de programmes jeunesse avec une division effets visuels et animation (pipeline USD, Unreal Engine, poils et plumes), connue pour Dino Dan et Odd Squad._
  * **Mots clés**: _effets visuels, animation, jeunesse, Unreal Engine_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 175
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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


* **[Six Point Harness](https://sixpointharness.com/)**  
  * _Studio d'animation 2D fondé en 2003 à Los Angeles (filiale de Mondo Media), qui a animé le court métrage oscarisé Hair Love et travaille sur des séries (Lazor Wulf, OMG… Yes! pour Adult Swim), des séquences de films et séries (The Boys) et le court The Whistle en 2026._
  * **Mots clés**: _animation 2D, séries adultes, courts métrages, Toon Boom Harmony_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 25
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://sixpointharness.com/jobs/)


* **[Sixense](https://www.sixense-group.com/)**  
  * _Filiale de Soletanche Freyssinet (Vinci) qui propose cartographie lidar aérienne et mobile, inspection numérisée et jumeaux numériques d'infrastructures (plateforme Beyond)._
  * **Mots clés**: _lidar, jumeau numérique, SIG, nuage de points_
  * **Localisation**: Rueil-Malmaison, Nanterre
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Géospatial/Cartographie
  * [_Jobs_](https://www.sixense-group.com/rejoignez-sixense)


* **[SkyBox Labs](https://skyboxlabs.com/)**  
  * _Studio de développement et co-développement de jeux vidéo fondé en 2011 à Burnaby, filiale de NetEase Games depuis 2023, partenaire de Microsoft (Halo, Minecraft, Age of Empires), Bungie (Destiny 2, Marathon) et Bethesda (Fallout 76)._
  * **Mots clés**: _co-développement, Halo, Unreal Engine 5, NetEase_
  * **Localisation**: Canada/Burnaby
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://skyboxlabs.com/jobs/)


* **[Skydance Animation](https://www.skydanceanimation.com/)**  
  * _Studio de longs métrages et de séries d'animation 3D dirigé par John Lasseter (Luck, Spellbound, la série WondLa), installé depuis 2025 sur un campus à Santa Monica avec un grand studio à Madrid, qui sort Ray Gunn de Brad Bird sur Netflix en décembre 2026._
  * **Mots clés**: _animation 3D, longs métrages, séries, Madrid_
  * **Localisation**: États-Unis/Santa Monica
  * **Nombres d'employés**: 700
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://skydance.com/job-listings/)


* **[SkyReal](https://skyreal.tech/)** (SKR Technologies) 
  * _Éditeur d'une solution de réalité virtuelle pour la revue de maquettes numériques 3D industrielles (aéronautique, automobile, défense)._
  * **Mots clés**: _réalité virtuelle, revue de maquette numérique, CAO, aéronautique, défense, spatial, Unreal Engine_
  * **Localisation**: Paris, Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Visualisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://skyreal.tech/about/#section-jobs)


* **[Sloclap](https://www.sloclap.com)**  
  * _Studio indépendant parisien de jeux d'action console/PC au style visuel marqué et aux animations de combat soignées (Absolver, Sifu, Rematch)._
  * **Mots clés**: _jeu indépendant, console/PC, Unreal Engine, jeu d'action, multijoueur en ligne, animation de combat_
  * **Localisation**: Paris
  * **Nombres d'employés**: 100-199
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.sloclap.com/jobs)


* **[Smode Tech](https://www.smode.io/)**  
  * _Éditeur parisien de SMODE, moteur de compositing 2D/3D temps réel et media server pour les événements, la scène, la télévision et les lieux immersifs._
  * **Mots clés**: _rendu temps réel, compositing, media server, événementiel/mapping_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers


* **[Snap](https://www.snap.com/)**  
  * _Éditeur de Snapchat et des lunettes de réalité augmentée Specs (siège à Santa Monica), dont le bureau de Toronto, issu du rachat de Bitstrips en 2016, développe Bitmoji, son moteur de rendu des avatars et les outils pour artistes._
  * **Mots clés**: _Bitmoji, avatars, moteur de rendu, réalité augmentée_
  * **Localisation**: Canada/Toronto, États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://careers.snap.com/)


* **[Softway Medical Imaging](https://www.groupesoftwaymedical.com/notre-offre-pour-limagerie-medicale/)**  
  * _Entité imagerie du groupe Softway Medical à Fuveau, éditrice de solutions de radiologie : RIS, PACS et VNA Synapse, visualisation et post-traitement avancé d'images médicales, outils d'IA pour radiologues._
  * **Mots clés**: _PACS, radiologie, post-traitement, imagerie médicale_
  * **Localisation**: Fuveau
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Visualisation
  * **Domaine d'application**: Médical/Biologique


* **[Sogitec](https://www.sogitec.fr/)**  
  * _Filiale de Dassault Aviation spécialisée dans la simulation de vol et la formation des équipages (simulateurs Rafale, Mirage), pionnière de l'imagerie de synthèse._
  * **Mots clés**: _simulateur de vol, rendu temps réel, simulation, défense_
  * **Localisation**: Suresnes
  * **Nombres d'employés**: 375
  * **Domaine scientifique/technique**: Simulation, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Sécurité/Défense, Automobile/Navigation/Aviation
  * [_Jobs_](https://carrieres.sogitec.fr/)


* **[Soho VFX](https://sohovfx.com/)**  
  * _Studio d'effets visuels fondé en 2002 dans le quartier de la Junction à Toronto, qui réalise des effets pour le cinéma et les séries (The Boys, The Umbrella Academy, Game of Thrones)._
  * **Mots clés**: _effets visuels, séries, Houdini, compositing_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Solaya](https://www.solaya.ai/)**  
  * _Laboratoire/startup de numérisation 3D de produits par Gaussian splatting (application de scan mobile et pipeline entreprise)._
  * **Mots clés**: _Gaussian splatting, scanner 3D, mobile, e-commerce/configurateur 3D, jumeau numérique, réalité augmentée_
  * **Localisation**: Nice
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.solaya.ai/careers)


* **[Solid State Studios](https://www.solidstate.com/)**  
  * _Studio interne d'Activision à Santa Monica consacré au jeu mobile AAA, développeur principal de Call of Duty: Warzone Mobile et chargé de l'exploitation de Call of Duty: Mobile (saisons publiées en 2025-2026)._
  * **Mots clés**: _jeu mobile, AAA, Call of Duty, FPS_
  * **Localisation**: États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.solidstate.com/)


* **[Sonio](https://www.sonio.ai/)**  
  * _Start-up parisienne (groupe Samsung Medison) d'IA d'aide à l'échographie prénatale et de compte rendu._
  * **Mots clés**: _imagerie médicale, échographie, deep learning_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://jobs.ashbyhq.com/sonio)


* **[SonoSim](https://sonosim.com/)**  
  * _Éditeur angelin du SonoSimulator, simulateur d'échographie à sonde suivie qui fait balayer à l'apprenant des milliers de cas réels (anatomie normale et pathologique), utilisé par les facultés de médecine, centres de simulation et l'armée._
  * **Mots clés**: _simulation d'échographie, imagerie médicale, formation médicale, sonde suivie_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Imagerie, Simulation, IHM/Haptique
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game


* **[Sony CSL](https://csl.sony.fr/)**  
  * _Centre de recherche de Sony - Computer Science Laboratories: Creativy, Music, Language, Sustainability_
  * **Mots clés**: _laboratoire de recherche, IA pour la musique, créativité assistée par IA, langage, développement durable_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Générique
  * [_Jobs_](https://csl.sony.fr/careers/)


* **[Sony Pictures Animation](https://www.sonypicturesanimation.com/)**  
  * _Studio de développement et de production de longs métrages d'animation de Sony Pictures (Spider-Man: Across the Spider-Verse, KPop Demon Hunters pour Netflix, GOAT sorti en février 2026), dont la fabrication est confiée à Sony Pictures Imageworks._
  * **Mots clés**: _animation 3D, longs métrages, développement visuel, storyboard_
  * **Localisation**: États-Unis/Culver City
  * **Nombres d'employés**: 250
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Sony Pictures Imageworks](https://www.imageworks.com/)**  
  * _Studio d'effets visuels et d'animation de Sony Pictures (siège à Vancouver, films Spider-Verse), qui a ouvert en 2023 un studio dans le Vieux-Montréal travaillant avec les équipes de Vancouver et Los Angeles sur les longs métrages d'animation et à effets visuels._
  * **Mots clés**: _long métrage d'animation, effets visuels, rendu, Sony Pictures_
  * **Localisation**: Canada/Montréal, Canada/Vancouver, États-Unis/Culver City
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Simulation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.imageworks.com/job-postings)


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


* **[SpAItial](https://spaitial.ai/)**  
  * _Start-up de modèles fondamentaux génératifs de mondes 3D (Londres et Munich), fondée en 2024 par Matthias Nießner et d'anciens de Google._
  * **Mots clés**: _IA générative 3D, Gaussian splatting, Modèles de monde_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: IA générative (image/3D), Reconstruction, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Générique
  * [_Jobs_](https://spaitial.ai/careers)


* **[Spexi](https://www.spexi.com/)**  
  * _Start-up vancouvéroise qui constitue une couche d'imagerie par drone à très haute résolution via un réseau de pilotes, livrée en orthomosaïques, nuages de points et Gaussian splats._
  * **Mots clés**: _drone, photogrammétrie, Gaussian splatting, jumeau numérique_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Géospatial/Cartographie
  * [_Jobs_](https://jobs.ashbyhq.com/spexi)


* **[Sphere Studios](https://www.thesphere.com/)**  
  * _Studio de production et de technologie de Sphere Entertainment, installé à Burbank autour d'un dôme prototype au quart d'échelle, qui crée les contenus immersifs de l'écran LED de la Sphere de Las Vegas (Postcard from Earth, The Wizard of Oz at Sphere en 2025, The Rocky Horror Picture Show annoncé en 2026) et a développé la caméra Big Sky (capteur 316 mégapixels, 18K)._
  * **Mots clés**: _contenu immersif, écran LED géant, caméra Big Sky, dôme, Las Vegas_
  * **Localisation**: États-Unis/Burbank
  * **Domaine scientifique/technique**: Acquisition, Rendu offline/VFX, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[SPIN VFX](https://www.spinvfx.com/)**  
  * _Studio d'effets visuels torontois fondé il y a plus de 30 ans, travaillant pour le cinéma et les séries (The Boys, John Wick, Game of Thrones, The Umbrella Academy), avec une antenne à Atlanta._
  * **Mots clés**: _effets visuels, séries, compositing, CG_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 160
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[SpirOPS](https://www.spirops.com/)**  
  * _Laboratoire indépendant d'IA depuis 2004 : simulateur de foules, moteur d'animation procédurale temps réel, IA décisionnelle pour véhicules et trains autonomes (Stellantis, SNCF, Alstom)._
  * **Mots clés**: _simulation de foules, animation procédurale, véhicule autonome, agents autonomes, IA décisionnelle, ferroviaire_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Simulation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Automobile/Navigation/Aviation, Jeu Vidéo
  * [_Jobs_](https://www.spirops.com/en/jobs.php)


* **[Splash Damage](https://splashdamage.com/)**  
  * _Studio de jeu vidéo fondé en 2001 (Wolfenstein : Enemy Territory, Gears Tactics), installé à Bromley dans le Grand Londres, avec sa propre technologie de développement._
  * **Mots clés**: _Jeu vidéo, Multijoueur, Moteur 3D_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.splashdamage.com/)


* **[Spline](https://spline.fr/)**  
  * _Studio d'ingénierie visuelle : motion control robotisé, camera tracking temps réel sur plateau et VFX._
  * **Mots clés**: _motion control, tracking caméra, production virtuelle, effets visuels, publicité, robotique, location de studio_
  * **Localisation**: Aubervilliers, Valence
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Rendu temps réel/Moteurs 3D, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Sportlogiq](https://www.sportlogiq.com/)**  
  * _Société montréalaise de vision par ordinateur qui extrait par apprentissage profond le suivi des joueurs et des statistiques à partir de vidéos de diffusion (hockey, football, soccer), utilisée par la quasi-totalité des équipes de la LNH ; rachetée par Teamworks en janvier 2026._
  * **Mots clés**: _vision par ordinateur, suivi de joueurs, analyse vidéo sportive, apprentissage profond_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 80
  * **Domaine scientifique/technique**: Vision, Analyse de données
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique
  * [_Jobs_](https://www.sportlogiq.com/careers/)


* **[Sports Interactive](https://www.sports-interactive.com/)**  
  * _Studio londonien (SEGA) éditeur de la série Football Manager, simulation de gestion avec moteur de match 3D._
  * **Mots clés**: _Football Manager, Simulation, Jeu vidéo_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.sports-interactive.com/careers)


* **[Spring Technologies](https://hexagon.com/products/product-groups/cnc-simulation-software/ncsimul)**  
  * _Éditeur de NCSIMUL, logiciel de simulation 3D d'usinage et de jumeau numérique de machines-outils à commande numérique._
  * **Mots clés**: _industrie/usinage, simulation d'usinage, machine-outil, commande numérique, jumeau numérique, NCSIMUL_
  * **Remarque**: _Le logiciel NCSIMUL est désormais commercialisé par Hexagon (ncsimul.com redirige vers Hexagon)._
  * **Localisation**: Montreuil, Labège
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://hexagon.com/about/careers)


* **[SprintRay](https://sprintray.com/)**  
  * _Fabricant angelin d'imprimantes 3D dentaires et éditeur de logiciels (SprintRay Design Suite, conception d'appareils dentaires assistée par IA, préparation d'impression) pour la fabrication au cabinet de couronnes, gouttières et prothèses._
  * **Mots clés**: _impression 3D, CAO dentaire, conception par IA, dentisterie numérique_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 340
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, IA générative (image/3D)
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO
  * [_Jobs_](https://job-boards.greenhouse.io/sprintray)


* **[Squanch Games](https://squanchgames.com/)**  
  * _Studio de Burbank fondé en 2016, développeur et éditeur des jeux de tir humoristiques High on Life (2022) et High on Life 2 (février 2026)._
  * **Mots clés**: _FPS, jeu narratif, Unreal Engine, console/PC_
  * **Localisation**: États-Unis/Burbank
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://squanchgames.com/jobs/)


* **[Square Enix](https://www.square-enix-games.com/fr_FR/home)**  
  * _Éditeur et développeur japonais de jeux vidéo, connu pour les sagas Final Fantasy (dont le MMORPG FINAL FANTASY XIV) et Dragon Quest._
  * **Mots clés**: _AAA, console/PC, édition de jeux, multijoueur en ligne, RPG, Final Fantasy_
  * **Localisation**: États-Unis/California/El Segundo, Royaume-Uni/Londres, France/Paris, Allemagne/Hamburg, Japon/Tokyo
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://apply.workable.com/square-enix/)


* **[Squeeze](https://www.squeezestudio.com/)**  
  * _Studio d'animation 3D de Québec et Montréal (environ 150 à 200 personnes) qui fabrique séries, films, cinématiques de jeux et contenus pour parcs à thème (What If...? de Marvel, Cracké), avec un studio de capture de mouvement ; société partenaire de Cinesite depuis 2022._
  * **Mots clés**: _animation 3D, séries d'animation, cinématiques, motion capture_
  * **Localisation**: Canada/Québec, Canada/Montréal
  * **Nombres d'employés**: 175
  * **Domaine scientifique/technique**: Animation, Modélisation, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.squeezestudio.com/fr/carrieres)


* **[Stability AI](https://stability.ai/)**  
  * _Développeur de modèles d'IA générative (Stable Diffusion, Stable Audio, modèles vidéo et 3D) pour la production de contenus créatifs, en API ou auto-hébergés._
  * **Mots clés**: _IA générative, Stable Diffusion, génération vidéo, génération 3D, audio génératif, open source_
  * **Localisation**: Royaume-Uni/Londres, Japon/Tokyo, États-Unis/Los Angeles
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision
  * **Domaine d'application**: Générique, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://stability.ai/careers)


* **[Steamroller Studios](https://www.steamrollerstudios.com/)**  
  * _Studio pour film d'animation, jeux et expérience immersive pour parc d'attraction_
  * **Mots clés**: _animation 3D, cinématiques de jeu, parcs à thème, AAA, co-développement, animation de personnages_
  * **Localisation**: États-Unis/Mount Dora, Canada/Vancouver, Maurice
  * **Nombres d'employés**: 260
  * **Domaine scientifique/technique**: Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.steamrolleranimation.com/careers)


* **[Steel City Interactive](https://steelcityinteractive.co.uk/)**  
  * _Studio de Sheffield fondé en 2020, développeur du jeu de boxe Undisputed en Unreal Engine avec capture de mouvement._
  * **Mots clés**: _jeu vidéo, boxe, capture de mouvement_
  * **Localisation**: Royaume-Uni/Sheffield
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition
  * **Domaine d'application**: Jeu Vidéo


* **[Stellar Creative Lab](https://www.stellarcreativelab.com/)**  
  * _Studio d'animation 3D et 2D fondé en 2017 à Vancouver par d'anciens de Nelvana et des VFX (Marvel Zombies pour Disney+), avec des équipes à Toronto et au Costa Rica et un pipeline 2.5D maison._
  * **Mots clés**: _animation 3D, séries, previs, Marvel_
  * **Localisation**: Canada/Vancouver
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Stereograph](https://www.stereograph.fr/)**  
  * _Éditeur lillois de TEIA Suite, plateforme de jumeau numérique et d'hypervision des bâtiments permettant de visualiser un patrimoine immobilier en 2D et 3D et d'y connecter les données d'exploitation ; à l'origine studio d'images 3D pour l'architecture._
  * **Mots clés**: _jumeau numérique, BIM, visualisation 3D, hypervision_
  * **Localisation**: Lille
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Visualisation, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.stereograph.fr/nous-rejoindre/)


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


* **[STMicroelectronics](https://www.st.com/)**  
  * _Fabricant de semi-conducteurs dont les sites isérois développent et produisent des capteurs d'image et capteurs 3D (temps de vol, capteurs empilés VD55G4/VD65G4 fabriqués en 300 mm à Crolles), Grenoble étant le plus grand centre de R&D du groupe en France._
  * **Mots clés**: _capteurs d'image, temps de vol, semi-conducteurs_
  * **Localisation**: Grenoble, Crolles
  * **Nombres d'employés**: 5000
  * **Domaine scientifique/technique**: Acquisition, Hardware, Imagerie
  * **Domaine d'application**: Générique, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO


* **[Stoopid Buddy Stoodios](https://www.leagueofbuddies.com/)**  
  * _Studio d'animation de Burbank spécialisé en stop-motion (aussi 2D et 3D), qui fabrique Robot Chicken pour Adult Swim, Dinosaur Office et Spy vs. Spy, ainsi que des publicités et des segments des Simpson._
  * **Mots clés**: _stop-motion, animation, séries adultes, Robot Chicken_
  * **Localisation**: États-Unis/Burbank
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.leagueofbuddies.com/contact)


* **[Stormancer](https://www.stormancer.com/)**  
  * _Société d'ingénierie spécialisée dans les technologies en ligne pour jeux vidéo (backend, multijoueur, crossplay), ayant travaillé sur plus de 30 jeux pour studios et éditeurs._
  * **Mots clés**: _multijoueur en ligne, backend de jeu, crossplay, co-développement, serveurs de jeu_
  * **Localisation**: France/Lille (Tourcoing)
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo


* **[StoryToys](https://storytoys.com/)**  
  * _Éditeur dublinois de jeux et applications mobiles pour enfants (Sesame Street, Disney), racheté par Team17 en 2021._
  * **Mots clés**: _jeu mobile, enfants, Dublin_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 60
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Strollhunt](https://strollhunt.com/)**  
  * _Plateforme mobile de jeux d'exploration urbaine en réalité augmentée, proposée aux offices de tourisme, institutions culturelles et entreprises._
  * **Mots clés**: _réalité augmentée, jeu géolocalisé, tourisme, patrimoine/musée, mobile, chasse au trésor_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Vision, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Studio AKA](https://studioaka.co.uk/)**  
  * _Studio d'animation indépendant basé à Clerkenwell (Londres), produisant publicités, séries et courts et longs métrages en techniques 2D et 3D._
  * **Mots clés**: _Animation, 2D/3D, Publicité_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Studio Black Flag](https://studioblackflag.com/)**  
  * _Studio indépendant bordelais de jeux PC/Mac/Linux (Orphan Age, Yrminsul, Click of Cthulhu)._
  * **Mots clés**: _jeu indépendant, console/PC, Mac/Linux_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Studio Camelia](https://store.steampowered.com/app/2856410/)**  
  * _Studio de jeux vidéo fondé en 2021 près de Montpellier (Castelnau-le-Lez), spécialisé dans le J-RPG, développeur d'Alzara Radiant Echoes._
  * **Mots clés**: _J-RPG, jeu indépendant, PC/console_
  * **Localisation**: Castelnau-le-Lez
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
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
  * [_Jobs_](https://www.studioraclette.com/jobs)


* **[Subsea Tech](https://www.subsea-tech.com/)**  
  * _Concepteur marseillais de robots sous-marins et de surface (ROV Tortuga, micro-ROV, AUV, drones SeaCat) et de systèmes de caméras vidéo sous-marines pour l'inspection, la défense et la recherche._
  * **Mots clés**: _robotique sous-marine, ROV, caméra sous-marine, inspection_
  * **Localisation**: Marseille
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Hardware
  * **Domaine d'application**: Robotique/Systèmes autonomes, Sécurité/Défense, Énergie/Environnement
  * [_Jobs_](https://www.subsea-tech.com/fr/recrutement/)


* **[Sumo Digital](https://sumo-digital.com/)**  
  * _Studio de Sheffield (Sackboy: A Big Adventure, Crackdown 3), co-développeur AAA avec plusieurs sites au Royaume-Uni; propriété de Tencent._
  * **Mots clés**: _co-développement, jeu vidéo, art 3D, Unreal Engine_
  * **Localisation**: Royaume-Uni/Sheffield, Canada/Vancouver
  * **Nombres d'employés**: 1000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Jeu Vidéo


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


* **[Supamonks](https://www.supamonks.com/)**  
  * _Studio d'animation et société de production (Arcueil) réalisant trailers et cinématiques de jeux vidéo, séries et longs métrages en animation 3D, avec deux établissements à Montpellier._
  * **Mots clés**: _animation 3D, cinématiques, trailers de jeux, séries_
  * **Localisation**: Arcueil, Montpellier
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.supamonks.com/productions/jobs)


* **[Superbien](https://www.superbien.studio/)**  
  * _Studio créatif parisien (et New York) qui produit des images animées 3D, du contenu CGI, des expériences immersives et de la réalité augmentée pour les marques._
  * **Mots clés**: _motion design, 3D, publicité, réalité augmentée, exposition immersive_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, VR/AR, Modélisation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Art/Evenementiel
  * [_Jobs_](https://www.superbien.studio/career)


* **[Supercell London](https://supercell.com/en/)**  
  * _Studio londonien de l'éditeur finlandais de jeux mobiles Supercell (Clash of Clans, Brawl Stars, Squad Busters), créé en 2025 à partir de l'équipe de Space Ape Games après son rachat complet._
  * **Mots clés**: _jeu mobile, free-to-play, Supercell, Space Ape_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://supercell.com/en/careers/)


* **[Supermassive Games](https://www.supermassivegames.com/)**  
  * _Studio de Guildford (Until Dawn, The Dark Pictures, Little Hope), spécialisé dans les jeux narratifs cinématographiques avec capture faciale._
  * **Mots clés**: _jeu narratif, capture de mouvement, horreur_
  * **Localisation**: Royaume-Uni/Guildford
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition
  * **Domaine d'application**: Jeu Vidéo


* **[Superprod Animation](https://www.superprod.net/fr)**  
  * _Producteur indépendant européen de films et des séries d'animation et de fiction._
  * **Mots clés**: _séries d'animation, long métrage, animation 2D, animation 3D_
  * **Remarque**: _Studios d'animation à Paris, Angoulême, Milan et Luxembourg, bureau à Los Angeles._
  * **Localisation**: Paris, Angoulême, Angoulême
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


* **[Synapse Virtual Production](https://synapsevp.com/)**  
  * _Studio de production virtuelle qui exploite des volumes LED avec département artistique virtuel et workflows temps réel, avec son plateau principal aux LA Center Studios et des plateaux à Atlanta (Tyler Perry Studios) et bientôt New York._
  * **Mots clés**: _production virtuelle, volume LED, ICVFX, département artistique virtuel_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 20
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Synaptive Medical](https://www.synaptivemedical.com/)**  
  * _Fabricant torontois de systèmes de visualisation chirurgicale (exoscope robotisé Modus X, plateforme BrightMatter de planification et de navigation par imagerie, IRM Evry), restructuré et recapitalisé en 2025._
  * **Mots clés**: _exoscope robotisé, navigation chirurgicale, neurochirurgie, IRM_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 130
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Vision
  * **Domaine d'application**: Médical/Biologique


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


* **[Synthesia](https://www.synthesia.io/)**  
  * _Plateforme d'IA générative de vidéos avec avatars humains numériques, basée à Londres._
  * **Mots clés**: _IA générative, Avatars, Vidéo_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 500
  * **Domaine scientifique/technique**: IA générative (image/3D), Animation
  * **Domaine d'application**: Commerce/Marketing/Publicité, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.synthesia.io/careers)


* **[Syntiant](https://www.syntiant.com/)**  
  * _Concepteur de puces d'IA embarquée (processeurs neuronaux NDP) basé à Irvine, qui étend son offre de la voix vers la vision (détection de personnes, modèles de vision à base de transformeurs, outils d'entraînement de modèles de vision, monture intelligente présentée au CES 2026)._
  * **Mots clés**: _IA embarquée, processeur neuronal, vision embarquée, semi-conducteurs_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 43
  * **Domaine scientifique/technique**: Hardware, Vision
  * **Domaine d'application**: Générique, Robotique/Systèmes autonomes


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
  * [_Jobs_](https://tacticaladventures.teamtailor.com/jobs)


* **[Take-Two Interactive](https://www.take2games.com/)**  
  * _Développement de jeux vidéo, et détenant d'autres entreprises (Rockstar, 2K) ainsi que l'équipe de R&D Dynamixyz à Rennes._
  * **Mots clés**: _AAA, console/PC, édition de jeux, mobile, multijoueur en ligne, capture faciale_
  * **Remarque**: _Équipe de R&D à Cesson-Sévigné (Rennes) issue de Dynamixyz (capture faciale sans marqueurs), rachetée en 2021 : travaille pour les studios du groupe (Rockstar, 2K) et publie dans les conférences de graphique._
  * **Localisation**: États-Unis/New York, Cesson-Sévigné, France/Paris, Canada/{Montréal, Québec, Oakville, Vancouver}, International
  * **Nombres d'employés**: 12900
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition, Vision
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.take2games.com/jobs)


* **[TapBlaze](https://www.tapblaze.com/)**  
  * _Studio indépendant de jeux mobiles fondé en 2014 à Los Angeles, auteur de Good Pizza, Great Pizza (plus de 250 millions de téléchargements revendiqués), Good Coffee, Great Coffee et Homecraft._
  * **Mots clés**: _jeu mobile, simulation de gestion, free-to-play, art 2D et 3D_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 20
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://jobs.ashbyhq.com/tapblaze)


* **[TAT](https://www.tatprod.com)** (TAT Productions) 
  * _Studio de production et de fabrication de films et séries d'animation 3D (Les As de la Jungle, Astérix et Obélix : le Combat des Chefs)._
  * **Mots clés**: _animation 3D, séries d'animation, long métrage, jeunesse_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://jobs.tatprod.com/fr)


* **[Tau Films](https://taufilms.com/)**  
  * _Studio d'effets visuels et d'animation fondé par d'anciens de Rhythm & Hues, avec une équipe de supervision à Los Angeles et une production en Malaisie, en Inde, au Canada et en Chine, auteur d'effets pour Operation Hadal (2025), She's Got No Name (2025) et des attractions de parcs à thème._
  * **Mots clés**: _effets visuels, créatures, parcs à thème_
  * **Localisation**: États-Unis/Los Angeles, Canada/Vancouver
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers


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


* **[Team17](https://www.team17.com/)**  
  * _Éditeur-développeur de Wakefield (Worms, Overcooked, The Escapists), du groupe Everplay._
  * **Mots clés**: _jeu vidéo, Worms, jeu indépendant_
  * **Localisation**: Royaume-Uni/Wakefield
  * **Nombres d'employés**: 250
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
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
  * [_Jobs_](https://www.technicolorgames.com/careers/)


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


* **[Teledyne DALSA](https://www.teledynevisionsolutions.com/)**  
  * _Fabricant waterlooïen de caméras, capteurs d'image et logiciels de vision industrielle (caméras Falcon, Linea, Genie, bibliothèque Sapera, imagerie spatiale et médicale), filiale de Teledyne depuis 2011._
  * **Mots clés**: _vision industrielle, capteurs CMOS, caméras, imagerie scientifique_
  * **Localisation**: Saint-Égrève, Canada/Waterloo
  * **Nombres d'employés**: 1100
  * **Domaine scientifique/technique**: Vision, Acquisition, Imagerie, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique, Sécurité/Défense
  * [_Jobs_](https://flir.wd1.myworkdayjobs.com/flircareers/jobs)


* **[Teledyne FLIR (Richmond)](https://www.flir.com/)**  
  * _Ancien Point Grey Research, racheté par FLIR en 2016 puis intégré à Teledyne FLIR : site de Richmond qui conçoit les caméras de vision industrielle (Blackfly, Oryx) et le SDK Spinnaker._
  * **Mots clés**: _vision industrielle, caméras, Point Grey, Spinnaker_
  * **Localisation**: Canada/Richmond
  * **Domaine scientifique/technique**: Acquisition, Vision, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Robotique/Systèmes autonomes


* **[Teledyne Optech](https://www.teledyneoptech.com/)**  
  * _Constructeur de Vaughan (fondé en 1974 sous le nom Optech, groupe Teledyne Geospatial) de lidars aéroportés, bathymétriques, mobiles, terrestres et sur drone, et des logiciels de traitement de nuages de points associés._
  * **Mots clés**: _lidar, nuages de points, cartographie aéroportée, bathymétrie_
  * **Localisation**: Canada/Vaughan
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Hardware
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme, Énergie/Environnement
  * [_Jobs_](https://flir.wd1.myworkdayjobs.com/flircareers/jobs)


* **[Temple Caché](https://www.templecache.com/)**  
  * _Collectif de réalisateurs et studio créatif installé dans l'ancienne gare de Lunel, mêlant animation 2D/3D, collage et outils numériques pour clips, marques et bandes-annonces (Fortnite, Anno 117)._
  * **Mots clés**: _animation 2D/3D, clips, direction artistique, publicité_
  * **Localisation**: Lunel
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Tempête Studio](https://www.tempete.studio/)**  
  * _Studio de jeu vidéo poitevin fondé en 2016 par Régis Bonnessée (fondateur de l'éditeur Libellud) qui adapte des jeux de société en jeux vidéo et applications compagnons : Dixit World (iOS/Android, 2023), applications de One Key et Shadows: Amsterdam, et Mech-ute sur PC._
  * **Mots clés**: _jeu vidéo mobile, adaptation de jeux de société, Dixit, applications compagnons_
  * **Localisation**: Poitiers
  * **Nombres d'employés**: 7
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[TerraNIS](https://www.terranis.fr/)**  
  * _PME de Ramonville-Saint-Agne qui transforme l'imagerie satellite en services de géo-information pour l'agriculture (Pixagri), la viticulture (Oenoview), les territoires (Landia) et la forêt._
  * **Mots clés**: _imagerie satellite, télédétection, viticulture, agriculture de précision_
  * **Localisation**: Ramonville-Saint-Agne
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Géospatial/Cartographie, Énergie/Environnement


* **[Territory Studio](https://territorystudio.com/)**  
  * _Studio de design graphique et de motion design spécialisé dans les interfaces fictives (FUI), la visualisation de données et le temps réel pour le cinéma, le jeu vidéo et l'automobile._
  * **Mots clés**: _Interfaces fictives, Motion design, Visualisation_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Animation, Visualisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Automobile/Navigation/Aviation


* **[Thales](https://www.thalesgroup.com/fr)**  
  * _Multi-nationale française à forte composante R&amp;D développant des produits pour l'aérospatiale, la défense, et la sécurité tel que la biométrie._
  * **Mots clés**: _défense, aéronautique, spatial, cybersécurité, biométrie_
  * **Localisation**: France/Paris, Palaiseau, International
  * **Nombres d'employés**: 80000
  * **Domaine scientifique/technique**: Reconstruction, Vision, Imagerie
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.thalesgroup.com/fr/candidat)


* **[That's No Moon](https://thatsnomoon.com/)**  
  * _Studio AAA de Los Angeles fondé en 2021 par d'anciens de Naughty Dog, Infinity Ward et PlayStation et financé par Smilegate, qui développe Crossfire, réinterprétation en jeu d'action-aventure solo de la licence de tir de Smilegate (dévoilé au Summer Game Fest 2026)._
  * **Mots clés**: _AAA, jeu narratif, action-aventure, console/PC_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[thatgamecompany](https://thatgamecompany.com/)**  
  * _Studio indépendant de Santa Monica fondé en 2006, auteur de flOw, Flower, Journey et du jeu social Sky: Children of the Light (300 millions de téléchargements en 2026)._
  * **Mots clés**: _jeu d'auteur, jeu social, multijoueur en ligne, mobile, console/PC_
  * **Localisation**: États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://thatgamecompany.com/careers/)


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


* **[The Jim Henson Company](https://www.henson.com/)**  
  * _Société de divertissement familial de Studio City, pionnière de la marionnette numérique (Henson Digital Puppetry Studio) et de l'animation, qui produit Fraggle Rock pour Apple TV (spécial Fraggle Rock: A Holiday Gift, décembre 2026), Word Party, Dinosaur Train et la série d'animation Lore Olympus._
  * **Mots clés**: _marionnette numérique, animation, séries jeunesse, Fraggle Rock_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.henson.com/careers/)


* **[The Pixel Hunt](https://www.thepixelhunt.com/)**  
  * _Studio parisien de jeux narratifs inspirés du réel (Bury me, my Love, Inua, Wednesdays, primé à l'IGF et aux Pégases 2026, Ithaca en production)._
  * **Mots clés**: _jeu narratif, jeu indépendant, game art_
  * **Localisation**: Paris
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[The Scan Truck](https://www.thescantruck.com/)**  
  * _Studio mobile de scan 3D de Los Angeles (photogrammétrie, scan laser 25 microns, LiDAR) qui numérise acteurs, véhicules, décors et objets patrimoniaux pour le cinéma, le jeu vidéo, les jumeaux numériques et des programmes gouvernementaux (SBIR)._
  * **Mots clés**: _scan 3D, photogrammétrie, scan mobile, jumeau numérique_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Patrimoine/Culture, Sécurité/Défense


* **[The Third Floor](https://thethirdfloorinc.com/)**  
  * _Studio de prévisualisation (previs, postvis, techvis, pitchvis) fondé en 2004 par des anciens de Star Wars : Episode III, partenaire de Marvel, Lucasfilm ou Legendary (Godzilla x Kong : Le Nouvel Empire) et producteur de son premier long métrage d'animation, Predator: Killer of Killers (2025)._
  * **Mots clés**: _prévisualisation, postvis, techvis, animation 3D, Unreal Engine_
  * **Localisation**: États-Unis/Los Angeles, Royaume-Uni/Londres
  * **Nombres d'employés**: 400
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://thethirdfloorinc.com/careers)


* **[The Tiny Digital Factory](https://tinydigitalfactory.com/)**  
  * _Studio lyonnais (et montréalais) de jeux mobiles de course et de sports mécaniques (GT Manager, Revv Racing, Shell Racing Legends), ayant contribué à Fallout Shelter et Gear.Club._
  * **Mots clés**: _mobile, jeu de course, free-to-play_
  * **Localisation**: Lyon
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://tinydigitalfactory.com/#join-us)


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


* **[Theorycraft Games](https://theorycraftgames.com/)**  
  * _Studio de Los Angeles fondé en 2020 par des anciens de Riot Games, Bungie et Blizzard, développeur du jeu d'action multijoueur Supervive (serveurs fermés en février 2026), qui travaille sur son prochain jeu._
  * **Mots clés**: _multijoueur en ligne, free-to-play, MOBA, Unreal Engine_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 37
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://theorycraftgames.com/careers)


* **[Therapixel](https://www.therapixel.fr/)**  
  * _Éditeur niçois issu de l'Inria Sophia Antipolis (2013) de logiciels d'intelligence artificielle appliquée à l'imagerie médicale, notamment pour le dépistage du cancer du sein en mammographie._
  * **Mots clés**: _imagerie médicale, deep learning, mammographie, aide au diagnostic_
  * **Localisation**: Nice
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.therapixel.com/careers/)


* **[Therenva](https://www.therenva.com/)**  
  * _Logiciels de planification et de navigation 3D par fusion d'images pour la chirurgie vasculaire endovasculaire (EndoNaut, EndoSize)._
  * **Mots clés**: _imagerie médicale, fusion d'images, navigation chirurgicale, chirurgie vasculaire, planification chirurgicale, deep learning_
  * **Localisation**: Rennes
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Visualisation, VR/AR
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.therenva.com/career)


* **[Thermo Fisher Scientific](https://www.thermofisher.com/amira-avizo)**  
  * _Groupe d'instrumentation scientifique ; son site de Bordeaux (FEI SAS, ex-Visualization Sciences Group) développe les logiciels de visualisation et d'analyse 3D Amira et Avizo._
  * **Mots clés**: _visualisation scientifique, microscopie électronique, segmentation, imagerie médicale, analyse de matériaux, Amira/Avizo_
  * **Localisation**: États-Unis/Waltham, Bordeaux, International
  * **Domaine scientifique/technique**: Visualisation, Imagerie
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO
  * [_Jobs_](https://jobs.thermofisher.com/)


* **[Thunder Lotus Games](https://thunderlotusgames.com/)**  
  * _Studio indépendant montréalais fondé en 2014, connu pour ses jeux dessinés à la main (Jotun, Sundered, Spiritfarer, 33 Immortals), qui prépare le jeu d'action-aventure At Fate's End._
  * **Mots clés**: _animation 2D, jeu indépendant, Spiritfarer, console/PC_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 33
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Théoriz](https://www.theoriz.com/)**  
  * _Studio de création villeurbannais (Pôle Pixel) fondé en 2013 réalisant mapping vidéo, installations interactives et espaces immersifs pour musées, marques et événements (dont la Fête des Lumières)._
  * **Mots clés**: _événementiel/mapping, installations interactives, exposition immersive, Fête des Lumières_
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, IHM/Haptique
  * **Domaine d'application**: Art/Evenementiel, Patrimoine/Culture, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.theoriz.com/fr/jobs/)


* **[Tic Toc Games](https://tictocgames.com/)**  
  * _Studio de développement et de prestation fondé en 2011 à Burbank (studio associé à Manille), auteur de Funko Pop! Blitz et Adventures of Pip, co-développeur de Rift of the NecroDancer, qui prépare Wrestle Story._
  * **Mots clés**: _prestation, co-développement, jeu mobile, console/PC_
  * **Localisation**: États-Unis/Burbank
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://tictocgames.com/jobs/)


* **[Time Based Arts](https://www.time-based-arts.com/)**  
  * _Studio d'effets visuels et d'étalonnage de Shoreditch (Londres) pour la publicité, les clips, le cinéma et les séries (Nike, Lego, Google Pixel, Love Lies Bleeding), avec une activité de recherche et développement._
  * **Mots clés**: _effets visuels, publicité, étalonnage, Shoreditch_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX


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


* **[Titmouse](https://titmouse.net/)**  
  * _Studio d'animation américain (The Legend of Vox Machina, Big Mouth, Star Trek: Lower Decks) avec un studio à Vancouver depuis 2013, premier studio d'animation syndiqué au Canada, et une filiale à Paris créée en 2025._
  * **Mots clés**: _animation 2D, animation adulte, séries, Paris_
  * **Localisation**: Canada/Vancouver, Paris, États-Unis/{Los Angeles, Burbank}
  * **Nombres d'employés**: 700
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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
  * [_Jobs_](https://tokustudio.com/pages/jobs.php)


* **[Tonic DNA](https://tonicdna.com/)**  
  * _Studio d'animation et de design de Montréal fondé en 1983 (ex-Studio Pascal Blais, renommé en 2018), qui mêle animation 2D et 3D pour la publicité, les séries et le cinéma, avec des bureaux à Toronto et Mexico._
  * **Mots clés**: _animation 2D/3D, publicité, motion design, animation hybride_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Animation, Modélisation, IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité, Cinéma/Films d'Animation/VFX


* **[Toon Boom](https://www.toonboom.com/)** (Toon Boom Animation) 
  * _Éditeur montréalais (1994) de logiciels d'animation 2D et de storyboard (Harmony, Storyboard Pro, Producer), standard de l'industrie pour les séries et longs métrages d'animation ; Harmony 25 sorti en 2025._
  * **Mots clés**: _animation 2D, storyboard, Harmony, logiciel d'animation_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Animation, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.toonboom.com/careers)


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


* **[Torn Banner Studios](https://tornbanner.com/)**  
  * _Studio indépendant de jeu vidéo torontois, créateur de Chivalry: Medieval Warfare et Chivalry 2, qui développe No More Room in Hell 2._
  * **Mots clés**: _jeu multijoueur, action, Chivalry_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://job-boards.greenhouse.io/tornbannerstudios)


* **[TotalEnergies OneTech (CSTJF)](https://cstjf-pau.totalenergies.fr/)**  
  * _Centre scientifique et technique Jean-Féger de TotalEnergies à Pau : R&D en imagerie sismique et du sous-sol, modélisation 3D des réservoirs (logiciel interne Sismage-CIG) et calcul haute performance (supercalculateur Pangea)._
  * **Mots clés**: _imagerie sismique, géosciences, modélisation 3D de réservoirs, HPC_
  * **Localisation**: Pau
  * **Nombres d'employés**: 2500
  * **Domaine scientifique/technique**: Imagerie, Visualisation, Modélisation, Simulation
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie
  * [_Jobs_](https://jobs.totalenergies.com/)


* **[Toyota ED²](https://ed2.toyota-europe.com/)** (Toyota Europe Design Development) 
  * _Studio de design avancé européen de Toyota et Lexus, installé à Sophia Antipolis (Biot), qui conçoit les concepts et extérieurs/intérieurs de véhicules avec une équipe de modélisation numérique (Alias, Blender)._
  * **Mots clés**: _design automobile, modélisation NURBS, CAO, visualisation 3D_
  * **Localisation**: Biot
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Visualisation
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://ed2.toyota-europe.com/projects/digitalmodellerneeded)


* **[TPO VFX](https://tpovfx.com/)**  
  * _Studio londonien d'effets visuels dirigé par des artistes, spécialisé en post-vis et en plans VFX finaux pour le cinéma et les séries (Civil War, Wicked, The Witcher, Paddington au Pérou)._
  * **Mots clés**: _effets visuels, post-vis, compositing, cinéma_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Tractable](https://tractable.ai/)**  
  * _Éditeur londonien d'IA de vision par ordinateur estimant les dommages de véhicules et de biens à partir de photos._
  * **Mots clés**: _Vision par ordinateur, Deep learning, Assurance_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Vision
  * **Domaine d'application**: Automobile/Navigation/Aviation, Générique
  * [_Jobs_](https://tractable.ai/careers/)


* **[Transvalor](https://www.transvalor.com/en/homepage)**  
  * _Éditeur de logiciels de simulation numérique des procédés de mise en forme (Forge, Thercast, Rem3D) issus de Mines Paris._
  * **Mots clés**: _simulation physique, éléments finis, mise en forme des métaux, forgeage, fonderie, industrie/usinage_
  * **Localisation**: Biot
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Simulation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Treyarch](https://treyarch.com/)**  
  * _Studio d'Activision (Microsoft) à Playa Vista, développeur de la série Call of Duty: Black Ops (Black Ops 6 en 2024, Black Ops 7 en 2025) et du mode Zombies._
  * **Mots clés**: _AAA, FPS, Call of Duty, multijoueur en ligne, console/PC_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 350
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.activision.com/)


* **[Tribun Health](https://www.tribun.health/)**  
  * _Éditeur de la plateforme de pathologie numérique CaloPix (gestion de lames virtuelles, télépathologie, intégration d'IA d'analyse d'images)._
  * **Mots clés**: _imagerie médicale, pathologie numérique, analyse d'images_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Web/Cloud/Big Data
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.tribun.health/join-our-team)


* **[Tribute Games](https://tributegames.com/)**  
  * _Studio indépendant montréalais fondé en 2011 par d'anciens d'Ubisoft, spécialiste des jeux d'action en pixel art (Mercenary Kings, Flinthook, TMNT: Shredder's Revenge, Marvel Cosmic Invasion, Scott Pilgrim EX en 2026)._
  * **Mots clés**: _pixel art, jeu d'action, beat 'em up, jeu indépendant_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Trimaran](https://www.trimaran.com/)**  
  * _Studio d'effets visuels et d'animation 3D pour films et séries internationales (FX, environnements, matchmove, lighting)._
  * **Mots clés**: _effets visuels, reconstitution historique, environnements numériques, long métrage, séries TV, documentaire, matchmove_
  * **Localisation**: Vanves, Valenciennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Trixell](https://www.trixell.com/)**  
  * _Coentreprise de Thales, Siemens Healthineers et Philips qui conçoit et produit à Moirans des détecteurs numériques plats à rayons X pour la radiologie médicale._
  * **Mots clés**: _rayons X, détecteurs plats, imagerie médicale_
  * **Localisation**: Moirans
  * **Nombres d'employés**: 375
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Hardware
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.trixell.com/join-us)


* **[Turtle Rock Studios](https://www.turtlerockstudios.com/)**  
  * _Studio de jeu vidéo du comté d'Orange appartenant à Tencent, créateur de Left 4 Dead, Evolve et Back 4 Blood, qui développe un nouveau jeu PC et consoles sous Unreal Engine 5._
  * **Mots clés**: _jeu de tir coopératif, Back 4 Blood, Left 4 Dead, Unreal Engine 5, Tencent_
  * **Localisation**: États-Unis/Irvine
  * **Nombres d'employés**: 146
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.turtlerockstudios.com/careers)


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


* **[Uken Games](https://uken.com/)**  
  * _Studio torontois de jeux mobiles fondé il y a plus de 15 ans, éditeur de Jeopardy! World Tour, Who Wants To Be A Millionaire et Ava's Manor._
  * **Mots clés**: _jeu mobile, free-to-play, live ops_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Analyse de données
  * **Domaine d'application**: Jeu Vidéo


* **[Umeshu Lovers](https://umeshulovers.com/)**  
  * _Studio toulousain de développement visuel (concept art 2D/3D) et de game design fondé autour de Sylvain Sarrailh, travaillant pour Riot, Ubisoft, Illumination, Netflix ou Supercell, et associé au jeu Danghost._
  * **Mots clés**: _concept art, développement visuel, jeu vidéo, prototypage_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Unbroken Studios](https://unbrokenstudios.com/)**  
  * _Studio indépendant d'El Segundo fondé par des anciens de Battlefield, Call of Duty et God of War, développeur de Harry Potter: Quidditch Champions (2024) et co-développeur de jeux AAA._
  * **Mots clés**: _co-développement, jeu de sport, Unreal Engine, console/PC_
  * **Localisation**: États-Unis/El Segundo
  * **Nombres d'employés**: 90
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Union VFX](https://www.unionvfx.com/)**  
  * _Studio indépendant d'effets visuels pour le cinéma et les séries, installé à Soho (Londres)._
  * **Mots clés**: _VFX, Cinéma, Séries_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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
  * [_Jobs_](https://www.unit-image.fr/fr/jobs/)


* **[Unity Technologies](https://unity.com/)**  
  * _Éditeur du moteur temps réel Unity, multiplateforme (mobile, PC, console, XR), et de services associés de LiveOps, monétisation et applications industrielles._
  * **Mots clés**: _Unity, moteur de jeu, rendu temps réel, mobile, console/PC, réalité virtuelle, jumeau numérique, monétisation publicitaire_
  * **Remarque**: _Equipes de développement en France: <a target="_blank" href="https://unity.com/srp/High-Definition-Render-Pipeline">rendu graphique</a> (Paris, Grenoble), <a target="_blank" href="https://unity.com/products/pixyz">geometry processing</a> (Compiegne, Grenoble) et <a target="_blank" href="https://unity.com/products/sentis">IA</a> (Lille)_
  * **Localisation**: États-Unis, France/Paris, France/Grenoble, France/Compiègne, France/Lille, Danemark, Finlande, Royaume-Uni, Lituanie, Allemagne, Belgique, Suisse, Canada/Montréal, International
  * **Nombres d'employés**: 7000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://unity.com/careers)


* **[Untold Studios](https://untoldstudios.tv/)**  
  * _Studio de VFX, d'étalonnage et de production fondé en 2018 à Londres, se présentant comme un studio entièrement basé sur le cloud ; bureaux à New York, Los Angeles, Mumbai et Toronto ; publicité, film et séries._
  * **Mots clés**: _VFX, CGI, Pipeline cloud, Publicité_
  * **Localisation**: Royaume-Uni/Londres, États-Unis/Culver City
  * **Domaine scientifique/technique**: Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://untoldstudios.tv/careers/)


* **[Uptale](https://www.uptale.io/)**  
  * _Éditeur d'une plateforme de formation immersive (VR, 360°, IA conversationnelle) qui capture des environnements réels pour créer des modules déployables sur casque, mobile et web._
  * **Mots clés**: _réalité virtuelle, vidéo 360, formation immersive, serious game, IA générative_
  * **Localisation**: Paris, Tours
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Web/Cloud/Big Data, Acquisition
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/uptale/jobs)


* **[ustwo games](https://ustwogames.co.uk/)**  
  * _Studio de jeu vidéo londonien, créateur de Monument Valley, Assemble with Care et Alba._
  * **Mots clés**: _Jeu vidéo, Monument Valley, Mobile_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


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
  * [_Jobs_](https://www.valeo.com/en/careers/)


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


* **[Vention](https://vention.com/)**  
  * _Plateforme montréalaise de conception et de déploiement d'équipements automatisés : CAO 3D dans le navigateur (MachineBuilder) avec bibliothèque de composants modulaires, simulation et programmation de cellules robotisées, contrôleur MachineMotion AI._
  * **Mots clés**: _CAO 3D web, automatisation, robotique industrielle, simulation_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 360
  * **Domaine scientifique/technique**: Design/Fabrication, Simulation, Web/Cloud/Big Data
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Robotique/Systèmes autonomes
  * [_Jobs_](https://vention.com/careers)


* **[Vermon](https://www.vermon.com/)**  
  * _Fabricant tourangeau de transducteurs et sondes ultrasonores sur mesure pour l'imagerie médicale et le contrôle non destructif (plus de 250 000 sondes par an), à la tête de Vermon Group depuis 2026 (TransducerWorks, Moduleus, Vermon NDT)._
  * **Mots clés**: _échographie, transducteurs ultrasonores, imagerie médicale, OEM_
  * **Localisation**: Tours
  * **Nombres d'employés**: 350
  * **Domaine scientifique/technique**: Imagerie, Acquisition, Hardware
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO


* **[Vicon](https://www.vicon.com/)**  
  * _Fabricant britannique de systèmes de motion capture optique (caméras et logiciels, avec ou sans marqueurs) pour le cinéma, le jeu vidéo, la biomécanique et l'ingénierie._
  * **Mots clés**: _motion capture, capture optique, capture sans marqueurs, biomécanique, analyse de la marche, production virtuelle, réalité virtuelle_
  * **Remarque**: _Filiale du groupe Oxford Metrics._
  * **Localisation**: Royaume-Uni/Oxford, États-Unis/Culver City
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


* **[Viggle](https://viggle.ai/)**  
  * _Start-up torontoise (2022) de génération de vidéos et d'animation de personnages par IA contrôlable, fondée sur son modèle JST-1 ; série A de 19 M$ US menée par a16z en 2024._
  * **Mots clés**: _génération vidéo, animation de personnages, modèle de fondation, IA générative_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: IA générative (image/3D), Animation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Commerce/Marketing/Publicité
  * [_Jobs_](https://builtintoronto.com/company/viggle/jobs)


* **[Viridien](https://www.viridiengroup.com/)**  
  * _Groupe de géosciences (ex-CGG) basé à Massy, spécialiste de l'imagerie sismique du sous-sol (FWI), du calcul haute performance et des données géophysiques._
  * **Mots clés**: _imagerie sismique, calcul GPU, HPC, géosciences_
  * **Localisation**: Massy
  * **Domaine scientifique/technique**: Imagerie, Simulation, Visualisation
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie
  * [_Jobs_](https://www.viridiengroup.com/company/careers)


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
  * [_Jobs_](https://www.virtualisvr.com/a-propos/nous-rejoindre)


* **[VirtualiSurg](https://virtualisurg.com/)**  
  * _Éditeur strasbourgeois de simulateurs de formation médicale et chirurgicale combinant réalité virtuelle/mixte et retour haptique sur instruments réels._
  * **Mots clés**: _simulation médicale, réalité virtuelle, haptique, chirurgie assistée_
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, IHM/Haptique, Simulation
  * **Domaine d'application**: Médical/Biologique, Entrainement/Formation/Serious Game
  * [_Jobs_](https://virtualisurg.com/job-openings/)


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


* **[Virtualys](https://www.virtualys.fr/)**  
  * _Société brestoise fondée en 1997 qui conçoit des applications 3D temps réel interactives en réalité virtuelle et augmentée, des serious games de formation et des outils web, avec une activité de R&D éligible au CIR._
  * **Mots clés**: _Réalité virtuelle, Serious game, 3D temps réel, Réalité augmentée_
  * **Localisation**: Brest
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, Web/Cloud/Big Data
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO, Patrimoine/Culture
  * [_Jobs_](https://www.virtualys.fr/Recrutements)


* **[Virtuos](https://www.virtuosgames.com/)**  
  * _Studio de co-développement de jeux vidéo (portages, remasters, production d'art 3D)_
  * **Mots clés**: _co-développement, portage, remaster, production d'art 3D, AAA, console/PC_
  * **Localisation**: Chine/Shanghai, Singapour, Cergy, Lyon, Montpellier, Canada/Montréal, International
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
  * [_Jobs_](https://www.visiblepatient.com/professionnels/emploi/)


* **[Visioglobe](https://visioglobe.com/)**  
  * _Éditeur meylanais de cartes 3D d'intérieur et de guidage (Map Editor, SDK VisioOne avec moteur 3D propriétaire et bibliothèque WebGL) déployées dans plus de 1 000 sites (centres commerciaux, aéroports, bureaux)._
  * **Mots clés**: _cartographie 3D d'intérieur, wayfinding, WebGL, SDK_
  * **Localisation**: Meylan
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Visualisation, Web/Cloud/Big Data
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Visiolab](https://www.visio-lab.com/)**  
  * _Studio 3D toulousain (Visiolab Creative Factory) fondé en 2002, spécialisé en perspectives et films 3D d'architecture et en outils de commercialisation immobilière (showroom virtuel, configurateur, visites 360°), environ 300 projets par an._
  * **Mots clés**: _visualisation architecturale, rendu 3D, immobilier, visite 360_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Commerce/Marketing/Publicité


* **[Visual Concepts](https://vcentertainment.com/)**  
  * _Studio de 2K (Take-Two Interactive) développeur des jeux de sport NBA 2K et WWE 2K, dont le studio d'Agoura Hills porte notamment la série WWE 2K._
  * **Mots clés**: _jeu de sport, NBA 2K, WWE 2K, capture de mouvement, console/PC_
  * **Localisation**: États-Unis/{Agoura Hills, Irvine}
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://boards.greenhouse.io/visualconcepts)


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


* **[VNTANA](https://www.vntana.com/)**  
  * _Éditeur angelin d'une plateforme de gestion et d'optimisation automatique d'actifs 3D (conversion de fichiers CAO et de conception en 3D web, visionneuse 3D, configurateurs) pour le commerce en ligne et la mode, avec un module pour Blender et une intégration à l'API 3D d'Amazon annoncés en 2026._
  * **Mots clés**: _optimisation 3D, gestion d'actifs 3D, visionneuse web, commerce en ligne_
  * **Localisation**: États-Unis/Los Angeles
  * **Nombres d'employés**: 24
  * **Domaine scientifique/technique**: Visualisation, Pipeline/Outils de production, Géométrie
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires


* **[Volograms](https://www.volograms.com/)**  
  * _Start-up dublinoise, spin-off de Trinity College (V-SENSE), spécialisée dans la capture volumétrique et les hologrammes pour AR/VR à partir de vidéos._
  * **Mots clés**: _vidéo volumétrique, hologramme, AR/VR, Trinity_
  * **Localisation**: Irlande/Dublin
  * **Nombres d'employés**: 20
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[Voodoo](https://voodoo.io/)**  
  * _Éditeur et développeur parisien de jeux mobiles (hyper-casual et casual, studios internes et partenaires) et d'applications grand public (BeReal), parmi les plus téléchargés au monde._
  * **Mots clés**: _jeux mobiles, hyper-casual, édition de jeux, Unity_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Analyse de données
  * **Domaine d'application**: Jeu Vidéo


* **[Voxler](https://www.voxler.fr)**  
  * _Studio parisien (groupe THQ Nordic) spécialisé dans les jeux musicaux et de karaoké sur console (série Let's Sing depuis 2012, Let's Get Fit), avec reconnaissance vocale propre._
  * **Mots clés**: _karaoké, jeux musicaux, console, THQ Nordic_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, IHM/Haptique
  * **Domaine d'application**: Jeu Vidéo


* **[VR Vision](https://www.vrvisiongroup.com/)**  
  * _Studio torontois (2016) de simulations de formation en réalité virtuelle sur mesure pour l'énergie, les services publics, l'industrie et l'automobile, déployées sur casques autonomes via sa plateforme Vision Portal._
  * **Mots clés**: _formation en VR, simulation, sécurité industrielle, casques autonomes_
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: VR/AR, Simulation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Énergie/Environnement, Industrie/Manufacturing/CAO


* **[VRAI Learning](https://vrailearning.com/)**  
  * _Start-up lilloise de formation immersive qui produit des mises en situation en réalité virtuelle et des avatars conversationnels IA, utilisables sur PC, mobile et casque VR._
  * **Mots clés**: _formation immersive, réalité virtuelle, avatars IA_
  * **Localisation**: Lille
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game
  * [_Jobs_](https://vrailearning.com/emploi)


* **[Waabi](https://waabi.ai/)**  
  * _Start-up torontoise (2021, fondée par Raquel Urtasun) de conduite autonome pour camions et robotaxis, dont l'approche repose sur Waabi World, un simulateur neuronal photoréaliste à base de capteurs reconstruits ; 1 milliard de dollars levé en janvier 2026, partenariat avec Volvo._
  * **Mots clés**: _conduite autonome, simulation neuronale, camions autonomes, lidar_
  * **Localisation**: Canada/Toronto
  * **Nombres d'employés**: 250
  * **Domaine scientifique/technique**: Simulation, Vision, Reconstruction, IA générative (image/3D)
  * **Domaine d'application**: Automobile/Navigation/Aviation, Robotique/Systèmes autonomes
  * [_Jobs_](https://waabi.ai/careers/)


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


* **[Warner Bros. Animation](https://www.warnerbros.com/company/divisions/television)**  
  * _Division d'animation de Warner Bros. réunie depuis 2022 avec Cartoon Network Studios à Burbank, qui produit des séries 2D pour Netflix, Adult Swim, HBO Max et Cartoon Network (Batman: Caped Crusader, Creature Commandos, SuperMutant Magic Academy annoncée à Annecy en 2026)._
  * **Mots clés**: _animation 2D, séries, DC, Cartoon Network_
  * **Localisation**: États-Unis/Burbank
  * **Nombres d'employés**: 500
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.wbd.com/global/en)


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


* **[WayForward](https://www.wayforward.com/)**  
  * _Studio indépendant de Valencia (Santa Clarita) fondé en 1990, connu pour la série Shantae, River City Girls et le co-développement de Bloodstained, qui prépare un nouveau Shantae pour 2027._
  * **Mots clés**: _animation 2D, jeu de plateforme, pixel art, console/PC, co-développement_
  * **Localisation**: États-Unis/Santa Clarita
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Wayve](https://wayve.ai/)**  
  * _Entreprise londonienne d'IA embarquée pour la conduite autonome par vision (apprentissage de bout en bout, modèles génératifs de scènes de conduite)._
  * **Mots clés**: _Conduite autonome, Vision, Deep learning_
  * **Localisation**: Royaume-Uni/Londres
  * **Nombres d'employés**: 600
  * **Domaine scientifique/technique**: Vision, IA générative (image/3D), Simulation
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation
  * [_Jobs_](https://wayve.ai/careers/)


* **[WB Games Montréal](https://wbgamesmontreal.com/)**  
  * _Studio AAA de Warner Bros. Games installé à Montréal depuis 2010, développeur de Batman: Arkham Origins et de Gotham Knights, avec plus de 300 personnes._
  * **Mots clés**: _jeu vidéo AAA, action-aventure, Batman, Warner Bros. Games_
  * **Localisation**: Canada/Montréal
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.wbgames.com/studios/montreal/)


* **[WetaFX](https://www.wetafx.co.nz/)**  
  * _Studio néo-zélandais d'effets visuels (Avatar, Le Seigneur des anneaux), réputé pour ses créatures et doublures numériques et son moteur de rendu spectral maison Manuka._
  * **Mots clés**: _effets visuels, long métrage, séries, doublure numérique, motion capture, path tracing, moteur de rendu maison_
  * **Remarque**: _Entreprise majeure du domaine des VFX avec équipe de recherche active._
  * **Localisation**: Nouvelle-Zélande/Wellington, Canada/Vancouver
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
  * [_Jobs_](https://emploi.afjv.com/annonces-societes/1361)


* **[Wild Canary Animation](https://www.wildcanary.com/)**  
  * _Studio d'animation 3D de Burbank fondé en 2007, qui fabrique des séries et spéciaux préscolaires pour Disney Jr. (Star Wars: Young Jedi Adventures, Ariel, Mickey's Home Alone annoncé pour fin 2026)._
  * **Mots clés**: _animation 3D, séries préscolaires, Disney Junior_
  * **Localisation**: États-Unis/Burbank
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.wildcanary.com/careers.php)


* **[Wild Sheep Studio](https://store.steampowered.com/app/3840230/)**  
  * _Studio de jeux vidéo montpelliérain cofondé en 2013 par Michel Ancel (Rayman), développeur d'Adorable Adventures (2026, édité par PQube, PC et consoles)._
  * **Mots clés**: _jeu d'aventure, console/PC, jeu indépendant, 3D_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 12
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


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


* **[WildBrain Studios](https://www.wildbrain.com/content/studios)**  
  * _Studio d'animation 2D et 3D de WildBrain à Vancouver (séries Peanuts comme The Snoopy Show, longs métrages CG), qui a noué en 2026 un partenariat de production CG avec 88 Pictures et doit emménager en 2027 dans 4 400 m² à Mount Pleasant._
  * **Mots clés**: _animation 2D, animation 3D, séries jeunesse, Peanuts_
  * **Localisation**: Canada/Vancouver
  * **Domaine scientifique/technique**: Animation, Modélisation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://wildbrain-career.talent-soft.com/)


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
  * [_Jobs_](https://wolcenstudio.bamboohr.com/careers)


* **[Wylie Co.](https://www.wylievfx.com/)**  
  * _Studio d'effets visuels et de pré/postvisualisation fondé par Jake Maymudes, connu pour les postvis et effets de Dune et Dune : Deuxième partie, la série The Studio (Apple TV+, 2025) et son pipeline de rendu entièrement sur GPU._
  * **Mots clés**: _effets visuels, postvisualisation, rendu GPU, Dune_
  * **Localisation**: États-Unis/Culver City, Canada/Montréal
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Xilam](https://xilam.com)** (Xilam Animation) 
  * _Studio de production et de distribution de séries et films d'animation 2D et 3D._
  * **Mots clés**: _séries d'animation, animation 2D, animation 3D, long métrage, jeunesse_
  * **Localisation**: Paris, Angoulême
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://xilam.com/rejoignez-nous/)


* **[Xishan Studio](https://www.xishan.studio/)**  
  * _Studio créatif franco-chinois créé en 2024 spécialisé dans le développement visuel (concept art, character design, storyboard, animatique) et la supervision artistique de projets d'animation, de jeu et d'édition._
  * **Mots clés**: _développement visuel, concept art, storyboard, direction artistique_
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Xperi (FotoNation)](https://xperi.com/)**  
  * _Site de Galway de Xperi (ex-FotoNation) : imagerie, vision par ordinateur et apprentissage automatique pour caméras, automobile et mobiles._
  * **Mots clés**: _vision, imagerie, automobile, Galway_
  * **Localisation**: Irlande/Galway
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Vision, Imagerie
  * **Domaine d'application**: Automobile/Navigation/Aviation, Générique


* **[XR Games](https://xrgames.co.uk/)**  
  * _Studio de Leeds spécialisé dans les expériences de réalité virtuelle et mixte (Contagion VR: Outbreak)._
  * **Mots clés**: _réalité virtuelle, Leeds, XR_
  * **Localisation**: Royaume-Uni/Leeds
  * **Nombres d'employés**: 80
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[XT-Vision](https://www.xt-vision.com/)**  
  * _Concepteur ciotaden de machines de contrôle qualité par vision industrielle pour les lignes d'embouteillage (contrôle du verre, du bouchage, de l'étiquetage à 360°, éjecteurs)._
  * **Mots clés**: _vision industrielle, contrôle qualité, embouteillage, caméras_
  * **Localisation**: La Ciotat
  * **Nombres d'employés**: 7
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Yacht Club Games](https://www.yachtclubgames.com/)**  
  * _Studio indépendant fondé par d'anciens de WayForward, auteur de la série Shovel Knight et de Mina the Hollower (sorti le 29 mai 2026), jeux d'action en pixel art._
  * **Mots clés**: _pixel art, jeu de plateforme, jeu indépendant, console/PC_
  * **Localisation**: États-Unis/Santa Clarita
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.yachtclubgames.com/careers)


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


* **[Zoic Studios](https://www.zoicstudios.com/)**  
  * _Studio d'effets visuels indépendant de Santa Monica (Alien: Earth, séries et films) dont le studio de Vancouver, installé à Gastown depuis 2005, réalise VFX, previs et en 2026 un projet VFX en stop motion._
  * **Mots clés**: _effets visuels, séries, previs, Gastown_
  * **Localisation**: Canada/Vancouver, États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://zoicstudios.theresumator.com/)


* **[ZSpace](https://zspace.com/)**  
  * _Ordinateurs portables de réalité augmentée/3D stéréoscopique sans casque, avec stylet d'interaction 3D, pour l'éducation (STEM, formation technique)_
  * **Mots clés**: _réalité augmentée, affichage stéréoscopique, suivi de tête, stylet 3D, éducation, formation professionnelle_
  * **Localisation**: États-Unis/San Jose
  * **Domaine scientifique/technique**: IHM/Haptique, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game


* **[Zwift](https://www.zwift.com/)**  
  * _Éditeur de Long Beach de la plateforme multijoueur d'entraînement cycliste et de course à pied en mondes virtuels 3D (Watopia), moteur de jeu C++ multiplateforme, qui a racheté Rouvy en avril 2026._
  * **Mots clés**: _fitness, jeu multijoueur en ligne, mondes virtuels, cyclisme_
  * **Localisation**: États-Unis/Long Beach, Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://zwift.com/careers)


