const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');


module.exports = {
  name: 'fivem',
  description: 'Menampilkan produk Cheat Fivem',
  async execute(message) {
    const file = new AttachmentBuilder('./commands/fivem.png');
    const embed = new EmbedBuilder()
      .setColor('#c0130d')
      .setAuthor({ name: 'EL STORE' })
      .setTitle('Cheat Fivem')
      .setDescription(`
Cheat Fivem Premium 🔥

**Varian & Harga:**
• Red Engine
• Susanoo
• Keyser
• Hx

      `)
      .setImage('attachment://fivem.png')
      .setFooter({ text: 'EL Store • Terpercaya!' });

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('💬 Beli Via Tiket')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.gg/erx4DVPRJy')
    );

    await message.channel.send({ embeds: [embed], components: [button], files: [file] });
  },
};
