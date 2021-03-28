const Discord = require("discord.js");
const client = new Discord.Client();

const pre = "y";
var ball = ["Yes" , "NO"]
var response = ball[Math.floor(Math.random()*ball.length)]
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 
client.login("ODI1NzAxNjM4NDY2NTY4MjAz.YGBwkw.x9u5JvGnBKD83vVCZ_ZSrRr5Dds");
