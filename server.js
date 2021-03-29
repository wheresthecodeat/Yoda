const Discord = require("discord.js");
const client = new Discord.Client();

const pre = "y!";

client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", message => {
  if (
    message.content.startsWith("Hi") ||
    message.content.startsWith("hi") ||
    message.content.startsWith("yo") ||
    message.content.startsWith("Yo")
  ) {
    message.channel.send(
      "https://tenor.com/view/hello-there-hi-there-greetings-gif-9442662"
    );
  } else if (message.content.startsWith("oh no") || message.content.startsWith("yikes") || message.content.startsWith("Yikes")) {
    message.channel.send(
      "https://tenor.com/view/yikes-michael-scott-the-office-my-bad-oof-gif-13450971"
    );
  }
  if (!message.content.startsWith(pre)) return;
  if (message.content.startsWith(pre + "ping")) {
    message.channel.send("**Pong!**").then(message.edit("*Pong*!** Ask another bot."))
  } else if (message.content.startsWith(pre + "prefix")) {
    message.channel.send(
      "Here are the prefixes for all the droids: \n <@716390085896962058> is `.` \n <@438057969251254293> is `p` \n <@665301904791699476> is `p!` \n <@270904126974590976> is `pls` \n <@234395307759108106> is = \n <@235088799074484224> is + \n <@159985870458322944> is !"
    );
  } else if (message.content.startsWith(pre + "admin")) {
    message.channel.send(
      "To get admin perms you would need to be level 15+ on MEE6 and be an active member."
    );
  } else if (message.content.startsWith(pre + "carvanha")) {
    message.channel.send("<@770876531735658558>");
  } else if (message.content.startsWith(pre + "dialga")) {
    message.channel.send("<@503083580495495168>");
  } else if (message.content.startsWith(pre + "honedge")) {
    message.channel.send("<@694494146123268126>");
  } else if (message.content.startsWith(pre + "invite")) {
    message.channel.send("https://discord.gg/GS8PSz4qGD");
  }
});

client.login("ODI1NzAxNjM4NDY2NTY4MjAz.YGBwkw.aTtvwJC18MSdbELAqrvvhk54o5g");
