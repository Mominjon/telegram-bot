const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "2136613187:AAFpba-igrs8DDI_aUEYDMyY1nfngEYyE-Y"

const bot = new TelegramBot(TOKEN, {polling: true})



bot.on("message", msq => {
    bot.sendMessage()
})