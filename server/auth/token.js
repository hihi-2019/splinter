const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')
// const { comparePasswordToHash } = require('./hash')

function issue(req, res) {
  console.log(req.body)
  //need to set up the db calls to get userbyEmail
  //comparepassword set up

  // getUserByEmail(req.body.email)
  //   .then(user => {
  //     if (!user) {
  //       res.status(403).json({ message: 'User does not exist' })
  //     } else {
  //       comparePasswordToHash(req.body.password, user.hash)
  //         .then((match) => {
  //           if (!match) {
  //             res.status(400).json({ message: 'Password is incorrect' })
  //           } else {
  //             const token = createToken(user, process.env.JWT_SECRET)
  //             res.json({
  //               message: 'Authentication successful',
  //               token
  //             })
  //           }
  //         })
  //         .catch(err => {
  //           res.status(500).json({ message: err.message })
  //         })
  //     }
  //   })
}

function createToken(user, secret) {
  console.log("this is the user", user)
  const payload = {
    user_id: user.id,
    user_name: user.user_name
  }

  const options = {
    expiresIn: '24h'
  }

  console.log("this is the payload", payload)

  return jwt.sign(payload, secret, options)
}

function decode(req, res, next) {
  verifyJwt({ secret: process.env.JWT_SECRET, credentialsRequired: true })(req, res, next)
}

module.exports = {
  issue,
  decode,
}