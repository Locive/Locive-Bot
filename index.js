const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'spino') {
    message.reply('a 13 foot spinosaurus but with his fidget spinner 20 foot');
  }
});

client.on('message', message => {
  if (message.content === 'mario') {
    message.reply('a school shooter straight outta louisiana');
  }
});

client.on('message', message => {
  if (message.content === 'locive') {
    message.reply('a youtuber bigger than pewdiepie');
  }
});

client.on('message', message => {
  if (message.content === 'critpker') {
    message.reply('a spicey meme aswell as spinos real dad');
  }
});

client.login('MzE1MzU2NzUwMzQzNTY5NDA5.DB4GWA.9D6NsG97j8IaUy5WsFKg7sKhkbY');