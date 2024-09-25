const axios = require("axios");

module.exports = {
    config: {
        name: "dua",
        aliases: ["duya", "sura"],
        version: "1.2",
        author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",//**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
        countDown: 5,
        role: 0,
        shortDescription: {
            en: "mohammad-badol"
        },
        longDescription: {
            en: "Islamic dua & sura"
        },
        category: "B4D9L-B9T-007",
        guide: {
            en: "{pn}"
        }
    },
  onStart: async function({ message, event, commandName }) {
    const { data: badolData } = await axios.get(`https://raw.githubusercontent.com/Badol-bot-007/Badol-bot-007/refs/heads/main/badol-vai.json`);

    let replyText = "আপনার পছন্দের দোয়াটি দেখতে নিচের দেওয়া নাম্বারে রিপ্লাই করুন:\n\n";
    badolData.badolls.forEach(badol => {
      replyText += `${badol.number}. ${badol.name}\n`;
    });
    message.reply({
      body: replyText
    }, (err, info) => {
      if (err) return console.error("Error replying with badol list:", err);
      global.GoatBot.onReply.set(info.messageID, {
        commandName,
        messageID: info.messageID,
        author: event.senderID,
        badolData,
        type: "reply"
      });
    });
  },
  onReply: async function({ message, event, Reply, args }) {
    let { author, badolData } = Reply;
    if (event.senderID != author) return;
    const badolNumber = parseInt(args[0]);
    const selectedBadol = badolData.badolls.find(badol => badol.number === badolNumber);
    if (selectedBadol) {
      let versesText = `𝐌-𝐁-𝐂 ${selectedBadol.name}:\n\n`;
      selectedBadol.verses.forEach((verse, index) => {
        versesText += `${index + 1}. ${verse}\n`;
      });
      message.reply({
        body: versesText
      });
    } else {
      message.reply({
        body: "🙂অবৈধ দুআ নম্বর। দয়া করে একটি বৈধ দুআ নম্বর দিয়ে উত্তর দিন😒"
      });
    }
  }
};
