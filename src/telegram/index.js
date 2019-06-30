const config = require('../config')
const Telegraf = require('telegraf')
const bot = new Telegraf(config.telegram.TELEGRAM_BOT_TOKEN)

let messagesCallback = []

function buildMessage ({ message, _ID }) {
    return `(@${_ID}) -> ${message}`
}

function extractMessage (original, text) {

    const [id] = original.split('->')    
    const _ID = id.replace('@', '').replace('(', '').replace(')', '').trim()

    return { message: text, _ID}
}

const sendMessage = async (message) => {
    bot.telegram.sendMessage(config.telegram.TELEGRAM_BOT_CHAT_ID, buildMessage(message))
}


const popMessages = async (_ID) => {
    const messages = messagesCallback.filter(m => m._ID === _ID).map(m => m.message)
    messagesCallback = messagesCallback.filter(m => m._ID !== _ID)
    return messages
}

bot.on('text', (ctx) => {
    const message = ctx.message.reply_to_message ? extractMessage(ctx.message.reply_to_message.text, ctx.message.text) : ctx.message.text
    messagesCallback.push(message)
})

bot.launch()

module.exports = {
    sendMessage,
    popMessages
}



// // Middlewar para verificar o tempo de execução
// bot.use(async (ctx, next) => {
//     const start = new Date()
//     await next()    
//     const ms = new Date() - start
//     console.log('Response time %sms', ms)
// })

// // Middlewar para salvar todas as mensagens
// bot.use(async (ctx, next) => {
//     await next()
//     console.log(ctx.message)
// })


// bot.start((ctx) => {
//     ctx.reply(`Olá ${ctx.message.from.first_name}, este é um chatBot com a intenção de te auxiliar com problemas clinicos.`)
//     ctx.reply(`Em que posso te ajudar?`)
// })

// bot.on('text', (ctx) => {
//     const text = ctx.message.text
//     const context = {}

//     const params = {
//         input: { text },
//         workspace_id: 'c108a1fa-9f80-46e8-b52a-798f5e70c7c1',
//         context
//     }

//     assistant.message(params, (err, response) => {
//         if (err) ctx.reply('Desculpe houve um problema, favor tentar novamente')
//         else ctx.reply(response.output.text.join(' '))
//         console.log(err)
//     });
// })


