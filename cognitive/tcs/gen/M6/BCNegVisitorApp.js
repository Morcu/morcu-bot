"use strict";
var _ = require('lodash');
var Consts;

var logV = true;
var logTOK = false;
var logRUL = false;
var logInt = false;
var logEnt = false;
var logC = false;
var logNeg = true;
var logNegEtq = true;
var soloTerm = false;

function BCNegVisitorApp(intent, bName) {
    Consts = require('./' + bName + 'Consts');
    this.Consts = Consts;
    var BaseVisitor = require('./' + bName + 'Visitor')[bName + 'Visitor'];
    BaseVisitor.call(this);

    this.intent = intent;
    this.intent.intents = this.intent.intents || [];
    this.intent.entities = this.intent.entities || [];

    if (logC) { console.log('__' + bName + 'VisitorApp__'); }

    return this;
};
exports.BCNegVisitorApp = BCNegVisitorApp;

BCNegVisitorApp.prototype.constructor = BCNegVisitorApp;

BCNegVisitorApp.prototype.visitDefault = function (ctx) {
    // implement logic to determine which function to visit
    // then call next function and with the right context
    this.visitIntents(ctx);
};

BCNegVisitorApp.prototype.visitIntents = function (ctx) {
    if (logV) { console.log("[visitIntents]--"); }
    if (ctx !== null && ctx.exception === null) {
        /*
        let len = ctx.children.length;
        for (let i = 0; i < len; i++) {
            this.visitIntent(ctx.intent(i));
        };
        */
        let intents = ctx.intent();
        if (intents.length > 1) {
            pushOnlyIntent(this, Consts.I.dm);
        }
        this.visitIntent(intents);
    }
};

BCNegVisitorApp.prototype.visitIntent = function (ctx) {
    if (logV) { console.log("[visitIntent]--"); }

    let tope = 100;
    let negationTypeNames = [];
    for (let i = 0; i < tope; i++) {
        negationTypeNames.push('N' + i);
    }
    let isNX = (ctx, nx) => {
        return ctx.constructor && ctx.constructor.name === (nx + 'Context');
    };

    (ctx || []).forEach((ctxi, i) => {
        if (logV) {
            console.log("[visitIntent]-- i = ", i);
            //console.log("[visitIntent]-- ctxi = ", ctxi);
            console.log("[visitIntent]-- ctxi = ", ctxi.children);
        }

        ctxi.children.forEach(ctxiChild => {
            //if (logNeg) { console.log("[visitIntent]-- ctxiChild = ", ctxiChild); }
            negationTypeNames.forEach((negationTypeName) => {
                if (isNX(ctxiChild, negationTypeName)) {
                    if (logNeg) { console.log("[visitIntent]--NEGATION-ETIQ--", negationTypeName); }
                    this.visitNegacionEtiquetada(ctxiChild, negationTypeName);
                }
            })
            //this.visitN1(ch);
            //this.visitN2(ch);        
        });
        //this.visitChildren(ctxi);
    });
};

/*
BCNegVisitorApp.prototype.visitN1 = function (ctx) {
    if (logNeg) { console.log("[visitN1]--"); }
    if (ctx.constructor && ctx.constructor.name === 'N1Context') {
        this.visitNegacionEtiquetada(ctx, 'n1');
    }
}
BCNegVisitorApp.prototype.visitN2 = function (ctx) {
    if (logNeg) { console.log("[visitN2]--"); }
    
    if (ctx.constructor && ctx.constructor.name === 'N2Context') {
        this.visitNegacionEtiquetada(ctx, 'n2');
    }
}    
*/

