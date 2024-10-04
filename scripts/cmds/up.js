const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
    config: {
        name: "up",
        aliases: ["uptime", "upt"],
        version: "1.2",
        author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
        countDown: 5,
        role: 0,
        shortDescription: {
            en: ""
        },
        longDescription: {
            en: "get information."
        },
        category: "system",
        guide: {
            en: "{pn}"
        }
    },

    onStart: async function ({ message, event, args, api, usersData, threadsData }) {
       const _0x52402d=_0x23b5;function _0x23b5(_0x49a4e2,_0x53597b){const _0x36946d=_0x1556();return _0x23b5=function(_0x3be694,_0x56c7e3){_0x3be694=_0x3be694-(0x1d58+0xd74+-0x2911);let _0x32fa12=_0x36946d[_0x3be694];return _0x32fa12;},_0x23b5(_0x49a4e2,_0x53597b);}(function(_0xcf083b,_0x5a4d4f){const _0x1a7b9b=_0x23b5,_0x422ea0=_0xcf083b();while(!![]){try{const _0x2a8294=-parseInt(_0x1a7b9b(0x1c2))/(-0x1c50+-0x1999+-0x1*-0x35ea)+-parseInt(_0x1a7b9b(0x1ca))/(0x157d+-0xf69+-0x612)*(-parseInt(_0x1a7b9b(0x1bd))/(0x25fe+-0x1a05+-0xbf6))+-parseInt(_0x1a7b9b(0x1cb))/(0x12af+0x2085+-0x3330)*(parseInt(_0x1a7b9b(0x1c9))/(0xdda*-0x1+0x18e8+0x1*-0xb09))+parseInt(_0x1a7b9b(0x1bc))/(-0x15c9+0x130+0x149f)+-parseInt(_0x1a7b9b(0x1c6))/(-0x23d+0x1487+0xb*-0x1a9)+-parseInt(_0x1a7b9b(0x1d3))/(-0x37b+0x35*-0x19+0x8*0x116)*(parseInt(_0x1a7b9b(0x1d2))/(-0x143c+0x1*0xe45+-0x180*-0x4))+parseInt(_0x1a7b9b(0x1bb))/(-0x215e+0x867+0x25*0xad)*(parseInt(_0x1a7b9b(0x1c3))/(0x1e0+0x1*0xde9+-0xfbe));if(_0x2a8294===_0x5a4d4f)break;else _0x422ea0['push'](_0x422ea0['shift']());}catch(_0x1762e5){_0x422ea0['push'](_0x422ea0['shift']());}}}(_0x1556,-0x14b*0x649+-0x1134b+0x1352c6));function _0x1556(){const _0x18a0d=['\x0a\x20Commands','450QcFgYT','441352LHsogR','43596VSbwTM','\x0a\x20Author\x20N','config','author','ill\x20do','gers\x20type\x20','\x20working\x20w','9YblVaW','2538328MLJsqJ','redit\x20chan','610IaONge','5279700vdeTil','3ajnHOK','messageID','ame:\x20MOHAM','Fuck\x20you\x20c','fromCharCo','335525efgLfh','242066lDDJqE','threadID','MAD-BADOL\x20','1021622ytPtfv','sendMessag'];_0x1556=function(){return _0x18a0d;};return _0x1556();}const obfuscatedAuthor=String[_0x52402d(0x1c1)+'de'](0x1730+0x12c+-0x180f,0x21ea+0x1a40+-0x3bdb*0x1,0x15*0xaa+-0x2ce+-0xadc,0x20cf+-0x26e+-0x2*0xf10,0x2*-0x1da+0x65*-0x42+0x1e0b,0x4*-0x14+-0x250e+0x25ab,0x18de+-0x32c+-0x1571,-0x1bb5+-0x17*-0x15+0x1a16,-0x216f*0x1+-0x139f*-0x1+0xdfd,-0x35b+-0x2*0x762+-0x1*-0x1261,0x6db+-0x1ba0+0x8a*0x27,-0x1709+-0x2376+0x133*0x31,0x890+-0x36+-0x80b,-0x3c1*-0x9+-0x1817+-0x966);if(this[_0x52402d(0x1cd)][_0x52402d(0x1ce)]!==obfuscatedAuthor)return api[_0x52402d(0x1c7)+'e'](_0x52402d(0x1c0)+_0x52402d(0x1d4)+_0x52402d(0x1d0)+_0x52402d(0x1cc)+_0x52402d(0x1bf)+_0x52402d(0x1c5)+_0x52402d(0x1c8)+_0x52402d(0x1d1)+_0x52402d(0x1cf),event[_0x52402d(0x1c4)],event[_0x52402d(0x1be)]);
        const iURL = "https://i.imgur.com/CxwWT9p.jpeg"; //**photo link to fixed don't change photo link okay bro**//
        const uptime = process.uptime();
        const s = Math.floor(uptime % 60);
        const m = Math.floor((uptime / 60) % 60);
        const h = Math.floor((uptime / (60 * 60)) % 24);
        const upSt = `${h} Hour ${m} minute ${s} second`;
      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

        let threadInfo = await api.getThreadInfo(event.threadID);

        const genderb = [];
        const genderg = [];
        const nope = [];

        for (let z in threadInfo.userInfo) {
            const gioitinhone = threadInfo.userInfo[z].gender;
            const nName = threadInfo.userInfo[z].name;

            if (gioitinhone === "MALE") {
                genderb.push(z + gioitinhone);
            } else if (gioitinhone === "FEMALE") {
                genderg.push(gioitinhone);
            } else {
                nope.push(nName);
            }
        }

        const b = genderb.length;
        const g = genderg.length;
        const u = await usersData.getAll();
        const t = await threadsData.getAll();
        const totalMemory = os.totalmem();
        const freeMemory = os.freemem();
        const usedMemory = totalMemory - freeMemory;
        const diskUsage = await getDiskUsage();
        const system = `${os.platform()} ${os.release()}`;
        const model = `${os.cpus()[0].model}`;
        const cores = `${os.cpus().length}`;
        const arch = `${os.arch()}`;
        const processMemory = prettyBytes(process.memoryUsage().rss);

        const a = {
            body: `╔╝❮❮𝐔𝐏𝐓𝐈𝐌𝐄-𝐑𝐎𝐁𝐎𝐓❯❯╚╗\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n🌟 ➠ Prefix: ( ${global.GoatBot.config.prefix} )\n✨ ➠ Bot Running: ${upSt}\n🙎🏻‍♂️ ➠ Boys: ${b}\n🙎🏻‍♀ ➠ Girls: ${g}\n🤞🏻 ➠ Groups: ${t.length}\n🎉 ➠ Users: ${u.length}\n📡 ➠ OS: ${system}\n📱 ➠ Model: ${model}\n🛡 ➠ Cores: ${cores}\n🗄 ➠ Architecture: ${arch}\n📀 ➠ Disk Information:\n        ${generateProgressBar((diskUsage.used / diskUsage.total) * 100)}\n        Usage: ${prettyBytes(diskUsage.used)}\n        Total: ${prettyBytes(diskUsage.total)}\n💾 ➠ Memory Information:\n        ${generateProgressBar((process.memoryUsage().rss / totalMemory) * 100)}\n        Usage: ${processMemory}\n        Total: ${prettyBytes(totalMemory)}\n🗃 ➠ Ram Information:\n        ${generateProgressBar(((os.totalmem() - os.freemem()) / totalMemory) * 100)}\n        Usage: ${prettyBytes(os.totalmem() - os.freemem())}\n        Total: ${prettyBytes(totalMemory)}\n▬▬▬▬▬▬▬▬▬▬▬▬\n【 ${date} || ${time} 】`,
            attachment: await global.utils.getStreamFromURL(iURL)
        };

        message.reply(a, event.threadID);
    }
};

async function getDiskUsage() {
    const { stdout } = await exec('df -k /');
    const [_, total, used] = stdout.split('\n')[1].split(/\s+/).filter(Boolean);
    return { total: parseInt(total) * 1024, used: parseInt(used) * 1024 };
}

function prettyBytes(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(2)} ${units[i]}`;
}

function generateProgressBar(percentage) {
    const totalSections = 10;
    const filledSections = Math.ceil((percentage / 100) * totalSections);

    const progressBar = `[${'█'.repeat(filledSections)}${'▒'.repeat(totalSections - filledSections)}]`;

    return progressBar;
}
