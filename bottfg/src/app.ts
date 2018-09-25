import * as dotenv from 'dotenv';
import * as path from 'path';

let configFile = process.env.CONFIG_FILE || path.join(__dirname, '..', '.env');
dotenv.config({ path: configFile });

import * as logger from 'logops';
logger.info('Load configuration from file %s', configFile);
logger.setFormat(logger.formatters.dev);

import { RASARecognizer } from './recognizers/RASARecognizer';

import {
    Bot,
    BotBuilder,
    BotServerRunner,
    BotConsoleRunner,
    Startup
} from '@telefonica/bot-core';

import {
    DashBot
} from './middlewares';

import { LUISRecognizerNER } from './recognizers/LUISRecognizerNER';
import { RASARecognizerNER } from './recognizers/RASARecognizerNER';
import { GrammarRecognizer } from './recognizers/GrammarRecognizer';
import { GrammarRecognizerNER } from './recognizers/GrammarRecognizerNER';

import { GrammarModelOptionsSet } from './recognizers/gramUtils';
import { INerOptions, INerOptionsSet } from './recognizers/nerUtils';


let inDocker = process.env.RUN_PLACE === 'DOCKER';
let allConfig = {
    rasaModel: inDocker ? process.env.RASA_MODEL_ES_ES : process.env.LOCAL_RASA_MODEL_ES_ES,
    gramModel: inDocker ? process.env.GRAM_MODEL_ES_ES : process.env.LOCAL_GRAM_MODEL_ES_ES,
    nerHost: inDocker ? process.env.NER_HOST : process.env.LOCAL_NER_HOST
};

// modelos de luis a ser empleados solos (sin ner), es y es-es tienen el mismo modelo de luis
let luisModel: any = {
    'es-es': process.env.LUIS_MODEL_ES_ES,
    'es': process.env.LUIS_MODEL_ES_ES
};

// modelos de luis a emplear junto al ner, es y es-es tienen el mismo modelo de luis
let luisNerModel: any = {
    'es-es': process.env.LUIS_NER_MODEL_ES_ES,
    'es': process.env.LUIS_NER_MODEL_ES_ES
};

// modelos de rasa localizados, es y es-es tienen el mismo modelo de rasa
let rasaModel: any = {
    'es-es': allConfig.rasaModel,
    'es': allConfig.rasaModel
};

// modelos de gramáticas localizados, ahora * y es-es tiene la misma gramática
let gramModelOptionSet: GrammarModelOptionsSet = {
    '*':  { modelUrl: allConfig.gramModel},
    'es-es':  { modelUrl: allConfig.gramModel},
    'es':  { modelUrl: allConfig.gramModel}
};

// las opciones del ner podrían estar localizadas, ahora el * y es-es tendrían el mismo ner
let nerOptionsSet: INerOptionsSet = {
    '*':  { port: process.env.NER_PORT, host: allConfig.nerHost},
    'es-es':  { port: process.env.NER_PORT, host: allConfig.nerHost},
    'es':  { port: process.env.NER_PORT, host: allConfig.nerHost}
};


let recoGram = new GrammarRecognizer(gramModelOptionSet);
recoGram.recognize({locale: '*', message: {text: 'hola'}} as any,
    (err: Error, result: BotBuilder.IIntentRecognizerResult): void => {
       console.log('__TT__RESULT__GRAM__' + '*' + '__', JSON.stringify(result, null, 4));
    });

let recoNerGram = new GrammarRecognizerNER(nerOptionsSet, gramModelOptionSet);
recoNerGram.recognize({locale: '*', message: {text: 'hola'}} as any,
    (err: Error, result: BotBuilder.IIntentRecognizerResult): void => {
        console.log('__TT__RESULT__NER_GRAM' + '*' + '__', JSON.stringify(result, null, 4));
    });


// Create the bot
let bot = new Bot({
    // The recognizers models to be used
    intentRecognizers: [
        new BotBuilder.LuisRecognizer(luisModel)//,                    // LUIS
        //new LUISRecognizerNER(nerOptionsSet, luisNerModel),          // NER + LUIS
        //new RASARecognizer(rasaModel),                               // RASA
        //new RASARecognizerNER(nerOptionsSet, rasaModel),             // NER + RASA
        //new GrammarRecognizer(gramModelOptionSet),                   // GRAMMAR
        //new GrammarRecognizerNER(nerOptionsSet, gramModelOptionSet)  // NER + GRAMMAR
    ],

    // The recognizer order (series, parallel) <in bot-core default is series>
    recognizeOrder: BotBuilder.RecognizeOrder.parallel,

    // The suported languages
    // this will be transform to unique elements when repeat
    supportedLanguages: [
        ...Object.keys(luisModel)
    ],

    // The plugins to use
    plugins: [
        path.join(__dirname, 'plugins', 'bottfg')
    ],

    // Language settings
    localizerSettings: {
        botLocalePath: path.join(__dirname, '..', 'locale'),
        defaultLocale: process.env.BOT_DEFAULT_LOCALE || 'es-es'
    }
});

// Load middlewares
bot.use(DashBot);

// Lets go to startup our bot
let startup = new Startup();

if (process.env.NODE_ENV === 'development') {
    // While in development, we interact with the bot using our terminal
    let runner = new BotConsoleRunner({
        bot
    });
    startup.use(runner);
} else {
    // but in production, we publish a WebServer with the Micorosoft credentials
    // so it can be accessed by the MS BotFramework (MS Gateway)
    let runner = new BotServerRunner({
        bot,
        port: parseInt(process.env.BOT_PORT, 10) || 8080,
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    });

    startup.use(runner);
}

// All done. Launch!
startup.bootstrap('bot');
