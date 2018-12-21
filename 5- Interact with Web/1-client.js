var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Start making request');

var req = http.request(options, (res) => {
    console.log(res.statusCode);
    res.pipe(process.stdout);
});

// var req = http.request('http://www.google.com/', (res) => {
//     console.log(res.statusCode);
//     res.pipe(process.stdout);
// })

//you eliminate the req.end by replace http.request with http.get 

req.end();