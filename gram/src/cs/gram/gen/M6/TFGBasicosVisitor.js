// Generated from /Users/joserg/TFG/gram/cs/gram/gen/M6/TFGBasicos.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TFGBasicosParser.

function TFGBasicosVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TFGBasicosVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TFGBasicosVisitor.prototype.constructor = TFGBasicosVisitor;

// Visit a parse tree produced by TFGBasicosParser#intents.
TFGBasicosVisitor.prototype.visitIntents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGBasicosParser#intent.
TFGBasicosVisitor.prototype.visitIntent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGBasicosParser#feedback.
TFGBasicosVisitor.prototype.visitFeedback = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGBasicosParser#positivo.
TFGBasicosVisitor.prototype.visitPositivo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGBasicosParser#negativo.
TFGBasicosVisitor.prototype.visitNegativo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGBasicosParser#bye.
TFGBasicosVisitor.prototype.visitBye = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TFGBasicosParser#greeting.
TFGBasicosVisitor.prototype.visitGreeting = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TFGBasicosVisitor = TFGBasicosVisitor;