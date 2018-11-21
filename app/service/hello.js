import {query} from '../../lib/mysql';

// 查找用户
export default {
    findUserData: function(name){
        let _sql = `select * from users where name="${name}";`
        return query(_sql);
    },
    findUserName: function(){
        console.log(1);
    }
}