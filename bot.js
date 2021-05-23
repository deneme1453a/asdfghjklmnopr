const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('ne dion be terbiyesiz');

	var randomDurum = [
		"Discord : discord.gg/8vkXHpdw8t",
	]

	setInterval(function() {
	  var randomMesajlari = randomDurum[Math.floor(Math.random() *randomDurum.length)]
		client.user.setActivity(randomMesajlari);

	}, 5000)
});

client.on('message', msg => {

	var channelID = [
		"845282342846332968"
	]

	if (msg.content === "31") {
		const mesaj = [
			"sj",
			"İslama dön putperest pezevenk",
			"ÖLDSMKDAJKDİASLDJKASİPĞDAS",
			"ne dion aw",
			"ayp ayp",
			"LAN AYIP OLM DENİRMİ BUNLAR",
			"OHHHHHHHHHHHH",
			"OHHHHHH RAHATLADIM LAN",
			"naber güzellik",
			"sen abdulhamiti savunmadın! 31'i savundun!",
			"yavaş hızınız 120 km",
			"VATAN HAYİNİ",
			"EHEHEHEHEHEH",
			"ne dion be terbiyesiz",
			"olur olur yiriz yiriz",
			"tövbest++",
			"ne diyon lan pzvnk",
			"hop ev nerde koçum?",
			"dalga gecmiyrsn canim?",
			"dalgami geciyrsn canim?",
			"ev boş gel gel",
			"gel beraber çekelim",
			"ııı bi sorun var. ben kızım (!)",
			"SMDAKLDĞPSALDPAKDĞSAKDA",
			"İŞÜİŞÜÖDALSJDASŞODJAŞSDMADASiSKDAJKDPSAĞD"
		];

		const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];

		const embed = new Discord.MessageEmbed()
		.setAuthor("31", "","")
		.setColor("#C27C0E")
		.setFooter(rastgelemesaj)
		msg.channel.send(embed)
	}

	if (msg.content === "h!ses") {

		const izin = "true";

		if (izin === "true"){
			client.channels.cache.get('845282342846332968').join();

			const embed = new Discord.MessageEmbed()
			.setAuthor("HAM Discord - Bilgilendirme", "","")
			.setColor("#C27C0E")
			.setFooter("Bot 845282342846332968 ID'li ses kanalına giriş yaptı.")
			msg.channel.send(embed)

			izin = "true";
		}

		if (izin === "true"){
			if (izin === "false"){
				const embed = new Discord.MessageEmbed()
				.setAuthor("HAM Discord - Bilgilendirme", "","")
				.setColor("#C27C0E")
				.setFooter("Bot herhangi bir ses kanalında yer almıyor. İşlem başarısız.")
				msg.channel.send(embed)
			}

			if (izin === "true"){
				msg.guild.me.voice.channel.leave();

				const embed = new Discord.MessageEmbed()
				.setAuthor("HAM Discord - Bilgilendirme", "","")
				.setColor("#C27C0E")
				.setFooter("Bot 845282342846332968 ID'li ses kanalından çıkış yaptı.")
				msg.channel.send(embed)

				izin = "false";
			}
		}
	}

});

client.login('ODQ2MDI2NzYzMjg4NTc2MDIw.YKph0g.xLs2E9ECA7mS7G_XfRIwoUaoA0s');
