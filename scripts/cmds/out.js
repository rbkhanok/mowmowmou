const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "left",
		aliases: ["l"],
		version: "1.0",
		author: "RB-BADOL-KHAN",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('•𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕•\n》তোমাদের গ্রুপে না থাকলে আমার বাল ছেড়া গেলো😑\n\n🤘ওকে বাই🍆🤘', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
