# Sistema completo

docker-compose up
docker-compose up -d


para borrar todo, imagenes, contenedores, volumenes:

docker-compose down 



docker-compose stop bot
docker-compose start bot

para guardar y reconstruir volumenes de datos
https://docs.docker.com/storage/volumes/#backup-restore-or-migrate-data-volumes

guardar los datos que hay en dbdata del contenedor dbstore y dejarlos en backup.tar
$ docker run --rm --volumes-from dbstore -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /dbdata

arrancar un contenedor nuevo dbstore2 que monte el volumen /dbdata
$ docker run -v /dbdata --name dbstore2 ubuntu /bin/bash

$ docker run --rm --volumes-from dbstore2 -v $(pwd):/backup ubuntu bash -c "cd /dbdata && tar xvf /backup/backup.tar --strip 1"


https://github.com/ClusterHQ/flocker/blob/master/README.rst


Necesario instalar para poder poner los mountpoints en los volumenes en el docker-compose

https://github.com/CWSpear/local-persist

---------------------

Backup de mongo

####test_mongo_1 --> docker donde esta mongo

docker exec test_mongo_1 sh -c "mongodump -o /data/db/mongo_backup"

docker run --rm --volumes-from test_mongo_1 -v $(pwd):/backup ubuntu tar cvf /backup/m_backup.tar /data/db/mongo_backup


Restore de backup mongo

#####baaaa_mongo_1 --> docker al que hay que inyectarle los datos

docker run --rm --volumes-from baaaa_mongo_1 -v $(pwd):/backup ubuntu bash -c "cd /data && mkdir mongo_backup && tar xvf /backup/m_backup.tar --strip 1"

docker exec baaaa_mongo_1 sh -c "mongorestore /data/db/mongo_backup"
