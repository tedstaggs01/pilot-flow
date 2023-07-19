const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/documentation', (req, res) => {
    res.render('documentation')
})

module.exports = router