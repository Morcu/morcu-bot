const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var rp = require('request-promise');
var _ = require('lodash');
var fs = require('fs');

// Connection URL
//const url = 'mongodb://localhost:27017';
const url = 'mongodb://mongo:27017';
// Database Name
const dbName = 'movie_data';

const key = '4e894a5bee711efd3c75378759b6d3af';
const language = 'es';
const external_source = 'imdb_id';
const find_url = 'https://api.themoviedb.org/3/find/';

export function mongo_find(db_name: any, collection: any, find_filter: any, limit_field: any) {
   return MongoClient.connect(url)
        .then((client: any) => {
            const db = client.db(db_name);
            const coll = db.collection(collection);
            return coll.find(find_filter, limit_field).toArray().then((data: any) => {
                return data;
            });
        });

  }
