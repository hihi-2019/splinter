const router = require('express').Router()
const token = require('../auth/token')

router.post('/login', token.issue)


// router.post('/login', (req, res) => {
// console.log("I got here")
// })

module.exports = router