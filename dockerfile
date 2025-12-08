# ====== BUILD ANGULAR ======
FROM node:18 AS build
WORKDIR /app

# Installer dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du projet
COPY . .

# Build Angular en prod
RUN npm run build --prod


# ====== SERVE AVEC NGINX ======
FROM nginx:alpine

# Copier le build Angular dans nginx
COPY --from=build /app/dist/ /usr/share/nginx/html

# Copier un fichier nginx.conf si tu veux configurer routes Angular
# (facultatif, je peux t'en générer un)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
