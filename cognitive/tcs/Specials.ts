import { BotBuilder } from '@telefonica/bot-core';
import * as requestPromise from 'request-promise';

import * as logger from 'logops';
var _ = require('lodash');
import { GrammarModel, GrammarModelOptions } from './GrammarModel';
import { GrammarModelService } from './GrammarModelService';
import { GrammarRecognizer } from './GrammarRecognizer';
import { Score } from './Score';

let jsonfile = require('jsonfile');
let SPECIALS_DESCRIPTOR = 'specials-descriptor.json';
const INTENT_INFO =  'tef.entity.INTENT_INFO';

let logsC = true;

let logsExp = true;
let logsReg = true;
let logsImg = true;
let logsBas = true;
let logsBut = true;
let logsMen = true;
let logsServ = true;
let logsCog = true;
let time1: number;
let time0: number;
let time3: number;

export interface SpecialsResult {
    config: any;
    mustBeExecuted: boolean;
    mustBeCallNext: boolean;
    ek: any;
    mustBeWaited: boolean;
    srs?: SpecialsResult[];
}

export let emptyResult: SpecialsResult = {
    config: this.config,
    mustBeWaited: false,
    mustBeExecuted: false,
    mustBeCallNext: true,
    ek: {}
};

let grammarBCNegId = './gen/M6/BCNeg.g4';
let grammarBCBasicosId = './gen/M6/BCBasicos.g4';

let grammarRuleParser = 'intents';
let grammarRuleVisitor = 'visitDefault';

console.log(grammarBCNegId);
console.log(grammarRuleParser);
console.log(grammarRuleVisitor);

//definimos modelo de gramática local
let modelBCNegLocal: GrammarModelOptions = {
    model: grammarBCNegId,
    ruleParser: grammarRuleParser,
    ruleVisitor: grammarRuleVisitor,
    clean: clean
};
let grammarBCNegModel = new GrammarModel(modelBCNegLocal);

//definimos modelo de gramática local
let modelBCBasicosLocal: GrammarModelOptions = {
    model: grammarBCBasicosId,
    ruleParser: grammarRuleParser,
    ruleVisitor: grammarRuleVisitor,
    clean: clean
};
let grammarBCBasicosModel = new GrammarModel(modelBCBasicosLocal);


export class Specials {
    config: any;
    elements: any;
    elementKeys: string[];

    constructor() {
        let specials = loadJSONFile(SPECIALS_DESCRIPTOR);
        this.config = specials.config;
        this.elements = specials.elements;
        if (logsC) { console.log('__JJ__Specials__constructor__elements__\n', this.elements); }
        this.elementKeys = Object.keys(this.elements);
        this.elementKeys.forEach(k => {
            let ek = this.elements[k];
            if (ek.expr) {
                ek.regexp = new RegExp(ek.expr);
            }
            if (ek.literal) {
                ek.literal = ek.literal.map((elem: any) => {
                    return {
                        tipo: elem.tipo,
                        literales: elem.literales.map((e: string) => e.toLowerCase())
                    };
                });
            }
        });
    }

    public explore(msg: BotBuilder.IMessage, caso?: string): SpecialsResult {
        let result: SpecialsResult = _.cloneDeep(emptyResult);
        if (logsExp) { console.log('__JJ__Specials__explore__elementsKeys__', this.elementKeys); }
        time0 = Date.now();

        this.elementKeys.some((k: string) => {
            let ek = this.elements[k];

            if (ek.skip || (caso && k !== caso)) {
                return false;
            }

            if (logsExp) { console.log('__JJ__Specials__explore__ek__', ek); }

            if (this.exploreRegEx(ek, result, msg)) {
                return true;
            }

            if (this.exploreImage(ek, result, msg)) {
                return true;
            }

            if (this.exploreButtons(ek, result, msg)) {
                return true;
            }

            if (this.exploreBase(ek, result, msg)) {
                return true;
            }

            if (this.exploreMenu(ek, result, msg)) {
                return true;
            }

            if (this.exploreInit(ek, result, msg)) {
                return true;
            }

            if (this.exploreLiterales(ek, result, msg)) {
                return true;
            }

            if (this.exploreSyncronizedEntities(ek, result, msg)) {
                return true;
            }

            return false;
        });
        time3 = Date.now();
        if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__NoSyncro__', time0, time3, (time3 - time0)); }
        return result;
    }

