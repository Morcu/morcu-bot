require('dotenv').config();
let jsonfile = require('jsonfile');
import * as logger from 'logops';

import {
    GrammarModelOptions, 
    GrammarModelOptionsSet,
    GrammarRecognizerService
} from './cs/gram';
import { forEach } from 'async';
import { IIntentRecognizerResult } from 'botbuilder';

// Lectura de los modelos de gramáticas del fichero de configuración
let modelOptionsSet = loadJSONFile(process.env.GRAMMAR_MODELS_SET_FILE) as GrammarModelOptionsSet;

if (modelOptionsSet) {
    // Se añade una función de limpieza a cada modelo
    // TODO: se podría definir una función de limpieza diferente para cada modelo
    for(let key in modelOptionsSet) {
        modelOptionsSet[key].clean = clean;
    }

    // Creación y arranque del servicio
    let grammarRecognizerService: GrammarRecognizerService = 
        new GrammarRecognizerService(modelOptionsSet);

    // Se establece el puerto de escucha del servicio
    let portGram: number = + process.env.RECOGNIZER_PORT || 6677;    
    grammarRecognizerService.listen(portGram);
}


/**
 * Funcion de limpieza de caracteres.
 * @param input El texto a limpiar.
 */
function clean(input: string) {
    var output = (input || '').toLowerCase();
    var non_asciis: any = {
        'a': '[àáâãäå]',
        'ae': 'æ',
        'c': 'ç',
        'e': '[èéêë]',
        'i': '[ìíîï]',
        //'n': 'ñ', 
        'o': '[òóôõö]',
        'oe': 'œ',
        'u': '[ùúûűü]',
        'y': '[ýÿ]',
        '.': '[ªº]',
        '': '[\"\'\|\*\\{};&$@~><_=%#./·]',
        'plus': '[+]'
    };


    for (var i in non_asciis) {
        if (non_asciis.hasOwnProperty(i)) {
            output = output.replace(new RegExp(non_asciis[i], 'g'), i);
        }
    }
    return output;
};

/**
 * Lectura de un fichero json.
 * 
 * @param file El nombre del fichero.
 */
function loadJSONFile(file: string) {
    try {
        return jsonfile.readFileSync(file);
    } catch (err) {
        logger.error('Fichero ' + file + ' no encontrado: ' + err.message);
        return false;
    }
};
