import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import * as requestPromise from 'request-promise';
import { GrammarModel, GrammarModelOptions, IGrammarIntent } from '.';

export class GrammarRecognizer implements BotBuilder.IIntentRecognizer {
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
    };

    /**
     * Attempts to match a users text utterance to an intent
     * @param context Contextual information for a received message that's being recognized.
     * @param callback Function to invoke with the results of the recognition operation.
     * @param callback.error Any error that occured or `null`.
     * @param callback.result The result of the recognition.
     */
    public recognize(context: BotBuilder.IRecognizeContext,
        cb: (err: Error, result: BotBuilder.IIntentRecognizerResult) => void): void {

        logger.debug('[GramRecognizer].recognize__context__', JSON.stringify([context.locale, context.message]));

        let result: BotBuilder.IIntentRecognizerResult = {
            score: 0.0,
            intent: null
        };

        if (context && context.message && context.message.text) {
            let modelOptions: GrammarModelOptions =
                this.models.hasOwnProperty(context.locale || '*') ?
                    this.models[context.locale] : this.models['*'];
            logger.debug('[GramRecognizer].recognize__models__', this.models);

            let getResults = (err: Error, data: IGrammarIntent): void => {
                if (!err) {
                    result.intents = data.intents;
                    result.entities = data.entities;
                    //result.model = data.model;
                    let top: any;
                    data.intents.forEach((intent: any) => {
                        if (top) {
                            if (intent.score > top.score) {
                                top = intent;
                            }
                        } else {
                            top = intent;
                        }
                    });

                    if (top) {
                        result.score = top.score;
                        result.intent = top.intent;
                        switch (top.intent.toLowerCase()) {
                            case 'builtin.intent.none':
                            case 'none':
                                result.score = 0.1;
                                break;
                        }
                    }
                    cb(null, result);
                } else {
                    cb(err, null);
                }
            };

            if (modelOptions) {
                if (modelOptions.modelUrl) {
                    GrammarRecognizer.recognizeRemotelly(context, modelOptions.modelUrl, getResults);
                } else if (modelOptions.model) {
                    let grammarModel = new GrammarModel(modelOptions);
                    GrammarRecognizer.recognizeLocally(context, grammarModel, getResults);
                } else {
                    cb(new Error('PARSER model bad definition for locale "' + context.locale + '".'), null);
                }
            } else {
                cb(new Error('PARSER model not found for locale "' + context.locale + '".'), null);
            }
        } else {
            cb(null, result);
        }
    };

    /**
     * 
     * @param message 
     * @param model 
     * @param callback 
     */
    static recognizeLocally(context: BotBuilder.IRecognizeContext,
        model: GrammarModel, callback: (err: Error, data: IGrammarIntent) => void) {

        logger.debug('[GramRecognizer].recognizeLocally__message__', context.message);
        var result = model.recognize(context.message.text || '');
        //TODO: De momento ponemos un refHash de prueba 
        logger.debug('[GramRecognizer].recognizeLocally__result__', JSON.stringify(result));

        callback(null, result);
    };

    /**
     * 
     * @param message 
     * @param modelUrl 
     * @param callback 
     */
    static recognizeRemotelly(context: BotBuilder.IRecognizeContext,
        modelUrl: string, callback: (err: Error, data: any) => void) {

        logger.debug('[GramRecognizer].recognizeRemotelly__message__', context.message);
        var url = [
            modelUrl.trim(),
            'cognitiveService',
            'recognize',
            context.locale,
            encodeURIComponent(context.message.text || '')
        ].join('/');
        logger.debug('[GramRecognizer].recognizeRemotelly__url__', url);

        let options = {
            method: 'GET',
            url: url,
            qs: {},
            json: true
        };

        requestPromise(options)
            .then((data: any) => {
                callback(null, data);
            })
            .catch((err: any) => {
                logger.error(err);
                var m = err.toString();

                // API call failed...
                callback(err instanceof Error ? err : new Error(m), null);
            });
    };
}

