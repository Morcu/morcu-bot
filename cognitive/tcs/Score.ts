import { G4EXT, SEP } from '.';
var _ = require('lodash');

// Por ahora aquí, después pasarán al BCConsts
export var SKIPPED = [
    'ante', 'bajo', 'cabe', 'con', 'contra', 'desde',
    'entre', 'para', 'por', 'segun', 'sin', 'sobre',
    'tras', 'de', 'a', 'y', 'o'
];

let logS = false;

export class Score {
    text: string;
    utterance: string;
    chars: number;
    children: number;
    weigth: number;
    nTerms: number;
    totalScore: number;
    terms: string[];
    cleanedUtterance: string[];

    constructor(tree: any, utterance: string) {
        //this.scores = [];
        this.utterance = utterance;
        this.terms = [];
        //Rellenamos el array de terminos finales y hacemos un conteo de ellos
        this.nTerms = this.obtainLeafs(tree);
        this.cleanedUtterance = this.cleanSkippedWords(utterance);
        this.totalScore = _.intersection(this.terms, this.cleanedUtterance).length / this.cleanedUtterance.length;
    }

    public obtainLeafs(tree: any) {
        let wordCount = this.utterance.split(' ').length;
        let childNumber = tree.getChildCount();
        let count: number = 0;
        if (childNumber > 0) {
            for (let i = 0; i < childNumber; i++) {
                let child = tree.getChild(i);
                if (!_.isObject(child.exception)) {
                    count = count + this.obtainLeafs(child);
                }
            }
        } else if (childNumber === 0) {
            //Se añaden las hojas del arbol
            this.terms.push(tree.getText());
            count = 1;
        }
        return count;
    }

    public cleanSkippedWords(utterance: string) {
        let output = utterance.split(' ');
        output = _.differenceWith(output, SKIPPED);
        if (logS) {
            console.log(output);
        }
        //     SKIPPED.forEach((elem) => {
        //        output = output.replace(elem, '');
        //    });
        return output;
    }


}

