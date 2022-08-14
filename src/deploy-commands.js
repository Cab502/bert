//Require the necessary encironment variables
require("dotenv").config()

const fs = require("fs")
const path = require("path")

const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v10")

const restClient =  new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN)

// #region FUNCTIONS
async function submitCommands(commands, guildname = "") {
    try {
        if (guildname) {
            await restClient.put(Routes.applicationGuildCommands(process.env.DISCORD_APPLICATION_ID, process.env[`GUILD_ID_${guildname}`]), 
            { body: commands })
            .then(() => console.log(`Successfully reloaded application (/) commands for guild "${guildname}"`))
        }else{
            await restClient.put(Routes.applicationCommands(process.env.DISCORD_APPLICATION_ID), 
            { body: commands })
            .then(() => console.log(`Successfully reloaded global application (/) commands`))
        }
    }catch (error) {
        console.error(error);
    }
}
// #endregion

// #region GLOBAL COMMANDS
const commandFilesPath = path.join(__dirname, "commands");
fs.readdir(commandFilesPath, (err, files) => {
	if (err) throw err;

	const globalCommandFiles = files.filter((file) => file.endsWith(".js") && !path.basename(file).startsWith("_"));

	// Assemble and submit the global commands
	const globalCommands = [];
	globalCommandFiles.forEach(file => {
		const command = require(path.join(commandFilesPath, file));
		globalCommands.push(command.data.toJSON());
	});
	submitCommands(globalCommands);
});
// #endregion

// #region GUILD COMMANDS
fs.readdir(commandFilesPath, { withFileTypes: true }, (err, files) => {
	if (err) throw err;

	const guildCommandFolders = files.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);

	// Iterate over each guild command folder
	guildCommandFolders.forEach(guildname => {

		// Retrieve the guild command files
		fs.readdir(path.join(commandFilesPath, guildname), (err, guildFiles) => {
			if (err) throw err;

			const guildCommandFiles = guildFiles.filter((file) => file.endsWith(".js") && !path.basename(file).startsWith("_"));

			// Assemble and submit the commands
			const guildCommands = [];
			guildCommandFiles.forEach(file => {
				const command = require(path.join(commandFilesPath, guildname, file));
				guildCommands.push(command.data.toJSON());
			});
			submitCommands(guildCommands, guildname);
		});
	});
});
// #endregion