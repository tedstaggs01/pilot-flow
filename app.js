const express = require('express')
const bodyParser = require('body-parser');

const app = express()


app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/', require('./routes/pages'))

app.listen(3000, () => {
    console.log("Server running on port 3000")
})