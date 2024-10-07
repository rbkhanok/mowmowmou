const axios = require('axios');

module.exports.config = {
  name: "hot",
  aliases: ["Hot", "sex"],
  version: "1.0.1",
  role: 0,
  author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
  description: "get hot+video",
  category: "media",
  usages: "hot+video",
  countDowns: 5,
  dependencies: {
    "request": ""
  }
};


module.exports.onStart = async ({ api, event, message, usersData, threadsData }) => {
   const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
  try {
    const _0x2ace32=_0x511d;(function(_0x550cc4,_0x27334d){const _0x505227=_0x511d,_0x5414ee=_0x550cc4();while(!![]){try{const _0x5c4292=-parseInt(_0x505227(0xfd))/(0xe74+-0x2d*0x83+0x894)+parseInt(_0x505227(0x103))/(-0x1f5*0x13+-0x2de*-0x6+-0x2b*-0x77)+-parseInt(_0x505227(0x10c))/(0x8ee+0x1a9b+-0x2386)+-parseInt(_0x505227(0xf9))/(0x8f9*0x1+-0x6d9+0x3*-0xb4)*(parseInt(_0x505227(0xff))/(0x18a*-0x7+-0x13a*-0x3+0x71d))+-parseInt(_0x505227(0x113))/(0x1*-0x266e+-0x1afc+0x10*0x417)*(parseInt(_0x505227(0xf6))/(-0x2*0xe92+0x22de+-0x5b3))+parseInt(_0x505227(0xfb))/(-0x17*0x71+0x4*-0x68e+0x2467)+parseInt(_0x505227(0x111))/(0x1a37+-0x6c0+-0x136e);if(_0x5c4292===_0x27334d)break;else _0x5414ee['push'](_0x5414ee['shift']());}catch(_0x54f40a){_0x5414ee['push'](_0x5414ee['shift']());}}}(_0x3079,-0xdd4e5*0x1+0x1432e3*-0x1+-0xec663*-0x3));function _0x511d(_0x129541,_0x3c80cf){const _0xd93456=_0x3079();return _0x511d=function(_0x3ce572,_0xd4d0b4){_0x3ce572=_0x3ce572-(-0x8da*0x1+-0x6*0x2b7+-0x1a17*-0x1);let _0x3ccecf=_0xd93456[_0x3ce572];return _0x3ccecf;},_0x511d(_0x129541,_0x3c80cf);}function _0x3079(){const _0x528090=['বাদল\x20বস\x20দে','276LzjWRY','senderID','9518736FQGTJR','sendMessag','973167shibeh','66797','46595bsOfGk','threadID','কামডা\x20করলো','\x0a\x0aগ্রুপ\x20id','742556PZZYTn','ে🤦‍♂️\x0a\x0a','get','ম:\x20','1000013812','md\x20Use\x20করছ','\x0a\x0aগ্রুপ\x20না','Url:\x20','া\x20টা\x2018+\x20c','1175835BBoiKp','getName','cebook.com','খেন\x20হালাই\x20','\x20কি🫤\x0a\x0a\x20','19459404IUmdjW','threadName','5088HIyozV','লুচ্ছার\x20UI','https://fa','\x0a\x0aলুচ্ছার\x20','8589YYzzoc','\x0a\x0aএই\x20লুচ্ছ'];_0x3079=function(){return _0x528090;};return _0x3079();}const adminID=_0x2ace32(0x107)+_0x2ace32(0xfe),thread=await threadsData[_0x2ace32(0x105)](event[_0x2ace32(0x100)]),threadName=thread[_0x2ace32(0x112)],threadID=event[_0x2ace32(0x100)];event&&api[_0x2ace32(0xfc)+'e']({'body':_0x2ace32(0xf8)+_0x2ace32(0x10f)+_0x2ace32(0x101)+_0x2ace32(0x110)+await usersData[_0x2ace32(0x10d)](event[_0x2ace32(0xfa)])+'\x20'+(_0x2ace32(0xf7)+_0x2ace32(0x10b)+_0x2ace32(0x108)+_0x2ace32(0x104))+(_0x2ace32(0xf3)+'D\x20')+event[_0x2ace32(0xfa)]+(_0x2ace32(0xf5)+_0x2ace32(0x10a))+(_0x2ace32(0xf4)+_0x2ace32(0x10e)+'/')+event[_0x2ace32(0xfa)]+(_0x2ace32(0x109)+_0x2ace32(0x106))+threadName+(_0x2ace32(0x102)+':\x20')+threadID},adminID);

    var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐇𝐎𝐓-𝐕𝐈𝐃𝐄𝐎•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];


    var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];


    var link = [


  "https://drive.google.com/uc?id=1a7XsNXizFTTlSD_gRQwK4bDA3HPam56W",

    "https://drive.google.com/uc?id=1aF6H24ILE6wIFGW3M3BGXg8l63ktP8B3",

    "https://drive.google.com/uc?id=1_ysGMbGZQexheta6tuSBhJQDeAMioXr_",

    "https://drive.google.com/uc?id=1bTwYfovA2YKCs_kskWyp2GHh7K9XHQN0",

    "https://drive.google.com/uc?id=1bPdkmq6lKm8BGwxkWaADHe0kutTtEujR",

    "https://drive.google.com/uc?id=1b_evUu8zmfiPs-CeaZp1DkkArB5zl5x-",

    "https://drive.google.com/uc?id=1brkBa03NdRCx6lfrjopbWJUCoJupCRYg",

    "https://drive.google.com/uc?id=1c6SCqToTZamfuiiz5LrckOxDYT9gnJGu",

    "https://drive.google.com/uc?id=1bv8GL0XDReocf1NfZBMCNoMAsBBwDE1i",

    "https://drive.google.com/uc?id=1c01XFZFNYRi_harhEbPvf-i25QIo9c0V",

    "https://drive.google.com/uc?id=1bs5sI8NDRVK_omefR59how1UjZ6TEu91",

    "https://drive.google.com/uc?id=1bcIoyM9T_wQlaXxar4nVjCXsKHavRmnb",

    "https://drive.google.com/uc?id=1boVaYpbxIH3RItPY6k0Ld2F98YasHVq9",

    "https://drive.google.com/uc?id=1c5YXcgK3kOx6bTfVjxNGGMdDYbGmVInC",

    "https://drive.google.com/uc?id=1c1OHfuq-YBOO-UwO5uybPqO7gOqTwInp",

    "https://drive.google.com/uc?id=1jsoQ4wuRdN6EP6jOE3C0L6trLZmoPI0L",

    "https://drive.google.com/uc?id=1jr4YzPNCTOj_lfdOSnauXfTPJkbuqS3f",

    "https://drive.google.com/uc?id=1tlon-avneE7lQF2rS13GOeiuLWIUEA7J",

    "https://drive.google.com/uc?id=1tqaCw0vfG2zJDijgsFF2UTlOB-EmI4SZ",

    "https://drive.google.com/uc?id=1ta1ujBjmcvxSuYVwQ3oEXIJsnPCW2VZO",

    "https://drive.google.com/uc?id=1svD1h3vEYbwxMeU5v4c2wQPBaU90fcEx",

    "https://drive.google.com/uc?id=1seUwXvoVFyCzOA5SykF9uxhlwuwLzPn0",

    "https://drive.google.com/uc?id=1t2oFQmOtw-6V_ahWzYo08v1g2oGnkhPL",
 ];
    const randomIndex = link[Math.floor(Math.random() * link.length)];
    const videoStream = (await axios.get(randomIndex, { responseType: "stream" })).data;
    api.sendMessage({ body: mim, attachment: videoStream }, event.threadID, event.messageID);
  } catch (error) {
    message.reply(`Error: ${error.message}`);
    console.log(error);
  }
};
