module.exports = {
    config: {
        name: "eta",
        aliases: ["owner", "owners"],
        version: "1.2",
        author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",//**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
        countDown: 5,
        role: 0,
        shortDescription: {
            en: "mohammad-badol"
        },
        longDescription: {
            en: "get information."
        },
        category: "B4D9L-B9T-007",
        guide: {
            en: "{pn}"
        }
    },

  onStart: async function () {},

  onStart: async function ({ event, message, getLang, usersData, threadsData }) {

      const data = await usersData.get(event.senderID);

      const name = data.name;

      const thread = await threadsData.get(event.threadID);

      const threadName = thread.threadName;

      const currentDate = new Date();

      const options = { year: "numeric", month: "numeric", day: "numeric" };

      const date = currentDate.toLocaleDateString("en-US", options);

      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

      const img = `https://graph.facebook.com/100001381266797/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

      const msg = `╔╝❮${name}❯╚╗\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝙷𝚎𝚕𝚕𝚘 𝚋𝚛𝚘 𝚝𝚑𝚒𝚜 𝚒𝚜 𝚖𝚢 𝚘𝚛𝚒𝚐𝚒𝚗𝚊𝚕 𝚘𝚠𝚗𝚎𝚛 𝚌𝚕𝚒𝚌𝚔 𝚋𝚎𝚕𝚘𝚠 𝚕𝚒𝚗𝚔 𝚝𝚘 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚘𝚠𝚗𝚎𝚛 𝚝𝚑𝚊𝚗𝚔𝚜\n▬▬▬▬▬▬▬▬▬▬▬▬\nhttps://m.me/MBC.K1NG.007\nm.me/100001381266797\nhttps://bio.link/mohammadbadal009\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝙱𝙳-𝚃𝙸𝙼𝙴:【 ${date} || ${time} \n▬▬▬▬▬▬▬▬▬▬▬▬`;

      message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  };
