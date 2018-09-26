"use strict";
var _ = require('lodash');
var Consts;

var logs = true;
var logV = logs && true;
var logInt = logs && false;
var logEnt = logs && false;
var logC = logs && true;
var logBas = logs && true;
var logFun = logs && true;

function AURATVVisitorApp(intent, bName) {
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
exports.AURATVVisitorApp = AURATVVisitorApp;

AURATVVisitorApp.prototype.constructor = AURATVVisitorApp;

AURATVVisitorApp.prototype.visitDefault = function (ctx) {
    // implement logic to determine which function to visit
    // then call next function and with the right context
    this.visitIntents(ctx);
};

AURATVVisitorApp.prototype.visitIntents = function (ctx) {
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

AURATVVisitorApp.prototype.visitIntent = function (eCtx) {
    if (logV) { console.log("[visitIntent]--"); }
    let ctx = getAsArray(eCtx);

    if (exist(ctx)) {
        ctx.forEach((ctxi, i) => {
            if (logV) { console.log("[visitIntent]-- i, ctxi = ", i, ctxi); }
            
            if (ctxi.exception === null) {
                this.visitChannel_switch(ctxi.channel_switch());
                this.visitSearch(ctxi.search());
                this.visitSearch_content_by_time(ctxi.search_content_by_time());
                this.visitChannel_get_info(ctxi.channel_get_info());
                this.visitSearch_similar(ctxi.search_similar());
                this.visitSearch_sport(ctxi.search_sport());

                this.visitFrom_beginning(ctxi.from_beginning());

                this.visitPlay(ctxi.play());
                this.visitRecord(ctxi.record());

                this.visitCommon_greetings(ctxi.common_greetings());
                this.visitCommon_goodbyes(ctxi.common_goodbyes());
                this.visitCommon_help(ctxi.common_help());
                this.visitCommon_thankyous(ctxi.common_thankyous());
                this.visitCommon_swearwords(ctxi.common_swearwords());
            }
        });
    }
};

AURATVVisitorApp.prototype.visitAllEntities = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (exist(ctx, true)) {
        ctx.forEach(ctxi => {
            this.visitAudiovisual_channel(ctxi.audiovisual_channel());

            this.visitAudiovisual_genre(ctxi.audiovisual_genre());
            this.visitAudiovisual_subgenre(ctxi.audiovisual_subgenre());

            this.visitAudiovisual_releases(ctxi.audiovisual_releases());
            this.visitAudiovisual_most_watched(ctxi.audiovisual_most_watched());
            this.visitAudiovisual_best(ctxi.audiovisual_best());

            this.visitAudiovisual_actor(ctxi.audiovisual_actor());
            this.visitAudiovisual_director(ctxi.audiovisual_director());

            this.visitAudiovisual_tvseries_title(ctxi.audiovisual_tvseries_title());
            this.visitAudiovisual_film_title(ctxi.audiovisual_film_title());
            this.visitAudiovisual_tvshow_title(ctxi.audiovisual_tvshow_title());
            this.visitAudiovisual_documental_title(ctxi.audiovisual_documental_title());

            this.visitAudiovisual_sports(ctxi.audiovisual_sports());
            this.visitAudiovisual_sports_season(ctxi.audiovisual_sports_season());
            this.visitAudiovisual_sports_unit(ctxi.audiovisual_sports_unit());
            this.visitAudiovisual_sports_team(ctxi.audiovisual_sports_team());

            //this.visitCompo_device(ctxi.compo_device());
            this.visitDevice(ctxi.device());
            this.visitTime_instant(ctxi.time_instant());
            this.visitTime_interval(ctxi.time_interval());
        });
    }
}

AURATVVisitorApp.prototype.visitChannel_switch = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitChannel_switch]--eCtx--", eCtx);
    }

    /*
    audiovisual_channel
    device
    time_instant
    */

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.channel_switch);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_channel(ctxi.audiovisual_channel());
            this.visitCompo_device(ctxi.compo_device());
            this.visitTime_instant(ctxi.time_instant());
        });
    }
};

//---------------------

