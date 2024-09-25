const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "stats",
    aliases: ["stat","time"],
    version: "1.0",
    author: "RB-BADOL-KHAN",
    role: 0,
    shortDescription: {
      en: "stats",
    },
    longDescription: {
      en: "shows stats of bot.",
    },
    category: "system",
    guide: {
      en: "Use {p}stats to see stats of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "🔴wait piz boss🔴",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑-𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny cat";
      }

      // Assuming global.utils.getStreamFromURL(img) is correctly defined
      const imgURL= "https://i.imgur.com/5GtdTKC.gif";
      const attachment = await global.utils.getStreamFromURL(imgURL);

      api.sendMessage({
        body: `👾 | Bot running time\n☞ ${uptimeString}\n\n📅 | Date: ${date}\n\n⏰| Time: ${time}\n\n🐉 | Total Users\n☞ ${allUsers.length}\n\n🌸 | Total threads\n☞ ${allThreads.length}\n\n🌝 | Ping: ${ping}ms\n\nPing status: ${pingStatus}`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
