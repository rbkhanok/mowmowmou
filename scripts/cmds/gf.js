const axios = require("axios");

module.exports.config = {
  name: "gf",
  aliases: [],
  version: "1.0.0",
  role: 0, 
  author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", 
  description: "Gf ai chat",
  usePrefix: true,
  guide: "[message]",
  category: "Ai",
  countDown: 5,
};

module.exports.onReply = async function ({ api, event, Reply }) {
  const { author } = Reply;
  if(author != event.senderID) return;
  if (event.type == "message_reply") {
  const reply = event.body.toLowerCase();
  if (isNaN(reply)) {
    try {
    const response = await axios.get(`https://gf-ai.vercel.app/api/gfai?q=${encodeURIComponent(reply)}`);
    const ok = response.data.message;
   await api.sendMessage(ok, event.threadID, (errr, info) => {
 global.GoatBot.onReply.set(info.messageID, {
   commandName: this.config.name,
   type: 'reply',
   messageID: info.messageID,
   author: event.senderID,
   link: ok
 })
}, event.messageID);
    } catch (err) {
      console.log(error.message);
      api.sendMessage(`Error: ${err.message}`);
    }
  }
  }
}
module.exports.onStart = async function ({ api, args, event }) {
  try {
    const author = event.senderID;
    const badoll = args.join(" ").toLowerCase();
    if (!args[0]) {
      return api.sendMessage(
        "অনুগ্রহ করে উত্তর দেওয়ার জন্য একটি প্রশ্ন দিন\n\nExample:\n.gf hlw",
  event.threadID,  event.messageID);
}
    if (badoll) {
      const response = await axios.get(`https://gf-ai.vercel.app/api/gfai?q=${encodeURIComponent(badoll)}`);
         const mg = response.data.message;
      await api.sendMessage({ body: mg }, event.threadID, (error, info) => {
  global.GoatBot.onReply.set(info.messageID, {
    commandName: this.config.name,
    type: 'reply',
    messageID: info.messageID,
    author,
    link: mg
  });
      }, event.messageID);
    }
  } catch (error) {
    console.log(`Failed to get an answer: ${error.message}`);
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};
