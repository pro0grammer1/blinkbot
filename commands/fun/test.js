require("../../scripts/ExtendedMessage");
const { registerFont, Canvas, createCanvas, loadImage } = require('canvas');
const { Client, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
registerFont('./code2001.ttf', { family: 'code-2001' })
module.exports = {
	name: 'test',
	description: 'test command',
	aliases: ['<@707278485122449439>', 'discord'],
  cooldown: '2',
	async execute(message, args, client) {
   const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');
	let fontSize = 70;
  const MessageAttachment = require("discord.js");

	do {
		context.font = `${fontSize -= 10}px code-2001`;
	} while (context.measureText(text).width > canvas.width - 300);

	return context.font;
};

const canvas = createCanvas(700, 250);
	const context = canvas.getContext('2d');

	const background = await loadImage('https://i.ibb.co/HTQRx8J/wallpaper-1.jpg');
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	context.strokeStyle = '#74037b';
	context.strokeRect(0, 0, canvas.width, canvas.height);

	context.font = '28px sans-serif';
	context.fillStyle = '#ffffff';
	context.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	context.font = applyText(canvas, `${message.author.username}!`);
	context.fillStyle = '#ffffff';
	context.fillText(`${message.author.username}!`, canvas.width / 2.5, canvas.height / 1.8);

	context.beginPath();
	context.arc(125, 125, 100, 0, Math.PI * 2, true);
	context.closePath();
	context.clip();

	const avatar = await loadImage(message.author.displayAvatarURL({ format: 'jpg' }));
	context.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(`Welcome to the server, ${message.author}!`, attachment);
  }
  };