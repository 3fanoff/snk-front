FROM node:22-alpine AS builder
LABEL authors="Michael Trifanov"
WORKDIR /app
COPY package*.json .
RUN echo "NPM install BEFORE"
RUN npm ci || npm install
RUN echo "NPM install AFTER"
COPY . .
RUN npm run build
RUN echo "Build finished, checking dist folder..."
RUN ls -la dist/

FROM nginx:1.30-alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Стадия 2: Сервер для разработки
FROM node:22-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN npm run watch
COPY . .
EXPOSE 2605
CMD sh -c "npm run start"
#CMD ["serve", "-s", ".", "-l", "2605"]