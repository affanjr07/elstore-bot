const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');

module.exports = {
  name: 'youtube',
  description: 'Menampilkan produk Youtube Premium',
  async execute(message) {
    const file = new AttachmentBuilder('./commands/yt.png');

    const embed = new EmbedBuilder()
      .setColor('#c0130d')
      .setAuthor({ name: 'EL STORE' })
      .setTitle('Youtube Premium')
      .setDescription(`
Akun Youtube Premium 🔥

**Varian & Harga:**
• 1 Mounth — Rp 20.000
• 2 Mounth — Rp 35.000
• 3 Mounth — Rp 40.000
      `)
      .setImage('attachment://yt.png')
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
