#!/bin/bash

# Script de vérification de la configuration Google Maps pour JSR
# Usage: ./check-maps-config.sh

set -e

FRONTEND_DIR="/home/lalpha/projets/developpement/JSR/frontend"
ENV_FILE="$FRONTEND_DIR/.env.local"
COMPONENT_FILE="$FRONTEND_DIR/src/components/ServiceAreaMap.tsx"
CONTACT_PAGE="$FRONTEND_DIR/src/pages/Contact.tsx"

echo "🔍 Vérification de la configuration Google Maps..."
echo ""

# 1. Vérifier que le fichier .env.local existe
if [ -f "$ENV_FILE" ]; then
    echo "✅ Fichier .env.local trouvé"
    
    # Vérifier que la clé API est configurée
    if grep -q "VITE_GOOGLE_MAPS_API_KEY" "$ENV_FILE"; then
        API_KEY=$(grep "VITE_GOOGLE_MAPS_API_KEY" "$ENV_FILE" | cut -d'=' -f2)
        
        if [ "$API_KEY" = "your_google_maps_api_key_here" ] || [ -z "$API_KEY" ]; then
            echo "⚠️  La clé API Google Maps n'est pas configurée"
            echo "   Éditez $ENV_FILE et ajoutez votre clé API"
        else
            echo "✅ Clé API Google Maps configurée"
        fi
    else
        echo "❌ VITE_GOOGLE_MAPS_API_KEY non trouvé dans .env.local"
    fi
else
    echo "❌ Fichier .env.local non trouvé"
fi

echo ""

# 2. Vérifier que le composant ServiceAreaMap existe
if [ -f "$COMPONENT_FILE" ]; then
    echo "✅ Composant ServiceAreaMap.tsx trouvé"
else
    echo "❌ Composant ServiceAreaMap.tsx non trouvé"
fi

echo ""

# 3. Vérifier que le composant est importé dans Contact.tsx
if grep -q "ServiceAreaMap" "$CONTACT_PAGE"; then
    echo "✅ ServiceAreaMap importé dans Contact.tsx"
else
    echo "❌ ServiceAreaMap non importé dans Contact.tsx"
fi

echo ""

# 4. Vérifier que @react-google-maps/api est installé
cd "$FRONTEND_DIR"
if [ -d "node_modules/@react-google-maps" ]; then
    echo "✅ Package @react-google-maps/api installé"
else
    echo "⚠️  Package @react-google-maps/api non installé"
    echo "   Exécutez: npm install @react-google-maps/api"
fi

echo ""

# 5. Résumé
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 RÉSUMÉ DE LA CONFIGURATION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "$ENV_FILE" ] && grep -q "VITE_GOOGLE_MAPS_API_KEY" "$ENV_FILE" && [ -f "$COMPONENT_FILE" ]; then
    API_KEY=$(grep "VITE_GOOGLE_MAPS_API_KEY" "$ENV_FILE" | cut -d'=' -f2)
    
    if [ "$API_KEY" = "your_google_maps_api_key_here" ] || [ -z "$API_KEY" ]; then
        echo "⚠️  Configuration INCOMPLÈTE"
        echo ""
        echo "Étapes à suivre:"
        echo "1. Obtenir une clé API Google Maps (voir docs/GOOGLE_MAPS_CONFIG.md)"
        echo "2. Éditer $ENV_FILE"
        echo "3. Remplacer 'your_google_maps_api_key_here' par votre clé"
        echo "4. Redémarrer le serveur de développement"
    else
        echo "✅ Configuration COMPLÈTE"
        echo ""
        echo "Prochaines étapes:"
        echo "1. Démarrer le serveur: docker compose up -d"
        echo "2. Accéder à la page Contact: http://localhost:5173/contact"
        echo "3. Vérifier que la carte s'affiche correctement"
    fi
else
    echo "❌ Configuration MANQUANTE"
    echo ""
    echo "Fichiers manquants - contactez le développeur"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