AURATVVisitorApp.prototype.visitSearch = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitSearch]--eCtx--", eCtx);
    }

    /*
    audiovisual_genre
    audiovisual_subgenre
    audiovisual_releases
    audiovisual_most_watched
    audiovisual_best
    audiovisual_actor
    audiovisual_director
    audiovisual_tvseries_title
    audiovisual_film_title
    audiovisual_tvshow_title
    audiovisual_documental_title
    device
    time_interval
    time_instant
    */

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.search);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_genre(ctxi.audiovisual_genre());
            this.visitAudiovisual_subgenre(ctxi.audiovisual_subgenre());
            this.visitAudiovisual_releases(ctxi.audiovisual_releases());
            this.visitAudiovisual_most_watched(ctxi.audiovisual_most_watched());
            this.visitAudiovisual_best(ctxi.audiovisual_best());
            this.visitAudiovisual_actor(ctxi.audiovisual_actor());
            this.visitAudiovisual_director(ctxi.audiovisual_director());
            this.visitAudiovisual_tvseries_title(ctxi.audiovisual_tvseries_title());
            this.visitAudiovisual_film_title(ctxi.audiovisual_film_title());
            this.visitAudiovisual_tvshow_title(ctxi.audiovisual_tvshow_title());
            this.visitAudiovisual_documental_title(ctxi.audiovisual_documental_title());

            //this.visitCompo_device(ctxi.compo_device());
            this.visitDevice(ctxi.device());
            this.visitTime_instant(ctxi.time_instant());
            this.visitTime_interval(ctxi.time_interval());
        });
    }

};


AURATVVisitorApp.prototype.visitSearch_content_by_time = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitSearch_content_by_time]--eCtx--", eCtx);
    }

    /*
    audiovisual_sports
    audiovisual_sports_season
    audiovisual_sports_unit
    audiovisual_sports_team
    audiovisual_channel
    time_interval
    time_instant
    */

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.search_content_by_time);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_sports(ctxi.audiovisual_sports());
            this.visitAudiovisual_sports_season(ctxi.audiovisual_sports_season());
            this.visitAudiovisual_sports_unit(ctxi.audiovisual_sports_unit());
            this.visitAudiovisual_sports_team(ctxi.audiovisual_sports_team());

            this.visitTime_instant(ctxi.time_instant());
            this.visitTime_interval(ctxi.time_interval());
        });
    }
};


AURATVVisitorApp.prototype.visitChannel_get_info = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitChannel_get_info]--eCtx--", eCtx);
    }

    /*
    audiovisual_releases
    audiovisual_genre
    device
    time_interval
    audiovisual_channel
    audiovisual_subgenre
    time_instant
    */


    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.channel_get_info);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_channel(ctxi.audiovisual_channel());
            this.visitAudiovisual_genre(ctxi.audiovisual_genre());
            this.visitAudiovisual_subgenre(ctxi.audiovisual_subgenre());
            this.visitAudiovisual_releases(ctxi.audiovisual_releases());

            //this.visitCompo_device(ctxi.compo_device());
            this.visitDevice(ctxi.device());
            this.visitTime_instant(ctxi.time_instant());
            this.visitTime_interval(ctxi.time_interval());
        });
    }
};


AURATVVisitorApp.prototype.visitSearch_similar = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitSearch_similar]--eCtx--", eCtx);
    }

    /*
    audiovisual_film_title
    audiovisual_tvseries_title
    audiovisual_tvshow_title
    audiovisual_genre
    audiovisual_documental_title
    audiovisual_subgenre
    time_interval
    time_instant
    */


    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.search_similar);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_genre(ctxi.audiovisual_genre());
            this.visitAudiovisual_subgenre(ctxi.audiovisual_subgenre());
            this.visitAudiovisual_tvseries_title(ctxi.audiovisual_tvseries_title());
            this.visitAudiovisual_film_title(ctxi.audiovisual_film_title());
            this.visitAudiovisual_tvshow_title(ctxi.audiovisual_tvshow_title());
            this.visitAudiovisual_documental_title(ctxi.audiovisual_documental_title());

            this.visitTime_instant(ctxi.time_instant());
            this.visitTime_interval(ctxi.time_interval());
        });
    }
};


