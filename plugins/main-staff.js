let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

• Alteración Knigth
🎩 *Rol:* Sin rol 
💛 *Número:* Wa.me/50760276593

• Nick's chacon
🍭 *Rol* creación y edición de logos
💛 *Numero:* Wa.me/50240447765

• 𝐏𝐫𝐚𝐤 𝐇𝐚𝐫𝐩𝐞𝐫 
🎩 *Rol:* Developer y Editor Profesional
💛 *Número:* Wa.me/584241836217

• 𝐈𝐬𝐚𝐛𝐞𝐥 (isa)
🍭 *Rol:* Experiencia En Diseños De Logos /Editora Profesional
💛 *Número:* Wa.me/529831715910

• 𝐒𝐞𝐧𝐧𝐚 
🎩 *Rol:* Experiencia En Mantenimiento y Soporte Del Bot
💛 *Número:* Wa.me/51971867199

• Angel
🍭 *Rol:* Experiencia En Gestión De Grupos
💛 *Numero:* Wa.me/50368471855

• 𝐃𝐞𝐲𝐥𝐢𝐧 
🎩 *Rol:* Experiencia En Redacción y Decoración De Textos
💛 *Número:* Wa.me/

• 𝐎𝐫𝐥𝐚𝐧𝐝𝐨
🍭 *Rol:* Gestión De Grupos
💛 *Número:* Wa.me/522731590195

• 𝐉𝐨𝐤𝐞𝐫 𝐲 𝐖𝐡𝐢𝐭𝐞 
🎩 *Rol:* Bots Oficiales
💛 *Número:* Privado🫵🏻
`
await conn.sendFile(m.chat, 'https://files.catbox.moe/h094yg.jpg', 'brook.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🎩 STAFF OFICIAL🌟`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler