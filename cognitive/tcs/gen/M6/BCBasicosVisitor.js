// Generated from /Users/joserg/botcorn/otro/botcorn/src/tcs/gen/M6/BCBasicos.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by BCBasicosParser.

function BCBasicosVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

BCBasicosVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
BCBasicosVisitor.prototype.constructor = BCBasicosVisitor;

// Visit a parse tree produced by BCBasicosParser#intents.
BCBasicosVisitor.prototype.visitIntents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BCBasicosParser#intent.
BCBasicosVisitor.prototype.visitIntent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BCBasicosParser#feedback.
BCBasicosVisitor.prototype.visitFeedback = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BCBasicosParser#positivo.
BCBasicosVisitor.prototype.visitPositivo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BCBasicosParser#negativo.
BCBasicosVisitor.prototype.visitNegativo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BCBasicosParser#bye.
BCBasicosVisitor.prototype.visitBye = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BCBasicosParser#greeting.
BCBasicosVisitor.prototype.visitGreeting = function(ctx) {
  return this.visitChildren(ctx);
};



exports.BCBasicosVisitor = BCBasicosVisitor;