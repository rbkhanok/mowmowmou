module.exports = {
  config: {
    name: 'ckban',
    version: '1.0',
    author: '♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕',
    countDown: 15,
    role: 0,
    description:{ en:'Check if the bot is banned from sending media.'},
    category: 'system',
    guide: {
      en: '{pn}: Check if the bot is media banned.'
    }
  },
  onStart: async ({ message, api, event }) =>{
    const checkImageURL = "https://i.ibb.co/2ntpM69/image.jpg";  
    const checkMessage = await message.reply("Checking media ban 🐤");
    try {
      const attachment = await global.utils.getStreamFromURL(checkImageURL);
      await message.reply({
        body: "Media not banned ✅",
        attachment: attachment
      },async (error,info)=>{
      if (info) {
        message.unsend(info.messageID)
        await api.editMessage("✅ The bot's media is not banned.", checkMessage.messageID);
      } else {
await api.editMessage("❌ The bot's media has been 𝐁𝟒𝐃𝟗𝐋-𝐁𝟗𝐓___//𝟎𝟎𝟕", checkMessage.messageID);
    }
});

    } catch (error) {
      console.error("Error encountered:", error.message || error);
      await api.editMessage("❌ The bot's media has been 𝐁𝟒𝐃𝟗𝐋-𝐁𝟗𝐓___//𝟎𝟎𝟕", checkMessage.messageID);
    }
  }
};
