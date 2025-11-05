#!/bin/bash
# Script de vérification rapide JSR

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}═══ ÉTAT JSR ═══${NC}\n"

# Conteneurs
echo "📦 Conteneurs:"
docker ps -a | grep -E "CONTAINER|jsr" || echo "Aucun conteneur JSR"
echo ""

# Santé des conteneurs
for container in jsr-website jsr2-jsr2-1; do
    if docker ps | grep -q "$container"; then
        health=$(docker inspect --format='{{.State.Health.Status}}' "$container" 2>/dev/null || echo "no check")
        uptime=$(docker ps --format "table {{.Names}}\t{{.Status}}" | grep "$container" | awk '{print $2,$3}')
        
        if [ "$health" = "healthy" ]; then
            echo -e "${GREEN}✅ $container${NC} - $uptime - Health: $health"
        else
            echo -e "${RED}❌ $container${NC} - $uptime - Health: $health"
        fi
        
        # Vérifications supplémentaires
        theme=$(docker exec "$container" cat /usr/share/nginx/html/index.html 2>/dev/null | grep "theme-color" | grep -o '#[0-9A-F]\{6\}' || echo "N/A")
        images=$(docker exec "$container" ls /usr/share/nginx/html/images/realisations/ 2>/dev/null | wc -l || echo "0")
        
        echo "   Theme: $theme | Images: $images photos"
        echo ""
    fi
done

# Accès
echo "🌐 Accès:"
echo "   Production: https://jsr.4lb.ca (via Traefik)"
echo "   Dev: http://localhost:8082"
echo ""

# Logs récents
echo "📋 Dernières erreurs (s'il y en a):"
docker logs jsr-website 2>&1 | grep -i error | tail -3 || echo "   Aucune erreur détectée"
echo ""
