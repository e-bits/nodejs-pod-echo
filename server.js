var http = require('http');
var process = require('process');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text'});

  res.end('Welcom on Host/Pod:\n' + process.pid + '\n');
}).listen(8080,'0.0.0.0');
console.log('Server running.')
