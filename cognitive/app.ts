//librerias externas necesarias
import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import { Specials, SpecialsResult } from './tcs';

const _ = require('lodash');
const express = require('express');
const elasticsearch = require('elasticsearch');

import { get } from './tcs/ner.js';

let jsonfile = require('jsonfile');
let SPECIALS_DESCRIPTOR = 'specials-descriptor.json';

const GENRE_CERT_VALUE = 0.5;
const FIND_INTENT = 'tfg.intent.find';
const RECOM_INTENT = 'tfg.intent.recommendC2C';
const FILM_ENTITY = 'pelicula';
const SERIE_ENTITY = 'serie';
const DIRECTOR_ENTITY = 'director';
const ACTOR_ENTITY = 'actor';
const CORTO_ENTITY = 'corto';
const FILM_INDEX = 'films';
const SERIES_INDEX = 'series';
const OTHERS_INDEX = 'others';
const PEOPLE_INDEX = 'people';
const GENRES_INDEX = 'genres';
const CONTENT_TYPE = 'content_types';
const CONTENT_TYPE_INDEX = 'content_types';
const PERSON_TAG = 'jobs';
const PERSON_TAG_INDEX = 'jobs';
const GENRES_TAG = 'genre';
const GENRES_TAG_INDEX = 'film_genres';
//Conexion con elasticsearch
/*
const esClient = new elasticsearch.Client({
    host: 'elasticsearch:9200',
    log: 'error'
});
*/
const esClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
});

//Funcion que dado un index y un body hace una peticion a elastic
const search = (index: string, body: any) => {
    return esClient.search({ index: index, body: body });
};

const exists = (index: string, type: any, id: any) => {
    return esClient.exists({ index: index, type: type, id: id });
};

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//Diversos gets segun el path necesario
app.get('/cognitiveService/', function (req: any, res: any) {
    res.send('CognitiveService!!!')
});

app.get('/cognitiveService/status/', function (req: any, res: any) {
    res.send('')
});

app.get('/cognitiveService/lit/:lit', function (req: any, res: any) {
    let msgX: BotBuilder.IMessage = {
        type: 'message',
        agent: '',
        source: '',
        sourceEvent: null,
        address: null,
        user: null,

        timestamp: '',
        summary: '',
        text: req.params.lit,
        textLocale: '',
        attachments: [],
        entities: [],
        textFormat: '',
        attachmentLayout: ''
    };

    let msg: any = {
        type: 'message',
        text: req.params.lit
    };

    console.log('__TT__specials__GET__', msg);
    queryLiterales(msg, res, true);
});

app.post('/cognitiveService/specials', function (req: any, res: any) {
    var msg = req.body;
    console.log('__TT__specials__POST__', msg);
    queryLiterales(msg, res, true);
});

let specials = new Specials();

let queryLiterales = (msg: BotBuilder.IMessage, res: any, enviar: boolean) => {
    let result = specials.explore(msg);
    if (enviar) {
        res.send(result);
    } else {
        return result;
    }
};


app.get('/cognitiveService/ne/:gen', function (req: any, res: any) {
    ner_and_elastic(req.params.gen, res, true);
});


app.post('/cognitiveService/getDataFromEntity', function (req: any, res: any) {
    var msg = req.body;
    console.log('__getDataFromEntity__POST__', msg);

    get_data_from_elastic(msg, res)
    
});

//Hace que todos los gets dado el path sea redireccionado al puerto indicado en port

var port = 6789;
app.listen(port, function () {
    console.log('CognitiveService listening on port ' + port + '!')
});


//variables para mostrar trazas
let djCo = false;
let inQR = false;
let qy = false;
/**
*   Devuelve los hits completos (los que estan rodeados por <em>)
*/
let dejaCompletos = (results: any, key: string) => {
    if (djCo) {
        console.log('__TT__dejaCompletos__0__');
        console.dir(results, { depth: null });
    }

    let hitsCompletos = results.hits.hits.filter((e: any) => {
        let highlight = e.highlight;
        let ems = highlight[key][0].split('</em>');
        if (djCo) { console.log('__TT__ems__', ems); }

        // miramos si todas las palabras están envueltas con <em>
        let allWordsWithEM = ems.filter((r: any) => {
            let startWithEM = (r.indexOf('<em>') >= 0 && r.indexOf('<em>') < 2 || r === '');

            if (djCo) { console.log('__TT__allWordsWithEM__', startWithEM, r); }

            return startWithEM;
        }).length === ems.length;

        return allWordsWithEM;
    });

    if (djCo) {
        console.log('__TT__dejaCompletos__1__');
        console.dir(hitsCompletos, { depth: null });
    }

    return hitsCompletos;
};

