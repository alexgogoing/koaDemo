/**
 * 最高层路由
 */
let router = require('koa-router')();
import helloController from '../app/controller/hello';

router.get('/', async (ctx, next) => {
    console.log('访问根节点');
    ctx.body = 'Hello KOA~!';
});

router.use(helloController.routes(), helloController.allowedMethods());

module.exports = router;