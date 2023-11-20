FROM node:18.13.0
WORKDIR '/app'

COPY package.json .
RUN npm install --force
COPY . .
CMD [ "npm","start"]