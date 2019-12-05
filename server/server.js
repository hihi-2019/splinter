const path = require('path')
const express = require('express')
const authRoutes = require('./routes/auth')
const groupsRoutes = require('./routes/groups')
const transactionRoutes = require('./routes/transactions')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/auth', authRoutes)
server.use('/api/groups', groupsRoutes)
server.use('/api/transactions', transactionRoutes)

module.exports = server
