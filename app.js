const Koa = require('koa');
const app = new Koa();
const config = require('./config');


app.listen(config.port);
console.log("Server started and listen on port " + config.port);