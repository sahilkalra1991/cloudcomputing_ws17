FROM node:boron
RUN mkdir -p /usr/src/cloudcomputing_ws17
COPY package.json /usr/src/cloudcomputing_ws17/
WORKDIR /usr/src/cloudcomputing_ws17
RUN npm install
EXPOSE 8080
CMD ["node", "clientServer.js"]
