const express = require('express')
const router = express.Router()

router.use('/api/goods', require('./api/goodsRoutes'))

module.exports = router