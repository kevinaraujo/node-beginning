var http = require('http');
var handle = require('./handle');
var s = require('./name');

console.log(s.name());
//console.log(handle);
var server = http.createServer(handle.fn);

server.listen(9000, function() {
 
    console.log('Server is listening at 9000 port.')
}); 