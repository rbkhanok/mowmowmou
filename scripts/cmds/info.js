module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", // meant author  by mbc k1ng 007
    countDown: 5,
    role: 0,
    shortDescription: "admin and info",
    longDescription: "bot owner info",
    category: "auto ✅",
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

      const msg = `╔╝❮${name}❯╚╗\n━━━━━━━━━━━━━━━━━━━━━━\n𝐍𝐀𝐌𝐄: 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐁𝐀𝐃𝐎𝐋\n𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐈𝐒𝐋𝐀𝐌\n𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝐊𝐇𝐔𝐋𝐍𝐀\n𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄\n𝐀𝐆𝐄: 𝟐𝟕\n𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: 𝐌𝐀𝐑𝐑𝐄𝐃\n𝐖𝐎𝐑𝐊: 𝐉𝐎𝐁\n𝐆𝐌𝐀𝐈𝐋: mohammadbadal757@gmail.com\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://m.me/MBC.K1NG.007 \n𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑: m.me/100001381266797\n𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801782721761\n𝐈𝐌𝐎: 01782-721761\n𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: @BADOL_VAI_TERA_REAL_ABBU_OK\n━━━━━━━━━━━━━━━━━━━━━━\n\nBot Prefix: ( . )\nBot Name: 𝐌𝐈𝐌-𝐁𝐎𝐓___//𝟎𝟎𝟕\ngc Name: ${threadName}\nTime:【 ${date} || ${time} \n━━━━━━━━━━━━━━━━━━━━━━`;

      message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  };
