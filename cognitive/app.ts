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

//Conexion con elasticsearch

const esClient = new elasticsearch.Client({
    host: 'elasticsearch:9200',
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

console.log('__TT__specials__', specials);


//dado el get con el path si se le añade algun argumento este se recoge
app.get('/cognitiveService/gen/:gen', function (req: any, res: any) {
    query('bcgnew', 'synonyms.val', req.params.gen, res, true);
});

app.get('/cognitiveService/ne/:gen', function (req: any, res: any) {
    ner_and_elastic(req.params.gen, res, true);
});



app.get('/cognitiveService/tit/:tit', function (req: any, res: any) {
    nameQuery('films', 'primaryTitle', req.params.tit, res, true, 0, 0);
});
app.get('/cognitiveService/dir/:dir', function (req: any, res: any) {
    nameQuery('bcdnew', 'nombre', req.params.dir, res, true, 1.5, 1);
});
app.get('/cognitiveService/rep/:rep', function (req: any, res: any) {
    nameQuery('bcrnew', 'nombre', req.params.rep, res, true, 1.5, 1);
});
app.get('/cognitiveService/prod/:prod', function (req: any, res: any) {
    nameQuery('bcpnew', 'nombre', req.params.prod, res, true, 0, 0);
});
app.get('/cognitiveService/nombre/:nombre', function (req: any, res: any) {
    nameQuery('bcnombre', 'nombre', req.params.nombre, res, true, 1.5, 1);
});
app.get('/cognitiveService/all/:all', function (req: any, res: any) {
    allQueries(req.params.all, res);
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

/**
* Dado un indice, una clave y un item, devuelve una respuesta
*/
let query = (index: string, key: string, item: string, res: any, enviar: boolean) => {
    if (qy) {
        console.log('___________________________________________________');
        console.log('__TT__query__', index, key, item);
    }

    // un body de query para el elasticsearch
    let match: any = {};

    let multi_match = {
        fields: [key],
        query: item,
        fuzziness: 2
    }


    match[key] = item;
    let fields: any = {};
    fields[key] = {};
    let body = {
        size: 5,
        from: 0,
        query: { match },
        highlight: { fields: fields }
    };


    return search(index, body)

        //Se llama con el indice y el body a una query para elastic
        .then((results: any) => {
            //se obtienen los hits completos
            let hitsCompletos = dejaCompletos(results, key);
            //Si hay hits completos se guardan sus valores
            if (hitsCompletos.length > 0) {
                results.hits.total = hitsCompletos.length;
                results.hits.hits = hitsCompletos;
                results.hits.max_score = hitsCompletos.reduce((van: any, vac: any) => {
                    return (vac._score > van ? vac._score : van);
                }, 0);
            }
            //Se incorporan a la query de respuesta los datos necesarios dado los resultados, el item y la clave
            let resultF = incorporaQueryResults(results, item, key);

            if (qy) {
                console.log('__TT__results______________________________________');
                console.log('', resultF.hits.total, ' (' + resultF.query.cert + ') ');
                console.log('___________________________________________________')
                console.dir(resultF, { depth: null });
            }
            if (enviar) {
                res.send(resultF);
            } else {
                return resultF;
            }
        })
        .catch(console.error);
};
//fuzzy es un valor numerico
//useFuzzyValue es un numero para indicar que valor de fuzzy hay que usar:
//      0 -> usa el valor de fuzzy por defecto (0.5)
//      1 -> usa el valor del argumento fuzzy
//      2 -> fuzzy en funcion de el numero de palabras
//              - 1,2 -> 0.5
//              - mayor que 2 -> 1.5    
let nameQuery = (index: string, key: string, item: string, res: any, enviar: boolean, fuzzy?: number, useFuzzyValue?: number) => {
    if (qy) {
        console.log('___________________________________________________');
        console.log('__JJ__query__', index, key, item);
    }

    // un body de query para el elasticsearch
    //let match = {};


    //Fuzzines puede ser un parametro a elegir
    let multi_match = {
        fields: [key],
        query: item,
        fuzziness: 0.5,

    }
    switch (useFuzzyValue) {
        case 1:
            multi_match.fuzziness = fuzzy;
            break;
        case 2:
            if (item.trim().split(" ").length > 2) {
                multi_match.fuzziness = 1.5;
            }
            break;
    }
    let match: any = {};

    //El type phrase es demasiado restrictivo, solo hace matching
    // match[key] = {
    //     query: item,

    //     type:  "phrase",
    //     fuzziness: 1.5
    // };

    match[key] = item;
    let fields: any = {};
    fields[key] = {};
    let body = {
        size: 5,
        from: 0,
        query: { multi_match },
        highlight: { fields: fields }
    };
    console.log('__BODY__', body);

    return search(index, body)
        .then((results: any) => {
            console.log('__PRIMER_RESULT__');
            console.dir(results, { depth: null });

            let hitsCompletos = dejaCompletos(results, key);

            // if (hitsCompletos.length > 0) {
            //     results.hits.total = hitsCompletos.length;
            //     results.hits.hits = hitsCompletos;
            //     results.hits.max_score = hitsCompletos.reduce((van, vac) => {
            //         return (vac._score > van ? vac._score : van);
            //     }, 0);
            // }

            results = incorporaQueryResults(results, item, key);
            console.log('__complete__', hitsCompletos);
            if (!_.isEmpty(results.scoreVSsource)) {
                //Indexar en elastic
                //la frase esta en  results.query.used
                let time = Date.now();
                let rand = Math.random()
                let id = [time, rand].join('_');
                let data = [{ 'texto': results.query.item, id: id }];
                let type = 'sentence';
                let indexSentence = 'sentences';
                console.log('__datos__', data);
                return bulkIndex(indexSentence, type, data).then((datoIndexado: any) => {
                    //Es en la primera posiciondel array porque solo hemos indexado 1
                    console.dir(datoIndexado, { depth: null })

                    let datoIndexadoIndex = datoIndexado.items[0].index;
                    return exists(datoIndexadoIndex._index, datoIndexadoIndex._type, datoIndexadoIndex._id).then((exists: any) => {
                        console.log('_existe_', exists);
                        if (exists) {

                            //Se hace una busqueda por cada contenido encontrado
                            let mapDeResultados = results.scoreVSsource.map((resultadoScoreVS: any) => {
                                console.log('__ResiltsVS__');
                                console.log(resultadoScoreVS);
                                let pelicula = resultadoScoreVS[0].highlight.replace(/<em>/g, '').replace(/<\/em>/g, '');
                                let multi_match = {
                                    fields: ["texto"],
                                    query: pelicula,
                                    fuzziness: 1.5,
                                }
                                let bool = {
                                    must: [
                                        {
                                            match: {
                                                texto: {
                                                    query: pelicula,
                                                    fuzziness: 1.5
                                                }
                                            }
                                        },
                                        {
                                            match: {
                                                _id: datoIndexado.items[0].index._id
                                            }
                                        }
                                    ]
                                };

                                fields["texto"] = {};
                                let body = {
                                    size: 5,
                                    from: 0,
                                    query: { bool },
                                    highlight: { fields: fields }
                                };
                                console.log('__query_body__');
                                console.dir(body, { depth: null });
                                //hacer la busqueda

                                //Esto se podria hacer con un return directo
                                let resultadoBusqSentence = search(indexSentence, body)
                                    .then((resultados: any) => {
                                        console.log('__TEST__');
                                        console.dir(resultados, { depth: null });
                                        console.log('___PELICULA__1__', index, pelicula);
                                        let resultadoFin = resultados.hits.hits.map((peli: any) => {
                                            let matched: any[] = [];
                                            let fraseSplit: string[];
                                            if (peli.hasOwnProperty('highlight')) {
                                                fraseSplit = peli.highlight.texto[0].split(' ').map((palabra: string, i: number) => {
                                                    if (palabra.indexOf('<em>') > -1) {
                                                        matched.push(i);
                                                        palabra = palabra.replace('<em>', '').replace('</em>', '');
                                                    }
                                                    return palabra;
                                                });
                                            }
                                            let wordCountPhrase = 0;
                                            let wordCountFilm = 0;
                                            let peliculaSplit = pelicula.trim().split(' ');
                                            peliculaSplit.forEach((item: any) => {
                                                wordCountFilm = wordCountFilm + item.trim().length;
                                            });
                                            fraseSplit.forEach(item => {
                                                wordCountPhrase = wordCountPhrase + item.trim().length
                                            });
                                            let wordCountMatch = 0;
                                            matched.forEach(item => {
                                                let palabra = fraseSplit[item]
                                                wordCountMatch = wordCountMatch + palabra.trim().length
                                            });
                                            let wc = wordCountMatch / wordCountPhrase;
                                            let wcFilm = wordCountMatch / wordCountFilm;

                                            let matchVSSentence = { puntuacion: matched.length / fraseSplit.length, wordCount: wc }
                                            let matchedVSMatched = { puntuacion: matched.length / peliculaSplit.length, wordCount: wcFilm }
                                            console.log('__indice__', index);
                                            let selection;
                                            switch (index) {
                                                case 'bctnew':
                                                    selection = 'titulo'
                                                    break;
                                                case 'bcrnew':
                                                    selection = 'reparto'
                                                    break;
                                                case 'bcdnew':
                                                    selection = 'director'
                                                    break;
                                                case 'bcpnew':
                                                    selection = 'productora'
                                                    break;
                                                case 'bcnombre':
                                                    selection = 'reparto'
                                                    break;
                                            }
                                            console.log('__indice__', selection);

                                            let composicion = {
                                                frase: fraseSplit, matched: matched, matchVSSentence: matchVSSentence, matchVSMatched: matchedVSMatched,
                                                type: selection, resultado: pelicula, year: results.hits.hits[0]._source.year,
                                                rating: results.hits.hits[0]._source.rating,
                                                photo: results.hits.hits[0]._source.photo, v: results.hits.hits[0]._source.v,
                                            }
                                            return composicion;
                                        });

                                        console.log('___PELICULA__2__', index, pelicula);
                                        console.log('fin', resultadoFin);
                                        return resultadoFin;
                                    });

                                return resultadoBusqSentence;

                            });

                            return Promise.all(mapDeResultados).then(valuesFromMap => {

                                results.resultsMatched = _.flattenDeep(valuesFromMap[0]);
                                results.generalResults = _.flattenDeep(valuesFromMap);
                                if (qy) {
                                    console.log('__JJ__results______________________________________');
                                    console.log('', results.hits.total, ' (' + results.query.cert + ') ');

                                    console.log('___________________________________________________');

                                    console.dir(results, { depth: null });
                                }

                                //borrar al final
                                let typeBorrar = 'sentence';
                                let indexBorrar = 'sentences';
                                let idBorrar = datoIndexado.items[0].index._id;
                                let borrar = bulkDelete(indexBorrar, typeBorrar, idBorrar);
                                results.responseCode = true;
                                if (enviar) {
                                    res.send(results);
                                } else {
                                    console.log('Retorno de valores');
                                    return results;
                                }

                            });

                            //let pelicula = results.scoreVSsource[0][0].highlight.replace(/<em>/g, '').replace(/<\/em>/g, '')
                        }
                    });

                });
            } else {
                results = { responseCode: false };
                
                if (enviar) {
                    res.send(results);
                } else {
                    console.log('Retorno de valores');    
                    var promise = new Promise((resolve, reject) => {
                        resolve(results)    
                    });
                    return promise;
                }
                               

            }
        })
        .catch(console.error);
};

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

let allQueries = (item: string, res: any) => {
    let promesas: any = []
    promesas.push(query('bcgnew', 'synonyms.val', item, res, false));

    promesas.push(nameQuery('bctnew', 'titulo', item, res, false));
    promesas.push(nameQuery('bcdnew', 'nombre', item, res, false, 1.5, 1));
    promesas.push(nameQuery('bcrnew', 'nombre', item, res, false, 1.5, 1));
    promesas.push(nameQuery('bcpnew', 'nombre', item, res, false));
    promesas.push(nameQuery('bcnombre', 'nombre', item, res, false, 1.5, 1));

    Promise.all(promesas).then(values => {

        console.log('__ENVIANDO__');
        res.send(values);
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
