const fs = require('fs')
const chalk = require('chalk')



exports.menu = (prefix, simbol1, gaya01, ucapanWaktu, botname, ownernya, runtime, pushname, me, isPremium, hariini, barat, tengah, timur, os, tahunbaru, bulanpuasa, idulfitri, iduladha) => {
return `
*${ucapanWaktu}*

${simbol1}「 IᑎᖴO ᗷOT 」
${gaya01} 𝙷𝚘𝚜𝚝𝚗𝚊𝚖𝚎 : ${os.hostname()}
${gaya01} 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
${gaya01} 𝙱𝚘𝚝 𝙽𝚊𝚖𝚎 : ${botname}
${gaya01} 𝙾𝚠𝚗𝚎𝚛 𝙽𝚊𝚖𝚎 : @${ownernya.split('@')[0]}
${gaya01} 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}

${simbol1}「 IᑎᖴO ᑌᔕEᖇ 」
${gaya01} 𝙽𝚊𝚖𝚊 : ${pushname}
${gaya01} 𝙽𝚞𝚖𝚋𝚎𝚛 : @${me.split('@')[0]}
${gaya01} 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 : ${isPremium ? `Yes` : 'No'}

${simbol1}「 ᗯᗩKTᑌ IᑎᗪOᑎEᔕIᗩ 」
${gaya01} 𝙷𝚊𝚛𝚒 𝙸𝚗𝚒 :
${gaya01} ${hariini}
${gaya01} 𝚃𝚒𝚖𝚎 ${barat} 𝚆𝙸𝙱
${gaya01} 𝚃𝚒𝚖𝚎 ${tengah} 𝚆𝙸𝚃𝙰
${gaya01} 𝚃𝚒𝚖𝚎 ${timur} 𝚆𝙸𝚃

${simbol1}「 ᗯᗩKTᑌ ᗰEᑎᑌᒍᑌ 」
${gaya01} 𝚃𝚊𝚑𝚞𝚗 𝙱𝚊𝚛𝚞 : 
${tahunbaru}
${gaya01} 𝙱𝚞𝚕𝚊𝚗 𝙿𝚞𝚊𝚜𝚊 :
${bulanpuasa}
${gaya01} 𝙸𝚍𝚞𝚕 𝙵𝚒𝚝𝚛𝚒 : 
${idulfitri}
${gaya01} 𝙸𝚍𝚞𝚕 𝙰𝚍𝚑𝚊 : 
${iduladha}
`
}

