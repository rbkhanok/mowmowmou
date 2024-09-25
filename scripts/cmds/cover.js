const { loadImage, createCanvas, registerFont } = require("canvas");
 
module.exports.config = {
  name: "cover",
  version: "1.0.0",
  author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★" //fix by a6y
};
 
module.exports.onStart = async function ({ api, args, event }) {
  const fs = require("fs-extra");
  const axios = require("axios");
  const { threadID, messageID, senderID } = event;
 
  if (!args[0]) {
    return api.sendMessage(
      `❤🫰 এই ভাবে ট্রাই করুন🫰❤\n.cover Mohammad + Badol + 01782**17** + mbcbadolgmail.com + Bangladesh`,
      threadID,
      messageID
    );
  } else {
 
    let input = args.join(" ").split("+").map(item => item.trim());
 
    if (input.length < 5) {
      return api.sendMessage(
        `❤🫰 এই ভাবে ট্রাই করুন🫰❤\n.cover Mohammad + Badol + 01782**17** + mbcbadolgmail.com + Bangladesh`,
        threadID,
        messageID
      );
    }
 
    let [name, subname, phoneNumber, email, address] = input;
 
    name = name.toUpperCase();
    subname = subname.toUpperCase();
    phoneNumber = phoneNumber.toUpperCase();
    email = email.toUpperCase();
    address = address.toUpperCase();
 
    api.sendMessage(
      `আপনার কভার টি তৈরি হচ্ছে  প্লিজ ওয়েট⏳\n☘️𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕🌺`,
      threadID,
      (err, info) => {
        setTimeout(() => {
          api.unsendMessage(info.messageID);
        }, 1000);
      },
      messageID
    );
 
    let pathImg = __dirname + `/cache/${senderID + 20}.png`;
    let pathAva = __dirname + `/cache/${senderID + 30}.png`;
    let pathLine = __dirname + `/cache/${senderID + 40}.png`;
 
    let avtAnime = (
      await axios.get(
        encodeURI(
          `https://graph.facebook.com/${senderID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`
        ),
        { responseType: "arraybuffer" }
      )
    ).data;
    let background = (
      await axios.get(
        encodeURI(
          `https://1.bp.blogspot.com/-ZyXHJE2S3ew/YSdA8Guah-I/AAAAAAAAwtQ/udZEj3sXhQkwh5Qn8jwfjRwesrGoY90cwCNcBGAsYHQ/s0/bg.jpg`
        ),
        {
          responseType: "arraybuffer"
        }
      )
    ).data;
    let hieuung = (
      await axios.get(
        encodeURI(
          `https://1.bp.blogspot.com/-zl3qntcfDhY/YSdEQNehJJI/AAAAAAAAwtY/C17yMRMBjGstL_Cq6STfSYyBy-mwjkdQwCNcBGAsYHQ/s0/mask.png`
        ),
        {
          responseType: "arraybuffer"
        }
      )
    ).data;
 
    fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    fs.writeFileSync(pathLine, Buffer.from(hieuung, "utf-8"));
    var avatar = await this.circle(pathAva);
 
    if (!fs.existsSync(__dirname + `/cache/UTMAvoBold.ttf`)) {
      let getfont2 = (
        await axios.get(
          `https://drive.google.com/u/0/uc?id=1DuI-ou9OGEkII7n8odx-A7NIcYz0Xk9o&export=download`,
          { responseType: "arraybuffer" }
        )
      ).data;
      fs.writeFileSync(
        __dirname + `/cache/UTMAvoBold.ttf`,
        Buffer.from(getfont2, "utf-8")
      );
    }
 
    let baseImage = await loadImage(pathImg);
    let baseAva = await loadImage(avatar);
    let baseLine = await loadImage(pathLine);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    registerFont(__dirname + `/cache/UTMAvoBold.ttf`, {
      family: "UTMAvoBold"
    });
    ctx.strokeStyle = "rgba(255,255,255, 0.2)";
    ctx.lineWidth = 3;
    ctx.font = "100px UTMAvoBold";
    ctx.strokeText(name, 30, 100);
    ctx.strokeText(name, 130, 200);
    ctx.textAlign = "right";
    ctx.strokeText(name, canvas.width - 30, canvas.height - 30);
    ctx.strokeText(name, canvas.width - 130, canvas.height - 130);
    ctx.fillStyle = `#ffffff`;
    ctx.font = "55px UTMAvoBold";
    ctx.fillText(name, 680, 270);
    ctx.font = "40px UTMAvoBold";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "right";
    ctx.fillText(subname, 680, 320);
    ctx.font = "23px UTMAvoBold";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "start";
    ctx.fillText(phoneNumber, 1350, 252);
    ctx.fillText(email, 1350, 332);
    ctx.fillText(address, 1350, 410);
    ctx.globalCompositeOperation = "destination-out";
    ctx.drawImage(baseLine, 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(baseAva, 824, 180, 285, 285);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    return api.sendMessage(
      { attachment: fs.createReadStream(pathImg) },
      threadID,
      messageID
    );
  }
};
 
module.exports.circle = async (image) => {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
};
