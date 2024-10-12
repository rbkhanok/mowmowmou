const axios = require("axios");

module.exports = {
  config: {
    name: "video2",
    aliases: ["Video2", "ভিডিও2"],
    version: "1.2",
    author: "MOHAMMAD-BADOL",
    countDown: 5,
    role: 0,
    description: { en: "all video" },
    category: "B4D9L-B9T-007",
    guide: { en: "{pn}" }
  },
  onStart: async ({ message, event, commandName }) => {
    const { data: { badollls } } = await axios.get(`https://raw.githubusercontent.com/Badol-bot-007/Badol-bot-007/refs/heads/main/badol-vai2.json`);
    let replyText = "╭──〔𝙼𝙸𝙼-𝙱𝙾𝚃-𝟶𝟶𝟽〕──╮\n\nআপনার পছন্দের ভিডিও দেখতে একটি নাম্বারে রিপ্লাই করুন:\n\n╰──〔𝙼𝙸𝙼-𝙱𝙾𝚃-𝟶𝟶𝟽〕──╯\n\n";
    badollls.forEach(badol => replyText += `${badol.number}. ${badol.name}\n`);

    message.reply({ body: replyText }, (err, info) => {
      if (!err) global.GoatBot.onReply.set(info.messageID, { commandName, messageID: info.messageID, author: event.senderID, badollls, type: "reply" });
    });
  },
  onReply: async ({ message, event, Reply, args }) => {
    if (event.senderID != Reply.author) return;
    const selected = Reply.badollls.find(badol => badol.number === parseInt(args[0]));
    if (selected) {
      const randomVerse = selected.verses[Math.floor(Math.random() * selected.verses.length)];
      message.reply({ body: `𝙼-𝙱-𝙲 ${selected.name}`, attachment: await global.utils.getStreamFromURL(randomVerse) });
    } else {
      message.reply({ body: "এইটা🙂অবৈধ ভিডিও নাম্বর।" });
    }
  }
};
