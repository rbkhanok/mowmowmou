module.exports.config = {

  name: "gojol",

  version: "1.0.1",

  role: 0,

  author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",  //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007

  description: "get Islamic gojol",

  category: "media",

  usages: "gojol",

  countDowns: 5,

  dependencies: {

    "request": ""

  }

};


module.exports.onStart = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {


  const axios = require('axios');


  const request = require('request');


  const fs = require('fs-extra');


  var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐈𝐒𝐋𝐀𝐌𝐈𝐂-𝐆𝐎𝐉𝐎𝐋•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];


  var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];


  var link = [


  "https://drive.google.com/uc?id=1tT6pENwn4xgpu2O3HEa0oR2hqVBUx_mg",

"https://drive.google.com/uc?id=1t_zZegfLhmbyiOE5yo4SQ5SZ8Zl83NQS",

"https://drive.google.com/uc?id=1tIoBL6GaGmnUy5VPI6hF-pjKVKT68LDp",

"https://drive.google.com/uc?id=1tC__Yej-s87ADvRZXiMIyBS_GNf8_GBX",

"https://drive.google.com/uc?id=1tEWfxGovW8wbB7Ls5jg98UFlgAs4kaZ4",

"https://drive.google.com/uc?id=1tBTeB5hExJQh4SHP8wAQGPJ8gfidnNHB",


 ];

  var callback = () => api.sendMessage({ body: `「 ${mim} 」`, attachment: fs.createReadStream(__dirname + "/cache/B4D9L.mp3") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/B4D9L.mp3"));

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/B4D9L.mp3")).on("close", () => callback());

};
