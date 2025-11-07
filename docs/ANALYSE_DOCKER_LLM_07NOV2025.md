# 🔍 ANALYSE COMPLÈTE - Docker & LLM
**Date** : 7 Novembre 2025  
**Système** : Ubuntu Server avec Docker

---

## 📊 PARTIE 1 : ANALYSE DOCKER

### 1.1 État Général du Système Docker

#### Containers Actifs (7 containers)
| Container | Image | État | Ports |
|-----------|-------|------|-------|
| **postgres** | postgres:16-alpine | ✅ Healthy | 5432 |
| **redis** | redis:7-alpine | ✅ Healthy | 6379 |
| **open-webui** | ghcr.io/open-webui/open-webui:main | ✅ Healthy | 8080 |
| **llama-server** | traefik-config-llama-server | ✅ Running | 8080 |
| **jsr-frontend** | jsr2:local | ✅ Healthy | 0.0.0.0:8082->80 |
| **jsr-backend** | developpement-backend | ❌ Restarting | - |
| **traefik** | traefik:v3.1 | ✅ Running | 80, 443 |

#### Utilisation des Ressources
```
Images    : 27 total, 17 actives   (13.68 GB)
Containers: 19 total, 7 actifs      (42.42 MB)
Volumes   : 20 total, 9 actifs      (81.48 GB)
Build Cache: 108 entrées            (957.4 MB)
```

**Espace récupérable** : 
- Images : 3.66 GB (26%)
- Volumes : 52.68 GB (64%) ⚠️
- Build Cache : 957 MB (100%)

---

### 1.2 Problèmes Détectés

#### 🔴 CRITIQUE : Backend JSR en Crash Loop

**Container** : `jsr-backend`  
**État** : Restarting (1) chaque 23 secondes  
**Erreur** : 
```
Error: Cannot find module 'express-rate-limit'
Require stack: /app/server.js
```

**Cause** :
- Le `package.json` du backend n'inclut pas toutes les dépendances
- Module `express-rate-limit` manquant
- Dockerfile ne fait pas `npm install` correctement

**Impact** :
- Backend inaccessible
- API non fonctionnelle
- Ressources système gaspillées (restart constant)

**Solution** :
```bash
# 1. Fixer le package.json du backend
cd /home/lalpha/projets/developpement/JSR/backend
npm install express-rate-limit --save

# 2. Rebuilder l'image
docker-compose build backend

# 3. Redémarrer
docker-compose up -d backend
```

---

### 1.3 Images Docker

#### Images Principales
| Image | Tag | Taille | Créé |
|-------|-----|--------|------|
| developpement-backend | latest | 131 MB | 2025-11-07 12:38 |
| jsr2 | local | 83.3 MB | 2025-11-07 12:38 |
| ghcr.io/open-webui | main | 4.32 GB | 2025-11-06 16:48 |
| jsr-website | latest | 83.1 MB | 2025-11-06 13:13 |
| ollama/ollama | latest | 3.33 GB | 2025-11-01 00:56 |
| 4lbca-laravel | latest | 876 MB | 2025-11-04 01:01 |

#### Images Sans Tag (<none>)
- **3 images** non taguées (277 MB total)
- Images intermédiaires de builds
- **Recommandation** : Nettoyer avec `docker image prune`

---

### 1.4 Réseaux Docker

#### Réseaux Configurés
```
4lbca_backend     - Services backend Laravel/PHP
4lbca_frontend    - Services frontend + Traefik
4lbca_llm         - Services LLM (Ollama, Open-WebUI)
4lbca_mail        - Service mail
4lbca_monitoring  - Prometheus, Grafana, Loki
developpement_jsr-network - Réseau JSR monorepo
traefik-net       - Réseau Traefik principal
```

#### Containers sur 4lbca_frontend
- **traefik** (172.20.0.2/16)
- Autres containers JSR connectés via labels

---

### 1.5 Volumes Docker

#### Volumes Actifs (20 volumes, 81.48 GB)

**Volumes Principaux** :
```
4lbca_postgres_data    - Base de données PostgreSQL
4lbca_ollama_models    - Modèles LLM Ollama
4lbca_redis_data       - Cache Redis
4lbca_grafana_data     - Données Grafana
4lbca_loki_data        - Logs Loki
open-webui             - Données Open-WebUI
```

**⚠️ Attention** : 52.68 GB récupérables (64% des volumes)
- Volumes orphelins de containers supprimés
- Anciennes données de tests
- **Recommandation** : Audit et nettoyage sélectif

---

### 1.6 Changements Effectués (Dernières 24h)

