module.exports = {
  config: {
    name: "up",
    aliases: ["uptime","upt"],
    version: "1.0",
    author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",
    role: 0,
    shortDescription: {
      en: "uptime robot",
    },
    longDescription: {
      en: "shows uptime of bot.",
    },
    category: "system-mbc",
    guide: {
      en: "Use {p}up to see up of bot.",
    },
  },

	onStart: async function ({ api, message, threadsData }) {
		const os = require("os");
		const uptime = os.uptime();

		const days = Math.floor(uptime / (3600 * 24));
		const hours = Math.floor((uptime % (3600 * 24)) / 3600);
		const mins = Math.floor((uptime % 3600) / 60);
		const seconds = Math.floor(uptime % 60);

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

		const system = `OS: ${os.platform()} ${os.release()}`;
		const cores = `Cores: ${os.cpus().length}`;
		const arch = `Architecture: ${os.arch()}`;
		const totalMemory = `Total Memory: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`;
		const freeMemory = `Free Memory: ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB`;
		const uptimeString = `UPTIME: ${days} দিন, ${hours} ঘন্টা, ${mins} মিন্টি ${seconds} সেকেন্ড`;

		const response = `╔╝❮❮𝐔𝐏𝐓𝐈𝐌𝐄-𝐑𝐎𝐁𝐎𝐓❯❯╚╗\n\n━❯ ${uptimeString}\n\n━━━━━━━━━━━━━━━━━━━━━━\n━❯ 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐎𝐋\n━❯ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕\n━❯ 𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗:【•】\n━❯ ${system}\n━❯ ${cores}\n━❯ Total Users: ${threadsData.size}\n━❯ Total Threads: ${threadsData.size}\n━❯ AI Usage: 0.0\n━❯ RAM Usage: ${Math.round(process.memoryUsage().rss / (1024 * 1024))} MB\n━❯ Total(RAM): ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB\n━❯ Current(RAM): ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB\n━❯ Ping: 15 ms\n━❯ Uptime(Seconds): ${Math.floor(process.uptime())}\n━━━━━━━━━━━━━━━━━━━━━━\n【 ${date} || ${time} 】`;

		message.reply({body:response,attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Vu2y8Z1.jpeg")});
	},
};
