import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 』*', `Halo, Aku Bot WhatsApp Dan Aku Diberi Nama Araa-Botz Oleh Ownerku yang paling Cantik Nan Imut<3.\n\nSilahkan klik tombol MENU untuk Mengakses Bot Ini\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://youtube.com/channel/UCY8LFcKLPctR4SoeAH1DVSA', '𝐆𝐑𝐔𝐏 𝐁𝐎𝐓𝐙', null, null, [
[`𝙼𝙴𝙽𝚄`, '.m'],
[`\nAraa Cantik😙:)`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