    private exploreRegEx(ek: any, result: SpecialsResult, msg: BotBuilder.IMessage) {

        // para los casos que se pueden resolver con una expresión regular
        if (ek.regexp && ek.regexp.test(msg.text)) {

            if (logsReg) { console.log('__JJ__Specials__exploreRegEx__ek__TRUE_________________', msg.text, ek); }

            result.mustBeExecuted = true;
            result.mustBeCallNext = false;
            result.ek = _.cloneDeep(ek);

            if (result.ek.time) {
                result.mustBeCallNext = true;
            }

            if (ek.time === 'year') {
                let match = (msg.text).match(ek.regexp);
                let year = Number.parseInt(match[ek.index]);
                if (logsExp) { console.log('__JJ__YEAR-MATCH__', year, JSON.stringify(match)); }
                result.ek.year = year;
            }

            if (result.ek.extraccion) {
                result.ek.args.match = (msg.text).match(ek.regexp);
                result.ek.args.index = result.ek.index;
            }

            // TODO sofisticar y proteger más las limpiezas
            if (result.ek.clean) {
                let msgClean = msg.text.replace(ek.regexp, '');
                if (msgClean.length > 0) {
                    msg.text = msgClean;
                } else {
                    msg.text = result.ek.textDef;
                }
                if (logsReg) { console.log('__JJ__Specials__exploreRegEx__ek__CLEAN__MSG.TEXT_________________', msg.text, ek); }
            }

            // para explorar nuevos specials desde uno dado
            if (result.ek.explore) {
                let explore = result.ek.explore;
                let results = explore.map((label: string) => {
                    let resultL: SpecialsResult = _.cloneDeep(emptyResult);
                    let ekL = this.elements[label];
                    this.exploreRegEx(ekL, resultL, msg);
                    return resultL;
                }).filter((elem: SpecialsResult) => {
                    return !_.isEmpty(elem.ek);
                });

                if (results.length > 0) {
                    _.defaultsDeep(result.ek, ...results.map((sr: SpecialsResult) => sr.ek));
                }
            }

            return true;
        }
        return false;
    }

    private exploreImage(ek: any, result: SpecialsResult, msg: BotBuilder.IMessage) {
        // para el caso del icono de like de FB
        if (ek.image) {
            if (msg.attachments) {
                let images = msg.attachments.filter((attach: any) => {
                    let result = false;

                    result = attach.contentType.indexOf('image') !== -1 && attach.contentUrl.indexOf(ek.image) !== -1;
                    if (logsImg) {
                        console.log('__JJ__Specials__exploreImage__ek__images__',
                            result, attach.contentType.indexOf('image') !== -1, attach.contentUrl.indexOf(ek.image) !== -1, attach);
                    }
                    return result;
                });

                let exitImage = images.length > 0;
                if (exitImage) {
                    if (logsImg) { console.log('__JJ__Specials__exploreImage__ek__TRUE_________________', msg.text, ek); }

                    result.mustBeExecuted = true;
                    result.mustBeCallNext = false;
                    result.ek = _.cloneDeep(ek);
                }
                return exitImage;
            }
        }
        return false;
    }

    private exploreButtons(ek: any, result: SpecialsResult, msg: BotBuilder.IMessage) {
        // para el caso de los botones
        if (ek.button) {
            if (logsBut) { console.dir(msg.sourceEvent); }

            if (msg.sourceEvent && msg.sourceEvent.postback && msg.sourceEvent.postback.payload) {
                let payload = msg.sourceEvent.postback.payload;

                if (payload.indexOf(ek.button) >= 0) {
                    result.mustBeExecuted = true;
                    result.mustBeCallNext = false;
                    result.ek = _.cloneDeep(ek);

                    //result.ek.args.payload = JSON.parse(payload);

                    _.defaultsDeep(result.ek.args, JSON.parse(payload));
                    return true;
                }
            }
        }
        return false;
    }

