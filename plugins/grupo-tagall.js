let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*ᴅᴇʟᴛᴀ_ꜰᴏʀᴄᴇᴏꜰɪ* ${pesan}`
let teks = `*✨  ʜᴏʀᴀ ᴅᴇ ᴀᴄᴛɪᴠᴀʀ ᴘʟᴀɴᴛᴀꜱ  ✨*\n\n${oi}\n\n *🧙🏻‍♂️➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂*\n`  
for (let mem of participants) {
teks += `➮@${mem.id.split('@')[0]}\n`}
teks += `└ 𝙰𝙽𝙾𝚃𝙴𝙽𝚂𝙴 𝙽𝙸ñ𝙾𝚂\n\n*:>*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
