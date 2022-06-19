const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("advice")
    .setDescription("use if you need some guidance in your life"), 
    async execute(interaction) {
        var advices = [
        "Seasons come and go. Flowers continue to dance. A stone  won't notice.", 
        "The elites don't want you to know this but the ducks at the park are free you can take them home. I have 458 ducks."
        ]
        var rand = Math.floor(Math.random()*advices.length)
        interaction.reply(`${advices[rand]}`)
    }
}