const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');

module.exports = {
  name: 'netflix',
  description: 'Menampilkan produk Netflix Premium',
  async execute(message) {
    const file = new AttachmentBuilder('./commands/netflix.png');
    const embed = new EmbedBuilder()
      .setColor('#c0130d')
      .setAuthor({ name: 'EL STORE' })
      .setTitle('Netflix Premium')
      .setDescription(`
Akun Netflix Premium 🔥

**Varian & Harga:**
• Private 1P1U — Rp 42.000
• Sharing 1P2U — Rp 30.000
• 1 Day 1U — Rp 15.000
      `)
      .setImage('attachment://netflix.png')
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
