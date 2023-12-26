const{Telegraf} = require('telegraf');
fetch()
let bitcoin = "20";
const bot = new Telegraf('');
//ctx is a object passed in the callback function
bot.start((ctx)=> ctx.reply('welcome from rx'));
bot.command('bitcoin',(ctx)=> ctx.reply(bitcoin));
bot.command('whomadethis', (ctx) => ctx.reply('rahul'));
//for running the server continously
bot.launch();