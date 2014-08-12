var controller = require('./controller')
  , bare = {
  router: require('./router')(),
};

bare.router.on('get', '/admin', controller.showTest);
bare.router.on('get', '/index', controller.showIndex);

module.exports = bare;
