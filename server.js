var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.get('/', function (req, res) {
  res.send('<html><body>Welcome on Host/Pod: ' + hostname + '</body></html>');
});

app.listen(8080);
console.log('Server running.');
