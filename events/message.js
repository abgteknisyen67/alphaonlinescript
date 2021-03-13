const Discord = require("discord.js")
const database = require('quick.db')
let talkedRecently = new Set();

module.exports = message => {
  let prefix = 'z!'
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
 if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
    return
    }
  }
    if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};