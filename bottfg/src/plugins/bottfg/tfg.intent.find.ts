
import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import { Sentences, S } from '../../sentences';
import { mongo_find } from '../../utils';
import { debug } from 'logops';
var rp = require('request-promise');
var _ = require('lodash');
const base_image_url = 'http://image.tmdb.org/t/p/original/';
let INTENT_ID = 'saludo';

let inDocker = process.env.RUN_PLACE === 'DOCKER';
const req_url = inDocker ? process.env.COGNITIVE_HOST : process.env.LOCAL_COGNITIVE_HOST;
var MongoClient = require('mongodb').MongoClient;
var mongo_url = inDocker ? process.env.MONGO_HOST : process.env.LOCAL_MONGO_HOST;

//const req_url = 'http://cognitive:6789/cognitiveService/ne/';
const key = '4e894a5bee711efd3c75378759b6d3af';
const language = 'es';
const external_source = 'imdb_id';
const find_url = 'https://api.themoviedb.org/3/find/';
// This dialog is managed by this discrete steps
export default [
    find
];

interface IcognitiveResp {
    index: string;
    query: Array<string>;
    filt: Array<string>;
    field: string;
}

function find(session: BotBuilder.Session, args: any, next: Function) {
    session.sendTyping();
    console.log('__LOS ARGUMENTOS__');
    console.log(args);

    //TODO:REMOVE
    args.entities[0].type = 'content_types';
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
    var options = {
        method: 'POST',
        uri: req_url,
        body: args,
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then((cognitive_response: IcognitiveResp) => {
            console.log('datos');
            console.log(cognitive_response);
        //Peticion a tmdb para obtener la imagen y datos diversos
        let tmdb_resp = cognitive_response.query.map((value_q: string) => {
            var options = {
                uri: find_url + value_q,
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
            return rp(options).then((rest_data: any) => {
                console.log(rest_data, !_.isEmpty(rest_data['movie_results']));
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
        });
        Promise.all(tmdb_resp).then( (resp: any) => {
            let clean_resp = _.flattenDeep(_.remove(resp, null));
            //console.log(clean_resp);
            clean_resp.forEach( (item: any) => {
                channelData.attachment.push({
                    original_title: item.original_title,
                    image_url: base_image_url +  item.poster_path,
                    sum: item.overview,
                    title: item.title,
                    date: item.release_date
                });
            });
            let msgText = new BotBuilder.Message(session)
            .sourceEvent({
                directline: channelData
            });
            session.endDialog(msgText);

        });
    });
}
/*
let get_mongo_data_from_cognitive = (cognitive_response: IcognitiveResp): any => {
    MongoClient.connect(mongo_url, function(err, db) {
        if (err) { throw err; }
        var dbo = db.db('film_data');
        let response = cognitive_response.query.map((value_q: string) => {
            return dbo.collection(cognitive_response.index).find({ cognitive_response.field: value_q});
        });
        db.close();
        return response;
      });
};
*/
