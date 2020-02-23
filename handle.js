function handle (request, response) {
    
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<!DOCTYPE "html">');
    response.write('<html><body><h1>Hello from http module</h1></body></html>');

    response.end();
}
 exports.fn = handle;

 module.exports = handle;