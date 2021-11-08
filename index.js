//--------------------------------------------------
//----------------- THE BEGINNING ------------------
//--------------------------------------------------

// BEGIN

const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

//--------------------------------------------------
//-------------------- COMMANDS --------------------
//--------------------------------------------------

const data = new SlashCommandBuilder()
    .setName("test")
    .setDescription("tester")
    .addUserOption(option => option
        .setName("user")
        .setDescription("test again...")
        .setRequired(false));

// PREFIXES

const prefix = "in!"; // general
const prefix2 = "in!a "; // admin commands
const prefix3 = "in!m"; // message commands
const prefix4 = "in!i "; // informations commands

// CONSTANT CLIENT ON

Client.on("ready", () => {

    Client.user.setActivity('in!help', { type: 'PLAYING' });

    //Client.application.commands.create(data);
    Client.guilds.cache.get("882921710477783041").commands.create(data);

    console.log("Noivern est enclenché");
});

//--------------------------------------------------
//------------------ INTERACTIONS ------------------
//--------------------------------------------------

Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "test"){
            let user = interaction.options.getUser("user");

            if(user != undefined){
                interaction.reply("pong <@" + user.id + ">");
            }
            else {
                interaction.reply("test");
            }
        }
    }
});

//--------------------------------------------------
//-------------------- MESSAGES --------------------
//--------------------------------------------------

// HELP

Client.on("messageCreate", message => {
    if (message.author.author) return;

    //in!help
    if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle("**There is all the commands avaible for now with me:**")
        message.delete()
        message.author.send({embeds : [embed]})
    }
});

// GENERAL MESSAGES

Client.on("messageCreate", message => {
    if (message.content === "rules yes"){
        const embed = new Discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle("**rules a**")
        .addField("test", "teste")
        message.delete()
        message.channel.send({embeds : [embed]})
    }
});

// ADMINISTRATIVE

Client.on("guildMemberAdd", member => {
    member.guild.channels.cache.find(channel => channel.id === "882921710909812777").send(member.displayName + " is coming!");
});

Client.on("guildMemberRemove", member => {
    member.guild.channels.cache.find(channel => channel.id === "882921710909812777").send(member.displayName + " has gone F...");
});










Client.login("ODk4OTMxNjU0NzI5NTY0MjAx.YWrZVw.y33JxjWZo-7ZMJFs7hSvZ78n6_c");