require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'rank',
	description: 'Know your rank in the server!',
  usage: '[user]',
	aliases: ['level', 'lvl'],
	async execute(message, args, client) {

const canvacord = require("canvacord");

 const { MessageAttachment } = require('discord.js');

const fonts = [
    { path: "./code2001.ttf", face: { family: "unicode" } } 
];

const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

        user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

    const GuildModel = require('../../models/settings');

    const IGuildModel = require('../../models/iGuild');

    let checkser = await IGuildModel.findOne({ id: user.id + message.guild.id });

if(!checkser){const usernew = new IGuildModel({ id: message.author.id })
        await usernew.save()
          
let workUser = await IGuildModel.findOne({ id: user.id + message.guild.id });
        
const nexlevel = workUser.level + 1;
const requiredXP = nexlevel;

 // v5 rank card
  const card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(2)
    .setLevel(workUser.level)
    .registerFonts(fonts)
    .setCurrentXP(workUser.xp)
    .setRequiredXP(requiredXP)
    .setStatus(user.presence.status)
    .renderEmojis(true)
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));

  const img = await card.build({ fontX: "unicode", fontY: "unicode" })
  
  return message.channel.send(new MessageAttachment(img, "rank.png"));
 // "this_thing_has_no_name.png"
}
    },
};
