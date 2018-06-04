const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'movie_data';
 
// Use connect method to connect to the server
MongoClient.connect(url)
    .then(client => {
        console.log("Connected successfully to server");
 
         const db = client.db(dbName);
        findDocuments(db).then(data => {
            console.log('chapando el chiringuito');
            client.close();
        });
    });

const findDocuments = (db) => {
    // Get the documents collection
    const collection = db.collection('rating');
    // Find some documents
    return collection.find({}).toArray().then(docs => {
      console.log("Found the following records");
      console.log(docs)
      return docs
    });
  }