import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("hi")
  .setDescription("Replies with Hey!");

export async function execute(interaction) {
  await interaction.reply("Hey!");
}
