#!/bin/bash
echo "Building site..."
npm run build

echo "Deploying to server..."
rsync -avz --delete dist/ username@your-server-ip:/var/www/yourdomain.com/

echo "Deployment complete!"