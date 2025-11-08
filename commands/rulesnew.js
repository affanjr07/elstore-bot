// commands/promo.js
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'ruless',           // panggil dengan: !promo
  description: 'Kirimkan embed rules EL Store dengan tombol link',
  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#c0130d') // warna border embed, ganti sesuai selera
      .setAuthor({ name: 'EL STORE' })
      .setTitle('RULES DAN TERMS OF SERVICE')
      .setDescription(`
**Kami tidak mengembangkan alat ini dan merupakan layanan penjualan kembali premium. Kami di EL STORE tidak menyarankan atau membenarkan, dengan cara apa pun, dalam bentuk apa pun, penggunaan perangkat lunak apa pun yang dijual dari toko kami dalam permainan online.**
      `)

    // Tombol: Link ke bit.ly dan Discord (bisa diganti)
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('💬 Open Ticket')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.gg/erx4DVPRJy')
    );

    await message.channel.send({ embeds: [embed], components: [buttons] });
  },
};
