FROM node:20

WORKDIR /app

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Copia apenas package.json e package-lock.json para cache
COPY package*.json ./

# Instala dependências do projeto
RUN npm install

# Copia todo o resto do projeto
COPY . .

EXPOSE 4200

# Comando para rodar Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
