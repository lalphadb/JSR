#!/bin/bash
# Script de déploiement JSR - Version améliorée

set -e
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log_success() { echo -e "${GREEN}✅ $1${NC}"; }
log_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
log_error() { echo -e "${RED}❌ $1${NC}"; }

# Configuration
PROJECT_DIR="/home/lalpha/projets/developpement/JSR"
CONTAINER_PROD="jsr-website"
IMAGE_PROD="jsr-website:latest"

log_info "═══ DÉPLOIEMENT JSR PRODUCTION ═══"

# Build
log_info "Construction de l'image..."
cd "$PROJECT_DIR"
docker build -t "$IMAGE_PROD" . > /tmp/jsr_build.log 2>&1
log_success "Image construite"

# Stop & Remove
if docker ps -a | grep -q "$CONTAINER_PROD"; then
    log_info "Arrêt du conteneur existant..."
    docker stop "$CONTAINER_PROD" > /dev/null 2>&1 || true
    docker rm "$CONTAINER_PROD" > /dev/null 2>&1 || true
fi

# Deploy
log_info "Démarrage du conteneur..."
docker run -d \
    --name "$CONTAINER_PROD" \
    --network 4lbca_frontend \
    --restart unless-stopped \
    --label "traefik.enable=true" \
    --label "traefik.http.routers.jsr.entrypoints=websecure" \
    --label "traefik.http.routers.jsr.rule=Host(\`jsr.4lb.ca\`)" \
    --label "traefik.http.routers.jsr.tls=true" \
    --label "traefik.http.routers.jsr.tls.certresolver=letsencrypt" \
    --label "traefik.http.services.jsr.loadbalancer.server.port=80" \
    "$IMAGE_PROD" > /dev/null

# Wait for health
log_info "Vérification de la santé..."
for i in {1..30}; do
    health=$(docker inspect --format='{{.State.Health.Status}}' "$CONTAINER_PROD" 2>/dev/null || echo "starting")
    if [ "$health" = "healthy" ]; then
        log_success "Conteneur en bonne santé!"
        break
    fi
    echo -n "."
    sleep 1
done
echo ""

# Verify
theme=$(docker exec "$CONTAINER_PROD" cat /usr/share/nginx/html/index.html | grep "theme-color" | grep -o '#[0-9A-F]\{6\}')
images=$(docker exec "$CONTAINER_PROD" ls /usr/share/nginx/html/images/realisations/ | wc -l)

log_info "Theme-color: $theme"
log_info "Images: $images photos"

if [ "$theme" = "#2F855A" ] && [ "$images" -ge 12 ]; then
    log_success "═══ DÉPLOIEMENT RÉUSSI ═══"
    log_info "Site accessible: https://jsr.4lb.ca"
else
    log_error "Problème détecté - vérifiez les logs"
    docker logs "$CONTAINER_PROD" | tail -20
fi
