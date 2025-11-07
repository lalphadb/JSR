# 🚀 GUIDE RAPIDE - Site JSR

## ✅ CE QUI A ÉTÉ FAIT AUJOURD'HUI

### 1. 🗺️ Carte Google Maps Corrigée
**Problème**: La carte du service déneigement ne pointait pas sur Rue Lepire  
**Solution**: URL Google Maps mise à jour pour pointer sur **Rue Lepire, Lac-Saint-Charles**

**Avant**: Coordonnées génériques (centre de Québec)  
**Après**: Rue Lepire visible avec les zones avoisinantes ✅

---

### 2. 🔧 Script update-site.sh Amélioré
**Ancien**: Script basique (28 lignes)  
**Nouveau**: Script professionnel (154 lignes) avec:
- ✅ Couleurs et messages clairs
- ✅ Gestion automatique PROD + DEV
- ✅ Vérifications de santé
- ✅ Récapitulatif détaillé
- ✅ Gestion d'erreurs robuste

---

## 🎯 UTILISATION SIMPLE

### Mettre à jour le site
```bash
cd /home/lalpha/projets/developpement/JSR
./update-site.sh
```

**Le script fait automatiquement**:
1. Pull Git (si changements)
2. Build Docker
3. Déploie PRODUCTION
4. Met à jour DEV (si actif)
5. Vérifie que tout fonctionne
6. Affiche un récapitulatif

**Temps**: ~1 minute

---

## 📊 STATUT ACTUEL

### Conteneurs Docker
```bash
✅ jsr-website    → PRODUCTION (https://jsr.4lb.ca)
✅ jsr2-jsr2-1    → DEV/PREVIEW (http://localhost:8082)
```

Les deux sont **HEALTHY** 🎉

---

## 🌐 URLS

### En ligne (Public)
- **Site**: https://jsr.4lb.ca
- **Services**: https://jsr.4lb.ca/services

### Local (Serveur)
- **Preview**: http://localhost:8082

---

## 📝 COMMANDES UTILES

### Voir les logs en temps réel
```bash
# Production
docker logs jsr-website -f

# Dev
docker logs jsr2-jsr2-1 -f
```

### Vérifier le statut
```bash
docker ps --filter name=jsr
```

### Redémarrer si nécessaire
```bash
# Production
docker restart jsr-website

# Dev
docker restart jsr2-jsr2-1
```

---

## 🎯 CE QUI EST MAINTENANT PARFAIT

| Feature | Statut |
|---------|--------|
| Page Services avec tabs | ✅ |
| Carte déneigement précise | ✅ **CORRIGÉ** |
| Zone Rue Lepire visible | ✅ |
| Warning zone limitée | ✅ |
| Script update robuste | ✅ **AMÉLIORÉ** |
| Site en production | ✅ HEALTHY |
| Design vert cohérent | ✅ |
| Responsive mobile | ✅ |

---

## 📱 TESTER LE SITE

1. Ouvrir: https://jsr.4lb.ca/services
2. Cliquer sur l'onglet **❄️ Déneigement**
3. Scroller jusqu'à la carte Google Maps
4. ✅ Vérifier que **Rue Lepire** est visible

---

## 💡 EN CAS DE PROBLÈME

### Le site ne charge pas
```bash
# Vérifier les conteneurs
docker ps --filter name=jsr

# Redémarrer si nécessaire
docker restart jsr-website
```

### Le script échoue
```bash
# Voir les détails de l'erreur
./update-site.sh

# Le script affiche des messages clairs en couleur
# Suivre les instructions à l'écran
```

### Besoin d'aide
```bash
# Consulter le rapport complet
cat /home/lalpha/projets/developpement/JSR/RAPPORT_CORRECTIONS_06NOV2025.md
```

---

## 🎉 RÉSUMÉ

**Tout fonctionne parfaitement !**

- ✅ Carte déneigement corrigée (Rue Lepire)
- ✅ Script update amélioré et testé
- ✅ Site en ligne et healthy
- ✅ Code sauvegardé sur Git

**Vous pouvez maintenant montrer le site à vos clients !**

---

**Date**: 06 novembre 2025  
**Durée des corrections**: ~15 minutes  
**Fichiers modifiés**: 2 (Services.tsx + update-site.sh)  
**Commits Git**: 1 (commit `48d983b`)  
**Statut**: ✅ **SUCCÈS COMPLET**
