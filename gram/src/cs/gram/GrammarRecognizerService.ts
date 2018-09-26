//import * as logger from 'logops';
let restify = require('restify');

import { 
    IRecognizeContext,
    IIntentRecognizer,
    IIntentRecognizerResult
} from 'botbuilder';

import {
    GrammarModel,
    GrammarModelSet,
    GrammarModelOptions,
    GrammarModelOptionsSet,
    IGrammarIntent
} from '.';


const DEF: string = '*';
const PATH: string = '/grammarRecognizerService/recognize/:locale/:text';

export class GrammarRecognizerService {
    private models: GrammarModelOptionsSet;
    private grammarModels: GrammarModelSet;
    private server: any;

    /**
     * Constructs a new instance of the recognizer.
     * @param models Either an individual Grammar model used for all utterances
     * or a map of per/locale models conditionally used depending on the locale
     * of the utterance.
     */
    constructor(models: GrammarModelOptionsSet) {
        if (typeof models === 'string') {
            this.models = {};
            this.models[DEF] = models;
        } else {
            this.models = (models || {});
        }
        this.grammarModels = {};

        let keys = Object.keys(this.models);
        keys.forEach((key:string) => {
            this.grammarModels[key] = new GrammarModel(this.models[key]);
        });
    }

    /**
     * Listen at port specific.
     * 
     * @param port The port.
     */
    listen(port: number) {
        this.server = restify.createServer({ name: 'GrammarRecognizerService' });

        this.server.listen(port, () => {
            console.log('%s listening to %s' + PATH, this.server.name, this.server.url);
        });

        this.server.get(PATH, (req: any, res: any, next: any) => {
            let locale = req.params.locale || DEF;
            let text = req.params.text || '';

            // Selección del modelo de grámatica a emplear
            let localeModel: string = this.models.hasOwnProperty(locale) ? locale : DEF;
            //let grammarModel = this.grammarModels[localeModel];
            let conf = this.models[localeModel];
            let grammarModel = new GrammarModel(conf);

            // Acondicionado del texto de entrada
            let textClean = this.specialClean(text);
            console.log('___TTT___server.get___', locale, textClean, conf);

            // Reconocimiento del texto limpio usando el modelo de gramática adecuado
            // y acondicionado del resultado final
            let result = this.getResults(grammarModel.recognize(textClean));
            res.send(result);

            next();
        });

        return this;
    }

    /**
     * 
     * @param data 
     */
    private getResults(data: IGrammarIntent): IIntentRecognizerResult {
        let result: IIntentRecognizerResult = {
            score: 0.0,
            intent: null
        };
        
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
        return result;
    }

    /**
     * 
     * @param text 
     */
    private specialClean(text: string): string {
        // Ñapa funcion para adaptar texto de una regla a texto a parsear :-)

        return text
        .toLowerCase()
        .replace(/[\(\)\*\+\|]/g,'')
        .split(' ')
        .map((t: string) => {
            return (t.indexOf('_') !== -1 ? 'tef' + t.replace('compo_','') : t);
        })
        .join(' ')
        .replace(/_/g,'');
    }

}
