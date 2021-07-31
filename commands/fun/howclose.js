require("../../scripts/ExtendedMessage");
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
	name: 'howclose',
	description: 'Get to know how close two people are, (OwOゞ)',
  args: true,
  argsreason: 'You need to gimme two people to tell about',
  ar: 2,
  usage: '<mention> <mention>',
	aliases: ['close', 'hc'],
	async execute(message, args, client) {
    const userArray =  message.mentions.users.array();
try{
    person1 = userArray[0].username;
    person2 = userArray[1].username;}catch{return message.channel.send("Unable to fetch em.")}

if(person1 === undefined) return message.channel.send("I can only compare two person who exist in server. ~~No ghosts allowed~~");
if(person2 === undefined) return message.channel.send("I can only compare two person who exist in server. ~~No ghosts allowed~~");

let date1 = userArray[0].joinedAt;
let date2 = userArray[1].joinedAt;

const { Message, Embed} = require("discord.js");

      let brownBread = new Discord.MessageEmbed()
      .setTitle("Calculating \>\>\>")
      .setDescription(`**Relation in Username →**\n  Relation between ${args[0]} and ${args[1]} is like ${random.this} for ${random.that}`)
      message.channel.send(brownBread)
    //(〃ω〃)

    },
};