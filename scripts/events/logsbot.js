const { getTime } = global.utils;

module.exports = {
	config: {
		name: "logsbot",
		isBot: true,
		version: "1.4",
		author: "RB-BADOL-KHAN",
		envConfig: {
			allow: true
		},
		category: "events"
	},

	langs: {
		vi: {
			title: "====== Nhật ký bot ======",
			added: "\n✅\nSự kiện: bot được thêm vào nhóm mới\n- Người thêm: %1",
			kicked: "\n❌\nSự kiện: bot bị kick\n- Người kick: %1",
			footer: "\n- User ID: %1\n- Nhóm: %2\n- ID nhóm: %3\n- Thời gian: %4"
		},
		en: {
			title: "❤️==💛=【•বট•নটিস•】=💛==❤️",
			added: "\n\n\n【•বট একটি নতুন গ্রুপে এড করা হয়েছে•】\n\n【এড করেছেন ইনি•】\n\n%1",
			kicked: "\n\n【• বটকে একটি গ্রুপ থেকে কিক মারা হয়েছে 】\n\n【•কিক মেরেছেন ইনি•】\n\n%1",
			footer: "\n\n【•যে কিক মেরেছে তার ইউজার আইডি•】\n\n%1\n\n【•এই গ্রুপ থেকে কিক মারা হয়েছে•】\n\n%2\n\n【•গ্রুপ ইউজার•】%3\n\n【•বাংলাদেশ টাইম•】\n\n【%4】"
		}
	},

	onStart: async ({ usersData, threadsData, event, api, getLang }) => {
		if (
			(event.logMessageType == "log:subscribe" && event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
			|| (event.logMessageType == "log:unsubscribe" && event.logMessageData.leftParticipantFbId == api.getCurrentUserID())
		) return async function () {
			let msg = getLang("title");
			const { author, threadID } = event;
			if (author == api.getCurrentUserID())
				return;
			let threadName;
			const { config } = global.GoatBot;

			if (event.logMessageType == "log:subscribe") {
				if (!event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
					return;
				threadName = (await api.getThreadInfo(threadID)).threadName;
				const authorName = await usersData.getName(author);
				msg += getLang("added", authorName);
			}
			else if (event.logMessageType == "log:unsubscribe") {
				if (event.logMessageData.leftParticipantFbId != api.getCurrentUserID())
					return;
				const authorName = await usersData.getName(author);
				const threadData = await threadsData.get(threadID);
				threadName = threadData.threadName;
				msg += getLang("kicked", authorName);
			}
			const time = getTime("DD/MM/YYYY hh:mm:ss");
			msg += getLang("footer", author, threadName, threadID, time);

			for (const adminID of config.adminBot)
				api.sendMessage(msg, adminID);
		};
	}
};
