// This loads the environment variables from the .env file
require('dotenv-extended').load();

var builder = require('botbuilder');
var restify = require('restify');

var MICROSOFT_APP_ID = process.env.MICROSOFT_APP_ID;
var MICROSOFT_APP_PASSWORD = process.env.MICROSOFT_APP_PASSWORD;
var LUIS_MODEL_URL = process.env.LUIS_MODEL_URL;



// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3979, function () {
    console.log('%s listening to %s', server.name, server.url);
    console.log(MICROSOFT_APP_ID)
});
// Create connector and listen for messages
var connector = new builder.ChatConnector({
    appId: MICROSOFT_APP_ID,
    appPassword: MICROSOFT_APP_PASSWORD
});
server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
    session.send('Sorry, I did not understand \'%s\'. Type \'help\' if you need assistance.', session.message.text);
});

// You can provide your own model by specifing the 'LUIS_MODEL_URL' environment variable
// This Url can be obtained by uploading or creating your model from the LUIS portal: https://www.luis.ai/
var recognizer = new builder.LuisRecognizer(LUIS_MODEL_URL);
bot.recognizer(recognizer);



bot.dialog('Greeting', function (session) {
    console.log('hola enviado')
    session.endDialog('holaaaaa :)');
}).triggerAction({
    matches: 'Greeting'
});

