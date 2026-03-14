# ESTÁGIO 1: Ambiente de Build (Node.js)
FROM node:18-alpine as builder
WORKDIR /app

# Copia os arquivos de dependência primeiro (isso otimiza o cache do Docker)
COPY package*.json ./
RUN npm install

# Copia todo o resto do seu código (src, public, etc)
COPY . .

# Roda o comando de compilação
RUN npm run build


# ESTÁGIO 2: Servidor Web (Nginx)
FROM nginx:alpine

# Copia OS ARQUIVOS COMPILADOS do Estágio 1 para a pasta do Nginx
# ATENÇÃO: Se você estiver usando Vite, mude "/app/build" para "/app/dist" na linha abaixo!
COPY --from=builder /app/build /usr/share/nginx/html

# Copia a sua configuração personalizada do Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 internamente
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]