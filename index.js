var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
var dialog = new builder.CommandDialog();
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

dialog.matches(['Hi', 'Hello', 'こんにちは'], function (session) {
  session.send('こんにちは');
});

bot.add('/',dialog)
