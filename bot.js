const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514075872752304161")
setInterval(function() {
channel.send(`Demon Demon Demon Deomn Deomn Demon Fuck You All`);
}, 30)
})

client.login(process.env.BOT_TOKEN);