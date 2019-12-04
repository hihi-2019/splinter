const router = require('express').Router()
const token = require('../auth/token')
const { userExists, createUser } = require('../db/dbFunctions')

router.post('/login', token.issue)


// router.post('/login', (req, res) => {
// console.log("I got here")
// })

router.post('/register', register, token.issue)

function register (req, res, next) {
  const { email, first_name, last_name, password} = req.body
  userExists(email)
    .then(exists => {
      if (exists) return res.status(400).send({ message: "Email In Use" })

      createUser(email, first_name, last_name, password)
        .then(() => next())
        .catch(err => {
          console.log(err)
          res.status(500).send({message: "Server Error"})
        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({message: "Server Error"})
    })
}

module.exports = router