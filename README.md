# PUBG Discord
A smart PUBG Discord bot, developed with nodejs, that allows you to obtain your game statistics.

## Node.js Dependencies
* [discord.js](https://www.npmjs.com/package/discord.js)
* [request](https://www.npmjs.com/package/request#promises--asyncawait)

## How to install ?
First, you have to download and install [nodejs](https://nodejs.org/en/), then, you can clone the repository :

`git clone https://github.com/Airmime/discord-pubg-bot.git`

## How to configure ?
To launch the bot, you must configure the file `libs/config/config.js` by adding your PUBG API key ([How to get my API KEY ?](https://developer.pubg.com/)). After that, you must enter your bot token ([How to create twitch bot ?](https://dev.twitch.tv/), [How to get bot token ? ](https://github.com/Chikachi/DiscordIntegration/wiki/How-to-get-a-token-and-channel-ID-for-Discord )) in the `/app.js` file. 

Now, you must download the libraries, and launch your server :

`$ npm install`

`$ npm app.js start` (or use an Advanced Node.js process manager like [PM2](https://www.npmjs.com/package/pm2))

## How to use ?
When the bot is launched, you must invite it to your server, after that, you could use the following commands :

* **!pubg -help || !pubg -h** : This command details all available commands.

* **!pubg unknownPlayer steam squad-fpp** : To obtain your statistics, you must run the following command: !pubg <PUBG Nickname> <PUBG Platform> <PUBG Game mode>. The following platforms are available: steam, psn, xbox and kakao. The following game modes are available: solo, solo-fpp, duo, duo-fpp, squad, squad-fpp.
  
* **!pubg -game unknownPlayer steam** : To obtain the statistics of the last game, you must run the following command: !pubg -game <PUBG Nickname> <PUBG Platform>. The following platforms are available: steam, psn, xbox and kakao.

