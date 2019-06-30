const express = require('express')
const router = new express.Router()

const { popMessages, sendMessage } = require('../telegram')


router.get('/chat/:id', async (req, res) => {
    popMessages(req.params.id)
        .then(messages => res.json(messages))
})

router.post('/chat', (req, res) => {
    sendMessage(req.body)
        .then(res.end())
})


module.exports = {
    ChatController: router
}