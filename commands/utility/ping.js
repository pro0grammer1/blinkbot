let pingReply = ['Travelling around the discord and finally, reaching to you took me', 'Jumped from the sky and landed with a furious velocity of', 'Just came roaming around discord with velocity of', 'This is the time I took to reply you:-', 'Took me just a small time i.e.', 'Hey, I got a ping of', 'Slipped into discord with a velocity of', 'caught you in', 'pierced through discord in', 'I can catch you in']

require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'This one is used to measure bot\'s ping!',
  cooldown: 6,
	aliases: ['latency', 'lag'],
	async execute(message, args, client) {
        message.react('🏓')

        let msg = await message.inlineReply('Pinging...', { allowedMentions: { repliedUser: false } })
        
        await msg.edit((pingReply[Math.floor(Math.random()*pingReply.length)] + ` ${Date.now() - msg.createdTimestamp}ms!!`), { allowedMentions: { repliedUser: false } })
  },
};