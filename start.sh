#!/bin/sh

# Start JSON server in the background
json-server --watch backend/db.json --port 3000 &

# Start nginx in the foreground
nginx -g 'daemon off;'