    /*
    {
        query: 'no, comedia no,  drama',
        intents: [
            { intent: 'tef.intent.dm.negacion', score: 0.4 }
        ],
        entities: [
            { entity: 'tef.intent.dm.negacion', type: 'tef.entity.INTENT_INFO', score: 1 },
            { entity: 'N1', type: 'tef.entity.tipoNeg', score: 1 },
            { entity: 'COMEDIA', type: 'tef.entity.tipoGenero', score: 1 },
            { entity: 'DRAMA', type: 'tef.entity.tipoGenero', score: 1 }
        ],
        topScoringIntent: { intent: 'tef.intent.dm.negacion', score: 0.4 },
        model: { rule: 'intents', visit: 'visitDefault', ctx: undefined }
    }
    */
    private exploreBase(ek: any, result: SpecialsResult, msg: BotBuilder.IMessage) {
        // para el caso de las bases negacion
        if (ek.base && ek.base === 'negaciones') {
            if (msg.text) {
                if (logsBas) { console.log('__JJ__BASE__NEG__text__', msg.text); }
                let recognized = grammarBCNegModel.recognize(msg.text);

                if (logsBas) {
                    console.log('__JJ__BASE__NEG__result__', result);
                    console.log('__JJ__BASE__NEG__recognized__', recognized);
                }

                let I = grammarBCNegModel.Consts.I;
                let E = grammarBCNegModel.Consts.E;

                if (recognized.intents) {
                    let intents: Intent[] = getIntentComposition(recognized.entities);
                    let negation = intents.some(i => i.intent === I.negacion);
                    if (negation) {
                        result.mustBeExecuted = true;
                        result.mustBeCallNext = false;
                        result.ek = _.cloneDeep(ek);
                        result.ek.args.intents = intents;

                        return true;
                    }
                }
            }
        }

        // para el caso de las bases basicos
        if (ek.base && ek.base === 'basicos') {
            if (msg.text) {
                if (logsBas) { console.log('__JJ__BASE__BASICOS__text__', msg.text); }
                let recognized = grammarBCBasicosModel.recognize(msg.text);

                if (logsBas) {
                    console.log('__JJ__BASE__BASICOS__result__', result);
                    console.log('__JJ__BASE__BASICOS__recognized__', recognized);
                }

                let I = grammarBCBasicosModel.Consts.I;
                let E = grammarBCBasicosModel.Consts.E;

                if (recognized.intents) {
                    let intents: Intent[] = getIntentComposition(recognized.entities);
                    let feedback = intents.some(i => i.intent === I.feedback);
                    let bye = intents.some(i => i.intent === I.bye);
                    let greeting = intents.some(i => i.intent === I.greeting);

                    if (logsBas) {
                        console.log('__JJ__BASE2__result__F__', I.feedback, feedback);
                        console.log('__JJ__BASE2__result__B__', I.bye, bye);
                        console.log('__JJ__BASE2__result__G__', I.greeting, greeting);
                    }

                    if (feedback || bye || greeting) {
                        let intent = ek.types[feedback ? 'feedback' : bye ? 'bye' : greeting ? 'greeting' : ''];

                        result.mustBeExecuted = true;
                        result.mustBeCallNext = false;
                        result.ek = _.cloneDeep(ek);
                        result.ek.intent = intent;

                        result.ek.args.intents = intents;

                        return true;
                    }
                }
            }
        }

        return false;
    }

    private exploreMenu(ek: any, result: SpecialsResult, msg: BotBuilder.IMessage) {
        // para el caso del menu
        if (ek.menu) {
            if (logsMen) { console.dir(msg.sourceEvent); }
            if (msg.sourceEvent && msg.sourceEvent.postback &&
                msg.sourceEvent.postback.payload) {
                let payload = msg.sourceEvent.postback.payload;
                if (payload.indexOf(ek.menu) >= 0) {
                    result.mustBeExecuted = true;
                    result.mustBeCallNext = false;
                    result.ek = _.cloneDeep(ek);

                    result.ek.args = JSON.parse(payload);
                    return true;
                }
            }
        }
        return false;
    }

