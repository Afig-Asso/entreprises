![URLs](https://github.com/Afig-Asso/entreprises/actions/workflows/url.yml/badge.svg) 

# Listing d'entreprises en Informatique Graphique 

## Compléter/Modifier les informations 
  - Envoyez un email à contact[at]asso-afig.fr avec vos informations
  - Ou faites un push-request sur le dépot.
    - _Pour cela: Modifiez le fichier **data.yaml** pour ajouter/modifier les informations d'une entreprise._
    - _Les fichiers README.md, et json/data.json sont générés automatiquement à partir de data.yaml, il est donc inutile de les modifier._

## Utilisation de la base en locale 

  - `data.yaml`: Base de données des entreprises 
  - `keywords.yaml`: Mots clés 
  - `url_exceptions.yaml`: URLs ignorées par la vérification d'accessibilité (avec la raison et la date d'ajout)
  - `zones.yaml`: Regroupement des villes françaises en zones (ex. Villeurbanne avec Lyon) pour la vue par localité du site

### Générer un site après modification: 

```
python scripts/generate.py 

```
Génère les fichiers suivants: 
- README.md: Vue des entreprises au format markdown pour github. 
- json/data.json: Base de donnée accessible pour générer des pages web dynamique.

### Arguments 

```
generate.py [-c] [-C] 
  -c --checkValidity: Check coherence of keyword and accessibility of URLs.
        Do not exit if errors are detected (see -C for this). 
  -C --checkValiditywithFailure: Check coherence of keyword and accessibility of URLs.
        Quit if errors are detected.
```

Vérification des URLs : seules les pages disparues (HTTP 404/410) et les domaines introuvables
font échouer la vérification. Les erreurs temporaires ou invérifiables (403, 429, 5xx, timeout,
certificat SSL) sont affichées comme simples avertissements. Pour ignorer un site valide que le
vérificateur ne sait pas tester, l'ajouter dans `url_exceptions.yaml`.

### Site web: 

Le répertoire site/ contient un example de page web dynamique chargée dynamiquement depuis le fichier json présent sur github.

### Action push sur github: 

Après un push sur github, les éléments suivants sont mis à jours:
- La nouvelle base est vérifiée localement avec `python generate.py -C`
- Le contenu de site/ est déployé sur une page github.io: https://afig-asso.github.io/entreprises/
  - Cette page est accessible par le site de l'AFIG: https://www.asso-afig.fr/site/entreprises/


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


* **[Activision](https://www.activision.com/)**  
  * _Grand éditeur et développeur américain de jeux vidéo (filiale de Microsoft), connu pour la franchise Call of Duty développée par ses studios Treyarch, Infinity Ward, Raven Software._
  * **Mots clés**: _AAA, console/PC, mobile, édition de jeux, multijoueur en ligne, FPS, Call of Duty_
  * **Remarque**: _Filiale de Microsoft (Xbox) depuis le rachat d'Activision Blizzard en octobre 2023._
  * **Localisation**: États-Unis/Los Angeles, International
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.activision.com/)


