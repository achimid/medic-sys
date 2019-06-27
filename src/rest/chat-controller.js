const express = require('express')
const router = new express.Router()


router.get('/chat', async (request, response, next) => {
    console.log('logou no chat')
    response.json({ ok: 'ok'})
})


module.exports = {
    ChatController: router
}