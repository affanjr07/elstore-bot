const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');

module.exports = {
  name: 'rockstar',
  description: 'Menampilkan produk Rockstar Store',
  async execute(message) {
    const file = new AttachmentBuilder('./commands/rockstar.png');
    const embed = new EmbedBuilder()
      .setColor('#c0130d')
      .setAuthor({ name: 'EL STORE' })
      .setTitle('Rockstar Account')
      .setDescription(`
Akun Rockstar Premium 🔥

**Varian & Harga:**
• Rockstar Private — Rp 30.000
• Random Account — Rp 13.000
      `)
      .setImage('attachment://rockstar.png')
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
