const Discord = require("discord.js");
const client = new Discord.Client();

const pre = "y!";

client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", message => {
  if (message.content.startsWith("Hi") || message.content.startsWith("hi")) {
    message.channel.send(
      "https://tenor.com/view/hello-there-hi-there-greetings-gif-9442662"
    );
  } else if (
    message.content.startsWith("oh no") ||
    message.content.startsWith("yikes") ||
    message.content.startsWith("Yikes")
  ) {
    message.channel.send(
      "https://tenor.com/view/yikes-michael-scott-the-office-my-bad-oof-gif-13450971"
    );
  } else if (message.content.startsWith("kek")) {
    message.channel.send("<:kek:825960142377713715>");
  } else if (
    message.content.startsWith(";-;") ||
    message.content.startsWith("cri")
  ) {
    message.channel.send(
      "https://tenor.com/view/silent-tears-crying-sad-gif-10045699"
    );
  } else if (message.content.startsWith("lol")) {
    message.channel.send(
      "https://tenor.com/view/lolol-lol-funny-laughing-hahaha-gif-17418747"
    );
  } else if (
    message.content.startsWith("lmao") ||
    message.content.startsWith("lmfao")
  ) {
    message.channel.send(
      "https://tenor.com/view/lmao-child-toddler-laugh-laughing-gif-10703708"
    );
  } else if (message.content.startsWith("idk")) {
    message.channel.send("https://tenor.com/view/elmo-shrug-gif-5094560");
  } else if (message.content.startsWith("GG <@")) {
    message.channel.send("MEE6 go brr.");
  }
  if (!message.content.startsWith(pre)) return;
  if (message.content.startsWith(pre + "ping")) {
    message.channel
      .send("**Pong!**")
      .then(sentMessage => sentMessage.edit("**Pong!** Ask another bot."));
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
  } else if (message.content.startsWith(pre + "members")) {
    message.channel.send("This server has 6 members excluding bots.");
  }
});

client.login("ODI1NzAxNjM4NDY2NTY4MjAz.YGBwkw.aTtvwJC18MSdbELAqrvvhk54o5g");