/**
* Funcion que incorpora a la query de respuesta los datos necesarios
*/
let incorporaQueryResults = (results: any, item: any, key: string) => {

    results.finalResult = {};
    var matchedWords = 0;

    // se van filtrando los datos devueltos por elastic para obtener los datos en claro para poder devolverlos 

    let rhh = results.hits.hits.reduce((van: any, vac: any) => {
        let hval = vac.highlight[key];

        let fin = hval.reduce((an: any, ac: any) => {
            if (inQR) { console.log('__TT__an__ac__', an, ac); }
            let pals = ac.split(' ').filter((e: string) => e.indexOf('<em>') === 0);
            an.push(pals.map((e: string) => e.replace('<em>', '').replace('</em>', '')).join(' '));
            if (inQR) { console.log('__TT__an__ac__', an, ac); }
            return _.uniq(an);
        }, []);

        if (inQR) { console.log('__TT__hval__fin__', hval, fin); }
        van.push(fin.join(' '));
        return _.uniq(van);
    }, []);
    //se trasnforman los datos obtenidos para generar una respuesta basada en la comparacion del score con los datos fuente
    let scoreVSsource = results.hits.hits.map((e: any) => {
        if (inQR) { console.log('__TT__rhhh__1__', e); }

        let high = e.highlight[key].map((highlight: any) => {
            let numPalabras = highlight.split(' ').length;
            let numPalabrasMatch = highlight.split('<em>').length - 1;
            matchedWords = numPalabrasMatch > matchedWords ? numPalabrasMatch : matchedWords;
            return { highlight: highlight, numSource: numPalabras, numUsed: numPalabrasMatch, cert: numPalabras > 0 ? numPalabrasMatch / numPalabras : 0 };
        });
        if (inQR) { console.log('__TT__rhhh__2__', high); }

        return high;
    });

    if (inQR) { console.log('__TT__rhh__3__', rhh); }

    let numItem = item.split(' ').length;
    let used = _.uniq(_.uniq(rhh).join(' ').split(' ')).join(' ');
    if (inQR) { console.log('__TT__rhh__4__', used); }

    let numUsed = used !== '' ? used.split(' ').length : 0;

    //se costruye la query a ser devue

    results.query = {
        item: item,
        numItem: numItem,
        used: used,
        numUsed: numUsed,
        cert: (numItem > 0 ? numUsed / numItem : 0)
    };
    results.scoreVSsource = scoreVSsource;



    //Limpiamos el doble array de certezas (representa todas las coincidencias de cada uno de los hit)
    // De esta forma genreCerts será un array que represente la coincidencia más exacta de cada hit
    let genreCerts = results.scoreVSsource.map((array: any[]) => {
        return array.reduce((coincidence1, coincidence2) => {
            return (coincidence1.cert >= coincidence2.cert) ? coincidence1 : coincidence2;
        });
    });
    // console.log('__matched__',matchedWords);
    // let calculatedFilms = genreCerts.map(item =>{
    //     item.calculos = (matchedWords - ((item.numSource - item.numUsed) * 0.35)) + (item.cert * 0.65);
    //     return item;
    // });

    // // let filmResult = genreCerts.filter( item => {
    // //     return item.numUsed === mtachedWords;
    // // });
    // let filmResult ;
    // console.log('__COSO1__',calculatedFilms);
    // filmResult = _.sortBy(calculatedFilms,['calculos'], ['desc']);
    // console.log('__COSO2__',filmResult);
    // results.filmResult = filmResult;

    if (inQR) {
        console.log('__TT__incorporaQueryResults__results__end__');
        console.dir(results, { depth: null });
    }

    if (inQR) {
        console.log('__GENEROS__', genreCerts);
    }


    // Antes de analizar los resultados, comprobamos que en el caso de que haya solo una coincidencia, ésta tenga una certeza adecuada
    // También Comprobamos si la certeza de la query es mayor del mínimo que admitimos
    if (results.hits.hits.length > 0 && (genreCerts.length > 1 || genreCerts.length === 1 && scoreVSsource[0][0].cert >= GENRE_CERT_VALUE)) {
        //nos quedamos con la coincidencia con un score mayor cuya coincidencia tenga una certeza aceptable 
        //(no se trata de un falso positivo)
        let midResult = results.hits.hits
            .map((hit: any, index: number) => {
                hit.cert = scoreVSsource[index][0].cert;
                return hit;
            })
            .reduce((hit1: any, hit2: any, actualIndex: number) => {
                return (hit1._score > hit2._score && hit1.cert >= GENRE_CERT_VALUE) ? hit1 : hit2;
            });

        if (midResult._source.hasOwnProperty('equivalent')) {
            //Nos quedamos con uno de los géneros equivalentes
            let randIndex = Math.floor(Math.random() * midResult._source.equivalent.length);
            midResult._source.equivalent = [midResult._source.equivalent[randIndex]]
        }

        let midSource = {}
        if (midResult._source.hasOwnProperty('nombre')) {
            midSource = { id: midResult._source.id, resultado: midResult._source.nombre }
        }
        if (midResult._source.hasOwnProperty('titulo')) {
            midSource = { id: midResult._source.id, resultado: midResult._source.titulo }
        }
        results.finalResult = midSource;
    }

    if (inQR) {
        console.log('__TT__incorporaQueryResultsFinalComparation____');
        console.dir(results, { depth: null });
    }
    return results;
}

