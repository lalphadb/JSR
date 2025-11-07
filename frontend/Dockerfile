FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Generate nginx config using a literal heredoc to preserve $uri variables
RUN cat > /etc/nginx/conf.d/default.conf <<'NGINX_CONF'
server {
    listen 80;
    server_tokens off;
    root /usr/share/nginx/html;
    index index.html;

    # --- Security headers ---
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), camera=(), microphone=(), payment=(), usb=(), fullscreen=(self)" always;
    # HSTS should be enabled only behind TLS (Traefik handles TLS). Safe to include here as Traefik terminates TLS.
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    # CSP kept compatible with inline JSON-LD. Consider nonces for stricter policy later.
    add_header Content-Security-Policy "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; base-uri 'self'; frame-ancestors 'none'" always;

    # Cache aggressively built assets (hashed filenames)
    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }

    # Serve SPA for all other routes and prevent stale HTML caching
    location / {
        try_files $uri /index.html;
        add_header Cache-Control "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0";
    }
}
NGINX_CONF
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -q -O - http://127.0.0.1:80/ >/dev/null 2>&1 || exit 1
CMD ["nginx", "-g", "daemon off;"]
