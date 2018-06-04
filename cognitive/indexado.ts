// PARA borrar todos los indices:
// curl -XDELETE http://localhost:6200/bcgnew
// curl -XDELETE http://localhost:6200/bctnew
// curl -XDELETE http://localhost:6200/bcrnew
// curl -XDELETE http://localhost:6200/bcdnew

'use strict';

const _ = require('lodash');
const fs = require('fs');
const rp = require('request-promise');
const elasticsearch = require('elasticsearch');
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URL = "mongodb://admin:landa007@atenea.hi.inet:27017/aura?authSource=admin";

const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

const criterio = {};
const fieldTitulo = { titulo: 1, _id: 0 };
const fieldDirector = { director: 1, _id: 0 };
const fieldReparto = { reparto: 1, _id: 0 };
const fieldRepartoRating = { reparto: 1, _id: 0, ratingcount: 1, anio: 1 };
const fieldCataIndex = { sinopsis: 0, imagen: 0 };
const fieldTituloUniversal = { nombre: 1, _id: 0, anio: 1, ratingcount: 1 };
const fieldProductoraUniversal = { productora: 1, _id: 0, ratingcount: 1 };
const fieldNombres = {_id:0};

let body = {
    settings: {
        analysis: {
            filter: {
                spanish_stop: {
                    type: 'stop',
                    stopwords: ['el', 'la', 'los', 'las', 'a', 'de', 'del']
                },
                light_spanish: {
                    type: 'stemmer',
                    language: 'light_spanish'
                },
                unique_stem: {
                    type: 'unique',
                    only_on_same_position: true
                }
            },
            analyzer: {
                my_spanish: {
                    tokenizer: 'standard',
                    filter: [
                        'unique_stem',
                        'spanish_stop',
                        'light_spanish'
                    ]
                },
                stemmed_and_unstemmed: {
                    type: 'custom',
                    tokenizer: 'standard',
                    filter: ['unique_stem', 'spanish_stop']
                }
            }
        }
    },
    mappings: {
        title: {
            properties: {
                titulo: {
                    type: 'text',
                    analyzer: 'standard',
                    search_analyzer: 'stemmed_and_unstemmed'
                }
            }
        }
    }
};

let options = {
    method: 'PUT',
    url: 'http://localhost:9200/pruebarequest',
    body: JSON.stringify(body)
};

class Indexado {

    public bulkIndex(index: string, type: string, data: any) {
        let bulkBody: any[] = [];

        data.forEach((item: any) => {
            bulkBody.push({
                index: {
                    _index: index,
                    _type: type,
                    _id: item.id
                }
            });

            bulkBody.push(item);
        });

        return esClient.bulk({ body: bulkBody })
            .then((response: any) => {
                let errorCount = 0;
                response.items.forEach((item: any) => {
                    if (item.index && item.index.error) {
                        console.log(++errorCount, item.index.error);
                    }
                });
                console.log(`Successfully indexed ${data.length - errorCount} out of ${data.length} items`);
                return response;
            })
            .catch(console.log);
    };

    public bulkDelete(index: string, type: string, data: any) {
        let bulkBody: any[] = [];

        data.forEach((item: any) => {
            bulkBody.push({
                delete: {
                    _index: index,
                    _type: type,
                    _id: item.id
                }
            });

            //bulkBody.push(item);
        });

        esClient.bulk({ body: bulkBody })
            .then((response: any) => {
                let errorCount = 0;
                response.items.forEach((item: any) => {
                    if (item.index && item.index.error) {
                        console.log(++errorCount, item.index.error);
                    }
                });

                console.log(`Successfully deleted ${data.length - errorCount} out of ${data.length} items`);
            })
            .catch(console.log);
    };

    public indexingGen(index: string, type: string, file: string) {

        const dataRaw = fs.readFileSync(file);
        const dataParse = JSON.parse(dataRaw);

        const dataData = dataParse.map((gen: any) => {
            gen.synonyms = gen.synonyms.map((text: string) => { return { val: text }; }),
                gen.related = gen.related.map((text: string) => { return { val: text }; })
            return gen;
        });

        console.log(`IndexingGen ${dataParse.length} GEN items parsed from data file = [${file}] into index = [${index}] by type = [${type}]`);

        return this.bulkIndex(index, type, dataData);
    };

