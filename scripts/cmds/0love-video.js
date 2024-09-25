module.exports.config = {
	name: "lovevideo",
	version: "1.0.1",
	role: 2,
	author: "Badol",
	description: "get love+video",
   category: "media",
	usages: "love+video",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStart = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

const axios = require('axios');

const request = require('request');

const fs = require('fs-extra');

   var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐋𝐎𝐕𝐄-𝐕𝐈𝐃𝐄𝐎•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];

  var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];

  var link = [

  "https://drive.google.com/uc?id=1Z-6qll7ACq8Ka1pKpnC3guGcXU0gNvoL",
    "https://drive.google.com/uc?id=1YHm_oC7xItLokbt_MCWu-VdMGavvx-G4",
    "https://drive.google.com/uc?id=1YvDanPpMZKK4s547h9Bsf0uL719AvVEG",
    "https://drive.google.com/uc?id=1YemK-RQH3gUX_I9ThgNJLC89yPF-VtEY",
    "https://drive.google.com/uc?id=1YN25UGQQCpZvN29Y5a84ZCYlL-rc_JL_",
    "https://drive.google.com/uc?id=1YXbox7CyKc6Gu-56WAtAPlxSTs51Yo9n",
    "https://drive.google.com/uc?id=1YNVe1cEM0JM3lj7sU49tuJn4-8ASYVd8",
    "https://drive.google.com/uc?id=1ZDjeuPfIyUkovgmJCRsE7vE67aOe0Sp2",
    "https://drive.google.com/uc?id=1YcJciCtidcUxRGihUyx2uDgDg3cBYUE5",
    "https://drive.google.com/uc?id=1ZIE6xPwXg6_oxG0K7xCWKS04MNyag3QL",
    "https://drive.google.com/uc?id=1ZF9cOD_fj26rpWDf6WOjUQNz8QuRJhkv",
    "https://drive.google.com/uc?id=1ZAXQwA5BsnN555FrWii2bb-kdLaoMxLP",
    "https://drive.google.com/uc?id=1YvWRk-wQ_I8kuJzOuw2Mx7Q-Rrgbw6CT",
    "https://drive.google.com/uc?id=1Z8vKgEBUkKbwgMPvv_6K_lvVsrBca_X8",
    "https://drive.google.com/uc?id=1ZG-BJq7pP4oh93U6tHIKuYvZ8XiidlCV",

 ];
     var callback = () => api.sendMessage({body:`${mim}`,attachment: fs.createReadStream(__dirname + "/cache/B4D9L.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/B4D9L.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/B4D9L.mp4")).on("close",() => callback());
   };
