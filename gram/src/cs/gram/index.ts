// los elementos que conforman la gestión de gramáticas

export { Parser } from './Parser';
export { Visitor } from './Visitor';
export { GrammarModelOptions, GrammarModelOptionsSet} from './GrammarOptions';
export { GrammarModel, GrammarModelSet} from './GrammarModel';
export { GrammarRecognizerService } from './GrammarRecognizerService';
export { GrammarRecognizer } from './GrammarRecognizer';
export { Score } from './Score';

export {
    G4EXT, SEP, LEXER, PARSER, VISITORAPP, CONST,
    IRuleAndCtx, IGrammarIntent, ISelector
} from './GrammarDefs';

// y para agrupar todo en unas siglas TCS
import * as TCS from '.';
export { TCS };
