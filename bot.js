var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message){
	if(message.content === "!cmds")
		mybot.reply(message, "!cmds[page]. this will show the command on that page! there are 1 page(s)")
	
});

mybot.loginWithToken("MTg0NzM1NjQ5ODUxNTA2Njg5.CiYv-w.DwFcASCH1Ll_h5OsJZN4Gt50PKI");
