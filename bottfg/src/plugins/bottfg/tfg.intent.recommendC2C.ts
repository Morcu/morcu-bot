
import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import { Sentences, S } from '../../sentences';
import { mongo_find } from '../../utils';
import { debug } from 'logops';
var rp = require('request-promise');
var _ = require('lodash');
const base_image_url = 'http://image.tmdb.org/t/p/original/';
let INTENT_ID = 'saludo';


const req_url = 'http://localhost:6789/cognitiveService/getDataFromEntity/';
//const req_url = 'http://cognitive:6789/cognitiveService/ne/';
const key = '4e894a5bee711efd3c75378759b6d3af';
const language = 'es';
const external_source = 'imdb_id';
const find_url = 'https://api.themoviedb.org/3/find/';
const recommend_uri = 'http://localhost:5005/';
const cognitive_genre = 'genre';
const cognitive_film_title = 'film_title';
// This dialog is managed by this discrete steps
export default [
    recommend
];


interface IcognitiveResp {
    index: string;
    query: Array<string>;
    filt: Array<string>;
    field: string;
}

function recommend(session: BotBuilder.Session, args: any, next: Function) {
    session.sendTyping();
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
    var options = {
        method: 'POST',
        uri: req_url,
        body: args,
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then((cognitive_response: any) => {
            console.log('datos');
            console.log(cognitive_response);
        /*
            Comprobar que la respuesta no es vacia
            si no es vacia comprobar si la recomendacion es sobre:
                - Pelicula en concreto
                - genero
            Si es pelicula llamar al recomendador con la pelicula
                TODO: escoger un recomendador de entre los que hay (ademas pensar en asincronamente lamar al otro recomendador por si)
            Si es genero llamar al recomendador con el genero

            Cuando se obtengan las peliculas llamar a tmdb para obtener la info.
        */

        if (!_.isEmpty(cognitive_response)) {
            var options = {
                uri: recommend_uri,
                qs: {
                    title: ''
                },
                json: true // Automatically parses the JSON string in the response
            };
            if (_.has(cognitive_response, cognitive_film_title)) {
                options.qs.title = cognitive_response[cognitive_film_title];
                options.uri += 'metadata_i';
            } else if (_.has(cognitive_response, cognitive_genre)) {
                options.qs.title = cognitive_response[cognitive_genre];
                options.uri += 'genre';
            }
            console.log(options);
                rp(options)
                    .then((recom_response: any) => {
                        console.log('recom response');
                        console.log(recom_response);
                         //Peticion a tmdb para obtener la imagen y datos diversos
                        let tmdb_resp = recom_response.map((value_q: string) => {
                            var options = {
                                uri: find_url + value_q,
                                qs: {
                                    api_key: key,
                                    language: language,
                                    external_source: external_source
                                },
                                json: true
                            };
                            return rp(options).then((rest_data: any) => {
                                //console.log(rest_data, !_.isEmpty(rest_data['movie_results']));
                                //Si hay resultados se monta elmensaje
                                if ( !_.isEmpty(rest_data['movie_results'])) {
                                    //console.log(rest_data['movie_results'])
                                    return rest_data['movie_results'];
                                } else {
                                    return null;
                                }
                            }).catch((err: any) => {
                                console.log(err);
                            });
                            /*  console.log(rest_data.movie_results[0].original_title);
                                    console.log( base_image_url +  rest_data.movie_results[0].poster_path);
                                    channelData.attachment.push({
                                        title: rest_data.movie_results[0].original_title,
                                        image_url: base_image_url +  rest_data.movie_results[0].poster_path
                                    });
                                    let msgText = new BotBuilder.Message(session)
                                    .sourceEvent({
                                        directline: channelData
                                    });
                                    session.send(msgText);*/
                        });
                        Promise.all(tmdb_resp).then( (resp: any) => {
                            let clean_resp = _.flattenDeep(_.remove(resp, null));
                            //console.log(clean_resp);
                            clean_resp.forEach( (item: any) => {
                                console.log(item.original_title);
                                console.log( base_image_url +  item.poster_path);
                                channelData.attachment.push({
                                    title: item.original_title,
                                    image_url: base_image_url +  item.poster_path
                                });
                            });
                            let msgText = new BotBuilder.Message(session)
                            .sourceEvent({
                                directline: channelData
                            });
                            session.send(msgText);
                        });
                    })
                    .catch(function (err) {
                        // API call failed...
                        console.log(err);
                    });
        } else {
            //No content found
            console.log('Sin entidades en C2C');
        }
    });
}



