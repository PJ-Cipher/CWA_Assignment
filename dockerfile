# --- Base image ---
    FROM node:20-alpine

    # Set working directory
    WORKDIR /app
    
    # Copy dependency files first (for caching)
    COPY package*.json ./
    
    # Install all dependencies (including devDependencies)
    RUN npm install
    
    # Copy all project files
    COPY . .
    
    # Build the Next.js app
    RUN npm run build
    
    # Expose port 3000
    EXPOSE 3000
    
    # Start the app
    CMD ["npm", "start"]
    