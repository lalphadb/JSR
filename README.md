# JSR - Services de Rénovation (Monorepo)

Site web professionnel pour JSR - Services de déneigement, excavation et terrassement

## 📁 Structure du Projet

```
JSR/
├── frontend/          # Application React + Vite
├── backend/           # API Node.js
├── docs/              # Documentation
├── docker-compose.yml # Orchestration des services
├── update-site.sh     # Script de déploiement
└── README.md
```

## 🚀 Déploiement Rapide

```bash
cd /home/lalpha/projets/developpement/JSR
./update-site.sh
```

## 🔧 Commandes Utiles

```bash
# Démarrer tous les services
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter les services
docker-compose down

# Rebuild
docker-compose build --no-cache

# Status
docker-compose ps
```

## 🌐 URLs

- **Frontend** : https://jsr.4lb.ca
- **Backend** : http://localhost:4000
- **API** : https://api.jsr.4lb.ca (si configuré)
- **Traefik Dashboard** : http://localhost:8080

## 📚 Documentation

Voir le dossier `docs/` pour la documentation complète.

## 🎨 Technologies

**Frontend** :
- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui

**Backend** :
- Node.js
- Express

**Infrastructure** :
- Docker
- Docker Compose
- Traefik (reverse proxy)
- Let's Encrypt (SSL)

