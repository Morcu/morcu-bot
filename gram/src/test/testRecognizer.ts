require('dotenv').config();
let fs = require('fs');
import * as logger from 'logops';

import {
    GrammarRecognizer,
    GrammarModelOptionsSet
} from '../cs/gram';
import { forEach } from 'async';
import { IIntentRecognizerResult } from 'botbuilder';
import { writeFileSync, appendFileSync } from 'fs';

// Lectura de los modelos de gramáticas del fichero de configuración
let modelOptionsSet = loadJSONFile(process.env.GRAMMAR_MODELS_SET_FILE) as GrammarModelOptionsSet;
let testConfig = loadJSONFile(process.env.TEST_CONFIG_FILE);

if (modelOptionsSet) {
    // Se añade una función de limpieza a cada modelo
    // TODO: se podría definir una función de limpieza diferente para cada modelo
    for(let key in modelOptionsSet) {
        modelOptionsSet[key].modelUrl = testConfig.modelUrl;
    }

    let reco: GrammarRecognizer = new GrammarRecognizer(modelOptionsSet);
    let allTests:any = [];
    for(let key in testConfig.models) {
        let model = testConfig.models[key];
        if (!model.skip) {
            model.msgs.forEach((msg: string) => {
                allTests.push(new Promise(function(resolve, reject) {
                    reco.recognize({locale:key, message: {text: msg}} as any,
                        (err: Error, result: IIntentRecognizerResult): void => {
                            if (err) {
                                let data = {key: key, msg: msg, response: err};
                                reject(data);
                            } else {
                                let data = {key: key, msg: msg, response: result};                                
                                resolve(data);
                            }
                           //console.log('__TT__RESULT__' + key + '__', JSON.stringify(data, null, 4));
                        });
                }));
            });
        }
    }
    
    Promise.all(allTests).then((results: any[]) => {
        let finalResult: any = {};
        results.forEach(result => {
            let key = result.key;
            finalResult[key] = finalResult[key] || {};
            finalResult[key].resps = finalResult[key].resps || [];
            finalResult[key].resps.push({msg: result.msg, response:result.response});
        });
        //console.log('__TT__finalREsult__', JSON.stringify(finalResult, null, 4));
        
        appendJSONFile(testConfig.outputFile, 'Test de gramáticas__' + testConfig.modelUrl, finalResult);
    });
}


/**
 * Lectura de un fichero json.
 * 
 * @param file El nombre del fichero.
 */
function loadJSONFile(file: string): any {
    if (file) {
        return JSON.parse(fs.readFileSync(file));
    } else {
        return false;
    }
}

/**
 * Escritura de un objeto en un fichero.
 * 
 * @param file El fichero.
 * @param obj El objeto.
 */
function appendJSONFile(file: string, title:string, obj: any) {
    fs.appendFileSync(file, '__' + title + '__'+ new Date() + '\n', 'utf-8');
    fs.appendFileSync(file, JSON.stringify(obj, null, 4) + '\n', 'utf-8');
}
