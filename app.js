import Koa from 'koa';
import logger from 'koa-logger';
import {config} from './config';
import router from './router';
import result from './middleware/result';
import error from './middleware/error';

const app = new Koa();

app.use(logger());
// 中间件应在app.use(router.routes())之前使用
app.use(error).use(result('^/hello'));
// 此处也可以使用链式调用
// app.use(result('^/hello')).use(upper());

// 主要路由应用
app.use(router.routes());

app.listen(config.port);
console.log('Server started and listen on port ' + config.port);
