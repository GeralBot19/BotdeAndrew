let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🔰 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖𝙡 𝙡𝙖𝙨 𝙘𝙪𝙚𝙣𝙩𝙖𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘
🔰 *Wa.me/51935763050*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ WSP 
*tps://chat.whatsapp.com/EW1SH664vlu3UVOC9ILCnS*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙞 𝙩𝙞𝙚𝙣𝙚𝙣 𝙙𝙪𝙙𝙖𝙨, 𝙨𝙪𝙜𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨, 𝙤 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖𝙨 𝗲𝘀𝗰𝗿𝗶𝗯𝗶 𝗽𝗼𝗿 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
//await conn.sendFile(m.chat, media, str, fkontak)
/*conn.sendButton(m.chat, str, ``, media, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)}*/

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdeloli|cuentasdelolibot|cuentalolibot|cuentasgatabot$/i
handler.exp = 35
export default handler
