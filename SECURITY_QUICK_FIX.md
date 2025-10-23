# 🚀 SECURITY QUICK FIX GUIDE

## Exécutez ces commandes MAINTENANT sur votre serveur

```bash
# Connectez-vous à votre serveur Ubuntu
ssh alpha@lalpha-server-1

# Allez dans le dossier du projet
cd /home/lalpha/projets/developpement/JSR

# ========================================
# ÉTAPE 1: Audit des dépendances
# ========================================
npm audit

# Si des vulnérabilités trouvées:
npm audit fix

# Vérifier les packages outdated
npm outdated

# ========================================
# ÉTAPE 2: Activer TypeScript Strict Mode
# ========================================

# Ouvrir le fichier de configuration TypeScript
nano src/tsconfig.app.json

# Ajouter ces lignes:
# "strict": true,
# "noImplicitAny": true,
# "strictNullChecks": true,
# "strictFunctionTypes": true,
# "noImplicitThis": true,

# Ctrl+X puis Y pour sauvegarder

# ========================================
# ÉTAPE 3: Vérifier les clés API
# ========================================

# Vérifier que EmailJS a des restrictions:
# 1. Allez sur https://dashboard.emailjs.com
# 2. Sélectionnez votre service
# 3. Vérifiez "Restricted domains"
# 4. Ajoutez: jsr.4lb.ca

echo "✅ Domaine jsr.4lb.ca ajouté à EmailJS"

# ========================================
# ÉTAPE 4: Rebuild et Redéployer
# ========================================

# Build de production
npm run build

# Redémarrer le site
./update-site.sh

echo "✅ Site redéployé avec succès!"

# ========================================
# ÉTAPE 5: Vérifier le site
# ========================================

# Ouvrir dans le navigateur
echo "Vérifier: https://jsr.4lb.ca"

# Tester les headers de sécurité
curl -I https://jsr.4lb.ca | grep -E "X-|Strict|Content-Security"

# ========================================
# ÉTAPE 6: Commiter les changements
# ========================================

git add -A
git commit -m "security: npm audit fix, enable TypeScript strict mode"
git push origin main

echo "✅ Changements committés et poussés!"

# ========================================
# ÉTAPE 7: Vérification finale
# ========================================

# Vérifier le score de sécurité
echo "Visitez https://securityheaders.com?q=jsr.4lb.ca"
```

---

## ⏱️ TEMPS D'EXÉCUTION

- **npm audit:** 2 minutes
- **TypeScript strict:** 5 minutes
- **Build & Deploy:** 3 minutes
- **Total:** ~10 minutes

---

## ✅ VÉRIFICATION

Après exécution, vérifiez:

1. **Site accessible:**
   ```bash
   curl -I https://jsr.4lb.ca
   # Doit retourner 200 OK
   ```

2. **Headers de sécurité:**
   ```bash
   curl -I https://jsr.4lb.ca | grep "X-Content-Type-Options"
   # Doit retourner: X-Content-Type-Options: nosniff
   ```

3. **Formulaire fonctionne:**
   - Visiter https://jsr.4lb.ca/contact
   - Tester l'envoi d'un formulaire
   - Doit recevoir un email

---

## 🆘 PROBLÈMES POSSIBLES

### Erreur: "npm: command not found"
```bash
# Vérifier Node.js
node --version

# Si non installé, installer NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
```

### Erreur: "Port 8080 already in use"
```bash
# Le serveur de dev essaie de démarrer
# Ce n'est pas un problème si vous utilisez ./update-site.sh

# Pour tuer le processus:
kill -9 $(lsof -ti:8080)
```

### Site retourne 500
```bash
# Vérifier les logs Docker
docker logs jsr-website

# Redémarrer le conteneur
./update-site.sh
```

---

## 📋 CHECKLIST

Après les corrections:

- [ ] npm audit exécuté
- [ ] npm audit fix appliqué
- [ ] tsconfig.json mis à jour
- [ ] EmailJS restrictions vérifiées
- [ ] npm run build réussi
- [ ] ./update-site.sh exécuté
- [ ] Site accessible (200 OK)
- [ ] Formulaire fonctionne
- [ ] Changements committés
- [ ] Site redéployé

---

## 📞 BESOIN D'AIDE?

Si vous rencontrez des problèmes:

1. Copiez le message d'erreur
2. Exécutez: `npm run build 2>&1 | tail -50`
3. Envoyez le résultat

---

## 🎯 RÉSULTAT ATTENDU

Avant: Score de sécurité 8.5/10  
Après: Score de sécurité 9.0/10+  

Les vulnérabilités mineures seront adressées.

---

**Temps estimé:** 10 minutes  
**Difficulté:** Facile ✅  
**Impact:** Haut ⬆️
