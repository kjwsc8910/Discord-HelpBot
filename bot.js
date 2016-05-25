var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message){
	if(message.content === "!cmds")
		mybot.reply(message, "!cmds. This will show a list of commands")
	if(message.content === "!cmds")
		mybot.reply(message, "!info. This will show Info on my creators KJ ")
	if(message.content === "!cmds")
		mybot.reply(message, "!chatbanon. turns on automatic ban from messages in chat")
	if(message.content === "!info")
		mybot.reply(message, "My creators are KJ Woledgesinclair and benjiman lewis. benjiman lewis had created the files to make me work for discor, And most importantly KJ Woledgesinclair who coded me to work and talk")
	
});

mybot.loginWithToken("MTg0NzM1NjQ5ODUxNTA2Njg5.CiYv-w.DwFcASCH1Ll_h5OsJZN4Gt50PKI");
