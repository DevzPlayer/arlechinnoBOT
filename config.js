let fs = require('fs')
let chalk = require('chalk')

// Configurações globais
global.owner = ['5592984094477, '380942618992'] // Insira seus números aqui
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Lista de moderadores
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Lista de usuários premium

// APIs
global.APIs = {
  bx: 'https://bx-hunter.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  lolhum: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'https://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}

// Chaves de API
global.APIKeys = {
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://melcanz.com': 'lugay',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'memeki',
  'https://api.lolhuman.xyz': 'windaj',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zekais-api.herokuapp.com': 'komtolofon',
  'https://api.zeks.xyz': 'apivinz',
}

// Configurações de Stickers
global.packname = 'ARLECCHINO BOT'
global.author = 'Matheus'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*espere..*_'
global.eror = '*_Server Eror_*'
global.tle = 'https://media.discordapp.net/attachments/1286148134010884158/1321103476205551647/6fdd9dba26941831534f5cb0b4503bce.jpg?ex=676c04fd&is=676ab37d&hm=3f8516451f886c0c3b3aa4133817433698c0444b070c17f8f6942a765f8c4724&'

// Multiplicador de XP
global.multiplier = 69 // Quanto maior, mais difícil subir de nível

// Monitoramento do arquivo
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})