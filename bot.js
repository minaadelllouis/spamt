const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("578326828348080128")
setInterval(function() {
channel.send(`سبام كردتس سبام كردتس سبام كردتس`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
