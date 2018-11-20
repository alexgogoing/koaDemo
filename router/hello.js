let router = require('koa-router')();
let helloController = require('../app/controller/hello');

router.get('/getName', helloController.getName);
router.get('/getUser', helloController.getUser);

module.exports = router;