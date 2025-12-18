# PROMPT GÉNÉRAL — Amélioration continue du site JSR (jsr.4lb.ca)

## 📍 Contexte système

Tu travailles sur un serveur Linux réel via MCP (pas de sandbox).

**Chemins de travail :**
- Frontend (React/Vite/Tailwind) : `/home/lalpha/projets/clients/jsr/JSR`
- Production : `/home/lalpha/projets/clients/jsr/JSR-solutions`

⚠️ **Règles strictes :**
- Toutes les modifications sont sur le filesystem réel
- Aucun chemin éphémère (`/tmp`, `/mnt`, `/sandbox`)
- Toujours vérifier l'existence des fichiers avant modification
- Utiliser `docker compose` pour build/preview/dev

---

## 🎨 Identité visuelle & charte graphique

### Palette de couleurs (JAUNE INDUSTRIEL / MACHINERIE)

```css
/* Couleurs principales */
--accent-yellow: #E4A11B     /* Jaune machinerie (CTA, accents, bordures) */
--accent-blue: #2B3A55       /* Gris acier (secondaire) */

/* Fonds */
--bg: #101010                /* Noir carbone (fond principal) */
--bg-soft: #1A1A1A           /* Noir légèrement plus clair */
--zinc-900: #18181b          /* Sections alternées */

/* Textes */
--textc-primary: #F5F5F5     /* Texte principal (blanc cassé) */
--textc-secondary: #B0B0B0   /* Texte secondaire (gris clair) */

/* Bordures */
--border: hsl(0 0% 20%)      /* Bordures neutres */
```

### Classes Tailwind configurées

```javascript
// tailwind.config.js
colors: {
  bg: {
    DEFAULT: "#101010",
    soft: "#1A1A1A",
  },
  brand: "#E4A11B", // Alias pour compatibilité
  industrial: {
    black: "#101010",
    gray: "#2B3A55",
  },
  accent: {
    yellow: "#E4A11B",
    blue: "#2B3A55",
  },
  textc: {
    primary: "#F5F5F5",
    secondary: "#B0B0B0",
  },
}
```

### ❌ Couleurs bannies
- **Aucune teinte rouge** (`#E53E3E`, `#C53030`, `red`, `hsl(0,...)`)
- Anciennes palettes vertes (`#2F855A`, `#276749`, `#38A169`)
- Anciennes palettes turquoise/bleu (`#4DD0E1`, `#0b0c10`)

---

## 📁 Architecture du projet

### Frontend (`/home/lalpha/projets/clients/jsr/JSR`)

```
JSR/
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── CookieBanner.tsx
│   │   └── ui/            # Composants shadcn/ui
│   ├── pages/             # Pages/routes
│   │   ├── Accueil.tsx
│   │   ├── Services.tsx
│   │   ├── Realisations.tsx
│   │   ├── APropos.tsx
│   │   └── Contact.tsx
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilitaires
│   │   ├── photos.ts      # Manifest images
│   │   └── backend-email.ts
│   ├── assets/            # Images, SVG, fonts
│   └── index.css          # Variables CSS globales
├── tailwind.config.js
├── vite.config.ts
├── package.json
└── docker-compose.yml
```

---

## 🔧 Commandes essentielles

### Vérification initiale (toujours exécuter en premier)

```bash
cd /home/lalpha/projets/clients/jsr/JSR && pwd && ls -lah
```

### Développement

```bash
# Build production
cd /home/lalpha/projets/clients/jsr/JSR
docker compose build && docker compose up -d

# Voir les logs
docker logs jsr-dev -f

# Vérifier un fichier spécifique
cat src/components/Navigation.tsx
```

### Recherche de code

```bash
# Rechercher toutes les références rouges (doit être vide!)
grep -r "red\|#E53E3E\|#C53030" src/ --include="*.tsx" --include="*.css"

# Rechercher une classe Tailwind
grep -r "bg-accent-yellow\|text-accent-yellow" src/

# Trouver tous les fichiers images
find src/assets -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" \)
```

---

## 🎯 Guide de modification par composant

### Boutons

