const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

exports.data = new SlashCommandBuilder()
    .setName("miesmuschel")
    .setDescription("use if you need some guidance in your life")
    .addStringOption(option => option.setName("question").setDescription("ask a specific quetion, the miesmuschel should answer").setRequired(true)), 
exports.execute = async (interaction) => {
        var advices = [
            "Du stinkst",
            "Nein",
            "Ja",
            "Frag mich nochmal in 2 Stunden",
            "Deine Mutter sagt ja",
            "vielleicht",
            "42",
            "Juckt mich nicht",
            "Seh ich so aus als ob mich das interessiert?",
            "Sicher nicht",
            "Das weiß ich nicht",
            "Theoretisch schon",
            "Eigentlich nicht",
            "Garantiert nicht",
            "Das ist nicht so",
            "Ich würde ja sagen",
            "Das ist richtig",
            "Frag mich nochmal",
            "WEEEEEEEEEEEEEEEEEEEEEEEE",
            "Nüsse sind gesund",
            "Egal",
            "Heute nicht",
            "Wahrscheinlich",
            "Unwahrscheinlich",
            "Keine Ahnung",
            "Eines Tages vielleicht",
            "Keine Ahnung, im Zweifelsfall nimm Drogen",
            "Bin beschäftigt"

        ]
        var rand = Math.floor(Math.random()*advices.length)
        const inputQuestion = interaction.options.getString('question');

        const embed = new MessageEmbed()
            .addField(inputQuestion, `<:miesmuschel:988448308559216701> ${advices[rand]}`)

        interaction.reply({ embeds: [embed] })
    }