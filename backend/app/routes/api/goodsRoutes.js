const express = require('express')
const router = express.Router()

const {goodsDao:dao} = require('../../daos/dao')

router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

router.get('/special/:special', (req, res) => {
    dao.sortBySpecial(res, dao.table, req.params.special)
})

router.get('/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id)
})


module.exports = router