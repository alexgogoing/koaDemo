let upper = () => {
    return async (ctx, next) => {
        await next();
        console.log('upper 生效');
        ctx.body = {
            upper: true
        }
    }
}

module.exports = upper;