var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message){
	if(message.content === "!cmds")
		mybot.reply(message, "Prefix messages with !")
		mybot.reply(message, "cmds: Get a list of all commands");
		mybot.reply(message, "help: Send a message to a member of support to get help")
		mybot.reply(message, "about: Learn all about the bot and the creator")
	if(message.content === "!help")
		mybot.reply(message, "has requested help. Please now move to the help/support channel, a support agent will be with you shortly");
	if(message.content === "!about")
		mybot.reply(message, "This bot is made by BenjiSoft (Benji Lewis) for the open-source community. All code is availiable at: https://github.com/benjisoft/Discord-HelpBot and is coded in Javascript using the discord.js library availiable at: https://github.com/hydrabolt/discord.js/")
});

mybot.loginWithToken("MTg0NzM1NjQ5ODUxNTA2Njg5.CiYv-w.DwFcASCH1Ll_h5OsJZN4Gt50PKI");
