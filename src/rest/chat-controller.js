const express = require('express')
const router = new express.Router()

const { popMessages, sendMessage } = require('../telegram')


router.get('/chat', async (req, res) => {
    popMessages()
        .then(messages => {
            console.log(messages)
            res.json(messages)
        })
})

router.post('/chat', (req, res) => {
    sendMessage(req.body.message)
        .then(res.end())
})


module.exports = {
    ChatController: router
}