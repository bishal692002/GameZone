# Lightweight Node image
FROM node:20-alpine

# App directory
WORKDIR /app

# Environment
ENV NODE_ENV=production \
    PORT=3000

# Install deps first (leverages Docker layer cache)
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copy only runtime sources
COPY server.js ./
COPY public ./public

# Run as non-root for security
USER node

# Expose the app port
EXPOSE 3000

# Simple healthcheck hitting the app's health endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/api/health || exit 1

# Start the server
CMD ["node", "server.js"]
