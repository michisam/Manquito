let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*@ancelzzz* ${pesan}`
let teks = `*🧙🏻‍♂️𝕬𝖓𝖈𝖊𝖑𝖘𝖎𝖓̃𝖍𝖔 𝖑𝖔𝖘 𝕴𝖓𝖛𝖔𝖈𝖆 𝖒𝖆𝖓𝖈𝖔𝖘, 𝕬𝖈𝖙𝖎𝖛𝖊𝖓𝖘𝖊💢🧙🏻‍♂️*\n\n${oi}\n\n *🧙🏻‍♂️➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂*\n`  
for (let mem of participants) {
teks += `🍃៚@${mem.id.split('@')[0]}\n`}
teks += `└ 𝐁𝐲 𝐀𝐧𝐜𝐞𝐥𝐮 - 𝐁𝐨𝐭\n\n*:>*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
