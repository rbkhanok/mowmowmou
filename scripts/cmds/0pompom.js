module.exports.config = {
	name: "pompom",
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

   var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐏𝐎𝐌-𝐏𝐎𝐌-𝐏𝐈𝐂🤦‍♂️😛•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];

  var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];

  var link = [

  "https://drive.google.com/uc?id=1vHa-RpL8ZEziei2_GvAhjcSPdSgPkgoz",
"https://drive.google.com/uc?id=1uj0ffc64H3bW-4Jp_VCeoI3qgFLRLmrl",
"https://drive.google.com/uc?id=1uvbVgagg9YOMTyW0Uw-Tk6qUx7teuFxb",
"https://drive.google.com/uc?id=1uo2-8diGD4iTm4WJ8WXww0vKknMrQtmD",
"https://drive.google.com/uc?id=1vSzdo3KfurhSemOuZAZdRB9NtxNGM-9J",
"https://drive.google.com/uc?id=1v7RqS-hso8s2247NLsVTFxMgkAH-GKrj",
"https://drive.google.com/uc?id=1uubhSCCzKRvq2ZgGVLDwvz01UHmQLK9G",
"https://drive.google.com/uc?id=1uzHPq0vT3vhYlzxTARx_chaHsGh9nEzp",
"https://drive.google.com/uc?id=1vT1x1XXrl8xNFOOtXwJpKOsF-VFeVQCs",
"https://drive.google.com/uc?id=1v0K_GuQfUTAvlcdEGJXcm_bSQ-eozmPv",

 ];
     var callback = () => api.sendMessage({body:`${mim}`,attachment: fs.createReadStream(__dirname + "/cache/B4D9L.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/B4D9L.jpg"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/B4D9L.jpg")).on("close",() => callback());
   };