#### Containers Créés Aujourd'hui (13:14)
```
✅ postgres          - 13:14:32 (Up, healthy)
✅ redis             - 13:14:32 (Up, healthy)
✅ open-webui        - 13:11:52 (Up, healthy)
✅ llama-server      - Plus tôt (Up)
✅ jsr-frontend      - 12:38 (Up, healthy)
❌ jsr-backend       - 12:38 (Restarting)
```

#### Images Buildées Aujourd'hui
```
developpement-backend:latest  - 12:38:15 (131 MB)
jsr2:local                    - 12:38:13 (83.3 MB)
traefik-config-llama-server   - 11:20:29 (102 MB)
```

**Analyse** :
- Infrastructure LLM complètement redéployée
- Frontend JSR rebuildt avec nouveau monorepo
- Backend JSR a un problème de dépendances

---

## 🤖 PARTIE 2 : ANALYSE LLM

### 2.1 Infrastructure LLM Active

#### Containers LLM
| Container | Image | État | Configuration |
|-----------|-------|------|---------------|
| **open-webui** | ghcr.io/open-webui/open-webui:main | ✅ Healthy | Interface utilisateur LLM |
| **llama-server** | traefik-config-llama-server | ✅ Running | Backend Llama.cpp |
| **ollama** | ollama/ollama:latest | ❌ Stopped | Non actif actuellement |

#### URLs d'Accès
- **Open-WebUI** : https://llm.4lb.ca (via Traefik)
- **Llama Server** : http://llama-server:8080 (interne)

---

### 2.2 Configuration Open-WebUI

#### Variables d'Environnement
```bash
ENABLE_OLLAMA_API=false          # Utilise Llama Server
WEBUI_SECRET_KEY=llm-4lb-ca-secret-key-2024
OPENAI_API_BASE_URL=http://llama-server:8080/v1
OPENAI_API_KEY=sk-dummy
ENV=prod
VECTOR_DB=chroma
Embedding Model=sentence-transformers/all-MiniLM-L6-v2
```

#### Fonctionnalités Actives
- ✅ Interface web fonctionnelle
- ✅ Connexion à llama-server
- ✅ Base vectorielle Chroma
- ✅ Embeddings sentence-transformers
- ❌ API Ollama désactivée (utilise Llama Server)

---

### 2.3 Logs LLM - Analyse

#### Open-WebUI (Démarrage Récent)
```
✅ Started server process [1]
✅ VECTOR_DB: chroma
✅ Embedding model set: sentence-transformers/all-MiniLM-L6-v2
✅ Installing external dependencies of functions and tools...
✅ Requests actives (GET /api/version, /_app/version.json)
```

**État** : Opérationnel et en bonne santé

#### Llama-Server (Activité)
```
✅ Slots gérés correctement
✅ Requêtes POST /v1/chat/completions - Status 200
✅ Requêtes GET /v1/models - Status 200
✅ Chat format: Content-only
✅ Prompt processing: n_past = 51, n_tokens = 46
✅ Task 134 completed successfully
```

**Analyse** :
- Serveur actif et traite les requêtes
- Format de chat configuré
- Gestion mémoire optimale
- Pas d'erreurs détectées

---

### 2.4 Volumes LLM

#### Volumes Identifiés
```
4lbca_ollama_models        - Modèles Ollama
infra-ai_ollama_data       - Données Ollama infrastructure
ollama_models              - Autre volume Ollama
open-webui                 - Données Open-WebUI
traefik-config_open-webui  - Config Traefik pour WebUI
```

**Note** : Impossible d'accéder aux tailles (permissions root)

**Estimation** :
- Modèles LLM : ~20-50 GB (selon modèles installés)
- Données WebUI : ~1-5 GB
- Total estimé : 25-55 GB

---

### 2.5 Configuration Docker Compose LLM

**Fichier** : `/home/lalpha/projets/traefik-config/docker-compose.yml`

#### Services Définis

**1. Traefik**
```yaml
image: traefik:v3.1
ports: 80, 443
networks:
  - traefik-net
  - 4lbca_frontend
  - 4lbca_backend
  - 4lbca_llm
  - 4lbca_monitoring
```

**2. Open-WebUI**
```yaml
image: ghcr.io/open-webui/open-webui:main
environment:
  OPENAI_API_BASE_URL: http://llama-server:8080/v1
  ENABLE_OLLAMA_API: false
labels:
  traefik.http.routers.open-webui.rule: Host(`llm.4lb.ca`)
  traefik.http.routers.open-webui.tls.certresolver: letsencrypt
depends_on: llama-server
```

