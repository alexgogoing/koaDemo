let helloService = require('../service/hello');
let error = require('../model/error');

import {Controller, Request, RequestMethod} from '../../lib/decorator';

@Controller({prefix: '/hello'})
export default class Hello{
    @Request({url: '/getUser', method: RequestMethod.GET})
    async getUser(ctx, next) {
        try{
            let username = ctx.request.query.username;
            let result = await helloService.findUserData(username);
            ctx.body = result;
        }catch(e){
            ctx.throw(new error.NormalError());
        }
    }

    @Request({url: '/getName', method: RequestMethod.GET})
    async getName(ctx, next){
            console.log('访问controller');
            let result = await new Promise(resolve => {
            resolve(['aha', 'ahe']);
        })
        ctx.body = result;
    }
}