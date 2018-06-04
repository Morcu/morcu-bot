//librerias externas necesarias
const _ = require('lodash');
const express = require('express');
const elasticsearch = require('elasticsearch');

const GENRE_CERT_VALUE = 0.5;

//Conexion con elasticsearch

const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

//Funcion que dado un index y un body hace una peticion a elastic
const search = (index, body) => {
    return esClient.search({index: index, body: body});
};

const exists = (index, type, id) => {
    return esClient.exists({index: index, type: type, id: id});
};

const app = express();

//Diversos gets segun el path necesario
app.get('/cognitiveService/', function (req, res) {
    res.send('CognitiveService!!!')
});

app.get('/cognitiveService/status/', function (req, res) {
    res.send('')
});

//dado el get con el path si se le añade algun argumento este se recoge
app.get('/cognitiveService/gen/:gen', function (req, res) {
    query('bcgnew', 'synonyms.val', req.params.gen, res, true);
});

app.get('/cognitiveService/tit/:tit', function (req, res) {
    Namequery('films', 'primaryTitle', req.params.tit, res, true, 0 , 0);
});
app.get('/cognitiveService/dir/:dire', function (req, res) {
    Namequery('bcdnew', 'nombre', req.params.dire, res, true, 1.5, 1);
});
app.get('/cognitiveService/rep/:rep', function (req, res) {
    Namequery('bcrnew', 'nombre', req.params.rep, res, true, 1.5, 1);
});
app.get('/cognitiveService/prod/:prod', function (req, res) {
    Namequery('bcpnew', 'nombre', req.params.prod, res, true, 0, 0);
});
app.get('/cognitiveService/nombre/:nombre', function (req, res) {
    Namequery('bcnombre', 'nombre', req.params.nombre, res, true, 1.5, 1);
});
app.get('/cognitiveService/all/:all', function (req, res) {
    allQueries(req.params.all, res);
});


//Hace que todos los gets dado el path sea redireccionado al puerto indicado en port

var port = 6000;
app.listen(port, function () {
    console.log('CognitiveService listening on port ' + port + '!')
});


//variables para mostrar trazas
let djCo = false;
let inQR = false;

let qy = true;
/**
*   Devuelve los hits completos (los que estan rodeados por <em>)
*/
let dejaCompletos = (results, key) => {
    if (djCo) {
        console.log('__JJ__dejaCompletos__0__');
        console.dir(results, {depth: null});
    }

    let hitsCompletos = results.hits.hits.filter(e => {
        let highlight = e.highlight;
        let ems = highlight[key][0].split('</em>');
        if (djCo) { console.log('__JJ__ems__', ems); }
        
        // miramos si todas las palabras están envueltas con <em>
        let allWordsWithEM = ems.filter(r => {
            let startWithEM = (r.indexOf('<em>') >= 0 && r.indexOf('<em>') < 2 || r === '');
            
            if (djCo) { console.log('__JJ__allWordsWithEM__', startWithEM, r); }

            return startWithEM;
        }).length === ems.length;

        return allWordsWithEM;
    });

    if (djCo) { 
        console.log('__JJ__dejaCompletos__1__'); 
        console.dir(hitsCompletos, {depth: null});
    }

    return hitsCompletos;
};

