// commands/promo.js
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'rules',           // panggil dengan: !promo
  description: 'Kirimkan embed rules EL Store dengan tombol link',
  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#c0130d') // warna border embed, ganti sesuai selera
      .setAuthor({ name: 'EL STORE' })
      .setTitle('RULES DAN TERMS OF SERVICE')
      .setDescription(`
Dengan membeli produk di EL Store, kamu setuju dengan semua syarat berikut:
📦 Produk
• Semua produk bersifat digital (akun premium, lisensi, dll).
• Pengiriman dilakukan otomatis/manual setelah pembayaran.
💳 Pembayaran
• Pembayaran via QRIS Only Seperti yang tertera di pembayaran
• Produk dikirim dalam 5–30 menit (maks), kecuali ada kendala.
✅ Garansi
• Garansi 24 jam jika:
Ada bukti video/screenshot lengkap.
Tidak ada perubahan data oleh pembeli.
• Tidak berlaku jika akun dibanned karena pelanggaran.
❌ Refund
• Tidak ada refund kecuali karena kesalahan kami.
• Refund tidak berlaku karena salah beli, salah login, atau pelanggaran aturan platform.
⚠️ Penggunaan Produk
• Hanya untuk penggunaan pribadi.
• Dilarang untuk kegiatan ilegal, spam, atau melanggar ToS platform.
🔒 Privasi
• Data kamu aman dan tidak dibagikan tanpa izin.
🛠️ Perubahan
• EL Store berhak mengubah harga, stok, & layanan kapan saja.
👥 Aturan Server Discord
• Hormati semua anggota & staff.
• Dilarang flame, toxic, spam, atau post konten SARA/NSFW.
• Gunakan channel sesuai fungsi. O
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
