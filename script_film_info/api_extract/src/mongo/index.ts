const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var rp = require('request-promise');
var _ = require('lodash');
var fs = require('fs')

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'movie_data';

const key = '4e894a5bee711efd3c75378759b6d3af';
const language = 'es';
const external_source = 'imdb_id'
const find_url = 'https://api.themoviedb.org/3/find/'

//Funcion para conectarse a una dbs
export const mongo_connect = (dbName: string): any => {
    return MongoClient.connect(url)
    .then((client:any) => {
        console.log("Connected successfully to server");
            return client;
    });
}


//TODO: MOVER TODO LO QUE TENGA QUE VER CON MONGO A OTRA CLASE
//TODO: MOVER TODO LO QUE TENGA QUE VER CON PETICIONES A OTRA CLASE
//TODO: SERIA BUENO HACER INTERFACES DE DATOS PARA EL TIPADO

const api_ins = (db:any, client:any, data: any, start:number, end:number) => {

    let insert = data.slice(start,end).map((doc: any) => {
        
        var options = {
            uri: find_url + doc['content_id'],
            qs:{
                api_key: key,
                language: language,
                external_source: external_source
            },
            headers: {
                'User-Agent':'Request-Promise'
            },
            json: true
        };
        return rp(options).then((rest_data:any) => {
            if(!_.isEmpty(rest_data['movie_results'], true)){
                //console.log(rest_data['movie_results'])
                return rest_data['movie_results'];
            }else{
                return null;
            }
        }).catch((err:any) => {
            console.log(err);
        })
    });

    Promise.all(insert).then((ins_data: any) => {
        console.log('go')
        //console.log(_.flattenDeep(_.compact(ins_data)));
        insertDocuments(db, 'ex_data_api', _.flattenDeep(_.compact(ins_data))).then((data:any) => {
            console.log('Fin de la insercion');
            if(end < 811563){
                api_ins(db, client, data, start+40, end+40);
            }else{
                console.log('chapando el chiringuito');
                client.close();
            }
            
        })
    }).catch((err:any)=>{
        console.log(err)
    });
}

// Use connect method to connect to the server
const extract_insert = () => {
    
    MongoClient.connect(url)
        .then((client:any) => {
            console.log("Connected successfully to server");
                const db = client.db(dbName);
                findDocuments(db, 'rating', {}, {'content_id':1},0,0).then((data:any) => {
                    console.log('start')
                    api_ins(db, client,data, 0, 40);
                
            });

          
        });
      
}

//extract_insert();


/*
var jsonObj:any ;
fs.readFile('./Films_long.json', 'utf8', (err:any, data:any) =>{
    MongoClient.connect(url)
    .then((client:any) => {
        console.log("Connected successfully to server");
            const db = client.db(dbName);
            insertDocuments(db, 'ex_data', JSON.parse(data)).then((data:any) => {
                console.log('Fin de la insercion');
                console.log('chapando el chiringuito');
                client.close();
            })
    })     
});
*/



/*
MongoClient.connect(url)
    .then((client:any) => {
        console.log("Connected successfully to server");
         const db = client.db(dbName);
        insertDocuments(db).then((data:any) => {
            console.log('chapando el chiringuito');
            client.close();
        });
    });

*/
export const findDocuments = (db:any, collection:any, find_filter:any, limit_field:any, skip: number, limit: number) => {
    // Get the documents collection
    const coll = db.collection(collection);
    // Find some documents
    return coll.find(find_filter).skip(skip).limit(limit).project(limit_field).toArray();
  }

export const insertDocuments = (db:any, collection:any, data:any) => {
    // Get the documents collection
    const coll = db.collection(collection);
    // Insert some documents
    return coll.insertMany(data);
}
