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

### Site web: 

Le répertoire site/ contient un example de page web dynamique chargée dynamiquement depuis le fichier json présent sur github.

### Action push sur github: 

Après un push sur github, les éléments suivants sont mis à jours:
- La nouvelle base est vérifiée localement avec `python generate.py -C`
- Le contenu de site/ est déployé sur une page github.io: https://afig-asso.github.io/entreprises/
  - Cette page est accessible par le site de l'AFIG: https://www.asso-afig.fr/site/entreprises/


## Listing 

* **[2 minutes](http://2minutes.fr/)**  
  * _Studio production dessins animés._
  * **Localisation**: Paris, Angoulème, Canada, China
  * **Domaine scientifique/technique**: Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[2d3D Animations](https://www.2d3d-animations.com)**  
  * _Studio de production de films d'animations._
  * **Localisation**: Angoulème
  * **Domaine scientifique/technique**: Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.2d3d-animations.com/emploi/)


* **[3.0 Studio](https://www.3point0studio.com/en/home/)**  
  * _Studio d'animation pour films courts, TV, et création artisitques._
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[3DVerse](https://3dverse.com/)**  
  * _Cloud-Native Real-Time 3D Development Platform_
  * **Localisation**: Montreal
  * **Domaine scientifique/technique**: Modélisation, Web/Cloud/Big Data
  * **Domaine d'application**: Générique


* **[3DVF](https://3dvf.com/)**  
  * _Site/magazine spécialisé dans la production graphique_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Autres
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[4D Fun](https://4dfun.io/)**  
  * _Studio d'immersion virtuelle_
  * **Localisation**: USA/Los Angeles
  * **Domaine scientifique/technique**: Acquisition, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[4D Pipeline](https://www.4dpipeline.com/)**  
  * _Consulting pour application 3D_
  * **Localisation**: USA/California
  * **Domaine scientifique/technique**: Synthèse d'image
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.4dpipeline.com/jobs)


* **[4Dviews](https://www.4dviews.com/)**  
  * _Capture volumétrique_
  * **Localisation**: Grenoble
  * **Domaine scientifique/technique**: Autres
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Activision](https://www.activision.com/)**  
  * _Développeur de jeux vidéo_
  * **Localisation**: USA/Los Angeles, International
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.activision.com/)


* **[Adobe](https://www.adobe.com/fr/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Dévelopement d'outils créatifs_
  * **Remarque**: _Centre de recherche à Paris_
  * **Produits**: Photoshop, Substance 3D, Premiere, Illustrator, etc.
  * **Localisation**: USA, Canada, France/Paris, UK, India, International
  * **Nombres d'employés**: 20000
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Design/Fabrication
  * **Domaine d'application**: Art/Evenementiel, Cinéma/Films d'Animation/VFX


* **[Align Technologies](https://www.aligntech.com/)**  
  * _Dispositif et imagerie médicale pour l'orthodontie_
  * **Localisation**: USA, Suisse/Rotkreuz, Singapore, Brazil/São Paulo
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Alma](https://www.alma.fr/nos-activites/logiciels-cfao/)** (Alma Logiciels CFAO) 
  * _Edition de logiciels de Conception et Fabrication d'objets manufacturés._
  * **Localisation**: Grenoble,  Lyon,  Tarbes,  Paris,  Annecy
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication
  * **Domaine d'application**: Mécanique/Ingénierie civile, Automobile/Navigation/Aviation, Robotique/Systèmes autonomes
  * [_Jobs_](https://recrutement.alma.fr/cv/)


* **[Alteia](https://alteia.com/)**  
  * _Logiciels de Vision et IA._
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Mécanique/Ingénierie civile
  * [_Jobs_](https://alteia.com/company/#careers)


* **[AMD](https://www.amd.com/)**  
  * _Développement de processeurs et cartes graphiques: développement matériel et logiciel._
  * **Localisation**: USA, International
  * **Nombres d'employés**: 16000
  * **Domaine scientifique/technique**: Hardware, Synthèse d'image, IA, Web/Cloud/Big Data, Visualisation, Autres
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.amd.com/en/corporate/careers)


* **[Amplitude Studios](https://www.amplitude-studios.com/)**  
  * _Développement de jeu vidéos_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.amplitude-studios.com/#Careers)


* **[Anatoscope](https://www.anatoscope.com/)**  
  * _Logiciels pour l'anatomie 3D numérique personnalisé (orthopedie, dentaire, radiologique)._
  * **Localisation**: Grenoble,  Montpellier
  * **Domaine scientifique/technique**: Modélisation, Visualisation, Simulation, Géométrie, Imagerie, Reconstruction, Analyse de données
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.anatoscope.com/offres-demploi-grenoble-montpellier/)


* **[Animal Logic](https://animallogic.com/)**  
  * _Studio de création d'animation et effets visuels._
  * **Localisation**: Australia/Sydney, Canada/Vancouver, USA/Los Angeles
  * **Nombres d'employés**: 1300
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Apple](https://www.apple.com/)**  
  * **Localisation**: USA/Cupertino, International
  * **Nombres d'employés**: 160000
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, IA, Autres
  * **Domaine d'application**: Générique
  * [_Jobs_](https://jobs.apple.com)


* **[Arkane Studio](https://www.arkane-studios.com/fr)**  
  * _Développeur de jeu vidéo_
  * **Localisation**: France/Lyon, USA/Texas/Austin
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.arkane-studios.com/fr#studios)


* **[Artefacto](https://www.artefacto-ar.com/)**  
  * _Développement d'applications pour la Réalité augmentée pour la visualisation dans le domaine de l'immobilier, de l'industrie, ou de l'entrainement._
  * **Localisation**: Rennes (Betton)
  * **Domaine scientifique/technique**: VR/AR, Visualisation, Modélisation
  * **Domaine d'application**: Architecture/Immobilier, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.artefacto-ar.com/en/carrieres/)


* **[Asobo](https://www.asobostudio.com/)**  
  * _Développement de jeu vidéos_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.asobostudio.com/careers)


* **[Autodesk](https://www.autodesk.com/)**  
  * _Logiciels 3D, CAO, Conception, Design_
  * **Produits**: Maya,  3DS Max,  AutoCAD
  * **Localisation**: USA, Canada, India, UK, Singapore, Norway, International
  * **Nombres d'employés**: 10000
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Visualisation, Simulation, Design/Fabrication
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Automobile/Navigation/Aviation, Mécanique/Ingénierie civile
  * [_Jobs_](https://www.autodesk.com/careers/overview)


* **[AVT Simulation](https://www.avtsim.com/)**  
  * _VR simulation and serious game_
  * **Localisation**: USA/Orlando
  * **Domaine scientifique/technique**: VR/AR, Simulation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Sécurité/Défense, Automobile/Navigation/Aviation, Médical/Biologique
  * [_Jobs_](https://www.avtsim.com/careers/)


* **[Bentley](https://www.bentley.com/)**  
  * _Développement de logiciels pour l'ingénierie civile (simulation, visualisation, acquisition). Détient l'ancienne entreprise Francaise de reconstruction 3D "Acute 3D"._
  * **Localisation**: USA, UK, Netherlands, France/{Paris, Sophia}, Singapore, New Zealand, India
  * **Nombres d'employés**: 4000
  * **Domaine scientifique/technique**: Visualisation, Simulation, Vision, Modélisation, Reconstruction, Design/Fabrication
  * **Domaine d'application**: Mécanique/Ingénierie civile, Automobile/Navigation/Aviation
  * [_Jobs_](https://jobs.bentley.com/search)


* **[Blippar](https://www.blippar.com/)**  
  * _Développement d'outils pour la création de contenu en AR sur smartphone_
  * **Localisation**: UK/Londres
  * **Domaine scientifique/technique**: VR/AR, Modélisation, Web/Cloud/Big Data
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.blippar.com/careers#Jobs)


* **[Blue Spirit](https://www.spirit-prod.com/)**  
  * _Studio d'animation_
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Bobbypills](https://www.bobbypills.com/)**  
  * _Studio d'animation_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[BrandXR](https://www.brandxr.io/)**  
  * _No Code VR platform_
  * **Localisation**: USA/{Orlando, Detroit}
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[BUF](https://buf.com/)**  
  * _Création d'effets visuels (VFX) pour le cinéma._
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://buf.com/jobs/)


* **[Cavrnus](https://www.cavrnus.com/)**  
  * _Plateforme de Metaverse_
  * **Localisation**: USA/California/Carlsbad
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[Cesium](https://cesium.com/)**  
  * _Open Plateform for 3D Geospatial data_
  * **Localisation**: USA/Pennsylvania/Philadelphia
  * **Domaine scientifique/technique**: Modélisation, Imagerie, Analyse de données
  * **Domaine d'application**: Générique
  * [_Jobs_](https://cesium.com/careers/#opportunities)


* **[Chaos](https://www.chaos.com/)**  
  * _Logiciel de rendu et moteur de simulation_
  * **Produits**: VRay
  * **Localisation**: International
  * **Domaine scientifique/technique**: Synthèse d'image
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.chaos.com/)


* **[Christie](https://www.christiedigital.com/en-gb)**  
  * _Systèmes de projections vidéo et d'immersion (projecteur de cinéma, ecrans géants, projection immersive, etc)._
  * **Localisation**: USA/California, Canada/Ontario
  * **Nombres d'employés**: 2000
  * **Domaine scientifique/technique**: VR/AR, Visualisation
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers


* **[Circle Dental](https://www.circle.dental/)**  
  * _Plateforme numérique pour l'orthodontie_
  * **Localisation**: France/Montpellier
  * **Domaine scientifique/technique**: Imagerie, Design/Fabrication
  * **Domaine d'application**: Médical/Biologique


* **[CLO Virtual Fashion](https://www.clo3d.com/en/)**  
  * _Logiciel de simulation de vêtements virtuels_
  * **Produits**: Marvelous Designer,  Clo3D
  * **Localisation**: Korea, USA, International
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Design/Fabrication
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Mode/Vêtements/Accessoires
  * [_Jobs_](https://jobs.lever.co/clovirtualfashion)


* **[Cube Creative](https://www.cube-creative.com/)**  
  * _Studio d'animaiton_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Cyber Group Studios](https://www.cybergroupstudios.com/)**  
  * _Studio de création d'animation pour enfants_
  * **Localisation**: USA/Burbank, France/{Paris, Roubaix}
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.cybergroupstudios.com/about-us/#jobs)


* **[Dada! Animation](https://www.dada-animation.com/)**  
  * _Studio d'animation: Storytelling et conception créative, animation 3D, immersion et interactivité._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Dark Matters](https://www.darkmatters.one/)**  
  * _Studio de films et VFX_
  * **Localisation**: France/Paris
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.darkmatters.one/jobs/)


* **[Dassault Systèmes](https://www.3ds.com/fr/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Logiciels de CAO, Design et Simulation._
  * **Produits**: Catia,  SolidWorks
  * **Localisation**: France/{Paris, Aix en Provence}, USA, China, International
  * **Nombres d'employés**: 20000
  * **Domaine scientifique/technique**: Modélisation, Simulation, Visualisation, Géométrie, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation, Mécanique/Ingénierie civile, Médical/Biologique
  * [_Jobs_](https://careers.3ds.com/)


* **[DigitalFish](https://www.digitalfish.com/)**  
  * _Outils pour l'animation 3D, 2D et VR_
  * **Localisation**: USA/California/San Mateo
  * **Domaine scientifique/technique**: Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.digitalfish.com/careers/)


* **[Disney](https://www.disneystudios.com/)**  
  * **Remarque**: _<a href="https://studios.disneyresearch.com/">Disney Research</a> implanté à Zurich est l'un des plus gros centre de R&amp;D en graphique._
  * **Localisation**: USA, International
  * **Nombres d'employés**: 220000
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Visualisation, Design/Fabrication, VR/AR, IA, Autres
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Robotique/Systèmes autonomes
  * [_Jobs_](https://jobs.disneycareers.com/)


* **[DON'T NOD](https://dont-nod.com/en/)**  
  * _Développement de jeu vidéos_
  * **Localisation**: Paris, Canada/Montréal
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://dont-nod.com/en/careers/)


* **[DreamWall](https://www.dreamwall.be/en)**  
  * _Création d'histoires animées_
  * **Localisation**: Belgique/Charleroix
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dreamwall.be/en/jobs)


* **[Dronisos](https://www.dronisos.com/)**  
  * _Spectacle de drones_
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: Acquisition, VR/AR
  * **Domaine d'application**: Art/Evenementiel


* **[Dynamixyz](https://www.linkedin.com/company/dynamixyz)**  
  * _Markerless Facial Motion Capture_
  * **Localisation**: France/Rennes
  * **Domaine scientifique/technique**: Animation, Acquisition, Reconstruction, Vision, IA, Analyse de données
  * **Domaine d'application**: Jeu Vidéo


* **[Easy Mile](https://easymile.com/)**  
  * _Logiciels et traitement de données pour la voiture autonome_
  * **Localisation**: France/Toulouse, Germany/Berlin
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Analyse de données
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/easymile/jobs)


* **[Effigy 3D](https://effigy-3d.com/)**  
  * _Studio de creation digitale 3D: Scan 3D, Mocap, Avatars._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Acquisition, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Emersya](https://emersya.com/en/home)**  
  * _Creation de modèles de produits en 3D et d'expériences interactives_
  * **Localisation**: France/Montpellier
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Design/Fabrication
  * **Domaine d'application**: Générique


* **[Epic Games](https://www.epicgames.com/site/en-US/home)**  
  * _Développeur de jeu et du moteur 3D Unreal Engine_
  * **Localisation**: USA, International
  * **Nombres d'employés**: 2000
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.epicgames.com/site/en-US/careers/jobs)


* **[Episkin](https://www.episkin.com/)**  
  * _Modèle In-Vitro de peau_
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Imagerie, Simulation
  * **Domaine d'application**: Médical/Biologique


* **[ESI](https://www.esi-group.com/)**  
  * _Entreprise Francaise de simulation, prototypage virtuel, et Double numérique pour l'industrie_
  * **Localisation**: France/{Paris, Lyon, Bordeaux}, International
  * **Nombres d'employés**: 1000
  * **Domaine scientifique/technique**: Modélisation, Simulation
  * **Domaine d'application**: Automobile/Navigation/Aviation, Sécurité/Défense, Mécanique/Ingénierie civile
  * [_Jobs_](https://www.esi-group.com/join-us)


* **[EVA](https://www.eva.gg/fr/)** (Esports Virtual Arenas) 
  * _Scenes virtuelles et compétitions pour des jeux de eSports_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Modélisation, VR/AR, Analyse de données
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.eva.gg/fr/careers/jobs/list)


* **[Falcons Creatrive](https://falconscreativegroup.com/)**  
  * _Creation d'expérience immersive pour les parcs d'attractions_
  * **Localisation**: USA/Orlando
  * **Domaine scientifique/technique**: VR/AR, Autres
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel
  * [_Jobs_](https://falconscreativegroup.com/about-us/careers/)


* **[Fix Studio](https://www.fixstudio.com)**  
  * _Studio d'animation_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Focus Entrainment](https://www.focus-entmt.com/fr)**  
  * _Développement de jeu vidéos_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://focusentertainment.recruitee.com/)


* **[Gameloft](https://www.gameloft.com/)**  
  * _Développement de jeux vidéos orientés mobile._
  * **Localisation**: France/Paris, USA, Canada, Spain, India, International
  * **Nombres d'employés**: 3600
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.gameloft.com/corporate/fr/jobs/apply/)


* **[GeometryFactory](https://geometryfactory.com/)**  
  * _Développement de bibliothèque logicielle open-source de calcul géométrique._
  * **Produits**: [the Computational Geometry Algorithms Library (CGAL)](https://www.cgal.org/)
  * **Localisation**: France/Sophia Antipolis
  * **Domaine scientifique/technique**: Reconstruction, Géométrie
  * **Domaine d'application**: Générique
  * [_Jobs_](https://geometryfactory.com/open-positions/)


* **[Gleamer](https://www.gleamer.ai/)**  
  * _Radiologie avec IA_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA, Visualisation, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Golaem](https://golaem.com/)**  
  * _Logiciel de creation et controle de foules de personnes. Utilisé dans de nombreux films avec VFX_
  * **Localisation**: Rennes
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Google](https://about.google/)**  
  * **Remarque**: _<a href="https://ai.google/">Google AI</a> est une entité de recherche développant des projets en graphique_
  * **Localisation**: USA/Mountain View, International
  * **Nombres d'employés**: 140000
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, IA, Vision, Autres
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.google.com/)


* **[GoPro Technology](https://gopro.com/fr/fr/)**  
  * _Systèmes de caméras sportives._
  * **Remarque**: _Entité R&D en France à Issy Les Moulineaux._
  * **Localisation**: Paris, International
  * **Domaine scientifique/technique**: Animation, Acquisition, Reconstruction, Vision, Imagerie
  * **Domaine d'application**: Générique


* **[GridRaster](https://gridraster.com/)**  
  * _Spatial Mapping, Recognition and Alignment for XR_
  * **Localisation**: USA/California/Mountain View, India/Bengaluru
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, VR/AR
  * **Domaine d'application**: Mécanique/Ingénierie civile, Automobile/Navigation/Aviation
  * [_Jobs_](https://gridraster.com/careers-jobs/)


* **[Harfang3D](https://www.harfang3d.com/)**  
  * _Outils de visualisation 3D en temps réel, C++ et Python, pour l'industrie, la recherche et l'enseignement,_
  * **Localisation**: Orléans
  * **Domaine scientifique/technique**: Visualisation, Simulation, VR/AR
  * **Domaine d'application**: Mécanique/Ingénierie civile, Entrainement/Formation/Serious Game


* **[Hexagon](https://hexagon.com/)**  
  * _Measuring technology and geospatial tools and software_
  * **Localisation**: Sweden/Stockholm
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie, Vision, VR/AR
  * **Domaine d'application**: Générique


* **[I-MC](https://www.i-mc.fr/)**  
  * _Machine autonomes pour des environnement contraints: aeronotique, spatial, défense_
  * **Localisation**: France/Pertuis
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation, Sécurité/Défense


* **[IGO](https://www.igo.fr/)**  
  * _Données géographiques 3D_
  * **Localisation**: France/Montpellier
  * **Domaine scientifique/technique**: Modélisation, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[Ikigai Games](https://www.gfc.ikigai.games/)**  
  * _Association pour la création de jeux vidéo pédagogiques._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Analyse de données, Web/Cloud/Big Data, Autres
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.gfc.ikigai.games/recrutement)


* **[Illumination Studios Paris](https://www.illuminationstudiosparis.com/)**  
  * _Création de films d'animation et d'effets visels._
  * **Localisation**: Paris
  * **Nombres d'employés**: 700
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.illuminationstudiosparis.com/careers/)


* **[Imageens](https://www.imageens.com/)**  
  * _Dispositif médical pour la prévention d'accident cardiovasculaire_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Analyse de données, Imagerie, IA
  * **Domaine d'application**: Médical/Biologique


* **[InitML](https://clipdrop.co/)**  
  * _Creation d'images par IA_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA, Vision
  * **Domaine d'application**: Générique


* **[InnerSpace VR](https://www.innerspacevr.com/)**  
  * _Studio de création d'espace immersifs_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[InSimo](https://www.insimo.com/)**  
  * _Logiciels de simulation pour la formation médicale et chirurgicale._
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Simulation, Modélisation, Animation, Visualisation
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.insimo.com/fr/career-2/)


* **[Kayrros](https://www.kayrros.com/)**  
  * _Satellite-based technology to measrure the footprint of human activity on the environment_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Autres


* **[Kinetix](https://kinetix.tech/)**  
  * _Création d'animation 3D d'humain à partir de capture de video sur smartphone._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Animation, IA, Acquisition
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://kinetix-tech.welcomekit.co/)


* **[Kitware](https://www.kitware.com/)**  
  * _Développement de logiciels scientifique, de visualisation, et de compilation. Beaucoup de développement open-source._
  * **Produits**: ParaView,  VTK,  3D Slicer,  ITK,  CMake
  * **Localisation**: USA, France/Lyon
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Visualisation, Reconstruction, Simulation, Géométrie, Imagerie, Vision, IA, Analyse de données
  * **Domaine d'application**: Médical/Biologique, Automobile/Navigation/Aviation, Mécanique/Ingénierie civile, Autres
  * [_Jobs_](https://www.kitware.com/careers/)


* **[Lectra](https://www.lectra.com/fr)**  
  * _Logiciels de conceptions professionels: Model, Automobile, Ameublement_
  * **Localisation**: France/Paris, International
  * **Nombres d'employés**: 1500
  * **Domaine scientifique/technique**: Modélisation, Simulation, Design/Fabrication
  * **Domaine d'application**: Mode/Vêtements/Accessoires


* **[Left Angle](https://www.left-angle.com/?language=en)**  
  * _Développeur d'outils de VFX, Compositing et Motion Design_
  * **Localisation**: Grenoble
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Les fées spéciales](https://les-fees-speciales.coop/)**  
  * _Création d'animation 2D/3D, immersives et interactives._
  * **Localisation**: Montpellier
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[Les Tontons Truqueurs](https://www.lestontonstruqueurs.com/)**  
  * _Prévisualisation et VFX en temps réels._
  * **Localisation**: Montpellier, Paris
  * **Domaine scientifique/technique**: Synthèse d'image, Vision, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lightbulb Crew](https://lightbulbcrew.fr/)**  
  * _Video Game development_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Autres
  * **Domaine d'application**: Jeu Vidéo


* **[Luxion](https://www.luxion.com/)**  
  * _Logiciel de rendu d'images_
  * **Localisation**: USA/Costa Mesa, Denmark/Aarhus
  * **Domaine scientifique/technique**: Synthèse d'image
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[M-Covision](https://fr.mcovision.com/)**  
  * _Consulting de R&D en vision et ML_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, IA
  * **Domaine d'application**: Générique


* **[Magic Leap](https://www.magicleap.com/)**  
  * _Lunettes de réalité augmentée_
  * **Localisation**: USA/Florida, USA/Colorado
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Générique
  * [_Jobs_](https://resources.magicleap.com/en-us/careers)


* **[Manus](https://www.manus-meta.com/)**  
  * _Motion capture and extended reality system_
  * **Localisation**: Netherlands/Eindhoven
  * **Domaine scientifique/technique**: Acquisition, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Entrainement/Formation/Serious Game


* **[MassVirtual](https://massvirtual.com/)**  
  * _VR experience_
  * **Localisation**: USA/Orlando
  * **Domaine scientifique/technique**: VR/AR, Simulation
  * **Domaine d'application**: Automobile/Navigation/Aviation


* **[Mercenaries Engineering](http://guerillarender.com/)**  
  * _Développement de logiciel de rendu (Guerilla Render) et d'animation (Rumba) pour la création de films d'animation._
  * **Produits**: [Guerilla Render](http://guerillarender.com/), [Rumba Animation](https://rumba-animation.com/)
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Synthèse d'image, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[MicroFilms](http://www.microfilms.fr/machinerie-tv/)**  
  * _Capture de video pour la télévision_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Acquisition, Imagerie
  * **Domaine d'application**: Art/Evenementiel, Cinéma/Films d'Animation/VFX


* **[Microsoft](https://www.microsoft.com/)**  
  * **Remarque**: _<a href=\"https://www.microsoft.com/en-us/research/research-area/graphics-multimedia/?\">Microsoft research</a> est active en informatique graphique._
  * **Localisation**: USA/Redmond, International
  * **Nombres d'employés**: 180000
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, IA, Synthèse d'image, Autres
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.amd.com/en/corporate/careers)


* **[Mikros Animation](https://www.mikrosanimation.com/fr/)**  
  * _Creation d'Animation 3D_
  * **Remarque**: _Sous-groupe de Technicolor_
  * **Localisation**: Canada/Montreal, France/Paris, USA/Los Angeles, UK/London
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.mikrosanimation.com/en/people-and-culture/careers/)


* **[MocapLab](https://www.mocaplab.com/)**  
  * _Studio et R&amp;D pour la capture de mouvement._
  * **Localisation**: Paris (Aubervilliers)
  * **Domaine scientifique/technique**: Acquisition, Analyse de données, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Jeu Vidéo


* **[ModaLive](https://www.modalive.fr/)**  
  * _Virtual try-on de vêtements de mode._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie, Vision, Modélisation
  * **Domaine d'application**: Mode/Vêtements/Accessoires


* **[Modulo Pi](https://www.modulo-pi.com/)**  
  * _Media server solutions_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Art/Evenementiel


* **[Movea Tech](https://www.movea-tech.com/)**  
  * _Motion tracking et interface utilisateur, AR/VR._
  * **Localisation**: Grenoble
  * **Domaine scientifique/technique**: Acquisition, VR/AR, IHM/Haptique
  * **Domaine d'application**: Générique


* **[MPC](https://www.mpcfilm.com/fr/)**  
  * _Creation de VFX pour le cinéma_
  * **Remarque**: _Sous-groupe de Technicolor_
  * **Localisation**: France/Paris, Belgique/Liège, Canada/Montreal
  * **Domaine scientifique/technique**: Synthèse d'image, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.mpcvfx.com/careers/)


* **[Newtone Technologies](https://www.linkedin.com/company/newtone-technologies/)**  
  * _Research & Innovation company expert in Image Analysis for skin and hair appearance._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Next Limit](https://nextlimit.com/)**  
  * _Moteur de rendu et de simulation_
  * **Produits**: [RealFlow](https://realflow.com/), [Maxwell Render](https://maxwellrender.com/)
  * **Localisation**: Spain/Madrid
  * **Domaine scientifique/technique**: Synthèse d'image
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[nTop](https://www.ntop.com/)**  
  * _Modélisation et simulation mécanique à partir de surfaces implicites._
  * **Localisation**: USA/New York
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication, Simulation
  * **Domaine d'application**: Mécanique/Ingénierie civile
  * [_Jobs_](https://boards.greenhouse.io/ntop)


* **[NVidia](https://www.nvidia.com/)**  
  * _Développement de cartes graphiques materiel et logiciel_
  * **Remarque**: _NVidia Research est présent partout dans le monde, dont en France._
  * **Localisation**: USA/California/Santa Clara, France/Paris, International
  * **Nombres d'employés**: 13000
  * **Domaine scientifique/technique**: Synthèse d'image, IA, Hardware, Simulation, Web/Cloud/Big Data, Visualisation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite)


* **[OptiTrack](https://optitrack.com/)**  
  * _Motion capture pour les effets spéciaux au cinéma_
  * **Localisation**: USA/Oregon/Corvallis
  * **Domaine scientifique/technique**: Acquisition, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://phg.tbe.taleo.net/phg02/ats/careers/v2/searchResults?org=PLANAR&cws=46)


* **[Otoy](https://home.otoy.com/)**  
  * _Logiciel de rendu graphique sur le cloud, et capture_
  * **Produits**: Octane Render
  * **Localisation**: USA/Los Angeles
  * **Domaine scientifique/technique**: Synthèse d'image, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Overlay](https://overlaymr.com/)**  
  * _Plateforme de réalité augmentée_
  * **Produits**: Figmin XR
  * **Localisation**: USA/Portland
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Perception4D](https://perception4d.com/)**  
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Vision, Acquisition, Visualisation, Géométrie, IA
  * **Domaine d'application**: Générique


* **[Pixel Wizards](https://pixel-wizards.com/)**  
  * _Studio de jeu vidéos indie, jeux en tours par tours_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Modélisation, Animation, IA
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://pixel-wizards.com/jobs/)


* **[Praxinos](https://www.praxinos.coop/)**  
  * _Développement d'outils créatifs pour l'animation._
  * **Remarque**: _SARL Coopérative, mot clés: Animation 2D, Storyboard, Drawing, Realtime 3D_
  * **Produits**: Iliad,  Epos,  Odyssey,  Ulis,  etc.
  * **Localisation**: France/Metz
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Presagis](https://www.presagis.com/en/)**  
  * _Simulation d'environment dynamique pour la prédiction à large échelle (infrastructure, défense, désastre, etc)_
  * **Localisation**: Canada/Montréal, USA/Orlando, France/Paris, Italy, UK
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, IA, Analyse de données
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation, Mécanique/Ingénierie civile
  * [_Jobs_](https://cae.wd3.myworkdayjobs.com/Presagis/jobs)


* **[Primaa](https://www.primaalab.com/)**  
  * _Detection de pathologies par IA_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA, Visualisation, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Prophesee.AI](https://www.prophesee.ai/)**  
  * _Dedicated vision sensors and AI for machines_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Générique


* **[Qarnot Computing](https://qarnot.com/)**  
  * _Calculs sur le Cloud._
  * **Localisation**: Paris (Montrouge)
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://qarnot.com/en/recruiting)


* **[Quantacell](https://www.quantacell.com/)**  
  * _Artificial Intelligence for Biomedical Analysis_
  * **Localisation**: France/Montpellier
  * **Domaine scientifique/technique**: IA, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Quantic Dream](https://www.quanticdream.com/fr)**  
  * _Développement de jeu vidéos_
  * **Localisation**: Paris, Canada/Montréal
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://jobs.eu.lever.co/quanticdream)


* **[Roblox](https://www.roblox.com/)**  
  * _Plateforme de jeu ouvert orienté création et metavers_
  * **Remarque**: _Développe une entité de <a href="https://research.roblox.com/">recherche internationale</a>_
  * **Localisation**: USA/Los Angeles
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Web/Cloud/Big Data, VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://careers.roblox.com/)


* **[Roboflow](https://roboflow.com/)**  
  * _Computer Vision models_
  * **Localisation**: USA/{New York, San Francisco}
  * **Domaine scientifique/technique**: Analyse de données, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://roboflow.com/careers)


* **[Saint-Gobain](https://www.saint-gobain.com/fr)**  
  * _Construction de bâtiments_
  * **Localisation**: France/Paris, International
  * **Domaine scientifique/technique**: Synthèse d'image, Simulation, Visualisation
  * **Domaine d'application**: Architecture/Immobilier, Mécanique/Ingénierie civile


* **[Shot Over](https://shotover.com/)**  
  * _Système d'imagerie gyro stabilisée pour des prises de vues sur véhicules (cinéma, sécurité, défense, etc)._
  * **Localisation**: USA/Colorado
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel, Sécurité/Défense


* **[SideFX](https://www.sidefx.com/)**  
  * _Développement du logiciel de VFX Houdini - Modélisation et Animation procédurale, simulation._
  * **Produits**: Houdini
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.sidefx.com/careers/)


* **[Simerics](https://www.simerics.com/)**  
  * _CAD simulation_
  * **Localisation**: USA/Washington/Seatle
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://www.simerics.com/careers/)


* **[Solid Anim](https://www.solidanim.com/en/)**  
  * _Studio spécialisé en animation 3D, MOCAP, et production virtuelle._
  * **Localisation**: Bordeaux,  Angoulème
  * **Domaine scientifique/technique**: Animation, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[SolidAnim](https://www.solidanim.com/)**  
  * _Studio de production d'animation et Mocap_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Sony CSL](https://csl.sony.fr/)**  
  * _Centre de recherche de Sony - Computer Science Laboratories: Creativy, Music, Language, Sustainability_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA, Analyse de données, Vision, Imagerie, VR/AR
  * **Domaine d'application**: Générique


* **[SpirOPS](https://www.spirops.com/)**  
  * _Approches d'IA pour l'industrie et le loisir: foule virtuelles, véhicules autonomes, assistants_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA, Animation, Simulation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Automobile/Navigation/Aviation, Jeu Vidéo
  * [_Jobs_](https://www.spirops.com/jobs.php?lg=en)


* **[Square Enix](https://www.square-enix-games.com/fr_FR/home)**  
  * _Editeur de jeu vidéos_
  * **Localisation**: USA/California/Los Angeles, UK/London, France/Paris, Allemagne/Hamburg, Japan/Tokyo
  * **Domaine scientifique/technique**: Autres
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://apply.workable.com/square-enix/)


* **[Stability AI](https://stability.ai/)**  
  * _IA générative pour le son, l'image et les modèles 3D._
  * **Localisation**: UK/London, Japan/Tokyo
  * **Domaine scientifique/technique**: IA, Vision, Autres
  * **Domaine d'application**: Autres


* **[StreamRoller](https://www.steamrollerstudios.com/)**  
  * _Studio pour film d'animation, jeux et expérience immersive pour parc d'attraction_
  * **Localisation**: USA/Mount Dora
  * **Domaine scientifique/technique**: Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.steamrollertechnologies.com/careers)


* **[Strollhunt](https://strollhunt.com/)**  
  * _Jeux dans la ville en AR_
  * **Localisation**: UK/London
  * **Domaine scientifique/technique**: Vision, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Studio Draconis](https://studio-draconis.com/)**  
  * _Développement de jeux vidéos RPG_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA
  * **Domaine d'application**: Jeu Vidéo


* **[Superprod Animation](https://www.superprod.net/fr)**  
  * _Producteur indépendant européen de films et des séries d'animation et de fiction._
  * **Localisation**: France/Paris, France/Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[SysNav](https://www.sysnav.fr/)**  
  * _Géolocalisation de personnes et véhicules_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation, Médical/Biologique


* **[Take-Two Interactive](https://www.take2games.com/)**  
  * _Développement de jeux vidéo, et détenant d'autres entreprises (Rockstar, 2K) ainsi que l'équipe de R&D Dynamixyz à Rennes._
  * **Localisation**: USA, France/Paris (Palaiseau), International
  * **Nombres d'employés**: 6000
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.take2games.com/jobs)


* **[Technicolor Creative Studios](https://www.technicolorcreative.com/)**  
  * _Entreprise d'animation et de VFX internationale possédant les studios MPC, The Mill, Mikros Animation, et Technocolor Games._
  * **Localisation**: France/Paris, Canada/{Montréal, Toronto}, USA/{New York, Chicago, Los Angeles}, UK/London, International
  * **Nombres d'employés**: 12000
  * **Domaine scientifique/technique**: Synthèse d'image, Animation, Modélisation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.technicolorcreative.com/jobs/)


* **[Technicolor Games](https://www.technicolorcreative.com/fr/studios/technicolor-games/)**  
  * _Creation de Jeux Vidéos_
  * **Remarque**: _Sous-groupe de Technicolor_
  * **Localisation**: Canada/Paris, UK/London
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Technodigit](https://www.linkedin.com/company/technodigit-sarl/)**  
  * _3D point cloud processing from measurement points. Part of Hexagon company._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie, Vision, VR/AR
  * **Domaine d'application**: Générique


* **[Thales](https://www.thalesgroup.com/fr)**   :small_orange_diamond: _[Entreprise majeure avec R&D avancée en France]_
  * _Multi-nationale française à forte composante R&amp;D développant des produits pour l'aérospatiale, la défense, et la sécurité tel que la biométrie._
  * **Localisation**: France/Paris, International
  * **Nombres d'employés**: 80000
  * **Domaine scientifique/technique**: Reconstruction, Vision, Imagerie
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.thalesgroup.com/fr/candidat)


* **[The Foundry](https://www.foundry.com/)**  
  * _Développement de logiciels pour la création 3D et VFX_
  * **Localisation**: UK, USA, Australia
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://apply.workable.com/foundry/)


* **[The Game Bakers](https://www.thegamebakers.com/)**  
  * _Studio de jeux vidéo indépendant pour jeux 2D_
  * **Localisation**: Montpellier
  * **Domaine scientifique/technique**: Autres
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.thegamebakers.com/category/jobs/)


* **[The Mill](https://www.themill.com/)**  
  * _Creation de VFX pour la publicité_
  * **Remarque**: _Sous-groupe de Technicolor_
  * **Localisation**: France/Paris, USA/{New York, Los Angeles}, China/Shanghai, Korea/Seoul
  * **Domaine scientifique/technique**: Synthèse d'image, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.themill.com/people-and-culture/careers/)


* **[The Yard VFX](http://theyard-vfx.com/)**  
  * _Création d'effets visuels photoréalistes pour le cinéma (VFX)_
  * **Mots clés**: _Graphics, VFX, Pipeline_
  * **Localisation**: Paris,  Montpellier
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Visualisation, Acquisition, Reconstruction, Simulation, Géométrie, Vision, Imagerie, IA
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://theyard-vfx.com/contacts/)


* **[Theia](https://www.theiamarkerless.ca/)**  
  * _Markeless Motion Capture System_
  * **Localisation**: Canada/Ontario/Kingston
  * **Domaine scientifique/technique**: Animation, Acquisition
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.theiamarkerless.ca/jobs/)


* **[TVPaint](https://www.tvpaint.com/)**  
  * _Logiciel d'animation 2D._
  * **Localisation**: Metz
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Ubisoft](https://www.ubisoft.com/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Développeur de jeux vidéo Français, possédant de nombreux studios à l'international_
  * **Remarque**: _Ubisoft a créé une entité de recherche à Bordeaux appelée "La Forge" à l'image de celle existante à Montréal._
  * **Localisation**: France/{Paris, Bordeaux, Annecy}, Canada/{Montreal, Toronto}, USA/{San Francisco, New York, Atlanta}, India, Allemagne, Pologne, International
  * **Nombres d'employés**: 20000
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.ubisoft.com/en-us/company/careers)


* **[Unity Technologies](https://unity.com/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Développement du moteur de jeu Unity et produits associés_
  * **Remarque**: _Equipes de développement en France: <a target="_blank" href="https://unity.com/srp/High-Definition-Render-Pipeline">rendu graphique</a> (Paris, Grenoble), <a target="_blank" href="https://unity.com/products/pixyz">geometry processing</a> (Compiegne, Grenoble) et <a target="_blank" href="https://unity.com/products/sentis">IA</a> (Lille)_
  * **Localisation**: USA, France/{Paris, Grenoble, Compiegne, Lille}, Canada, Denmark, Finland, UK, Lituanie, Germany, Belgique, Suisse, International
  * **Nombres d'employés**: 7000
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.unity.com/)


* **[UVR](https://www.united-vr.com/)** (United Visual Researchers) 
  * _Logiciel d'analyse optique et de rendu avancé (spectral, lumière polarisée)._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Synthèse d'image, Simulation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://uvr.welcomekit.co/)


* **[Vicon](https://www.vicon.com/)**  
  * _Système de Motion Capture_
  * **Localisation**: UK/Oxford
  * **Domaine scientifique/technique**: Acquisition, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.vicon.com/careers/)


* **[Virtualis](https://virtualisvr.com/)**  
  * _Rééducation en réalité virtuelle_
  * **Localisation**: France/Montpellier
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Médical/Biologique


* **[Virtuos](https://www.virtuosgames.com/)**  
  * _Studio développement de jeu vidéo_
  * **Localisation**: China/Shangai, Singapore, France/Paris, France/Montpellier
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[VizGraphics](https://www.vizgraphics.com/)**  
  * _Rendu de scènes spécialisé dans l'architecture et les scènes d'intérieur._
  * **Localisation**: USA/Conifer
  * **Domaine scientifique/technique**: Synthèse d'image, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/Immobilier


* **[Wacom](https://www.wacom.com/)**  
  * _Tablettes et écran tactile pour la création graphique_
  * **Localisation**: Japan/Saitama, Germany/Dusseldorf, USA/Oregon/Portland, International
  * **Domaine scientifique/technique**: Hardware, Acquisition
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.wacom.com/en-us/about-wacom/careers-at-wacom)


* **[Wandercraft](https://en.wandercraft.eu/)**  
  * _Systèmes d'exosquelettes_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Simulation, IA
  * **Domaine d'application**: Robotique/Systèmes autonomes


* **[Wassa](https://wassa.io/fr/)**  
  * _Agence digitale pour applications mobiles, traitement d'image et Data Science_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IHM/Haptique, Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://wassa.io/fr/offres-emploi/)


* **[WetaFX](https://www.wetafx.co.nz/)**  
  * _Effets visuels pour le cinéma_
  * **Remarque**: _Entreprise majeure du domaine des VFX avec équipe de recherche active._
  * **Localisation**: New Zealand/Wellington
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.wetafx.co.nz/)


* **[YellowScan](https://www.yellowscan-lidar.com/)**  
  * _Scan LiDAR pour application industrielles_
  * **Localisation**: Montpellier (Saint-Clément-de-RiviInterère)
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie
  * **Domaine d'application**: Histoire/Archéologie/Muséographie, Mécanique/Ingénierie civile
  * [_Jobs_](https://www.yellowscan-lidar.com/about/career/)


* **[Zag](https://www.zag.com/)**  
  * _Studio d'animation 3D_
  * **Localisation**: USA/Santa Monica, France/Paris
  * **Domaine scientifique/technique**: Animation, Synthèse d'image, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[ZSpace](https://zspace.com/)**  
  * _Stylet d'interaction 3D_
  * **Localisation**: USA/San Jose
  * **Domaine scientifique/technique**: IHM/Haptique
  * **Domaine d'application**: Générique


