const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

/*router.get('/mb', (req, res) => {
    res.render('mb')
})*/

module.exports = router