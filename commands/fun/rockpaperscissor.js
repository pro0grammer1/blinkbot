require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'rockpaperscissor',
	description: 'Play A game of Rock Paper Scissor',
  args: true,
  argsreason: "Invalid usage",
  usage: '<mention | rock | paper | scissor>',
	aliases: ['stopasci', 'rps'],
	async execute(message, args, client) {

        let opponent = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    const GameModel = require('../../models/game');

    const alrUser = await GameModel.findOne({ id: message.author.id });
if(alrUser){
  //nothing...
}else{
    const usernew = new GameModel({ id: message.author.id })
        await usernew.save();
}

    let user = await GameModel.findOne({ id: message.author.id });
    
    if(!opponent && user.isPlayingrps) return message.channel.send("Not a valid command");

    if(opponent && user.isPlayingrps)return message.channel.send("Complete your game first, dummy or type \`exit rps\` To leave this game.");

    if(!opponent && !user.isPlayingrps)return message.channel.send("That user doesn't exist, did you ate em?")
 
let rudebed = new Discord.MessageEmbed()
.setTitle("")
.setDescription(`Hey kiddo, stop joking around. you can't invite yourself to play.\n\n<< [return](${message.url}) back`)
.setColor("#9c57f7");

   if(opponent.id == message.author.id)return message.author.send(rudebed);

try{
    message.channel.send(":email: Invite Sent!\n> User has 1 minute to respond.");
     
     let newbed = new Discord.MessageEmbed()
.setTitle(`Invitation by ${message.author.username}`)
.setDescription(`You recieved an invitation [here](${message.url}), ${message.author.username} has invited you to join a game of Rock Paper Scissor\n\n> React with respective emoji to continue!`)
.setColor("#9c57f7");

 let liv = await message.opponent.send(newbed)
 
	await liv.react('✅');
  await liv.react('❌');}catch{
  message.reply("Unable to send invite to author on dm, encountered an error.\n\n> Check if author can be dm'ed.")
 }
    },
};