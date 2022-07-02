import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 』*', `Halo, Aku Bot WhatsApp Dan Aku Diberi Nama ZennSky-Botz Oleh Ownerku<3.\n\nSilahkan klik tombol menu untuk Mengakses bot ini\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://youtube.com/channel/UCY8LFcKLPctR4SoeAH1DVSA', '𝐘𝐓 𝐎𝐖𝐍𝐄𝐑', null, null, [
[`𝙼𝙴𝙽𝚄`, '.m'],
[`\nSebenernya Gua Itu Tukang Ngocok Guys:)`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
