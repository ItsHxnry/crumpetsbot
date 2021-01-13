const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  client.user.setPresence({ activity: { name: 'with discord.js' }, status: 'idle' }) .then(console.log) .catch(console.error);
});

client.login(config.token) 