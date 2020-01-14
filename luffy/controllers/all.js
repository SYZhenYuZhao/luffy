const app = require('../model/app')

const all = async (ctx, next) => {
    var str = await app.getStr()
    return str
}

module.exports = {
    all
}