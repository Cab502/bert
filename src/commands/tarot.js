const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageAttachment, MessageEmbed } = require("discord.js")
const cards = require("../../assets/tarot/card_data.json")

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
        .setDescription("Gives you a detailed explanation to the card with the id you add. Only you can see the answer")
        .addStringOption(option => option
            .setName("id-or-name")
            .setDescription("Get an explanation of the card you have drawn")
            .setRequired(true)))

exports.execute = async (interaction) => {
    const cardsArr = cards.cards

    switch(interaction.options.getSubcommand()){
        case "help": {
            interaction.reply("coming soon")
            break
        }
        case "card": {
            var rand = Math.floor(Math.random()*cardsArr.length)
            var card = cardsArr[rand]
            var image = card.img

            //send message
            const file = new MessageAttachment(`assets/tarot/cards/${image}`)
            const embed = new MessageEmbed()
            .setTitle(card.name)
            .setDescription(`Number: ${card.number}`)
            .setImage(`attachment://${image}`)
            
            interaction.reply({ embeds: [embed], files: [file] })
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