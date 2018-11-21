/**
 * 最高层路由
 */
import koaRouter from 'koa-router';
import helloController from '../app/controller/hello';
let router = new koaRouter();

router.get('/', async (ctx, next) => {
    console.log('访问根节点');
    ctx.body = 'Hello KOA~!';
});

router.use(helloController.routes(), helloController.allowedMethods());

export default router;