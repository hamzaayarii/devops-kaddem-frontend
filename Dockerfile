# Stage 1: Build the Angular application
FROM node:16.15 AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

# Check network and proxy settings, and retry npm install if needed
RUN npm config rm https-proxy
RUN npm config rm proxy

RUN npm config set registry http://registry.npmjs.org/

RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Create the Nginx image to serve the built app
FROM nginx:alpine

# Fix permissions issue for NGINX
RUN mkdir -p /var/run && chmod 777 /var/run

# Copy the Nginx configuration - updated path
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist/exam1 /usr/share/nginx/html

# Add JSON server and start script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Install json-server
RUN apk add --no-cache nodejs npm && npm install -g json-server

# Set startup command
CMD ["/start.sh"]
