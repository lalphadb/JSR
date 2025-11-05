#!/bin/bash
set -euo pipefail

echo "🔄 Mise à jour du site JSR Pro Solutions..."
echo ""

cd /home/lalpha/projets/developpement/JSR

# 1. Pull les derniers changements (si Git)
if [ -d .git ]; then
    echo "📥 Git pull..."
    git pull origin main || git pull origin master || echo "⚠️  Pas de mise à jour Git"
fi

# 2. Rebuild l'image (sans cache pour être sûr)
echo "🔨 Rebuild de l'image Docker..."
docker build --no-cache -t jsr-website:latest .

# 3. Redémarrer le conteneur
echo "🔄 Redémarrage du conteneur..."
# Ne pas échouer si le conteneur n'existe pas
docker rm -f jsr-website >/dev/null 2>&1 || true

# S'assurer que le réseau existe
if ! docker network inspect 4lbca_frontend >/dev/null 2>&1; then
  echo "🌐 Création du réseau docker: 4lbca_frontend"
  docker network create 4lbca_frontend >/dev/null
fi

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
  jsr-website:latest

# 4. Vérification
echo ""
echo "⏳ Attente du démarrage (5s)..."
sleep 5

if docker ps | grep -q jsr-website; then
    echo "✅ Site mis à jour avec succès!"
    echo ""
    echo "🌐 Vérifiez: https://jsr.4lb.ca"
else
    echo "❌ Erreur - vérifiez les logs:"
    echo "   docker logs jsr-website"
fi
