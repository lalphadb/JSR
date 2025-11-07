# 📧 Backend Email - JSR Déneigement

Backend Node.js avec Nodemailer pour gérer l'envoi d'emails du formulaire de contact.

## 🎯 Fonctionnalités

- ✅ Envoi d'emails via Gmail SMTP
- ✅ Validation des données du formulaire
- ✅ Emails HTML professionnels et stylisés
- ✅ Support CORS pour le frontend
- ✅ Health check endpoint
- ✅ Gestion d'erreurs robuste
- ✅ Conteneurisé avec Docker

## 📋 Prérequis

### Configuration Gmail

Vous devez créer un **mot de passe d'application** Gmail:

1. Allez sur votre compte Gmail: https://myaccount.google.com/
2. **Sécurité** → **Validation en deux étapes** (activez-la si pas déjà fait)
3. **Sécurité** → **Mots de passe des applications**
4. Sélectionnez "Autre (nom personnalisé)" → Tapez "JSR Backend"
5. Cliquez sur "Générer"
6. **Copiez le mot de passe généré** (16 caractères)

## ⚙️ Configuration

### 1. Variables d'environnement

Modifiez le fichier `.env`:

```bash
EMAIL_USER=jsrdeneigement@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # Votre mot de passe d'application Gmail
PORT=3001
NODE_ENV=production
```

## 🚀 Démarrage

### Option A: Avec Docker (RECOMMANDÉ)

```bash
# Construire l'image
docker build -t jsr-backend:latest .

# Lancer le conteneur
docker run -d \
  --name jsr-backend \
  -p 3001:3001 \
  --env-file .env \
  --restart unless-stopped \
  jsr-backend:latest
```

### Option B: Avec Docker Compose

Depuis le dossier `/home/lalpha/projets/developpement`:

```bash
# Démarrer tout (frontend + backend)
docker-compose -f docker-compose-jsr.yml up -d

# Voir les logs
docker-compose -f docker-compose-jsr.yml logs -f backend

# Arrêter
docker-compose -f docker-compose-jsr.yml down
```

### Option C: En local (développement)

```bash
npm install
npm start
```

## 🧪 Tester le backend

### Health Check

```bash
curl http://localhost:3001/health
```

Réponse attendue:
```json
{
  "status": "ok",
  "service": "JSR Backend Email",
  "timestamp": "2025-10-21T..."
}
```

### Tester l'envoi d'email

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Test Client",
    "telephone": "418-123-4567",
    "courriel": "test@example.com",
    "message": "Ceci est un message de test"
  }'
```

Réponse attendue:
```json
{
  "success": true,
  "message": "Email envoyé avec succès",
  "messageId": "<...@gmail.com>"
}
```

## 📡 API Endpoints

### `GET /health`
Health check du serveur

### `POST /api/contact`
Envoie un email de contact

**Body (JSON):**
```json
{
  "nom": "string (requis)",
  "telephone": "string (requis)",
  "courriel": "string (requis, format email)",
  "message": "string (requis)"
}
```

**Response Success:**
```json
{
  "success": true,
  "message": "Email envoyé avec succès",
  "messageId": "..."
}
```

**Response Error:**
```json
{
  "success": false,
  "error": "Message d'erreur"
}
```

## 🔍 Dépannage

### L'email n'est pas envoyé

1. **Vérifiez les logs:**
   ```bash
   docker logs jsr-backend
   ```

2. **Vérifiez la configuration Gmail:**
   - Le mot de passe d'application est correct?
   - La validation en deux étapes est activée?

3. **Testez la connexion Gmail:**
   ```bash
   docker exec -it jsr-backend node -e "
   const nodemailer = require('nodemailer');
   const transport = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD
     }
   });
   transport.verify().then(console.log).catch(console.error);
   "
   ```

### Erreur CORS

Si vous avez des erreurs CORS depuis le frontend:

1. Vérifiez que l'URL frontend est dans la liste CORS du backend (server.js)
2. Vérifiez que `VITE_BACKEND_URL` dans le frontend pointe vers le bon backend

## 📦 Structure

```
JSR-backend/
├── server.js           # Serveur Express principal
├── package.json        # Dépendances Node.js
├── Dockerfile          # Configuration Docker
├── .env               # Variables d'environnement (NE PAS COMMITER!)
├── .dockerignore      # Fichiers ignorés par Docker
├── .gitignore         # Fichiers ignorés par Git
└── README.md          # Ce fichier
```

## 🔐 Sécurité

- ✅ Les mots de passe sont dans .env (jamais dans Git)
- ✅ CORS configuré pour limiter les origines
- ✅ Validation des données entrantes
- ✅ Pas d'informations sensibles dans les logs
- ✅ Rate limiting recommandé pour la production

## 📝 Logs

Les logs montrent:
- ✅ Démarrage du serveur
- 📧 Emails envoyés (avec nom et email de l'expéditeur)
- ❌ Erreurs d'envoi

## 🚀 Déploiement en production

Pour la production, considérez:

1. **Rate limiting** - Limiter le nombre de requêtes par IP
2. **HTTPS** - Utiliser un reverse proxy (nginx/Caddy)
3. **Monitoring** - Ajouter des logs vers un service externe
4. **Backups** - Sauvegarder les variables d'environnement

---

**Créé le:** 21 octobre 2025  
**Version:** 1.0.0
