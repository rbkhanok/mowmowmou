module.exports.config = {
	name: "h",
	version: "1.0.1",
	role: 0,
	author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
	description: "Get Voice",
	category: "media",
	usages: "[hi] [Text]",
	countDowns: 5,
	dependencies: {
		"path": "",
		"fs-extra": ""
	}
};

module.exports.onStart = async function({ api, event, args }) {
	try {
		const { createReadStream, unlinkSync } = require('fs-extra');
		const { resolve } = require('path');
		var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
		var languageToSay = (["hi",].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : global.GoatBot.config.language;
		var msg = (languageToSay != global.GoatBot.config.language) ? content.slice(3, content.length) : content;
		const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
		await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=Hi&client=tw-ob`, path);
		return api.sendMessage({ attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path));
	} catch (e) { return console.log(e) };
}
