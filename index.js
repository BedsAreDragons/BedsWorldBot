let Discord = require("discord.js")
let client = new Discord.Client()
const express = require("express")
const app = express()
const canvacord = require("canvacord")

app.get("/", (req, res) => {
 res.send("HOSTED WITH DCB HOSTING123")
})

app.listen(3000, () => {
 console.log("HOSTED WITH DCB HOSTING")
})

client.on("guildMemberAdd", async member => {
 if(member.guild.id !== "863753270359097354") return;
 const welcomeCard = new canvacord.Welcomer()
 .setUsername(member.user.username)
 .setDiscriminator(member.user.discriminator)
 .setAvatar(member.user.displayAvatarURL({format :"png"}))
 .setColor("title", "#34a4eb")
 .setColor("username-box", "#34a4eb")
 .setColor("discriminator-box", "#34a4eb")
 .setColor("message-box", "#34a4eb")
 .setColor("border", "#090a09")
 .setColor("avatar", "#090a09")
 .setBackground("http://images.unsplash.com/photo-1522865080725-2a9ea1fcb94e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max%22%22%22")
 .setMemberCount(member.guild.memberCount)
 let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
 member.guild.channels.cache.get("863792279898816512").send (`${member.user.username} Just joined.`, attachment)
 message.member.send("Thanks for joining.")
})

client.on("guildMemberRemove", async member => {
 if(member.guild.id !== "863753270359097354") return;
 const welcomeCard = new canvacord.Leaver()
 .setUsername(member.user.username)
 .setDiscriminator(member.user.discriminator)
 .setAvatar(member.user.displayAvatarURL({format :"png"}))
 .setColor("title", "#34a4eb")
 .setColor("username-box", "#34a4eb")
 .setColor("discriminator-box", "#34a4eb")
 .setColor("message-box", "#34a4eb")
 .setColor("border", "#090a09")
 .setColor("avatar", "#090a09")
 .setBackground("http://images.unsplash.com/photo-1522865080725-2a9ea1fcb94e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max%22%22%22")
 .setMemberCount(member.guild.memberCount)
 let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "bye.png")
 member.guild.channels.cache.get("863792607548932126").send (`${member.user.username} Just left.`, attachment)
})

client.on("message", message => {
  if(message.content.toLowerCase().includes("wtf")) {
    message.delete()
    message.author.send(`${message.author} I had to delete your message as it was Inappropriate.`)
  }
  if(message.content.toLowerCase() === "verify") {
let role = message.guild.roles.cache.find(role => role.name === "Member")
if(message.member.roles.cache.has(role.id)) {
  message.author.send(`You are already verified.`)
  message.delete()
} else {
message.member.roles.add(role)
message.author.send(`You have been Verfied.`)
message.delete()
  }
  }
  if(message.content === "?leaveserver"){
  message.author.send("You left right?")
  message.channel.send(`${message.author.username} Just left. OOF.`)
  message.member.kick()
}
})

client.login(process.env.token)