# 📋 Plan d'Amélioration JSR Déneigement & Excavation

Ce document recense les corrections critiques, les optimisations de performance et les ajustements visuels nécessaires basés sur l'audit du code source.

---

## 🚨 Phase 1 : Correctifs Critiques (Fonctionnel) ✅ COMPLÉTÉ

- [x] **Corriger la palette de couleurs (Identité visuelle)**
  - Fichier : `index.css`
  - Action : Remplacé le bleu par le vert JSR (#2F855A)

- [x] **Dynamiser l'année du Copyright**
  - Fichier : `Footer.tsx`
  - Action : Utilisation de `{new Date().getFullYear()}`

- [x] **Navigation SPA correcte**
  - Fichier : `Footer.tsx`
  - Action : Utilisation de `<Link>` au lieu de `<a>`

---

## ⚡ Phase 2 : Performance & Vitesse ✅ COMPLÉTÉ

- [x] **Lazy Loading (Code Splitting)**
  - Fichier : `App.tsx`
  - Action : `const Page = lazy(() => import('./pages/Page'))`
  - Résultat : Chargement initial plus rapide

- [x] **ScrollToTop**
  - Fichier : `App.tsx`
  - Action : Remonte en haut à chaque changement de route

---

## 🛡️ Phase 3 : Légal, Sécurité & SEO ✅ COMPLÉTÉ

- [x] **Bannière de Consentement (Loi 25 Québec)**
  - Fichier : `CookieBanner.tsx`
  - Action : Composant créé avec accepter/refuser
  - Note : Bloque GA tant que non accepté

- [x] **Content Security Policy (CSP)**
  - Fichier : `index.html`
  - Action : Headers de sécurité ajoutés

- [x] **Leaflet CSS**
  - Fichier : `index.html`
  - Action : CSS importé pour les cartes

- [x] **Theme Color vert**
  - Fichier : `index.html`
  - Action : `#2F855A` au lieu de `#b91c1c`

---

## 📱 Phase 4 : UX & Design Mobile ✅ COMPLÉTÉ

- [x] **Page 404 améliorée**
  - Fichier : `NotFound.tsx`
  - Action : Boutons d'action clairs (Accueil, Services, Urgence)

---

## ✨ Phase 5 : Optimisations futures (Nice to have)

- [ ] **Chargement différé de Leaflet**
  - Fichier : `ServiceAreaMap.tsx`
  - Action : Intersection Observer pour charger au scroll

- [ ] **Images optimisées WebP**
  - Action : Convertir toutes les images en WebP avec fallback

- [ ] **Préconnexion aux ressources externes**
  - Action : `<link rel="preconnect">` pour fonts, analytics

- [ ] **Service Worker (PWA)**
  - Action : Cache offline pour les assets statiques

---

## 🚀 Résumé des commits

1. `bd01cf9` - feat: Modernisation complète - couleurs vertes, lazy loading, cookie banner, 404 améliorée
2. Prochains commits pour Phase 5

---

## 📊 Impact attendu

| Métrique | Avant | Après |
|----------|-------|-------|
| First Contentful Paint | ~2.5s | ~1.2s |
| Largest Contentful Paint | ~4s | ~2s |
| Conformité Loi 25 | ❌ | ✅ |
| Score Lighthouse | ~65 | ~85+ |

---

*Plan créé le 20 novembre 2025*
*Basé sur l'audit de code Gemini*
