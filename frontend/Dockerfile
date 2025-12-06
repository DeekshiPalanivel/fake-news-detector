# ============================
# 1. Build Stage
# ============================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Next.js app
RUN npm run build


# ============================
# 2. Production Stage
# ============================
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only what is needed for production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]