    private exploreInit(ek: any, result: SpecialsResult, msg: BotBuilder.IMessage) {
        // para el caso del volver a empezar del menu
        if (ek.init) {
            if (msg.sourceEvent && msg.sourceEvent.postback &&
                msg.sourceEvent.postback.payload) {
                let payload = msg.sourceEvent.postback.payload;
                if (payload.indexOf(ek.init) >= 0) {
                    result.mustBeExecuted = true;
                    result.mustBeCallNext = true;
                    result.ek = _.cloneDeep(ek);
                    result.ek.args = JSON.parse(payload);
                    return true;
                }
            }
        }
        return false;
    }

    private exploreLiterales(ek: any, result: SpecialsResult, msg: BotBuilder.IMessage) {
        let soloTipo = (l: any) => { return { tipo: l.tipo }; };
        // para el caso de las bases
        if (ek.literal) {
            if (msg.text) {
                let msgTextClean = clean(msg.text.toLowerCase());
                let coincidence = ek.literal
                .filter((elem: any) => elem.literales.indexOf(msgTextClean) !== -1)
                .map(soloTipo);

                let hayCoincidencias = coincidence.length > 0;
                if (hayCoincidencias) {
                    result.mustBeExecuted = true;
                    result.mustBeCallNext = false;
                    result.ek = _.cloneDeep(ek);
                    result.ek.literal = result.ek.literal.map(soloTipo);                    
                    result.ek.args.coincidence = coincidence;
                    result.ek.res = true;
                    
                    return hayCoincidencias;
                }
            }
        }
        return false;
    }

    private exploreSyncronizedEntities(ek: any, result: SpecialsResult, msg: BotBuilder.IMessage) {
        // para el caso de acceso a entidades sincronizadas
        //if (logsServ) { console.log('__JJ__Specials__exploreSyncronizedEntities__ek__SYNCRO__', msg.text, ek); }

        if (ek.infoGenByCognitive || ek.infoTitByCognitive || ek.infoRepByCognitive || ek.infoDirByCognitive) {
            let syncs = ek;
            let syncKeys = Object.keys(syncs);
            if (logsServ) { console.log('__JJ__Specials__exploreSyncronizedEntities__ek__TRUE__', msg.text, ek); }

            time1 = Date.now();
            let allSyncs = syncKeys.map(k => {
                let sk = syncs[k];
                if (sk.service && !sk.skip) {
                    if (msg.text) {
                        if (logsServ) { console.log('__JJ__Specials__exploreSyncronizedEntities__ek__SK__', sk); }
                        return this.exploreCognitiveServices(sk, msg);
                    }
                }
                return null;
            }).filter((e: SpecialsResult) => e !== null);
            if (logsServ) { console.log('__JJ__Specials__exploreSyncronizedEntities__ek__ALLSYNCS__', allSyncs.length); }
            if (allSyncs.length > 0) {
                result.mustBeWaited = true;
                result.srs = allSyncs;
            }

            //return false;
        }

        // de momento siempre false para permitir más llamadas hacia otras entidades sincronizadas...
        return false;
    }

