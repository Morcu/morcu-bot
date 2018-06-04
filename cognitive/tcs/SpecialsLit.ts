var _ = require('lodash');
let jsonfile = require('jsonfile');
let SPECIALS_DESCRIPTOR = 'specials-descriptor.json';

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

    public explore(msg: string, caso?: string): SpecialsResult {
        let result: SpecialsResult = _.cloneDeep(emptyResult);
        if (logsExp) { console.log('__JJ__Specials__explore__elementsKeys__', this.elementKeys); }
        time0 = Date.now();

        this.elementKeys.some((k: string) => {
            let ek = this.elements[k];

            if (ek.skip || (caso && k !== caso)) {
                return false;
            }

            if (logsExp) { console.log('__JJ__Specials__explore__ek__', ek); }

            if (this.exploreLiterales(ek, result, msg)) {
                return true;
            }

            return false;
        });
        time3 = Date.now();
        if (logsServ) { console.log('__JJ__Specials__exploreAccesoServicios__ek__NoSyncro__', time0, time3, (time3 - time0)); }
        return result;
    }

    private exploreLiterales(ek: any, result: SpecialsResult, msg: string) {
        let soloTipo = (l: any) => { return { tipo: l.tipo }; };
        // para el caso de las bases
        if (ek.literal) {
            if (msg) {
                let msgTextClean = msg.toLowerCase();
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
}

/**
 * Carga un fichero json y lo parsea
 */
function loadJSONFile(file: string): any {
    try {
        return jsonfile.readFileSync(file);
    } catch (err) {
        return false;
    }
}
