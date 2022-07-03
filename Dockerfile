FROM node:16.7.0-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

LABEL version="1.0"
LABEL description="This is the base docker image for the Venus application frontend"

EXPOSE 3000

CMD ["npm", "start"]
