const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageAttachment, MessageEmbed } = require("discord.js")

exports.data = new SlashCommandBuilder()
    .setName("imsad")
    .setDescription("sends you a cute image")
    .addSubcommand(subCommand => subCommand.setName("cat").setDescription("Dealt dir Katzenbilder, um dich aufzumuntern"))
    .addSubcommand(subCommand => subCommand.setName("flamingo").setDescription("Dealt dir Flamingobilder, um dich aufzumuntern")),

    exports.execute = async (interaction) => {
        switch(interaction.options.getSubcommand()){
            case "cat": {
                const number =  Math.floor(Math.random()*44)
                const file = new MessageAttachment(`assets/cats/${number}.jpg`)
                const embed = new MessageEmbed()
                    .setImage(`attachment://${number}.jpg`)

                interaction.reply({ embeds: [embed], files: [file] })
                break
            }
            case "flamingo": {
                const number =  Math.floor(Math.random()*31)
                const file = new MessageAttachment(`assets/flamingos/${number}.jpg`)
                const embed = new MessageEmbed()
                    .setImage(`attachment://${number}.jpg`)

                interaction.reply({ embeds: [embed], files: [file] })
                break
            }
        }
        
    }
