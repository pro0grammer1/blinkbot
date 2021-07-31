require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
  aliases: ['args', 'argsinfo', 'ai', 'argument-info', 'arguments-info'],
  usage: '<argument-name>',
	args: true,
  argsreason: 'You need to provide an argument to know about',
	async execute(message, args, client) {
let d = args[0].toLowerCase();
		if (d === 'member' || d === 'membermention' || d === 'member-mention' || d === 'mention') {
			return message.channel.send('\`<member>\` argument means, You need to add a mention to user from your current guild or server!');
		}else	if (d === 'argument-name' || d === 'arguments-name' || d === 'args-name' || d === 'arg-name' || d === 'argumentname' || d === 'argumentsname' || d === 'argsname' || d === 'argname' || d === 'an') {
			return message.channel.send('\`<argument-name>\` argument means, You need to enter a name of argument of any command!');
		}else	if (d === 'string' || d === 'str' || d === 's' || d === 'letter' || d === 'word') {
			return message.channel.send('\`String\` argument means, You need to enter a string, but only letters!');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};