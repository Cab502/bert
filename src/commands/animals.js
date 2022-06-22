const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed, MessageAttachment } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder().setName("image").setDescription("sends you a cute image"), 
    async execute(interaction) {
        const embed = new MessageEmbed().setImage('https://3.bp.blogspot.com/-e9iaysd5X1E/UDJmovqjrYI/AAAAAAAAAaE/lQVAJcSeCtA/s1600/catpicturess+(4).jpg')
        
        interaction.reply({ embeds: [embed] })
    }
}