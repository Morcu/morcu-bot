import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import requestPromise from 'request-promise';

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

export class RASARecognizer implements BotBuilder.IIntentRecognizer {
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
            logger.debug('[rasRecognizer].recognize__models__', context);

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
            //RASARecognizer.recognizeLocally(context, getResults);
            RASARecognizer.recognizeRemotelly(context, rasaURl, getResults);
        } else {
            cb(null, result);
        }
    }
    /**
     *
     * @param message
     * @param model
     * @param callback
     */
    /*
    static recognizeLocally(context: BotBuilder.IRecognizeContext, callback: (err: Error, data: any) => void) {
        logger.debug('[GramRecognizer].recognizeLocally__message__', context.message);
        var result = model.recognize(context.message.text || '');
        //TODO: De momento ponemos un refHash de prueba
        logger.debug('[GramRecognizer].recognizeLocally__result__', JSON.stringify(result));
        let result: IRasaResult = {
            query: 'q',
            intents: [{intent: 'i1', score: 0.99}, {intent: 'i2', score: 0.9}],
            entities: [{entity: 'e1', type: 't1', score: 0.9}],
            topScoringIntent: {intent: 'i1', score: 0.99}
        };

        let result: any;
        callback(null, result);
    }
    */

    /**
     *
     * @param message
     * @param modelUrl
     * @param callback
     */

     static recognizeRemotelly(context: BotBuilder.IRecognizeContext,
        modelUrl: string, callback: (err: Error, data: any) => void) {

        logger.debug('[RASRecognizer].recognizeRemotelly__message__', context.message);
        var url = [
            modelUrl.trim(),
            'parse'
        ].join('/');
        logger.debug('[RASRecognizer].recognizeRemotelly__url__', url);

        let options = {
            method: 'GET',
            url: url,
            qs: {
                q: encodeURIComponent(context.message.text || '')
            },
            json: true
        };

        requestPromise(options)
            .then((data: any) => {
                logger.debug('[RASRecognizer].data', data);
                callback(null, data);
            })
            .catch((err: any) => {
                logger.error(err);
                var m = err.toString();

                // API call failed...
                callback(err instanceof Error ? err : new Error(m), null);
            });
    }

    /*
    static convertRasaToLuisModel(rasaM: IRasaResult) {
        let result: any;
        result.query = rasaM.text;
        result.topScoringIntent.intent = rasaM.intent.name;
        result.topScoringIntent.score = rasaM.intent.confidence;
        result.intents = rasaM.intent_ranking.map((elem: IRasaIntent) => {
            let ret: BotBuilder.IIntent;
            ret.intent = elem.name;
            ret.score = elem.confidence;
            return ret;
        });
        result.entities = rasaM.entities.map((elem: IRasaEntity) => {
            let ret: BotBuilder.IEntity;
            ret.startIndex = elem.start;
            ret.endIndex = elem.end;
            ret.entity = elem.value;
            ret.type = elem.entity;
            ret.score = elem.confidence;
            return ret;
        });
        return result;
    }
    */
}
