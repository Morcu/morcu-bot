"use strict";
var _ = require("lodash");
var Consts;

var logs = true;
var logV = logs && true;
var logInt = logs && false;
var logEnt = logs && false;
var logC = logs && true;
var logBas = logs && true;
var logFun = logs && true;

var antlr4 = require("antlr4/index");

function TFGGramVisitorApp(intent, bName) {
  Consts = require("./" + bName + "Consts");
  this.Consts = Consts;
  var BaseVisitor = require("./" + bName + "Visitor")[bName + "Visitor"];
  BaseVisitor.call(this);

  this.intent = intent;
  this.intent.intents = this.intent.intents || [];
  this.intent.entities = this.intent.entities || [];

  if (logC) {
    console.log("__" + bName + "VisitorApp__");
  }

  return this;
}
exports.TFGGramVisitorApp = TFGGramVisitorApp;

TFGGramVisitorApp.prototype.constructor = TFGGramVisitorApp;

TFGGramVisitorApp.prototype.visitDefault = function(ctx) {
  // implement logic to determine which function to visit
  // then call next function and with the right context
  this.visitIntents(ctx);
};

TFGGramVisitorApp.prototype.visitIntents = function(ctx) {
  if (logV) {
    console.log("[visitIntents]--");
  }
  if (ctx !== null && ctx.exception === null) {
    let intents = (ctx.intent() || []).filter(i => i.exception === null);
    if (logV) {
      console.log("[visitIntents]--intents.length--", intents.length);
    }

    if (intents.length > 1) {
      pushOnlyIntent(this, Consts.I.dm);
    }

    this.visitIntent(intents);
  }
};

TFGGramVisitorApp.prototype.visitIntent = function(eCtx) {
  if (logV) {
    console.log("[visitIntent]--");
  }
  let ctx = getAsArray(eCtx);

  if (exist(ctx)) {
    ctx.forEach((ctxi, i) => {
      if (logV) {
        console.log("[visitIntent]-- i, ctxi = ", i, ctxi);
      }

      if (ctxi.exception === null) {
        this.visitTfg_intent_find(ctxi.tfg_intent_find());
        this.visitTfg_intent_recommendC2C(ctxi.tfg_intent_recommendC2C());
        this.visitTfg_intent_bye(ctxi.tfg_intent_bye());
        this.visitTfg_intent_saludo(ctxi.tfg_intent_saludo());
      }
    });
  }
};

TFGGramVisitorApp.prototype.visitTfg_intent_find = function(eCtx) {
  let ctx = getAsArray(eCtx);

  if (logFun) {
    console.log("[visitTfg_intent_find]--eCtx--", eCtx);
  }

  /*
    tipoContenido
    titulo
  */

  if ((ctx || []).length !== 0) {
    pushIntent(this, Consts.I.tfg_intent_find);
    ctx.forEach(ctxi => {
      if (ctxi !== null) {
        this.visitTipo_contenido(ctxi.tipo_contenido());
        this.visitTitulo(ctxi.titulo());
      }
    });
  }
};

TFGGramVisitorApp.prototype.visitTipo_contenido = function(ctx) {
  if (logV) console.log("[visitTipoContenido]--");

  var push = ctx => {
    if (ctx !== null && ctx.exception === null) {
      if (logV) console.log("[visitTipoContenido]--1");
      pushTypeTOK(this, ctx, Consts.E.tipo_contenido, Consts.TipoContenidoTOK);
    }
  };

  (!_.isArray(ctx) ? [ctx] : ctx || []).forEach(ctxi => {
    push(ctxi);
  });
};

TFGGramVisitorApp.prototype.visitTitulo = function(eCtx) {
  let ctx = getAsArray(eCtx);
  if (logFun) {
    console.log("[visitTitulo]--", ctx);
  }

  if (exist(ctx)) {
    if (logV) console.log("[visitTitulo]--2--", ctx.length);
    (ctx || []).forEach(ctxi => {
      if (ctxi !== null && ctxi.exception === null) {
        if (logV) console.log("[visitTitulo]--3", ctxi);
        pushEntity(this, Consts.E.titulo, ctxi.getText());
      }
    });
  }
};

