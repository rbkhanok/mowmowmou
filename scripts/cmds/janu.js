const fs = require("fs-extra");
const axios = require("axios");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "janu",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In English/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function({}) {},

  onChat: async function({ api, event, args, Threads, userData }) {
    var { threadID, messageID, senderID, body } = event;
    const time = moment.tz("Asia/Dhaka").format("hh:mm:ss L");

    var messages = [
      "বেশি mim mim করলে চুম্মা দিয়া তোমার কিডনি ব্লক করে দেবো😒",
      "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺",
      "আমাকে এতো না ডেকে বস রাজা বাবু কে একটা গফ দে 🙄"
    ];
    var rand = messages[Math.floor(Math.random() * messages.length)];

    var msg = {
      body: `${rand}`
    };

    if (body && body.toLowerCase().startsWith(" Jan")||body && body.toLowerCase().startsWith("jan")||body && body.toLowerCase().startsWith("Janu")) {
      const input = args.join(' ');
      if (!input) {
        return api.sendMessage(msg, threadID, messageID);
      }

      try {
        const response = await axios.get(`http://37.27.114.136:25472/sim?type=ask&ask=${encodeURIComponent(input)}`);
        const reply = response.data.data.msg;

        api.sendMessage({ body: reply }, threadID, messageID);
      } catch (error) {
        api.sendMessage({ body: "An error occurred while fetching the response." }, threadID, messageID);
      }
    }
  }
};