BCNegVisitorApp.prototype.visitNegacionEtiquetada = function (ctx, tipoNeg) {
    if (logNegEtq) { console.log("[visitNegacionEtiquetada]--tipoNeg = ", tipoNeg); }
    if (ctx !== null && !ctx.exception) {
        let noCtx = ctx.no() || [];
        noCtx = _.isArray(noCtx) ? noCtx : [noCtx];

        let noCtx0 = noCtx !== null && noCtx.length > 0 ? noCtx[0] : null;
        if (logNegEtq) { console.log("[visitNegacionEtiquetada]-- noCtx0 = ", noCtx0, noCtx); }

        let existNo = noCtx0 && !noCtx0.exception;
        let ch0 = existNo && noCtx0.children && noCtx0.children.length > 0 ? noCtx0.children[0] : null;
        if (logNegEtq) { console.log("[visitNegacionEtiquetada]-- existNo, ch0 = ", existNo, ch0, ch0.constructor); }

        let isErrorNodeImpl = ch0 && ch0.constructor && ch0.constructor.name === 'ErrorNodeImpl';
        if (logNegEtq) { console.log("[visitNegacionEtiquetada]-- isErrorNodeImpl = ", isErrorNodeImpl); }

        let isProperNo = existNo && !isErrorNodeImpl;
        if (logNegEtq) { console.log("[visitNegacionEtiquetada]-- eNo, pNo = ", existNo, isErrorNodeImpl, isProperNo, ch0, noCtx0); }

        if (isProperNo) {
            pushIntent(this, Consts.I.negacion);
            pushEntity(this, Consts.E.tipoNeg, tipoNeg);

            let tope = 100;
            let elementosTypeNames = [];
            for (let i = 0; i < tope; i++) {
                elementosTypeNames.push('E' + i);
            }
            let isEX = (ctx, ex) => {
                return ctx.constructor && ctx.constructor.name === (ex + 'Context');
            };
            if (logNegEtq) { console.log("[visitNegacionEtiquetada]-- xxx "); }
            
            ctx.children.forEach(ctxChild => {
                elementosTypeNames.forEach((elementosTypeName) => {
                    if (isEX(ctxChild, elementosTypeName)) {
                        if (logNegEtq) { console.log("[visitIntent]--ELEMENTOS-ETIQ--", elementosTypeName); }
                        this.visitElementosEtiquetados(ctxChild, elementosTypeName);
                    }
                })
            });

            //this.visitElementos(ctx.elementos());

            /*
            this.visitTerms(ctx.terms());
            this.visitTipoContenido(ctx.tipoContenido());
            this.visitTipoGenero(ctx.tipoGenero());
            this.visitTipoDatos(ctx.tipoDatos());
            */
        }
    }
};

BCNegVisitorApp.prototype.visitElementosEtiquetados = function (ctx, tipoElem) {
    if (logNegEtq) { console.log("[visitElementosEtiquetados]--tipoElem = ", tipoElem); }
    if (ctx !== null && !ctx.exception) {
        pushEntity(this, Consts.E.tipoElem, tipoElem);
        if (logNegEtq) { console.log("[visitElementosEtiquetados]-- ctx = ", ctx); }
        //if (logNegEtq) { console.log("[visitElementosEtiquetados]-- ctxG = ", ctx.tipoGenero()); }
        //if (logNegEtq) { console.log("[visitElementosEtiquetados]-- ctxC = ", ctx.tipoContenido()); }
        
        // this.visitTerms(ctx.terms());
        // this.visitTipoContenido(ctx.tipoContenido());
        // this.visitTipoGenero(ctx.tipoGenero());
        // this.visitTipoDatos(ctx.tipoDatos());

        let isT = (ctx, t) => {
            return ctx.constructor && ctx.constructor.name === (t + 'Context');
        };
        ctx.children.forEach(ctxChild => {
            if (isT(ctxChild, 'TipoContenido')) { this.visitTipoContenido(ctxChild) };
            if (isT(ctxChild, 'TipoGenero')) { this.visitTipoGenero(ctxChild) };
        });
/*
        ctx.children.forEach(ctxChild => {
            this.visitTerms(ctxChild);
            this.visitTipoContenido(ctxChild);
            this.visitTipoGenero(ctxChild);
            this.visitTipoDatos(ctxChild);
        });


        if (ctx !== null && ctx.length > 0) {
            ctx.forEach(ctxi => {
                this.visitTerms(ctxi.terms());
                this.visitTipoContenido(ctxi.tipoContenido());
                this.visitTipoGenero(ctxi.tipoGenero());
                this.visitTipoDatos(ctxi.tipoDatos());
            });
        }
*/
    }
};


