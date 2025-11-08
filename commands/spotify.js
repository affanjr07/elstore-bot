const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');

module.exports = {
  name: 'spotify',
  description: 'Menampilkan produk Spotify Premium',
  async execute(message) {
    const file = new AttachmentBuilder('./commands/spotify.png');
    const embed = new EmbedBuilder()
      .setColor('#c0130d')
      .setAuthor({ name: 'EL STORE' })
      .setTitle('Spotify Premium')
      .setDescription(`
Akun Spotify Premium 🔥

**Varian & Harga:**
**NON SHARING**
• 1 Mounth — Rp 30.000
• 2 Mounth — Rp 45.000      `)
      .setImage('attachment://spotify.png')
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
