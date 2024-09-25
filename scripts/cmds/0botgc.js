let storedGroupList = [];
let groupListMessageID = null;

module.exports = {
  config: {
    name: "supportgc",
    aliases: ["addgc", "botgc"],
    version: "1.1",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
    countDown: 5,
    role: 0,
    Description: {
      en: "join my supportgc"
    },
    category: "Support Group",
    guide: {
      en: "{pn} add to supportgc reply to number"
    }
  },

  onStart: async function ({ api, event, message, args }) {
    const supportGroups = [
      { id: "7040622742634726" },
      { id: "5933104006780474" }
      // Add more groups as needed
    ];

    if (!args[0]) {
      let groupListMessage = "╔╝❮𝐉𝐎𝐈𝐍-𝐌𝐘-𝐒𝐔𝐏𝐏𝐑𝐎𝐓-𝐆𝐂❯╚╗\n\n";
      storedGroupList = [];
      for (let i = 0; i < supportGroups.length; i++) {
        const group = supportGroups[i];
        try {
          const threadInfo = await api.getThreadInfo(group.id);
          group.name = threadInfo.threadName || "Unnamed Group";
          group.memberCount = threadInfo.participantIDs.length;
          storedGroupList.push(group);
          groupListMessage += `━━━━━━━━━━━━━━━━\n${i + 1}. 𝐆𝐂-𝐍𝐀𝐌𝐄: ${group.name}\n`;
        } catch (error) {
          groupListMessage += `━━━━━━━━━━━━━━━━\n${i + 1}. 𝐆𝐂-𝐍𝐀𝐌𝐄: 𝐍𝐀𝐈🤦‍♂ (Error fetching info)\n━━━━━━━━━━━━━━━━\n 𝐆𝐂-𝐈𝐃: ${group.id}\n━━━━━━━━━━━━━━━━\n`;
          console.error("Error fetching group info:", error);
        }
      }

      const msgInfo = await message.reply({body:groupListMessage,attachment: await global.utils.getStreamFromURL("https://i.imgur.com/dFrIFH4.jpeg")})
      groupListMessageID = msgInfo.messageID;
      console.log("Group list message ID:", groupListMessageID);

      global.GoatBot.onReply.set(groupListMessageID, {
        commandName: module.exports.config.name,
        type: "groupSelection",
        author: event.senderID,
      });

      return;
    }

    const selectedGroupIndex = parseInt(args[0], 10) - 1;
    if (isNaN(selectedGroupIndex) || selectedGroupIndex < 0 || selectedGroupIndex >= supportGroups.length) {
      return message.reply("অবৈধ গ্রুপ নম্বর। একটি বৈধ গ্রুপ নির্বাচন করুন");
    }

    const selectedGroup = supportGroups[selectedGroupIndex];
    await joinGroup(api, message, selectedGroup, event);
  },

  onReply: async function ({ api, event, Reply }) {
    const { type, author } = Reply;

    if (event.senderID !== author) return;

    if (type === "groupSelection") {
      const selectedGroupIndex = parseInt(event.body.trim()) - 1;

      if (isNaN(selectedGroupIndex) || selectedGroupIndex < 0 || selectedGroupIndex >= storedGroupList.length) {
        return api.sendMessage("😞অবৈধ নির্বাচন। একটি বৈধ নম্বর দিয়ে উত্তর দিন🙁", event.threadID, event.messageID);
      }

      const selectedGroup = storedGroupList[selectedGroupIndex];
      await joinGroup(api, { reply: (msg) => api.sendMessage(msg, event.threadID, event.messageID) }, selectedGroup, event);
    }
  }
};

async function joinGroup(api, message, selectedGroup, event) {
  try {
    const botID = await api.getCurrentUserID();
    const senderName = event.senderName || (await api.getUserInfo(event.senderID))[event.senderID].name;

    // Get group information including members
    const { participantIDs: members } = await api.getThreadInfo(selectedGroup.id);

    // Check if the user is already in the group
    const userAlreadyInGroup = members.includes(event.senderID);

    if (userAlreadyInGroup) {
      const alreadyInGroupMessage = `🙄আপনি অলরেডি সাপোর্ট গ্রুপে এড আছেন😐 \n${selectedGroup.name} `;
      return message.reply({body:alreadyInGroupMessage,attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Ty6kEpv.gif")})
    }

    await api.addUserToGroup(event.senderID, selectedGroup.id);
    const successMessage = `😊আপনাকে সাপোর্ট  গ্রুপে এড করা হলো আপনার স্প্যাম  বক্স বা ইনবক্স চেক করুন 🙂\n ${selectedGroup.name}.`;
    return message.reply({body:successMessage,attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Ty6kEpv.gif")})
  } catch (error) {
    const failedMessage = `😑নলা মার্কা আইডি সাপোর্ট গ্রুপে এড দেয় ন☹: ${error.message}`;
    console.error("Error adding user to support group:", error);
    return message.reply({body:failedMessage,attachment: await global.utils.getStreamFromURL("https://i.imgur.com/o1UuuPW.gif")})
  }
}
