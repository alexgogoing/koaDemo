const Koa = require('koa');
const app = new Koa();
const config = require('./config');
const router = require('./router');
const result = require('./middleware/result');
const upper = require('./middleware/upper');

//中间件应在app.use(router.routes())之前使用
app.use(result('^/hello'), upper()); 
//此处也可以使用链式调用
//app.use(result('^/hello')).use(upper());

app.use(router.routes());  //主要路由应用

app.listen(config.port);
console.log("Server started and listen on port " + config.port);