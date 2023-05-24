const express = require('express')
const PORT = process.env.port || 3005

const helmet = require('helmet')
const cors = require('cors')


const server = express().use(helmet()).use(cors()).use(express.json())

const router = require('./app/routes/router')
server.use('/', router)

server.get('/api', (req, res)=> {
    res.json({
        'All Goods': `http://localhost:${PORT}/api/goods`
    })
})

server.listen(PORT, ()=> console.log(`Port ${PORT} is in effect...`))