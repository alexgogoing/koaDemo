
exports.getUser = async (ctx, next) => {
    let username = ctx.request.body.username;
    let query = () => {
        return new Promise((resolve, reject) => {
            pool.query(`select * from user where username=${username}`, async (err, data) => {
                let result = [];
                for(let i = 0;i < data.length;i++){
                    result.push(data[i]);
                }
                if(err){
                    reject({code: -1, message: 'wrong'});
                }else{
                    resolve({code: 0, message: 'success', data: result})
                }
            })
        })
    }
    let result = await query();
    ctx.body = result;
}