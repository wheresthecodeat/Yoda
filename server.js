const Discord = require("discord.js");
const client = new Discord.Client();

const pre = "y";

client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", message => {
  if (!message.content.startsWith(pre)) return;
  if (message.content.startsWith(pre + "ping")) {
    message.channel.send("**Pong!**");
  } else if (message.content.startsWith(pre + "prefix")) {
    message.channel.send(
      "Here are the prefixes for all the droids:" /n "@PokéMaster  is ." /n "@MasterMyuu is p" /n  "@PokéDroid is p!" /n "@Dank Master is pls" /n "@PadaGroovy is =" /n  "@Master Rythm is +" || " @Droid6 is !"
    );
  }
});

client.login("ODI1NzAxNjM4NDY2NTY4MjAz.YGBwkw.aTtvwJC18MSdbELAqrvvhk54o5g");
