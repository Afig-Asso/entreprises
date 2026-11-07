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
  * _Studio production dessins animés._
  * **Localisation**: Paris, Angoulême, Canada/Montréal, Chine/Nanjing
  * **Domaine scientifique/technique**: Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[3.0 Studio](https://www.3point0studio.com/en/home/)**  
  * _Studio d'animation pour films courts, TV, et créations artistiques._
  * **Localisation**: Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[3DVerse](https://3dverse.com/)**  
  * _Cloud-Native Real-Time 3D Development Platform_
  * **Localisation**: Canada/Montréal
  * **Domaine scientifique/technique**: Modélisation, Web/Cloud/Big Data
  * **Domaine d'application**: Générique


* **[3DVF](https://3dvf.com/)**  
  * _Site/magazine spécialisé dans la production graphique_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[4D Fun](https://4dfun.io/)**  
  * _Capture volumétrique, streaming 4D et expériences XR_
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Acquisition, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[4D Pipeline](https://www.4dpipeline.com/)**  
  * _Consulting pour application 3D_
  * **Localisation**: États-Unis/California
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.4dpipeline.com/jobs)


* **[4Dviews](https://www.4dviews.com/)**  
  * _Capture volumétrique_
  * **Localisation**: Grenoble
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Activision](https://www.activision.com/)**  
  * _Développeur de jeux vidéo_
  * **Remarque**: _Filiale de Microsoft (Xbox) depuis le rachat d'Activision Blizzard en octobre 2023._
  * **Localisation**: États-Unis/Los Angeles, International
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.activision.com/)


* **[Adobe](https://www.adobe.com/fr/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Dévelopement d'outils créatifs_
  * **Remarque**: _Centre de recherche à Paris_
  * **Produits**: Photoshop, Substance 3D, Premiere, Illustrator, etc.
  * **Localisation**: États-Unis, Canada, France/Paris, Royaume-Uni, Inde, International
  * **Nombres d'employés**: 31000
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Design/Fabrication
  * **Domaine d'application**: Art/Evenementiel, Cinéma/Films d'Animation/VFX


* **[Agenium](https://www.agenium.com/)**  
  * _Simulation numérique_
  * **Localisation**: Toulouse, Saint-Germain-en-Laye, Rennes
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication, Modélisation, Animation
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation, Entrainement/Formation/Serious Game


* **[Aledia](https://www.aledia.com/)**  
  * _Concepteur de micro-LED à base de nanofils 3D sur silicium pour les écrans, notamment de réalité augmentée._
  * **Localisation**: Champagnier
  * **Nombres d'employés**: 225
  * **Domaine scientifique/technique**: Hardware, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique


* **[Align Technology](https://www.aligntech.com/)**  
  * _Dispositif et imagerie médicale pour l'orthodontie_
  * **Localisation**: États-Unis, Suisse/Rotkreuz, Singapour, Brésil/São Paulo
  * **Nombres d'employés**: 20000
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Alma](https://www.alma.fr/nos-activites/logiciels-cfao/)** (Alma Logiciels CFAO) 
  * _Edition de logiciels de Conception et Fabrication d'objets manufacturés._
  * **Localisation**: Grenoble, Lyon, Tarbes, Paris, Annecy
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation, Robotique/Systèmes autonomes
  * [_Jobs_](https://recrutement.alma.fr/)


* **[Alteia](https://alteia.com/)**  
  * _Logiciels de Vision et IA._
  * **Remarque**: _Racheté par GE Vernova en 2025 (intégré à GridOS Visual Intelligence)._
  * **Localisation**: Toulouse, Paris
  * **Nombres d'employés**: 80
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Géospatial/Cartographie, Industrie/Manufacturing/CAO, Énergie/Environnement
  * [_Jobs_](https://careers.alteia.com/)


* **[AMA XpertEye](https://www.amaxperteye.com/)** (AMA) 
  * _Éditeur de solutions d'assistance à distance et de workflows en réalité augmentée sur lunettes connectées._
  * **Localisation**: Rennes
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Web/Cloud/Big Data
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Médical/Biologique


* **[AMD](https://www.amd.com/)**  
  * _Développement de processeurs et cartes graphiques: développement matériel et logiciel._
  * **Localisation**: États-Unis, International
  * **Nombres d'employés**: 31000
  * **Domaine scientifique/technique**: Hardware, Rendu temps réel/Moteurs 3D, Rendu offline/VFX
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.amd.com/careers-home/jobs)


* **[Amplitude Studios](https://www.amplitude-studios.com/)**  
  * _Développement de jeu vidéos_
  * **Remarque**: _Studio redevenu indépendant en novembre 2024 (rachat à Sega par son équipe dirigeante)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.amplitude-studios.com/#Careers)


* **[Anatoscope](https://www.anatoscope.com/)**  
  * _Logiciels pour l'anatomie 3D numérique personnalisé (orthopedie, dentaire, radiologique)._
  * **Remarque**: _Filiales : Circle Dental, COPOPSA, Capteo Tech, Anatopass. Siège à Meylan._
  * **Localisation**: Grenoble, Montpellier
  * **Domaine scientifique/technique**: Modélisation, Géométrie, Simulation, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Andarta Pictures](https://andarta-pictures.com/)**  
  * _Studio de fabrication d'animation 2D avec un pipeline R&D basé sur Blender mêlant 2D et 3D._
  * **Localisation**: Bourg-lès-Valence
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://andarta-pictures.com/fr/recrutement/)


* **[Animaj](https://www.animaj.com/)**  
  * _Groupe média jeunesse (Pocoyo, Maya l'abeille) développant ses propres outils d'animation assistée par IA (Sketch-to-Motion, PoseBind)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: IA générative (image/3D), Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.animaj.com/careers)


* **[Animal Logic](https://animallogic.com/)**  
  * _Studio de création d'animation et effets visuels._
  * **Remarque**: _Racheté par Netflix (2022) ; fait partie de Netflix Animation Studios depuis 2024._
  * **Localisation**: Australie/Sydney, Canada/Vancouver, États-Unis/Burbank
  * **Nombres d'employés**: 1300
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Ankama](https://www.ankama.com)**  
  * _Studio transmédia : jeux vidéo en ligne (Dofus, Wakfu, Waven), films et séries d'animation, édition._
  * **Localisation**: Roubaix
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Animation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Ansys](https://ansys.synopsys.com/products/optics/ansys-speos)** (Ansys, part of Synopsys (ex-OPTIS)) 
  * _Éditeur de simulation numérique (groupe Synopsys depuis 2025) ; le centre R&D de La Farlède (ex-OPTIS) développe Speos, logiciel de simulation physique de la lumière et de rendu photoréaliste._
  * **Localisation**: États-Unis/Canonsburg, France/La Farlède, International
  * **Domaine scientifique/technique**: Simulation, Rendu offline/VFX, Visualisation
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO, Générique
  * [_Jobs_](https://careers.ansys.com/)


* **[Apple](https://www.apple.com/)**  
  * **Localisation**: États-Unis/Cupertino, International
  * **Nombres d'employés**: 160000
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Hardware, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://jobs.apple.com)


* **[Arkane Studios](https://www.arkane-studios.com/fr)**  
  * _Développeur de jeu vidéo_
  * **Remarque**: _Arkane Austin fermé par Microsoft en mai 2024. Fin 2026, Arkane Lyon (Marvel's Blade) est menacé de fermeture : Microsoft cherche un repreneur (échéance repoussée au 13/12/2026)._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.arkane-studios.com/fr#studios)


* **[Armada Studios](https://armada-studios.com/)**  
  * _Studio de numérisation 3D (LiDAR, photogrammétrie, drone) produisant des jumeaux numériques pour le cinéma, les VFX et la culture._
  * **Localisation**: Paris
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Reconstruction, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Patrimoine/Culture


* **[Art Graphique & Patrimoine](https://agp.fr/)** (Art Graphique et Patrimoine (AGP)) 
  * _Entreprise de relevés et numérisation 3D du patrimoine (laser, photogrammétrie) et de restitutions numériques._
  * **Localisation**: Saint-Denis
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Modélisation
  * **Domaine d'application**: Patrimoine/Culture, Architecture/BTP/Urbanisme


* **[Artefacto](https://www.artefacto-ar.com/)**  
  * _Développement d'applications pour la Réalité augmentée pour la visualisation dans le domaine de l'immobilier, de l'industrie, ou de l'entrainement._
  * **Remarque**: _Le site annonce qu'Artefacto devient INVELON France._
  * **Localisation**: Rennes (Betton)
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Visualisation, Modélisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.artefacto-ar.com/entreprise/carrieres/)


* **[Asobo](https://www.asobostudio.com/)**  
  * _Développement de jeu vidéos_
  * **Produits**: Microsoft Flight Simulator, The Crew
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 300
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.asobostudio.com/careers)


* **[Atlas V](https://atlasv.io/)**  
  * _Studio de création d'expériences immersives en réalité virtuelle et augmentée._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel, Jeu Vidéo


* **[Autodesk](https://www.autodesk.com/)**  
  * _Logiciels 3D, CAO, Conception, Design_
  * **Remarque**: _Équipe à Rennes issue de Golaem (logiciel de simulation de foules pour les VFX), rachetée par Autodesk en août 2024._
  * **Produits**: Maya, 3DS Max, AutoCAD, Golaem
  * **Localisation**: États-Unis, Canada, Inde, Royaume-Uni, Singapour, Norvège, France/Rennes, International
  * **Nombres d'employés**: 15000
  * **Domaine scientifique/technique**: Modélisation, Animation, Design/Fabrication, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.autodesk.com/careers/overview)


* **[AutreChose](https://www.autrechose.fr/)**  
  * _Studio de post-production spécialisé dans la réalisation d'effets spéciaux numériques 2D et 3D pour le cinéma et les séries._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Avatar Medical](https://www.avatarmedical.ai/)**  
  * _Representations et visualisation en imagerie médicale_
  * **Localisation**: France/Paris
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.avatarmedical.ai/careers)


* **[AVT Simulation](https://www.avtsim.com/)**  
  * _VR simulation and serious game_
  * **Localisation**: États-Unis/Orlando
  * **Domaine scientifique/technique**: VR/AR, Simulation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Sécurité/Défense, Automobile/Navigation/Aviation, Médical/Biologique
  * [_Jobs_](https://www.avtsim.com/careers/)


* **[Bentley](https://www.bentley.com/)**  
  * _Développement de logiciels pour l'ingénierie civile (simulation, visualisation, acquisition). Détient l'ancienne entreprise Francaise de reconstruction 3D "Acute 3D"._
  * **Remarque**: _Cesium (plateforme ouverte de données géospatiales 3D, Philadelphie) racheté en septembre 2024 et intégré à iTwin._
  * **Produits**: iTwin, Cesium
  * **Localisation**: États-Unis, Royaume-Uni, Pays-Bas, France/{Paris, Sophia Antipolis}, Singapour, Nouvelle-Zélande, Inde
  * **Nombres d'employés**: 5000
  * **Domaine scientifique/technique**: Modélisation, Simulation, Reconstruction, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Géospatial/Cartographie, Automobile/Navigation/Aviation
  * [_Jobs_](https://bentleysystems.wd5.myworkdayjobs.com/bentley)


* **[Black Cog](https://black-cog.com/)**  
  * _Studio d'effets visuels et de post-production (FX de destruction et fluides, compositing, assets 3D temps réel et précalculés)._
  * **Localisation**: Beychac-et-Caillau
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Blippar](https://www.blipparstudios.com/)**  
  * _Développement d'outils pour la création de contenu en AR sur smartphone_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: VR/AR, Modélisation, Web/Cloud/Big Data
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Commerce/Marketing/Publicité


* **[Bloc D](https://bloc-d.com/)**  
  * _Studio d'animation 3D et d'effets visuels pour le cinéma, les séries, la publicité et les spectacles (dont temps réel)._
  * **Localisation**: Villeurbanne, Lyon
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel
  * [_Jobs_](https://bloc-d.com/jobs/)


* **[Blue Spirit](https://www.spirit-prod.com/)**  
  * _Studio d'animation_
  * **Localisation**: Paris, Angoulême, Canada/Montréal
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.spirit-prod.com/en/jobs/)


* **[Blue Twelve Studio](http://www.bluetwelvestudio.com/)**  
  * _Studio de jeux vidéo à l'origine de Stray._
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Bobbypills](https://www.bobbypills.com/)**  
  * _Studio d'animation_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Bold Brush VFX](https://boldbrushvfx.com/)**  
  * _Studio d'effets visuels spécialisé en environnements numériques et matte painting pour films, séries et publicités._
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[BrandXR](https://www.brandxr.io/)**  
  * _No Code VR platform_
  * **Localisation**: États-Unis/{Orlando, Detroit}
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[Brunch Studio](https://www.brunchstudio.tv/)**  
  * _Studio d'animation 2D/3D réalisant cinématiques et trailers de jeux vidéo._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[BUF](https://buf.com/)**  
  * _Création d'effets visuels (VFX) pour le cinéma._
  * **Localisation**: Paris
  * **Nombres d'employés**: 50
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://buf.com/jobs/)


* **[Cavrnus](https://www.cavrnus.com/)**  
  * _Plateforme de Metaverse_
  * **Localisation**: États-Unis/California/Carlsbad
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[CGEV](https://www.cgev.fr/)**  
  * _Studio d'effets visuels pour le cinéma et les séries (compositing, 3D, FX fluides et particules, matte painting)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.cgev.fr/jobs)


* **[CGWire](https://www.cg-wire.com/)**  
  * _Éditeur de Kitsu, logiciel open source de suivi de production pour studios d'animation, de VFX et de jeu vidéo._
  * **Localisation**: Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Pipeline/Outils de production, Web/Cloud/Big Data
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Chaos](https://www.chaos.com/)**  
  * _Logiciel de rendu et moteur de simulation_
  * **Produits**: V-Ray, Corona, Enscape
  * **Localisation**: International
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Architecture/BTP/Urbanisme
  * [_Jobs_](https://careers.chaos.com/)


* **[Christie](https://www.christiedigital.com/en-gb)**  
  * _Systèmes de projections vidéo et d'immersion (projecteur de cinéma, ecrans géants, projection immersive, etc)._
  * **Localisation**: États-Unis/California, Canada/Ontario
  * **Nombres d'employés**: 2000
  * **Domaine scientifique/technique**: VR/AR, Visualisation
  * **Domaine d'application**: Art/Evenementiel, Loisir Interactif/Immersion/Metavers


* **[Cintoo](https://cintoo.com/)**  
  * _Plateforme cloud de gestion et de diffusion de nuages de points de scans laser, convertis en maillages légers et comparés aux maquettes BIM (jumeau numérique)._
  * **Localisation**: Biot
  * **Domaine scientifique/technique**: Reconstruction, Géométrie, Web/Cloud/Big Data, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO
  * [_Jobs_](https://cintoo.factorial.fr/)


* **[Circle Dental](https://www.circle.dental/)**  
  * _Logiciel de conception dentaire au fauteuil (Circle One) : IA, jumeau numérique et simulation biomécanique._
  * **Produits**: Circle One
  * **Localisation**: France/Montpellier
  * **Domaine scientifique/technique**: Imagerie, Design/Fabrication, Simulation
  * **Domaine d'application**: Médical/Biologique


* **[Clipdrop](https://clipdrop.co/)**  
  * _Creation d'images par IA_
  * **Remarque**: _Clipdrop a été créé par la start-up parisienne Init ML, rachetée par Stability AI en 2023 ; Clipdrop a ensuite été racheté par Jasper en 2024, l'équipe restant à Paris._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision
  * **Domaine d'application**: Générique


* **[CLO Virtual Fashion](https://www.clo3d.com/en/)**  
  * _Logiciel de simulation de vêtements virtuels_
  * **Produits**: Marvelous Designer, Clo3D
  * **Localisation**: Corée du Sud, États-Unis, International
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Design/Fabrication
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Mode/Vêtements/Accessoires
  * [_Jobs_](https://jobs.lever.co/clovirtualfashion)


* **[Cognitive Design Systems](https://www.cognitive-design-systems.com/)**  
  * _Éditeur de logiciels de conception générative et d'optimisation topologique pour la fabrication additive._
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Design/Fabrication, Géométrie, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation


* **[Cousin Bizarre](https://www.cousinbizarre.com/)**  
  * _Studio d'effets visuels : 3D/CGI, FX (simulations de fluides, particules, cheveux, destruction), compositing et matte painting._
  * **Localisation**: Les Lilas
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Cyanide Studio](https://cyanide-studio.com/fr/)**  
  * _Studio de développement de jeux vidéo_
  * **Remarque**: _Filiale du groupe Nacon. Studio Big Bad Wolf (The Council, Vampire The Masquerade - Swansong) à Bordeaux._
  * **Localisation**: France/Paris, France/Bordeaux
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://cyanide-studio.com/fr/nous-rejoindre/)


* **[Dada! Animation](https://www.dada-animation.com/)**  
  * _Studio d'animation: Storytelling et conception créative, animation 3D, immersion et interactivité._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Dassault Systèmes](https://www.3ds.com/fr/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Logiciels de CAO, Design et Simulation._
  * **Produits**: Catia, SolidWorks
  * **Localisation**: France/Paris, France/Aix-en-Provence, États-Unis, Chine, International
  * **Nombres d'employés**: 20000
  * **Domaine scientifique/technique**: Modélisation, Simulation, Géométrie, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO, Médical/Biologique
  * [_Jobs_](https://careers.3ds.com/)


* **[Datakit](https://www.datakit.com/)**  
  * _Éditeur de convertisseurs et bibliothèques d'échange de données CAO 3D (B-Rep et maillages) entre formats natifs et standards._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Géométrie, Design/Fabrication, Modélisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Générique


* **[Digital District](https://www.digital-district.fr)**  
  * _Studio d'effets visuels et de post-production pour le cinéma, les séries et la publicité._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[DigitalFish](https://www.digitalfish.com/)**  
  * _Outils pour l'animation 3D, 2D et VR_
  * **Produits**: [Reflex](https://www.digitalfish.com/reflex/), [Lune](https://www.digitalfish.com/lune/)
  * **Localisation**: États-Unis/California/San Mateo
  * **Domaine scientifique/technique**: Animation, VR/AR, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.digitalfish.com/careers/)


* **[Digixart](https://www.digixart.com/)**  
  * _Studio de jeux vidéo narratifs (11-11 Memories Retold, Road 96)._
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Disney](https://www.disneystudios.com/)**  
  * **Remarque**: _<a href="https://studios.disneyresearch.com/">Disney Research</a> implanté à Zurich est l'un des plus gros centre de R&amp;D en graphique._
  * **Localisation**: États-Unis, International
  * **Nombres d'employés**: 220000
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Simulation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Robotique/Systèmes autonomes
  * [_Jobs_](https://join.disneycareers.com/global/en)


* **[DON'T NOD](https://dont-nod.com/en/)**  
  * _Développement de jeu vidéos_
  * **Localisation**: Paris, Canada/Montréal
  * **Nombres d'employés**: 250
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://dont-nod.com/en/careers/)


* **[DreamWall](https://www.dreamwall.be/en)**  
  * _Création d'histoires animées_
  * **Localisation**: Belgique/Charleroi
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.dreamwall.be/en/jobs)


* **[Dronisos](https://www.dronisos.com/)**  
  * _Spectacle de drones_
  * **Localisation**: France/Bordeaux, États-Unis/Orlando
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, VR/AR
  * **Domaine d'application**: Art/Evenementiel
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/dronisos)


* **[DUSK](https://www.duskvfx.fr/)**  
  * _Studio généraliste d'effets visuels (ex-IIW Studio) : CG, FX, compositing, environnements, avec laboratoire image intégré._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Dwarf Animation](https://www.dwarfanimation.com)** (Dwarf Animation Studio) 
  * _Studio d'animation 3D (séries, longs métrages, cinématiques)._
  * **Localisation**: Montpellier
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Easy Mile](https://easymile.com/)**  
  * _Véhicules autonomes industriels (logistique, aéroports, sites industriels) : perception et logiciels de conduite autonome._
  * **Localisation**: France/Toulouse, Allemagne/Berlin
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Analyse de données
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/easymile/jobs)


* **[eCential Robotics](https://www.ecential-robotics.com/)**  
  * _Fabricant d'une plateforme intégrant imagerie 3D peropératoire, navigation et robotique pour la chirurgie du rachis et orthopédique._
  * **Localisation**: Gières
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Visualisation
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


* **[Eden Games](https://www.edengames.com/)**  
  * _Studio de développement de jeux vidéo_
  * **Remarque**: _Filiale d'Animoca Brands._
  * **Localisation**: France/Lyon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.edengames.com/career/)


* **[Effigy 3D](https://effigy-3d.com/)**  
  * _Studio de création 3D et d'humains numériques : avatars IA conversationnels, vidéo volumétrique (4DGS), scan 3D, Mocap, production virtuelle._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Acquisition, Reconstruction, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[EikoSim](https://eikosim.com/)**  
  * _Éditeur de logiciels de corrélation d'images numériques (stéréo-DIC) couplée à la simulation éléments finis pour la validation d'essais._
  * **Localisation**: Montrouge
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Vision, Simulation, Reconstruction
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation


* **[Eko Software](http://www.ekosystem.com/)**  
  * _Studio de développement de jeux vidéo (How to Survive, Warhammer: Chaosbane, Rugby)._
  * **Remarque**: _Filiale du groupe Nacon._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Emersya](https://www.emersya.com/)**  
  * _Plateforme 3D et AR pour le e-commerce : configurateurs et visualiseurs 3D interactifs, AR web, rendu automatisé de produits._
  * **Localisation**: France/Montpellier
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Design/Fabrication
  * **Domaine d'application**: Commerce/Marketing/Publicité, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.emersya.com/join-us/)


* **[Enchanted Tools](https://enchanted.tools/)**  
  * _Concepteur du robot humanoïde Mirokaï, combinant perception, IA et animation expressive de personnages._
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Vision, Animation, IHM/Haptique
  * **Domaine d'application**: Robotique/Systèmes autonomes, Médical/Biologique


* **[Epic Games](https://www.epicgames.com/site/en-US/home)**  
  * _Développeur de jeu et du moteur 3D Unreal Engine_
  * **Produits**: [Unreal Engine](https://www.unrealengine.com/)
  * **Localisation**: États-Unis, International
  * **Nombres d'employés**: 2000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.epicgames.com/site/en-US/careers/jobs)


* **[ESI](https://www.keysight.com/us/en/products/design-engineering-software/computer-aided-engineering-software.html)**  
  * _Entreprise Francaise de simulation, prototypage virtuel, et Double numérique pour l'industrie_
  * **Remarque**: _Racheté par Keysight Technologies (finalisé en janvier 2024) ; l'entité française est devenue Keysight Technologies France. Le site esi-group.com redirige vers Keysight._
  * **Localisation**: France/{Paris, Lyon, Bordeaux}, International
  * **Nombres d'employés**: 1000
  * **Domaine scientifique/technique**: Modélisation, Simulation
  * **Domaine d'application**: Automobile/Navigation/Aviation, Sécurité/Défense, Industrie/Manufacturing/CAO
  * [_Jobs_](https://jobs.keysight.com/)


* **[Eugen Systems](https://eugensystems.com)**  
  * _Studio de développement de jeux de stratégie temps réel (Steel Division, WARNO), moteur maison IRISZOOM._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Simulation
  * **Domaine d'application**: Jeu Vidéo


* **[EVA](https://www.eva.gg/en-FR)** (Esports Virtual Arenas) 
  * _Scenes virtuelles et compétitions pour des jeux de eSports_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Modélisation, VR/AR, Analyse de données
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.eva.gg/fr/careers/jobs/list)


* **[Evil Empire](https://evilempire.com/)**  
  * _Studio de développement de jeux vidéo (Dead Cells, The Rogue Prince of Persia)._
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 65
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Ex Persona](https://ex-persona.com/)**  
  * _Studio de motion capture et d'animation équipé d'un système optique Vicon (40 caméras, volume 13 x 9 x 4 m)._
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Acquisition, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://ex-persona.com/the-studio/jobs/)


* **[Exkee](https://www.exkee.com/)**  
  * _Studio de développement de jeux vidéo consoles, PC et smartphones._
  * **Localisation**: Marseille
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Exwayz](https://www.exwayz.com/)**  
  * _Logiciel de localisation et cartographie 3D (SLAM lidar) temps réel pour la robotique autonome et la cartographie mobile._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


* **[Falcon's Creative Group](https://falconscreativegroup.com/)**  
  * _Creation d'expérience immersive pour les parcs d'attractions_
  * **Remarque**: _Division de Falcon's Beyond Global (Nasdaq : FBYD)._
  * **Localisation**: États-Unis/Orlando
  * **Domaine scientifique/technique**: VR/AR, Animation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel
  * [_Jobs_](https://falconscreativegroup.com/careers/)


* **[Focus Entertainment](https://www.focus-entmt.com/fr)**  
  * _Édition et développement de jeux vidéo._
  * **Remarque**: _Branche édition (Focus Entertainment Publishing) du groupe <a href="https://pullupent.com/">PULLUP Entertainment</a>, nouveau nom de Focus Entertainment depuis avril 2024. Studios du groupe en France : Dotemu (Paris), Leikir Studio (Ivry-sur-Seine), Douze Dixièmes (Aubervilliers) et Streum On Studio (Nogent-sur-Marne)._
  * **Localisation**: Paris, Ivry-sur-Seine, Aubervilliers, Nogent-sur-Marne
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://focusentertainment.recruitee.com/)


* **[Folimage](https://www.folimage.fr/)**  
  * _Studio d'animation historique (2D traditionnelle, 2D numérique et stop motion) installé à La Cartoucherie._
  * **Localisation**: Valence, Bourg-lès-Valence
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Fortiche Production](https://forticheprod.com)**  
  * _Studio d'animation 2D/3D, réalisateur de la série Arcane._
  * **Localisation**: Paris, Montpellier
  * **Nombres d'employés**: 50-99 (plus intermittents)
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Fost](https://fost.studio/)**  
  * _Studio d'animation 2D et de pré-production pour l'image de synthèse, pour longs métrages, séries et web._
  * **Localisation**: Paris, Angoulême
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Gameloft](https://www.gameloft.com/)**  
  * _Développement de jeux vidéos orientés mobile._
  * **Localisation**: France/Paris, États-Unis, Canada, Espagne, Inde, International
  * **Nombres d'employés**: 2400
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.gameloft.com/jobs)


* **[Ganymed Robotics](https://www.ganymedrobotics.com/)**  
  * _Développe un robot de chirurgie orthopédique (genou) guidé par vision par ordinateur 3D sans marqueurs._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Vision, Reconstruction, Imagerie
  * **Domaine d'application**: Médical/Biologique, Robotique/Systèmes autonomes


* **[Gao Shan Pictures](https://www.gaoshanpictures.com)**  
  * _Studio d'animation 3D ayant participé à des longs métrages (Mars Express, J'ai perdu mon corps)._
  * **Localisation**: France/Saint-Paul (La Réunion), France/Angoulême, France/Annecy, Maurice
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[GeometryFactory](https://geometryfactory.com/)**  
  * _Développement de bibliothèque logicielle open-source de calcul géométrique._
  * **Produits**: [the Computational Geometry Algorithms Library (CGAL)](https://www.cgal.org/)
  * **Localisation**: France/Sophia Antipolis
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Reconstruction, Géométrie
  * **Domaine d'application**: Générique
  * [_Jobs_](https://geometryfactory.com/open-positions/)


* **[Gleamer](https://www.gleamer.ai/)**  
  * _Radiologie avec IA_
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Goblinz Studio](https://goblinz.com/)**  
  * _Studio de développement et éditeur de jeux vidéo indépendants (Legend of Keepers)._
  * **Localisation**: Yutz
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Google](https://about.google/)**  
  * **Remarque**: _<a href="https://ai.google/">Google AI</a> est une entité de recherche développant des projets en graphique_
  * **Localisation**: États-Unis/Mountain View, International
  * **Nombres d'employés**: 140000
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.google.com/)


* **[GoPro Technology](https://gopro.com/fr/fr/)**  
  * _Systèmes de caméras sportives._
  * **Remarque**: _Entité R&D en France à Issy Les Moulineaux._
  * **Localisation**: Paris, International
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Vision
  * **Domaine d'application**: Générique


* **[GridRaster](https://gridraster.com/)**  
  * _Spatial Mapping, Recognition and Alignment for XR_
  * **Localisation**: États-Unis/California/Mountain View, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, VR/AR
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation
  * [_Jobs_](https://gridraster.com/careers-jobs/)


* **[Hapticmedia](https://hapticmedia.com/)**  
  * _Éditeur d'une plateforme de configurateurs 3D et réalité augmentée pour l'e-commerce._
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data, VR/AR
  * **Domaine d'application**: Commerce/Marketing/Publicité


* **[Haption](https://www.haption.com/)**  
  * _Conception et fabrication de systèmes haptiques à retour d'effort (gamme Virtuose) et logiciels de simulation interactive pour la réalité virtuelle._
  * **Localisation**: Laval
  * **Domaine scientifique/technique**: IHM/Haptique, VR/AR, Simulation
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Médical/Biologique, Industrie/Manufacturing/CAO


* **[Harfang3D](https://www.harfang3d.com/)**  
  * _Outils de visualisation 3D en temps réel, C++ et Python, pour l'industrie, la recherche et l'enseignement,_
  * **Localisation**: Orléans
  * **Domaine scientifique/technique**: Visualisation, Simulation, VR/AR
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Hari Studios](https://hari-studios.com/)**  
  * _Studio de production et de fabrication de séries et films d'animation 3D (Grizzy et les Lemmings, Mystery Lane)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://hari-studios.com/recrutements/)


* **[Hexagon](https://hexagon.com/)**  
  * _Measuring technology and geospatial tools and software_
  * **Localisation**: Suède/Stockholm
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie, Vision
  * **Domaine d'application**: Géospatial/Cartographie, Industrie/Manufacturing/CAO


* **[Histovery](https://histovery.com/)**  
  * _Créateur de l'HistoPad, tablette de visite en réalité augmentée reconstituant en 3D des lieux patrimoniaux._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Patrimoine/Culture


* **[Hocus Pocus Studio](https://hocuspocusstudio.fr/)**  
  * _Studio d'animation 3D, d'effets visuels et de post-production pour la publicité, le documentaire et le cinéma._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Huawei Nice Research Center](https://www.huawei.com/fr/)** (Huawei Technologies France - Nice Research Center) 
  * _Centre de recherche Huawei à Sophia Antipolis avec une équipe de rendu 3D basse consommation pour le jeu mobile (ray tracing mobile, super-résolution, génération de frames)._
  * **Localisation**: Valbonne, Boulogne-Billancourt
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware, IA générative (image/3D)
  * **Domaine d'application**: Jeu Vidéo, Générique


* **[I-MC](https://www.mistralis.fr/)**  
  * _Solutions de contrôle et d'inspection industrielle automatisées par capteur optique (marque Mistralis)._
  * **Localisation**: France/Pertuis
  * **Domaine scientifique/technique**: Vision, Acquisition, Simulation, Design/Fabrication
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation, Sécurité/Défense


* **[Iconem](https://iconem.com/)**  
  * _Numérisation 3D du patrimoine par photogrammétrie, drones et lidar ; plateforme web de visualisation (nuages de points, maillages, Gaussian splats)._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Visualisation
  * **Domaine d'application**: Patrimoine/Culture, Géospatial/Cartographie


* **[IGO](https://www.igo.fr/)**  
  * _Jumeau numérique et exploitation de données géospatiales 3D._
  * **Localisation**: France/Montpellier
  * **Domaine scientifique/technique**: Modélisation, VR/AR
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Ikigai Games](https://www.gfc.ikigai.games/)**  
  * _Association pour la création de jeux vidéo pédagogiques._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.gfc.ikigai.games/recrutement)


* **[Illumination Studios Paris](https://www.illuminationstudiosparis.com/)**  
  * _Création de films d'animation et d'effets visuels._
  * **Remarque**: _Anciennement Illumination Mac Guff._
  * **Localisation**: Paris
  * **Nombres d'employés**: 700
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.illuminationstudiosparis.com/careers/)


* **[Imageens](https://www.imageens.com/)**  
  * _Dispositif médical pour la prévention d'accident cardiovasculaire_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Analyse de données, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Imagination Technologies](https://www.imaginationtech.com/)**  
  * _Développement sur GPU d'optimisation graphique_
  * **Localisation**: Royaume-Uni, Pologne
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.imaginationtech.com/careers/vacancies/)


* **[Imajing](https://imajing.eu/)**  
  * _Concepteur de systèmes de cartographie mobile (capteurs embarqués, images et lidar) et de logiciels d'exploitation 3D géoréférencée._
  * **Localisation**: Labège
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Immersion](https://www.immersion.fr/)**  
  * _Intégrateur et éditeur de solutions de réalité virtuelle et augmentée et de collaboration 3D pour l'industrie et la recherche (Shariiing, Shariiing Review)._
  * **Localisation**: Bordeaux
  * **Domaine scientifique/technique**: VR/AR, Visualisation, IHM/Haptique
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Inbolt](https://www.inbolt.com/)**  
  * _Guidage de robots industriels en temps réel par vision 3D et IA (localisation d'objets à partir de capteurs de profondeur)._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


* **[inHEART](https://www.inheartmedical.com/)**  
  * _Jumeau numérique 3D du coeur du patient construit à partir de l'imagerie médicale (IA et simulation) pour guider l'ablation des arythmies._
  * **Localisation**: Pessac, États-Unis/Boston
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Simulation
  * **Domaine d'application**: Médical/Biologique


* **[InnerSpace VR](https://www.innerspacevr.com/)**  
  * _Studio de création d'espace immersifs_
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[InSimo](https://www.insimo.com/)**  
  * _Logiciels de simulation pour la formation médicale et chirurgicale._
  * **Localisation**: Strasbourg
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Simulation, Modélisation, Animation, Visualisation
  * **Domaine d'application**: Médical/Biologique
  * [_Jobs_](https://www.insimo.com/fr/career-2/)


* **[InterDigital](https://www.interdigital.com/)**  
  * _Centre de R&D (ex-Technicolor R&I) sur la vidéo immersive, la vidéo volumétrique, le light field, l'haptique et la compression vidéo._
  * **Remarque**: _Centre de R&D issu de Technicolor Research & Innovation, repris par le groupe américain InterDigital._
  * **Localisation**: Cesson-Sévigné
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers


* **[Ishtar Games](https://ishtar.games/)**  
  * _Studio indépendant de jeux vidéo (Dead in Vinland, The Last Spell)._
  * **Remarque**: _Filiale du groupe Nacon._
  * **Localisation**: Tourcoing
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Kayrros](https://www.kayrros.com/)**  
  * _Mesure par satellite de l'empreinte environnementale des activités humaines (analyse d'images satellitaires, géospatial)._
  * **Remarque**: _Rachetée en 2026 par Energy Aspects (Londres) ; la marque et l'équipe parisienne sont maintenues._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Énergie/Environnement, Géospatial/Cartographie


* **[KeyShot](https://www.keyshot.com/)** (KeyShot (ex Luxion)) 
  * _Logiciel de rendu d'images (KeyShot Studio) et gestion d'actifs numériques_
  * **Remarque**: _Luxion a fusionné avec Digizuite et a été renommée KeyShot en 2024._
  * **Produits**: KeyShot Studio, KeyShot Dock
  * **Localisation**: États-Unis/Costa Mesa, Danemark/Aarhus
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.keyshot.com/careers/)


* **[Kinetix](https://kinetix.tech/)**  
  * _Génération d'animations 3D d'humains par IA à partir de vidéo ou de texte (emotes pour jeux vidéo et mondes virtuels)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, IA générative (image/3D), Vision, Acquisition
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://kinetix-tech.welcomekit.co/)


* **[Kitware](https://www.kitware.com/)**  
  * _Développement de logiciels scientifique, de visualisation, et de compilation. Beaucoup de développement open-source._
  * **Produits**: ParaView, VTK, 3D Slicer, ITK, CMake
  * **Localisation**: États-Unis, France/Lyon
  * **Nombres d'employés**: 200
  * **Domaine scientifique/technique**: Visualisation, Imagerie, Vision, Reconstruction
  * **Domaine d'application**: Médical/Biologique, Automobile/Navigation/Aviation, Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.kitware.com/careers/)


* **[Koelis](https://koelis.com/)**  
  * _Concepteur de systèmes d'échographie 3D et de fusion IRM/écho pour le diagnostic et le traitement du cancer de la prostate._
  * **Localisation**: Meylan
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Géométrie
  * **Domaine d'application**: Médical/Biologique


* **[Kreon Technologies](https://www.kreon3d.com/)**  
  * _Conception et fabrication de scanners laser 3D et de bras de mesure pour la métrologie et le contrôle dimensionnel._
  * **Localisation**: Limoges
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Hardware
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation


* **[Kylotonn](https://www.kylotonn.com/)** (KT Racing) 
  * _Studio de développement de jeux vidéo en sport mécanique_
  * **Remarque**: _Filiale de Nacon. Placée en redressement judiciaire en mars 2026 dans le cadre des difficultés du groupe Nacon._
  * **Localisation**: France/Paris, France/Lyon
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://kylotonn.com/carrieres/)


* **[La Planète Rouge](https://www.laplaneterouge.fr/)**  
  * _Studio d'effets visuels et de production virtuelle (plateau à mur LED The Next Stage aux Provence Studios) et de post-production._
  * **Localisation**: Martigues
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lectra](https://www.lectra.com/fr)**  
  * _Logiciels de conceptions professionels: Model, Automobile, Ameublement_
  * **Localisation**: France/Paris, International
  * **Nombres d'employés**: 2800
  * **Domaine scientifique/technique**: Modélisation, Simulation, Design/Fabrication
  * **Domaine d'application**: Mode/Vêtements/Accessoires


* **[Les fées spéciales](https://les-fees-speciales.coop/)**  
  * _Création d'animation 2D/3D, immersives et interactives._
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel


* **[Light VFX](https://lightvfx.com/)**  
  * _Studio indépendant d'effets visuels et d'animation pour le cinéma, les séries et la publicité (FX fluides, particules, modélisation 3D, matte painting)._
  * **Localisation**: Royan, Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://lightvfx.com/careers)


* **[Lightbulb Crew](https://lightbulbcrew.fr/)**  
  * _Développement de jeux vidéo indépendants._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[LS Group](https://www.ls-group.fr/)** (LS Group (ex Light and Shadows)) 
  * _Solutions 3D temps réel : jumeaux numériques, VR/AR et visuels pour la conception, la fabrication et la vente_
  * **Localisation**: Paris (Suresnes)
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.ls-group.fr/careers)


* **[LTT (Les Tontons Truqueurs)](https://www.ltt-vfx.com/)**  
  * _Prévisualisation et VFX en temps réels._
  * **Localisation**: Montpellier, Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Vision, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Lucid Realities](https://lucidrealities.studio/)**  
  * _Studio de production d'expériences immersives (VR, AR, installations)._
  * **Localisation**: Romainville
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Art/Evenementiel, Patrimoine/Culture


* **[Lumiscaphe](https://lumiscaphe.com/)**  
  * _Éditeur du logiciel Patchwork 3D et de solutions de rendu temps réel et de configurateurs 3D pour le design industriel._
  * **Localisation**: Canéjan
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation, Commerce/Marketing/Publicité


* **[Luxcarta](https://www.luxcarta.com/)** (Luxcarta Technology) 
  * _Producteur de données géospatiales 3D (modèles numériques de terrain, bâtiments 3D, jumeaux numériques) à partir d'imagerie satellite par IA._
  * **Localisation**: Mouans-Sartoux, Valbonne
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Reconstruction, Vision, Modélisation
  * **Domaine d'application**: Géospatial/Cartographie, Sécurité/Défense, Automobile/Navigation/Aviation


* **[M-Covision](https://fr.mcovision.com/)**  
  * _Consulting de R&D en vision et ML_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Analyse de données
  * **Domaine d'application**: Générique


* **[Mac Guff](https://macguff.com)** (Mac Guff Ligne) 
  * _Studio d'effets visuels pour le cinéma, les séries et la publicité._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Madbox](https://www.madbox.io/)**  
  * _Studio de développement et d'édition de jeux mobiles._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Magic Design Studios](https://www.magicdesignstudios.com/)**  
  * _Studio de jeux vidéo et d'animation fondé par d'anciens d'Ubisoft Montpellier (Unruly Heroes)._
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Magic Leap](https://www.magicleap.com/)**  
  * _Optique pour la réalité augmentée (guides d'onde) et prototypage de lunettes AR_
  * **Remarque**: _En 2026, Magic Leap abandonne ses propres casques pour devenir fournisseur de guides d'onde (partenariat avec Google) ; plusieurs centaines de licenciements._
  * **Localisation**: États-Unis/Florida, États-Unis/Colorado
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Générique


* **[Manus](https://www.manus-meta.com/)**  
  * _Motion capture and extended reality system_
  * **Localisation**: Pays-Bas/Eindhoven
  * **Domaine scientifique/technique**: Acquisition, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Entrainement/Formation/Serious Game


* **[Manzalab](https://www.manzalab.com/)**  
  * _Serious Game et creation d'environnement immersifs_
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Modélisation, VR/AR, Web/Cloud/Big Data
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Entrainement/Formation/Serious Game


* **[Marmoset](https://marmoset.co/)**  
  * _Modeleur et rendu 3D_
  * **Localisation**: États-Unis, International
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[MassVirtual](https://massvirtual.com/)**  
  * _VR experience_
  * **Localisation**: États-Unis/Orlando
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: VR/AR, Simulation
  * **Domaine d'application**: Automobile/Navigation/Aviation


* **[Mathematic](https://mathematic.tv)**  
  * _Studio de création visuelle : effets visuels, animation, production virtuelle et temps réel._
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité, Art/Evenementiel


* **[Maxon](https://www.maxon.net/)**  
  * _Modeleur 3D_
  * **Produits**: ZBrush, Cinema4D, etc.
  * **Localisation**: États-Unis, Canada, Allemagne
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://www.maxon.net/fr/about-maxon/careers)


* **[Mercenaries Engineering](http://guerillarender.com/)**  
  * _Développement de logiciel de rendu (Guerilla Render) et d'animation (Rumba) pour la création de films d'animation._
  * **Produits**: [Guerilla Render](http://guerillarender.com/), [Rumba Animation](https://rumba-animation.com/)
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Meta](https://ai.meta.com/research/)**  
  * _Groupe technologique ; son laboratoire FAIR Paris (ouvert en 2015) mène des recherches en IA et vision par ordinateur (DINOv2/DINOv3)._
  * **Localisation**: États-Unis/Menlo Park, France/Paris, International
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, VR/AR, Reconstruction
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Générique
  * [_Jobs_](https://www.metacareers.com/)


* **[MicroFilms](https://www.microfilms.fr/)**  
  * _Machinerie de prise de vue (grues, têtes gyrostabilisées trackées) pour la télévision et la production virtuelle_
  * **Localisation**: Paris (Saint-Denis)
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Imagerie
  * **Domaine d'application**: Art/Evenementiel, Cinéma/Films d'Animation/VFX


* **[Microids](https://www.microids.com/)**  
  * _Éditeur et développeur de jeux vidéo d'aventure, avec studios internes à Paris et Lyon._
  * **Localisation**: Paris, Lyon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Microoled](https://microoled.net/)**  
  * _Fabricant de micro-écrans OLED et de lunettes connectées/AR (ActiveLook) pour viseurs et réalité augmentée._
  * **Localisation**: Grenoble
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Hardware, VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Sécurité/Défense


* **[Microsoft](https://www.microsoft.com/)**  
  * **Remarque**: _<a href=\"https://www.microsoft.com/en-us/research/research-area/graphics-multimedia/?\">Microsoft research</a> est active en informatique graphique._
  * **Localisation**: États-Unis/Redmond, International
  * **Nombres d'employés**: 228000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, VR/AR, IA générative (image/3D), Web/Cloud/Big Data
  * **Domaine d'application**: Générique
  * [_Jobs_](https://careers.microsoft.com/)


* **[MiddleVR](https://www.middlevr.com/)** (I'm in VR (MiddleVR)) 
  * _Éditeur de logiciels de réalité virtuelle (middleware pour CAVE/casques, plateforme Improov pour revue de projet 3D immersive)._
  * **Localisation**: Truchtersheim
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, IHM/Haptique
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Entrainement/Formation/Serious Game


* **[Mikros Animation](https://www.mikrosanimation.com/fr/)**  
  * _Creation d'Animation 3D_
  * **Remarque**: _Société du groupe Rodeo FX depuis 2025 (rachat après la faillite de Technicolor)._
  * **Localisation**: France/Paris, Canada/Montréal, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.mikrosanimation.com/en/people-and-culture/careers/)


* **[Mimbus](https://mimbus.com/)**  
  * _Solutions de formation professionnelle en réalité virtuelle (bâtiment, automobile, aéronautique, industrie)._
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Simulation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Entrainement/Formation/Serious Game, Industrie/Manufacturing/CAO


* **[MocapLab](https://www.mocaplab.com/)**  
  * _Studio et R&amp;D pour la capture de mouvement._
  * **Localisation**: Paris (Aubervilliers)
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Analyse de données, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Jeu Vidéo


* **[ModaLive](https://www.modalive.fr/)**  
  * _Virtual try-on de vêtements de mode._
  * **Localisation**: Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Vision, Modélisation
  * **Domaine d'application**: Mode/Vêtements/Accessoires


* **[Modjaw](https://www.modjaw.com/fr/)**  
  * _Système de capture 4D des mouvements de la mâchoire, couplé aux scans 3D dentaires pour la CFAO dentaire._
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Acquisition, Animation, Design/Fabrication
  * **Domaine d'application**: Médical/Biologique


* **[Modulo Pi](https://www.modulo-pi.com/)**  
  * _Media server solutions_
  * **Localisation**: Paris (Saint-Denis)
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Art/Evenementiel


* **[Motion Twin](https://motiontwin.com/)**  
  * _Studio indépendant coopératif de jeux vidéo (Dead Cells, Windblown)._
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Movea (TDK InvenSense)](https://invensense.tdk.com/)**  
  * _Motion tracking et interface utilisateur, AR/VR._
  * **Remarque**: _Movea, spin-off du CEA-Léti, a été rachetée par InvenSense en 2014, elle-même filiale de TDK depuis 2017 ; le site R&D de Grenoble reste actif._
  * **Localisation**: Grenoble
  * **Domaine scientifique/technique**: Acquisition, VR/AR, IHM/Haptique
  * **Domaine d'application**: Générique


* **[MPC / The Mill](https://www.themill.com/)**  
  * _Création de VFX pour le cinéma, les séries et la publicité (studios MPC et The Mill)_
  * **Remarque**: _MPC et The Mill, anciens studios du groupe Technicolor, ont été repris par TransPerfect en 2025 après la faillite de Technicolor, puis réunis sous la marque The Mill en juin 2026. Le site <a href="https://www.mpcvfx.com/fr/">MPC Paris</a> reste actif._
  * **Localisation**: France/Paris, Royaume-Uni/Londres, Belgique/Liège, Inde/Bangalore
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité
  * [_Jobs_](https://www.mpcvfx.com/fr/carrieres/)


* **[My Digital Buildings](https://www.mydigitalbuildings.com/)**  
  * _Startup qui produit des jumeaux numériques de bâtiments à partir d'un réseau de scan 3D et d'une plateforme logicielle._
  * **Localisation**: Meylan
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Web/Cloud/Big Data
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Nacon](https://www.nacongaming.com/)**  
  * _Éditeur de jeux vidéo et fabricant d'accessoires, maison mère de nombreux studios de développement._
  * **Remarque**: _Placée en redressement judiciaire en mars 2026 (période d'observation prolongée en juillet 2026)._
  * **Localisation**: Fretin
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Hardware
  * **Domaine d'application**: Jeu Vidéo


* **[Naver Labs Europe](https://europe.naverlabs.com/)**  
  * _Centre de recherche européen de Naver en IA, vision par ordinateur 3D et robotique (DUSt3R, MASt3R)._
  * **Localisation**: Meylan
  * **Domaine scientifique/technique**: Vision, Reconstruction, Acquisition
  * **Domaine d'application**: Robotique/Systèmes autonomes, Générique


* **[NDunes](https://www.ndunes.com/)**  
  * _Logiciel de visualisation 3D pour les projets d'énergies renouvelables (éolien, solaire, stockage)_
  * **Localisation**: France/Paris
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Visualisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Énergie/Environnement, Architecture/BTP/Urbanisme


* **[Neels](https://neels.fr/)**  
  * _Studio de post-production spécialisé en animation 3D et effets visuels (animation, lookdev, lighting, FX, compositing, matchmove)._
  * **Localisation**: Saint-Ouen
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Neural Concept](https://www.neuralconcept.com/)**  
  * _AI for engineering design_
  * **Localisation**: Suisse/Lausanne, Allemagne/Munich
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://www.neuralconcept.com/careers)


* **[Newtone Technologies](https://qima-lifesciences.com/)**  
  * _Research & Innovation company expert in Image Analysis for skin and hair appearance._
  * **Remarque**: _Intégrée au groupe QIMA Life Sciences depuis 2021._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Imagerie, Analyse de données
  * **Domaine d'application**: Médical/Biologique


* **[Next Limit](https://nextlimit.com/)**  
  * _Moteur de rendu et de simulation_
  * **Produits**: [RealFlow](https://realflow.com/), [Maxwell Render](https://maxwellrender.com/)
  * **Localisation**: Espagne/Madrid
  * **Domaine scientifique/technique**: Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Nobody Studio](https://nobody-studio.com/)**  
  * _Studio 3D d'externalisation en lighting, compositing, modélisation, temps réel et previs pour l'animation, les VFX et le jeu vidéo._
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo
  * [_Jobs_](https://nobody-studio.com/jobs/)


* **[NOID](https://www.noid-studio.com/)**  
  * _Studio d'effets visuels pour longs métrages et séries (environnements, créatures, effets) appuyé sur un pipeline maison._
  * **Localisation**: Paris
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.noid-studio.com/join-us)


* **[NovaQuark](https://www.novaquark.com/)**  
  * _Developpement de jeux vidéos_
  * **Localisation**: Canada/Montréal, France/Paris
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Simulation, Animation, Modélisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/novaquark/jobs)


* **[Novelab](https://www.novelab.io/)**  
  * _Studio de création d'expériences VR/AR_
  * **Localisation**: Paris, Lyon
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers


* **[nTop](https://www.ntop.com/)**  
  * _Modélisation et simulation mécanique à partir de surfaces implicites._
  * **Localisation**: États-Unis/New York
  * **Domaine scientifique/technique**: Modélisation, Design/Fabrication, Simulation
  * **Domaine d'application**: Industrie/Manufacturing/CAO
  * [_Jobs_](https://jobs.gem.com/ntop)


* **[Nurea](https://nurea-soft.com/)**  
  * _Éditeur de logiciels d'analyse automatique d'imagerie vasculaire (anévrismes aortiques) avec segmentation et reconstruction 3D par IA._
  * **Localisation**: Bègles
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Visualisation
  * **Domaine d'application**: Médical/Biologique


* **[NVidia](https://www.nvidia.com/)**  
  * _Développement de cartes graphiques materiel et logiciel_
  * **Remarque**: _NVidia Research est présent partout dans le monde, dont en France._
  * **Localisation**: États-Unis/California/Santa Clara, France/Paris, International
  * **Nombres d'employés**: 42000
  * **Domaine scientifique/technique**: Hardware, Rendu temps réel/Moteurs 3D, IA générative (image/3D), Simulation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite)


* **[Oh BiBi](https://www.ohbibi.com/)**  
  * _Studio de jeux mobiles._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Oktal-SE](https://www.oktal-se.fr/)** (OKTAL Synthetic Environment) 
  * _Éditeur de SE-Workbench, simulation physique de capteurs (visible, infrarouge, lidar, radar) par rendu de scènes 3D. Groupe Sogeclair._
  * **Localisation**: Toulouse
  * **Domaine scientifique/technique**: Simulation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation


* **[Old Skull Games](https://www.oldskullgames.com/)**  
  * _Studio de développement et co-développement de jeux vidéo console, PC et mobile._
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[OptiTrack](https://optitrack.com/)**  
  * _Motion capture pour les effets spéciaux au cinéma_
  * **Localisation**: États-Unis/Oregon/Corvallis
  * **Domaine scientifique/technique**: Acquisition, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://optitrack.com/careers)


* **[Oslandia](https://oslandia.com/)**  
  * _Société de services et d'édition open source en SIG et 3D géospatiale (QGIS, Giro3D, py3dtiles, PostGIS)._
  * **Localisation**: Paris, Lyon
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Visualisation, Web/Cloud/Big Data, Géométrie
  * **Domaine d'application**: Géospatial/Cartographie, Architecture/BTP/Urbanisme


* **[Otoy](https://home.otoy.com/)**  
  * _Logiciel de rendu graphique sur le cloud, et capture_
  * **Produits**: Octane Render
  * **Localisation**: États-Unis/Los Angeles
  * **Domaine scientifique/technique**: Rendu offline/VFX, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Outsight](https://www.outsight.ai/)**  
  * _Plateforme logicielle de traitement de données lidar 3D (perception, suivi, analyse de flux) pour aéroports, gares et industrie._
  * **Localisation**: Paris
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Vision, Acquisition, Analyse de données
  * **Domaine d'application**: Robotique/Systèmes autonomes, Automobile/Navigation/Aviation


* **[Overlay](https://www.figmin.com/)**  
  * _Plateforme de réalité augmentée_
  * **Produits**: Figmin XR
  * **Localisation**: États-Unis/Portland
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers


* **[Passtech Games](https://www.passtechgames.com)**  
  * _Studio de développement de jeux vidéo (Curse of the Dead Gods, Ravenswatch)._
  * **Localisation**: Villeurbanne
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Pastagames](https://www.pastagames.com/)**  
  * _Studio indépendant de jeux vidéo (Rayman Mini, KarmaZoo, Arkanoid – Eternal Battle)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Perception4D](https://perception4d.com/)**  
  * _Système d'acquisition par caméra et scanners, de visualisation scientifique et d'approches d'IA pour la Vision._
  * **Localisation**: Lyon
  * **Nombres d'employés**: 5
  * **Domaine scientifique/technique**: Vision, Acquisition, Visualisation, Géométrie
  * **Domaine d'application**: Générique


* **[Photoroom](https://www.photoroom.com/)**  
  * _Éditeur d'une application et d'API d'édition d'images par IA générative (détourage, génération de fonds et de visuels produits)._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Imagerie, Vision
  * **Domaine d'application**: Commerce/Marketing/Publicité, Mode/Vêtements/Accessoires
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/photoroom)


* **[Pixee Medical](https://pixee-medical.com/)**  
  * _Navigation chirurgicale en réalité augmentée par lunettes connectées et vision par ordinateur pour la chirurgie orthopédique._
  * **Localisation**: Besançon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: VR/AR, Vision, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[Pixel Wizards](https://pixel-wizards.com/)**  
  * _Studio de jeu vidéos indie, jeux en tours par tours_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://pixel-wizards.com/jobs/)


* **[PopcornFX](https://www.popcornfx.com/)**  
  * _Middleware d'effets de particules temps réel pour le jeu vidéo et la 3D._
  * **Remarque**: _Développé par la société Persistant Studios._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Pipeline/Outils de production, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX


* **[Praxinos](https://www.praxinos.coop/)**  
  * _Développement d'outils créatifs 2D pour l'animation sous Unreal Engine (Odyssey) et services de développement Unreal._
  * **Remarque**: _SARL Coopérative, mot clés: Animation 2D, Storyboard, Drawing, Realtime 3D_
  * **Produits**: Iliad, Epos, Odyssey, Ulis, etc.
  * **Localisation**: France/Metz
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Animation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.praxinos.coop/job.php)


* **[Pretty Simple](https://prettysimplegames.com/)**  
  * _Studio de jeux mobiles et sociaux (Criminal Case)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Primaa](https://primaalab.com/)**  
  * _Diagnostic du cancer par IA et analyse d'images de lames histologiques (Cleo Breast, Cleo Skin)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Prophesee.AI](https://www.prophesee.ai/)**  
  * _Dedicated vision sensors and AI for machines_
  * **Localisation**: Paris
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Générique


* **[Qarnot Computing](https://qarnot.com/)**  
  * _Calculs sur le Cloud._
  * **Remarque**: _Racheté par Scaleway (groupe Iliad) en juillet 2026._
  * **Localisation**: Paris (Montrouge)
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Générique


* **[Quantacell](https://www.quantacell.com/)**  
  * _Analyse d'images biomédicales par IA (histologie, organoïdes 3D) : logiciels HistoMetriX, AssayScope._
  * **Localisation**: France/Montpellier
  * **Nombres d'employés**: 5
  * **Domaine scientifique/technique**: Imagerie, Vision
  * **Domaine d'application**: Médical/Biologique


* **[Quantic Dream](https://www.quanticdream.com/fr)**  
  * _Développement de jeu vidéos_
  * **Remarque**: _Filiale de NetEase Games depuis 2022._
  * **Localisation**: Paris, Canada/Montréal
  * **Nombres d'employés**: 400
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://jobs.eu.lever.co/quanticdream)


* **[Ranch Computing](https://www.ranchcomputing.com/)**  
  * _Ferme de rendu en ligne CPU/GPU pour les logiciels 3D (Arnold, V-Ray, Redshift, Octane, Cycles, RenderMan...)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Web/Cloud/Big Data
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Générique


* **[Reemo](https://reemo.io/)**  
  * _Plateforme d'accès distant et de streaming de stations de travail 2D/3D, utilisée par des studios d'animation et de broadcast._
  * **Localisation**: Montévrain
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Web/Cloud/Big Data, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Générique
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/reemo)


* **[Ride FX](https://ride-fx.com/)**  
  * _Studio d'animation 3D, d'effets visuels, de VR et de vidéo-mapping pour le cinéma et les expériences immersives._
  * **Localisation**: Vannes
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Rendu offline/VFX, VR/AR, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Loisir Interactif/Immersion/Metavers, Art/Evenementiel


* **[Roblox](https://www.roblox.com/)**  
  * _Plateforme de jeu ouvert orienté création et metavers_
  * **Remarque**: _Développe une entité de <a href="https://research.roblox.com/">recherche internationale</a>_
  * **Localisation**: États-Unis/San Mateo
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://careers.roblox.com/)


* **[Roboflow](https://roboflow.com/)**  
  * _Computer Vision models_
  * **Localisation**: États-Unis/{New York, San Francisco}
  * **Domaine scientifique/technique**: Analyse de données, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://roboflow.com/careers)


* **[Saint-Gobain](https://www.saint-gobain.com/fr)**  
  * _Construction de bâtiments_
  * **Localisation**: France/Paris, International
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme, Industrie/Manufacturing/CAO


* **[SAMP](https://samp.ai/)**  
  * _Éditeur d'une plateforme de jumeaux numériques industriels qui structure les nuages de points et scans 3D par IA._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Reconstruction, Vision, Visualisation
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Énergie/Environnement


* **[Sandfall Interactive](https://www.sandfall.co)**  
  * _Studio de développement de jeux vidéo, créateur de Clair Obscur: Expedition 33 (Unreal Engine 5)._
  * **Localisation**: Montpellier
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Shiro Games](https://shirogames.com)**  
  * _Studio de développement et d'édition de jeux vidéo (Northgard, Dune: Spice Wars, Wartales), moteur maison Heaps._
  * **Localisation**: Bordeaux
  * **Nombres d'employés**: 50-99
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Shot Over](https://shotover.com/)** (SHOTOVER Systems) 
  * _Système d'imagerie gyro stabilisée pour des prises de vues sur véhicules (cinéma, sécurité, défense, etc)._
  * **Remarque**: _Issu de la fusion en 2020 de SHOTOVER Camera Systems (Queenstown, Nouvelle-Zélande) et Churchill Navigation (Boulder, Colorado)._
  * **Localisation**: États-Unis/Colorado/Boulder, Nouvelle-Zélande/Queenstown
  * **Domaine scientifique/technique**: Acquisition, Imagerie, Vision
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Art/Evenementiel, Sécurité/Défense


* **[SideFX](https://www.sidefx.com/)**  
  * _Développement du logiciel de VFX Houdini - Modélisation et Animation procédurale, simulation._
  * **Produits**: Houdini
  * **Localisation**: Canada/Toronto
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.sidefx.com/company/careers/)


* **[Sim&Cure](https://www.sim-and-cure.com/)**  
  * _Logiciel de modélisation 3D et de simulation numérique pour le traitement endovasculaire des anévrismes intracrâniens (Sim&Size)._
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Simulation, Imagerie, Reconstruction
  * **Domaine d'application**: Médical/Biologique


* **[Simerics](https://www.simerics.com/)**  
  * _CAD simulation_
  * **Localisation**: États-Unis/Washington/Bellevue
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication
  * **Domaine d'application**: Automobile/Navigation/Aviation
  * [_Jobs_](https://www.simerics.com/careers/)


* **[SkyReal](https://skyreal.tech/)** (SKR Technologies) 
  * _Éditeur d'une solution de réalité virtuelle pour la revue de maquettes numériques 3D industrielles (aéronautique, automobile, défense)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Visualisation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Automobile/Navigation/Aviation


* **[Sloclap](https://www.sloclap.com)**  
  * _Studio de développement de jeux vidéo (Absolver, Sifu, Rematch)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 100-199
  * **Domaine scientifique/technique**: Animation, Rendu temps réel/Moteurs 3D
  * **Domaine d'application**: Jeu Vidéo


* **[Solaya](https://www.solaya.ai/)**  
  * _Laboratoire/startup de numérisation 3D de produits par Gaussian splatting (application de scan mobile et pipeline entreprise)._
  * **Localisation**: Nice
  * **Nombres d'employés**: 4
  * **Domaine scientifique/technique**: Reconstruction, Acquisition, IA générative (image/3D)
  * **Domaine d'application**: Commerce/Marketing/Publicité, Industrie/Manufacturing/CAO


* **[Sony CSL](https://csl.sony.fr/)**  
  * _Centre de recherche de Sony - Computer Science Laboratories: Creativy, Music, Language, Sustainability_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision, Imagerie, Analyse de données
  * **Domaine d'application**: Générique


* **[SpirOPS](https://www.spirops.com/)**  
  * _Approches d'IA pour l'industrie et le loisir: foule virtuelles, véhicules autonomes, assistants_
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Animation, Simulation
  * **Domaine d'application**: Loisir Interactif/Immersion/Metavers, Automobile/Navigation/Aviation, Jeu Vidéo
  * [_Jobs_](https://www.spirops.com/en/jobs.php)


* **[Spline](https://spline.fr/)**  
  * _Studio d'ingénierie visuelle : motion control robotisé, camera tracking temps réel sur plateau et VFX._
  * **Localisation**: Aubervilliers, Valence
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Acquisition, Rendu temps réel/Moteurs 3D, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Commerce/Marketing/Publicité


* **[Spring Technologies](https://springtechno.com/home/)**  
  * _Éditeur de NCSIMUL, logiciel de simulation 3D d'usinage et de jumeau numérique de machines-outils à commande numérique._
  * **Localisation**: Montreuil
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Simulation, Design/Fabrication, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Square Enix](https://www.square-enix-games.com/fr_FR/home)**  
  * _Editeur de jeu vidéos_
  * **Localisation**: États-Unis/California/Los Angeles, Royaume-Uni/Londres, France/Paris, Allemagne/Hamburg, Japon/Tokyo
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Rendu offline/VFX, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://apply.workable.com/square-enix/)


* **[Stability AI](https://stability.ai/)**  
  * _IA générative pour le son, l'image et les modèles 3D._
  * **Localisation**: Royaume-Uni/Londres, Japon/Tokyo
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision
  * **Domaine d'application**: Générique, Cinéma/Films d'Animation/VFX


* **[Steamroller Studios](https://www.steamrollerstudios.com/)**  
  * _Studio pour film d'animation, jeux et expérience immersive pour parc d'attraction_
  * **Localisation**: États-Unis/Mount Dora, Canada/Vancouver, Maurice
  * **Nombres d'employés**: 260
  * **Domaine scientifique/technique**: Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Loisir Interactif/Immersion/Metavers
  * [_Jobs_](https://www.steamrolleranimation.com/careers)


* **[Stim Studio](https://www.stimstudio.com/)**  
  * _Studio créatif d'animation 3D, d'effets visuels et 2D pour le cinéma, la télévision et la publicité._
  * **Localisation**: Lyon, Angoulême
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://www.stimstudio.com/en/careers/)


* **[Stormancer](https://www.stormancer.com/)**  
  * _Jeux vidéos multi-joueurs_
  * **Localisation**: France/Lille (Tourcoing)
  * **Domaine scientifique/technique**: Web/Cloud/Big Data
  * **Domaine d'application**: Jeu Vidéo


* **[Strollhunt](https://strollhunt.com/)**  
  * _Jeux dans la ville en AR_
  * **Localisation**: Royaume-Uni/Londres
  * **Domaine scientifique/technique**: Vision, VR/AR
  * **Domaine d'application**: Jeu Vidéo


* **[Studio Draconis](https://studio-draconis.com/)**  
  * _Développement de jeux vidéo RPG tactiques (Zodiac Legion)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 2
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Studio La Cachette](https://www.studiolacachette.com/)**  
  * _Studio d'animation parisien fondé en 2014 (séries, courts métrages, clips), primé aux Emmy Awards._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Sun Creature](https://www.suncreature.com/)**  
  * _Studio d'animation et de production danois avec une filiale de fabrication à Bordeaux (animation 2D/3D)._
  * **Localisation**: Bègles
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Superprod Animation](https://www.superprod.net/fr)**  
  * _Producteur indépendant européen de films et des séries d'animation et de fiction._
  * **Remarque**: _Studios d'animation à Paris, Angoulême, Milan et Luxembourg, bureau à Los Angeles._
  * **Localisation**: France/Paris, France/Angoulême
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.werecruit.io/en/superprod)


* **[Surgar](https://www.surgar-surgery.com/)**  
  * _Logiciel de réalité augmentée pour la chirurgie laparoscopique, superposant le modèle 3D des organes à la vidéo opératoire._
  * **Localisation**: Clermont-Ferrand
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: VR/AR, Reconstruction, Imagerie
  * **Domaine d'application**: Médical/Biologique


* **[SysNav](https://www.sysnav.fr/)**  
  * _Géolocalisation de personnes et véhicules_
  * **Localisation**: Vernon, Paris
  * **Nombres d'employés**: 120
  * **Domaine scientifique/technique**: Acquisition, Reconstruction
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation, Médical/Biologique
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/sysnav/jobs)


* **[Tactical Adventures](https://www.tacticaladventures.com/)**  
  * _Studio de jeux de rôle tactiques (Solasta)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Take-Two Interactive](https://www.take2games.com/)**  
  * _Développement de jeux vidéo, et détenant d'autres entreprises (Rockstar, 2K) ainsi que l'équipe de R&D Dynamixyz à Rennes._
  * **Remarque**: _Équipe de R&D à Cesson-Sévigné (Rennes) issue de Dynamixyz (capture faciale sans marqueurs), rachetée en 2021 : travaille pour les studios du groupe (Rockstar, 2K) et publie dans les conférences de graphique._
  * **Localisation**: États-Unis/New York, France/Rennes (Cesson-Sévigné), France/Paris, International
  * **Nombres d'employés**: 12900
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Acquisition, Vision
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://careers.take2games.com/jobs)


* **[TAT](https://www.tatprod.com)** (TAT Productions) 
  * _Studio de production et de fabrication de films et séries d'animation 3D (Les As de la Jungle, Astérix et Obélix : le Combat des Chefs)._
  * **Localisation**: Toulouse
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[TeamTO](https://www.teamto.com)**  
  * _Studio d'animation 3D et 2D (séries et longs métrages), développant ses propres outils de production (suite Citrus : Tangerine, Yuzu)._
  * **Remarque**: _Repris par RIVA Studios en décembre 2024 (nouvelle structure TeamTO Animation / TeamTO Technology)._
  * **Localisation**: Paris, Valence
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Tech Soft 3D](https://www.techsoft3d.com/)**  
  * _Outils de développement (SDK HOOPS, échange de données CAO, visualisation 3D) pour la CAO/IAO_
  * **Localisation**: France/Lyon, France/Sophia Antipolis, États-Unis/Oregon/Bend, International
  * **Domaine scientifique/technique**: Design/Fabrication, Visualisation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Générique
  * [_Jobs_](https://www.techsoft3d.com/company/#careers)


* **[Technicolor Games](https://www.technicolorgames.com/)**  
  * _Creation de Jeux Vidéos_
  * **Remarque**: _Racheté en mars 2025 par TransPerfect (division TransPerfect Gaming) après la faillite du groupe Technicolor._
  * **Localisation**: Inde/Bangalore, International
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Jeu Vidéo


* **[Technodigit](https://www.linkedin.com/company/technodigit-sarl/)**  
  * _Traitement de nuages de points 3D issus de mesures (Cyclone 3DR, 3DReshaper). Filiale du groupe Hexagon._
  * **Localisation**: Lyon
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO, Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/technodigit)


* **[Techviz](https://www.techviz.net/)**  
  * _Solution de visualisation 3D par VR/AR_
  * **Localisation**: France/Paris, États-Unis
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: VR/AR, Visualisation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.techviz.net/careers/)


* **[Thales](https://www.thalesgroup.com/fr)**   :small_orange_diamond: _[Entreprise majeure avec R&D avancée en France]_
  * _Multi-nationale française à forte composante R&amp;D développant des produits pour l'aérospatiale, la défense, et la sécurité tel que la biométrie._
  * **Localisation**: France/Paris, International
  * **Nombres d'employés**: 80000
  * **Domaine scientifique/technique**: Reconstruction, Vision, Imagerie
  * **Domaine d'application**: Sécurité/Défense, Automobile/Navigation/Aviation
  * [_Jobs_](https://www.thalesgroup.com/fr/candidat)


* **[The Firehouse](https://www.firehousevfx.com/)**  
  * _Studio d'effets visuels pour films et séries : CGI, FX (Houdini), matte painting, compositing, capture LiDAR/photogrammétrie et LED volume._
  * **Localisation**: Saint-Ouen, Champagne-au-Mont-d'Or
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Reconstruction
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[The Foundry](https://www.foundry.com/)**  
  * _Développement de logiciels pour la création 3D et VFX_
  * **Produits**: [Nuke](https://www.foundry.com/products/nuke-family), [Katana](https://www.foundry.com/products/katana), [Mari](https://www.foundry.com/products/mari)
  * **Localisation**: Royaume-Uni, États-Unis, Australie
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://apply.workable.com/foundry/)


* **[The Game Bakers](https://www.thegamebakers.com/)**  
  * _Studio de jeux vidéo indépendant (Squids, Furi, Haven)_
  * **Localisation**: Montpellier
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.thegamebakers.com/category/jobs/)


* **[The Yard VFX](https://theyard-vfx.com/)**  
  * _Création d'effets visuels photoréalistes pour le cinéma (VFX)_
  * **Mots clés**: _Graphics, VFX, Pipeline_
  * **Localisation**: France/{Paris, Montpellier} (Vanves), Royaume-Uni/Londres
  * **Nombres d'employés**: 150
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation, Simulation, Pipeline/Outils de production
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.theyard-vfx.com/en-GB)


* **[Theia](https://www.theiamarkerless.com/)**  
  * _Système de capture de mouvement sans marqueurs (markerless) par vidéo_
  * **Localisation**: Canada/Ontario/Kingston
  * **Domaine scientifique/technique**: Animation, Acquisition
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.theiamarkerless.com/careers)


* **[Therenva](https://www.therenva.com/)**  
  * _Logiciels de planification et de navigation 3D par fusion d'images pour la chirurgie vasculaire endovasculaire (EndoNaut, EndoSize)._
  * **Localisation**: Rennes
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Imagerie, Visualisation, VR/AR
  * **Domaine d'application**: Médical/Biologique


* **[Thermo Fisher Scientific](https://www.thermofisher.com/amira-avizo)**  
  * _Groupe d'instrumentation scientifique ; son site de Bordeaux (FEI SAS, ex-Visualization Sciences Group) développe les logiciels de visualisation et d'analyse 3D Amira et Avizo._
  * **Localisation**: États-Unis/Waltham, France/Bordeaux, International
  * **Domaine scientifique/technique**: Visualisation, Imagerie
  * **Domaine d'application**: Médical/Biologique, Industrie/Manufacturing/CAO
  * [_Jobs_](https://jobs.thermofisher.com/)


* **[TopSolid](https://www.topsolid.com/)** (TopSolid (ex-Missler Software)) 
  * _Éditeur français de logiciels de CAO/FAO intégrés (TopSolid) pour la mécanique, l'outillage, le bois et la tôlerie._
  * **Localisation**: Évry-Courcouronnes
  * **Nombres d'employés**: 420
  * **Domaine scientifique/technique**: Design/Fabrication, Modélisation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Transvalor](https://www.transvalor.com/en/homepage)**  
  * _Éditeur de logiciels de simulation numérique des procédés de mise en forme (Forge, Thercast, Rem3D) issus de Mines Paris._
  * **Localisation**: Biot
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Simulation, Géométrie
  * **Domaine d'application**: Industrie/Manufacturing/CAO


* **[Trimaran](https://www.trimaran.com/)**  
  * _Studio d'effets visuels et d'animation 3D pour films et séries internationales (FX, environnements, matchmove, lighting)._
  * **Localisation**: Vanves, Valenciennes
  * **Nombres d'employés**: 8
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[TVPaint](https://www.tvpaint.com/)**  
  * _Logiciel d'animation 2D._
  * **Localisation**: Metz
  * **Domaine scientifique/technique**: Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[Ubisoft](https://www.ubisoft.com/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Développeur de jeux vidéo Français, possédant de nombreux studios à l'international_
  * **Remarque**: _Ubisoft a créé une entité de recherche à Bordeaux appelée "La Forge" à l'image de celle existante à Montréal. Depuis fin 2025, les licences Assassin's Creed, Far Cry et Rainbow Six sont gérées par la filiale Vantage Studios (participation de Tencent). Restructuration importante en 2026 (fermetures de studios hors de France). Studios en France : Ubisoft Paris, Ubisoft Mobile Games (Saint-Mandé), Nadeo (Trackmania, Paris), Ivory Tower (The Crew, Villeurbanne), Ubisoft Bordeaux et Ubisoft Annecy._
  * **Localisation**: France/Paris, France/Bordeaux, France/Annecy, France/Villeurbanne, Canada/{Montréal, Toronto}, États-Unis/{San Francisco, New York, Atlanta}, Inde, Allemagne, Pologne, International
  * **Nombres d'employés**: 16500
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.ubisoft.com/en-us/company/careers)


* **[Unit Image](https://www.unit-image.fr/)**  
  * _Studio d'animation 3D et d'effets visuels (cinématiques de jeux vidéo, séries, publicité)._
  * **Localisation**: Paris
  * **Nombres d'employés**: 35
  * **Domaine scientifique/technique**: Rendu offline/VFX, Animation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo


* **[Unity Technologies](https://unity.com/)**   :red_circle: _[Entreprise majeure en Graphique avec R&D avancée en France]_
  * _Développement du moteur de jeu Unity et produits associés_
  * **Remarque**: _Equipes de développement en France: <a target="_blank" href="https://unity.com/srp/High-Definition-Render-Pipeline">rendu graphique</a> (Paris, Grenoble), <a target="_blank" href="https://unity.com/products/pixyz">geometry processing</a> (Compiegne, Grenoble) et <a target="_blank" href="https://unity.com/products/sentis">IA</a> (Lille)_
  * **Localisation**: États-Unis, France/Paris, France/Grenoble, France/Compiègne, France/Lille, Canada, Danemark, Finlande, Royaume-Uni, Lituanie, Allemagne, Belgique, Suisse, International
  * **Nombres d'employés**: 7000
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo, Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://unity.com/careers)


* **[UVR](https://www.united-vr.com/)** (United Visual Researchers) 
  * _Logiciel d'analyse optique et de rendu avancé (spectral, lumière polarisée)._
  * **Produits**: [Predict](https://www.united-vr.com/home)
  * **Localisation**: France/Paris, France/Laval
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: Rendu offline/VFX, Simulation
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.welcometothejungle.com/fr/companies/united-visual-researchers)


* **[valeo.ai](https://www.valeo.com/en/valeo-ai/)**  
  * _Laboratoire de recherche en IA de Valeo à Paris, sur la perception 3D (lidar, caméras), l'apprentissage de représentations et la conduite autonome._
  * **Remarque**: _Laboratoire de recherche du groupe Valeo (équipementier automobile)._
  * **Localisation**: Paris
  * **Domaine scientifique/technique**: Vision, Reconstruction, IA générative (image/3D)
  * **Domaine d'application**: Automobile/Navigation/Aviation, Robotique/Systèmes autonomes


* **[Veesual](https://www.veesual.ai/)**  
  * _Éditeur de solutions d'essayage virtuel de vêtements par IA générative pour l'e-commerce._
  * **Localisation**: Paris
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: IA générative (image/3D), Vision
  * **Domaine d'application**: Mode/Vêtements/Accessoires, Commerce/Marketing/Publicité


* **[Vicon](https://www.vicon.com/)**  
  * _Système de Motion Capture_
  * **Remarque**: _Filiale du groupe Oxford Metrics._
  * **Localisation**: Royaume-Uni/Oxford
  * **Domaine scientifique/technique**: Acquisition, Animation, VR/AR
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX, Jeu Vidéo, Entrainement/Formation/Serious Game
  * [_Jobs_](https://www.vicon.com/careers/)


* **[Virtualis](https://www.virtualisvr.com/)**  
  * _Rééducation en réalité virtuelle_
  * **Localisation**: France/Montpellier
  * **Nombres d'employés**: 30
  * **Domaine scientifique/technique**: VR/AR
  * **Domaine d'application**: Médical/Biologique


* **[Virtuos](https://www.virtuosgames.com/)**  
  * _Studio de co-développement de jeux vidéo (portages, remasters, production d'art 3D)_
  * **Localisation**: Chine/Shanghai, Singapour, France/{Paris, Lyon, Montpellier} (Cergy), International
  * **Nombres d'employés**: 3600
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Modélisation, Animation, Simulation
  * **Domaine d'application**: Jeu Vidéo
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/virtuos)


* **[Visible Patient](https://www.visiblepatient.com/)**  
  * _Modélisation 3D personnalisée des patients à partir d'imagerie médicale (scanner, IRM) pour la planification chirurgicale._
  * **Localisation**: Strasbourg
  * **Domaine scientifique/technique**: Imagerie, Reconstruction, Visualisation
  * **Domaine d'application**: Médical/Biologique


* **[VizGraphics](https://vizgraphics.com/)**  
  * _Visualisation architecturale : rendus 3D photoréalistes, animations, visites virtuelles et expériences VR pour l'immobilier._
  * **Localisation**: États-Unis/Conifer
  * **Domaine scientifique/technique**: Rendu offline/VFX, Modélisation, Visualisation
  * **Domaine d'application**: Architecture/BTP/Urbanisme


* **[Wacom](https://www.wacom.com/)**  
  * _Tablettes et écran tactile pour la création graphique_
  * **Localisation**: Japon/Saitama, Allemagne/Dusseldorf, États-Unis/Oregon/Portland, International
  * **Domaine scientifique/technique**: Hardware, Acquisition
  * **Domaine d'application**: Générique
  * [_Jobs_](https://www.wacom.com/en-us/about-wacom/careers-at-wacom)


* **[Wanadev](https://www.wanadevstudio.com/)**  
  * _Studio de jeux vidéo VR (Ragnarock) et de solutions 3D temps réel._
  * **Localisation**: Lyon
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: VR/AR, Rendu temps réel/Moteurs 3D, Visualisation
  * **Domaine d'application**: Jeu Vidéo, Commerce/Marketing/Publicité, Architecture/BTP/Urbanisme


* **[Wandercraft](https://en.wandercraft.eu/)**  
  * _Systèmes d'exosquelettes_
  * **Localisation**: Paris
  * **Nombres d'employés**: 100
  * **Domaine scientifique/technique**: Simulation, IHM/Haptique
  * **Domaine d'application**: Robotique/Systèmes autonomes
  * [_Jobs_](https://www.welcometothejungle.com/en/companies/wandercraft/jobs)


* **[Wassa](https://wassa.io/fr/)**  
  * _Agence digitale pour applications mobiles, traitement d'image et Data Science_
  * **Localisation**: France/Paris (Boulogne-Billancourt)
  * **Nombres d'employés**: 15
  * **Domaine scientifique/technique**: IHM/Haptique, Web/Cloud/Big Data, Vision
  * **Domaine d'application**: Générique
  * [_Jobs_](https://wassa.io/fr/offres-emploi/)


* **[WetaFX](https://www.wetafx.co.nz/)**  
  * _Effets visuels pour le cinéma_
  * **Remarque**: _Entreprise majeure du domaine des VFX avec équipe de recherche active._
  * **Localisation**: Nouvelle-Zélande/Wellington
  * **Domaine scientifique/technique**: Modélisation, Animation, Simulation, Acquisition
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX
  * [_Jobs_](https://careers.wetafx.co.nz/)


* **[Wolcen Studio](https://wolcengame.com/)**  
  * _Studio de jeux d'action-RPG (Wolcen: Lords of Mayhem, Wolcen 2)._
  * **Localisation**: Nice
  * **Nombres d'employés**: 75
  * **Domaine scientifique/technique**: Rendu temps réel/Moteurs 3D, Animation, Modélisation
  * **Domaine d'application**: Jeu Vidéo


* **[Xilam](https://xilam.com)** (Xilam Animation) 
  * _Studio de production et de distribution de séries et films d'animation 2D et 3D._
  * **Localisation**: Paris, Lyon, Angoulême
  * **Domaine scientifique/technique**: Animation, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[YellowScan](https://www.yellowscan.com/)**  
  * _Systèmes LiDAR embarqués sur drone pour la cartographie et la topographie_
  * **Localisation**: France/Montpellier (Saint-Clément-de-Rivière)
  * **Nombres d'employés**: 70
  * **Domaine scientifique/technique**: Acquisition, Reconstruction, Géométrie
  * **Domaine d'application**: Géospatial/Cartographie, Patrimoine/Culture, Architecture/BTP/Urbanisme
  * [_Jobs_](https://www.yellowscan.com/career/)


* **[Zag](https://www.zag.com/)**  
  * _Studio d'animation 3D (Miraculous, les aventures de Ladybug et Chat Noir)_
  * **Remarque**: _La franchise Miraculous est gérée depuis 2024 par Miraculous Corp., coentreprise de Mediawan et Zag._
  * **Localisation**: France/Paris, États-Unis/Santa Monica
  * **Domaine scientifique/technique**: Animation, Rendu offline/VFX, Modélisation
  * **Domaine d'application**: Cinéma/Films d'Animation/VFX


* **[ZSpace](https://zspace.com/)**  
  * _Ordinateurs portables de réalité augmentée/3D stéréoscopique sans casque, avec stylet d'interaction 3D, pour l'éducation (STEM, formation technique)_
  * **Localisation**: États-Unis/San Jose
  * **Domaine scientifique/technique**: IHM/Haptique, VR/AR
  * **Domaine d'application**: Entrainement/Formation/Serious Game


