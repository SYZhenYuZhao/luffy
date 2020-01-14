const Router = require('koa-router');
const appContorl = require('../controllers/all')
const reptileHuPu = require('../controllers/reptile/hupu')
const responseWrapper = require('../utils/responseWrapper')
const router = new Router()


router.get('/', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa1!</h1>';
})

router.get('/asd', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>111</h1>';
})

router.get('/all', async (ctx, next) => {
    var str = await appContorl.all()
    ctx.response.body = str
    console.log(typeof (str))
})

router.post('/reptile/hupu', async (ctx, next) => {
    var str = await reptileHuPu.getInfo()
    ctx.response.body = responseWrapper({data:str})
    console.log(typeof (str))
})

module.exports = router