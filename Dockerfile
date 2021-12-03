# Nodejs image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm install pm2 -g

ENV NEW_RELIC_TURN=ON

EXPOSE 3333

CMD ["npm", "start"]