```tsx
/* Bouton principal (CTA) */
className="bg-accent-yellow hover:bg-yellow-400 text-bg px-8 py-4 font-bold"

/* Bouton secondaire */
className="border-2 border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-bg px-6 py-3"

/* Bouton sombre */
className="bg-bg text-white hover:bg-black border-2 border-bg"
```

### Header & Footer

```tsx
/* Container */
className="bg-bg border-b-3 border-accent-yellow"

/* Liens de navigation */
className="text-textc-primary hover:text-accent-yellow transition-colors"

/* Logo/Titre */
className="text-textc-primary font-heading uppercase"
```

### Sections de page

```tsx
/* Section fond noir */
className="bg-bg py-20"

/* Section fond zinc (alternance) */
className="bg-zinc-900 py-20"

/* Section accent jaune */
className="bg-accent-yellow py-16"

/* Titre de section */
className="text-3xl md:text-4xl font-heading text-white mb-6"

/* Badge/Label */
className="text-accent-yellow text-sm font-bold uppercase tracking-widest"
```

### Cartes

```tsx
/* Card container */
className="bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow p-8 transition-all"

/* Card avec bordure accent */
className="border-l-4 border-accent-yellow bg-bg/50 p-4"

/* Icône dans card */
className="text-accent-yellow w-6 h-6"
```

---

## 📝 Workflow pour toute modification

### 1️⃣ Analyse & planification

```bash
# Identifier les fichiers concernés
cd /home/lalpha/projets/clients/jsr/JSR
find src/ -name "*ComponentName*"

# Lire le contenu actuel
cat src/components/ComponentName.tsx
```

### 2️⃣ Modification

- Utiliser `str_replace` pour modifications ciblées
- Ou `create_file` pour réécriture complète
- Toujours montrer un diff ou le bloc remplacé

### 3️⃣ Vérification

```bash
# Build et test
cd /home/lalpha/projets/clients/jsr/JSR
docker compose build && docker compose up -d
docker logs jsr-dev --tail 20
```

### 4️⃣ Validation finale

- ✅ Aucune couleur rouge visible
- ✅ Thème jaune/noir cohérent
- ✅ Contraste texte/fond conforme (accessibilité)
- ✅ Responsive design fonctionnel
- ✅ Build réussi sans erreurs

---

## 🎨 Checklist d'uniformisation visuelle

Avant chaque déploiement :

- [ ] `tailwind.config.js` utilise la palette définie
- [ ] `src/index.css` contient les variables CSS
- [ ] Aucun `red`, `#E53E3E`, `hsl(0,...)` dans le code
- [ ] Tous les boutons suivent le style défini
- [ ] Header/Footer ont `bg-bg` + liens `hover:text-accent-yellow`
- [ ] SVG utilisent `currentColor` + classe `text-accent-yellow`
- [ ] Sections alternent `bg-bg` / `bg-zinc-900`

---

## 🚨 Erreurs courantes à éviter

| ❌ Ne pas faire | ✅ Faire |
|-----------------|----------|
| Écrire dans `/tmp` ou chemins sandbox | Travailler dans `/home/lalpha/projets/clients/jsr/JSR` |
| Modifier sans vérifier l'existence | Exécuter `ls -lh <chemin>` avant |
| Oublier de rebuild après modif | Toujours `docker compose build` |
| Utiliser des classes Tailwind non configurées | Vérifier `tailwind.config.js` |
| Couleurs hardcodées dans les composants | Utiliser `className="text-accent-yellow"` |

---

## 📞 Informations de contact (JSR Solutions)

**Entreprise :** JSR Solutions  
**Site dev :** https://jsr.4lb.ca  
**Site prod :** https://jsr-solutions.ca  
**Téléphone :** 418-805-0063  
**Email :** jsrdeneigement@gmail.com  
**Adresse :** 303 rue des Mélèzes, Saint-Raymond (QC)

**Licence RBQ :** 5804-4926-01  
**Assurance :** Responsabilité civile 2M$

**Services :**
- Déneigement résidentiel et commercial (24/7 en saison)
- Excavation et fondations
- Terrassement et aménagement
- Construction spécialisée (terrasses, escaliers)

**Zone de service :**
Saint-Raymond, Lac-Saint-Charles, Val-Bélair, Stoneham, Québec Nord
