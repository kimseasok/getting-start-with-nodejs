var request = require('request');

var s = request('https://pluralsight.com/');

s.pipe(process.stdout);

//Alternative way

//var s = request('https://pluralsight.com/').pipe(process.stdout);