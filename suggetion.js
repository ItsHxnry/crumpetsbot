const { MessageEmbed } = require("discord.js") //IMPORT MESSAGE EMBED


module.exports = {
  name: "suggest", //command namme
  usage: "suggest <message>", //how to use command?
  description: "Send your Suggestion", //Something about command
  category: "main", //Category of command
  run: (client, message, args) => {
    
     if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
     let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
                  
    
  }
}