const { SlashCommandBuilder } = require("@discordjs/builders")
const wisdom = require("../../assets/oogway/wisdom.json")

exports.data = new SlashCommandBuilder()
    .setName("tarot")
    .setDescription("Command simulates a tarot deck")
    .addSubcommand(subCommand => subCommand
        .setName("help")
        .setDescription("Help page to use the tarot application"))
    .addSubcommand(subCommand => subCommand
        .setName("card")
        .setDescription("Reacts with a single tarot card"))
    .addSubcommand(subCommand => subCommand
        .setName("spread")
        .setDescription("Gives you a selection of spreads to choose from"))
    .addSubcommand(subCommand => subCommand
        .setName("explain")
        .setDescription("Gives you a detailed explanation to the card with the id you add"))
        /*.addStringOption(option => option
            .setName("id")
            .setDescription("Get an explanation of the card you have drawn")
            .setRequired(true))*/

exports.execute = async (interaction) => {
    switch(interaction.options.getSubcommand()){
        case "help": {
            interaction.reply("coming soon")
            break
        }
        case "card": {
            var card = getRandomCard()
            interaction.reply(`${card}`)
            break
        }
        case "spread": {
            interaction.reply("coming soon")
            break
        }
        case "explain": {
            interaction.reply("coming soon")
        }
    }
    }

function getRandomCard(){
    return "null"
}