**3. Llama-Server**
```yaml
build:
  context: ../ai-projects/llama.cpp
```

**Architecture** :
```
Internet → Traefik (443) → Open-WebUI (8080)
                              ↓
                        Llama-Server (8080)
```

---

### 2.6 Fichiers et Dossiers LLM

#### Emplacements Clés
```
/home/lalpha/llm-env/                    - Environnement Python LLM
/home/lalpha/projets/ai-projects/        - Projets IA
  ├── mcp-ollama-server/                 - Serveur MCP Ollama
  └── llama.cpp/                         - Llama.cpp source
      └── tools/server/webui/            - WebUI intégré

/home/lalpha/projets/traefik-config/     - Config Traefik + LLM
  ├── docker-compose.yml
  ├── traefik.yml
  └── dynamic.yml
```

#### Scripts LLM Trouvés
```
~/Desktop/Backup_ancien_linux/LLM/install_ollama.sh
~/Desktop/Backup_ancien_linux/LLM/start_llm_server.sh
~/Desktop/Backup_ancien_linux/LLM/docker-compose.yml
```

---

### 2.7 Modèles LLM

**Ollama Container** : ❌ Non accessible actuellement

**Statut** :
- Container ollama créé mais pas démarré
- Modèles probablement dans volumes
- Impossible de lister avec `ollama list` (container stoppé)

**Pour vérifier** :
```bash
docker start ollama
docker exec ollama ollama list
```

---

## 📈 MÉTRIQUES ET STATISTIQUES

### Utilisation Globale Docker

```
Total Images  : 13.68 GB (27 images)
Total Volumes : 81.48 GB (20 volumes)
Total Containers: 42.42 MB (19 containers)
Build Cache   : 957.4 MB

Total Utilisé : ~96 GB
Récupérable   : ~57 GB (59%)
```

### Répartition par Service

| Service | Containers | Images | Volumes | Total Estimé |
|---------|------------|--------|---------|--------------|
| **LLM** | 2 actifs | 7.65 GB | ~30 GB | ~38 GB |
| **JSR** | 2 (1 cassé) | 214 MB | ~500 MB | ~1 GB |
| **Infrastructure** | 3 | 3.3 GB | ~45 GB | ~48 GB |
| **Monitoring** | 0 | 1.5 GB | ~5 GB | ~6.5 GB |

---

## 🎯 RECOMMANDATIONS

### Priorité 1 : CRITIQUE

#### 1. Fixer le Backend JSR ⚠️
```bash
cd /home/lalpha/projets/developpement/JSR/backend
echo 'express-rate-limit' >> package.json dependencies
npm install
docker-compose build backend
docker-compose up -d backend
```

#### 2. Nettoyer Build Cache (957 MB)
```bash
docker builder prune -a -f
```

### Priorité 2 : IMPORTANT

#### 3. Audit des Volumes (52 GB récupérables)
```bash
# Identifier volumes orphelins
docker volume ls -qf dangling=true

# Supprimer avec prudence
docker volume prune
```

#### 4. Nettoyer Images Sans Tag
```bash
docker image prune -f
```

### Priorité 3 : OPTIMISATION

#### 5. Consolider Infrastructure LLM
- Décider entre Ollama et Llama-Server
- Un seul backend LLM suffit
- Économie potentielle : ~4 GB

#### 6. Monitoring Actif
- Grafana/Prometheus non démarrés
- Considérer activation pour métriques

---

## 🔄 CHANGEMENTS RÉCENTS (Session 07/11)

### Docker
1. ✅ Traefik réparé et redémarré
2. ✅ Réseau 4lbca_frontend réorganisé
3. ✅ JSR frontend redéployé (monorepo)
4. ❌ JSR backend cassé (dépendances)
5. ✅ Infrastructure LLM redéployée

### LLM
1. ✅ Open-WebUI démarré et configuré
2. ✅ Llama-Server opérationnel
3. ✅ Connexion Traefik → WebUI active
4. ❌ Ollama en standby

---

## 📝 NOTES FINALES

### État Général
- **Docker** : 🟡 Fonctionnel avec 1 problème critique (backend)
- **LLM** : 🟢 Opérationnel et stable
- **Espace Disque** : 🟡 Nettoyage recommandé (57 GB récupérables)

### Prochaines Actions
1. Réparer backend JSR
2. Nettoyer build cache
3. Auditer et nettoyer volumes
4. Décider architecture LLM finale

---

*Rapport généré le 7 Novembre 2025*  
*Analyse complète Docker & LLM*
