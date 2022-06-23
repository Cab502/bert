//Require the necessary encironment variables
require("dotenv").config()

//Require the file system modules for dynamic command creation
const fs = require("fs")
const path = require("path")

//Require the necessary discord.js classes
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v10")

//Assemble and submit global commands
const commands = []
const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js") && !path.basename(file).startsWith("_"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    commands.push(command.data.toJSON())
})

//Create a new rest client instance
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