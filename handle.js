var queryString = require('querystring');

function handle (request, response) {
    
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var body = '';
    request.on('data', function(data){
        body += data.toString();
        console.log(body);
    });

    request.on('end', function() {
        var decode = queryString.parse(body);

        console.log(decode);
    });

    response.write('<!DOCTYPE "html">');
    response.write('<html><body><h1>Hello from http module</h1></body></html>');

    response.end();
}

 module.exports = handle;