# ---- Base builder ----
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm ci
    
    # Copy rest of the project
    COPY . .
    
    # Build the Next.js app
    RUN npm run build
    
    # Remove dev dependencies to shrink image
    RUN npm prune --omit=dev
    
    # ---- Runner ----
    FROM node:20-alpine AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    ENV NEXT_TELEMETRY_DISABLED=1
    ENV PORT=3000
    
    # Copy build output and needed files
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/package*.json ./
    
    EXPOSE 3000
    
    # Start the app
    CMD ["npm", "start"]
    