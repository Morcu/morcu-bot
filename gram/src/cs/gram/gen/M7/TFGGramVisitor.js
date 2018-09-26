// Generated from /home/morcu/bot/git_folder/morcu-bot/gram/src/cs/gram/gen/M7/TFGGram.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TFGGramParser.

function TFGGramVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TFGGramVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TFGGramVisitor.prototype.constructor = TFGGramVisitor;

// Visit a parse tree produced by TFGGramParser#intents.
TFGGramVisitor.prototype.visitIntents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#intent.
TFGGramVisitor.prototype.visitIntent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#tfg_intent_find.
TFGGramVisitor.prototype.visitTfg_intent_find = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#tipo_contenido.
TFGGramVisitor.prototype.visitTipo_contenido = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#titulo.
TFGGramVisitor.prototype.visitTitulo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#genero.
TFGGramVisitor.prototype.visitGenero = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#tfg_intent_recommendC2C.
TFGGramVisitor.prototype.visitTfg_intent_recommendC2C = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#feedback.
TFGGramVisitor.prototype.visitFeedback = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#positivo.
TFGGramVisitor.prototype.visitPositivo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#negativo.
TFGGramVisitor.prototype.visitNegativo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#tfg_intent_bye.
TFGGramVisitor.prototype.visitTfg_intent_bye = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGGramParser#tfg_intent_saludo.
TFGGramVisitor.prototype.visitTfg_intent_saludo = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TFGGramVisitor = TFGGramVisitor;