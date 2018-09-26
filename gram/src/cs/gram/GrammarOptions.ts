export interface GrammarModelOptions {
    model: string;
    ruleParser: string;
    ruleVisitor: string;
    clean?: (input: string) => string;
    modelUrl?: string;
}

export interface GrammarModelOptionsSet {
    [key: string]: GrammarModelOptions;
}
