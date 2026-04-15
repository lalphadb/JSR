# JSR Dev — Frontend Preview

Site preview JSR (Vite + React + shadcn/ui + TypeScript).
URL PROD : https://jsr.4lb.ca

## Environnements

| | DEV | PROD |
|---|---|---|
| **Lancement** | `docker compose -f ../docker-compose.dev.yml up -d` | `./deploy.sh jsr` (depuis projets/) |
| **URL** | https://jsr.dev.privateip.org | https://jsr.4lb.ca |

## Développement local (sans Docker)

```bash
cd /home/lalpha/projets/clients/jsr/Jsr-dev
npm install
npm run dev   # port 8080
npm run build
```

## Déploiement

```bash
# Depuis /home/lalpha/projets/
./deploy.sh jsr
```
