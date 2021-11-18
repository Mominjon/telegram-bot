const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '2136613187:AAFpba-igrs8DDI_aUEYDMyY1nfngEYyE-Y'

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.onText(/\/start/, msg => {
    const receiver = msg.chat.id
    bot.sendMessage(receiver, `Asalomu aleykum ${msg.from.first_name} Siz Mominjon Vahobov ninig shaxsiy botiga kirdigiz iltmos pastagai menulardan brini tanlang`, {
        reply_markup: JSON.stringify({
            keyboard: [
             
                    [
                        {
                            text: 'Mening Ishlarim',
                            callback_data: 'my-project'
                        },
                        {
                            text: "Mening Resumeyim",
                            callback_data: "my-res"
                        }
                    ],
                    [
                        {
                            text: "System Front Haqida",
                            callback_data: "System-front"
                        },
                        {
                            text: "Men Bilan Bog`lanish",
                            callback_data: "contact"
                        }
                    ]
                
            ],
            resize_keyboard: true
        })
    })
})

bot.on('message', msg => {

    const receiver = msg.chat.id
    
    if(msg.text == "System Front Haqida"){
        bot.sendPhoto(receiver, './img/sytemfront.jpg', {
            caption: 'System Front bu najot talim oquvchilar tomonidan tashkil qilingan jamoa bolib hozirda real projectlarni qilsihni boshlagan ',
        })
    }
    else if(msg.text == "Mening Ishlarim"){
        bot.sendPhoto(receiver, './img/my-image.jpg', {
            caption: 'Men ozim qilgan barcha ishlarimni shu telegram kanalga joylab boraman ',
            reply_markup: JSON.stringify ({
                inline_keyboard: [[
                    {
                        text: 'Kanal Linki',
                        url: 'https://t.me/Mominjondevloper'
                    }]
                ]
            })
        },
        )
    }
    else if (msg.text == "Mening Resumeyim"){
        bot.sendDocument(receiver, "./Vahobov Mominjon.pdf")
    }
    else if (msg.text == "Men Bilan Bog`lanish"){
        bot.sendMessage(receiver, "")
    }
    if(msg.text === '⬅️ Ortga') {
        bot.sendMessage(receiver, `⬅️ Ortga`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Mening IShlarim',
                            callback_data: 'my-project'
                        },
                        {
                            text: "Mening Resumeyim",
                            callback_data: "my-res"
                        },
                        {
                            text: "System Front Haqida",
                            callback_data: "System-front"
                        },
                        {
                            text: "Men Bilan Bog`lanish",
                            callback_data: "contact"
                        }
                    ],
                ],
                resize_keyboard: true
            })
        })
    }
})
