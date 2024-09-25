const axios = require('axios');
const tinyurl = require('tinyurl');

module.exports = {
	config: {
		name: "4k",
		aliases: ["4k", "hd"],
		version: "1.0",
		author: "RB-BADOL-KHAN",
		countDown: 15,
		role: 0,
		longDescription: "Upscale your image.",
		category: "image",
		guide: {
			en: "{pn} reply to an image"
		}
	},

	onStart: async function ({ message, args, event, api }) {
		const getImageUrl = () => {
			if (event.type === "message_reply") {
				const replyAttachment = event.messageReply.attachments[0];
				if (["photo", "sticker"].includes(replyAttachment?.type)) {
					return replyAttachment.url;
				} else {
					throw new Error("💚🫰Must reply to an image.🫰💚");
				}
			} else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g) || null) {
				return args[0];
			} else {
				throw new Error("❤️🫰Reply to an image.🫰❤️");
			}
		};

		try {
			const imageUrl = await getImageUrl();
			const shortUrl = await tinyurl.shorten(imageUrl);

			message.reply("🫡Please wait🫶");

			const response = await axios.get(`https://www.api.vyturex.com/upscale?imageUrl=${shortUrl}`);
			const resultUrl = response.data.resultUrl;

			message.reply({ body: "❤️🫶4k-HD-Done🫶❤️", attachment: await global.utils.getStreamFromURL(resultUrl) });
		} catch (error) {
			message.reply("👉🤦‍♂️Error:🤦‍♂️😭" + error.message);
			// Log error for debugging: console.error(error);
		}
	}
};
