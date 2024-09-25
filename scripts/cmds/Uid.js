module.exports = {
  config: {
    name: "uid",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", // meant author  by mbc k1ng 007
    countDown: 5,
    role: 0,
    shortDescription: "uid & user",
    longDescription: "uid info",
    category: "auto✅image",
  },

   onStart: async function ({ event, message, usersData, api, args, getLang }) {
    let avt;
    const uid1 = event.senderID;
    const uid2 = Object.keys(event.mentions)[0];
    let uid;

    if (args[0]) {
      // Check if the argument is a numeric UID
      if (/^\d+$/.test(args[0])) {
        uid = args[0];
      } else {
        // Check if the argument is a profile link
        const match = args[0].match(/(\d+)/);
        if (match) {
          uid = match[1];
        }
      }
    }

    if (!uid) {
      // If no UID was extracted from the argument, use the default logic
      uid = event.type === "message_reply" ? event.messageReply.senderID : uid2 || uid1;
    }

    api.getUserInfo(uid, async (err, userInfo) => {
      if (err) {
        return message.reply("Failed to retrieve user information.");
      }

      const avatarUrl = await usersData.getAvatarUrl(uid);

      // Gender mapping
      let genderText;
      switch (userInfo[uid].gender) {
        case 1:
          genderText = "Girl";
          break;
        case 2:
          genderText = "Boy";
          break;
        default:
          genderText = "Unknown";
      }

      // Construct and send the user's information with avatar
      const userInformation = `╔╝❮ 𝐔𝐈𝐃-𝐔𝐒𝐄𝐑 ❯╚╗\n━━━━━━━━━━━━━━━━━━\n❯━❯ 𝐍𝐚𝐦𝐞: ${userInfo[uid].name}\n❯━❯ 𝐔𝐢𝐝: ${uid || null}\n❯━❯ 𝐌𝐫: m.me/${uid || null}\n❯━❯ 𝐅𝐛: ${userInfo[uid].profileUrl}\n━━━━━━━━━━━━━━━━━━\n`;

 message.reply({
        body: userInformation,
        attachment: await global.utils.getStreamFromURL(avatarUrl)
      });
    });
  }
};
