require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user, or your own avatar.',
	aliases: ['icon', 'pfp'],
  usage: '[member]',
	async execute(message, args, client) {
        const user = message.mentions.users.first() || message.author;

   let pfpembed = new Discord.MessageEmbed()
   .setTitle("User Avatar")
   .setColor("RANDOM")
   .setDescription(`${user.username}\'s Avatar:-`)
   .setImage( user.displayAvatarURL({format: 'png', dynamic: true, size: 256}));
    message.channel.send(pfpembed);
  },
};