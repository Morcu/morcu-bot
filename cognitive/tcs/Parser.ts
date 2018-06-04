var antlr4 = require('antlr4');
import { G4EXT, SEP, LEXER, PARSER, IGrammarIntent } from '.';

let logD = false;

export class Parser {
    grammarName: string;
    lexer: any;
    parser: any;

    /**
     * Construye un modelo de parser en base a la gramática definida por grammarId
     * @param grammarId Identificador de la gramática deseada
     */
    constructor(grammarId: string) {
        let g4Index: number = grammarId.lastIndexOf(G4EXT);
        let lastSep: number = grammarId.lastIndexOf(SEP);
        let grammarPath: string = g4Index !== -1 ? grammarId.substring(0, g4Index) : grammarId;

        this.grammarName = lastSep !== -1 ? grammarPath.substring(lastSep + 1) : grammarPath;
        this.lexer = require(grammarPath + LEXER);
        this.parser = require(grammarPath + PARSER);
    }

    /**
     * Analiza el texto de entrada que llega en intent
     * partiendo de la regla de la gramática determinada por rule
     * @param query Texto de entrada a analizar
     * @param rule Regla a partir de la cual realizar el análisis
     */
    analize(intent: IGrammarIntent, rule: string): any {
        let chars = new antlr4.InputStream(intent.query);
        let lexer = new this.lexer[this.grammarName + LEXER](chars);
        let tokens = new antlr4.CommonTokenStream(lexer);
        let parser = new this.parser[this.grammarName + PARSER](tokens);
        if (!logD) {
            lexer.removeErrorListeners();
            parser.removeErrorListeners();
        }
        parser.buildParseTrees = true;

        let tree = parser[rule]();
        return tree;
    };

};
