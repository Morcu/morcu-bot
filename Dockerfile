FROM node:alpine

RUN mkdir bot

COPY app.js package.json .env bot/

WORKDIR bot/
RUN npm install


EXPOSE 3979

CMD ["node", "app.js"]
