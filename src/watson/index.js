const config = require('../config')
const AssistantV1 = require('watson-developer-cloud/assistant/v1')
const assistant = new AssistantV1(config.watson)

const consultAssistant = (text) => new Promise((resolve, reject) => {
    
    const params = {
        input: { text },
        workspace_id: config.watson.ASSISTANT_WORKSPACE_ID,
        context: {}
    }

    assistant.message(params, (err, response) => {        
        if (err) {
            reject('Desculpe houve um problema, favor tentar novamente')
        } else if (response.output.text.join(' ') === 'Eu não entendi. Você pode tentar reformular a frase.') {
            reject(response.output.text.join(' '))
        }else {
            resolve(response.output.text.join(' '))
        }
    })
    
})

module.exports = {
  consultAssistant
}