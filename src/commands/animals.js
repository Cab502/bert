const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageAttachment, MessageEmbed } = require("discord.js")

exports.data = new SlashCommandBuilder()
    .setName("imsad")
    .setDescription("sends you a cute image")

exports.execute = async (interaction) => {
        const number =  Math.floor(Math.random()*44)
        const file = new MessageAttachment(`assets/cats/${number}.jpg`)
        const embed = new MessageEmbed()
            .setImage(`attachment://${number}.jpg`)

        interaction.reply({ embeds: [embed], files: [file] })
    }
