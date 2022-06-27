const { SlashCommandBuilder } = require("@discordjs/builders")

exports.data = new SlashCommandBuilder()
    .setName("weisheit")
    .setDescription("use if you need some wisdom")
exports.execute = async (interaction) => {
        var wisdom = [
            "Ist der Finger oben, wird man dich loben",
            "test"
        ]
        var rand = Math.floor(Math.random()*wisdom.length)

        interaction.reply(`${wisdom[rand]}`)
    }