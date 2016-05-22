var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message){
	if(message.content === "!cmds")
		mybot.reply(message, "List Coming Soon!");
	if(message.content === "!help")
		mybot.reply(message, "@support, Help requested in general");
	if(message.content === "!about")
		mybot.reply(message, "This bot is made by BenjiSoft (Benji Lewis) for the open-source community. All code is availiable at: https://github.com/benjisoft/Discord-HelpBot and is coded in Javascript using the discord.js library availiable at: https://github.com/hydrabolt/discord.js/")
});

mybot.loginWithToken("token");
