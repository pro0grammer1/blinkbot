require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'invite',
	description: 'Get invite links of bot and support server.',
	aliases: ['inv', 'support', 'server'],
	async execute(message, args, client) {
    let inv = new Discord.MessageEmbed()
    .setTitle("Invite Links")
    .setDescription(`My Support Server: [click here](https://discord.gg/TxEQVBzSWK)\n\nAuthorization Link: [click here](https://discord.com/api/oauth2/authorize?client_id=803210573755056188&permissions=0&redirect_uri=http%3A%2F%2Fblinkbot.ml%2Fcallback&response_type=code&scope=identify%20guilds%20bot)\n\nInvite Link(admin): [click here](https://discord.com/api/oauth2/authorize?client_id=803210573755056188&permissions=8&redirect_uri=http%3A%2F%2Fblinkbot.ml%2Fcallback&response_type=code&scope=identify%20guilds%20bot)\n\nInvite Link(recommended): [click here](https://discord.com/api/oauth2/authorize?client_id=803210573755056188&permissions=1543892087&redirect_uri=http%3A%2F%2Fblinkbot.ml%2Fcallback&response_type=code&scope=identify%20guilds%20bot)`)
   message.inlineReply(inv)
  },
};