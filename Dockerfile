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
	root /usr/share/nginx/html;
	index index.html;

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
CMD ["nginx", "-g", "daemon off;"]