    private exploreCognitiveServices(ek: any, msg: BotBuilder.IMessage): SpecialsResult {
        let result: SpecialsResult = _.cloneDeep(emptyResult);
        // para el caso de acceso a servicios
        // Limpiamos partes en la frase que pueden ser conflictivas para determinar el título
        if (logsServ) {
            console.log('__JJ__Specials__exploreCognitiveServices__0__');
        }
        let limpiezaTexto = (ek: any, text: string) => {
            let queryText = _.cloneDeep(text);
            if (ek.limpiezas && ek.limpiezas.length > 0) {
                ek.limpiezas.forEach((elemento: string) => {
                    if (queryText.indexOf(elemento) !== -1) {
                        queryText = queryText.replace(elemento, '').trim();
                    }
                });
            }
            return queryText;
        };

        let queryText = limpiezaTexto(ek, msg.text);
        let textoLimpiado = queryText !== msg.text;
        if (logsServ) {
            console.log('__JJ__Specials__exploreCognitiveServices__1__', queryText, textoLimpiado);
        }
        let analisis: any[] = [];
        let msgTextArray = msg.text.split(' ');
        let increaseCertValue = _.forEach(this.config.increasingCertWords, (value: any, key: string) => {
            let intersection = _.intersection(value.terms, msgTextArray);
            analisis.push({
                criteria: key,
                matched: intersection.length > 0,
                inc: value.inc
            });
        });

        if (logsServ) {
            console.log('__JJ__Specials__exploreCognitiveServices__2__', analisis, increaseCertValue);
        }

        let casos = analisis.filter((match: any) => match.matched);
        let increasingValue = casos.length > 0 ? casos.reduce((match1: any, match2: any) => match1.inc + match2.inc) : 0;


        let type = ek.type;
        if (logsServ) {
            console.log('__JJ__Specials__exploreCognitiveServices__3__', type, increasingValue);
        }

        if (type === 'gen') {
            result.mustBeWaited = true;
            result.mustBeExecuted = false;
            result.mustBeCallNext = false;
            result.ek = _.cloneDeep(ek);
            result.ek.res = false;

            result.ek.responseService = this.isGen(type, msg.text).then((data: any) => {
                let time2 = Date.now();
                let dataResult = _.cloneDeep(data);
                if (logsServ) {
                    console.log('__JJ__Specials__exploreAccesoServicios__ek__data__',
                        time1, time2, (time2 - time1), dataResult);
                }

                //TODO revisar estos umbrales
                let isGenre = dataResult.query.cert >= 0.5;
                result.ek.res = isGenre;

                if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__isGenre__', isGenre); }

                if (isGenre) {
                    let sourceResult = dataResult.hits.hits[0]._source;
                    result.ek.data = dataResult;
                    result.ek.args = result.ek.args || {};
                    let genre = (sourceResult.hasOwnProperty('equivalent')) ? sourceResult.equivalent.join('') : sourceResult.id;
                    logger.debug('__JJ__Specials__exploreAccesoServicios__ek__final__genre__', genre);
                    result.ek.args.entities = [
                        {
                            entity: genre,
                            type: 'tef.entity.term',
                            startIndex: 0,
                            endIndex: msg.text.length - 1,
                            score: 1
                        }
                    ];
                }
                if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__result__', result); }

                return result;
            })
                .catch((data: any) => {
                    result.mustBeWaited = false;
                    return result;
                });
        }

        if (type === 'tit') {
            result.mustBeWaited = true;
            result.mustBeExecuted = false;
            result.mustBeCallNext = false;
            result.ek = _.cloneDeep(ek);
            result.ek.res = false;

            result.ek.responseService = this.isTit(type, queryText).then((data: any) => {
                let time2 = Date.now();
                let dataResults = _.cloneDeep(data);

                if (logsServ) {
                    console.log('__JJ__Specials__exploreAccesoServicios__ek__data__',
                        dataResults.responseCode, time1, time2, (time2 - time1));
                    console.dir(dataResults, { depth: null });
                }

                if (dataResults.responseCode) {
                    let isTit = false;
                    let resultsMatched = dataResults.resultsMatched[0];
                    let matchVSSentence = resultsMatched.matchVSSentence;
                    let matchVSMatched = resultsMatched.matchVSMatched;
                    if (logsServ) { console.log('__JJ__Specials__matchVSSentence, matchVSMatched__', matchVSSentence, matchVSMatched); }

                    let queryCert = 0.5 * (1 + increasingValue / 100);

                    let frase = resultsMatched.frase.join(' ');
                    let peculiares = result.ek.peculiares || [];
                    let peculiar = _.find(peculiares, {e: frase});
                    if (peculiar) {
                        queryCert = queryCert * peculiar.s / 100;
                    }

                    if (logsServ) { console.log('__JJ__Specials__queryCert', queryCert, frase, peculiares, peculiar); };
                    //TODO revisar estos umbrales
                    isTit = (matchVSSentence.puntuacion > queryCert && matchVSSentence.wordCount > 0.33) &&
                        (matchVSMatched.puntuacion > queryCert && matchVSMatched.wordCount > 0.33);

                    result.ek.res = isTit;

                    if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__isTit__', isTit); }

                    if (isTit) {
                        result.ek.args = result.ek.args || {};
                        result.ek.args.data = dataResults;
                    }
                }

                if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__result__', result); }

                return result;
            })
                .catch((data: any) => {
                    result.mustBeWaited = false;
                    return result;
                });
        }
        //No llamamos al resto de servicios cognitivos si hay texto limpiado
        if (textoLimpiado && (type === 'nombre' || type === 'dir' || type === 'rep' || type === 'prod')) {
            result.mustBeWaited = true;
            result.mustBeExecuted = false;
            result.mustBeCallNext = false;
            result.ek = _.cloneDeep(ek);
            result.ek.res = false;
            result.ek.responseService = Promise.resolve(result);
            return result;
        }
        if (type === 'nombre') {
            result.mustBeWaited = true;
            result.mustBeExecuted = false;
            result.mustBeCallNext = false;
            result.ek = _.cloneDeep(ek);
            result.ek.res = false;

            result.ek.responseService = this.isNom(type, msg.text).then((data: any) => {
                let dataResults = _.cloneDeep(data);
                let time2 = Date.now();
                if (logsServ) {
                    console.log('__JJ__Specials__exploreAccesoServicios__ek__data__', time1, time2, (time2 - time1));
                    console.dir(dataResults, { depth: null });
                }

                if (dataResults.responseCode) {
                    let isNom = false;
                    let matchVSSentence = dataResults.resultsMatched[0].matchVSSentence;
                    let matchVSMatched = dataResults.resultsMatched[0].matchVSMatched;
                    if (logsServ) { console.log('__JJ__Specials__matchVSSentence, matchVSMatched__', matchVSSentence, matchVSMatched); }

                    //TODO revisar estos umbrales
                    isNom = (matchVSSentence.puntuacion > 0.5 && matchVSSentence.wordCount > 0.33) &&
                        (matchVSMatched.puntuacion > 0.5 && matchVSMatched.wordCount > 0.33);

                    result.ek.res = isNom;

                    if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__isNom__', isNom); }

                    if (isNom) {
                        result.ek.args = result.ek.args || {};
                        result.ek.args.data = dataResults;
                    }
                }

                if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__result__', result); }

                return result;
            })
                .catch((data: any) => {
                    result.mustBeWaited = false;
                    return result;
                });
        }

        if (type === 'rep') {
            result.mustBeWaited = true;
            result.mustBeExecuted = false;
            result.mustBeCallNext = false;
            result.ek = _.cloneDeep(ek);
            result.ek.res = false;

            result.ek.responseService = this.isRep(type, msg.text).then((data: any) => {
                let dataResult = _.cloneDeep(data);
                let time2 = Date.now();
                if (logsServ) {
                    console.log('__JJ__Specials__exploreAccesoServicios__ek__data__', time1, time2, (time2 - time1));
                    console.dir(dataResult, { depth: null });
                }

                if (dataResult.responseCode) {
                    let isRep = false;
                    let resultMatched = dataResult.resultsMatched[0];
                    let matchVSSentence = resultMatched.matchVSSentence;
                    let matchVSMatched = resultMatched.matchVSMatched;
                    if (logsServ) { console.log('__JJ__Specials__matchVSSentence, matchVSMatched__', matchVSSentence, matchVSMatched); }

                    let queryCert = (resultMatched.rating === 0) ? 0.8 : 0.5;
                    queryCert = queryCert * (1 + increasingValue / 100);

                    //TODO revisar estos umbrales
                    isRep = (matchVSSentence.puntuacion > queryCert && matchVSSentence.wordCount > 0.33) &&
                        (matchVSMatched.puntuacion > queryCert && matchVSMatched.wordCount > 0.33);

                    result.ek.res = isRep;

                    if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__isRep__', isRep); }

                    if (isRep) {
                        result.ek.args = result.ek.args || {};
                        result.ek.args.data = dataResult;
                    }
                }

                if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__result__', result); }

                return result;
            })
                .catch((data: any) => {
                    result.mustBeWaited = false;
                    return result;
                });
        }

        if (type === 'dir') {
            result.mustBeWaited = true;
            result.mustBeExecuted = false;
            result.mustBeCallNext = false;
            result.ek = _.cloneDeep(ek);
            result.ek.res = false;

            result.ek.responseService = this.isDir(type, msg.text).then((data: any) => {
                let time2 = Date.now();
                let dataResult = _.cloneDeep(data);
                if (logsServ) {
                    console.log('__JJ__Specials__exploreAccesoServicios__ek__data__', time1, time2, (time2 - time1));
                    console.dir(dataResult, { depth: null });
                }

                if (dataResult.responseCode) {
                    let isDir = false;
                    let resultMatched = dataResult.resultsMatched[0];
                    let matchVSSentence = resultMatched.matchVSSentence;
                    let matchVSMatched = resultMatched.matchVSMatched;
                    if (logsServ) { console.log('__JJ__Specials__matchVSSentence, matchVSMatched__', matchVSSentence, matchVSMatched); }

                    let queryCert = (resultMatched.rating === 0) ? 0.8 : 0.5;
                    queryCert = queryCert * (1 + increasingValue / 100);

                    //TODO revisar estos umbrales
                    isDir = (matchVSSentence.puntuacion > queryCert && matchVSSentence.wordCount > 0.33) &&
                        (matchVSMatched.puntuacion > queryCert && matchVSMatched.wordCount > 0.33);

                    result.ek.res = isDir;

                    if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__isDir__', isDir); }

                    if (isDir) {
                        result.ek.args = result.ek.args || {};
                        result.ek.args.data = dataResult;
                    }
                }

                if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__result__', result); }

                return result;
            })
                .catch((data: any) => {
                    result.mustBeWaited = false;
                    return result;
                });
        }

        if (type === 'prod') {
            result.mustBeWaited = true;
            result.mustBeExecuted = false;
            result.mustBeCallNext = false;
            result.ek = _.cloneDeep(ek);
            result.ek.res = false;

            result.ek.responseService = this.isDir(type, msg.text).then((data: any) => {
                let dataResult = _.cloneDeep(data);
                let time2 = Date.now();
                if (logsServ) {
                    console.log('__JJ__Specials__exploreAccesoServicios__ek__data__', time1, time2, (time2 - time1));
                    console.dir(dataResult, { depth: null });
                }

                if (dataResult.responseCode) {
                    let isProd = false;
                    let matchVSSentence = dataResult.resultsMatched[0].matchVSSentence;
                    let matchVSMatched = dataResult.resultsMatched[0].matchVSMatched;
                    if (logsServ) { console.log('__JJ__Specials__matchVSSentence, matchVSMatched__', matchVSSentence, matchVSMatched); }

                    //TODO revisar estos umbrales
                    isProd = (matchVSSentence.puntuacion > 0.5 && matchVSSentence.wordCount > 0.33) &&
                        (matchVSMatched.puntuacion > 0.5 && matchVSMatched.wordCount > 0.33);
                    result.ek.res = isProd;

                    if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__isProd__', isProd); }

                    if (isProd) {
                        result.ek.args = result.ek.args || {};
                        result.ek.args.data = dataResult;
                    }
                }

                if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__result__', result); }

                return result;
            })
                .catch((data: any) => {
                    result.mustBeWaited = false;
                    return result;
                });
        }

        return result;
    }

