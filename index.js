
/*
  > Index.Js is the entry point of our application.

*/
ownerid = 707278485122449439;
const MoneyModel = require('./models/money');
const { connect } = require('mongoose');
const db = (process.env.MONGO);
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("./config");
const GuildSettings = require("./models/settings");
const Dashboard = require("./dashboard/dashboard");
const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'en' })

const fs = require('fs');

// We instiate the client and connect to database.
const client = new Discord.Client({
  ws: {
    intents: [
      "GUILDS",
      "GUILD_MEMBERS",
      "GUILD_MESSAGES"
    ]
  }
});

mongoose.connect(config.mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.config = config;

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();


const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

// We listen for client's ready event.
client.on("ready", async () => {
  console.log("Fetching members...");

  for (const [id, guild] of client.guilds.cache) {
    await guild.members.fetch();
  }

  console.log("Fetched members.");

  console.log(`Bot is ready. (${client.guilds.cache.size} Guilds - ${client.channels.cache.size} Channels - ${client.users.cache.size} Users)`);
  Dashboard(client);
});


// We listen for message events.
client.on("message", async (message) => {
  // Declaring a reply function for easier replies - we grab all arguments provided into the function and we pass them to message.channel.send function.
  
  const reply = (...arguments) => message.channel.send(...arguments);

  // Doing some basic command logic.
  if (message.author.bot) return;
  if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
 
  // Retriving the guild settings from database.
  var storedSettings = await GuildSettings.findOne({ gid: message.guild.id });

  if (!storedSettings) {
    // If there are no settings stored for this guild, we create them and try to retrive them again.
    const newSettings = new GuildSettings({
      gid: message.guild.id
    });
    await newSettings.save().catch(()=>{});
    storedSettings = await GuildSettings.findOne({ gid: message.guild.id });
  }

  // If the message does not start with the prefix stored in database, we ignore the message.
  if (message.content.indexOf(storedSettings.prefix) !== 0) return;

  // We remove the prefix from the message and process the arguments.
  let owner = config.owner.includes(message.author.id);

    const args = message.content.slice(storedSettings.prefix.length).trim().split(/ +/g);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(command => command.aliases && command.aliases.includes(commandName));

///Utility>>>>>>>>>>>>>>>>>>>>>>>>>
//....................................
//..................................
//..................................
//Module Utility Module Utility Module Utility

	if (!command) return;

  if(!owner && command.owneronly) return;
  
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You can not do this!');
		}
	}
let thisone = (command.ar || 1);
	if (command.args && args.length < thisone) {
		let reply = `${command.argsreason}, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${storedSettings.prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	const { cooldowns } = client;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

const k = timestamps.get(message.author.id)

if(now < expirationTime && k == 1)return;

		if (now < expirationTime) {
			timeLeft = (expirationTime - now) / 1000;

      return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.\n> wait till this message disappears and then try again!`)
  .then(msg => {
    let n = timeLeft + 2000;
                msg.delete({ timeout: n});
            });
		}
	}else{

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}}
});



client.login(config.token);
// Listening for error & warn events.
client.on("error", console.error);
client.on("warn", console.warn);

