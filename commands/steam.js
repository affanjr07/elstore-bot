const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');

module.exports = {
  name: 'steam',
  description: 'Menampilkan produk Steam Store',
  async execute(message) {
    const file = new AttachmentBuilder('./commands/steam.png');
    const embed = new EmbedBuilder()
      .setColor('#c0130d')
      .setAuthor({ name: 'EL STORE' })
      .setTitle('Steam Account')
      .setDescription(`
Akun Steam Premium 🔥

**Varian & Harga:**
• Steam Fresh — Rp 5.000
      `)
      .setImage('attachment://steam.png')
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
