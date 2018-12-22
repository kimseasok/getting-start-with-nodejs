var request = require('request');
var fs = require('fs');

request('http://pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));