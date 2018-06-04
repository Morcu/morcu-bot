// los elementos que conforman la gestión de gramáticas
// los elementos Specials
// como germen de los TelefonicaCognitiveServices (TCS)

export { Parser } from './Parser';
export { Visitor } from './Visitor';
export { GrammarModel, GrammarModelOptions } from './GrammarModel';
export { GrammarModelService } from './GrammarModelService';
export { GrammarRecognizer } from './GrammarRecognizer';
export { Score } from './Score';
export { Specials, SpecialsResult } from './Specials';
export {
    G4EXT, SEP, LEXER, PARSER, VISITORAPP, CONST,
    IRuleAndCtx, IGrammarIntent, ISelector
} from './GrammarDefs';

// y para agrupar todo en unas siglas TCS
import * as TCS from '.';
export { TCS };
