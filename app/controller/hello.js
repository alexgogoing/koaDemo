let helloService = require('../service/hello');

exports.getUser = async (ctx, next) => {
    try{
        let username = ctx.request.query.username;
        let result = await helloService.findUserData(username);
        ctx.body = result;
    }catch(e){
        ctx.body = 'error'
    }
}

exports.getName = async (ctx, next) => {
    console.log('访问controller');
    let result = await new Promise(resolve => {
        resolve(['aha', 'ahe']);
    })
    ctx.body = result;
} 