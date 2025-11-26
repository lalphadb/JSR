# JSR Solutions - Site Web Officiel

Site web professionnel pour **JSR Solutions**, entreprise spécialisée en excavation, déneigement et construction spécialisée dans la région de Saint-Raymond et environs.

## Identité Visuelle : Thème Industriel

Le site a été entièrement refondu avec une esthétique "Industrielle / Construction" pour refléter la robustesse et le professionnalisme de l'entreprise.

### Palette de Couleurs
- **Fond (Background)** : Noir Industriel (`#101010`) et Zinc Profond (`#18181b`)
- **Accent** : Jaune Construction (`#E4A11B`)
- **Texte** : Blanc (`#FFFFFF`) et Gris Acier (`#D4D4D8`)

### Design System
- **Formes** : Angles droits (`rounded-none`), bordures épaisses (`border-2`, `border-4`).
- **Typographie** : Titres en majuscules, graisses fortes (Black/Bold).
- **Ambiance** : Contraste élevé, lisibilité maximale, style "Heavy Duty".

## Services

- **Déneigement** - Service 24/7 en saison, contrats résidentiels, commerciaux et industriels
- **Excavation** - Fondations, tranchées, nivellement, murs de soutènement, drain français
- **Construction spécialisée** - Terrasses, escaliers extérieurs, aménagements structuraux

## Technologies utilisées

Ce projet est construit avec des technologies modernes :

- **Vite** - Outil de build rapide
- **TypeScript** - JavaScript typé pour plus de fiabilité
- **React** - Framework UI moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **Docker** - Conteneurisation pour un déploiement facile

## Installation et Démarrage (Docker)

La méthode recommandée pour lancer le projet est d'utiliser Docker Compose.

### Prérequis
- Docker et Docker Compose installés sur votre machine.

### Lancer le projet

```bash
# Construire et lancer le conteneur en arrière-plan
docker compose up -d --build
```

Le site sera accessible sur `http://localhost:8080`.

### Arrêter le projet

```bash
docker compose down
```

## Installation et Développement (Local)

Si vous préférez travailler sans Docker :

Prérequis : Node.js et npm installés.

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## Structure du projet

```
src/
├── components/     # Composants réutilisables (Navigation, Footer, UI)
├── pages/          # Pages principales (Accueil, Services, Contact, etc.)
├── hooks/          # Hooks React personnalisés
├── lib/            # Utilitaires et helpers
└── assets/         # Images et ressources statiques
```

## Contact

**JSR Solutions**
303 rue des Mélèzes, Saint-Raymond (QC)
Téléphone : 418-805-0063
Courriel : info@jsrprosolutions.com

