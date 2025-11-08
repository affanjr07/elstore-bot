const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');

module.exports = {
  name: 'discord',
  description: 'Menampilkan produk Discord Store',
  async execute(message) {
    const file = new AttachmentBuilder('./commands/discord.png');
    const embed = new EmbedBuilder()
      .setColor('#c0130d')
      .setAuthor({ name: 'EL STORE' })
      .setTitle('Discord Account')
      .setDescription(`
Akun Discord Premium 🔥

**Varian & Harga:**
• Discord Fresh — Rp 15.000
      `)
      .setImage('attachment://discord.png')
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
