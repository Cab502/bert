const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

exports.data = new SlashCommandBuilder()
    .setName("weisheit")
    .setDescription("use if you need some wisdom")
exports.execute = async (interaction) => {
        var wisdom = [
            "Ist der Finger oben, wird man dich loben"
        ]
        var rand = Math.floor(Math.random()*advices.length)
        const inputQuestion = interaction.options.getString('question');

        const embed = new MessageEmbed()
            .addField(inputQuestion, `${wisdom[rand]}`)

        interaction.reply({ embeds: [embed] })
    }