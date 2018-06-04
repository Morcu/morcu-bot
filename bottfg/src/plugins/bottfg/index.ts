/**
 * A plugin just exports a "library" whose dialogs
 * are the Recognized (LUIS and/or others) intents
 * the plugin can understand
 */

import { BotBuilder } from '@telefonica/bot-core';

import uno from './tfg.intent.uno';
import saludo from './tfg.intent.saludo';
import find from './tfg.intent.find';

export var LIB_NAME = 'bottfg';
export var UNO_INTENT_NAME = 'tfg.intent.uno';
export var SALUDOS_INTENT_NAME = 'tfg.intent.saludo';
export var FIND_INTENT_NAME = 'tfg.intent.find';

// create a plugin, the id must be unique in your bot
let plugin = new BotBuilder.Library(LIB_NAME);

// Add the dialogs, one by one, that this plugin can manage
// The dialog name (1st param) is the intent name as defined
// in Recognizers (LUIS and/or others)
plugin.dialog(UNO_INTENT_NAME, uno);
plugin.dialog(SALUDOS_INTENT_NAME, saludo);
plugin.dialog(FIND_INTENT_NAME, find);

export default plugin;
