const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: 'tid',
    version: '1.3',
    role: 0,
    author: 'RB-BADOL-KHAN',
    category: 'thread',
    shortDescription: {
      en: 'Get the thread ID',
    },
    longDescription: {
      en: 'Get the thread ID of the current thread.',
    },
  },
  onStart: async function ({ api, event, args, message }) {
    try {
      const threadID = event.threadID;
      const threadInfo = await api.getThreadInfo(threadID);
      const threadName = threadInfo.threadName || 'Unnamed Thread';
      const threadImage = threadInfo.imageSrc;
      const threadLink = ``;
      let inviteLink;

      if (threadInfo.inviteLink && threadInfo.inviteLink.enable) {
        inviteLink = threadInfo.inviteLink.link;
      } else if (threadInfo.inviteLink) {
        inviteLink = 'Invite link feature is disabled for this group.';
      } else {
        inviteLink = 'Invite link not available.';
      }

      // Prepare the base message
      let threadIDMessage = `╭━─━──━─━≪𝐁𝐎𝐗-𝐈𝐃≫━──━─━─━❯❯\n│\n│𝐓𝐇𝐑𝐄𝐀𝐃-𝐍𝐀𝐌𝐄: ${threadName}\n│\n│𝐓𝐇𝐑𝐄𝐀𝐃-𝐈𝐃: ${threadID}\n│\n╰━─━──━─━≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫━──━─━─━❯❯`;

      if (threadImage) {
        // Fetch the thread image
        const response = await axios.get(threadImage, { responseType: 'arraybuffer' });
        const imagePath = path.resolve(__dirname, 'threadImage.jpg');
        fs.writeFileSync(imagePath, response.data);

        // Send message with image attachment
        await api.sendMessage(
          {
            body: threadIDMessage,
            attachment: fs.createReadStream(imagePath)
          },
          threadID
        );

        // Remove the temporary image file
        fs.unlinkSync(imagePath);
      } else {
        // Send message without image attachment
        message.reply(threadIDMessage);
      }
    } catch (error) {
      console.error("Error fetching thread info:", error);
      message.reply("An error occurred while retrieving thread information. Please try again later.");
    }
  }
};
