var fs = require('fs');

fs.writeFile('data.txt', 'Hello from Kevin', function(err){
    if (err) {
        throw err;
    }
});