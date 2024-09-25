const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 𝐌𝐈𝐌-𝐁𝐎𝐓___//𝟎𝟎𝟕 ]";
 
module.exports = {
  config: {
    name: "helpall",
    version: "1.17",
    author: "NTKhang", // Modified by Mohammad Vadol Chowdhury 
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "View command usage",
    },
    longDescription: {
      en: "list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },
 
  onStart: async function ({ message, args, event, threadsData, role }) {
  const { threadID } = event;
  const threadData = await threadsData.get(threadID);
  const prefix = getPrefix(threadID);
 
  if (args.length === 0) {
      const categories = {};
      let msg = "";
 
      msg += `╔═════•| 💛 |•═════╗\n★★𝐌𝐈𝐌-𝐁𝐎𝐓___//𝟎𝟎𝟕★★\n╚═════•| 💛 |•═════╝`;
 
      for (const [name, value] of commands) {
          if (value.config.role > 1 && role < value.config.role) continue;
 
          const category = value.config.category || "Uncategorized";
          categories[category] = categories[category] || { commands: [] };
          categories[category].commands.push(name);
      }
8
      Object.keys(categories).forEach(category => {
          if (category !== "info") {
              msg += `\n╭─╮\n│   ╰➤【•${category.toUpperCase()}•】`;
 
              const names = categories[category].commands.sort();
              for (let i = 0; i < names.length; i += 1) {
                  const cmds = names.slice(i, i + 1).map(item => `│${i + 1} ❯━❯: ${item}`);
                  msg += `\n${cmds.join(" ".repeat(Math.max(0, 5 - cmds.join("").length)))}`;
              }
 
              msg += `\n╰━─━─≪≫─━─━❯❯`;
          }
      });
 
      const totalCommands = commands.size;
      msg += `\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n🧿𝐓𝐎𝐓𝐀𝐋-𝐂𝐌𝐃🧿 ${totalCommands} 🧿\n\n`;
      msg += `💌 𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍-𝐂𝐎𝐍𝐓𝐄𝐊 💌\n\n`;
      msg += `🟡𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊-𝐋𝐈𝐍𝐊🟡\n\nhttps://m.me/MBC.K1NG.007\n\n⚪𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐀𝐑𝐄-𝐋𝐈𝐍𝐊⚪\n\nm.me/100001381266797\n\n🔴𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏🔴\n\nwa.me/+8801782721761\n\n▬▬▬▬▬▬▬▬▬▬▬▬`;
 
 
      const helpListImages = [
 
"https://i.imgur.com/EDxzdSp.jpeg",
"https://i.imgur.com/1qCQIIj.jpeg', ",
"https://i.imgur.com/EDxzdSp.jpeg",
"https://i.imgur.com/1qCQIIj.jpeg",
"https://i.imgur.com/EDxzdSp.jpeg",
"https://i.imgur.com/1qCQIIj.jpeg",
"https://i.imgur.com/EDxzdSp.jpeg"
];
 
 
      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];
 
 
      await message.reply({
          body: msg,
          attachment: await global.utils.getStreamFromURL(helpListImage)
      });
  } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));
 
      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";
 
        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";
 
        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);
 
        const response = `╭━─━─≪𝐀𝐋𝐋-𝐂𝐌𝐃-𝐂𝐊≫─━─━❯❯\n├─❯ Name: ${configCommand.name} \n├─❯ Description: ${longDescription} \n├─❯ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"} \n├─❯ Other names in your group: Version: ${configCommand.version || "1.0"} \n├─❯ Role: ${roleText} \n├─❯ Time per command: ${configCommand.countDown || 1}s \n├─❯ Author: ${author} \n├─❯ Usage ${usage}\n╰━─━─≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫─━─━❯❯`;
 
        await message.reply({body:response,attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1RqqLBMmEH5eQgCFrjvBnxHz1PJyilEr1")})
      }
    }
  },
};
 
function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
							    }
