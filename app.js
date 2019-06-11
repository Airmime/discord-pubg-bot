/* Main libraries */
var Discord = require('discord.js');
var client = new Discord.Client();

/* Local Modules */
var pubgSeason = require('./libs/pubg_api/pubgSeason'); 
var pubgGame = require('./libs/pubg_api/pubgGame'); 
var pubgStatsCmd = require('./libs/command/pubgStats')
var pubgGameCmd = require('./libs/command/pubgGame')
var helpCmd = require('./libs/command/help')

/* App constants */
const prefix = '!';

/* When init bot */
client.on('ready', () => {
    client.user.setPresence({game: {name : 'PUBG | !pubg -h', type: 1}})
});

/* On message */
client.on('message', message => {
    if(message.content.startsWith(prefix + 'pubg ')){
        pubgStatsCmd.getStats(message);
        pubgGameCmd.getGameStats(message);
        helpCmd.getHelp(message);
    }
}); 

/* 
* Bot token
* How to create twitch bot ? -> https://dev.twitch.tv
* How to get bot token ? -> https://github.com/Chikachi/DiscordIntegration/wiki/How-to-get-a-token-and-channel-ID-for-Discord 
*/
client.login('YOUR_BOT_TOKEN');