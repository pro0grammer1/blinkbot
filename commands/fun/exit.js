require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'exit',
	description: 'Used to exit a particular ongoing game',
  args: true,
  argsreason: "Some game must be provided to exit from",
  usage: '<game>',
	aliases: ['cancel'],
	async execute(message, args, client) {
     const GameModel = require('../../models/game');

    const alrUser = await GameModel.findOne({ id: message.author.id });
if(alrUser){
       const GameModel = require('../../models/game');

    let user = await GameModel.findOne({ id: message.author.id });
    
    if(args[0] == "rps" || args[0] == "rockpaperscissor" || args[0] == "stopasci"){
      if(user.isPlayingrps){const GameModel = require('../../models/game');

    let user = await GameModel.findOne({ id: message.author.id });
    
    message.channel.send(`Cancelled Game :-1:.\n\nYou lost your streak of ${user.rgwon} games.`)
         const give = GameModel.findOne({ id: message.author.id })
 .then(doc => GameModel.updateOne({ id: message.author.id }, { isPlayingrps:false }, {rstreak: '0'}));}
 else{
   message.channel.send("you weren't playing a game?");
 }
    }else{
    message.channel.send("Hey newbie, you have played no game till now to exit from!")
}}
},
};