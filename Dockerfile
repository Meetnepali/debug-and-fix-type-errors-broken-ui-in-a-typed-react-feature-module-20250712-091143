FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --prefer-offline

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]
