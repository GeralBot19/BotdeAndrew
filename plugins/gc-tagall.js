let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `♠️ 𝙻𝙻𝙰𝙼𝙰𝙳𝙾 𝙶𝙴𝙽𝙴𝚁𝙰𝙻  ♠️: ${pesan}`
let teks =`📝 𝙼𝙴𝙽𝚂𝙰𝙹𝙴: 𝙰𝙽𝙾𝚃𝙰𝚃𝙴 𝙿𝙻𝙰𝙽𝚃𝙰 𝙾 𝚂𝙴𝚁𝙰𝚂 𝙲𝚄𝙿𝙾 \n\n❏ ${oi}\n❏ ♠️ @𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂 \n`
for (let mem of participants) {
teks += `♠️ @${mem.id.split('@')[0]}\n`}
teks += `➥♠️ 𝙱𝙾𝚃 𝙳𝙴 𝙰𝙽𝙳𝚁𝙴𝚆 ♠️`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
