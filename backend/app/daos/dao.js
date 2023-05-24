const daoCommon = require('./common/daoCommon')

const goodsDao = {
    ...daoCommon,
    ...require('./api/goodsDao')
}

module.exports = {
    goodsDao
}