    private isGen(type: string, text: string): any {
        let urlBase = this.config && this.config.cognitiveService && this.config.cognitiveService.use ?
            this.config.cognitiveService.url : process.env.BCAPI_COG_HOST;

        let url = [urlBase, '/' + type + '/%text%'].join('');

        url = url.replace('%text%', text);

        if (logsServ) {
            console.log('__JJ__isGen__url__', url);
        }
        return this.getFromCognitive(text, url);
    };

    private isTit(type: string, text: string): any {
        let urlBase = this.config && this.config.cognitiveService && this.config.cognitiveService.use ?
            this.config.cognitiveService.url : process.env.BCAPI_COG_HOST;
        let url = [urlBase, '/' + type + '/%text%'].join('');

        url = url.replace('%text%', text);

        if (logsServ) {
            console.log('__JJ__isTit__url__', url);
        }
        return this.getFromCognitive(text, url);
    };

    private isNom(type: string, text: string): any {
        let urlBase = this.config && this.config.cognitiveService && this.config.cognitiveService.use ?
            this.config.cognitiveService.url : process.env.BCAPI_COG_HOST;
        let url = [urlBase, '/' + type + '/%text%'].join('');

        url = url.replace('%text%', text);

        if (logsServ) {
            console.log('__JJ__isNom__url__', url);
        }
        return this.getFromCognitive(text, url);
    };

