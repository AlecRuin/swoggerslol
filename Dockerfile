FROM node:16

WORKDIR /app

# COPY server.js .
# COPY package.json .
# COPY schemas .
COPY . .
# mongodb+srv://valentine:UzU1TcdSkfpdRYPa@apiswoggerslol.mrc4n.mongodb.net/
RUN npm install

EXPOSE 3000

CMD ["node", "server.mjs"]
