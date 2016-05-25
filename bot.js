var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message){
	if(message.content === "!cmds")
		mybot.reply(message, "!cmds. This will show a list of commands")
	if(message.content === "!cmds")
		mybot.reply(message, "!info. This will show Info on my creators KJ ''meet my creators!''")
	if(message.content === "!cmds")
		mybot.reply(message, "!chatbanon.-Coming soon- turns on automatic ban from messages in chat")
	if(message.content === "!info")
		mybot.reply(message, "My creators are KJ Woledgesinclair and Benjiman Lewis. Benjiman Lewis had created the files to make me work for discord, And most importantly KJ Woledgesinclair who coded me to work and talk.")
	if(message.content === "!info")
		mybot.reply(message, " KJ has made a way to make me say multiple thing per command in a random order -Quite smart- and ben has uesd that idear in his helper bot, go and check it out!--")
	if(message.content === "!info")
		mybot.reply(message, "Benjiman Lewis Helper Bot link to add to your Discord server, https://discordapp.com/oauth2/authorize?client_id=183834481415815168&scope=bot&permissions=0")

});

mybot.loginWithToken("MTg0NzM1NjQ5ODUxNTA2Njg5.CiYv-w.DwFcASCH1Ll_h5OsJZN4Gt50PKI");
