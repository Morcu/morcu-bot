import * as logger from 'logops';
import requestPromise from 'request-promise';

import { BotBuilder } from '@telefonica/bot-core';
import { GrammarModelOptions, GrammarModelOptionsSet } from './gramUtils';
import { INerOptionsSet, INerResult, getNerResponse } from './nerUtils';

const DEF: string = '*';

export class GrammarRecognizerNER implements BotBuilder.IIntentRecognizer {
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
    constructor(nerOptionsSet: INerOptionsSet, models: GrammarModelOptionsSet) {
        if (typeof models === 'string') {
            this.models = { '*': models };
        } else {
            this.models = (models || {});
        }
        this.nerOptionsSet = nerOptionsSet;
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

        logger.debug('[GrammarRecognizer].recognize__context__', JSON.stringify([context.locale, context.message], null, 4));

        let result: BotBuilder.IIntentRecognizerResult = {
            score: 0.0,
            intent: null
        };

        if (context && context.message && context.message.text) {
            let locale = context.locale || DEF;

            getNerResponse(this.nerOptionsSet[locale], context.message.text, (err: Error, res: INerResult) => {

                if (err) {
                    logger.debug('[GrammarRecognizerNER].recognize__NER_ERROR__', JSON.stringify(err, null, 4));
                    cb(new Error('[GrammarRecognizerNER] NER RECOGNIZER error'), null);
                } else {
                    logger.debug('[GrammarRecognizerNER].recognize__NER_RESPONSE__', JSON.stringify(res, null, 4));

                    let modelOptions: GrammarModelOptions =
                        this.models.hasOwnProperty(locale) ? this.models[locale] : this.models[DEF];

                    logger.debug('[GrammarRecognizerNER].recognize__models__', JSON.stringify(this.models, null, 4));

                    if (modelOptions) {
                        if (modelOptions.modelUrl) {
                            var url = [
                                modelOptions.modelUrl.trim(),
                                'grammarRecognizerService',
                                'recognize',
                                context.locale,
                                encodeURIComponent(res.raw || '')
                            ].join('/');

                            let options = {
                                method: 'GET',
                                url: url,
                                qs: {},
                                json: true
                            };
                            logger.debug('[GrammarRecognizerNER].recognize__options__', JSON.stringify(options, null, 4));

                            requestPromise(options)
                                .then((data: BotBuilder.IIntentRecognizerResult) => {
                                    cb(null, data);
                                })
                                .catch((err: any) => {
                                    logger.error(err);
                                    var m = err.toString();

                                    // API call failed...
                                    cb(err instanceof Error ? err : new Error(m), null);
                                });
                        } else {
                            cb(new Error('[GrammarRecognizerNER] GRAMMAR RECOGNIZER model bad definition for locale "' + context.locale + '".'), null);
                        }
                    } else {
                        cb(new Error('[GrammarRecognizerNER] GRAMMAR RECOGNIZER model not found for locale "' + context.locale + '".'), null);
                    }
                }
            });
        } else {
            cb(null, result);
        }
    };
}