AURATVVisitorApp.prototype.visitSearch_sport = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitSearch_sport]--eCtx--", eCtx);
    }

    /*
    audiovisual_sports_unit
    audiovisual_sports
    audiovisual_sports_team
    time_interval
    device
    time_instant
    audiovisual_sports_season
    */

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.search_sport);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_sports(ctxi.audiovisual_sports());
            this.visitAudiovisual_sports_season(ctxi.audiovisual_sports_season());
            this.visitAudiovisual_sports_unit(ctxi.audiovisual_sports_unit());
            this.visitAudiovisual_sports_team(ctxi.audiovisual_sports_team());

            //this.visitCompo_device(ctxi.compo_device());
            this.visitDevice(ctxi.device());
            this.visitTime_instant(ctxi.time_instant());
            this.visitTime_interval(ctxi.time_interval());
        });
    }
};


AURATVVisitorApp.prototype.visitPlay = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitPlay]--eCtx--", eCtx);
    }

    /*
    audiovisual_genre
    audiovisual_subgenre
    audiovisual_film_title
    audiovisual_tvseries_title
    audiovisual_tvshow_title
    audiovisual_documental_title
    audiovisual_actor
    audiovisual_director
    audiovisual_sports
    audiovisual_sports_season
    audiovisual_sports_unit
    device
    time_instant
    */

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.play);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_genre(ctxi.audiovisual_genre());
            this.visitAudiovisual_subgenre(ctxi.audiovisual_subgenre());
            this.visitAudiovisual_actor(ctxi.audiovisual_actor());
            this.visitAudiovisual_director(ctxi.audiovisual_director());
            this.visitAudiovisual_tvseries_title(ctxi.audiovisual_tvseries_title());
            this.visitAudiovisual_film_title(ctxi.audiovisual_film_title());
            this.visitAudiovisual_tvshow_title(ctxi.audiovisual_tvshow_title());
            this.visitAudiovisual_documental_title(ctxi.audiovisual_documental_title());
            this.visitAudiovisual_sports(ctxi.audiovisual_sports());
            this.visitAudiovisual_sports_season(ctxi.audiovisual_sports_season());
            this.visitAudiovisual_sports_unit(ctxi.audiovisual_sports_unit());

            //this.visitCompo_device(ctxi.compo_device());
            this.visitDevice(ctxi.device());
            this.visitTime_instant(ctxi.time_instant());
        });
    }
};


AURATVVisitorApp.prototype.visitRecord = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitRecord]--eCtx--", eCtx);
    }

    /*
    audiovisual_channel
    audiovisual_genre
    audiovisual_film_title
    audiovisual_tvseries_title
    audiovisual_tvshow_title
    audiovisual_sports
    audiovisual_sports_season
    audiovisual_sports_unit
    audiovisual_sports_team
    device
    time_instant
    time_interval
    */


    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.record);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_channel(ctxi.audiovisual_channel());
            this.visitAudiovisual_genre(ctxi.audiovisual_genre());
            this.visitAudiovisual_tvseries_title(ctxi.audiovisual_tvseries_title());
            this.visitAudiovisual_film_title(ctxi.audiovisual_film_title());
            this.visitAudiovisual_tvshow_title(ctxi.audiovisual_tvshow_title());
            this.visitAudiovisual_sports(ctxi.audiovisual_sports());
            this.visitAudiovisual_sports_season(ctxi.audiovisual_sports_season());
            this.visitAudiovisual_sports_unit(ctxi.audiovisual_sports_unit());
            this.visitAudiovisual_sports_team(ctxi.audiovisual_sports_team());

            //this.visitCompo_device(ctxi.compo_device());
            this.visitDevice(ctxi.device());
            this.visitTime_instant(ctxi.time_instant());
            this.visitTime_interval(ctxi.time_interval());
        });
    }
};


AURATVVisitorApp.prototype.visitFrom_beginning = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitFrom_beginning]--eCtx--", eCtx);
    }

    // audiovisual_genre

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.from_beginning);
        ctx.forEach(ctxi => {
            this.visitAudiovisual_genre(ctxi.audiovisual_genre());
        });
    }
};