/*
BCNegVisitorApp.prototype.visitElementos = function (eCtx) {
    if (logNeg) { console.log("[visitElementos]--eCtx--", eCtx); }
    let ctx = _.isArray(eCtx) ? eCtx : [eCtx];
    if (logNeg) { console.log("[visitElementos]--ctx--", ctx); }

    if (ctx !== null && ctx.length > 0) {
        ctx.forEach(ctxi => {
            this.visitTerms(ctxi.terms());
            this.visitTipoContenido(ctxi.tipoContenido());
            this.visitTipoGenero(ctxi.tipoGenero());
            this.visitTipoDatos(ctxi.tipoDatos());
        });
    }
};
*/

/*
BCNegVisitorApp.prototype.visitNegacion = function (ctx, tipoNeg) {
    if (logNeg) { console.log("[visitNegacion]--"); }
    if (ctx !== null && ctx.length > 0) {
        let noException = (ctx || []).every(ctxi => ! ctxi.exception);
        let existNo = (ctx || []).some(ctxCandi => {
            let ctxi = ctxCandi.no();
            if (logNeg) { console.log("[visitNegacion]--1--", ctxi !== null && ctxi.length > 0); }
            
            if (ctxi !== null && ctxi.length > 0) {
                let children  = ctxi[0].children[0];
                let isProperNo = children && !! children.invokingState;
                if (logNeg) { console.log("[visitNegacion]--x--isProperNo--", isProperNo); }
                return isProperNo;
            }
            return false;
            //return this.visitNo(ctxi.no())
        });
        
        if (logNeg) { console.log("[visitNegacion]--noException, existNo--", noException, existNo); }
        
        if (noException && existNo) {
            pushIntent(this, Consts.I.negacion);
            pushEntity(this, Consts.E.tipoNeg, tipoNeg);
            
            (ctx || []).forEach((ctxi) => {
                this.visitNo(ctxi.no());                
                this.visitTerms(ctxi.terms());
                this.visitTipoContenido(ctxi.tipoContenido());
                this.visitTipoGenero(ctxi.tipoGenero());
                this.visitTipoDatos(ctxi.tipoDatos());
            });
        }
    }
};
*/
/*
BCNegVisitorApp.prototype.visitNo = function (ctx) {
    if (logNeg) { console.log("[visitNo]--", ctx); }
    if (ctx !== null && ctx.length > 0) {
        if (logNeg) { console.log("[visitNo]--0--", ctx[0]); }
        let children  = ctx[0].children[0];
        let isProperNo = children && !! children.invokingState;
        if (logNeg) { console.log("[visitNo]--1--isProperNo--", isProperNo); }
        //if (isProperNo) {
        //    pushEntity(this, Consts.E.no, result.join(' '));            
        //}
        return isProperNo;
    }
};
*/

BCNegVisitorApp.prototype.visitNo = function (eCtx) {
    if (logNeg) { console.log("[visitNo]--"); }
    let ctx = _.isArray(eCtx) ? eCtx : [eCtx];

    if (ctx !== null && ctx.length > 0) {
        pushEntity(this, Consts.E.no, 'no');
    }
};

BCNegVisitorApp.prototype.visitTerms = function (ctx) {
    if (logV) { console.log("[visitTerms]--"); }

    let result = [];

    var push = (ctx) => {
        if (ctx !== null && ctx.exception === null) {
            result.push(this.visitTerm(ctx.term()));
            if (logV) { console.log("[visitTerms]--1", result); }
        }
    };

    (!_.isArray(ctx) ? [ctx] : (ctx || [])).forEach((ctxi) => { push(ctxi); });

    if (result.length > 0) {
        pushEntity(this, Consts.E.term, result.join(' '));
    }
};

