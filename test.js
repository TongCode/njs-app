var http = require('http');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080, 
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


console.log("Listen on :" + ip + ":" + port);
console.log("Hello openshift");

var server = http.createServer(function (req, res) {
  res.end("Hello openshift");
});

http.listen(port, ip);
