module.exports = {
	config: {
		name: "cover7",
		aliases: ["dp7"],
		author: '★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★',
		countDown: 5,
		role: 0,
		category: "facebook cover",
		shortDescription: {
			en: 'Make a fbcover',
		},
	},
	circle: async function (path) {
		const { loadImage, createCanvas } = require("canvas");
		let img = await loadImage(path);
		let canvas = createCanvas(img.width, img.height);
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
		ctx.closePath();
		ctx.clip();
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		return canvas.toBuffer();
	},
	onStart: async function ({ api, event, args, usersData }) {
		const jimp = require("jimp");
		const { loadImage, createCanvas } = require("canvas");
		const request = require('request');
		const fs = require("fs-extra");
		const axios = require("axios");

		let { senderID, threadID, messageID } = event;
		let pathImg = __dirname + `/cache/${senderID}.png`;
		let pathAva = __dirname + `/cache/avtuser.png`;
		let text = args.join(" ");

		if (!text) return api.sendMessage('❤🫰 এই ভাবে ট্রাই করুন🫰❤\n\n.cover7 Mohammad Badol - 01782****61 - badol@007.com - Bangladesh', threadID, messageID);

		const texts = text.split(" - ");
		if (texts.length !== 4) return api.sendMessage('❤🫰 এই ভাবে ট্রাই করুন🫰❤\n\n.cover7 Mohammad Badol - 01782****61 - badol@007.com - Bangladesh', threadID, messageID);

		const [text1, text2, text3, text4] = texts;

		let Avatar = (
			await axios.get(
				`https://graph.facebook.com/${senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
				{ responseType: "arraybuffer" }
			)
		).data;

		let getWanted = (
			await axios.get(encodeURI(`https://i.imgur.com/AABNxup.jpeg`), {
				responseType: "arraybuffer",
			})
		).data;

		fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
		avatar = await this.circle(pathAva);
		fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));

		let baseImage = await loadImage(pathImg);
		let baseAva = await loadImage(avatar);

		let canvas = createCanvas(baseImage.width, baseImage.height);
		let ctx = canvas.getContext("2d");

		ctx.drawImage(baseImage, 0, 0, 850, 480);
		ctx.drawImage(baseAva, 500, 100, 283, 283);


		ctx.font = "bold 25px Manrope";
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(text1, 265, 120);

		ctx.font = "25px Manrope";
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(text2, 265, 220);

		ctx.font = "25px Manrope";
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(text3, 265, 260);
        
        ctx.font = "25px Manrope";
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(text4, 265, 300);


		const imageBuffer = canvas.toBuffer();
		fs.writeFileSync(pathImg, imageBuffer);
		fs.removeSync(pathAva);

		return api.sendMessage(
			{ attachment: fs.createReadStream(pathImg) },
			threadID,
			() => fs.unlinkSync(pathImg),
			messageID
		);
	},
};