* **[Adobe](https://www.adobe.com/fr/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
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


* **[Apple](https://www.apple.com/)**  
  * _Constructeur américain d'appareils grand public (Mac, iPhone, iPad, Vision Pro) conçus autour de ses propres puces Apple Silicon à GPU intégré._
  * **Mots clés**: _matériel grand public, puce/semi-conducteur, GPU, réalité mixte, Apple Vision Pro, écrans_
  * **Localisation**: États-Unis/Cupertino, International
  * **Nombres d'employés**: 160000
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Hardware, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://jobs.apple.com)


* **[Arkane Studios](https://www.arkane-studios.com/fr)**  
  * _Studio lyonnais de jeux AAA en vue subjective (Dishonored, Prey, Deathloop), filiale de ZeniMax/Microsoft, actuellement sur Marvel's Blade._
  * **Mots clés**: _AAA, console/PC, jeu en vue subjective, immersive sim, moteur maison, Dishonored_
  * **Remarque**: _Arkane Austin fermé par Microsoft en mai 2024. Fin 2026, Arkane Lyon (Marvel's Blade) est menacé de fermeture : Microsoft cherche un repreneur (échéance repoussée au 13/12/2026)._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.arkane-studios.com/fr#studios)


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


* **[Asobo](https://www.asobostudio.com/)**  
  * _Studio bordelais de jeux AAA à moteur maison, créateur de la série A Plague Tale et développeur de Microsoft Flight Simulator._
  * **Mots clés**: _AAA, console/PC, moteur maison, co-développement, simulation de vol, A Plague Tale, Microsoft Flight Simulator_
  * **Produits**: Microsoft Flight Simulator, The Crew
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.asobostudio.com/careers)


* **[Atlas V](https://atlasv.io/)**  
  * _Studio de création d'expériences immersives en réalité virtuelle et augmentée._
  * **Mots clés**: _réalité virtuelle, narration immersive, jeu VR, location-based entertainment, multijoueur en ligne, exposition immersive_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel, Jeu Vidéo


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


* **[Avatar Medical](https://www.avatarmedical.ai/)**  
  * _Logiciels transformant l'imagerie médicale en avatars 3D du patient pour la consultation, la planification préopératoire et la visualisation en réalité augmentée._
  * **Mots clés**: _imagerie médicale, chirurgie assistée, planification chirurgicale, réalité augmentée, avatar patient 3D, segmentation_
  * **Localisation**: France/Paris
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.avatarmedical.ai/careers)


* **[AVT Simulation](https://www.avtsim.com/)**  
  * _Concepteur américain de simulateurs d'entraînement (aviation militaire, combat, engins de chantier, parachutisme) en VR/MR et de simulations médicales._
  * **Mots clés**: _simulateur d'entraînement, défense, aéronautique, réalité virtuelle, réalité mixte, simulation médicale, formation professionnelle_
  * **Localisation**: États-Unis/Orlando
  * **Domaine scientifique/technique**: VR/AR, Simulation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Sécurité/Défense, Automobile/Navigation/Aviation, Médical/Biologique
  * [_Jobs_](https://www.avtsim.com/careers/)


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


* **[Black Cog](https://black-cog.com/)**  
  * _Studio d'effets visuels et de post-production (FX de destruction et fluides, compositing, assets 3D temps réel et précalculés)._
  * **Mots clés**: _effets visuels, long métrage, documentaire, publicité, simulation physique, assets temps réel_
  * **Localisation**: Beychac-et-Caillau
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


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
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Bold Brush VFX](https://boldbrushvfx.com/)**  
  * _Studio d'effets visuels spécialisé en environnements numériques et matte painting pour films, séries et publicités._
  * **Mots clés**: _matte painting, concept art, développement visuel, environnements numériques, séries TV, long métrage, publicité_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[BrandXR](https://www.brandxr.io/)**  
  * _Agence et plateforme américaine de réalité augmentée (WebAR, filtres Instagram/Snapchat, fresques AR) pour le marketing, l'éducation et le commerce._
  * **Mots clés**: _réalité augmentée, agence créative, marketing, WebAR, filtres réseaux sociaux, e-commerce/configurateur 3D_
  * **Localisation**: États-Unis/{Orlando, Detroit}
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


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


* **[Cavrnus](https://www.cavrnus.com/)**  
  * _Plateforme et SDK qui ajoutent multi-utilisateurs, synchronisation d'objets, voix/vidéo et persistance aux applications 3D Unreal Engine et Unity._
  * **Mots clés**: _multi-utilisateurs, collaboration temps réel, Unreal Engine, Unity, SDK, jumeau numérique_
  * **Localisation**: États-Unis/California/Carlsbad
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[CGEV](https://www.cgev.fr/)**  
  * _Studio d'effets visuels pour le cinéma et les séries (compositing, 3D, FX fluides et particules, matte painting)._
  * **Mots clés**: _effets visuels, compositing, matte painting, simulation de fluides, long métrage, séries TV, supervision de tournage_
  * **Localisation**: Paris
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


* **[Cousin Bizarre](https://www.cousinbizarre.com/)**  
  * _Studio d'effets visuels : 3D/CGI, FX (simulations de fluides, particules, cheveux, destruction), compositing et matte painting._
  * **Mots clés**: _effets visuels, compositing, matte painting, simulation de fluides, long métrage, séries TV, look development_
  * **Localisation**: Les Lilas
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Cyanide Studio](https://cyanide-studio.com/fr/)**  
  * _Studio de développement et d'édition de Nanterre (groupe Nacon), connu pour Pro Cycling Manager, Tour de France, Blood Bowl, Styx et Chef Life._
  * **Mots clés**: _console/PC, jeu de simulation sportive, édition de jeux, Pro Cycling Manager, Blood Bowl, Styx_
  * **Remarque**: _Filiale du groupe Nacon. Studio Big Bad Wolf (The Council, Vampire The Masquerade - Swansong) à Bordeaux._
  * **Localisation**: Nanterre, Bordeaux
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://cyanide-studio.com/fr/nous-rejoindre/)


* **[Dada! Animation](https://www.dada-animation.com/)**  
  * _Studio d'animation: Storytelling et conception créative, animation 3D, immersion et interactivité._
  * **Mots clés**: _animation 3D, séries d'animation, documentaire animé, jeu VR, œuvres originales_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Dassault Systèmes](https://www.3ds.com/fr/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
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


* **[DON'T NOD](https://dont-nod.com/en/)**  
  * _Développeur et éditeur indépendant de jeux narratifs (Paris, Montréal), créateur de Life is Strange, Jusant, Lost Records et Aphelion._
  * **Mots clés**: _jeu narratif, console/PC, Unreal Engine, édition de jeux, jeu indépendant, Life is Strange_
  * **Localisation**: Paris, Canada/Montréal
  * **Nombres d'employés**: 250
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://dont-nod.com/en/careers/)


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


* **[Eko Software](http://www.ekosystem.com/)**  
  * _Studio de développement de jeux vidéo (How to Survive, Warhammer: Chaosbane, Rugby)._
  * **Mots clés**: _console/PC, jeu de sport, action-RPG, moteur maison, adaptation de licences_
  * **Remarque**: _Filiale du groupe Nacon._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Emersya](https://www.emersya.com/)**  
  * _Plateforme 3D et AR pour le e-commerce : configurateurs et visualiseurs 3D interactifs, AR web, rendu automatisé de produits._
  * **Mots clés**: _e-commerce/configurateur 3D, web 3D, réalité augmentée, visualiseur 3D, rendu produit, mode/textile_
  * **Localisation**: France/Montpellier
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Design/Fabrication
  * **Domaine d'application**: Commerce/Marketing/Publicité, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.emersya.com/join-us/)


* **[Enchanted Tools](https://enchanted.tools/)**  
  * _Concepteur du robot humanoïde Mirokaï, combinant perception, IA et animation expressive de personnages._
  * **Mots clés**: _robotique, robot humanoïde, robot social, animation de personnages, deep learning, santé_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Vision, Animation, IHM/Haptique
  * **Domaine d'application**: Robotique/Systèmes autonomes, Médical/Biologique


* **[Epic Games](https://www.epicgames.com/site/en-US/home)**  
  * _Éditeur américain du moteur Unreal Engine et du jeu Fortnite, également propriétaire de l'Epic Games Store, de Quixel, RealityCapture et MetaHuman._
  * **Mots clés**: _Unreal Engine, AAA, free-to-play, multijoueur en ligne, Fortnite, MetaHuman, boutique de jeux_
  * **Produits**: [Unreal Engine](https://www.unrealengine.com/)
  * **Localisation**: États-Unis, International
  * **Nombres d'employés**: 2000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.epicgames.com/site/en-US/careers/jobs)


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


* **[Exkee](https://www.exkee.com/)**  
  * _Studio marseillais de jeux vidéo, à la fois prestataire (portage console/PC de The 7th Guest VR) et producteur de jeux indépendants et de serious games._
  * **Mots clés**: _jeu indépendant, console/PC, mobile, portage, serious game, jeu VR_
  * **Localisation**: Marseille
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Exwayz](https://www.exwayz.com/)**  
  * _Logiciel de localisation et cartographie 3D (SLAM lidar) temps réel pour la robotique autonome et la cartographie mobile._
  * **Mots clés**: _lidar, SLAM, localisation, cartographie, robotique, véhicule autonome, nuage de points_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


* **[Falcon's Creative Group](https://falconscreativegroup.com/)**  
  * _Agence américaine de conception d'expériences pour parcs à thème, parcs aquatiques et resorts : planification, design d'attractions, production média immersive et jumeaux numériques._
  * **Mots clés**: _parc d'attractions, conception d'attractions, exposition immersive, production média, jumeau numérique_
  * **Remarque**: _Division de Falcon's Beyond Global (Nasdaq : FBYD)._
  * **Localisation**: États-Unis/Orlando
  * **Domaine scientifique/technique**: VR/AR, Animation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel
  * [_Jobs_](https://falconscreativegroup.com/careers/)


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


* **[Gleamer](https://www.gleamer.ai/)**  
  * _Éditeur français de logiciels d'IA pour la radiologie (BoneView, ChestView, BreastView...) d'aide à la détection sur radiographie, scanner, mammographie et IRM._
  * **Mots clés**: _imagerie médicale, diagnostic, deep learning, radiologie, dispositif médical_
  * **Localisation**: Paris, Saint-Mandé
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


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
  * **Localisation**: Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://hari-studios.com/recrutements/)


* **[Hexagon](https://hexagon.com/)**  
  * _Groupe suédois de technologies de mesure et de géospatial (Leica Geosystems, Intergraph) : métrologie, scanners laser, positionnement, logiciels pour l'industrie et les infrastructures._
  * **Mots clés**: _métrologie, lidar, scanner 3D, SIG, jumeau numérique, Leica Geosystems, industrie/usinage_
  * **Localisation**: Suède/Stockholm
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie, Vision
  * **Domaine d'application**: Géospatial/Cartographie, Industrie/Manufacturing/CAO


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


* **[Huawei Nice Research Center](https://www.huawei.com/fr/)** (Huawei Technologies France - Nice Research Center) 
  * _Centre de recherche Huawei à Sophia Antipolis avec une équipe de rendu 3D basse consommation pour le jeu mobile (ray tracing mobile, super-résolution, génération de frames)._
  * **Mots clés**: _ray tracing, mobile, GPU, rendu temps réel, super-résolution, basse consommation, Vulkan_
  * **Localisation**: Valbonne, Boulogne-Billancourt
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware, IA générative (image/3D)
  * **Domaine d'application**: Jeu Vidéo, Générique


* **[I-MC](https://www.mistralis.fr/)**  
  * _Solutions de contrôle et d'inspection industrielle automatisées par capteur optique (marque Mistralis)._
  * **Mots clés**: _contrôle non destructif, inspection industrielle, capteur optique, machines spéciales, nucléaire, fabrication additive_
  * **Localisation**: France/Pertuis
  * **Domaine scientifique/technique**: Vision, Acquisition, Simulation, Design/Fabrication
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation, Sécurité/Défense


* **[Iconem](https://iconem.com/)**  
  * _Numérisation 3D du patrimoine par photogrammétrie, drones et lidar ; plateforme web de visualisation (nuages de points, maillages, Gaussian splats)._
  * **Mots clés**: _patrimoine/musée, photogrammétrie, drone, lidar, nuage de points, Gaussian splatting, exposition immersive_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Visualisation
  * **Domaine d'application**: Patrimoine/Culture, Géospatial/Cartographie


* **[IGO](https://www.igo.fr/)**  
  * _Société française spécialiste du jumeau numérique de territoire : exploitation de données géospatiales 3D pour la simulation de projets, la gestion de patrimoine et la sûreté._
  * **Mots clés**: _jumeau numérique, SIG, territoire, 3D géospatiale, sûreté, aménagement urbain_
  * **Localisation**: Nîmes
  * **Domaine scientifique/technique**: Modélisation, VR/AR
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


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


* **[Imageens](https://www.imageens.com/)**  
  * _Éditeur français de logiciels d'aide à la décision clinique par IA (ArtFun+, dispositif CE IIa) mesurant des biomarqueurs d'imagerie pour stratifier le risque cardiovasculaire._
  * **Mots clés**: _imagerie médicale, diagnostic, cardiologie, deep learning, biomarqueurs d'imagerie, dispositif médical_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Analyse de données, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Imagination Technologies](https://www.imaginationtech.com/)**  
  * _Concepteur britannique de propriété intellectuelle GPU (PowerVR, séries A à E) pour graphismes, ray tracing et IA embarquée, licenciée aux fabricants de puces mobiles et automobiles._
  * **Mots clés**: _GPU, puce/semi-conducteur, propriété intellectuelle, ray tracing, accélérateurs IA, mobile, automobile_
  * **Localisation**: Royaume-Uni, Pologne
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.imaginationtech.com/careers/vacancies/)


* **[Imajing](https://imajing.eu/)**  
  * _Concepteur de systèmes de cartographie mobile (capteurs embarqués, images et lidar) et de logiciels d'exploitation 3D géoréférencée._
  * **Mots clés**: _cartographie mobile, lidar, SIG, gestion d'infrastructures, nuage de points, routes_
  * **Localisation**: Labège
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Immersion](https://www.immersion.fr/)**  
  * _Intégrateur et éditeur de solutions de réalité virtuelle et augmentée et de collaboration 3D pour l'industrie et la recherche (Shariiing, Shariiing Review)._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, collaboration 3D, salle immersive, intégrateur, Shariiing_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: VR/AR, Visualisation, IHM/Haptique
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Inbolt](https://www.inbolt.com/)**  
  * _Guidage de robots industriels en temps réel par vision 3D et IA (localisation d'objets à partir de capteurs de profondeur)._
  * **Mots clés**: _robotique, vision par ordinateur, caméra 3D, deep learning, industrie/usinage, automobile, bin picking_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


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


* **[Ishtar Games](https://ishtar.games/)**  
  * _Studio bordelais de jeux de gestion et de RPG tactiques (Dead in Vinland, The Last Spell), filiale de Nacon depuis 2021 et label d'édition indépendante._
  * **Mots clés**: _console/PC, RPG tactique, roguelite, édition de jeux_
  * **Remarque**: _Filiale du groupe Nacon._
  * **Localisation**: Tourcoing
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Kayrros](https://www.kayrros.com/)**  
  * _Mesure par satellite de l'empreinte environnementale des activités humaines (analyse d'images satellitaires, géospatial)._
  * **Mots clés**: _imagerie satellite, SIG, deep learning, méthane, risque climatique, feux de forêt, déforestation_
  * **Remarque**: _Rachetée en 2026 par Energy Aspects (Londres) ; la marque et l'équipe parisienne sont maintenues._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie


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


* **[La Planète Rouge](https://www.laplaneterouge.fr/)**  
  * _Studio d'effets visuels et de production virtuelle (plateau à mur LED The Next Stage aux Provence Studios) et de post-production._
  * **Mots clés**: _production virtuelle, mur LED, effets visuels, post-production, services de tournage, long métrage_
  * **Localisation**: Martigues
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lectra](https://www.lectra.com/fr)**  
  * _Éditeur de logiciels et fournisseur d'équipements de découpe pour la mode, l'automobile et l'ameublement (PLM Kubix Link, patronage Modaris, Gerber AccuMark)._
  * **Mots clés**: _CAO, mode/textile, découpe automatique, patronage, PLM, automobile, ameublement_
  * **Localisation**: France/Paris, Cestas, International
  * **Nombres d'employés**: 2800
  * **Domaine scientifique/technique**: Modélisation, Simulation, Design/Fabrication
  * **Domaine d'application**: Mode/Vêtements/Accessoires


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


* **[M-Covision](https://fr.mcovision.com/)**  
  * _Cabinet de conseil et R&D en IA spécialisé en vision par ordinateur (deep learning), avec des projets en imagerie médicale, biologie et industrie._
  * **Mots clés**: _vision par ordinateur, deep learning, conseil R&D, imagerie médicale, segmentation, formation professionnelle_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Analyse de données
  * **Domaine d'application**: Générique


* **[Mac Guff](https://macguff.com)** (Mac Guff Ligne) 
  * _Studio parisien d'effets visuels et d'animation fondé en 1986, pour le cinéma, la publicité, les séries, le documentaire et l'IA créative._
  * **Mots clés**: _effets visuels, animation 3D, publicité, long métrage, séries, IA générative, documentaire_
  * **Localisation**: Paris, Paris
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Madbox](https://www.madbox.io/)**  
  * _Studio et éditeur parisien de jeux mobiles casual free-to-play à très large audience (Stickman Hook, Sausage Flip, Idle Ants, Pocket Champs)._
  * **Mots clés**: _mobile, free-to-play, jeu casual, hypercasual, édition de jeux, Stickman Hook_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


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


* **[Maxon](https://www.maxon.net/)**  
  * _Éditeur allemand de logiciels de création 3D et vidéo : Cinema 4D, ZBrush, moteur de rendu Redshift et effets Red Giant._
  * **Mots clés**: _Cinema 4D, ZBrush, Redshift, motion design, plugin/logiciel pour artistes, effets visuels, sculpture numérique_
  * **Produits**: ZBrush, Cinema4D, etc.
  * **Localisation**: États-Unis, Canada, Allemagne
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.maxon.net/fr/about-maxon/careers)


* **[Mercenaries Engineering](http://guerillarender.com/)**  
  * _Développement de logiciel de rendu (Guerilla Render) et d'animation (Rumba) pour la création de films d'animation._
  * **Mots clés**: _path tracing, Guerilla Render, animation 3D, long métrage, plugin/logiciel pour artistes, look development, Rumba_
  * **Produits**: [Guerilla Render](http://guerillarender.com/), [Rumba Animation](https://rumba-animation.com/)
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Meta](https://ai.meta.com/research/)**  
  * _Groupe technologique ; son laboratoire FAIR Paris (ouvert en 2015) mène des recherches en IA et vision par ordinateur (DINOv2/DINOv3)._
  * **Mots clés**: _vision par ordinateur, deep learning, IA générative, segmentation, apprentissage auto-supervisé, open source_
  * **Localisation**: États-Unis/Menlo Park, Paris, International
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, VR/AR, Reconstruction
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique
  * [_Jobs_](https://www.metacareers.com/)


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


* **[Mikros Animation](https://www.mikrosanimation.com/fr/)**  
  * _Studio d'animation CG (groupe Rodeo FX) produisant longs métrages et séries au rendu stylisé, notamment Orion and the Dark, La Pat' Patrouille : le film et Teenage Mutant Ninja Turtles._
  * **Mots clés**: _animation 3D, long métrage, séries d'animation, rendu stylisé, Rodeo FX_
  * **Remarque**: _Société du groupe Rodeo FX depuis 2025 (rachat après la faillite de Technicolor)._
  * **Localisation**: France/Paris, Canada/Montréal, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.mikrosanimation.com/en/people-and-culture/careers/)


* **[Mimbus](https://mimbus.com/)**  
  * _Solutions de formation professionnelle en réalité virtuelle (bâtiment, automobile, aéronautique, industrie)._
  * **Mots clés**: _réalité virtuelle, formation professionnelle, simulateur d'entraînement, bâtiment, automobile, aéronautique, industrie/usinage_
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Simulation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


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


* **[Nacon](https://www.nacongaming.com/)**  
  * _Éditeur de jeux vidéo et fabricant d'accessoires, maison mère de nombreux studios de développement._
  * **Mots clés**: _édition de jeux, console/PC, accessoires de jeu, manettes, jeu de sport_
  * **Remarque**: _Placée en redressement judiciaire en mars 2026 (période d'observation prolongée en juillet 2026)._
  * **Localisation**: Fretin, Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware
  * **Domaine d'application**: Jeu Vidéo


* **[Naver Labs Europe](https://europe.naverlabs.com/)**  
  * _Centre de recherche européen de Naver en IA, vision par ordinateur 3D et robotique (DUSt3R, MASt3R)._
  * **Mots clés**: _vision par ordinateur, deep learning, robotique, modèles de fondation 3D, modèle de corps humain_
  * **Localisation**: Meylan, Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Générique


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


* **[Neural Concept](https://www.neuralconcept.com/)**  
  * _Plateforme d'IA pour l'ingénierie qui prédit les performances physiques de designs 3D (CFD, structure) afin d'accélérer la conception, utilisée par des constructeurs automobiles et aéronautiques._
  * **Mots clés**: _deep learning, simulation physique, CAO, conception assistée par IA, automobile, aéronautique_
  * **Localisation**: Suisse/Lausanne, Allemagne/Munich
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.neuralconcept.com/careers)


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


* **[NovaQuark](https://www.novaquark.com/)**  
  * _Studio parisien créateur du jeu bac à sable spatial Dual Universe / myDU, monde persistant entièrement éditable en voxels, et développant un jeu PC/console sous Unreal Engine 5._
  * **Mots clés**: _voxels, bac à sable, multijoueur en ligne, console/PC, Unreal Engine, Dual Universe_
  * **Localisation**: Canada/Montréal, France/Paris, Paris
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Simulation, Animation, Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/novaquark/jobs)


* **[Novelab](https://www.novelab.io/)**  
  * _Studio parisien d'expériences immersives primé (VR, AR, installations interactives) pour le divertissement, les musées, les marques et la formation._
  * **Mots clés**: _réalité virtuelle, réalité augmentée, installations interactives, patrimoine/musée, Apple Vision Pro, jeu VR_
  * **Localisation**: Paris
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


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


* **[OptiTrack](https://optitrack.com/)**  
  * _Fabricant américain (NaturalPoint) de systèmes de motion capture optique utilisés en production virtuelle, tracking VR, biomécanique et robotique._
  * **Mots clés**: _motion capture, caméras infrarouges, production virtuelle, tracking caméra, réalité virtuelle, biomécanique, robotique_
  * **Localisation**: États-Unis/Oregon/Corvallis
  * **Domaine scientifique/technique**: Acquisition, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://optitrack.com/careers)


* **[Oslandia](https://oslandia.com/)**  
  * _Société de services et d'édition open source en SIG et 3D géospatiale (QGIS, Giro3D, py3dtiles, PostGIS)._
  * **Mots clés**: _SIG, open source, web 3D, QGIS, PostGIS, nuage de points, formation professionnelle_
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Visualisation, Web/Cloud/Big Data, Géométrie
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Otoy](https://home.otoy.com/)**  
  * _Éditeur d'OctaneRender (rendu GPU path tracing) et du Render Network de rendu distribué, et créateur de la technologie de scan facial Lightstage._
  * **Mots clés**: _path tracing, OctaneRender, GPU, ferme de rendu, cloud/streaming, Lightstage, capture faciale_
  * **Produits**: Octane Render
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu offline/VFX, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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


* **[Photoroom](https://www.photoroom.com/)**  
  * _Éditeur d'une application et d'API d'édition d'images par IA générative (détourage, génération de fonds et de visuels produits)._
  * **Mots clés**: _IA générative, détourage, retouche photo, e-commerce/configurateur 3D, génération vidéo, API, applications mobiles_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Imagerie, Vision
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/photoroom)


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


* **[PopcornFX](https://www.popcornfx.com/)**  
  * _Suite d'outils de création et moteur runtime d'effets de particules temps réel, intégrée à Unreal Engine, Unity, Godot et O3DE et utilisée dans des jeux AAA (Forza Horizon, WWE 2K)._
  * **Mots clés**: _middleware, effets de particules, rendu temps réel, Unreal Engine, Unity, plugin/logiciel pour artistes, programmation visuelle_
  * **Remarque**: _Développé par la société Persistant Studios._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


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


* **[Primaa](https://primaalab.com/)**  
  * _Diagnostic du cancer par IA et analyse d'images de lames histologiques (Cleo Breast, Cleo Skin)._
  * **Mots clés**: _diagnostic, anatomopathologie, deep learning, oncologie, lames histologiques, CE-IVDR_
  * **Localisation**: Paris, Orsay
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Prophesee.AI](https://www.prophesee.ai/)**  
  * _Concepteur français de capteurs de vision événementielle (neuromorphique) et de caméras associées pour détecter et suivre des mouvements rapides (industrie, défense, robotique)._
  * **Mots clés**: _capteur événementiel, vision par ordinateur, puce/semi-conducteur, neuromorphique, défense, robotique, industrie/usinage_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Générique


* **[Qarnot Computing](https://qarnot.com/)**  
  * _Fournisseur français de cloud HPC bas carbone (récupération de chaleur des serveurs) pour les simulations d'ingénieurs et le rendu, racheté par Scaleway._
  * **Mots clés**: _calcul haute performance, cloud/streaming, bas carbone, simulation physique, ferme de rendu, Scaleway_
  * **Remarque**: _Racheté par Scaleway (groupe Iliad) en juillet 2026._
  * **Localisation**: Paris (Montrouge)
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Générique


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


* **[Ranch Computing](https://www.ranchcomputing.com/)**  
  * _Ferme de rendu en ligne CPU/GPU pour les logiciels 3D (Arnold, V-Ray, Redshift, Octane, Cycles, RenderMan...)._
  * **Mots clés**: _ferme de rendu, cloud/streaming, GPU, path tracing, Blender, Houdini_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Web/Cloud/Big Data
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Générique


* **[Reemo](https://reemo.io/)**  
  * _Plateforme souveraine d'accès distant Zero Trust sans agent, basée sur un protocole de streaming haute performance de postes de travail (utilisée notamment par des studios d'animation et le broadcast)._
  * **Mots clés**: _cloud/streaming, accès distant, Zero Trust, cybersécurité, streaming de postes de travail, broadcast_
  * **Localisation**: Montévrain
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Générique
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/reemo)


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


* **[Saint-Gobain](https://www.saint-gobain.com/fr)**  
  * _Groupe industriel français de matériaux de construction (vitrage, isolation Isover, plâtre Placo, Weber) et de matériaux haute performance (céramiques, abrasifs, vitrage automobile)._
  * **Mots clés**: _matériaux de construction, vitrage, isolation thermique, plaques de plâtre, céramiques, vitrage automobile_
  * **Localisation**: Courbevoie, International
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO


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


* **[Sim&Cure](https://www.sim-and-cure.com/)**  
  * _Logiciel de modélisation 3D et de simulation numérique pour le traitement endovasculaire des anévrismes intracrâniens (Sim&Size)._
  * **Mots clés**: _imagerie médicale, neurovasculaire, planification chirurgicale, dispositif médical, modélisation 3D patient_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Simulation, Imagerie, Reconstruction
  * **Domaine d'application**: Médical/Biologique


* **[Simerics](https://www.simerics.com/)**  
  * _Éditeur de logiciels de simulation CFD (Simerics-MP, PumpLinx) spécialisés dans les écoulements multiphasiques, la cavitation et les pompes et moteurs._
  * **Mots clés**: _simulation de fluides, CFD, maillage automatique, cavitation, automobile, aéronautique_
  * **Localisation**: États-Unis/Washington/Bellevue
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://www.simerics.com/careers/)


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


* **[Solaya](https://www.solaya.ai/)**  
  * _Laboratoire/startup de numérisation 3D de produits par Gaussian splatting (application de scan mobile et pipeline entreprise)._
  * **Mots clés**: _Gaussian splatting, scanner 3D, mobile, e-commerce/configurateur 3D, jumeau numérique, réalité augmentée_
  * **Localisation**: Nice
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité, Industrie/Manufacturing/CAO


* **[Sony CSL](https://csl.sony.fr/)**  
  * _Centre de recherche de Sony - Computer Science Laboratories: Creativy, Music, Language, Sustainability_
  * **Mots clés**: _laboratoire de recherche, IA pour la musique, créativité assistée par IA, langage, développement durable_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Générique


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


* **[Sun Creature](https://www.suncreature.com/)**  
  * _Studio d'animation et de production danois avec une filiale de fabrication à Bordeaux (animation 2D/3D)._
  * **Mots clés**: _animation 2D, séries d'animation, long métrage, contenus de marque, coproduction internationale_
  * **Localisation**: Bègles
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


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


* **[Thales](https://www.thalesgroup.com/fr)**   :small_orange_diamond: _[Entreprise majeure avec R&D avancée en France]_
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


* **[TopSolid](https://www.topsolid.com/)** (TopSolid (ex-Missler Software)) 
  * _Éditeur français de logiciels de CAO/FAO intégrés (TopSolid) pour la mécanique, l'outillage, le bois et la tôlerie._
  * **Mots clés**: _CAO, FAO, ERP, industrie/usinage, tôlerie, menuiserie/bois, outillage_
  * **Localisation**: Évry-Courcouronnes, Vandœuvre-lès-Nancy, Saint-Quentin-Fallavier, Saint-Herblain, Gières, Labège
  * **Nombres d'employés**: 420
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Transvalor](https://www.transvalor.com/en/homepage)**  
  * _Éditeur de logiciels de simulation numérique des procédés de mise en forme (Forge, Thercast, Rem3D) issus de Mines Paris._
  * **Mots clés**: _simulation physique, éléments finis, mise en forme des métaux, forgeage, fonderie, industrie/usinage_
  * **Localisation**: Biot
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Simulation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


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


* **[Ubisoft](https://www.ubisoft.com/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Éditeur et développeur français de jeux vidéo AAA (Assassin's Creed, Far Cry, Rainbow Six Siege, The Division) avec des studios dans le monde entier et des moteurs maison (Anvil, Snowdrop)._
  * **Mots clés**: _AAA, console/PC, édition de jeux, moteur maison, multijoueur en ligne, free-to-play_
  * **Remarque**: _Ubisoft a créé une entité de recherche à Bordeaux appelée "La Forge" à l'image de celle existante à Montréal. Depuis fin 2025, les licences Assassin's Creed, Far Cry et Rainbow Six sont gérées par la filiale Vantage Studios (participation de Tencent). Restructuration importante en 2026 (fermetures de studios hors de France). Studios en France : Ubisoft Paris, Ubisoft Mobile Games (Saint-Mandé), Nadeo (Trackmania, Paris), Ivory Tower (The Crew, Villeurbanne), Ubisoft Bordeaux et Ubisoft Annecy._
  * **Localisation**: Montreuil, France/Bordeaux, France/Annecy, Villeurbanne, Canada/{Montréal, Toronto}, États-Unis/{San Francisco, New York, Atlanta}, Inde, Allemagne, Pologne, International
  * **Nombres d'employés**: 16500
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.ubisoft.com/en-us/company/careers)


* **[Unit Image](https://www.unit-image.fr/)**  
  * _Studio d'animation 3D et d'effets visuels (cinématiques de jeux vidéo, séries, publicité)._
  * **Mots clés**: _animation 3D, effets visuels, cinématiques de jeu, publicité, scanner 3D, motion design_
  * **Localisation**: Paris, Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Unity Technologies](https://unity.com/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Éditeur du moteur temps réel Unity, multiplateforme (mobile, PC, console, XR), et de services associés de LiveOps, monétisation et applications industrielles._
  * **Mots clés**: _Unity, moteur de jeu, rendu temps réel, mobile, console/PC, réalité virtuelle, jumeau numérique, monétisation publicitaire_
  * **Remarque**: _Equipes de développement en France: <a target="_blank" href="https://unity.com/srp/High-Definition-Render-Pipeline">rendu graphique</a> (Paris, Grenoble), <a target="_blank" href="https://unity.com/products/pixyz">geometry processing</a> (Compiegne, Grenoble) et <a target="_blank" href="https://unity.com/products/sentis">IA</a> (Lille)_
  * **Localisation**: États-Unis, France/Paris, France/Grenoble, France/Compiègne, France/Lille, Canada, Danemark, Finlande, Royaume-Uni, Lituanie, Allemagne, Belgique, Suisse, International
  * **Nombres d'employés**: 7000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://unity.com/careers)


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


* **[Virtualis](https://www.virtualisvr.com/)**  
  * _Éditeur de solutions de rééducation en réalité virtuelle pour kinésithérapeutes (PhysioVR, BalanceVR pour les troubles de l'équilibre et vestibulaires, plateformes StaticVR et MotionVR)._
  * **Mots clés**: _réalité virtuelle, rééducation, troubles vestibulaires, kinésithérapie, dispositif médical, plateforme dynamique_
  * **Localisation**: France/Montpellier
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Médical/Biologique


* **[Virtuos](https://www.virtuosgames.com/)**  
  * _Studio de co-développement de jeux vidéo (portages, remasters, production d'art 3D)_
  * **Mots clés**: _co-développement, portage, remaster, production d'art 3D, AAA, console/PC_
  * **Localisation**: Chine/Shanghai, Singapour, Cergy, Lyon, Montpellier, International
  * **Nombres d'employés**: 3600
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/virtuos)


* **[Visible Patient](https://www.visiblepatient.com/)**  
  * _Modélisation 3D personnalisée des patients à partir d'imagerie médicale (scanner, IRM) pour la planification chirurgicale._
  * **Mots clés**: _imagerie médicale, segmentation, modélisation 3D patient, planification chirurgicale, chirurgie assistée, dispositif médical_
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Visualisation
  * **Domaine d'application**: Médical/Biologique


* **[VizGraphics](https://vizgraphics.com/)**  
  * _Visualisation architecturale : rendus 3D photoréalistes, animations, visites virtuelles et expériences VR pour l'immobilier._
  * **Mots clés**: _visualisation architecturale, rendu photoréaliste, visite virtuelle, immobilier, réalité virtuelle, plans interactifs_
  * **Localisation**: États-Unis/Conifer
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


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


* **[YellowScan](https://www.yellowscan.com/)**  
  * _Systèmes LiDAR embarqués sur drone pour la cartographie et la topographie_
  * **Mots clés**: _lidar, drone, nuage de points, cartographie, topographie, matériel embarqué_
  * **Localisation**: France/Montpellier (Saint-Clément-de-Rivière)
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie
  * **Domaine d'application**: Géospatial/Cartographie, Patrimoine/Culture, Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.yellowscan.com/career/)


* **[Zag](https://www.zag.com/)**  
  * _Studio d'animation 3D (Miraculous, les aventures de Ladybug et Chat Noir)_
  * **Mots clés**: _séries d'animation, animation 3D, long métrage, licences/merchandising, jeunesse, Miraculous_
  * **Remarque**: _La franchise Miraculous est gérée depuis 2024 par Miraculous Corp., coentreprise de Mediawan et Zag._
  * **Localisation**: Paris, États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[ZSpace](https://zspace.com/)**  
  * _Ordinateurs portables de réalité augmentée/3D stéréoscopique sans casque, avec stylet d'interaction 3D, pour l'éducation (STEM, formation technique)_
  * **Mots clés**: _réalité augmentée, affichage stéréoscopique, suivi de tête, stylet 3D, éducation, formation professionnelle_
  * **Localisation**: États-Unis/San Jose
  * **Domaine scientifique/technique**: IHM/Haptique, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game


