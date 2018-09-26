// Generated from /Users/joserg/TFG/gram/cs/gram/gen/M6/AURATV.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by AURATVParser.

function AURATVVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

AURATVVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
AURATVVisitor.prototype.constructor = AURATVVisitor;

// Visit a parse tree produced by AURATVParser#intents.
AURATVVisitor.prototype.visitIntents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#intent.
AURATVVisitor.prototype.visitIntent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#coletilla.
AURATVVisitor.prototype.visitColetilla = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#channel_switch.
AURATVVisitor.prototype.visitChannel_switch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#search.
AURATVVisitor.prototype.visitSearch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#search_content_by_time.
AURATVVisitor.prototype.visitSearch_content_by_time = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#channel_get_info.
AURATVVisitor.prototype.visitChannel_get_info = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#search_similar.
AURATVVisitor.prototype.visitSearch_similar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#search_sport.
AURATVVisitor.prototype.visitSearch_sport = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#play.
AURATVVisitor.prototype.visitPlay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#record.
AURATVVisitor.prototype.visitRecord = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#from_beginning.
AURATVVisitor.prototype.visitFrom_beginning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#common_greetings.
AURATVVisitor.prototype.visitCommon_greetings = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#common_goodbyes.
AURATVVisitor.prototype.visitCommon_goodbyes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#common_help.
AURATVVisitor.prototype.visitCommon_help = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#common_thankyous.
AURATVVisitor.prototype.visitCommon_thankyous = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#common_swearwords.
AURATVVisitor.prototype.visitCommon_swearwords = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_channel.
AURATVVisitor.prototype.visitAudiovisual_channel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_genre.
AURATVVisitor.prototype.visitAudiovisual_genre = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_subgenre.
AURATVVisitor.prototype.visitAudiovisual_subgenre = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_releases.
AURATVVisitor.prototype.visitAudiovisual_releases = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_most_watched.
AURATVVisitor.prototype.visitAudiovisual_most_watched = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_best.
AURATVVisitor.prototype.visitAudiovisual_best = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_actor.
AURATVVisitor.prototype.visitAudiovisual_actor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_director.
AURATVVisitor.prototype.visitAudiovisual_director = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_tvseries_title.
AURATVVisitor.prototype.visitAudiovisual_tvseries_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_film_title.
AURATVVisitor.prototype.visitAudiovisual_film_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_tvshow_title.
AURATVVisitor.prototype.visitAudiovisual_tvshow_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_documental_title.
AURATVVisitor.prototype.visitAudiovisual_documental_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_sports.
AURATVVisitor.prototype.visitAudiovisual_sports = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_sports_season.
AURATVVisitor.prototype.visitAudiovisual_sports_season = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_sports_unit.
AURATVVisitor.prototype.visitAudiovisual_sports_unit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#audiovisual_sports_team.
AURATVVisitor.prototype.visitAudiovisual_sports_team = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#time_instant.
AURATVVisitor.prototype.visitTime_instant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#time_interval.
AURATVVisitor.prototype.visitTime_interval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#device.
AURATVVisitor.prototype.visitDevice = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AURATVParser#compo_device.
AURATVVisitor.prototype.visitCompo_device = function(ctx) {
  return this.visitChildren(ctx);
};



exports.AURATVVisitor = AURATVVisitor;