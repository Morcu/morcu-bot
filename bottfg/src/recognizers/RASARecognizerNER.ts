import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import requestPromise from 'request-promise';
import { get } from '../../../cognitive/tcs/ner.js';

export interface IRasaIntent {
    name: string;
    confidence: number;
}
export interface IRasaEntity {
    start: number;
    end: number;
    value: string;
    entity: string;
    extractor: string;
    confidence: number;
    processors: any;
}
export interface IRasaResult {
    text: string;
    intent: IRasaIntent;
    entities: Array<IRasaEntity>;
    intent_ranking: Array<IRasaIntent>;
    project: string;
    model: string;
}

export class RASARecognizerNER implements BotBuilder.IIntentRecognizer {
    private models: any;

    /**
     * Constructs a new instance of the recognizer.
     * @param models Either an individual Grammar model used for all utterances
     * or a map of per/locale models conditionally used depending on the locale
     * of the utterance.
     */
    constructor(models: any) {
        if (typeof models === 'string') {
            this.models = { '*': models };
        } else {
            this.models = (models || {});
        }
    }

    /**
     * Attempts to match a users text utterance to an intent
     * @param context Contextual information for a received message that's being recognized.
     * @param callback Function to invoke with the results of the recognition operation.
     * @param callback.error Any error that occured or `null`.
     * @param callback.result The result of the recognition.
     */
    public recognize(context: BotBuilder.IRecognizeContext,
        cb: (err: Error, result: BotBuilder.IIntentRecognizerResult) => void): void {

        logger.debug('[RASARecognizer].recognize__context__', JSON.stringify([context.locale, context.message]));

        let result: BotBuilder.IIntentRecognizerResult = {
            score: 0.0,
            intent: null
        };
        if (context && context.message && context.message.text) {
            logger.debug('[RASRecognizerNER].recognize__models__', context);

            let getResults = (err: Error, data: IRasaResult): void => {
                if (!err) {
                    //result = RASARecognizer.convertRasaToLuisModel(data);

                    //result.query = rasaM.text;
                    result.intent = data.intent.name;
                    result.score = data.intent.confidence;
                    result.intents = data.intent_ranking.map((elem: IRasaIntent) => {
                        console.log(elem);
                        return {
                            intent: elem.name,
                            score: elem.confidence
                        };
                    });
                    result.entities = data.entities.map((elem: IRasaEntity) => {
                        return {
                            startIndex: elem.start,
                            endIndex: elem.end,
                            entity: elem.value,
                            type: elem.entity,
                            score: elem.confidence
                        };
                    });
                    cb(null, result);
                } else {
                    cb(err, null);
                }
            };
            let rasaURl = 'http://rasa:5000';
            RASARecognizerNER.recognizeRemotelly(context, rasaURl, getResults);
        } else {
            cb(null, result);
        }
    }

    /**
     *
     * @param message
     * @param modelUrl
     * @param callback
     */

     static recognizeRemotelly(context: BotBuilder.IRecognizeContext,
        modelUrl: string, callback: (err: Error, data: any) => void) {

        logger.debug('[RASRecognizerNER].recognizeRemotelly__message__', context.message);
        get({
            port: 9191,
            //host: 'ner_client'
            host: 'http://ner_client'
        }, context.message.text, function(err: any, res: any) {
            console.log('___NER__');
            console.log(res);
            console.log(err);
            var url = [
                modelUrl.trim(),
                'parse'
            ].join('/');
            logger.debug('[RASRecognizerNER].recognizeRemotelly__url__', url);

            let options = {
                method: 'GET',
                url: url,
                qs: {
                    q: encodeURIComponent(res || '')
                },
                json: true
            };

            requestPromise(options)
                .then((data: any) => {
                    logger.debug('[RASRecognizerNER].data', data);
                    callback(null, data);
                })
                .catch((err: any) => {
                    logger.error(err);
                    var m = err.toString();

                    // API call failed...
                    callback(err instanceof Error ? err : new Error(m), null);
                });
        });
    }

}
