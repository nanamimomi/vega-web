ARG MODE

FROM node:16.7.0-alpine AS base

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install --production

COPY --chown=node:node . .

LABEL version="1.0"
LABEL description="This is the base docker image for the Venus application frontend"

EXPOSE 3000

FROM base AS production
RUN ["npm", "run", "build"]
ENV ENTRYPOINT="node_modules/.bin/serve -s build"

FROM base AS development
ENV ENTRYPOINT="npm start"

FROM $MODE AS final
CMD $ENTRYPOINT