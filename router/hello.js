let router = require('koa-router')();
let helloController = require('../app/controller/hello');

router.get('/getName', helloController.getName);

module.exports = router;