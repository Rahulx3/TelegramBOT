require('dotenv').config();
const{Telegraf} = require('telegraf');
const bot = new Telegraf(process.env.WEATHER_API_KEY);

//ctx is a object passed in the callback function
bot.start((ctx)=> ctx.reply('Welcome To Live bitcoin Tracking API'));
bot.command('whomadethis', (ctx) => ctx.reply('rahul'));
bot.command('hello',(ctx)=> ctx.reply("hello ji"));
bot.command('bitcoin', async function(ctx){
const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
const data = await res.json();
let price = data.bpi.USD.rate; 
ctx.reply(price)});
//for running the server continously
bot.launch();