    private isRep(type: string, text: string): any {
        let urlBase = this.config && this.config.cognitiveService && this.config.cognitiveService.use ?
            this.config.cognitiveService.url : process.env.BCAPI_COG_HOST;
        let url = [urlBase, '/' + type + '/%text%'].join('');

        url = url.replace('%text%', text);

        if (logsServ) {
            console.log('__JJ__isRep__url__', url);
        }
        return this.getFromCognitive(text, url);
    };

    private isDir(type: string, text: string): any {
        let urlBase = this.config && this.config.cognitiveService && this.config.cognitiveService.use ?
            this.config.cognitiveService.url : process.env.BCAPI_COG_HOST;
        let url = [urlBase, '/' + type + '/%text%'].join('');

        url = url.replace('%text%', text);

        if (logsServ) {
            console.log('__JJ__isDir__url__', url);
        }
        return this.getFromCognitive(text, url);
    };

    private getFromCognitive(text: string, url: string): any {
        if (logsCog) {
            console.log('__JJ__getFromCognitive__url__', url);
        }

        let options = {
            url: url,
            qs: {},
            timeout: 2000,
            json: true
        };

        if (logsCog) {
            console.log('__JJ__getFromCognitive__options__1__');
            console.dir(options, { depth: null });
        }

        return requestPromise.get(options)
            .then((data: any) => {
                if (logsCog) {
                    console.log('__JJ__getFromCognitive__options__2__');
                    console.dir(options, { depth: null });
                    console.log('__JJ__getFromCognitive__data__2__');
                    console.dir(data, { depth: null });
                }
                return data;
            })
            .catch((err: any) => {
                // API call failed...
                if (logsCog) {
                    console.log('__JJ__getFromCognitive__options__3__');
                    console.dir(options, { depth: null });
                    console.log('__JJ__getFromCognitive__err__3__');
                    console.dir(err, { depth: null });
                }
                let emptyResponse: any = {
                };
                return emptyResponse;
            });
    };
}

