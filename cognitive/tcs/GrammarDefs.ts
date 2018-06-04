export const G4EXT = '.g4';
export const SEP = '/';
export const LEXER = 'Lexer';
export const PARSER = 'Parser';
export const VISITORAPP = 'VisitorApp';
export const CONST = 'Consts';

/**
 * 
 */
export interface IRuleAndCtx {
    rule: string;
    visit: string;
    ctx: any;
};

/**
 * 
 */
export interface IGrammarIntent {
    query: string;
    intents: any[];
    entities: any[];
    topScoringIntent: any;
    model: IRuleAndCtx;
};

/**
 * 
 */
export interface ISelector {
};
