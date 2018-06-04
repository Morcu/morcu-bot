import * as logger from 'logops';
import { GrammarModel, GrammarModelOptions, IGrammarIntent } from '.';
var restify = require('restify');

export class GrammarModelService {
    private models: any;
    private server: any;

    /**
     * Constructs a new instance of the recognizer.
     * @param models Either an individual Grammar model used for all utterances 
     * or a map of per/locale models conditionally used depending on the locale 
     * of the utterance. 
     */
    constructor(models: any) {
        if (typeof models === 'string') {
            this.models = { '*': models };
        } else {
            this.models = (models || {});
        }
    };

    listen(port: number) {
        let _this = this;
        this.server = restify.createServer({name: 'ServerGrammarRecognizer'});
        this.server.listen(port, function () {
           logger.debug('%s listening to %s', _this.server.name, _this.server.url);
        });
        this.server.get('/cognitiveService/recognize/:locale/:text', function(req: any, res: any, next: any) {
            let locale = req.params.locale;
            let text = req.params.text;

            let modelOptions: GrammarModelOptions = _this.models.hasOwnProperty(locale || '*') ?
                _this.models[locale] : _this.models['*'];
            let grammarModel = new GrammarModel(modelOptions);

            var result = grammarModel.recognize(text);
            res.send(result);
            next();
        });
        return this;
    };
}
