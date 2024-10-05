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
    const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
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

      let B4D9LM1M = `■━■━■━■━■━■━■━■━■\n\n╔╝❮❮𝙼𝙸𝙼-𝙱𝙾𝚃-𝟶𝟶𝟽❯❯╚╗\n\n ╔═════•| 💛 |•═════╗\n ║║𝙼𝙸𝙼-𝙱𝙾𝚃---𝙲𝙼𝙳-𝙻𝙸𝚂𝚃║\n ╚═════•| 💛 |•═════╝\n\n╭═════✰𝙱𝟺𝙳𝟿𝙻✰═════╮\n`;
      let currentCategory = "";
      let commandIndex = (page - 1) * commandsPerPage;
      let commandNumber = (page - 1) * commandsPerPage + 1;

      for (let i = 0; i < commandsPerPage && commandIndex < commandNames.length; i++) {
        const commandName = commandNames[commandIndex];
        const command = commands[commandName];

        if (command.config.category !== currentCategory) {
          currentCategory = command.config.category;
          B4D9LM1M += `│▬▬▬▬▬▬▬▬▬▬▬▬\n│`;
        }

        B4D9LM1M += ` ➥ ${commandNumber}${commandNumber < 10 ? " " : ""} ✧𝙲𝙼𝙳-𝙽𝙰𝙼𝙴✧【•${command.config.name}•】\n`;
        commandIndex++;
        commandNumber++;
      }

      B4D9LM1M += `│▬▬▬▬▬▬▬▬▬▬▬▬\n╰═════✰𝙱𝟺𝙳𝟿𝙻✰═════╯\n\n ■□■□■□■□■□■□■□■\n\n╭──╯𝙰𝚍𝚖𝚒𝚗-𝚌𝚘𝚗𝚝𝚎𝚔╰──╮\n│\n│✿𝚃𝙾𝚃𝙰𝙻: 【•${global.GoatBot.commands.size}•】 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂❖\n│\n│✿𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻❖\n│\n│https://bio.link/mohammadbadal009\n│\n│m.me/100001381266797\n│\n╰──╮𝙰𝚍𝚖𝚒𝚗-𝚌𝚘𝚗𝚝𝚎𝚔╭──╯\n \n■□■□■□■□■□■□■□■\n\n`;

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
