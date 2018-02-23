/************************************************************/
/* Fichero de frases para el bot                            */
/************************************************************/
import { BotBuilder } from '@telefonica/bot-core';
import { S } from './';
let jsonfile = require('jsonfile');

var _ = require('lodash');

const LOCALE = process.env.BOT_DEFAULT_LOCALE || '*';
const SENTENCES = 'locale/' + LOCALE + '/sentences.json';

/**
 *
 */
export class Sentences {
    private static items: Sentence[] = [];

    private static initialized = false;

    // por conveniencia, para rellenar en la inicialización, y tenerla a mano
    private static sampleUses: string[] = null;

    /**
     * Para inicializar las estructuras de las sentencias
     */
    public static initialize() {
        if (!Sentences.initialized) {
            let sentences = jsonfile.readFileSync(SENTENCES);
            Sentences.items = _.map(sentences, (value: any, key: string) => {
                value.label = key;
                return value;
            });

            // añadimos a la enum S los elementos leidos desde el descriptor de sentencias
            // y reenumeramos las sentencias acorde con ello
            Sentences.items.forEach((sentence: any, index: number) => {
                (<any>S)[(<any>S)[sentence.label] = index] = sentence.label;
                sentence.labelEnum = index;
                //console.log(sentence);
            });

            // Por conveniencia, para rellenar en la inicialización, y tenerla a mano
            Sentences.sampleUses = <string[]>Sentences.items.find((elem: Sentence) => {
                return elem.labelEnum === S.sampleUses;
            }).text;

            Sentences.initialized = true;
        }
    }

    /**
     *
     * @param session
     * @param sentenceLabel
     */
    public static text(session: BotBuilder.Session, sentenceLabel: S): string {

        let sentence = Sentences.items.find((elem: Sentence) => {
            return elem.labelEnum === sentenceLabel;
        });

        // Se entregará siempre un string, aunque haya un array de textos en la sentencia
        // con ello gobernaremos la frase que realmente está llegando al usuario
        // ya que registraremos los index de los random que vamos generando
        sentence.indexRandomText = _.isArray(sentence.text) ? _.random(sentence.text.length - 1) : 0;
        let finalText: string = _.isArray(sentence.text) ? sentence.text[sentence.indexRandomText] : <string>sentence.text;

        // Si la sentencia tiene algún meta, se procesa,
        // de momento el único meta es para controlar si se añade o no 'sampleUses' al final de las frases
        if (sentence.meta && sentence.meta.addSampleUses) {
            sentence.indexRandomUse = _.random(Sentences.sampleUses.length - 1);
            finalText = [finalText, Sentences.sampleUses[sentence.indexRandomUse]].join(' ');
        }

        // Se añade el texto final que resulte de las composiciones que se vayan haciendo
        sentence.finalText = finalText;

        // Y finalmente se entrega el texto listo para ser visto por el usuario
        return finalText;
    }
}

// Se inicializan las Sentences
Sentences.initialize();

/**
 *
 */
export interface SentenceMetaInfo {
    addSampleUses: boolean;
    // y más que se irán poniendo
}

/**
 *
 */
export interface Sentence {
    label: string;
    labelEnum?: S;

    text: string | string[];
    meta?: SentenceMetaInfo;

    indexRandomText?: number;
    indexRandomUse?: number;

    finalText?: string;
}
