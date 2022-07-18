let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*─> [ BIODATA OWNER ] <─*
*💌 Nama* : YogzKyz
*✉️ Nama RL* : Yogi
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 10 Maret 2005
*🎨 Umur* : 17
*🧮 Kelas* : 12
*🧩 Hobby* : Turu
*💬 Sifat* : Kalem Kok Tenang Aja
*🗺️ Tinggal* : Mars
*❤️ Suka* : Warna Hijau, Hitam, Putih and Kamuh😙
*💔 Benci* : Autis and Seleb

*─> [ SOSIAL MEDIA ] <─*
*📷 instagran* : @karfuanyogich
*🎟️ TikTok* : @yogzkyzx
*🏮 ChYoutube* : YogzKy
*🐈 Github:* ZennSky

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
