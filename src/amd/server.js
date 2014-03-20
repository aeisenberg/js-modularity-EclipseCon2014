/*jshint node:true*/

var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    var contentType;
    if (req.url.indexOf('.html') > 0) {
      contentType = 'text/html';
    } else if (req.url.indexOf('.js') > 0) {
      contentType = 'application/javascript';
    } else {
      contentType = 'text/plain';
    }
    res.writeHead(200, {
      'Content-Type': contentType
    });
    res.end(data);
  });
}).listen(9999);