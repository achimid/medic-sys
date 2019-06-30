
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')

const app = express()

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.disable('x-powered-by')
app.use(compression())
app.use(cors())


const { ChatController } = require('./src/rest/chat-controller')

const prefix = '/api/v1'
app.use(prefix, ChatController)

module.exports = app
