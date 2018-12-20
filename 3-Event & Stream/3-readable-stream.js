var request = require('request');

var s = request('http://pluralsight.com/');

s.on('start', () => {
    console.log('Starting event emitter!...');
});

s.on('data', (chunk) => {
    console.log(`>>>Data>>> ${chunk}`);
});

s.on('end', () => {
    console.log(">>>>Done!>>>>>");
});