exports.menu2 = (prefix, simbol2, gaya02) => {
return `
${simbol2} *「 Group Menu 」*
${gaya02} ${prefix}linkgroup
${gaya02} ${prefix}listadmin
${gaya02} ${prefix}afk
${gaya02} ${prefix}ephemeral [option]
${gaya02} ${prefix}setppgc full [image]
${gaya02} ${prefix}setname [text]
${gaya02} ${prefix}setdesc [text]
${gaya02} ${prefix}group [option]
${gaya02} ${prefix}editinfo [option]
${gaya02} ${prefix}add @user
${gaya02} ${prefix}kick @user
${gaya02} ${prefix}hidetag [text]
${gaya02} ${prefix}tagall [text]
${gaya02} ${prefix}antilink [on/off]
${gaya02} ${prefix}antiwame [on/off]
${gaya02} ${prefix}antiall [on/off]
${gaya02} ${prefix}mute [on/off]
${gaya02} ${prefix}promote @user
${gaya02} ${prefix}demote @user

${simbol2} *「 Search Menu 」*
${gaya02} ${prefix}play
${gaya02} ${prefix}ytsearch
${gaya02} ${prefix}ytsearch2
${gaya02} ${prefix}pinterest

${simbol2} *「 Downloader Menu 」*
${gaya02} ${prefix}tiktoknowm [url]
${gaya02} ${prefix}tiktokwm [url]
${gaya02} ${prefix}tiktokmp3 [url]
${gaya02} ${prefix}ytmp3 [url]
${gaya02} ${prefix}ytmp4 [url]
${gaya02} ${prefix}getmusic [query]
${gaya02} ${prefix}getvideo [query]
${gaya02} ${prefix}gitclone *repo github*

${simbol2} *「 Convert Menu 」*
${gaya02} ${prefix}attp
${gaya02} ${prefix}ttp
${gaya02} ${prefix}qrcode
${gaya02} ${prefix}toimage
${gaya02} ${prefix}removebg
${gaya02} ${prefix}sticker
${gaya02} ${prefix}tovideo
${gaya02} ${prefix}togif
${gaya02} ${prefix}tourl
${gaya02} ${prefix}tovn
${gaya02} ${prefix}tomp3
${gaya02} ${prefix}toaudio
${gaya02} ${prefix}toqr
${gaya02} ${prefix}smeme
${gaya02} ${prefix}styletext
${gaya02} ${prefix}ringtone

${simbol2} *「 Emoji Menu 」*
${gaya02} ${prefix}iphoneemoji *emoji*
${gaya02} ${prefix}googleemoji *emoji*
${gaya02} ${prefix}samsungemoji *emoji*
${gaya02} ${prefix}microsoftemoji *emoji*
${gaya02} ${prefix}whatsappemoji *emoji*
${gaya02} ${prefix}twitteremoji *emoji*
${gaya02} ${prefix}facebookemoji *emoji*
${gaya02} ${prefix}skypeemoji *emoji*
${gaya02} ${prefix}joyemoji *emoji*
${gaya02} ${prefix}mojiemoji *emoji*
${gaya02} ${prefix}pediaemoji *emoji*
${gaya02} ${prefix}instagramemoji *emoji*

${simbol2} *「 Kata² Menu 」*
${gaya02} ${prefix}katabijak
${gaya02} ${prefix}katacinta
${gaya02} ${prefix}katailham
${gaya02} ${prefix}katagalau
${gaya02} ${prefix}katabucin
${gaya02} ${prefix}katagombal
${gaya02} ${prefix}katasindiran
${gaya02} ${prefix}katakataimage

${simbol2} *「 Other Menu 」*
${gaya02} ${prefix}puisi
${gaya02} ${prefix}pantun
${gaya02} ${prefix}faktaunik
${gaya02} ${prefix}truthordare

${simbol2} *「 Quotes Menu 」*
${gaya02} ${prefix}quotes
${gaya02} ${prefix}quotesanime
${gaya02} ${prefix}quoteskanye
${gaya02} ${prefix}quotesislami
${gaya02} ${prefix}quotesdilan
${gaya02} ${prefix}quotesff
${gaya02} ${prefix}quotespubg
${gaya02} ${prefix}quoteshacker
${gaya02} ${prefix}quotesimage

${simbol2} *「 Image Menu 」*
${gaya02} ${prefix}ppcouple
${gaya02} ${prefix}darkjokes
${gaya02} ${prefix}meme
${gaya02} ${prefix}renungan
${gaya02} ${prefix}doraemon
${gaya02} ${prefix}pokemon
${gaya02} ${prefix}pentol
${gaya02} ${prefix}kartun
${gaya02} ${prefix}boneka

${simbol2} *「 Maker Menu 」*
${gaya02} ${prefix}girlnekomaker [Teks1|Teks2]
${gaya02} ${prefix}sadboymaker [Teks1|Teks2]
${gaya02} ${prefix}kanekimaker [Teks]
${gaya02} ${prefix}remmaker [Teks]
${gaya02} ${prefix}lolimaker [Teks]
${gaya02} ${prefix}guramaker [Teks]

${simbol2} *「 Story Menu 」*
${gaya02} ${prefix}storysholawat
${gaya02} ${prefix}storytruk
${gaya02} ${prefix}storybus
${gaya02} ${prefix}storymeme
${gaya02} ${prefix}storycogan
${gaya02} ${prefix}storycecan
${gaya02} ${prefix}storyanime
${gaya02} ${prefix}storybucin
${gaya02} ${prefix}storygalau
${gaya02} ${prefix}storywa
${gaya02} ${prefix}storybeatvn
${gaya02} ${prefix}storyff
${gaya02} ${prefix}storyml
${gaya02} ${prefix}storypubg

${simbol2} *「 Sound Menu 」*
${gaya02} ${prefix}soundrandom
${gaya02} ${prefix}sound1
${gaya02} ${prefix}sound2
${gaya02} ${prefix}sound3
${gaya02} ${prefix}sound4
${gaya02} ${prefix}sound5
_Dan seterusnya sampai 159_
_Contoh ${prefix}sound100_

${simbol2} *「 Cerpen Menu 」*
${gaya02} ${prefix}cerpen-anak
${gaya02} ${prefix}cerpen-bahasadaerah
${gaya02} ${prefix}cerpen-bahasainggris
${gaya02} ${prefix}cerpen-bahasajawa
${gaya02} ${prefix}cerpen-bahasasunda
${gaya02} ${prefix}cerpen-budaya
${gaya02} ${prefix}cerpen-cinta
${gaya02} ${prefix}cerpen-cintaislami
${gaya02} ${prefix}cerpen-cintapertama
${gaya02} ${prefix}cerpen-cintaromantis
${gaya02} ${prefix}cerpen-cintahsedih
${gaya02} ${prefix}cerpen-cintasegitiga
${gaya02} ${prefix}cerpen-cintasejati
${gaya02} ${prefix}cerpen-galau
${gaya02} ${prefix}cerpen-gokil
${gaya02} ${prefix}cerpen-inspiratif
${gaya02} ${prefix}cerpen-jepang
${gaya02} ${prefix}cerpen-kehidupan
${gaya02} ${prefix}cerpen-keluarga
${gaya02} ${prefix}cerpen-kisahnyata
${gaya02} ${prefix}cerpen-korea
${gaya02} ${prefix}cerpen-kristen
${gaya02} ${prefix}cerpen-liburan
${gaya02} ${prefix}cerpen-malaysia
${gaya02} ${prefix}cerpen-mengharukan
${gaya02} ${prefix}cerpen-misteri
${gaya02} ${prefix}cerpen-motivasi
${gaya02} ${prefix}cerpen-nasihat
${gaya02} ${prefix}cerpen-nasionalisme
${gaya02} ${prefix}cerpen-olahraga
${gaya02} ${prefix}cerpen-patahhati
${gaya02} ${prefix}cerpen-penantian
${gaya02} ${prefix}cerpen-pendidikan
${gaya02} ${prefix}cerpen-pengalaman
${gaya02} ${prefix}cerpen-pengorbanan
${gaya02} ${prefix}cerpen-penyesalan
${gaya02} ${prefix}cerpen-perjuangan
${gaya02} ${prefix}cerpen-perpisahan
${gaya02} ${prefix}cerpen-persahabatan
${gaya02} ${prefix}cerpen-petualangan
${gaya02} ${prefix}cerpen-ramadhan
${gaya02} ${prefix}cerpen-remaja
${gaya02} ${prefix}cerpen-rindu
${gaya02} ${prefix}cerpen-rohani
${gaya02} ${prefix}cerpen-romantis
${gaya02} ${prefix}cerpen-sastra
${gaya02} ${prefix}cerpen-sedih
${gaya02} ${prefix}cerpen-sejarah

${simbol2} *「 Cek Menu 」*
${gaya02} ${prefix}cekmati
${gaya02} ${prefix}cekme
${gaya02} ${prefix}goblokcek 
${gaya02} ${prefix}jelekcek 
${gaya02} ${prefix}gaycek
${gaya02} ${prefix}lesbicek
${gaya02} ${prefix}gantengcek 
${gaya02} ${prefix}cantikcek
${gaya02} ${prefix}begocek 
${gaya02} ${prefix}suhucek
${gaya02} ${prefix}pintercek
${gaya02} ${prefix}jagocek
${gaya02} ${prefix}nolepcek
${gaya02} ${prefix}babicek
${gaya02} ${prefix}bebancek
${gaya02} ${prefix}baikcek
${gaya02} ${prefix}jahatcek
${gaya02} ${prefix}anjingcek
${gaya02} ${prefix}haramcek
${gaya02} ${prefix}pakboycek
${gaya02} ${prefix}pakgirlcek
${gaya02} ${prefix}sangecek 
${gaya02} ${prefix}bapercek
${gaya02} ${prefix}fakboycek
${gaya02} ${prefix}alimcek
${gaya02} ${prefix}suhucek
${gaya02} ${prefix}fakgirlcek
${gaya02} ${prefix}kerencek
${gaya02} ${prefix}wibucek
${gaya02} ${prefix}pasarkascek

${simbol2} *「 Kerang Menu 」*
${gaya02} ${prefix}apakah *teks*
${gaya02} ${prefix}bisakah *teks*
${gaya02} ${prefix}kapankah *teks*
${gaya02} ${prefix}bagaimanakah *teks*

${simbol2} *「 Game Menu 」*
${gaya02} ${prefix}family100
${gaya02} ${prefix}kuismath
${gaya02} ${prefix}tebak
${gaya02} ${prefix}jodohku
${gaya02} ${prefix}jadian

${simbol2} *「 Bot Menu 」*
${gaya02} ${prefix}ping
${gaya02} ${prefix}owner
${gaya02} ${prefix}report
${gaya02} ${prefix}menu / ${prefix}help / ${prefix}?
${gaya02} ${prefix}delete
${gaya02} ${prefix}infochat
${gaya02} ${prefix}quoted
${gaya02} ${prefix}listonline
${gaya02} ${prefix}speedtest
${gaya02} ${prefix}menfes
${gaya02} ${prefix}runtime
${gaya02} ${prefix}request
${gaya02} ${prefix}allqr
${gaya02} ${prefix}sc
${gaya02} ${prefix}listban
${gaya02} ${prefix}listprem

${simbol2} *「 Database Menu 」*
${gaya02} ${prefix}setcmd
${gaya02} ${prefix}listcmd
${gaya02} ${prefix}delcmd
${gaya02} ${prefix}lockcmd
${gaya02} ${prefix}addmsg
${gaya02} ${prefix}listmsg
${gaya02} ${prefix}getmsg
${gaya02} ${prefix}delmsg

${simbol2} *「 Anonymous Menu 」*
${gaya02} ${prefix}anonymous
${gaya02} ${prefix}start
${gaya02} ${prefix}next
${gaya02} ${prefix}keluar

${simbol2} *「 Owner Menu 」*
${gaya02} ${prefix}leave
${gaya02} ${prefix}setexif
${gaya02} ${prefix}listpc
${gaya02} ${prefix}listgc
${gaya02} ${prefix}shutdown
${gaya02} ${prefix}sendsesi
${gaya02} ${prefix}mode
${gaya02} ${prefix}setmenu
${gaya02} ${prefix}curipp *reply pesan*
${gaya02} ${prefix}react *emoji*
${gaya02} ${prefix}chat *option*
${gaya02} ${prefix}join *link*
${gaya02} ${prefix}block *@user*
${gaya02} ${prefix}unblock *@user*
${gaya02} ${prefix}bcgroup *teks*
${gaya02} ${prefix}bcall *teks*
${gaya02} ${prefix}bcloc *teks*
${gaya02} ${prefix}setppbot full *image*
${gaya02} ${prefix}ban *628xx*
${gaya02} ${prefix}unban *628xx*
${gaya02} ${prefix}addprem *628xx*
${gaya02} ${prefix}dellprem *628xx*
`
}

