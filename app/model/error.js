const errCusArr = [{
    name: 'type1',
    code: -1,
    message: '这是第一个错误'
},{
    name: 'type2',
    code: -2,
    message: '这是第二种错误'
}]

exports.CustomError = class extends Error{
    constructor(err_name, err_code, err_message){
        super();
        if(!err_name){
            return new Error();
        }else if(err_name && !err_code && !err_message){
            for(let err of errCusArr){
                if(err.name === err_name){
                    this.name = err_name;
                    this.code = err.code;
                    this.message = err.message;
                }
            }
        }else if(err_name && err_code && err_message){
            this.name = err_name;
            this.code = err_code;
            this.message = err_message;
        }
    }
}

exports.NormalError = class extends Error{
    constructor(){
        super();
        this.name = 'normal';
        this.code = '-10';
        this.message = '普通错误';
    }
}