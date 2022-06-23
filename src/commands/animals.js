const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

exports.data = new SlashCommandBuilder()
    .setName("imsad")
    .setDescription("sends you a cute image")

exports.execute = async (interaction) => {
        const embed = new MessageEmbed().setImage('https://3.bp.blogspot.com/-e9iaysd5X1E/UDJmovqjrYI/AAAAAAAAAaE/lQVAJcSeCtA/s1600/catpicturess+(4).jpg')
        interaction.reply({ embeds: [embed] })
    }