AURATVVisitorApp.prototype.visitCommon_greetings = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitCommon_greetings]--eCtx--", eCtx);
    }

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.common_greetings);
    }
};


AURATVVisitorApp.prototype.visitCommon_goodbyes = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitCommon_goodbyes]--eCtx--", eCtx);
    }

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.common_goodbyes);
    }
};


AURATVVisitorApp.prototype.visitCommon_help = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitCommon_help]--eCtx--", eCtx);
    }

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.common_help);
    }
};


AURATVVisitorApp.prototype.visitCommon_thankyous = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) {
        console.log("[visitCommon_thankyous]--eCtx--", eCtx);
    }

    if ((ctx || []).length !== 0) {
        pushIntent(this, Consts.I.common_thankyous);
    }
};


AURATVVisitorApp.prototype.visitCommon_swearwords = function (eCtx) {
    let ctx = getAsArray(eCtx);

    if (logFun) { console.log("[visitCommon_swearwords]--ctx--", ctx); }

    if (exist(ctx, true)) {
        pushIntent(this, Consts.I.common_swearwords);
    }
};

//---------------------



AURATVVisitorApp.prototype.visitAudiovisual_channel = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_channel]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_channel, 'audiovisual_channel');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_genre = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_genre]--", ctx); }
    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_genre, 'audiovisual_genre');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_subgenre = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_subgenre]--", ctx); }
    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_subgenre, 'audiovisual_subgenre');
    }
};

AURATVVisitorApp.prototype.visitAudiovisual_releases = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_releases]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_releases, 'audiovisual_releases');
    }
};



AURATVVisitorApp.prototype.visitAudiovisual_most_watched = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_most_watched]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_most_watched, 'audiovisual_most_watched');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_best = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_best]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_best, 'audiovisual_best');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_actor = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_actor]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_actor, 'audiovisual_actor');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_director = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_director]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_director, 'audiovisual_director');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_tvseries_title = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_tvseries_title]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_tvseries_title, 'audiovisual_tvseries_title');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_film_title = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_film_title]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_film_title, 'audiovisual_film_title');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_tvshow_title = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_tvshow_title]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_tvshow_title, 'audiovisual_tvshow_title');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_documental_title = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_documental_title]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_documental_title, 'audiovisual_documental_title');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_sports = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_sports]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_sports, 'audiovisual_sports');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_sports_season = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_sports_season]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_sports_season, 'audiovisual_sports_season');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_sports_unit = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_sports_unit]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_sports_unit, 'audiovisual_sports_unit');
    }
};


AURATVVisitorApp.prototype.visitAudiovisual_sports_team = function (ctx) {
    if (logFun) { console.log("[visitAudiovisual_sports_team]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.audiovisual_sports_team, 'audiovisual_sports_team');
    }
};

AURATVVisitorApp.prototype.visitCompo_device = function (eCtx) {
    let ctx = getAsArray(eCtx);
    if (logFun) {
        console.log("[visitCompo_device]--eCtx--", eCtx);
    }

    if (exist(ctx, true)) {
        ctx.forEach(ctxi => {
            this.visitDevice(ctxi.device());
        });
    }
};


AURATVVisitorApp.prototype.visitDevice = function (ctx) {
    if (logFun) { console.log("[visitDevice]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.device, 'device');
    }
};


AURATVVisitorApp.prototype.visitTime_instant = function (ctx) {
    if (logFun) { console.log("[visitTime_instant]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.time_instant, 'time_instant');
    }
};

AURATVVisitorApp.prototype.visitTime_interval = function (ctx) {
    if (logFun) { console.log("[visitTime_interval]--", ctx); }

    if (exist(ctx)) {
        pushEntity(this, Consts.E.time_interval, 'time_interval');
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

function getAsArray(ctx) {
    return _.isArray(ctx) ? ctx : [ctx];
}
function exist(ctx, isArray) {
    return ctx !== null && ((isArray ? ctx : getAsArray(ctx)) || []).length !== 0;
}
