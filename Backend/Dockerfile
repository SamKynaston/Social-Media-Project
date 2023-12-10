FROM node:latest

WORKDIR /Backend
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 5700:5799
CMD ["npm", "start"]