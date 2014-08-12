'use strict';
var bare = require('./lib/bare')
  , http = require('http');

bare.router.on('get', '/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Testseite\n');
  console.log('Testseite');
});

// TODO: 404 callback if route does not exist
http.createServer(function(req, res) {
  bare.router.dispatch(req, res, console.log);
}).listen(8080);
