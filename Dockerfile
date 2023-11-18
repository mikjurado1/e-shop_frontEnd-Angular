# Paso 1: Construir la aplicación Angular
FROM node:16 as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Paso 2: Preparar el servidor Nginx para servir la aplicación
FROM nginx:alpine
COPY --from=build-step /app/dist/css1 /usr/share/nginx/html
