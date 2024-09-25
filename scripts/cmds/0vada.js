module.exports.config = {
	name: "vuda",
	version: "1.0.1",
	role: 2,
	author: "Badol",
	description: "get 18+pic",
   category: "media",
	usages: "18+pic",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStart = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

const axios = require('axios');

const request = require('request');

const fs = require('fs-extra');

   var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐕𝐔𝐃𝐀𝐑-𝐏𝐈𝐂🤦‍♂️😛•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];

  var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];

  var link = [

  "https://drive.google.com/uc?id=1tKP6laavGRjyBYyDFQGSpTUr4-svSGC5",
"https://drive.google.com/uc?id=1tjfIHIwA7ianswuss8PfxQKScR0ratDd",
"https://drive.google.com/uc?id=1uBoxCjK7-XrynnAduudb6i7GvWmTQoz6",
"https://drive.google.com/uc?id=1tG3GF027J0OY4J4Tjtq1zdxTxhIXdSTJ",
"https://drive.google.com/uc?id=1tZay0Twl1kLpZZeRjVHKSoyTf3auYDdX",
"https://drive.google.com/uc?id=1tgp1MrrYYqO-zeEtswLublpMqKvQtnQP",
"https://drive.google.com/uc?id=1tj3UI2cChEeqiH-n0x-HddaEeLkHV7-M",
"https://drive.google.com/uc?id=1uNxjxEWAxSzEkC6dIHBzskeStfkprpzr",
"https://drive.google.com/uc?id=1u5tPElg0iefQMvpcYIw7-nTGATGYtrFR",
"https://drive.google.com/uc?id=1t7Fy83f58BeWi6KsVuK4R7n58SvL3-66",
"https://drive.google.com/uc?id=1td4KyN82q_buxith2NupOFmB-vNzwFOV",
"https://drive.google.com/uc?id=1uBlXwQ55jvBwMOFNfD-deR4Dkwt9LMA6",
"https://drive.google.com/uc?id=1tPsaJxvL_svMooY1ryJDAOqyLudesrRG",
"https://drive.google.com/uc?id=1tHTqHPf1MS_BSgQYgipwmCwbxhkb6Ycy",
"https://drive.google.com/uc?id=1t7J8TFmi9TJLToakkgfx50MptvUZqiOa",
"https://drive.google.com/uc?id=1t7J8TFmi9TJLToakkgfx50MptvUZqiOa",
"https://drive.google.com/uc?id=1tLdBu_j7v_PaW57jdifR4yN_jTF0AnMU",

 ];
     var callback = () => api.sendMessage({body:`${mim}`,attachment: fs.createReadStream(__dirname + "/cache/B4D9L.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/B4D9L.jpg"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/B4D9L.jpg")).on("close",() => callback());
   };
