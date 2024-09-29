const fs = require('fs');
const path = require('path');
const { getPrefix } = global.utils;

module.exports = {
  config: {
    name: "help",
    version: "1.0",
    author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
    role: 0,
    category: "help",
    shortDescription: "see the available commands",
    guide: {
      en: "{pn} <page number> | <command name>]"
    }
  },

  onStart: async function ({ api, message, args, event, threadsData, getLang }) {
    const obfuscatedAuthor = String.fromCharCode(77, 79, 72, 65, 77, 77, 65, 68, 45, 66, 65, 68, 79, 76);
    if (this.config.author !== obfuscatedAuthor) {
      return api.sendMessage("Fuck you credit changers type \n Author Name: MOHAMMAD-BADOL \n commands working will do", event.threadID, event.messageID);
    }
    const langCode = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;
    const { threadID } = event;
    const prefix = getPrefix(threadID);

    const commands = await getCommandsFromDir(path.join(__dirname, '..', 'cmds'));
    const commandNames = Object.keys(commands);

    if (args[0] && isNaN(parseInt(args[0]))) {
      const commandName = args[0];
      const command = commands[commandName];

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "•𝙰𝚄𝚃𝙷𝙾𝚁-𝙽𝙾𝚃-𝙵𝚄𝙽𝙳•";
 
        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";
 
        const guideBody = configCommand.guide?.en || "•𝙽𝙾-𝙲𝙺-𝙵𝚄𝙼𝙳•";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭──〔𝙰𝙻𝙻-𝙲𝙼𝙳-𝙲𝙺〕──╮\n├─❯ Name: ${configCommand.name} \n├─❯ Description: ${longDescription} \n├─❯ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"} \n├─❯ Other names in your group: Version: ${configCommand.version || "1.0"} \n├─❯ Role: ${roleText} \n├─❯ Time per command: ${configCommand.countDown || 1}s \n├─❯ Author: ${author} \n├─❯ Usage ${usage}\n╰──〔𝙼𝙸𝙼-𝙱𝙾𝚃-𝟶𝟶𝟽〕──╯`;

        await message.reply({body:response,attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1RqqLBMmEH5eQgCFrjvBnxHz1PJyilEr1")})
      }
function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 •𝚄𝚂𝙴𝚁•";
    case 1:
      return "1 •𝙱𝙾𝚇-𝙰𝙳𝙼𝙸𝙽•";
    case 2:
      return "2 •𝙾𝙽𝙻𝙸-𝙱𝙾𝚃-𝙰𝙳𝙼𝙸𝙽•";
    default:
      return "•𝙽𝙾𝚃-𝙵𝚄𝙽𝙳•";
  }
}
    } else {
      const page = parseInt(args[0]) || 1;
      const commandsPerPage = 10; 
      const totalPages = Math.ceil(commandNames.length / commandsPerPage);

      if (page < 1 || page > totalPages) {
        return message.reply(getLang("pageNotFound", page));
      }

      let B4D9LM1M = `▬▬▬▬▬▬▬▬▬▬▬▬\n╔╝❮❮𝙼𝙸𝙼-𝙱𝙾𝚃-𝟶𝟶𝟽❯❯╚╗\n\n ╔═════•| 💛 |•═════╗\n ║║𝙼𝙸𝙼-𝙱𝙾𝚃-𝙲𝙼𝙳-𝙻𝙸𝚂𝚃║║\n ╚═════•| 💛 |•═════╝\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n`;
      let currentCategory = "";
      let commandIndex = (page - 1) * commandsPerPage;
      let commandNumber = (page - 1) * commandsPerPage + 1;

      for (let i = 0; i < commandsPerPage && commandIndex < commandNames.length; i++) {
        const commandName = commandNames[commandIndex];
        const command = commands[commandName];

        if (command.config.category !== currentCategory) {
          currentCategory = command.config.category;
          B4D9LM1M += `\n╔═➳➳➳➳➳⋇⊶┫\n║\n╚═❯❯`;
        }

        B4D9LM1M += `【•${commandNumber}${commandNumber < 10 ? " " : ""} ✧𝙲𝙼𝙳-𝙽𝙰𝙼𝙴✧【•${command.config.name}•】\n\n`;
        commandIndex++;
        commandNumber++;
      }

      B4D9LM1M += `\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n╔═ ✰ ═ ✮.·:·.✮ ═ ✰ ═╗\n│\n│✿𝚃𝙾𝚃𝙰𝙻: 【•${global.GoatBot.commands.size}•】 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂❖\n│\n│✿𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻❖\n│\n│https://bio.link/mohammadbadal009\n│\n│m.me/100001381266797\n│\n╚═ ✰ ═ ✮.·:·.✮ ═ ✰ ═╝\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n`;

      message.reply({
        body: B4D9LM1M,
        attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1X-rlSqgtVi-cI1hyoOyA2W4_mUpec7zv")
      });
    }
  }
};

async function getCommandsFromDir(dir) {
  const commands = {};
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    if (file.endsWith('.js') && file !== 'help.js') {
      const filePath = path.join(dir, file);
      const command = require(filePath);
      commands[command.config.name] = command;
    }
  }

  return commands;
      }
