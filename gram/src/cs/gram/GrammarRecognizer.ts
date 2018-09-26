import * as logger from 'logops';
import * as requestPromise from 'request-promise';
import { 
    IRecognizeContext,
    IIntentRecognizer,
    IIntentRecognizerResult
} from 'botbuilder';
import {
    GrammarModelOptions,
    GrammarModelOptionsSet
} from './GrammarOptions';

const DEF: string = '*';

export class GrammarRecognizer implements IIntentRecognizer {
    private models: any;

    /**
     * Constructs a new instance of the recognizer.
     * @param models Either an individual Grammar model used for all utterances
     * or a map of per/locale models conditionally used depending on the locale
     * of the utterance.
     */
    constructor(models: GrammarModelOptionsSet) {
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
    public recognize(context: IRecognizeContext,
        cb: (err: Error, result: IIntentRecognizerResult) => void): void {

        logger.debug('[GrammarRecognizer].recognize__context__', JSON.stringify([context.locale, context.message], null, 4));

        let result: IIntentRecognizerResult = {
            score: 0.0,
            intent: null
        };

        if (context && context.message && context.message.text) {
            let locale = context.locale || DEF;
            let modelOptions: GrammarModelOptions =
                this.models.hasOwnProperty(locale) ? this.models[locale] : this.models[DEF];

            logger.debug('[GrammarRecognizer].recognize__models__', JSON.stringify(this.models, null, 4));

            if (modelOptions) {
                if (modelOptions.modelUrl) {
                    var url = [
                        modelOptions.modelUrl.trim(),
                        'grammarRecognizerService',
                        'recognize',
                        context.locale,
                        encodeURIComponent(context.message.text || '')
                    ].join('/');
                                
                    let options = {
                        method: 'GET',
                        url: url,
                        qs: {},
                        json: true
                    };
                    logger.debug('[GrammarRecognizer].recognize__options__', JSON.stringify(options, null, 4));
                    
                    requestPromise(options)
                        .then((data: IIntentRecognizerResult) => {
                            cb(null, data);
                        })
                        .catch((err: any) => {
                            logger.error(err);
                            var m = err.toString();
            
                            // API call failed...
                            cb(err instanceof Error ? err : new Error(m), null);
                        });    
                } else {
                    cb(new Error('GRAMMAR RECOGNIZER model bad definition for locale "' + context.locale + '".'), null);
                }
            } else {
                cb(new Error('GRAMMAR RECOGNIZER model not found for locale "' + context.locale + '".'), null);
            }
        } else {
            cb(null, result);
        }
    };
}

