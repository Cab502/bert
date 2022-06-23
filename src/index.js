//Require the necessary environment variables
require("dotenv").config()

//Require the necessary discord.js classes
const { Client, Collection, Intents } = require("discord.js")

//Require the file system modules for dynamic command creation
const fs = require("fs")
const path = require("path")

//Create a new client instance and a commands collection
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
client.commands = new Collection()

// Recursively retrieve files (credits to https://stackoverflow.com/users/5551941/wyattis)
async function recReadDir(dir, done) {
	const results = [];
	fs.readdir(dir, function(err, list) {
		if (err) return done(err);
		let pending = list.length;
		if (!pending) return done(null, results);
		list.forEach(function(file) {
			file = path.resolve(dir, file);
			fs.stat(file, function(err, stat) {
				if (stat && stat.isDirectory()) {
					recReadDir(file, function(err, res) {
						results.push(res);
						if (!--pending) done(null, results);
					});
				}
				else {
					results.push(file);
					if (!--pending) done(null, results);
				}
			});
		});
	});
}

//Retrieve the command files 
const commandsPath = path.join(__dirname, "commands");
recReadDir(commandsPath, function(err, results) {
	if (err) throw err;

	// Assemble the commands and store them
	results.flat(Infinity)
		.filter((file) => file.endsWith(".js") && !path.basename(file).startsWith("_"))
		.forEach((file) => {
			const command = require(file);
			client.commands.set(command.data.name, command);
		});
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag} on ${client.guilds.cache.size} server(s)`)
    client.user.setActivity({name: "pornhub.com", type: "WATCHING"})
})

client.on("interaction", async (interaction) => {
    if(!interaction.isCommand()) return
    
    const command = client.commands.get(interaction.commandName)

    if(command) {

        try {
            await command.execute(interaction)
        } catch(error) {
            console.error(error)

            if(interaction.deferred || interaction.replied){
                interaction.editReply("Fehler beim Ausführen")
            }else{
                interaction.reply("Fehler beim Ausführen aufgetreten")
            }
        }
    } else{
        interaction.reply(":warning: Dieser Befehl ist aktuell nicht verfügbar")
    }
})

//Login to Discord with your client's token
client.login(process.env.DISCORD_BOT_TOKEN)

