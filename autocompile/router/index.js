const Router = require('koa-router');
// const reptileHuPu = require('../controllers/reptile/hupu')
// const responseWrapper = require('../utils/responseWrapper')
const router = new Router()


router.get('/', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>自动编译!</h1>';
})

router.post('/github/burnfe', async(ctx,next) =>{
    let postData = await parsePostData(ctx);
    let postObj = JSON.parse(postData)
    if (postObj.ref.indexOf('pre')!==-1){
        console.log('pre提交')
        let sshUrl = postObj.repository.ssh_url
    }
    var str = "接收成功"
    ctx.response.body = str
})

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = '';
            ctx.req.addListener('data', (data) => {
                postdata += data;
            });
            ctx.req.on("end", function () {
                resolve(postdata);
            })
        } catch (error) {
            reject(error);
        }
    });
}

// function parseQueryStr(queryStr) {
//     let queryData = {};
//     let queryList = queryStr.split('&');
//     console.log(queryList.entries())
//     for (let [index, queryStr] of queryList.entries()) {
//         let itemArr = queryStr.split("=");
//         queryData[itemArr[0]] = decodeURIComponent(itemArr[1]); //转码
//     }
//     return queryData;
// }


// router.post('/reptile/hupu', async (ctx, next) => {
//     var str = await reptileHuPu.getInfo()
//     ctx.response.body = responseWrapper({data:str})
//     console.log(typeof (str))
// })

module.exports = router