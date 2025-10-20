# JSR Déneigement - Site Web

Site web professionnel pour JSR Déneigement, spécialisé dans les services d'excavation, déneigement et terrassement dans la région du Lac St-Charles et des Laurentides.

## Services

- **Déneigement** - Service rapide et fiable pour résidentiel et commercial
- **Excavation** - Travaux professionnels pour projets de construction
- **Terrassement** - Préparation et nivellement de terrain
- **Drains de fondation** - Installation et réparation de systèmes de drainage
- **Construction de terrasse** - Conception et construction durables

## Technologies utilisées

Ce projet est construit avec des technologies modernes :

- **Vite** - Outil de build rapide
- **TypeScript** - JavaScript typé pour plus de fiabilité
- **React** - Framework UI moderne
- **shadcn/ui** - Composants UI élégants
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Navigation SPA

## Installation et développement

Prérequis : Node.js et npm installés ([installer avec nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

```sh
# Cloner le projet
git clone <URL_DU_REPO>

# Naviguer dans le dossier
cd JSR

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run build:dev` - Build de développement
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## Structure du projet

```
src/
├── components/     # Composants réutilisables
├── pages/         # Pages principales du site
├── hooks/         # Hooks React personnalisés
├── lib/           # Utilitaires et helpers
└── assets/        # Images et ressources statiques
```

## Déploiement

Le site est configuré pour être déployé sur un serveur Ubuntu avec Docker ou directement avec Node.js.

## Identité visuelle (Brand)

Couleurs principales utilisées par le thème (définies dans `src/index.css` via variables CSS HSL et exposées par Tailwind comme `primary`, `accent`, etc.).

- Couleur principale (Primary)
	- Hex: `#367C2B`
	- RGB: `rgb(54, 124, 43)`
	- HSL: `hsl(112 49% 33%)`
	- Pantone approximatif: `Pantone 364 C`

Usage recommandé
- Utiliser `bg-primary` / `text-primary` / `border-primary` pour les éléments de marque et CTA.
- Les effets, halos et dégradés doivent s’appuyer sur `primary` (ex: `from-primary to-primary/80`).
- Les états destructifs/erreur conservent un rouge d’alerte via la palette `destructive`.

Emplacements clés
- Variables: `src/index.css` (`:root` et `.dark`).
- Composants impactés: `Navigation.tsx`, `Footer.tsx`, `Accueil.tsx`, `LogoShowcase.tsx`, ainsi que les composants UI shadcn qui s’appuient sur la couleur `primary`.

## Contact

JSR Déneigement - Service professionnel dans les Laurentides
