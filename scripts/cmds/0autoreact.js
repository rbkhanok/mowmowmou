module.exports.config = {
	name: "autoreact",
	version: "1.0.1",
	role: 0,
	author: "RB-BADOL-KHAN",
	description: "auto aotoreact",
   category: "media",
	usages: "aotoreact",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};
module.exports.onChat = async function({ api, event, client, __GLOBAL }) {
 let haha = event.body ? event.body.toLowerCase() : '';
if (haha.includes(" ") || haha.includes("")){
const badol = ['😆','🐸','🙃','😈','🤖','🙄','🐣','🍎','🐰','🦟','🧐','😐','🙂','🤐','♥️','😘','😻','😍','😸','💦','🤨','😭','😁','😜','🤫','😶','🥱','😤','🥵','😇','💋','🙈','🙀','🦵','💛','🖤','🤎','💙','💜','🦶','🙆','😏','🌸','🏵️','🍁','🌼','🔥','🐍','👄','✈️','🦛','🦐','🐇','🐮','🐰','🦃','🫦','🦋','🍒','🍓','🐼','🍊','🫤','🫦','🍌','🌚','🥥','🫰','🥕','😳','👻','😾','🧀','😒','🥹','☠️','👊','😴','😦','😷','🫣','🫂','🤕','😵','🫢','🤭','😔','💩','💣','👀','🌝','🍼','🐤','😋','😻','😕','🙀']

const r = badol[Math.floor(Math.random() * badol.length)];
return api.setMessageReaction(r, event.messageID, (err) => {}, true)
}
    };
module.exports.onStart = async function (){}
