import helloService from '../service/hello';
import {NormalError} from '../model/error';
import {Controller, Request, RequestMethod} from '../../lib/decorator';

@Controller({prefix: '/hello'})
class Hello{
    @Request({url: '/getUser', method: RequestMethod.GET})
    async getUser(ctx, next) {
        try{
            let username = ctx.request.query.username;
            let result = await helloService.findUserData(username);
            ctx.body = result;
        }catch(e){
            console.log(e);
            ctx.throw(new NormalError());
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

export default Hello;