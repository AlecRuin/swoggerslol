FROM node:16

WORKDIR /app

# COPY server.js .
# COPY package.json .
# COPY schemas .
COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server.mjs"]
