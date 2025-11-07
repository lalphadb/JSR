# 🎯 BRIEF COMPLET - JSR Déneigement - Prompt pour IA

> **Utilisation**: Copiez ce texte complet et collez-le à une IA (Claude, ChatGPT, etc.) pour continuer ou améliorer le site JSR Déneigement.

---

## 📋 TABLE DES MATIÈRES
1. [Objectifs](#objectifs)
2. [Contexte Technique](#contexte-technique)
3. [Charte Visuelle](#charte-visuelle)
4. [Architecture du Projet](#architecture-du-projet)
5. [État Actuel](#état-actuel)
6. [Backlog d'Améliorations](#backlog-daméliorations)
7. [Critères d'Acceptation](#critères-dacceptation)
8. [Guidelines de Mise en Œuvre](#guidelines-de-mise-en-œuvre)
9. [Déploiement](#déploiement)

---

## 🎯 OBJECTIFS

- **Court terme (Phase 1)**: Améliorer UX/UI, cohérence visuelle, SEO local.
- **Moyen terme (Phase 2)**: Ajouter témoignages clients, galerie avant/après, blog.
- **Long terme (Phase 3)**: Intégrer chat en direct, devis en ligne, intégration Google My Business.

**Priorité immédiate**: 
- [ ] Harmoniser la page "À propos"
- [ ] Ajouter meta OG et Twitter cards
- [ ] Améliorer accessibilité et contraste
- [ ] Vérifier SEO local

---

## 🛠️ CONTEXTE TECHNIQUE

### Stack
```
Frontend:
- Vite (build ultra-rapide)
- React 18 + TypeScript
- Tailwind CSS (utility-first)
- shadcn/ui (composants accessibles)
- React Router (routing SPA)

Backend/Deploy:
- Docker (Node alpine → Nginx alpine)
- Traefik (reverse proxy + SSL)
- Ubuntu 24 LTS (serveur)

Code Quality:
- ESLint + Prettier (recommandé)
- TypeScript strict mode
- Build validation automatique
```

### Structure des dossiers
```
/home/lalpha/projets/developpement/JSR/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx          # Header avec logo vert
│   │   ├── Footer.tsx              # Footer + badges
│   │   ├── LogoShowcase.tsx        # Logo avec animations
│   │   └── ui/                     # shadcn/ui components
│   ├── pages/
│   │   ├── Accueil.tsx             # Hero + services
│   │   ├── Services.tsx            # Liste services + images
│   │   ├── Realisations.tsx        # Galerie projets
│   │   ├── APropos.tsx             # À améliorer
│   │   └── Contact.tsx             # Formulaire
│   ├── lib/
│   │   ├── photos.ts               # Manifest images
│   │   └── utils.ts
│   ├── assets/
│   │   ├── jsr-logo-transparent.webp
│   │   └── photos/
│   │       ├── real/               # Images réelles
│   │       └── services/           # Photos par service
│   ├── index.css                   # Design tokens (variables HSL)
│   └── main.tsx
├── Dockerfile                       # Build multi-stage
├── docker-compose.yml
├── tailwind.config.ts              # Tailwind + plugins
├── vite.config.ts                  # Vite config
├── package.json                    # Dépendances
├── README.md                       # Doc technique
└── update-site.sh                  # Script déploiement

Domaine live: https://jsr.4lb.ca (Traefik)
```

### Commandes clés
```bash
# Développement
npm run dev              # Lancer serveur Vite sur :5173
npm run build            # Build production
npm run preview          # Prévisualiser build
npm run lint             # ESLint check

# Déploiement
./update-site.sh         # Rebuild Docker + redémarrer conteneur
docker-compose logs      # Voir logs du conteneur
```

---

## 🎨 CHARTE VISUELLE

### Couleur Primaire (Vert Marque)
```
Hex:      #367C2B
RGB:      rgb(54, 124, 43)
HSL:      hsl(112 49% 33%)      [clair]
HSL Dark: hsl(112 50% 38%)      [sombre]
Pantone:  364 C (approximatif)
```

### Utilisation dans Tailwind
```tsx
// ✅ CORRECT
<button className="bg-primary text-white hover:bg-primary/90">CTA</button>
<div className="border border-primary">Contenu</div>
<h1 className="text-primary font-bold">Titre</h1>

// ❌ À ÉVITER
<button className="bg-red-500">...</button>           // Rouge banni (sauf destructive)
<div className="bg-[#367C2B]">...</div>                // Hex hardcodé → utiliser primary
```

### Palette complète (variables CSS dans `src/index.css`)
```css
:root {
  --primary: 112 49% 33%;              /* Vert principal */
  --accent: 112 50% 38%;               /* Variante sombre */
  --destructive: 0 84% 60%;            /* Rouge pour erreurs/suppression */
  --foreground: 0 0% 100%;             /* Blanc */
  --background: 0 0% 5%;               /* Noir très sombre */
  --muted: 0 0% 96%;                   /* Gris clair */
  --border: 0 0% 90%;                  /* Bordures légères */
}

.dark {
  --foreground: 0 0% 98%;              /* Blanc en mode sombre */
  --background: 0 0% 8%;               /* Noir légèrement moins sombre */
  --muted: 0 0% 20%;                   /* Gris sombre */
}
```

### Effets spéciaux (gradients, halos)
```css
.gradient-primary {
  @apply bg-gradient-to-r from-primary to-primary/80;
}

.logo-halo {
  box-shadow: 0 0 60px rgba(54, 124, 43, 0.4),
              0 0 100px rgba(54, 124, 43, 0.2);
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(54, 124, 43, 0.2); }
  50%      { box-shadow: 0 0 40px rgba(54, 124, 43, 0.5); }
}
```

**Règle**: Tous les accents doivent être VERTS. Le rouge est réservé aux états destructifs/erreurs.

---

## 📁 ARCHITECTURE DU PROJET

### Pages principales
1. **Accueil** (`Accueil.tsx`)
   - Hero avec photo "parc de camions"
   - 3-4 CTA vers Services/Contact
   - Ruban de services cliquables

2. **Services** (`Services.tsx`)
   - Grille 2x3 (desktop) / 1x6 (mobile) des services
   - Chaque service: image réelle + description + CTA
   - Images via `<picture>` (WebP + fallback JPG)

3. **Réalisations** (`Realisations.tsx`)
   - Galerie de projets complétés
   - Avant/après si possible
   - Photos réelles JSR

4. **À propos** (`APropos.tsx`)
   - **À AMÉLIORER**: Remplacer image par vraie photo
   - Équipe JSR + historique
   - Valeurs/philosophie

5. **Contact** (`Contact.tsx`)
   - Formulaire (actuellement simulation)
   - Infos: adresse, tél, horaires
   - Carte Google Maps (placeholder)

### Composants réutilisables
- `Navigation.tsx` - Header responsive avec logo vert
- `Footer.tsx` - Liens + badges + infos légales
- `LogoShowcase.tsx` - Logo transparent avec animations

---

## 📸 IMAGES ET ASSETS

### Manifest centralisé (`src/lib/photos.ts`)
```typescript
export const PHOTOS = {
  hero: {
    webp: '/assets/photos/real/hero-640.webp',
    jpg: '/assets/photos/real/hero-1280.jpg',
    alt: 'Parc de camions JSR Déneigement'
  },
  services: {
    deneigement: {
      webp: '/assets/photos/services/deneigement-640.webp',
      jpg: '/assets/photos/services/deneigement-1280.jpg',
      alt: 'Service de déneigement professionnel'
    },
    // ... autres services
  }
};
```

### Format images
- **WebP prioritaire** (moderne, compressé): 640px
- **Fallback JPG/PNG**: 1280px (anciens navigateurs)
- **Always use `<picture>`**:
```tsx
<picture>
  <source srcSet={PHOTOS.hero.webp} type="image/webp" />
  <img src={PHOTOS.hero.jpg} alt={PHOTOS.hero.alt} loading="lazy" />
</picture>
```

### Localisation images
```
src/assets/photos/
├── real/               # Images accueil/pages générales
│   ├── hero-640.webp
│   ├── hero-1280.jpg
│   └── ...
└── services/           # Images par service
    ├── deneigement-640.webp
    ├── deneigement-1280.jpg
    ├── excavation-640.webp
    ├── excavation-1280.jpg
    └── ...
```

**Important**: Toutes les nouvelles images doivent être:
1. Optimisées en WebP (Sharp/ImageMagick)
2. Générées en 2 résolutions (640px et 1280px)
3. Ajoutées au manifest photos.ts
4. Utilisées via `<picture>` dans les composants

---

## 📊 ÉTAT ACTUEL

### ✅ Complété
- [x] Design system vert (#367C2B) appliqué globalement
- [x] Logo transparent WebP + PNG fallback
- [x] Hero accueil avec vraie photo (parc de camions)
- [x] Services + Réalisations avec images réelles
- [x] Navigation responsive + footer cohérents
- [x] Cache optimisé:
  - HTML: `no-store` (pas de cache)
  - Assets statiques: `max-age=31536000, immutable`
- [x] Docker + Nginx SPA routing configurés
- [x] Déploiement Traefik opérationnel

### ⚠️ À améliorer
- [ ] **À propos**: Image héro à remplacer (actuellement générique)
- [ ] **SEO**: Meta OG/Twitter cards manquantes
- [ ] **Accessibilité**: Vérifier contrastes et focus
- [ ] **Contenu**: Alt text à enrichir
- [ ] **Performance**: Lighthouse audit à relancer
- [ ] **Contact**: Formulaire non fonctionnel (simulation)
- [ ] **Témoignages**: Section manquante

### ❌ Obsolète
- Lovable tags (supprimés)
- Images stock génériques (remplacées par réelles)
- Palette rouge (convertie en vert)

---

## 🚀 BACKLOG D'AMÉLIORATIONS

### 🔥 Haute Priorité (Phase 1 - Semaine 1-2)
```
1. [ ] À propos.tsx
   - Remplacer image générique par vraie photo
   - Harmoniser overlay/badges avec charte
   - Ajouter section "Équipe"
   
2. [ ] SEO & Meta tags
   - Ajouter Open Graph (og:title, og:description, og:image)
   - Twitter cards (twitter:title, etc.)
   - Meta descriptions uniques par page
   - Balises H1/H2/H3 sémantiques
   
3. [ ] Accessibilité
   - Audit contraste (WCAG AA minimum)
   - Vérifier focus keyboard
   - Aria-labels sur boutons/icons
   
4. [ ] Contact
   - Intégrer vraie carte Google Maps
   - Valider formulaire (ou hook backend)
   - Ajouter widget WhatsApp
```

### 📈 Priorité Normale (Phase 2 - Semaine 3-4)
```
5. [ ] Témoignages
   - Créer composant TestimonialCard
   - Ajouter page/section dédiée
   - Inclure photos clients
   
6. [ ] Galerie avant/après
   - Intégrer slider d'images
   - Avant = photo grise / Après = photo couleur
   
7. [ ] Blog / Conseils
   - Création page Blog.tsx
   - 3-5 articles conseils (déneigement, excavation, etc.)
   - Liens internes SEO
   
8. [ ] Performances
   - Lighthouse audit complet (viser 90+)
   - Optimiser CLS, FCP
   - Vérifier Code splitting Vite
```

### 🎯 Faible Priorité (Phase 3 - Futur)
```
9. [ ] Chat en direct (type Intercom)
10. [ ] Devis en ligne détaillé
11. [ ] Google My Business intégration
12. [ ] Analytics avancée (Google Analytics 4)
13. [ ] PWA capabilities
```

---

## ✅ CRITÈRES D'ACCEPTATION

Pour tout changement apporté au site:

- [ ] **Build**: `npm run build` réussit sans erreurs/warnings
- [ ] **Lint**: `npm run lint` passe (ESLint strict)
- [ ] **Type**: `npx tsc --noEmit` sans erreurs TypeScript
- [ ] **Visuel**: Pas de régressions sur Accueil/Services/Réalisations
- [ ] **Charte**: Toutes les couleurs respectent le vert primaire
- [ ] **Images**: `<picture>` utilisé; WebP prioritaire
- [ ] **Performance**: Pas de ralentissement notable (mesure Lighthouse ou DevTools)
- [ ] **Accessibilité**: Au minimum WCAG A; idéal AA
- [ ] **Cache**: Headers conservés (HTML no-store; assets immutable)
- [ ] **SPA Routing**: Navigation client fonctionne; URLs propagées correctement
- [ ] **SEO**: Meta tags, titres H1 uniques, alt text descriptifs

---

## 📝 GUIDELINES DE MISE EN ŒUVRE

### Couleurs et design tokens
```tsx
// ✅ TOUJOURS utiliser les classes Tailwind
<button className="bg-primary hover:bg-primary/90 text-white">
  Action
</button>

// ✅ Créer une variable CSS si besoin d'une teinte spéciale
/* Dans src/index.css */
.btn-primary-outline {
  @apply border-2 border-primary text-primary hover:bg-primary/5;
}

// ❌ JAMAIS hardcoder une hex
<div style={{ background: '#367C2B' }}>...</div>

// ❌ JAMAIS utiliser une classe Tailwind incompatible
<button className="bg-red-500">...</button>  // ✗ Sauf si destructive (erreur/delete)
```

### Images et Assets
```tsx
// ✅ UTILISER le manifest photos.ts
import { PHOTOS } from '@/lib/photos';

export function HeroSection() {
  return (
    <picture>
      <source srcSet={PHOTOS.hero.webp} type="image/webp" />
      <img 
        src={PHOTOS.hero.jpg} 
        alt={PHOTOS.hero.alt} 
        loading="lazy"
        width={1280}
        height={720}
      />
    </picture>
  );
}

// ❌ JAMAIS importer directement
import heroImg from '@/assets/photos/hero.jpg';
<img src={heroImg} />
```

### Composants et réutilisabilité
```tsx
// ✅ Utiliser shadcn/ui pour consistency
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

<Card className="border-primary">
  <Button className="bg-primary">Action</Button>
</Card>

// ❌ Créer des composants ad-hoc sans standard
<div className="custom-button-style-12345">...</div>
```

### TypeScript strict
```tsx
// ✅ Typer les props
interface HeroProps {
  title: string;
  imageUrl: string;
  onCTA?: () => void;
}

export function Hero({ title, imageUrl, onCTA }: HeroProps) {
  return (...)
}

// ❌ Utiliser `any`
function Hero(props: any) { ... }
```

### Accessibilité
```tsx
// ✅ Alt text descriptif
<img alt="Équipe JSR devant camion de déneigement" src="..." />

// ✅ Aria labels sur buttons
<button aria-label="Ouvrir menu mobile" onClick={toggleMenu}>
  <Menu size={24} />
</button>

// ✅ Contraste WCAG AA
/* Texte sombre sur fond clair ou inversement */
.text-primary {
  /* color: hsl(112, 49%, 33%) → contraste ✓ sur fond blanc */
}

// ❌ Alt vides
<img alt="" src="..." />

// ❌ Contraste insuffisant
.text-gray-300 { color: #d1d5db; }  /* Sur fond blanc = faible contraste */
```

### Commits et Git
```bash
# Format: type(scope): description
# Exemples:

git commit -m "feat(pages): add testimonials section with photos"
git commit -m "fix(footer): correct spacing on mobile"
git commit -m "docs(readme): add brand color specs"
git commit -m "refactor(services): extract ServiceCard component"
git commit -m "chore(deps): update dependencies"
```

---

## 🚀 DÉPLOIEMENT

### Workflow actuel
```bash
1. Développement local
   npm run dev              # Vite serveur hot-reload

2. Vérification
   npm run build            # Build production
   npm run lint             # ESLint check
   npm run preview          # Prévisualiser

3. Commit & Push
   git add -A
   git commit -m "feat: description"
   git push origin main

4. Déploiement production
   ssh user@ubuntu-server
   cd /home/lalpha/projets/developpement/JSR
   ./update-site.sh         # Rebuild Docker + restart

5. Vérification live
   curl -I https://jsr.4lb.ca     # Check headers
   curl https://jsr.4lb.ca | head # Check HTML
```

### Fichiers de déploiement à préserver
```
- Dockerfile              # Build image (Node → Nginx)
- docker-compose.yml      # Orchestration (optionnel, utilisé via update-site.sh)
- update-site.sh          # Script redéploiement
- tailwind.config.ts      # Tailwind config (mappe les tokens)
- vite.config.ts          # Vite config
- package.json            # Dépendances
- nginx.conf (si existe)  # Config Nginx (générée dans Dockerfile)
```

### Cache headers (en production)
```
HTML (index.html, routes SPA):
  Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
  → Force refetch à chaque requête

Assets statiques (JS/CSS hashés, images):
  Cache-Control: public, max-age=31536000, immutable
  → Cache agressif (1 an); hash change = bust automatique
```

**Ne pas modifier cette stratégie** sans bonne raison (critique de perf identifiée).

---

## 🔐 Sécurité & Qualité

### Vulnérabilités npm
```bash
npm audit               # Checker les vulnérabilités
npm audit fix           # Corriger automatiquement si possible
npm update              # Mettre à jour les dépendances
```

### Lint & Format
```bash
npm run lint            # ESLint strict (via Vite)
npx prettier --write src/   # Format code (si Prettier installé)
```

### Test local avant déploiement
```bash
npm run build           # Vérifier build production
npm run preview         # Servir dist localement
# Visiter http://localhost:4173 et vérifier pages
```

---

## 📞 SUPPORT & RESSOURCES

### Documentation officielle
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Docker Docs](https://docs.docker.com)

### Commandes d'urgence
```bash
# Si site down après déploiement
docker-compose logs -f             # Voir les erreurs en temps réel
docker-compose restart jsr-website # Redémarrer le conteneur
git revert HEAD~1                  # Reverter le dernier commit

# Nettoyer build/cache
rm -rf dist node_modules
npm install
npm run build
```

---

## 📊 MÉTRIQUES DE SUCCÈS

### Avant (baseline)
- Google Lighthouse: 85/100
- Images: Stock génériques
- SEO: Basique
- Branding: Rouge incohérent

### Cible (après improvements)
- Google Lighthouse: 92+ / 100
- Images: Toutes réelles + optimisées WebP
- SEO: Meta OG, Twitter cards, descriptions uniques
- Branding: Vert cohérent partout
- Accessibilité: WCAG AA
- Témoignages: 3-5 affichés
- Contact: Formulaire + carte fonctionnelle

### ROI estimé
```
+30% leads générés (SEO + UX)
+40% taux conversion (crédibilité + images réelles)
+20% trafic organique (méta + blog)
-50% support (FAQ + chat)
```

---

## 🎯 EXEMPLE DE TÂCHE SIMPLE

### Tâche: Améliorer la page À propos

**Description**:
Remplacer l'image générique de la page APropos.tsx par une vraie photo JSR (équipe ou équipement).

**Acceptation Criteria**:
- [ ] Photo remplacée via `<picture>` (WebP + JPG)
- [ ] Nouvelle photo ajoutée au manifest photos.ts
- [ ] Alt text descriptif
- [ ] Build réussit
- [ ] Aucune régression visuelle
- [ ] Commit avec message format: `feat(pages): update APropos hero with team photo`

**Implémentation**:
```tsx
// src/lib/photos.ts
export const PHOTOS = {
  // ... existing
  apropos: {
    webp: '/assets/photos/real/apropos-640.webp',
    jpg: '/assets/photos/real/apropos-1280.jpg',
    alt: 'Équipe JSR Déneigement au complet'
  }
};

// src/pages/APropos.tsx
import { PHOTOS } from '@/lib/photos';

export function APropos() {
  return (
    <div>
      <picture>
        <source srcSet={PHOTOS.apropos.webp} type="image/webp" />
        <img 
          src={PHOTOS.apropos.jpg} 
          alt={PHOTOS.apropos.alt}
          className="w-full h-96 object-cover rounded-lg"
        />
      </picture>
      {/* ... contenu */}
    </div>
  );
}
```

---

## 📋 CHECKLIST PRÉ-DÉPLOIEMENT

Avant chaque `./update-site.sh`:
- [ ] `npm run build` ✓ (pas d'erreurs)
- [ ] `npm run lint` ✓ (pas de warnings)
- [ ] `npx tsc --noEmit` ✓ (pas d'erreurs TypeScript)
- [ ] Vérifier visuellement: http://localhost:5173 (npm run dev)
- [ ] Vérifier build: http://localhost:4173 (npm run preview)
- [ ] Git status propre: `git status` (pas de fichiers non-committé)
- [ ] Commits descriptifs: `git log --oneline -5`
- [ ] `git push origin main` réussi
- [ ] Puis: `./update-site.sh`
- [ ] Vérifier live: https://jsr.4lb.ca (Ctrl+F5 pour hard refresh)

---

## 🎓 RÉSUMÉ FINAL

**Objectif global**: Transformer JSR Déneigement en un site web professionnel, moderne, performant et optimisé SEO/UX.

**Clés de succès**:
1. Respecter la charte vert (#367C2B)
2. Utiliser `<picture>` pour toutes les images
3. Typage TypeScript strict
4. Cache headers intouchables
5. Commits clairs et descriptifs
6. Tester localement avant déploiement
7. Vérifier Lighthouse régulièrement

**Contact**: Pour questions techniques, consulter le README.md du repo ou relancer cette demande à une IA avec contexte spécifique.

---

**Bonne chance pour l'amélioration de JSR Déneigement! 🚀**

