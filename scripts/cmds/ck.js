const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;

module.exports = {
  config: {
    name: "ck",
    version: "0.9",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", 
    role: 0,
    shortDescription: {
      en: "View-cmd-info-check",
    },
    longDescription: {
      en: "",
    },
    category: "cmd-info-ck",
    guide: {
      en: "{p}cmd-info-check",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);
    const commandName = args[0].toLowerCase();
    const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "•𝐀𝐔𝐓𝐇𝐎𝐑 𝐍𝐎𝐓 𝐅𝐎𝐔𝐍𝐃•";
 
        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";
 
        const guideBody = configCommand.guide?.en || "•𝐍𝐎 𝐂𝐊 𝐅𝐎𝐔𝐍𝐃•";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭━─━─≪𝐀𝐋𝐋-𝐂𝐌𝐃-𝐂𝐊≫─━─━❯❯\n├─❯ Name: ${configCommand.name} \n├─❯ Description: ${longDescription} \n├─❯ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"} \n├─❯ Other names in your group: Version: ${configCommand.version || "1.0"} \n├─❯ Role: ${roleText} \n├─❯ Time per command: ${configCommand.countDown || 1}s \n├─❯ Author: ${author} \n├─❯ Usage ${usage}\n╰━─━─≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫─━─━❯❯`;

        await message.reply({body:response,attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1RqqLBMmEH5eQgCFrjvBnxHz1PJyilEr1")})
      }
  },
}; 
function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 •𝐔𝐒𝐄𝐑•";
    case 1:
      return "1 •𝐁𝐎𝐗-𝐀𝐃𝐌𝐈𝐍•";
    case 2:
      return "2 •𝐎𝐍𝐋𝐈-𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍•";
    default:
      return "•𝐍𝐎𝐓-𝐅𝐎𝐔𝐍𝐃•";
  }
}
