
import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import { Sentences, S } from '../../sentences';
import { mongo_find } from '../../utils';
import { debug } from 'logops';
var rp = require('request-promise');
var _ = require('lodash');
const base_image_url = 'http://image.tmdb.org/t/p/original/';
let INTENT_ID = 'saludo';

// This dialog is managed by this discrete steps
export default [
    find
];

function find(session: BotBuilder.Session, args: any, next: Function) {
    session.sendTyping();
    //Variables para el mensaje
    let intent = {
        id: args.intent,
        name: args.intent,
        entities: args.entities
    };
    console.log(session.message.text);
    let actions = {
        name: 'a',
        type: 'a',
        style: 'a',
        inline: false,
        text: 'aaaaaaaaaa',
        value: {
            intent: args.intent,
            entities: args.entities
        }
    };
    let content = {
        text: Sentences.text(session, S.saludos),
        speak: Sentences.text(session, S.saludos),
        actions: [actions]
    };
    let empty_array: any[] = [];
    let channelData = {
        intent: intent,
        content: content,
        customData: {
            type: 'tipo'
        },
        attachment: empty_array,
        actions: {}
    };
    console.log('entities');
    console.dir(args.entities, {depth: null});
    //Comprueba que tipo de contenido es (pelicula/serie)
    let filt = args.entities.filter((elem: any) => {
        return elem.type === 'tipoContenido';
    });
    //Si ha dicho algun tipo de contenido
    if (!_.isEmpty(filt)) {

        //Extraen las entidades
        let values = args.entities.filter((elem: any) => {
            return elem.type === 'titulo';
        }).map((elem_ch: any) => {
            return elem_ch.entity;
        });

        //TODO: Sofisticar la busqueda para que devuelva mas de 1?

        //Peticion para obtener la pelicula de Elastic + NER
        console.log(values);
        const req_url = 'http://localhost:6789/cognitiveService/ne/';
        //const req_url = 'http://cognitive:6789/cognitiveService/ne/';
        const key = '4e894a5bee711efd3c75378759b6d3af';
        const language = 'es';
        const external_source = 'imdb_id';
        const find_url = 'https://api.themoviedb.org/3/find/';
        var options = {
            uri: req_url + session.message.text,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
            .then((data: any) => {
                console.log('datos');
                console.log(data);
                let film = data.hits.hits.filter((filt: any) => {
                    return filt.cert > 0.75 || true;
                });
                //let film = _.sortBy(filt, ['_source.startYear']).reverse();
                console.log(film);
                console.log('-----------------------------------film-----------------------------------');

                //Peticion a tmdb para obtener la imagen y datos diversos
                var options = {
                    uri: find_url + film[0]._source.tconst,
                    qs: {
                        api_key: key,
                        language: language,
                        external_source: external_source
                    },
                    headers: {
                        'User-Agent': 'Request-Promise'
                    },
                    json: true
                };
                console.log(find_url + data.hits.hits[0]._source.tconst);
                console.log(film[0]._source.tconst);
                return rp(options).then((rest_data: any) => {
                    console.log(rest_data);
                    //Si hay resultados se monta elmensaje
                    if ( !_.isEmpty(rest_data['movie_results'], true)) {
                        //console.log(rest_data['movie_results'])
                        console.log(rest_data.movie_results[0].original_title);
                        console.log( base_image_url +  rest_data.movie_results[0].poster_path);
                        channelData.attachment.push({
                            title: rest_data.movie_results[0].original_title,
                            image_url: base_image_url +  rest_data.movie_results[0].poster_path
                        });
                        let msgText = new BotBuilder.Message(session)
                        .sourceEvent({
                            directline: channelData
                        });
                        session.send(msgText);
                        return rest_data['movie_results'];
                    } else {
                        return null;
                    }
                }).catch((err: any) => {
                    console.log(err);
                });
            })
            .catch((err: Error) => {
                console.log('Error' + err);
            });

    }
}



