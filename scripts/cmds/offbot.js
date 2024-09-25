module.exports = {
	config: {
		name: "off",
		version: "1.0",
		author: "RB-BADOL-KHAN",
		countDown: 45,
		role: 2,
		shortDescription: "Turn off bot",
		longDescription: "Turn off bot",
		category: "owner",
		guide: "{p}{n}"
	},
	onStart: async function ({event, api}) {
		api.sendMessage("╔════ஜ𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐁𝐎𝐓ஜ═══╗\n\n📴𝐁𝐎𝐓•𝐎𝐅𝐅•𝐒𝐔𝐂𝐂𝐑𝐒𝐒𝐅𝐔𝐋𝐋𝐘✅\n╚════ஜ𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐁𝐎𝐓ஜ═══╝",event.threadID, () =>process.exit(0))}
};
