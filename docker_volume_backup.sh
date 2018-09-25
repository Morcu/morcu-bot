

docker exec morcubot_mongo_1 sh -c "mongodump -o /data/db/mongo_backup"

docker run --rm --volumes-from morcubot_mongo_1 -v $(pwd):/backup ubuntu tar cvf /backup/m_backup.tar /data/db/mongo_backup