    public indexing(index: string, type: string, file: string) {

        const dataRaw = fs.readFileSync(file);
        const dataParse = JSON.parse(dataRaw);

        const dataData = dataParse.map((item: any) => {
            return item;
        });

        console.log('IndexingRep ${dataParse.length} REP items parsed from data file = [${file}] into index = [${index}] by type = [${type}]');

        return this.bulkIndex(index, type, dataData);
    };

    public reparto(fileIn: string, fileOut: string) {
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        const datos = dataParse.map((item: any) => {
            return item.reparto
        });
        const datosFinal = _.uniq(_.flattenDeep(datos))
            .map((item: any, index: number) => {
                return { id: index, nombre: item.trim() }
            });
        let datosUniq = _.uniqBy(datosFinal, 'nombre');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
    }

    public titulo(fileIn: string, fileOut: string) {
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        const datos = dataParse.map((item: any) => {
            return item.titulo.trim()
        });
        const datosFinal = _.uniq(_.flattenDeep(datos))
            .map((item: any, index: number) => {
                return { id: index, titulo: item.trim() }
            });
        let datosUniq = _.uniqBy(datosFinal, 'titulo');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        console.log(JSON.stringify(datosUniq));
    }

    public tituloUniversal(fileIn: string, fileOut: string) {
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);

