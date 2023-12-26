const{Telegraf} = require('telegraf');
fetch()
let bitcoin = "20";
const bot = new Telegraf('6910782708:AAG1EVld3cJNZt80N8HoW3HwegpPuLu19rM');
//ctx is a object passed in the callback function
bot.start((ctx)=> ctx.reply('welcome from rx'));
bot.command('bitcoin',(ctx)=> ctx.reply(bitcoin));
bot.command('whomadethis', (ctx) => ctx.reply('rahul'));
//for running the server continously
bot.launch();