const fs = require('fs');
require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	args: true,
  cooldown: 1,
  argsreason: '',
  owneronly: true,
	async execute(message, args, client) {
    const donfig = require("../../config.js");
    if(message.author.id == donfig.owner[0] || message.author.id == donfig.owner[1]){
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
		}

		const commandFolders = fs.readdirSync('./commands');
		const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${command.name}.js`));

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.error(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
		}
    }
	},
};