require('dotenv').config();
const app = require('./app')
const port = process.env.PORT || 5000

app.listen(port, function () {
    console.log('info', `Server is running at localhost:${port}`)
})

