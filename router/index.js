/**
 * 最高层路由
 */
let router = require('koa-router')();
let helloRouter = require('./hello');

router.get('/', async (ctx, next) => {
    console.log('访问根节点');
    ctx.body = 'Hello KOA~!';
});

router.use('/hello', helloRouter.routes(), helloRouter.allowedMethods());

module.exports = router;