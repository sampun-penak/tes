let handler = async (m, { conn, command }) => {
if (!m.quoted) throw 'Reply pesan yang ingin dihapus'
try {
let meng = m.message.extendedTextMessage.contextInfo.participant
let hapus = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: hapus, participant: meng }})
 } catch {
    return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['del', 'delete']
handler.tags = ['tools']

handler.command = /^d(el(ete|m)|el|fa)?$/i

export default handler