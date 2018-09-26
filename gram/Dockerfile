FROM node:8-alpine

MAINTAINER TFG David Morcuende

EXPOSE 6677

RUN mkdir -p /gram

ADD . /gram
WORKDIR /gram

RUN npm install 
    
CMD npm run build && npm run start
