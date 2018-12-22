var Resource = require('./resources');

var r = new Resource(7);

r.on('start', () => {
    console.log(`I've started!...`);
});

r.on('data', (d) => {
    console.log(`   I recevied data ${d}`);
});

r.on('end', (t) => {
    console.log(`I'm done with ${t} data event`);
});