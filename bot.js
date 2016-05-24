var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message){
	if(message.content === "!cmds")
		mybot.reply(message, "!cmds. This will show a list of commands")
	if(message.content === "!cmds")
		mybot.reply(message, "!info. This will give info on Me and My Maker ''meet my maker''!)
	
});

mybot.loginWithToken("MTg0NzM1NjQ5ODUxNTA2Njg5.CiYv-w.DwFcASCH1Ll_h5OsJZN4Gt50PKI");