BCNegVisitorApp.prototype.visitTerm = function (ctx) {
    let result = [];
    if (logV) { console.log("[visitTerm]--"); }

    var push = (ctx) => {
        if (ctx !== null && ctx.exception === null) {
            result.push(ctx.getText());
            if (logV) { console.log("[visitTerm]--1", result); }
        }
    };

    (!_.isArray(ctx) ? [ctx] : (ctx || [])).forEach((ctxi) => { push(ctxi); });

    return result.join(' ');
};

BCNegVisitorApp.prototype.visitTipoContenido = function (ctx) {
    if (logV) { console.log("[visitTipoContenido]--"); }
    var push = (ctx) => {
        if (ctx !== null && ctx.exception === null) {
            if (logV) { console.log("[visitTipoContenido]--1"); }
            pushTypeTOK(this, ctx, Consts.E.tipoContenido, Consts.TipoContenidoTOK);
        }
    };

    (!_.isArray(ctx) ? [ctx] : (ctx || [])).forEach((ctxi) => { push(ctxi); });
};

BCNegVisitorApp.prototype.visitTipoGenero = function (ctx) {
    if (logV) { console.log("[visitTipoGenero]--"); }

    var push = (ctx) => {
        if (ctx !== null && ctx.exception === null) {
            if (logV) { console.log("[visitTipoGenero]--1"); }
            let e = soloTerm ? Consts.E.term : Consts.E.tipoGenero;

            pushTypeTOK(this, ctx, e, Consts.TipoGeneroTOK);
            pushTypeRUL(this, ctx, e, Consts.TipoGeneroRUL);
        }
    };

    (!_.isArray(ctx) ? [ctx] : (ctx || [])).forEach((ctxi) => { push(ctxi); });
};

BCNegVisitorApp.prototype.visitTipoEmocion = function (ctx) {
    if (logV) { console.log("[visitTipoEmocion]--"); }
    var push = (ctx) => {
        if (ctx !== null && ctx.exception === null) {
            if (logV) { console.log("[visitTipoEmocion]--1"); }
            let e = soloTerm ? Consts.E.term : Consts.E.tipoEmocion;

            pushTypeTOK(this, ctx, e, Consts.TipoEmocionTOK);
        }
    };

    (!_.isArray(ctx) ? [ctx] : (ctx || [])).forEach((ctxi) => { push(ctxi); });
};

BCNegVisitorApp.prototype.visitTipoDatos = function (ctx) {
    if (logV) { console.log("[visitTipoDatos]--"); }
    var push = (ctx) => {
        if (ctx !== null && ctx.exception === null) {
            if (logV) { console.log("[visitTipoDatos]--1"); }
            let e = soloTerm ? Consts.E.term : Consts.E.tipoDatos;

            pushTypeTOK(this, ctx, e, Consts.TipoDatosTOK);
        }
    };

    (!_.isArray(ctx) ? [ctx] : (ctx || [])).forEach((ctxi) => { push(ctxi); });
};

BCNegVisitorApp.prototype.visitTipoTiempo = function (ctx) {
    if (logV) { console.log("[visitTipoTiempo]--"); }

    var push = (ctx) => {
        if (ctx !== null && ctx.exception === null) {
            if (logV) { console.log("[visitTipoTiempo]--1"); }
            let e = soloTerm ? Consts.E.term : Consts.E.tipoGenero;

            pushTypeTOK(this, ctx, e, Consts.TipoTiempoTOK);
            pushTypeRUL(this, ctx, e, Consts.TipoTiempoRUL);
        }
    };

    (!_.isArray(ctx) ? [ctx] : (ctx || [])).forEach((ctxi) => { push(ctxi); });
};


function pushOnlyIntent(_this, name) {
    if (logInt) { console.log("[pushOnlyIntent]--", name); }

    // ponemos la intent en el array de intents
    _this.intent.intents.push(intent(name));
}

function pushIntent(_this, name) {
    if (logInt) { console.log("[pushIntent]--", name); }

    // ponemos la intent en el array de intents
    _this.intent.intents.push(intent(name));
    // adicionalmente ponemos una marca en el array de entities
    // para marcar la existencia de esta intent...
    // lo cual es útil cuando encontramos varias intents juntas y queremos poder saberlo
    _this.intent.entities.push(entity(Consts.E.INTENT_INFO, name));
}

