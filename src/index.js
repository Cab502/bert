require("dotenv").config()
const fs = require("fs")
const { Client, Collection, Intents } = require("discord.js")

const client = new Client({intents: [Intents.FLAGS.GUILDS]})
client.commands = new Collection()

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    client.commands.set(command.data.name, command)
})

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
    }
})

client.login(process.env.DISCORD_BOT_TOKEN)

