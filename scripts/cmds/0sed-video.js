module.exports.config = {
	name: "sedvideo",
	version: "1.0.1",
	role: 2,
	author: "Badol",
	description: "get sed+video",
   category: "media",
	usages: "sed+video",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStart = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

const axios = require('axios');

const request = require('request');

const fs = require('fs-extra');

   var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐒𝐄𝐃-𝐕𝐈𝐃𝐄𝐎•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];

  var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];

  var link = [

  "https://drive.google.com/uc?id=16KeE4J7L2Pd8cCKIBvlwEPP07A92b-eb",
    "https://drive.google.com/uc?id=16MhNPi_H0-tEe5PQrrqkx_l7SrC_l0kd",
    "https://drive.google.com/uc?id=15w4cvYmKrCW2Hul2AcvPEk5S4b-CH3EE",
    "https://drive.google.com/uc?id=16Xa6thSHdEGCiypaetbAEqVCwEAzFnKX",
    "https://drive.google.com/uc?id=16BnRPvKQd7gd3YLR_rB9QNZymotMqHu7",
    "https://drive.google.com/uc?id=15fDe2735O50z-3G4yQ5tDT9J873x5izm",
    "https://drive.google.com/uc?id=16HgiGU7_Cdh8NtpsKi92dTJmALJCV8jD",
    "https://drive.google.com/uc?id=16KTSrInqvioGnT7RrAskjHYqz8R6RgNY",
    "https://drive.google.com/uc?id=162yWrNRRTeN4tFEjQEtsR4p-4gWbTFaS",
    "https://drive.google.com/uc?id=16-q768c6nXstZEjQhWa1pZUPL2Xpjwo9",
    "https://drive.google.com/uc?id=15bfkP01mTzXutgP_0Z1iyud7SXqq-jOt",
    "https://drive.google.com/uc?id=15WnvdFOQIhKQ1nlZgsABXaf6Q2nQexGW",
    "https://drive.google.com/uc?id=16GTgYVSIDduUs4VTxadIzPPyp9KA_102",
    "https://drive.google.com/uc?id=15Y2GnA-Kcox8Mw6jioxHc1G1yP4pihnC",
    "https://drive.google.com/uc?id=16-qsG6oldtJiGq11Q3bFxKzuZJRFnoPT",
    "https://drive.google.com/uc?id=15W8ETDBXrn_JvealPwPFQ2CjvZp437-g",
    "https://drive.google.com/uc?id=15StZMKfsTdAhhECdKjS6FUFwG_OIHa7W",
    "https://drive.google.com/uc?id=16lOXxs-Z9u-mxttFnwWzdUHvrP55aHnZ",
    "https://drive.google.com/uc?id=162Qn-pcnc9iijg5dv59S9DTTQOofL4Fy",
    "https://drive.google.com/uc?id=1680rf1wQ2TrRuSLHtTwFC7GYctJAnHaX",
    "https://drive.google.com/uc?id=16-XtMXpa4r1iFJTBS2N68ARMuDH2IWpG",
    "https://drive.google.com/uc?id=15bO3lguAxsMZPvKkcvlsM6ObXOfJMz79",

 ];
     var callback = () => api.sendMessage({body:`${mim}`,attachment: fs.createReadStream(__dirname + "/cache/B4D9L.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/B4D9L.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/B4D9L.mp4")).on("close",() => callback());
   };
