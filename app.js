const Koa = require('koa');
const logger = require('koa-logger');
const config = require('./config');
const router = require('./router');
const result = require('./middleware/result');
const error = require('./middleware/error');

const app = new Koa();

app.use(logger());
//中间件应在app.use(router.routes())之前使用
app.use(error, result('^/hello'));  
//此处也可以使用链式调用
//app.use(result('^/hello')).use(upper());

app.use(router.routes());  //主要路由应用

app.listen(config.port);
console.log("Server started and listen on port " + config.port);