let error = async function(ctx, next){
    try{
        await next();
    }catch(err){
        console.log('接到错误', err);
        ctx.response.body = err;
    }
}

module.exports = error;