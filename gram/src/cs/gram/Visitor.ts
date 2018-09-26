import { G4EXT, SEP, VISITORAPP, CONST, IGrammarIntent } from '.';

export class Visitor {
    Consts: any;

    /**
     * Construye (realmente selecciona) un modelo de visitador
     * en base al identificador de gramática grammarId
     * También injecta en el visitador el objeto grammarIntent para
     * rellenarlo con el resultado
     * @param grammarId Identificador de la gramática deseada
     * @param grammarIntent para entregar el resultado
     */
    constructor(grammarId: string, grammarIntent: IGrammarIntent) {
        let g4Index: number = grammarId.lastIndexOf(G4EXT);
        let lastSep: number = grammarId.lastIndexOf(SEP);
        let grammarPath: string = g4Index !== -1 ? grammarId.substring(0, g4Index) : grammarId;
        let bName: string = g4Index !== -1 ? grammarId.substring(lastSep + 1, g4Index) : grammarId;

        let visitorAppName = bName + VISITORAPP;
        let visitorAppPath = grammarPath + VISITORAPP;
        let container = require(visitorAppPath);
        return new container[visitorAppName](grammarIntent, bName);
    };
}
