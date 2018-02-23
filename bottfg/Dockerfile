FROM node:8-alpine

MAINTAINER TFG David Morcuende

EXPOSE 8080

VOLUME /etc/bottfg /var/log/bottfg

RUN mkdir -p /var/log/bottfg

ADD . /opt/bottfg
WORKDIR /opt/bottfg

RUN apk update
RUN apk upgrade

RUN npm install && \
    npm run build && \
    # cleaning
    find . -type f -name '*.d.ts' -delete && \
    find . -type f -name '*.js.map' -delete

ENTRYPOINT ["/bin/sh", "/opt/bottfg/docker-entrypoint.sh"]

CMD ["bottfg"]
