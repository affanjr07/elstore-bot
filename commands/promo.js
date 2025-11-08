// commands/promo.js
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'promo',           // panggil dengan: !promo
  description: 'Kirimkan embed promosi Jambi Store dengan tombol link',
  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#c0130d') // warna border embed, ganti sesuai selera
      .setAuthor({ name: 'EL STORE' })
      .setTitle('🛒 EL STORE ∘ PUSAT AKUN DIGITAL TERPERCAYA')
      .setDescription(`
🔥 Store akun terpercaya dan lengkap dan pastinya fast respon! Hanya di EL STORE ON TOP

💯 **LEGIT | MURAH | READY STOCK!**

🎯 **PRODUK UNGGULAN:**
• Akun Discord
• Akun Steam & Rockstar GTA 5
• Akun Netflix, Spotify, YouTube Premium (Coming Soon)
• CHEAT FIVEM PRIVATE | FULL FITUR

⚠️ **Kenapa harus EL STORE?**
✅ Store Baru dan Fresh  
✅ Sudah Pasti Terpercaya  
✅ Fast respon & layanan ramah  
✅ Harga bersaing

🛒 **ORDER SEKARANG!**
📎 Link Discord:
https://discord.gg/3GPxpH6Aks

🔐 Semua aman & terpercaya!
      `)

    // Tombol: Link ke bit.ly dan Discord (bisa diganti)
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('💬 Join Discord')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.gg/3GPxpH6Aks')
    );

    await message.channel.send({ embeds: [embed], components: [buttons] });
  },
};
