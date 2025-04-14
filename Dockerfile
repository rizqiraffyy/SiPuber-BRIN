FROM node:20-alpine

# Set direktori kerja
WORKDIR /app

# Install dependencies (dengan devDependencies)
COPY package*.json ./
RUN npm install

# Copy semua file ke container
COPY . .

# Install Prisma CLI (global opsional, bisa juga di scripts)
RUN npx prisma generate

# Jalankan aplikasi di mode dev (Next.js)
CMD ["npm", "run", "dev"]
