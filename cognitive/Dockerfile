FROM node:8-alpine

MAINTAINER TFG David Morcuende

EXPOSE 6789

RUN mkdir -p /cognitive

ADD . /cognitive
WORKDIR /cognitive

RUN npm install 
    
CMD npm run build && npm run start
