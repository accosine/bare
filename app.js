var fs = require('fs')
var http = require('http')
var paramify = require('paramify')

http.createServer(function (req, res) {
  var match = paramify(req.url)

  res.writeHead(200, {'Content-Type': 'text/plain'})

  if (match('/*')) {
    helloWorld(match.params, req, res)
  }

}).listen(8080, '127.0.0.1')

function helloWorld(params, req, res) {
  res.end('Hello World')
}

console.log('Server running at http://localhost:8080/')
