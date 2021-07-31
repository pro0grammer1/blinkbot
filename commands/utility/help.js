require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands', 'info'],
	usage: '[command name]',
	cooldown: 5,
	async execute(message, args, client) {


		const data = [];
		const { commands } = message.client;

		if (!args.length) {
          const GuildSettings = require('../../models/settings');

  const sst = await GuildSettings.findOne({ gid: message.guild.id });


			data.push('Here\'s a list of all my commands:\n');
			data.push(commands.map(command => '\`' + command.name).join('` '));
			data.push(`\`\nYou can send \`` + sst.prefix + `help [command name]\` to get info on a specific command!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.username}#${message.author.tag} in ${message.guild.name} server.\n`, error);
					message.reply('Can I even dm you? Check it again, dummy.');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('That command doesn\'t even exist :rolling_eyes:...');
		}
              const GuildSettings = require('../../models/settings');

  const sst = await GuildSettings.findOne({ gid: message.guild.id });

if(!command.owneronly){
		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${sst.prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
}
		message.channel.send(data, { split: true });
	},
};