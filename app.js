var http = require('http');
var handle = require('./handle');

var events = require('events');
//var emitter = new events.EventEmitter();

/*emitter.on('say12', say);

function say() {
    console.log("I'm saying...");
}*/

//emitter.emit('say12');

var server = http.createServer(handle);

server.listen(3000, function() {
 
    console.log('Server is listening at 9000 port.')
}); 