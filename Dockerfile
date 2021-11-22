FROM mhart/alpine-node:12
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["node", "dist/main"]   