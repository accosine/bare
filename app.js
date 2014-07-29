var http = require('http')
  , paramify = require('paramify')
  , controller = require('./controller');

// var props = {partials: [react.DOM.div, react.DOM.img, react.DOM.a, react.DOM.ol]};

http.createServer(function (req, res) {
  var match = paramify(req.url);

  res.writeHead(200, {'Content-Type': 'text/html'});

  if (match('/*')) {
    controller.showIndex(req, res)
  }

}).listen(8080);
console.log('Server running at http://localhost:8080/');
