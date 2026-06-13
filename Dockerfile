FROM node:22-alpine AS builder
LABEL authors="Michael Trifanov"
ARG BASE_PATH=/
ENV BASE_PATH=$BASE_PATH
WORKDIR /app
COPY package*.json .
RUN echo "NPM install BEFORE"
RUN npm ci || npm install
RUN echo "NPM install AFTER"
COPY . .
RUN npm run build

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