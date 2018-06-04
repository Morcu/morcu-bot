import { elastic_insert_form_mongo } from './elastic/index';
//Nombres de Peliculas
elastic_insert_form_mongo('film_data', 'film', {"titleType":{$in :["movie", "tvMovie"]}}, {"tconst":1,"primaryTitle":1,"originalTitle":1, "_id":0, "startYear":1}, 'films', 'film',4856807, 100000);

//Nombres de Personas
//elastic_insert_form_mongo('film_data', 'names', {}, {"nconst":1,"primaryName":1, "_id":0}, '');