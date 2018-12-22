var fs = require('fs');

var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plan'});

    if (req.url === '/file.txt') {
        fs.createReadStream(__dirname + 'file.txt').pipe(res);
    } else {
        res.end('Hello World!...');
    }
}).listen(3000, () => {
    console.log('Server is running');
});