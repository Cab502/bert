//Require the necessary encironment variables
require("dotenv").config()

//Require the file system modules for dynamic command creation
const fs = require("fs")
const path = require("path")

//Require the necessary discord.js classes
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v10")

//Create a new rest client instance
const restClient =  new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN)

//Assemble and submit global commands
const commands = []
const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js") && !path.basename(file).startsWith("_"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    commands.push(command.data.toJSON())
})

restClient.put(Routes.applicationCommands(process.env.DISCORD_APPLICATION_ID),
 {body: commands})
.then(() => console.log("SUCCESS: registered commands"))
.catch(console.error)