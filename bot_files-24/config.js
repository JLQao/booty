// يجب عليك عدم تعديل اي شئ من بدايه السطر ال13 لعدم تخريب اللبوت #
// 𝑽𝒊𝒕𝒐 𝑪𝒐𝒓𝒍𝒆𝒐𝒏𝒆 𝑩𝑶𝑻-𝑴𝑫
import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'


global.owner = [
  ['967737853031', 'معصار الشومي ', true],
  ['967737853031', 'معصار الشومي ', true],
]


global.mods = []
global.prems = []

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = '𝑸𝑹'
global.namebot = 'معصار الشومي '
global.sessions = 'Taibsessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

global.packname = '𝐀𝐋𝐍𝐆𝐌 🅱🅾🆃'
global.namebot = '𝐀𝐋𝐍𝐆𝐌 ⒷⓄⓉ'
global.author = '𝐀𝐋𝐍𝐆𝐌 🅑🅞🅣'
global.moneda = 'Dolar'
global.canalreg = '120363400548371651@newsletter'

global.namecanal = '⌜ 𝐀𝐋𝐍𝐆𝐌 🅱🅾🆃 💀 ⌟  || بوت النجم اليماني 💀'
global.canal = 'https://whatsapp.com/channel/0029Vb2VEyaHAdNLWqDcRz1v'
global.idcanal = '120363400548371651@newsletter'

global.ch = {
ch1: '120363400548371651@newsletter',
}

global.multiplier = 69 
global.maxwarn = '2'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})