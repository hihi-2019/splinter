const path = require('path')
const express = require('express')
const authRoutes = require('./routes/auth')
<<<<<<< HEAD
const transactions = require('./routes/transactions')

=======
const groupsRoutes = require('./routes/groups')
const transactionRoutes = require('./routes/transactions')
>>>>>>> 2acf91e930363974de0c192ffc2059949e1b88a0

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/auth', authRoutes)
<<<<<<< HEAD
server.use('/api/transactions', transactions)
=======
server.use('/api/groups', groupsRoutes)
server.use('/api/transactions', transactionRoutes)
>>>>>>> 2acf91e930363974de0c192ffc2059949e1b88a0

module.exports = server
