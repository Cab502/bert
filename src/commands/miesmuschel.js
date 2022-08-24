const { SlashCommandBuilder, EmbedBuilder } = require("@discordjs/builders")
const advices = require("../../assets/miesmuschel/advices.json")

exports.data = new SlashCommandBuilder()
    .setName("miesmuschel")
    .setDescription("use if you need some guidance in your life")
    .addStringOption(option => option.setName("question").setDescription("ask a specific question, the miesmuschel should answer").setRequired(true)), 
exports.execute = async (interaction) => {
        const advicesArr = advices.statements
        var rand = Math.floor(Math.random()*advicesArr.length)
        const inputQuestion = interaction.options.getString('question');

        const embed = new EmbedBuilder()
            .addFields([
                { name: inputQuestion, value: `<:miesmuschel:988448308559216701> ${advicesArr[rand]}` },
            ])

        interaction.reply({ embeds: [embed] })
    }