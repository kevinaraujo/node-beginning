var http = require('http');

function handle (request, response) {
    
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<!DOCTYPE "html">');
    response.write('<html><body><h1>Hello from http module</h1></body></html>');

    response.end();
}

var server = http.createServer(handle);

server.listen(9000, function() {
    console.log('Server is listening at 9000 port.')
});