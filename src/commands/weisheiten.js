const { SlashCommandBuilder } = require("@discordjs/builders")

exports.data = new SlashCommandBuilder()
    .setName("masteroogway")
    .setDescription("use if you need some wisdom")
exports.execute = async (interaction) => {
        var wisdom = [
            "Ist der Finger oben, wird man dich loben.",
            "Steckst du den Finger in den Po, riecht er wahrscheinlich nach Scheiße.",
            "If she leaves you for another, there is always her mother.",
            "If she can't make you come you shall preceed with your mum.",
            "If her booty is big, take her home alone, even if she has an extra chromosome.",
            "If you want a girl to leave you alone, tell her among us is the game you play. She'll think you're gay.",
            "It is better to come in the sink, than to sink in the come.",
            "If your sister wants to give you head, you shall say go ahead.",
            "Don't be insecure, your inches being lower than eight will always be better than her being overweight.",
            "If she is blood related, she is free to be dated.",
            "If she sees you as a brother, you shall go for her mother.",
            "If she says we are done, her step-father you shall become",
            "If her booty does not bounce, the end of the relationship you shall announce.",
            "Jesus can turn water into wine, but I can turn your mother into mine.",
            "If it's the month September, you shall give him many nights to remember, so he can prepare for no nut November.",
            "It's better for your pp to smell like ass, than your ass to smell like pp.",
            "If you want to save water, take a bath with your neighbour's daughter.",
            "If she ugly but thicc, going behind her will do the trick.",
            "If she says I need some space, her sister shall take her place.",
            "If she says hey, she shall get the D the same day.",
            "If she won't do what you please, you shall make her mother go on her knees.",
            "If she can't make you come, you shall proceed to go to her mum.",
            "If her texts are dry, her coochie is wet from another guy.",
            "If she left you on blue, her mother you shall pursue.",
            "If your step sibling starts getting flirty, it is time to get dirty.",
            "If your girl is nerdy and geeky, she will always be down to be freaky.",
            "If she is making you mad, there is always her dad.",
            "If your girl isn't thicc, your sister you shall pick.",
            "If she is a twitch streamer, you shall double team her.",
            "If she has the same blood and DNA, she can suck the soul away.",
            "If her river runs red, you shall take the other hole instead.",
            "If she is your cousin, she is asking for some lovin.",
            "If your granny has dentures, it is fine to have some adventures.",
            "If you wanna get wet, you shall go find a pet.",
            "If her bodycount is over the thirties, beware of the curse called herpes.",
            "If you want to get soggy, there is always the neighbourhood doggy.",
            "When she replies with k, you shall make her :smiley_cat: pay",
            "Once she can say ABC, she is ready for the D",
            "Don't be so picky, if there's a hole, there's a goal",
            "If she forgets to bring the gummy, you shall put a baby in her tummy.",
            "If she says no, there is always her bro."

        ]
        var rand = Math.floor(Math.random()*wisdom.length)
        //const embed = new MessageEmbed().setField(`<:oogway:991057265773645914> ${wisdom[rand]}`)
        interaction.reply(`<:oogway:991057265773645914> ${wisdom[rand]}`)
    }