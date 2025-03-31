# Stage 1: Build the Angular application
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install all dependencies (including devDependencies for building)
RUN npm ci

# Copy the rest of the code
COPY . .

# Build the application
ARG CONFIGURATION=production
RUN npm run build -- --configuration=${CONFIGURATION}

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy built files from the build stage
COPY --from=build /app/dist/exam1 . 

# Copy nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Add non-root user for security
RUN adduser -D -g 'www' www && \
  chown -R www:www /usr/share/nginx/html && \
  chown -R www:www /var/cache/nginx && \
  chown -R www:www /var/log/nginx && \
  chown -R www:www /etc/nginx/conf.d

# Switch to non-root user
USER www

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
