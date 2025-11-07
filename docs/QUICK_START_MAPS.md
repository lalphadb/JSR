# ⚡ Quick Start - Google Maps (Zone de Service JSR)

## 🚀 Démarrage rapide en 3 étapes

### 1️⃣ Obtenir la clé API Google Maps

Visitez: https://console.cloud.google.com/

1. Créer ou sélectionner un projet
2. Activer les APIs:
   - Maps JavaScript API
   - Places API
3. Créer une clé API
4. Restreindre la clé:
   - Domaines: `jsr.4lb.ca/*`, `localhost/*`
   - APIs: Maps JavaScript API, Places API

### 2️⃣ Configurer le projet

```bash
# Éditer le fichier de configuration
nano /home/lalpha/projets/developpement/JSR/frontend/.env.local

# Remplacer cette ligne:
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Par votre vraie clé:
VITE_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 3️⃣ Tester

```bash
cd /home/lalpha/projets/developpement/JSR
docker compose up -d
docker compose exec frontend npm run dev

# Ouvrir dans le navigateur:
# http://localhost:5173/contact
```

## ✅ Vérification

```bash
# Vérifier que tout est configuré
/home/lalpha/projets/developpement/JSR/scripts/check-maps-config.sh
```

## 🎯 Ce que vous devriez voir

Sur la page Contact (https://jsr.4lb.ca/contact):

1. ❄️ **Animation de neige** en haut
2. 📍 **Titre**: "Recevez une estimation gratuite"
3. 🗺️ **Carte Google Maps** centrée sur Québec
4. 🔴 **Zone rouge** délimitant les 50km de service
5. 🟢 **Marqueur vert** au centre (JSR)
6. 🔍 **Champ de recherche** pour entrer une adresse
7. 🔘 **Bouton CTA** "Formulaire d'estimation en ligne"

## 🐛 Dépannage express

### La carte ne s'affiche pas

```bash
# 1. Vérifier la clé API
cat /home/lalpha/projets/developpement/JSR/frontend/.env.local | grep VITE_GOOGLE_MAPS_API_KEY

# 2. Redémarrer le serveur
docker compose restart frontend

# 3. Vérifier la console navigateur (F12)
# Chercher les erreurs Google Maps
```

### Message "Referer not allowed"

→ Ajouter le domaine dans les restrictions de la clé API sur Google Cloud Console

### Autocomplétion ne fonctionne pas

→ Vérifier que Places API est activée

## 📚 Documentation complète

- Configuration détaillée: `/docs/GOOGLE_MAPS_CONFIG.md`
- Changelog: `/docs/CHANGELOG_MAPS.md`

## 🎨 Personnalisation rapide

### Changer les couleurs du polygone

Éditer: `/frontend/src/components/ServiceAreaMap.tsx`

```typescript
const polygonOptions = {
  fillColor: "#DC2626",    // Couleur de remplissage
  fillOpacity: 0.2,        // Opacité du remplissage
  strokeColor: "#DC2626",  // Couleur de la bordure
  strokeOpacity: 0.8,      // Opacité de la bordure
  strokeWeight: 3,         // Épaisseur de la bordure
};
```

### Changer la zone de service

```typescript
const serviceAreaCoordinates = [
  { lat: 46.95, lng: -71.55 },  // Ajuster ces coordonnées
  { lat: 46.95, lng: -71.0 },
  // ... ajouter ou retirer des points
];
```

### Désactiver l'effet neige

Commenter ou supprimer cette section dans `ServiceAreaMap.tsx`:

```typescript
// {snowflakes.map((flake) => (
//   <div className="snowflake" ...>❄</div>
// ))}
```

## 💰 Coûts Google Maps API

**Gratuit jusqu'à:**
- 28,000 chargements de carte / mois
- 2,500 requêtes autocomplete / mois

**Conseil:** Activer la facturation avec limite pour éviter les surprises

## 🔐 Sécurité

✅ **Recommandations appliquées:**
- Restrictions de domaine activées
- Restrictions d'API activées
- Clé API stockée dans fichier .env (non commitée)

⚠️ **N'incluez JAMAIS** la clé API dans le code versionné (git)

## 🎁 Bonus: Commandes utiles

```bash
# Vérifier le statut complet
/home/lalpha/projets/developpement/JSR/scripts/check-maps-config.sh

# Build de production
cd /home/lalpha/projets/developpement/JSR/frontend
npm run build

# Preview du build
npm run preview

# Logs en temps réel
docker compose logs -f frontend
```

---

**Questions?** Consultez `/docs/GOOGLE_MAPS_CONFIG.md` pour plus de détails.
