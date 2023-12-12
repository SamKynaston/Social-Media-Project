FROM node:latest
ARG VERSION=1.0.0
ARG NAME=BACKEND

WORKDIR /usr/src/$NAME
COPY source /usr/src/$NAME/

ENV NODE_ENV development
ENV PORT 5700

RUN npm update
CMD ["node", "app.js"]