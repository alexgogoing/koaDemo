const mysql = require('../../lib/mysql');

// 查找用户
exports.findUserData = function(name){
    let _sql = `select * from users where name="${name}";`
    return mysql.query(_sql);
}