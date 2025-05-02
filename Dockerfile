# Stage 1: Build dependencies and generate Prisma client
FROM node:23-slim AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including devDependencies)
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Stage 2: Run the application
FROM node:23-slim

WORKDIR /app

# Install OpenSSL package to fix Prisma SSL detection issue
RUN apt-get update && apt-get install -y openssl

# Copy node_modules and Prisma client from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Copy the rest of the application
COPY . .

# Set the command to run the development server
CMD ["npm", "run", "dev"]
