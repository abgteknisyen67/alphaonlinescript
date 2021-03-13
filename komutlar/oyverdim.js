const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  const snekfetch = require("snekfetch");
  snekfetch.get(`https://top.gg/api/bots/779634457463750688/check?userId=${message.author.id}`)
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3OTYzNDQ1NzQ2Mzc1MDY4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExMzk3NjAyfQ.h6Qgks1-3sWZSGZ7KMi_Am7meqq9zZRe6fYRlO3c-iw")
      .then(response => {
          var check = response.body.voted;
          if(check == 1) {
message.channel.send('oy verilmiş hll')
  } else {
    let embed = new Discord.MessageEmbed()
        .setTitle('Ups!')
        .setColor('RED')
        .setDescription(`<:codearius:771465322800349244> Üzgünüm, bu komutu kullanmak için **[buradan](https://top.gg/bot/779634457463750688/vote)** oy vermeniz gerekmektedir, oyu verdikten sonra \`1\` ila \`4\` dakika arası beklemelisiniz.`)
    message.channel.send(embed)
    return
   }})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyverdim"],
  permLevel: 0
};

exports.help = {
  name: "oyveren",
  description: "Premium Hizmetleri",
  usage: "premium"
};