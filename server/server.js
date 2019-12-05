const path = require('path')
const express = require('express')
const authRoutes = require('./routes/auth')
const transactions = require('./routes/transactions')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/auth', authRoutes)
server.use('/api/transactions', transactions)

module.exports = server
