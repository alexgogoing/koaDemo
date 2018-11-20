let helloService = require('../service/hello');
let error = require('../model/error');

exports.getUser = async (ctx, next) => {
    try{
        let username = ctx.request.body.username;
        let result = await helloService.findUserData(username);
        ctx.body = result;
    }catch(e){
        ctx.throw(new error.NormalError());
    }
}

exports.getName = async (ctx, next) => {
    console.log('访问controller');
    let result = await new Promise(resolve => {
        resolve(['aha', 'ahe']);
    })
    ctx.body = result;
} 