const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.use('/', require('./routes/pages'))

app.listen(3000, () => {
    console.log("Server running on port 3000")
})