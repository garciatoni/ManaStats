# Usa Node.js oficial
FROM node:18-alpine

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el esquema de Prisma
COPY prisma/schema.prisma ./prisma/

# Genera el cliente de Prisma
RUN npx prisma generate

# Copia el resto del código
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "run", "dev"]