/**
* Funcion que incorpora a la query de respuesta los datos necesarios
*/
let incorporaQueryResults = (results, item, key) => {

    results.finalResult = {};
    var matchedWords = 0;

    // se van filtrando los datos devueltos por elastic para obtener los datos en claro para poder devolverlos 

    let rhh = results.hits.hits.reduce((van, vac) => {
        let hval = vac.highlight[key];

        let fin = hval.reduce((an, ac) => {
            if (inQR) { console.log('__JJ__an__ac__', an, ac); }
            let pals = ac.split(' ').filter(e => e.indexOf('<em>') === 0);
            an.push(pals.map(e => e.replace('<em>','').replace('</em>', '')).join(' '));
            if (inQR) { console.log('__JJ__an__ac__', an, ac); }
            return _.uniq(an);
        }, []);

        if (inQR) { console.log('__JJ__hval__fin__', hval, fin); }
        van.push(fin.join(' '));
        return _.uniq(van);
    }, []);
    //se trasnforman los datos obtenidos para generar una respuesta basada en la comparacion del score con los datos fuente
    let scoreVSsource = results.hits.hits.map(e => {
        if (inQR) { console.log('__JJ__rhhh__1__', e); }

        let high = e.highlight[key].map(highlight => {
            let numPalabras = highlight.split(' ').length;
            let numPalabrasMatch = highlight.split('<em>').length - 1;
            matchedWords = numPalabrasMatch > matchedWords ? numPalabrasMatch : matchedWords; 
            return {highlight : highlight, numSource : numPalabras, numUsed : numPalabrasMatch, cert: numPalabras > 0 ? numPalabrasMatch/numPalabras : 0};
        });
        if (inQR) { console.log('__JJ__rhhh__2__', high); }

        return high;
    });

    if (inQR) { console.log('__JJ__rhh__3__', rhh); }

    let numItem = item.split(' ').length;
    let used = _.uniq(_.uniq(rhh).join(' ').split(' ')).join(' ');
    if (inQR) { console.log('__JJ__rhh__4__', used); }

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
    let genreCerts = results.scoreVSsource.map((array) => {
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
        console.log('__JJ__incorporaQueryResults__results__end__');
        console.dir(results, {depth: null});
    }

    if (inQR) { 
        console.log('__GENEROS__', genreCerts);
    }


    // Antes de analizar los resultados, comprobamos que en el caso de que haya solo una coincidencia, ésta tenga una certeza adecuada
    // También Comprobamos si la certeza de la query es mayor del mínimo que admitimos
    if (results.hits.hits.length > 0 && (genreCerts.length > 1 || genreCerts.length === 1 && scoreVSsource[0][0].cert >= GENRE_CERT_VALUE)) {
        //nos quedamos con la coincidencia con un score mayor cuya coincidencia tenga una certeza aceptable 
        //(no se trata de un falso positivo)
        let midResult = results.hits.hits.map((hit, index) =>{
            hit.cert = scoreVSsource[index][0].cert;
            return hit;
        }).reduce((hit1, hit2, actualIndex) => {
            return (hit1._score > hit2._score && hit1.cert >= GENRE_CERT_VALUE) ? hit1 : hit2;

        });
       

	if(midResult._source.hasOwnProperty('equivalent')){
          //Nos quedamos con uno de los géneros equivalentes
          let randIndex = Math.floor(Math.random() * midResult._source.equivalent.length);
          midResult._source.equivalent = [midResult._source.equivalent[randIndex]]
        }
 
        let midSource = {}
        if(midResult._source.hasOwnProperty('nombre')){
            midSource = {id: midResult._source.id, resultado: midResult._source.nombre}
        }
        if(midResult._source.hasOwnProperty('titulo')){
            midSource = {id: midResult._source.id, resultado: midResult._source.titulo}
        }
        results.finalResult = midSource;
    }
    
    if (inQR) { 
        console.log('__JJ__incorporaQueryResultsFinalComparation____');
        console.dir(results, {depth: null});
    }
}

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

    return esClient.bulk({body: bulkBody})
    .then(response => {
        let errorCount = 0;
        response.items.forEach(item => {
            if (item.index && item.index.error) {
            console.log(++errorCount, item.index.error);
            }
        });
        console.log(`Successfully indexed ${data.length - errorCount} out of ${data.length} items`);
        return response;
    })
    .catch(console.err);
};


const bulkDelete = function bulkDelete(index, type, id) {
    let bulkBody = [];

   
    bulkBody.push({
        delete: {
            _index: index,
            _type: type,
            _id: id
        }
    });


    return esClient.bulk({body: bulkBody})
    .then(response => {
        let errorCount = 0;
        response.items.forEach(item => {
            if (item.index && item.index.error) {
            console.log(++errorCount, item.index.error);
            }
        });
        console.log(`Successfully indexed ${data.length - errorCount} out of ${data.length} items`);
        return response;
    })
    .catch(console.err);
};


