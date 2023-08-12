const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("hi")
    .setDescription("Replies with Hey!"),
  async execute(interaction) {
    return interaction.reply("Hey!");
  },
};
