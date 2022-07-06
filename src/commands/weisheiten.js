const { SlashCommandBuilder } = require("@discordjs/builders")
const wisdom = require("../../assets/oogway/wisdom.json")

exports.data = new SlashCommandBuilder()
    .setName("masteroogway")
    .setDescription("use if you need some wisdom")
exports.execute = async (interaction) => {
        const wisdomArr = wisdom.statements
        var rand = Math.floor(Math.random()*wisdomArr.length)
        //const embed = new MessageEmbed().setField(`<:oogway:991057265773645914> ${wisdom[rand]}`)
        interaction.reply(`<:oogway:991057265773645914> ${wisdomArr[rand]}`)
    }