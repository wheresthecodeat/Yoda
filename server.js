const Discord = require("discord.js");
const client = new Discord.Client();

const pre = "y";

client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", message => {
  if (!message.content.startsWith(pre)) return;
  if (message.content.startsWith(pre + "ping")) {
    message.channel.send("**Pong!** Ask another bot.");
  } else if (message.content.startsWith(pre + "prefix")) {
    message.channel.send(
      "Here are the prefixes for all the droids: \n <@716390085896962058> is `.` \n <@438057969251254293> is `p` \n <@665301904791699476> is `p!` \n <@270904126974590976> is `pls` \n <@234395307759108106> is = \n <@235088799074484224> is + \n <@159985870458322944> is !"
    );
  }
  if (message.content.startsWith(pre + "admin")) {
    message.channel.send(
      "for now to get an admin role you would need to invite more members for help ping @Zorg3000 or @Spring Yoda"
    );
  }
});

client.login("ODI1NzAxNjM4NDY2NTY4MjAz.YGBwkw.aTtvwJC18MSdbELAqrvvhk54o5g");
