#!/bin/bash
set -euo pipefail

# Couleurs pour l'output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 Mise à jour du site JSR - Services de Rénovation${NC}"
echo -e "${BLUE}=================================================${NC}"
echo ""

# Vérifier qu'on est dans le bon répertoire
PROJECT_DIR="/home/lalpha/projets/developpement/JSR"
if [ "$(pwd)" != "$PROJECT_DIR" ]; then
    echo -e "${YELLOW}📂 Changement vers le répertoire du projet...${NC}"
    cd "$PROJECT_DIR"
fi

echo -e "${GREEN}✓ Répertoire: $(pwd)${NC}"
echo ""

# 1. Git pull (optionnel, ne pas échouer si pas de repo)
if [ -d .git ]; then
    echo -e "${BLUE}📥 Vérification des mises à jour Git...${NC}"
    git fetch origin >/dev/null 2>&1 || true
    
    LOCAL=$(git rev-parse @ 2>/dev/null || echo "")
    REMOTE=$(git rev-parse @{u} 2>/dev/null || echo "")
    
    if [ "$LOCAL" != "$REMOTE" ] && [ -n "$REMOTE" ]; then
        echo -e "${YELLOW}⬇️  Nouvelles modifications disponibles, pull en cours...${NC}"
        git pull origin main || git pull origin master || echo -e "${RED}⚠️  Erreur Git (non critique)${NC}"
        echo -e "${GREEN}✓ Git pull terminé${NC}"
    else
        echo -e "${GREEN}✓ Dépôt Git à jour${NC}"
    fi
else
    echo -e "${YELLOW}ℹ️  Pas de dépôt Git trouvé (mode local)${NC}"
fi
echo ""

# 2. Build l'image Docker
echo -e "${BLUE}🔨 Construction de l'image Docker...${NC}"
echo -e "${YELLOW}   (Cela peut prendre 1-2 minutes)${NC}"

if docker build --no-cache -t jsr-website:latest . >/dev/null 2>&1; then
    echo -e "${GREEN}✓ Image Docker construite avec succès${NC}"
else
    echo -e "${RED}✗ Erreur lors du build Docker${NC}"
    echo -e "${RED}  Exécutez manuellement: docker build -t jsr-website:latest .${NC}"
    exit 1
fi
echo ""

# 3. Mise à jour du conteneur PRODUCTION (jsr-website)
echo -e "${BLUE}🚀 Déploiement en PRODUCTION (jsr-website)...${NC}"

# Arrêter l'ancien conteneur
if docker ps -a --format '{{.Names}}' | grep -q "^jsr-website$"; then
    echo -e "${YELLOW}   Arrêt du conteneur existant...${NC}"
    docker rm -f jsr-website >/dev/null 2>&1
    echo -e "${GREEN}   ✓ Ancien conteneur supprimé${NC}"
fi

# Créer le réseau si nécessaire
if ! docker network inspect 4lbca_frontend >/dev/null 2>&1; then
    echo -e "${YELLOW}   Création du réseau Docker: 4lbca_frontend${NC}"
    docker network create 4lbca_frontend >/dev/null 2>&1
    echo -e "${GREEN}   ✓ Réseau créé${NC}"
fi

# Démarrer le nouveau conteneur
docker run -d \
  --name jsr-website \
  --restart unless-stopped \
  --network 4lbca_frontend \
  --label "traefik.enable=true" \
  --label "traefik.http.routers.jsr.rule=Host(\`jsr.4lb.ca\`)" \
  --label "traefik.http.routers.jsr.entrypoints=websecure" \
  --label "traefik.http.routers.jsr.tls=true" \
  --label "traefik.http.routers.jsr.tls.certresolver=letsencrypt" \
  --label "traefik.http.services.jsr.loadbalancer.server.port=80" \
  jsr-website:latest >/dev/null 2>&1

echo -e "${GREEN}✓ Conteneur PRODUCTION démarré${NC}"
echo ""

# 4. Mise à jour du conteneur DEV/PREVIEW (optionnel)
if docker ps --format '{{.Names}}' | grep -q "^jsr2-jsr2-1$"; then
    echo -e "${BLUE}🔧 Mise à jour du conteneur DEV (port 8082)...${NC}"
    
    # Rebuild avec docker-compose
    if [ -f "../docker-compose-jsr.yml" ]; then
        cd ..
        
        # Rebuild l'image frontend
        docker build -t jsr2:local JSR/ >/dev/null 2>&1
        
        # Redémarrer via docker-compose
        docker-compose -f docker-compose-jsr.yml up -d frontend >/dev/null 2>&1
        
        cd "$PROJECT_DIR"
        echo -e "${GREEN}✓ Conteneur DEV mis à jour${NC}"
    else
        echo -e "${YELLOW}⚠️  Fichier docker-compose-jsr.yml non trouvé${NC}"
    fi
else
    echo -e "${YELLOW}ℹ️  Conteneur DEV non actif (ignoré)${NC}"
fi
echo ""

# 5. Vérifications finales
echo -e "${BLUE}🔍 Vérifications...${NC}"
sleep 3

# Vérifier PRODUCTION
if docker ps --format '{{.Names}}\t{{.Status}}' | grep "^jsr-website" | grep -q "Up"; then
    echo -e "${GREEN}✓ Conteneur PRODUCTION: En ligne${NC}"
    PROD_STATUS="${GREEN}✅ Healthy${NC}"
else
    echo -e "${RED}✗ Conteneur PRODUCTION: Problème détecté${NC}"
    PROD_STATUS="${RED}❌ Erreur${NC}"
fi

# Vérifier DEV
if docker ps --format '{{.Names}}\t{{.Status}}' | grep "^jsr2-jsr2-1" | grep -q "Up"; then
    DEV_STATUS="${GREEN}✅ Healthy${NC}"
else
    DEV_STATUS="${YELLOW}⚠️  Arrêté${NC}"
fi

# Récapitulatif
echo ""
echo -e "${BLUE}═══════════════════════════════════════════${NC}"
echo -e "${BLUE}📊 RÉCAPITULATIF${NC}"
echo -e "${BLUE}═══════════════════════════════════════════${NC}"
echo -e "Production:  ${PROD_STATUS}"
echo -e "Dev Preview: ${DEV_STATUS}"
echo ""
echo -e "${GREEN}🌐 URLs disponibles:${NC}"
echo -e "   Production:  ${BLUE}https://jsr.4lb.ca${NC}"
echo -e "   Dev Preview: ${BLUE}http://localhost:8082${NC}"
echo ""
echo -e "${GREEN}📝 Commandes utiles:${NC}"
echo -e "   Logs PROD: ${YELLOW}docker logs jsr-website -f${NC}"
echo -e "   Logs DEV:  ${YELLOW}docker logs jsr2-jsr2-1 -f${NC}"
echo -e "   Status:    ${YELLOW}docker ps --filter name=jsr${NC}"
echo ""
echo -e "${GREEN}✨ Mise à jour terminée avec succès !${NC}"
