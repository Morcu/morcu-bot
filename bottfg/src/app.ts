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
import { RASARecognizerNER } from './recognizers/RASARecognizerNER';

let luisModel: any = {
    'es-es': process.env.LUIS_MODEL__CORTANA_EUR_ES_ES,
    'es': process.env.LUIS_MODEL__CORTANA_EUR_ES_ES
};

let rasaModel: any = {
    'es-es': process.env.RASA_MODEL_ES_ES,
    'es': process.env.RASA_MODEL_ES_ES
};


// Create the bot
let bot = new Bot({
    // The recognizers models to be used
    intentRecognizers: [
        new BotBuilder.LuisRecognizer(luisModel),
        new RASARecognizer(rasaModel),
        new RASARecognizerNER(rasaModel)
        //new RASARecognizer('')
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