/**
* Dado un indice, una clave y un item, devuelve una respuesta
*/
let query = (index, key, item, res, enviar) => {
    if (qy) { 
        console.log('___________________________________________________'); 
        console.log('__JJ__query__', index, key, item); 
    }

    // un body de query para el elasticsearch
    let match = {};
    
    let multi_match = {
            fields: [key],
            query : item,
            fuzziness: 2
    } 
    

    match[key] = item;
    let fields = {};
    fields[key] = {};
    let body = {
        size: 5,
        from: 0,
        query: { match },
        highlight: { fields : fields }
    };


    return search(index, body)

    //Se llama con el indice y el body a una query para elastic
        .then(results => {
            //se obtienen los hits completos
            let hitsCompletos = dejaCompletos(results, key);
            //Si hay hits completos se guardan sus valores
            if (hitsCompletos.length > 0) {
                results.hits.total = hitsCompletos.length;
                results.hits.hits = hitsCompletos;
                results.hits.max_score = hitsCompletos.reduce((van, vac) => {
                    return (vac._score > van ? vac._score : van);
                }, 0);
            }
            //Se incorporan a la query de respuesta los datos necesarios dado los resultados, el item y la clave
            incorporaQueryResults(results, item, key);

            if (qy) { 
                console.log('__JJ__results______________________________________'); 
                console.log('', results.hits.total, ' ('+results.query.cert+') '); 
                
                console.log('___________________________________________________'); 

                console.dir(results, {depth: null});
            }

            if(enviar){
                res.send(results);
            }else {
                return results;
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
let Namequery = (index, key, item, res, enviar,fuzzy,useFuzzyValue) => {
    if (qy) { 
        console.log('___________________________________________________'); 
        console.log('__JJ__query__', index, key, item); 
    }

    // un body de query para el elasticsearch
    //let match = {};

    
    //Fuzzines puede ser un parametro a elegir
    let multi_match = {
            fields: [key],
            query : item,
            fuzziness: 0.5,
           
    } 
    switch (useFuzzyValue) {
        case 1:
            multi_match.fuzziness = fuzzy;
            break;
        case 2:
            if(item.trim().split(" ").length > 2){
                multi_match.fuzziness = 1.5;
            }
            break;
    }
    let match = {};

    //El type phrase es demasiado restrictivo, solo hace matching
    // match[key] = {
    //     query: item,
       
    //     type:  "phrase",
    //     fuzziness: 1.5
    // };
   
    match[key] = item;
    let fields = {};
    fields[key] = {};
    let body = {
        size: 5,
        from: 0,
        query: { multi_match },
        highlight: { fields : fields }
    };
    console.log('__BODY__')
    console.dir(body, {depth:null});
    
    return search(index, body)
        .then(results => {
            let indexOrigen = index;
            let hitsCompletos = dejaCompletos(results, key);

            // if (hitsCompletos.length > 0) {
            //     results.hits.total = hitsCompletos.length;
            //     results.hits.hits = hitsCompletos;
            //     results.hits.max_score = hitsCompletos.reduce((van, vac) => {
            //         return (vac._score > van ? vac._score : van);
            //     }, 0);
            // }

            incorporaQueryResults(results, item, key);
            console.log('__complete__', hitsCompletos);
            if(!_.isEmpty(results.scoreVSsource)){
                //Indexar en elastic
                //la frase esta en  results.query.used
                let time = Date.now();
                let rand = Math.random()
                let id = [time, rand].join('_');
                let data = [{'texto': results.query.item, id: id}];
                let type = 'sentence';
                let index = 'sentences';
                console.log('__datos__',data);
                return bulkIndex(index, type, data).then(promesa=>{
                    //Es en la primera posiciondel array porque solo hemos indexado 1
                    console.dir(promesa,{depth:null})

                    return exists(promesa.items[0].index._index, promesa.items[0].index._type, promesa.items[0].index._id).then(exists => {
                        console.log('_existe_',exists);
                        if (exists){
                            pelicula = results.scoreVSsource[0][0].highlight.replace(/<em>/g,'').replace(/<\/em>/g, '')
                            let multi_match = {
                                fields: ["texto"],
                                query : pelicula,
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
                                            _id: promesa.items[0].index._id
                                        }
                                    }
                                ]
                            };
                            
                            fields["texto"] = {};
                            let body = {
                                size: 5,
                                from: 0,
                                query: { bool },
                                highlight: { fields : fields }
                            };

                            console.log('__query_body__');
                            console.dir(body,{depth:null});
                            //hacer la busqueda
                            //añadir filtro de id
                            return search(index, body)
                                .then(resultados => {
                                    console.log('__TEST__');
                                    console.dir(resultados,{depth:null});
                                    
                                    let resultadoFin = resultados.hits.hits.map( peli => {
                                        let matched = [];
                                        let fraseSplit
                                        if(peli.hasOwnProperty('highlight')){
                                            fraseSplit = peli.highlight.texto[0].split(' ').map( (palabra,index) => {
                                                if(palabra.indexOf('<em>') > -1){
                                                    matched.push(index);
                                                    palabra = palabra.replace('<em>','').replace('</em>', '');
                                                }
                                                return palabra; 
                                            });
                                        }
                                        wordCountPhrase = 0;
                                        wordCountFilm = 0;
                                        peliculaSplit = pelicula.trim().split(' ');
                                        peliculaSplit.forEach(item =>{
                                            wordCountFilm = wordCountFilm + item.trim().length;
                                        });
                                        fraseSplit.forEach(item => {
                                            wordCountPhrase = wordCountPhrase + item.trim().length
                                        });
                                        wordCountMatch = 0;
                                        matched.forEach(item => {
                                            palabra = fraseSplit[item]
                                            wordCountMatch = wordCountMatch + palabra.trim().length
                                        });
                                        wc = wordCountMatch / wordCountPhrase;
                                        wcFilm = wordCountMatch / wordCountFilm;
                                        
                                        let matchVSSentence = {puntuacion: matched.length/fraseSplit.length, wordCount: wc}
                                        let matchedVSMatched = {puntuacion: matched.length/peliculaSplit.length, wordCount: wcFilm}
                                        console.log('__indice__', indexOrigen);
                                        
                                        switch (indexOrigen) {
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

                                        let composicion ={frase: fraseSplit, matched: matched, matchVSSentence: matchVSSentence, matchVSMatched: matchedVSMatched,
                                             type: selection, resultado: pelicula, year: results.hits.hits[0]._source.year, 
                                             rating: results.hits.hits[0]._source.rating,
                                            photo: results.hits.hits[0]._source.photo, v: results.hits.hits[0]._source.v,
                                            }
                                        return composicion;
                                    });
            
                                    console.log('fin',resultadoFin);
                                    
                                    results.resultsMatched = resultadoFin;
                                    if (qy) { 
                                        console.log('__JJ__results______________________________________'); 
                                        console.log('', results.hits.total, ' ('+results.query.cert+') '); 
                                        
                                        console.log('___________________________________________________'); 
                        
                                        console.dir(results, {depth: null});
                                    }
                                    
                                    //borrar al final
                                    let type = 'sentence';
                                    let index = 'sentences';
                                    let id = resultados.hits.hits[0]._id
                                    let borrar = bulkDelete(index, type, id);
                                    results.responseCode = true;
                                    if(enviar){
                                        res.send(results);
                                    }else {
                                        return results;
                                    }

                            });
                        }
                    });

                });
            }else{
                results = {responseCode: false};
                res.send(results);
            }
            

            
        })
        .catch(console.error);
};

let allQueries = (item, res) => {
    let promesas = []
    promesas.push( query('bcgnew', 'synonyms.val', item, res, false));
    
    promesas.push( Namequery('bctnew', 'titulo', item, res, false));
    promesas.push( Namequery('bcdnew', 'nombre', item, res, false));
    promesas.push( Namequery('bcrnew', 'nombre', item, res, false));
    promesas.push( Namequery('bcpnew', 'nombre', item, res, false));

    Promise.all(promesas).then( values => {
        
        console.log('__ENVIANDO__');
        res.send(values);
    });
}


//Funcion de limpieza de caracteres

let clean = (input) => {
    var output = (input || '').toLowerCase();
    var non_asciis = {
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

/*
query: { 
    query_string: {
        default_field : "synonyms.val",
        query : item
    }
}
                    query : item.replace(' ', ' AND ')

                    query: { 
                bool: {
                    must: [
                        { 
                            match: {
                                'synonyms.val' : {
                                    query: item,
                                    min_should_match: '80%'
                                }
                            }
                        }
                    ]
                }
            }

            
                match_phrase: {
                    'synonyms.val' : {
                        query: item
                    }
                }

                "filtered": {
                    "query": { "match": { "synonyms.val": item }},
                    "filter": { "term": { "synonyms.val": item }}
                }

                ,
            highlight: {
                fields : {
                    'synonyms.val' : {}
                }
            }
*/




