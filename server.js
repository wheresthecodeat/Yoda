const Discord = require("discord.js");
const client = new Discord.Client();

const pre = "y";

const ball = ["Yes", "No"];

client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", message => {
  var respond = ball[Math.floor(Math.random() * ball.length)];
  if (!message.content.startsWith(pre)) return;
  if (message.content.startsWith(pre + "ping")) {
    message.channel.send("Pong!");
  }
  else if (message.content.startswith(pre + "8ball")) {
    message.channel
      .send(respond)
      .then()
      .catch(console.error);
  }
});

client.login("ODI1NzAxNjM4NDY2NTY4MjAz.YGBwkw.MmtaHRzvkfxzAjfMM4LG_e7dKaQ");
