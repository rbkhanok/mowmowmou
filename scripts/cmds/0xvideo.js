module.exports.config = {
	name: "xvideo",
	version: "1.0.1",
	role: 2,
	author: "Badol",
	description: "get 18+video",
   category: "media",
	usages: "18+video",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStart = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

const axios = require('axios');

const request = require('request');

const fs = require('fs-extra');

   var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐗𝐕𝐈𝐃𝐄𝐎🤦‍♂️😛•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];

  var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];

  var link = [

  "https://drive.google.com/uc?id=1fm7FndVaN4Xj3YdtJoZcT5Bbov_aqT1E",
"https://drive.google.com/uc?id=1fck0SulaPt4EQU-hr0eKWMkCEW14kWH0",
"https://drive.google.com/uc?id=1fnkmwF_H0vamQMwIQU9ZHDdaMtvAmg_D",
"https://drive.google.com/uc?id=1fsQRBliBOloH_DkGAetJiVH4bfRYWbuR",
"https://drive.google.com/uc?id=1fWxwp1IOg8xGkqkFygOPKQBX99Nivx7d",
"https://drive.google.com/uc?id=1fQn9GmU-PlToslACaHJSDWzUJVFZ6fBy",
"https://drive.google.com/uc?id=1fs0wek6OF9hfpfryHZ3n0KBE-ZSfFacc",
"https://drive.google.com/uc?id=1f33Lc7bwXxwz3ol0ndqMbQ96xab70G7Lhttps://drive.google.com/uc?id=",
"https://drive.google.com/uc?id=1fFYfemXPS4ni9Q6C6cYukWDZy-PUKZCq",
"https://drive.google.com/uc?id=1feUoX8hMQHcgstFkI7_3HC-YgAEHBcrt",

 ];
     var callback = () => api.sendMessage({body:`${mim}`,attachment: fs.createReadStream(__dirname + "/cache/B4D9L.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/B4D9L.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/B4D9L.mp4")).on("close",() => callback());
   };
