#!/bin/bash

# ========================================
# Script de Déploiement JSR Monorepo
# ========================================
# Frontend + Backend dans un seul projet

set -e

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Variables
PROJECT_DIR="/home/lalpha/projets/developpement/JSR"
COMPOSE_DIR="/home/lalpha/projets/developpement"
COMPOSE_FILE="docker-compose-jsr.yml"
TRAEFIK_CONFIG_DIR="/home/lalpha/projets/traefik-config"

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[✓]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[!]${NC} $1"; }
log_error() { echo -e "${RED}[✗]${NC} $1"; }

check_traefik() {
    if ! docker ps | grep -q "traefik"; then
        log_warning "Traefik n'est pas en cours d'exécution"
        log_info "Démarrage de Traefik depuis $TRAEFIK_CONFIG_DIR..."
        
        cd "$TRAEFIK_CONFIG_DIR"
        docker-compose up -d traefik
        
        log_success "Traefik démarré"
        sleep 5
    else
        log_success "Traefik opérationnel"
    fi
}

echo ""
log_info "=========================================="
log_info "   Déploiement JSR Monorepo"
log_info "=========================================="
echo ""

# 1. Vérifier dossier
log_info "Étape 1/7 : Vérification..."
cd "$PROJECT_DIR" || exit 1
log_success "Dossier : $PROJECT_DIR"

# 2. Git pull
log_info "Étape 2/7 : Mise à jour Git..."
if git pull origin main 2>/dev/null; then
    log_success "Code à jour"
else
    log_warning "Pas de mise à jour Git"
fi

# 3. Traefik
log_info "Étape 3/7 : Vérification Traefik..."
check_traefik

# 4. Arrêter les anciens containers
log_info "Étape 4/7 : Arrêt des anciens containers..."
cd "$COMPOSE_DIR"
docker-compose -f "$COMPOSE_FILE" down 2>/dev/null || true
docker stop jsr-website jsr2-jsr2-1 2>/dev/null || true
docker rm jsr-website jsr2-jsr2-1 2>/dev/null || true
log_success "Containers arrêtés"

# 5. Build avec docker-compose
log_info "Étape 5/7 : Build des images..."
cd "$PROJECT_DIR/frontend"
docker build -t jsr2:local . --no-cache
cd "$COMPOSE_DIR"
docker-compose -f "$COMPOSE_FILE" build backend --no-cache
log_success "Images construites"

# 6. Démarrer avec docker-compose
log_info "Étape 6/7 : Démarrage des services..."
cd "$COMPOSE_DIR"
docker-compose -f "$COMPOSE_FILE" up -d
log_success "Services démarrés"

# 7. Vérification
log_info "Étape 7/7 : Vérification..."
sleep 10

FRONTEND_STATUS=$(docker inspect -f '{{.State.Status}}' jsr-frontend 2>/dev/null || echo "not found")
BACKEND_STATUS=$(docker inspect -f '{{.State.Status}}' jsr-backend 2>/dev/null || echo "not found")

if [ "$FRONTEND_STATUS" = "running" ]; then
    log_success "Frontend : ✓ Running"
else
    log_error "Frontend : ✗ $FRONTEND_STATUS"
fi

if [ "$BACKEND_STATUS" = "running" ]; then
    log_success "Backend : ✓ Running"
else
    log_error "Backend : ✗ $BACKEND_STATUS"
fi

# Test URLs
if curl -sk -o /dev/null -w "%{http_code}" https://jsr.4lb.ca | grep -q "200"; then
    log_success "Frontend : ✓ https://jsr.4lb.ca"
else
    log_warning "Frontend : En attente SSL..."
fi

if curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/health 2>/dev/null | grep -q "200"; then
    log_success "Backend : ✓ http://localhost:3001"
else
    log_warning "Backend : Vérifier les logs"
fi

echo ""
log_info "=========================================="
log_success "   Déploiement Terminé !"
log_info "=========================================="
echo ""
echo "📊 Services :"
echo "  • Frontend : https://jsr.4lb.ca"
echo "  • Backend  : http://localhost:3001"
echo "  • API      : https://api.jsr.4lb.ca (si configuré)"
echo "  • Traefik  : http://localhost:8080"
echo ""
echo "🔧 Commandes :"
echo "  • Logs     : cd $COMPOSE_DIR && docker-compose -f $COMPOSE_FILE logs -f"
echo "  • Status   : cd $COMPOSE_DIR && docker-compose -f $COMPOSE_FILE ps"
echo "  • Stop     : cd $COMPOSE_DIR && docker-compose -f $COMPOSE_FILE down"
echo "  • Restart  : cd $COMPOSE_DIR && docker-compose -f $COMPOSE_FILE restart"
echo ""
log_info "Monorepo opérationnel ! 🚀"
echo ""

