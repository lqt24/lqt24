const fs = require('fs');
module.exports = {
	config: {
		name: "var", // Name of command, it must be unique to identify with other commands
		version: "1.1", // Version of command
		author: "NTKhang", // Author of command
		countDown: 5, // Time to wait before executing command again (seconds)
		role: 1, // Role of user to use this command (0: normal user, 1: admin box chat, 2: owner bot)
		shortDescription: {
			vi: "đây là mô tả ngắn của lệnh",
			en: "this is short description of command"
		}, // Short description of command
		description: {
			vi: "đây là mô tả dài của lệnh",
			en: "this is long description of command"
		}, // Long description of command
		category: "categoryName", // Category of command
		guide: {
			vi: "đây là hướng dẫn sử dụng của lệnh",
			en: "this is guide of command"
		} // Guide of command
	},

	langs: {
		vi: {
			hello: "xin chào"
		}, // Vietnamese language
		en: {
			hello: "hello world"
		} // English language
	},

	// onStart is a function that will be executed when the command is executed
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
		// YOUR CODE HERE, use console.log() to see all properties in variables above
    const adminIDs = await threadsData.get(event.threadID, "adminIDs");
		if (!adminIDs.includes(api.getCurrentUserID()))
			return
    // Read lines from the file
    // scripts/cmds/var.js
    const fs = require('fs'); // Import the fs module

    // ... rest of your code ...

    // On line 42:
    const data = fs.readFileSync('12.txt', 'utf8'); // Replace with your actual file path
    console.log(data);
    const lines = data.split('\n');

    if (lines.length === 0) {
      return message.reply("File trống!");
    }

    // Randomly select a line
    const randomIndex = Math.floor(Math.random() * lines.length);
    const randomLine = lines[randomIndex];


		// getLang is a function to get language of command

		// getLang without parameter is a function to get language of command without parameter
		message.send({args.join(" ")});
	}
};