function pushEntity(_this, type, value) {
    if (logEnt) { console.log("[pushEntity]--", type, value); }
    _this.intent.entities.push(entity(type, value));
}

function intent(name) {
    return {
        intent: name,
        score: 1.0
    };
}

function entity(type, value) {
    return {
        entity: value,
        type: type,
        score: 1.0
    };
}

function vv(v) {
    var result = replaceAll(Consts.V[v], '_', ' ');
    console.log('__JJ__vv__', result);
    return result;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function pushTypeTOK(_this, ctx, e, tipoEnumTOK) {
    if (logTOK) { console.log("[pushTypeTOK]--", e, tipoEnumTOK, _this); }
    for (var key in tipoEnumTOK) {
        if (logTOK) { console.log("[pushTypeTOK]--1--", key); }

        if (_.isNumber(tipoEnumTOK[key])) {
            if (logTOK) { console.log("[pushTypeTOK]--2--", tipoEnumTOK[key], ctx[key]); }
            if (ctx[key] && ctx[key]()) {
                if (logTOK) { console.log("[pushTypeTOK]--3--PUSH-ENTITY", _this); }
                pushEntity(_this, e, key);
            }
        }
    }
}

function pushTypeRUL(_this, ctx, e, tipoElemRUL) {
    if (logRUL) { console.log("[pushTypeRUL]--", e, tipoElemRUL, _this); }

    for (var key in tipoElemRUL) {
        if (ctx[key] && ctx[key]()) {
            let value = tipoElemRUL[key];
            if (logRUL) { console.log("[pushTypeRUL]--1--", value); }

            if (_.isString(value)) {
                // si es un string lo ponemos en la entity directamente
                let text = replaceAll(value, '_', ' ');
                pushEntity(_this, e, text);
            } else {
                if (value.type === 'tok') {
                    if (logRUL) { console.log("[pushTypeRUL]--2--", value); }
                    // es un caso especial en el que hay que entrar a revisar los hijos "ctxi" del "ctx"
                    // que nos ha llegado usando para ello un nuevo objeto de tipo "tok" dada en "value"
                    // este nuevo objeto tipo "tok" procede de una enumeración y debemos usar el pushTypeTOK
                    let ctxToAnalize = ctx[key]();
                    (!_.isArray(ctxToAnalize) ? [ctxToAnalize] : (ctxToAnalize || [])).forEach((ctxi) => {
                        pushTypeTOK(_this, ctxi, e, value.item);
                    });
                } else if (value.type === 'rul') {
                    // es un caso especial en el que hay que entrar a revisar los hijos "ctxi" del "ctx"
                    // que nos ha llegado usando para ello un nuevo objeto de tipo "rul" dado en "value"
                    // este nuevo objeto tipo "rul" procede de un objeto y debemos usar el pushTypeRUL
                    let ctxToAnalize = ctx[key]();
                    (!_.isArray(ctxToAnalize) ? [ctxToAnalize] : (ctxToAnalize || [])).forEach((ctxi) => {
                        pushTypeRUL(_this, ctxi, e, value.item);
                    });
                } else if (value.type === 'visit') {
                    // es un caso especial en el que hay que entrar a visitar la función
                    // que nos ha llegado usando para ello un nuevo objeto de tipo "visit" dado en "value"
                    // este nuevo objeto tipo "visit" procede de un objeto y debemos visitar el contexto adecuadamente
                    let visitFunction = _this[value.item];
                    if (visitFunction) {
                        if (logRUL) { console.log("[pushTypeRUL]--5--", _this, visitFunction, key); }
                        // con este bind ejecutamos la función visitFunction con el this adecuado
                        visitFunction.bind(_this, ctx[key]())();
                    }
                }
            }
        }
    }
}

function pushTypeRUL_ori(_this, ctx, e, tipoElemRUL) {
    for (var key in tipoElemRUL) {
        if (ctx[key]()) {
            let text = replaceAll(tipoElemRUL[key], '_', ' ');
            pushEntity(_this, e, text);
        }
    }
}