        const datosFinal = _.uniq(_.flattenDeep(dataParse))
            .map((item: any, index: number) => {
                let rating = 0
                let year = 0
                if (!_.isUndefined(item.ratingcount[0]) || !_.isEmpty(item.ratingcount[0])) {
                    rating = item.ratingcount[0];
                }
                if (!_.isUndefined(item.anio[0]) || !_.isEmpty(item.anio[0])) {
                    year = item.anio[0];
                }
                let titulo = item.nombre[0].trim().replace(' (Serie de TV)', '');
                return {
                    id: index,
                    titulo: titulo,
                    year: year,
                    rating: rating
                }
            });
        let datosUniq = _.uniqBy(datosFinal, 'titulo');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        console.log(JSON.stringify(datosUniq));
    }

    public repartoUniversal(fileIn: string, fileOut: string) {
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        let indice = 0;
        const datos = dataParse.map((item: any) => {
            let datosReturn = item.reparto.map((rep: any, index: number) => {

                indice = indice + 1;
                if (rep == 'Brad Pitt') {
                    //console.log(item);
                }
                let rating = 0
                let year = 0
                if (!_.isUndefined(item.ratingcount[0])) {
                    rating = item.ratingcount[0];
                }
                if (!_.isUndefined(item.anio[0])) {
                    year = item.anio[0];
                }
                return {
                    id: indice,
                    nombre: rep.trim(),
                    rating: rating,
                    year: year
                };
            });

            return datosReturn
        });

        let ord = _.orderBy(_.flattenDeep(datos), ['rating'], ['desc']);
        console.log('---d---')
        //console.log(ord);
        let datosUniq = _.uniqBy(ord, 'nombre');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        //console.log(JSON.stringify(datosFinal));
    }

    public director(fileIn: string, fileOut: string) {
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        const datos = dataParse.map((item: any) => {
            return item.director
        });
        const datosFinal = _.uniq(_.flattenDeep(datos))
            .map((item: any, index: number) => {
                return { id: index, nombre: item.trim() }
            });
        let datosUniq = _.uniqBy(datosFinal, 'nombre');

        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        //console.log(JSON.stringify(datosUniq));
    }

    public nombres(fileIn: string, fileOut: string) {
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        const datos = dataParse.map((item: any) => {
            let nombre = '';
            let id_person = '';
            let photo = false;
            let popularity = 0;
            
            if (item.hasOwnProperty('name')) {
                nombre = item.name;
            } else {
                nombre = '';
            }

            if (item.hasOwnProperty('id_person')) {
                id_person = item.id_person;
            } else {
                id_person = '';
            }

            if (item.hasOwnProperty('path_photo') && !_.isNull(item.path_photo)) {
                photo = true;
            } else {
                photo = false;
            }

            if (item.hasOwnProperty('popularity')) {
                popularity = item.popularity;
            } else {
                popularity = 0;
            }
          
            return {
                nombre: nombre,
                id_person: id_person,
                photo: photo,
                popularity: popularity
            }
        });
        const datosFinal = _.uniq(_.flattenDeep(datos))
            .map((item: any, index: number) => {
                console.log('__unq__')
                console.log(item)
                return {
                    id: index,
                    nombre: item.nombre.trim(),
                    id_person: item.id_person,
                    photo: item.photo,
                    popularity: item.popularity
                }
            });
        let datosUniq = _.uniqBy(datosFinal, 'nombre');
        fs.writeFileSync(fileOut, JSON.stringify(datosUniq), { spaces: 2 });
        console.log(JSON.stringify(datosUniq));
    }

    public mongo(key: string, criterio: any, fields: any, fileOut: string) {
        MongoClient.connect(MONGODB_URL, (err: any, db: any) => {
            if (err) {
                console.log("error")
            }
            db.collection(key).find(criterio, fields).toArray((err: any, result: any) => {
                if (err) {
                    console.log("error2")
                }
                console.log(_.flattenDeep(result));

                fs.writeFileSync(fileOut, JSON.stringify(_.flattenDeep(result)), { spaces: 2 });
            })
        })
    }

    public mongoP(key: string, criterio: any, fields: any, fileOut: string) {
        return MongoClient.connect(MONGODB_URL)
        .then((db: any) => {
            return db.collection(key).find(criterio, fields).toArray()
            .then((result: any) => {
                console.log(_.flattenDeep(result));
                fs.writeFileSync(fileOut, JSON.stringify(_.flattenDeep(result)), { spaces: 2 });
                return result;
            });
        })
    }

    public uniq(fileIn: string) {
        const dataRaw = fs.readFileSync(fileIn);
        const dataParse = JSON.parse(dataRaw);
        let data = _.uniqBy(dataParse, 'nombre');
        console.log(dataParse.length);
        console.log(data.length);
    }

    public verUniqUniversal() {
        this.uniq('repartoFileUniversal.json');
        this.uniq('directoresFileUniversal.json');
    }

    //-------------------------------------
    //  Obtener los contenidos de mongo   -
    //-------------------------------------

    public obtenerContenidosCataindexDeMongo() {
        this.mongo('cataIndex', criterio, fieldTitulo, 'titulo.json');
        this.mongo('cataIndex', criterio, fieldDirector, 'director.json');
        this.mongo('cataIndex', criterio, fieldReparto, 'reparto.json');
        this.mongo('cataIndex', criterio, fieldCataIndex, 'cataMov.json');
        this.mongo('universal', criterio, fieldProductoraUniversal, 'productoraUniversal.json');
    }

    public obtenerContenidosUniversalDeMongo() {
        this.mongo('universal', criterio, fieldTituloUniversal, 'tituloUniversal.json');
        this.mongo('universal', criterio, fieldDirector, 'directorUniversal.json');
        this.mongo('universal', criterio, fieldRepartoRating, 'repartoUniversalRating.json');
        this.mongo('Personas', {}, { _id: 0 }, 'nombreUniversal.json');
    }

    //TODO: Automatizar la obtencion de 'nombres' movieDatabase
    public mongoExtraction() {
        let todas = [
            this.mongoP('universal', criterio, fieldTituloUniversal, 'tituloUniversal.json'),
            this.mongoP('universal', criterio, fieldDirector, 'directorUniversal.json'),
            this.mongoP('universal', criterio, fieldRepartoRating, 'repartoUniversalRating.json'),
            this.mongoP('Personas', criterio, fieldNombres, 'nombreUniversal.json'),
        ];

        return Promise.all(todas);
    }

    //--------------------------------------------------------------------------
    //  parsea el fichero de entrada a una estructura manipulable por elastic  -
    //--------------------------------------------------------------------------

    public parseData() {
        let promesa = new Promise((resolve, reject) => {
            this.director('directorUniversal.json', 'directoresFileUniversal.json');
            this.tituloUniversal('tituloUniversal.json', 'tituloFileUniversal.json');
            this.nombres('nombreUniversal.json', 'nombresFile.json');
            this.repartoUniversal('repartoUniversalRating.json', 'repartoRatingFile.json');
            
            resolve(true);
        });
        return promesa;
    }

    //-------------------------------------
    //  Crear el indice de titulos        -
    //-------------------------------------

    public prueba() {
        rp(options).then((item: any) => {
            console.log(item)
        })
    }

    //-------------------------------------
    //              Indexar               -
    //-------------------------------------

    public indexAll() {

        let indexPromise = []

        let index = '';
        let type = '';
        let file = '';

        index = 'bcdnew';
        type = 'director';
        file = 'directoresFileUniversal.json';
        indexPromise.push(this.indexing(index, type, file));

        index = 'bcrnew';
        type = 'reparto';
        file = 'repartoRatingFile.json';
        //indexPromise.push(this.indexing(index, type, file));

        index = 'bctnew';
        type = 'title';
        file = 'tituloFileUniversal.json';
        //indexPromise.push(this.indexing(index, type, file));

        index = 'bcnombre';
        type = 'reparto';
        file = 'nombresFile.json';
        //indexPromise.push(this.indexing(index, type, file));

        // index = 'bcgnew';
        // type = 'gen';
        // file = 'gen.json';
        // //indexingGen(index, type, file)

        // index = 'bcpnew';
        // type = 'productora';
        // file = 'productora.json';
        // //indexing(index, type, file);

        return Promise.all(indexPromise).then(values => {
            console.log('__Indexing__')
            return values;
        });
    }

    public indexSome(indices: string[]) {
        console.log('__TT__indexSome__', indices);
        let all:any[] = [];
        if (indices.length > 0) {
            all = [
                {
                    index: 'bcdnew',
                    type: 'director',
                    file: 'directoresFileUniversal.json',
                    fun: 'indexing'
                },
                {
                    index: 'bcrnew',
                    type: 'reparto',
                    file: 'repartoRatingFile.json',
                    fun: 'indexing'
                },
                {
                    index: 'bctnew',
                    type: 'title',
                    file: 'tituloFileUniversal.json',
                    fun: 'indexing'
                },
                {
                    index: 'bcnombre',
                    type: 'reparto',
                    file: 'nombresFile.json',
                    fun: 'indexing'
                },
                {
                    index: 'bcgnew',
                    type: 'gen',
                    file: 'gen.json',
                    fun: 'indexingGen'
                },
                {
                    index: 'bcpnew',
                    type: 'productora',
                    file: 'productora.json',
                    fun: 'indexing'
                }
            ].map((item: any) => {
                console.log('__TT__item__1__', item);
                if (indices.indexOf(item.index) !== -1) {
                    console.log('__TT__item__2__', item);
                    
                    if (item.fun === 'indexing') {
                        return this.indexing(item.index, item.type, item.file);
                    }
                    if (item.fun === 'indexingGen') {
                        return this.indexingGen(item.index, item.type, item.file);
                    } 
                }
                return null;
            })
        }
        return all;
    }


    //-------------------------------------
    //              Ejecutar               -
    //-------------------------------------

    public ejecutarAll() {
        return this.mongoExtraction().then(mongos => {
            console.log('__Mongo__');
            return this.parseData().then(parse => {
                console.log('__Parsing__');
                // return rp(options).then((item: any) => {
                //     console.log('__Index__')
                    return this.indexSome([ 'bcdnew',
                        'bcrnew',
                        'bctnew',
                        'bcnombre',
                        'bcgnew',
                        'bcpnew']);
                }).then( (data:any) => {
                    console.log('__FIN__')
                    return data;
                });
            // });
        });
    }
};


let indexado = new Indexado();

console.log('__TT__indexado__')
indexado.ejecutarAll();

// indexado.indexSome([
//     'bcdnew',
//     'bcrnew',
//     'bctnew',
//     'bcnombre',
//     'bcgnew',
//     'bcpnew'
// ]);