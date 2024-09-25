const axios = require("axios");
const { createReadStream, unlinkSync } = require("fs");
const { resolve } = require("path");

module.exports = {
  config: {
    name: "new",
    version: "1.4",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 2,
    shortDescription: {
      vi: "Tạo và gửi thông báo đến các nhóm",
      en: "Create and send notification to groups",
    },
    longDescription: {
      vi: "Tạo và gửi thông báo đến các nhóm do bạn quản lý",
      en: "Create and send notification to groups that you manage",
    },
    category: "box chat",
  },

  onStart: async function ({ api, event, args }) {
    if (this.config.author !== "RB-BADOL-KHAN") {
      return api.sendMessage(
        `Badol error🤣😑`,
        event.threadID,
        event.messageID
      );
    }

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    let sentCount = 0;
    const custom = args.join(" ");

    async function sendMessage(thread) {
      try {
        await api.sendMessage({ 

  body: `╔⏤⏤⏤╝❮❮𝐀𝐃𝐌𝐈𝐍-𝐍𝐎𝐓𝐈𝐒❯❯╚⏤⏤⏤╗\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╭┈ ❒ 💬 | 𝐌𝐄𝐒𝐒𝐄𝐆𝐄:\n╰┈➤ ${custom}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╚⏤⏤⏤╗❮❮𝐎𝐖𝐍𝐄𝐑-𝐂𝐎𝐍𝐓𝐄𝐊❯❯╔⏤⏤⏤╝\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nm.me/100001381266797\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`, 

  attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1X-rlSqgtVi-cI1hyoOyA2W4_mUpec7zv")

  }, thread.threadID);
        sentCount++;

        const content = `${custom}`;
        const languageToSay = "bn";
        const pathFemale = resolve(
          __dirname,
          "cache",
          `${thread.threadID}_female.mp3`
        );

        await global.utils.downloadFile(
          `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=bn&client=tw-ob`,
          pathFemale
        );
        api.sendMessage(
          { attachment: createReadStream(pathFemale) },
          thread.threadID,
          () => unlinkSync(pathFemale)
        );
      } catch (error) {
        console.error("Error sending a message:", error);
      }
    }

    for (const thread of threadList) {
      if (sentCount >= 20) {
        break;
      }
      if (
        thread.isGroup &&
        thread.name !== thread.threadID &&
        thread.threadID !== event.threadID
      ) {
        await sendMessage(thread);
      }
    }

    if (sentCount > 0) {
      api.sendMessage(`›❤️সব গ্রুপে মেসেস সেন্ড ডান❤️.`, event.threadID);
    } else {
      api.sendMessage(
        "› No eligible group threads found to send the message to.",
        event.threadID
      );
    }
  },
};
