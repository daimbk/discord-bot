const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    // client.application.commands.set([]); used to delete all global slash commands
  },
};
