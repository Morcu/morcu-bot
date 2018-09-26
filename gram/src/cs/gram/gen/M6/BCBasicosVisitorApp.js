"use strict";
var _ = require('lodash');
var Consts;

var logV = true;
var logInt = false;
var logEnt = false;
var logC = true;
var logBas = false;

function BCBasicosVisitorApp(intent, bName) {
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
exports.BCBasicosVisitorApp = BCBasicosVisitorApp;

BCBasicosVisitorApp.prototype.constructor = BCBasicosVisitorApp;

BCBasicosVisitorApp.prototype.visitDefault = function (ctx) {
    // implement logic to determine which function to visit
    // then call next function and with the right context
    this.visitIntents(ctx);
};

BCBasicosVisitorApp.prototype.visitIntents = function (ctx) {
    if (logV) { console.log("[visitIntents]--"); }
    if (ctx !== null && ctx.exception === null) {
        let intents = (ctx.intent() || []).filter(i => i.exception === null);
        if (logV) { console.log("[visitIntents]--intents.length--", intents.length); }
        
        if (intents.length > 1) {
            pushOnlyIntent(this, Consts.I.dm);
        }
        
        this.visitIntent(intents);
    }
};

BCBasicosVisitorApp.prototype.visitIntent = function (ctx) {
    if (logV) { console.log("[visitIntent]--"); }

    (ctx || []).forEach((ctxi, i) => {
        if (logV) {
            console.log("[visitIntent]-- i = ", i);
            console.log("[visitIntent]-- ctxi = ", ctxi);
        }
        if (ctxi.exception === null) {
            this.visitFeedback(ctxi.feedback());
            this.visitBye(ctxi.bye());
            this.visitGreeting(ctxi.greeting());
        }
    });
};

BCBasicosVisitorApp.prototype.visitFeedback = function (eCtx) {
    let ctx = _.isArray(eCtx) ? eCtx : [eCtx];

    if (logBas) {
        console.log("[visitFeedback]--eCtx--", eCtx);
        console.log("[visitFeedback]--ctx--", ctx);
    }

    if (ctx !== null && ctx.length > 0) {
        pushIntent(this, Consts.I.feedback);
        ctx.forEach(ctxi => {
            this.visitPositivo(ctxi.positivo());
        });
    }
};

BCBasicosVisitorApp.prototype.visitPositivo = function (ctx) {
    if (logBas) { console.log("[visitPositivo]--"); }
    if (ctx !== null) {
        pushEntity(this, Consts.E.positivo, 'positivo');
    }
};

BCBasicosVisitorApp.prototype.visitNegativo = function (ctx) {
    if (logBas) { console.log("[visitNegativo]--"); }
    if (ctx !== null) {
        pushEntity(this, Consts.E.negativo, 'negativo');
    }
};

BCBasicosVisitorApp.prototype.visitBye = function (eCtx) {
    let ctx = _.isArray(eCtx) ? eCtx : [eCtx];

    if (logBas) {
        console.log("[visitBye]--eCtx--", eCtx);
        console.log("[visitBye]--ctx--", ctx);
    }

    if (ctx !== null && ctx.length > 0) {
        pushIntent(this, Consts.I.bye);
    }
};

BCBasicosVisitorApp.prototype.visitGreeting = function (eCtx) {
    let ctx = _.isArray(eCtx) ? eCtx : [eCtx];

    if (logBas) {
        console.log("[visitGreeting]--eCtx--", eCtx);
        console.log("[visitGreeting]--ctx--", ctx);
    }

    if (ctx !== null && ctx.length > 0) {
        pushIntent(this, Consts.I.greeting);
    }
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
