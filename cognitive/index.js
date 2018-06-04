// PARA borrar todos los indices: 
// curl -XDELETE http://localhost:6200/bcgnew
// curl -XDELETE http://localhost:6200/bctnew
// curl -XDELETE http://localhost:6200/bcrnew
// curl -XDELETE http://localhost:6200/bcdnew

(function () {
    'use strict';
    const _ = require('lodash');
    const _A = require('lodash/array');
    const fs = require('fs');
    const elasticsearch = require('elasticsearch');
    const MongoClient = require('mongodb').MongoClient;
    const MONGODB_URL = "mongodb://admin:landa007@atenea.hi.inet:27017/aura?authSource=admin";
    const esClient = new elasticsearch.Client({
        host: '127.0.0.1:6200',
        log: 'error'
    });

    const bulkIndex = function bulkIndex(index, type, data) {
        let bulkBody = [];

        data.forEach(item => {
            bulkBody.push({
                index: {
                    _index: index,
                    _type: type,
                    _id: item.id
                }
            });

            bulkBody.push(item);
        });

        esClient.bulk({body: bulkBody})
        .then(response => {
            let errorCount = 0;
            response.items.forEach(item => {
                if (item.index && item.index.error) {
                console.log(++errorCount, item.index.error);
                }
            });
            console.log(`Successfully indexed ${data.length - errorCount} out of ${data.length} items`);
        })
        .catch(console.err);
    };

    const bulkDelete = function bulkDelete(index, type, data) {
        let bulkBody = [];

        data.forEach(item => {
            bulkBody.push({
                delete: {
                    _index: index,
                    _type: type,
                    _id: item.id
                }
            });

            //bulkBody.push(item);
        });

        esClient.bulk({body: bulkBody})
            .then(response => {
                let errorCount = 0;
                response.items.forEach(item => {
                    if (item.index && item.index.error) {
                        console.log(++errorCount, item.index.error);
                    }
                });

                console.log(`Successfully deleted ${data.length - errorCount} out of ${data.length} items`);
            })
            .catch(console.err);
    };

    const indexingGen = (index,type, file) => {

        const dataRaw = fs.readFileSync(file);
        const dataParse = JSON.parse(dataRaw);

        const dataData = dataParse.map(gen => {
            gen.synonyms = gen.synonyms.map(text => { return { val: text}; }),
            gen.related = gen.related.map(text => { return { val: text}; })
            return gen;
        });

        console.log(`IndexingGen ${dataParse.length} GEN items parsed from data file = [${file}] into index = [${index}] by type = [${type}]`);

        bulkIndex(index, type, dataData);
    };

    const indexing = (index,type, file) => {
        
        const dataRaw = fs.readFileSync(file);
        const dataParse = JSON.parse(dataRaw);

        const dataData = dataParse.map(item => {
            return item;
        });

        console.log('IndexingRep ${dataParse.length} REP items parsed from data file = [${file}] into index = [${index}] by type = [${type}]');

        bulkIndex(index, type, dataData);
    };

    const reparto = function reparto(fileIn, fileOut){
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        const datos = dataParse.map((item)=> {
            return item.reparto
        });
        const datosFinal = _.uniq(_.flattenDeep(datos)).map((item, index)=> {
            return {"id":index,"nombre": item.trim()}
        });
        let datosUniq = _.uniqBy(datosFinal, 'nombre');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        //console.log(JSON.stringify(datosFinal));      
    }

    const titulo = function titulo(fileIn, fileOut){
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        const datos = dataParse.map((item)=> {
            return item.titulo.trim()
        });
        const datosFinal = _.uniq(_.flattenDeep(datos)).map((item, index)=> {
            return {"id":index,"titulo": item.trim()}
        });
        let datosUniq = _.uniqBy(datosFinal, 'titulo');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        console.log(JSON.stringify(datosUniq));      
    }

    const tituloUniversal = function tituloUniversal(fileIn, fileOut){
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
       
        const datosFinal = _.uniq(_.flattenDeep(dataParse)).map((item, index)=> {
            let rating = 0
            let year = 0
            if(!_.isUndefined(item.ratingcount[0]) || !_.isEmpty(item.ratingcount[0])){
                rating = item.ratingcount[0];
            }
            if(!_.isUndefined(item.anio[0])|| !_.isEmpty(item.anio[0])){
                year = item.anio[0];
            }
            
            return {"id":index,"titulo": item.nombre[0].trim(), "year":year, "rating": rating}
        });
        let datosUniq = _.uniqBy(datosFinal, 'titulo');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        console.log(JSON.stringify(datosUniq));      
    }

    const repartoUniversal = function repartoUniversal(fileIn, fileOut){
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        let indice = 0;
        const datos = dataParse.map((item)=> {
            let datosReturn = item.reparto.map((rep, index)=> {
                
                indice = indice + 1;
                if(rep == 'Brad Pitt'){
                    //console.log(item);
                }
                let rating = 0
                let year = 0
                if(!_.isUndefined(item.ratingcount[0])){
                    rating = item.ratingcount[0];
                }
                if(!_.isUndefined(item.anio[0])){
                    year = item.anio[0];
                }
                return {"id":indice,"nombre": rep.trim(), "rating": rating, 'year': year};
            });
            
            return datosReturn
        });
        
        let ord = _.orderBy(_.flattenDeep(datos),['rating'], ['desc']);
        console.log('---d---')
        //console.log(ord);
        let datosUniq = _.uniqBy(ord, 'nombre');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        //console.log(JSON.stringify(datosFinal));      
    }

    const director = function director(fileIn, fileOut){
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        const datos = dataParse.map((item)=> {
            return item.director
        });
        const datosFinal = _.uniq(_.flattenDeep(datos)).map((item, index)=> {
            return {"id":index,"nombre": item.trim()}
        });
        let datosUniq = _.uniqBy(datosFinal, 'nombre');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        //console.log(JSON.stringify(datosUniq));      
    }

    const nombres = function nombres(fileIn, fileOut){
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        const datos = dataParse.map((item)=> {
                let title = '';
                if(Array.isArray(item.title)){
                    
                    title =  item.title.join(' ');        
                }else{
                    title =  item.title;
                }
            return {"title": title, "v":item.v, "photo": item.photo}
        });
        const datosFinal = _.uniq(_.flattenDeep(datos)).map((item, index)=> {
            console.log(item)
            return {"id":index,"nombre": item.title.trim(), "v":item.v, "photo": item.photo}
        });
        let datosUniq = _.uniqBy(datosFinal, 'nombre');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        //console.log(JSON.stringify(datosUniq));      
    }

    
    const mongo = function mongo(key, criterio, fields, fileOut){
        MongoClient.connect(MONGODB_URL, (err, db) =>{
            if(err) {
                console.log("error")
            }
            db.collection(key).find(criterio,fields).toArray((err, result)=>{
                if(err) {
                    console.log("error2")
                }
                console.log(_.flattenDeep(result));
                
                fs.writeFileSync(fileOut, JSON.stringify(_.flattenDeep(result)), { spaces: 2 });
            })
        })
    }
    const uniq = function uniq(fileIn){
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        let data = _.uniqBy(dataParse, 'nombre');
        console.log(dataParse.length)
        console.log(data.length)
        
    }
    //uniq('repartoFileUniversal.json');
    //uniq('directoresFileUniversal.json');
    var criterio = {};
    var fieldTitulo = {titulo:1, _id:0};
    var fieldDirector = {director:1, _id:0};
    var fieldReparto = {reparto:1, _id:0};
    var fieldRepartoRating = {reparto:1, _id:0, ratingcount:1, anio:1};
    var fieldCataIndex = {sinopsis: 0, imagen:0};
    var fieldTituloUniversal = {nombre:1, _id:0, anio:1, ratingcount:1}
    var fieldProductoraUniversal = {productora:1, _id:0, ratingcount: 1}
    //mongo("cataIndex", criterio, fieldTitulo, 'titulo.json');
    //mongo("cataIndex", criterio, fieldDirector, 'director.json');
    //mongo("cataIndex", criterio, fieldReparto, 'reparto.json');
    //mongo("cataIndex", criterio, fieldCataIndex, 'cataMov.json');

    //mongo("universal", criterio, fieldTituloUniversal, 'tituloUniversal.json');
    //mongo("universal", criterio, fieldDirector, 'directorUniversal.json');
    //mongo("universal", criterio, fieldReparto, 'repartoUniversal.json');
    
   // mongo("universal", criterio, fieldRepartoRating, 'repartoUniversalRating.json');

    //mongoSort("universal", criterio, fieldProductoraUniversal, 'productoraUniversalSort.json');
    
    //reparto("repartoUniversal.json", "repartoFileUniversal.json");
    //director("directorUniversal.json", "directoresFileUniversal.json");
    //tituloUniversal("tituloUniversal.json","tituloFileUniversal.json");
    //Funcion que parsea el fichero de entrada a una estructura manipulable por elastic
    
    //reparto("reparto.json", "repartoFile.json");
    //repartoUniversal("repartoUniversalRating.json", "repartoRatingFile.json");
    
    //titulo("titulo.json","tituloFile.json");
    //director("director.json", "directoresFile.json");
    //nombres("inombres_v_photo.json", "nombresFile.json");

    //Funcion para indexar 

    let index = 'bctnew';
    let type = 'title';
    let file = 'tituloFileUniversal.json';
    //indexing(index, type, file);

    index = 'bcdnew';
    type = 'director';
    file = 'directoresFileUniversal.json';
    //indexing(index, type, file);
    
    index = 'bcrnew';
    type = 'reparto';
    file = 'repartoRatingFile.json';
    //indexing(index, type, file);
  
    index = 'bcgnew';
    type = 'gen';
    file = 'gen.json';
    //indexingGen(index, type, file)

    index = 'bcpnew';
    type = 'productora';
    file = 'productora.json';
    //indexing(index, type, file);


    index = 'bcnombre';
    type = 'reparto';
    file = 'nombresFile.json';
    indexing(index, type, file);

    module.exports = {
        bulkIndex
    };
} ());

