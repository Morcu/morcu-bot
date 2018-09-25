import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import requestPromise from 'request-promise';
import { getNerResponse, INerOptionsSet, INerOptions, INerResult } from './nerUtils';

const DEF: string = '*';

export class LUISRecognizerNER implements BotBuilder.IIntentRecognizer {
    private models: any;
    private nerOptionsSet: INerOptionsSet;
    /**
     * Constructs a new instance of the recognizer.
     *
     * @param nerOptionsSet NER options set
     * @param models Either an individual Grammar model used for all utterances
     * or a map of per/locale models conditionally used depending on the locale
     * of the utterance.
     */
    constructor(nerOptionsSet: INerOptionsSet, models: any) {
        if (typeof models === 'string') {
            this.models = { '*': models };
        } else {
            this.models = (models || {});
        }
        this.nerOptionsSet = nerOptionsSet;
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

        logger.debug('[LUISRecognizerNER].recognize__context__', JSON.stringify([context.locale, context.message]));

        let result: BotBuilder.IIntentRecognizerResult = {
            score: 0.0,
            intent: null
        };
        if (context && context.message && context.message.text) {
            logger.debug('[LUISRecognizerNER].recognize__models__', context);

            let locale = context.locale || DEF;
            let getResults = (err: Error, data: BotBuilder.ILuisModelMap): void => {
                if (!err) {
                    //result = LUISRecognizerNER.convertRasaToLuisModel(data);
                    /*
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
                    });*/
                    cb(null, result);
                } else {
                    cb(err, null);
                }
            };
            //let luisURl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/979f2e3b-51db-4d70-bded-d97c06c88902' +
            //'?subscription-key=140b5d63529e413f964ba603287bd941&verbose=true&timezoneOffset=0&q=';
            let luisURl = this.models[locale];
            console.log('__NER_OPTIONS__');
            console.log(locale, this.nerOptionsSet[locale]);
            LUISRecognizerNER.recognizeRemotelly(this.nerOptionsSet[locale], context, luisURl, getResults);
        } else {
            cb(null, result);
        }
    }

    /**
     *
     * @param nerOptions
     * @param message
     * @param modelUrl
     * @param callback
     */
     static recognizeRemotelly(nerOptions: INerOptions, context: BotBuilder.IRecognizeContext,
        modelUrl: string, callback: (err: Error, data: any) => void) {

        logger.debug('[LUISRecognizerNER].recognizeRemotelly__message__', context.message);
        console.log('__NER_OPTIONS__');
        console.log(nerOptions);
        getNerResponse(nerOptions, context.message.text, (err: Error, res: INerResult) => {
            console.log('___NER_RESPONSE__');
            console.log(res);
            console.log(err);
            var url = [
                modelUrl.trim(),
                'parse'
            ].join('/');

            logger.debug('[LUISRecognizerNER].recognizeRemotelly__url__', url);

            let options = {
                method: 'GET',
                url: url + encodeURIComponent((res.raw as any) || ''),
                json: true
            };

            requestPromise(options)
                .then((data: any) => {
                    logger.debug('[LUISRecognizerNER].data', data);
                    callback(null, data);
                })
                .catch((err: any) => {
                    logger.error(err);
                    let message = err.toString();

                    // API call failed...
                    callback(err instanceof Error ? err : new Error(message), null);
                });
        });
    }

}
