const fs = require('fs')
const chalk = require('chalk')

module.exports = groupupdate = async (alfia, pea) => {
// Get Profile Picture Group
try {
ppgc = await alfia.profilePictureUrl(pea[0].id, 'image')
} catch {
ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

let buttons = [
{ buttonId: 'menunyaya', 
buttonText: { displayText: 'menu' }, type: 1 },
{ buttonId: 'rules', 
buttonText: { displayText: 'rules' }, type: 1 }]
let jumhal = '100000000000000'
let text2 = 'Group Settings Change Message'

if (pea[0].announce == true) {
let capv1 = '「 *Group Settings Change* 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !'
alfia.sendMessage(pea[0].id, { image: { url: ppgc }, fileLength: jumhal, contextInfo: { mentionedJid: [num] }, caption: capv1, buttons: buttons, footer: text2})
} else if(pea[0].announce == false) {
let capv2 = '「 *Group Settings Change* 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !'
alfia.sendMessage(pea[0].id, { image: { url: ppgc }, fileLength: jumhal, contextInfo: { mentionedJid: [num] }, caption: capv2, buttons: buttons, footer: text2})
} else if (pea[0].restrict == true) {
let capv3 = '「 *Group Settings Change* 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !'
alfia.sendMessage(pea[0].id, { image: { url: ppgc }, fileLength: jumhal, contextInfo: { mentionedJid: [num] }, caption: capv3, buttons: buttons, footer: text2})
} else if (pea[0].restrict == false) {
let capv4 = '「 *Group Settings Change* 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !'
alfia.sendMessage(pea[0].id, { image: { url: ppgc }, fileLength: jumhal, contextInfo: { mentionedJid: [num] }, caption: capv4, buttons: buttons, footer: text2})
} else {
let capv5 = `「 *Group Settings Change* 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`
alfia.sendMessage(pea[0].id, { image: { url: ppgc }, fileLength: jumhal, contextInfo: { mentionedJid: [num] }, caption: capv5, buttons: buttons, footer: text2})
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})