/**
 * Carga un fichero json y lo parsea
 */
function loadJSONFile(file: string): any {
    try {
        return jsonfile.readFileSync(file);
    } catch (err) {
        logger.error('Fichero ' + file + ' no encontrado: ' + err.message);
        return false;
    }
}

interface Intent {
    intent: string;
    score: number;
    entities?: BotBuilder.IEntity[];
};

function getIntentComposition(entities: any): Intent[] {
    let infoMultiIntent: Intent[] = [];
    if (entities) {
        entities.forEach((element: any) => {
            if (element.type === INTENT_INFO) {
                let intent: any = { intent: element.entity, score: element.score, entities: [] };
                infoMultiIntent.push(intent);
            } else {
                if (infoMultiIntent.length > 0) {
                    infoMultiIntent[infoMultiIntent.length - 1].entities.push(element);
                } else {
                    let intent: any = { intent: 'empty', score: 1, entities: [element] };
                    infoMultiIntent.push(intent);
                }
            }
        });
    }
    return infoMultiIntent;
}

function clean(input: string): string {
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
        '': '[\"\'\|\*\\{};&$@~><_=%#./·,\¿\?\!\¡]',
        'plus': '[+]'
    };


    for (var i in non_asciis) {
        if (non_asciis.hasOwnProperty(i)) {
            output = output.replace(new RegExp(non_asciis[i], 'g'), i);
        }
    }
    return output;
};