exports.mgroup = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Group Menu 」*
${gaya03} ${prefix}linkgroup
${gaya03} ${prefix}listadmin
${gaya03} ${prefix}afk
${gaya03} ${prefix}ephemeral [option]
${gaya03} ${prefix}setppgc full [image]
${gaya03} ${prefix}setname [text]
${gaya03} ${prefix}setdesc [text]
${gaya03} ${prefix}group [option]
${gaya03} ${prefix}editinfo [option]
${gaya03} ${prefix}add @user
${gaya03} ${prefix}kick @user
${gaya03} ${prefix}hidetag [text]
${gaya03} ${prefix}tagall [text]
${gaya03} ${prefix}antilink [on/off]
${gaya03} ${prefix}antiwame [on/off]
${gaya03} ${prefix}antiall [on/off]
${gaya03} ${prefix}mute [on/off]
${gaya03} ${prefix}promote @user
${gaya03} ${prefix}demote @user
`
}
exports.msearch = (prefix, simbol3, gaya3) => {
return `
${simbol3} *「 Search Menu 」*
${gaya03} ${prefix}play
${gaya03} ${prefix}ytsearch
${gaya03} ${prefix}ytsearch2
${gaya03} ${prefix}pinterest
`
}
exports.mdownload = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Downloader Menu 」*
${gaya03} ${prefix}tiktoknowm [url]
${gaya03} ${prefix}tiktokwm [url]
${gaya03} ${prefix}tiktokmp3 [url]
${gaya03} ${prefix}ytmp3 [url]
${gaya03} ${prefix}ytmp4 [url]
${gaya03} ${prefix}getmusic [query]
${gaya03} ${prefix}getvideo [query]
${gaya03} ${prefix}gitclone *repo github*
`
}
exports.mconvert = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Convert Menu 」*
${gaya03} ${prefix}attp
${gaya03} ${prefix}ttp
${gaya03} ${prefix}qrcode
${gaya03} ${prefix}toimage
${gaya03} ${prefix}removebg
${gaya03} ${prefix}sticker
${gaya03} ${prefix}tovideo
${gaya03} ${prefix}togif
${gaya03} ${prefix}tourl
${gaya03} ${prefix}tovn
${gaya03} ${prefix}tomp3
${gaya03} ${prefix}toaudio
${gaya03} ${prefix}toqr
${gaya03} ${prefix}smeme
${gaya03} ${prefix}styletext
${gaya03} ${prefix}ringtone
`
}
exports.memoji = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Emoji Menu 」*
${gaya03} ${prefix}iphoneemoji *emoji*
${gaya03} ${prefix}googleemoji *emoji*
${gaya03} ${prefix}samsungemoji *emoji*
${gaya03} ${prefix}microsoftemoji *emoji*
${gaya03} ${prefix}whatsappemoji *emoji*
${gaya03} ${prefix}twitteremoji *emoji*
${gaya03} ${prefix}facebookemoji *emoji*
${gaya03} ${prefix}skypeemoji *emoji*
${gaya03} ${prefix}joyemoji *emoji*
${gaya03} ${prefix}mojiemoji *emoji*
${gaya03} ${prefix}pediaemoji *emoji*
${gaya03} ${prefix}instagramemoji *emoji*
`
}
exports.mkatakata = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Kata² Menu 」*
${gaya03} ${prefix}katabijak
${gaya03} ${prefix}katacinta
${gaya03} ${prefix}katailham
${gaya03} ${prefix}katagalau
${gaya03} ${prefix}katabucin
${gaya03} ${prefix}katagombal
${gaya03} ${prefix}katasindiran
${gaya03} ${prefix}katakataimage
`
}
exports.mother = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Other Menu 」*
${gaya03} ${prefix}cerpen
${gaya03} ${prefix}puisi
${gaya03} ${prefix}pantun
${gaya03} ${prefix}faktaunik
${gaya03} ${prefix}truthordare
`
}
exports.mquts = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Quotes Menu 」*
${gaya03} ${prefix}quotes
${gaya03} ${prefix}quotesanime
${gaya03} ${prefix}quoteskanye
${gaya03} ${prefix}quotesislami
${gaya03} ${prefix}quotesdilan
${gaya03} ${prefix}quotesff
${gaya03} ${prefix}quotespubg
${gaya03} ${prefix}quoteshacker
${gaya03} ${prefix}quotesimage
`
}
exports.mimage = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Image Menu 」*
${gaya03} ${prefix}ppcouple
${gaya03} ${prefix}darkjokes
${gaya03} ${prefix}meme
${gaya03} ${prefix}renungan
${gaya03} ${prefix}doraemon
${gaya03} ${prefix}pokemon
${gaya03} ${prefix}pentol
${gaya03} ${prefix}kartun
${gaya03} ${prefix}boneka
`
}
exports.mmaker = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Maker Menu 」*
${gaya03} ${prefix}girlnekomaker [Teks1|Teks2]
${gaya03} ${prefix}sadboymaker [Teks1|Teks2]
${gaya03} ${prefix}kanekimaker [Teks]
${gaya03} ${prefix}remmaker [Teks]
${gaya03} ${prefix}lolimaker [Teks]
${gaya03} ${prefix}guramaker [Teks]
`
}
exports.mstory = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Story Menu 」*
${gaya03} ${prefix}storysholawat
${gaya03} ${prefix}storytruk
${gaya03} ${prefix}storybus
${gaya03} ${prefix}storymeme
${gaya03} ${prefix}storycogan
${gaya03} ${prefix}storycecan
${gaya03} ${prefix}storyanime
${gaya03} ${prefix}storybucin
${gaya03} ${prefix}storygalau
${gaya03} ${prefix}storywa
${gaya03} ${prefix}storybeatvn
${gaya03} ${prefix}storyff
${gaya03} ${prefix}storyml
${gaya03} ${prefix}storypubg
`
}
exports.msound = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Sound Menu 」*
${gaya02} ${prefix}soundrandom
${gaya03} ${prefix}sound1
${gaya03} ${prefix}sound2
${gaya03} ${prefix}sound3
${gaya03} ${prefix}sound4
${gaya03} ${prefix}sound5
_Dan seterusnya sampai 159_
_Contoh ${prefix}sound100_
`
}
exports.mcerpen = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Cerpen Menu 」*
${gaya03} ${prefix}cerpen-anak
${gaya03} ${prefix}cerpen-bahasadaerah
${gaya03} ${prefix}cerpen-bahasainggris
${gaya03} ${prefix}cerpen-bahasajawa
${gaya03} ${prefix}cerpen-bahasasunda
${gaya03} ${prefix}cerpen-budaya
${gaya03} ${prefix}cerpen-cinta
${gaya03} ${prefix}cerpen-cintaislami
${gaya03} ${prefix}cerpen-cintapertama
${gaya03} ${prefix}cerpen-cintaromantis
${gaya03} ${prefix}cerpen-cintahsedih
${gaya03} ${prefix}cerpen-cintasegitiga
${gaya03} ${prefix}cerpen-cintasejati
${gaya03} ${prefix}cerpen-galau
${gaya03} ${prefix}cerpen-gokil
${gaya03} ${prefix}cerpen-inspiratif
${gaya03} ${prefix}cerpen-jepang
${gaya03} ${prefix}cerpen-kehidupan
${gaya03} ${prefix}cerpen-keluarga
${gaya03} ${prefix}cerpen-kisahnyata
${gaya03} ${prefix}cerpen-korea
${gaya03} ${prefix}cerpen-kristen
${gaya03} ${prefix}cerpen-liburan
${gaya03} ${prefix}cerpen-malaysia
${gaya03} ${prefix}cerpen-mengharukan
${gaya03} ${prefix}cerpen-misteri
${gaya03} ${prefix}cerpen-motivasi
${gaya03} ${prefix}cerpen-nasihat
${gaya03} ${prefix}cerpen-nasionalisme
${gaya03} ${prefix}cerpen-olahraga
${gaya03} ${prefix}cerpen-patahhati
${gaya03} ${prefix}cerpen-penantian
${gaya03} ${prefix}cerpen-pendidikan
${gaya03} ${prefix}cerpen-pengalaman
${gaya03} ${prefix}cerpen-pengorbanan
${gaya03} ${prefix}cerpen-penyesalan
${gaya03} ${prefix}cerpen-perjuangan
${gaya03} ${prefix}cerpen-perpisahan
${gaya03} ${prefix}cerpen-persahabatan
${gaya03} ${prefix}cerpen-petualangan
${gaya03} ${prefix}cerpen-ramadhan
${gaya03} ${prefix}cerpen-remaja
${gaya03} ${prefix}cerpen-rindu
${gaya03} ${prefix}cerpen-rohani
${gaya03} ${prefix}cerpen-romantis
${gaya03} ${prefix}cerpen-sastra
${gaya03} ${prefix}cerpen-sedih
${gaya03} ${prefix}cerpen-sejarah
`
}
exports.mcek = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Cek Menu 」*
${gaya03} ${prefix}cekmati
${gaya03} ${prefix}cekme
${gaya03} ${prefix}goblokcek 
${gaya03} ${prefix}jelekcek 
${gaya03} ${prefix}gaycek
${gaya03} ${prefix}lesbicek
${gaya03} ${prefix}gantengcek 
${gaya03} ${prefix}cantikcek
${gaya03} ${prefix}begocek 
${gaya03} ${prefix}suhucek
${gaya03} ${prefix}pintercek
${gaya03} ${prefix}jagocek
${gaya03} ${prefix}nolepcek
${gaya03} ${prefix}babicek
${gaya03} ${prefix}bebancek
${gaya03} ${prefix}baikcek
${gaya03} ${prefix}jahatcek
${gaya03} ${prefix}anjingcek
${gaya03} ${prefix}haramcek
${gaya03} ${prefix}pakboycek
${gaya03} ${prefix}pakgirlcek
${gaya03} ${prefix}sangecek 
${gaya03} ${prefix}bapercek
${gaya03} ${prefix}fakboycek
${gaya03} ${prefix}alimcek
${gaya03} ${prefix}suhucek
${gaya03} ${prefix}fakgirlcek
${gaya03} ${prefix}kerencek
${gaya03} ${prefix}wibucek
${gaya03} ${prefix}pasarkascek
`
}
exports.mkerang = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Kerang Menu 」*
${gaya03} ${prefix}apakah *teks*
${gaya03} ${prefix}bisakah *teks*
${gaya03} ${prefix}kapankah *teks*
${gaya03} ${prefix}bagaimanakah *teks*
`
}
exports.mgame = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Game Menu 」*
${gaya03} ${prefix}family100
${gaya03} ${prefix}kuismath
${gaya03} ${prefix}tebak
${gaya03} ${prefix}jodohku
${gaya03} ${prefix}jadian
`
}
exports.mbot = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Bot Menu 」*
${gaya03} ${prefix}ping
${gaya03} ${prefix}owner
${gaya03} ${prefix}report
${gaya03} ${prefix}menu / ${prefix}help / ${prefix}?
${gaya03} ${prefix}delete
${gaya03} ${prefix}infochat
${gaya03} ${prefix}quoted
${gaya03} ${prefix}listonline
${gaya03} ${prefix}speedtest
${gaya03} ${prefix}menfes
${gaya03} ${prefix}runtime
${gaya03} ${prefix}request
${gaya03} ${prefix}allqr
${gaya03} ${prefix}sc
${gaya03} ${prefix}listban
${gaya03} ${prefix}listprem
`
}
exports.mdatabase = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Database Menu 」*
${gaya03} ${prefix}setcmd
${gaya03} ${prefix}listcmd
${gaya03} ${prefix}delcmd
${gaya03} ${prefix}lockcmd
${gaya03} ${prefix}addmsg
${gaya03} ${prefix}listmsg
${gaya03} ${prefix}getmsg
${gaya03} ${prefix}delmsg
`
}
exports.manonymous = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Anonymous Menu 」*
${gaya03} ${prefix}anonymous
${gaya03} ${prefix}start
${gaya03} ${prefix}next
${gaya03} ${prefix}keluar
`
}
exports.mowner = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Owner Menu 」*
${gaya03} ${prefix}leave
${gaya03} ${prefix}setexif
${gaya03} ${prefix}listpc
${gaya03} ${prefix}listgc
${gaya03} ${prefix}shutdown
${gaya03} ${prefix}sendsesi
${gaya03} ${prefix}mode
${gaya03} ${prefix}setmenu
${gaya02} ${prefix}curipp *reply pesan*
${gaya03} ${prefix}react *emoji*
${gaya03} ${prefix}chat *option*
${gaya03} ${prefix}join *link*
${gaya03} ${prefix}block *@user*
${gaya03} ${prefix}unblock *@user*
${gaya03} ${prefix}bcgroup *teks*
${gaya03} ${prefix}bcall *teks*
${gaya03} ${prefix}bcloc *teks*
${gaya03} ${prefix}setppbot full *image*
${gaya03} ${prefix}ban *628xx*
${gaya03} ${prefix}unban *628xx*
${gaya03} ${prefix}addprem *628xx*
${gaya03} ${prefix}dellprem *628xx*
`
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
