# Dockerfile de DESENVOLVIMENTO (frontend) - hot reload via bind mount
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_API_URL=http://localhost:8000

EXPOSE 3000
CMD ["npm", "run", "dev"]