const axios = require('axios');

const Badol = [
  'ai'
];

module.exports = {
  config: {
    name: 'ai',
    version: '1.0.1',
    author: 'Badol | Nazrul',
    role: 0,
    category: 'badol',
    longDescription: {
      en: 'Ai is a large language model trained by OpenAi.',
    },
    guide: {
      en: 'Ai <questions>\n\n🔎 𝗚𝘂𝗶𝗱𝗲\nAi who are you?\nAi what is Love?',
    },
  },

  langs: {
    en: {
      final: "",
      loading: '🫂আপনার প্রশ্নের উত্তর, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍🫶'
    }
  },

  onStart: async function () {},
  onChat: async function ({ api, event, args, getLang, message }) {
    try {
      const prefix = Badol.find((p) => event.body && event.body.toLowerCase().startsWith(p));

      if (!prefix) {
        return;
      }

      const prompt = event.body.substring(prefix.length).trim();

      const loadingMessage = getLang("loading");
      const loadingReply = await message.reply(loadingMessage);
      
      const response = await axios.get(`https://x9-apis-2.onrender.com/hercai?ask=${encodeURIComponent(prompt)}`);

      if (response.status !== 200 || !response.data || !response.data.answer) {
        throw new Error('Invalid or missing response from API');
      }

      const messageText = response.data.answer; 

      const finalMsg = `${messageText}`;
      api.editMessage(finalMsg, loadingReply.messageID);

      console.log('Sent answer as a reply to user');
    } catch (error) {
      console.error(`Failed to get answer: ${error.message}`);
      api.sendMessage(
        `${error.message}.`,
        event.threadID
      );
    }
  }
};