TFGGramVisitorApp.prototype.visitGenero = function(ctx) {
  if (logV) console.log("[visitTipoGenero]--");

  var push = ctx => {
    if (ctx !== null && ctx.exception === null) {
      if (logV) console.log("[visitTipoGenero]--1");
      pushTypeTOK(this, ctx, Consts.E.tipo_genero, Consts.TipoGeneroTOK);
    }
  };

  (!_.isArray(ctx) ? [ctx] : ctx || []).forEach(ctxi => {
    push(ctxi);
  });
};

TFGGramVisitorApp.prototype.visitTfg_intent_recommendC2C = function(eCtx) {
  let ctx = getAsArray(eCtx);

  if (logFun) {
    console.log("[visitTfg_intent_recommendC2C]--eCtx--", eCtx);
  }

  /*
    genero
    titulo
  */

  if ((ctx || []).length !== 0) {
    pushIntent(this, Consts.I.tfg_intent_recommendC2C);
    ctx.forEach(ctxi => {
      if (ctxi !== null) {
        this.visitGenero(ctxi.genero());
        this.visitTitulo(ctxi.titulo());
      }
    });
  }
};

TFGGramVisitorApp.prototype.visitFeedback = function(ctx) {
  return this.visitChildren(ctx);
};

TFGGramVisitorApp.prototype.visitPositivo = function(ctx) {
  return this.visitChildren(ctx);
};

TFGGramVisitorApp.prototype.visitNegativo = function(ctx) {
  return this.visitChildren(ctx);
};

TFGGramVisitorApp.prototype.visitTfg_intent_bye = function(eCtx) {
  let ctx = getAsArray(eCtx);

  if (logFun) {
    console.log("[visitTfg_intent_bye]--eCtx--", eCtx);
  }

  if ((ctx || []).length !== 0) {
    pushIntent(this, Consts.I.tfg_intent_bye);
  }
};

TFGGramVisitorApp.prototype.visitTfg_intent_saludo = function(eCtx) {
  let ctx = getAsArray(eCtx);

  if (logFun) {
    console.log("[visitTfg_intent_saludo]--eCtx--", eCtx);
  }

  if ((ctx || []).length !== 0) {
    pushIntent(this, Consts.I.tfg_intent_saludo);
  }
};

function pushOnlyIntent(_this, name) {
  if (logInt) {
    console.log("[pushOnlyIntent]--", name);
  }

  // ponemos la intent en el array de intents
  _this.intent.intents.push(intent(name));
}

function pushIntent(_this, name) {
  if (logInt) {
    console.log("[pushIntent]--", name);
  }

  // ponemos la intent en el array de intents
  _this.intent.intents.push(intent(name));
  // adicionalmente ponemos una marca en el array de entities
  // para marcar la existencia de esta intent...
  // lo cual es útil cuando encontramos varias intents juntas y queremos poder saberlo
  _this.intent.entities.push(entity(Consts.E.INTENT_INFO, name));
}

function pushEntity(_this, type, value) {
  if (logEnt) {
    console.log("[pushEntity]--", type, value);
  }
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

function getAsArray(ctx) {
  return _.isArray(ctx) ? ctx : [ctx];
}
function exist(ctx, isArray) {
  return ctx !== null && ((isArray ? ctx : getAsArray(ctx)) || []).length !== 0;
}

function pushTypeTOK(_this, ctx, e, tipoEnumTOK) {
  if (logV) console.log("[pushTypeTOK]--", e, tipoEnumTOK, _this);
  for (var key in tipoEnumTOK) {
    if (logV) console.log("[pushTypeTOK]--1--", key);

    if (_.isNumber(tipoEnumTOK[key])) {
      if (logV) console.log("[pushTypeTOK]--2--", tipoEnumTOK[key], ctx[key]);
      if (ctx[key] && ctx[key]()) {
        if (logV) console.log("[pushTypeTOK]--3--PUSH-ENTITY", _this);
        pushEntity(_this, e, key);
      }
    }
  }
}
