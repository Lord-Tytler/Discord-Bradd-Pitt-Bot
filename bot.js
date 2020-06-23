const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) return;
  var images = 20;
  var number = Math.floor(Math.random() * images + 1);
  
  if (msg.content.toLowerCase().includes('brad') && msg.content.toLowerCase().includes('pitt')) {
    msg.channel.send('Did somebody say Brad Pitt?');
	msg.channel.send( {files: ["./images/" + number + ".jpg"]} )
  }
});

client.login(process.env.token);