const bulkIndex = function bulkIndex(index: string, type: string, data: any) {
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

const bulkDelete = function bulkDelete(index: string, type: string, id: string) {
    let bulkBody = [];


    bulkBody.push({
        delete: {
            _index: index,
            _type: type,
            _id: id
        }
    });


    return esClient.bulk({ body: bulkBody })
        .then((response: any) => {
            let errorCount = 0;
            response.items.forEach((item: any) => {
                if (item.index && item.index.error) {
                    console.log(++errorCount, item.index.error);
                }
            });
            return response;
        })
        .catch(console.log);
};

let get_data_from_elastic = (args: any, res_resolve: any, fuzzy?: number, useFuzzyValue?: number) => {

/*
    1º ver que intent es
    2º saber si hay entidades de tipo de contenido
    3º Comprobar si hay alguna entidad para realizar la busqueda
        - Si no hay entidad a buscar FIN
        - Si hay entidad por la que buscar
            - Si hay entidad de tipo de contenido se busca en ese indice
            - Si no hay entidad de tipo de contenido habra que realizar una busqueda en diferentes indices
*/
  
    switch (args.intent) {
        case FIND_INTENT:
            find_intent(res_resolve, args.entities)
            break;
        case RECOM_INTENT:
            recom_intent(res_resolve, args.entities)
            break;
    }  
}

let find_intent = (res_resolve: any, entities: any) => {
    
    let ent_list = entities.map( (entity: any) => {
        return entity.type;
    });
    console.log(ent_list)
    //TODO: Comprobar que junto a la entiedad de tipo de contenido viene un contenido
    //TODO: A la hora de devolver la infromacion añadir informacion extra para que el bot aplique a la hora de buscar en mongo
    //TODO: Filtrar las respuestas por debajo de un umbral
    /*
        {
            "indice": "",
            "query": [],
            "filtro": ""
        }
    */
    console.log(ent_list.indexOf(CONTENT_TYPE))
    let content_type:any = [];
    if(ent_list.indexOf(CONTENT_TYPE) > -1) {
        let fields:Array<string> = ["content_type"];//buscar en el titutlo y en el titulo original
        let search_data: string = entities[ent_list.indexOf(CONTENT_TYPE)].entity;
        let index: string = CONTENT_TYPE_INDEX;
        content_type.push(search_elastic(fields, search_data, index))
    }
    if(ent_list.indexOf(PERSON_TAG) > -1) {
        let fields:Array<string> = ["job"];//buscar en el titutlo y en el titulo original
        let search_data: string = entities[ent_list.indexOf(PERSON_TAG)].entity;
        let index: string = PERSON_TAG_INDEX;
        content_type.push(search_elastic(fields, search_data, index))
    }
    Promise.all(content_type).then(values => {
        console.log('__PROMISE__', _.has(values[0], 'hits.hits[0]._source.content_type'))
        let tag = values.map((item:any) => {
            return _.has(item, 'hits.hits[0]._source.content_type') ? item.hits.hits[0]._source.content_type : item.hits.hits[0]._source.job
        });
        console.log('__PROMISE__', content_type)
        if( tag.indexOf(FILM_ENTITY) > -1){
            let fields:Array<string> = ["primaryTitle", "originalTitle"];//buscar en el titutlo y en el titulo original
            let search_data: string = entities[ent_list.indexOf('titulo')].entity;
            let index: string = FILM_INDEX;
            console.log('el resiltado');
            search_elastic(fields, search_data, index).then( (result: any) => {
                console.log('el resiltado', result)
                res_resolve.send(build_response(result, "tconst", "film", ["movie","tvMovie","video","videoGame"]));
            });
        }else if( tag.indexOf(SERIE_ENTITY) > -1){
            let fields:Array<string> = ["primaryTitle", "originalTitle"];
            let search_data: string = entities[ent_list.indexOf('titulo')].entity;
            let index: string = SERIES_INDEX;
            search_elastic(fields, search_data, index).then( (result: any) => {
                res_resolve.send(build_response(result, "tconst", "film", ["tvEpisode","tvSeries","tvMiniSeries"]));
            });
        }else if( tag.indexOf(ACTOR_ENTITY) > -1 || tag.indexOf(DIRECTOR_ENTITY) > -1){
            //TODO: SOFISTICARLO PARA HACER QUE SEPARE ENTRE ACTORES Y DIRECTORES
            let fields:Array<string> = ['primaryName'];
            let search_data: string = entities[ent_list.indexOf('persona')].entity;
            let index: string = PEOPLE_INDEX;
            search_elastic(fields, search_data, index).then( (result: any) => {
                res_resolve.send(build_response(result, "nconst", "names", []));
            });
        }else if( tag.indexOf(CORTO_ENTITY) > -1){
            let fields:Array<string> = ["primaryTitle", "originalTitle"];
            let search_data: string = entities[ent_list.indexOf('titulo')].entity;
            let index: string = OTHERS_INDEX;
            search_elastic(fields, search_data, index).then( (result: any) => {
                res_resolve.send(build_response(result, "tconst", "film", ["short","tvShort","tvSpecial"]));
            });
        }else{
            //TODO: CALCULAR DE ALGUNA FORMA EL RANKING Y OBTENER EL FILTRO Y EL INDICE DE MONGO DEL MEJOR
            if(tag.indexOf('titulo') > -1){
                search_all(entities[ent_list.indexOf('titulo')].entity).then( (result: any) => {
                    res_resolve.send(build_response(result, "tconst", "film", []));
                });
            }else if(tag.indexOf('persona') > -1){
                search_all(entities[ent_list.indexOf('persona')].entity).then( (result: any) => {
                    res_resolve.send(build_response(result, "tconst", "film", []));
                });
            }
        }
    })
    
}

let recom_intent = (res_resolve: any, entities: any) => {
    let ent_list = entities.map( (entity: any) => {
        return entity.type;
    });
    let tagged_result:any = []
    if(ent_list.indexOf(CONTENT_TYPE) > -1) {
        let fields:Array<string> = ["content_type"];//buscar en el titutlo y en el titulo original
        let search_data: string = entities[ent_list.indexOf(CONTENT_TYPE)].entity;
        let index: string = CONTENT_TYPE_INDEX;
        tagged_result.push(search_elastic(fields, search_data, index))
    }
    if(ent_list.indexOf(GENRES_TAG) > -1) {
        let fields:Array<string> = ["name"];
        let search_data: string = entities[ent_list.indexOf(GENRES_TAG)].entity;
        let index: string = GENRES_TAG_INDEX;
        tagged_result.push(search_elastic(fields, search_data, index))
    }
    
    Promise.all(tagged_result).then(values => {
        console.log('__PROMISE__', _.has(values[0], 'hits.hits[0]._source.content_type'))
        let tag = values.map((item:any) => {
            return _.has(item, 'hits.hits[0]._source.content_type') ? item.hits.hits[0]._source.content_type : GENRES_TAG
        });
        if( tag.indexOf(GENRES_TAG) > -1){
            //devolver el genero
            let genre = values.filter((item:any) => {
                return _.has(item, 'hits.hits[0]._source.en_name');
            }).map((filtered_values:any) => {
                return filtered_values.hits.hits[0]._source.en_name;
            });
            res_resolve.send({
                "genre": genre[0]
            })
        } else if( tag.indexOf(FILM_ENTITY) > -1){
            let fields:Array<string> = ["primaryTitle", "originalTitle"];//buscar en el titutlo y en el titulo original
            let search_data: string = entities[ent_list.indexOf('titulo')].entity;
            let index: string = FILM_INDEX;
            console.log('el recc2c');
            search_elastic(fields, search_data, index).then( (result: any) => {
                console.log('el recc2c', result)
                //devolver el original title
                res_resolve.send({
                    "film_title": result.hits.hits[0]._source.originalTitle
                })
            });
        } else {
            res_resolve.send({})
        }
    });
    
}

let build_response = (response: any, response_field:string, mongo_index: string, mongo_filter:Array<string>) => {
    
    let res: any = {
        "index": mongo_index,
        "query": [],
        "filt": mongo_filter,
        "field": response_field
    }
    //TODO: usar  filter para limpiar los valores que esten por debajo de un umbral
    res.query = response.hits.hits.map((values:any ) => {
        return values._source[response_field];
    });
    return res;
}

let search_elastic = (fields: Array<String>, search_data: string, index: string):any => {
    
    let multi_match = {
        fields: fields,
        query: search_data,
        fuzziness: 1,
    }
    let highlight_fields: any = {}
    fields.forEach( (field: any) => {
        if(!_.has(highlight_fields, field)){
            highlight_fields[field] = {}
        }
    });
    let body = {
        size: 5,
        from: 0,
        query: { multi_match },
        highlight: { fields: highlight_fields }
    };
    console.log('__BODY__');
    console.dir( body, {depth: null});

    return search(index, body)
        .then((results: any) => {
            
            console.log('__PRIMER_RESULT__');
            console.dir(results, { depth: null });
            console.log('__RES_RESULT__');
            return results;
            //res_resolve.send(results);
            
        });
}

let search_all = (search_data: string) => {
    let async_arr: any = []
        async_arr.push(search_elastic(["primaryTitle", "originalTitle"], search_data, FILM_INDEX))
        async_arr.push(search_elastic(["primaryTitle", "originalTitle"], search_data, SERIES_INDEX))
        async_arr.push(search_elastic(['primaryName'], search_data, PEOPLE_INDEX))

        return Promise.all(async_arr).then(values => { 
            console.log(values);
            //TODO: devolver el mejor valor
          });
}

let ner_and_elastic = (item: string, res_resolve: any, enviar: boolean, fuzzy?: number, useFuzzyValue?: number) => {

    console.log(item);
    
    get({
        port:9191,
        host:'ner_client'
    }, item, function(err:any, res:any){
        console.log(res);
        
        let key = 'primaryTitle';
        let index = 'films';
        let search_data = ''
        console.log('______DATA_____')
        console.log(res.entities.TCONT)
        console.log(res.entities.TPEL)
        
        if(!_.isEmpty(res.entities.TCONT[0])){
            switch(res.entities.TCONT[0]){
                case 'pelicula':
                    key = 'primaryTitle';
                    index = 'films';
                    if(!_.isEmpty(res.entities.TPEL)){
                        search_data = res.entities.TPEL[0]
                    }
                    break;
                case 'serie':
                    key = 'primaryTitle';
                    index = 'series';
                    if(!_.isEmpty(res.entities.TPEL)){
                        search_data = res.entities.TPEL[0]
                    }
                    break;
                case 'corto':
                    key = 'primaryTitle';
                    index = 'other';
                    if(!_.isEmpty(res.entities.TPEL)){
                        search_data = res.entities.TPEL[0]
                    }
                    break;  
                case 'actor':
                case 'director':
                    key = 'primaryName';
                    index = 'people';
                    if(!_.isEmpty(res.entities.TPEL)){
                        search_data = res.entities.TPEL[0]
                    }
                    break;
                    

            }
        }else{
            if(!_.isEmpty(res.entities.TPEL)){
                search_data = res.entities.TPEL[0]
            }
        }
        //Fuzzines puede ser un parametro a elegir
        let multi_match = {
            fields: [key],
            query: search_data,
            fuzziness: 0.5,

        }
        let match: any = {};

        let fields: any = {};
        fields[key] = {};
        let body = {
            size: 5,
            from: 0,
            query: { multi_match },
            highlight: { fields: fields }
        };
        console.log('__BODY__');
        console.dir( body, {depth: null});

        search(index, body)
            .then((results: any) => {
                
                console.log('__PRIMER_RESULT__');
                console.dir(results, { depth: null });
                res_resolve.send(results);
                
            });

    });


}

//Funcion de limpieza de caracteres

let clean = (input: string) => {
    var output = (input || '').toLowerCase();
    var non_asciis: any = {
        'a': '[àáâãäå]',
        'ae': 'æ',
        'c': 'ç',
        'e': '[èéêë]',
        'i': '[ìíîï]',
        //'n': 'ñ', 
        'o': '[òóôõö]',
        'oe': 'œ',
        'u': '[ùúûűü]',
        'y': '[ýÿ]',
        '.': '[ªº]',
        '': '[\"\'\|\*\\{};&$@~><_=%#./·]',
        'plus': '[+]'
    };


    for (var i in non_asciis) {
        if (non_asciis.hasOwnProperty(i)) {
            output = output.replace(new RegExp(non_asciis[i], 'g'), i);
        }
    }
    return output;
};

function loadJSONFile(file: string) {
    try {
        return jsonfile.readFileSync(file);
    } catch (err) {
        logger.error('Fichero ' + file + ' no encontrado: ' + err.message);
        return false;
    }
}