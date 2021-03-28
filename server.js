const Discord = require("discord.js");
const client = new Discord.Client();

const pre = "y";
var ball = ["Yes" , "NO"]
var response = ball[Math.floor(Math.random()*ball.length)]
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content(pre + "ping")) {
    message.channel.send("pong!");
  }
else if (message.content.startsWith(pre + "8ball")){
message.channel.send(response)
}
});
 
client.login("ODI1NzAxNjM4NDY2NTY4MjAz.YGBwkw.FWsBq3Jxt7vp7NyXlmgZqvtj7k4");
