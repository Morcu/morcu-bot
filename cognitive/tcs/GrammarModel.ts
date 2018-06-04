import { Parser, Visitor, Score, IGrammarIntent, ISelector } from '.';

var ruleParserDefault = 'intents';
var ruleVisitDefault = 'visitDefault';

export interface GrammarModelOptions {
    model: string;
    ruleParser: string;
    ruleVisitor: string;
    clean?: (input: string) => string;
    modelUrl?: string;
}

let logsS = false;
let logsGM = true;

export class GrammarModel {
    Consts: any;
    options: GrammarModelOptions;
    selector: ISelector;

    constructor(options: GrammarModelOptions, selector?: ISelector) {
        this.options = options;
        this.selector = selector;
    }

    public recognize(utterance: string, ctx?: string): IGrammarIntent {
        let uteranceClean = this.options.clean ? this.options.clean(utterance) : utterance;
        // TODO:
        // Recordatorio para implementar mecanismos de selección de reglas...
        let ruleToParse = ctx && this.selector ? ruleParserDefault : this.options.ruleParser;
        let ruleToVisit = ctx && this.selector ? ruleVisitDefault : this.options.ruleVisitor;

        let grammarIntent: IGrammarIntent = {
            query: uteranceClean,
            intents: [],
            entities: [],
            topScoringIntent: null,
            model: {
                rule: ruleToParse,
                visit: ruleToVisit,
                ctx: ctx
            }
        };

        let parser = new Parser(this.options.model);
        let tree = parser.analize(grammarIntent, ruleToParse);
        let score = new Score(tree, uteranceClean);
        if (logsS) {
            console.log('__TT__GM__recognize__SCORE__');
            console.dir(score, { depth: null });
        }
        if (logsGM) { console.log('__TT__GM__recognize__VISITOR__0__'); }
        let visitor = new Visitor(this.options.model, grammarIntent);
        if (logsGM) { console.log('__TT__GM__recognize__VISITOR__1__'); }
        this.Consts = visitor.Consts;
        //if (logsGM) { console.log('__TT__GM__recognize__VISITOR__2__', this.Consts); }

        (<any>visitor)[ruleToVisit](tree);
        if (grammarIntent.intents.length) {
            // TODO:
            // de momento nos quedamos con la primera...
            // en el contructor del modelo, se van a establecer
            // mecanismos de selección del resultado más elaborados
            // if (selector) { ... }
            grammarIntent.topScoringIntent = grammarIntent.intents[0];
            grammarIntent.topScoringIntent.score = score.totalScore;
            // console.log(">>> TOP SCORE ", grammarIntent);
        }
        if (logsGM) { console.log('__TT__GM__recognize__VISITOR__3__', grammarIntent); }

        return grammarIntent;
    };
}

