require('dotenv').config();
const Telegraf = require('telegraf') 
const bot = new Telegraf(process.env.BOT_TOKEN)
const AssistantV1 = require('watson-developer-cloud/assistant/v1')
const assistant = new AssistantV1({
  username: 'apikey',
  password: 'cd8NjMYblpdyMjucvIUJwtShtWzI4CJ3r0H-EabUMLqi',
  version: '2018-06-20'
});

bot.telegram.sendMessage('128348430', 'cirb')

// const { sendMessageFor } = require('simple-telegram-message')
// const sendMessage = sendMessageFor(process.env.BOT_TOKEN, '128348430')
// sendMessage(`Hi from bot!`)



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
  

// bot.launch()