# Usar uma imagem base do Node.js 22 para construir o projeto
FROM node:22 AS builder

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto para o contêiner
COPY . .

# Instalar dependências e gerar a build Angular
RUN npm install
RUN npm run build --prod

# Usar uma imagem Nginx para servir os arquivos estáticos
FROM nginx:stable-alpine

# Copiar os arquivos gerados na build Angular para o Nginx
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

# Configuração padrão do Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
