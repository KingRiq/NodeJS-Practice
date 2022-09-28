// declare variable http
// loads module called http
var http = require('http');
var date = require('../modules/myfirstmodules');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time is currently: " + date.myDateTime());
    res.end('Hello World!');
}).listen(8080);