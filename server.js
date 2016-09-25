var http = require('http');
var os = require("os");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text'});

  res.end('Welcom on Host/Pod: ' + os.hostname() + '\n');
}).listen(8080,'0.0.0.0');
console.log('Server running.')
