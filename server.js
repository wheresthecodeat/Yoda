let Discord = require("discord.js");
let client = new Discord.Client();

var ball = ["Yes", "No"];

var response = ball[Math.floor(Math.random() * ball.length)];

const pre = "y";

client.on("message", message => {
  if (message.content === pre + "ping") {
    message.channel.send("pong");
  } else if (message.content === pre + "8ball") {
    message.channel.send(response);
  }
});

client.login("ODI1NzAxNjM4NDY2NTY4MjAz.YGBwkw.x9u5JvGnBKD83vVCZ_ZSrRr5Dds");
