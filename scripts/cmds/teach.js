const axios = require("axios");

module.exports = {
    config: {
        name: "teach",
        aliases: ["simteach"],
        version: "1.0",
        author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
        countDown: 5,
        role: 0,
        shortDescription: {
            en: "teach Badol"
        },
        longDescription: {
            en: "teach Badol"
        },
        category: "teach",
        guide:{
            en: "{p}teach your ask | my answer "
        }
    },
    onStart: async function ({ api, event, args }) {
        const { messageID, threadID, senderID, body } = event;
        const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json')
          const teach = apis.data.sim
        const tid = threadID,
                    mid = messageID;
        const content = args.join(" ").split("|").map(item => item.trim());
        const ask = encodeURIComponent(content[0]);
        const ans = encodeURIComponent(content[1]);
        if (!args[0]) return api.sendMessage("Use .teach your ask | Sammy respond", tid, mid);
        const res = await axios.get(`${teach}/sim?type=teach&ask=${ask}&ans=${ans}`);
        const responseMessage = res.data.msg;
        api.sendMessage(responseMessage, tid, mid);
    }
};
