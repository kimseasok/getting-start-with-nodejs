var os = require('os');

var toMb = (f) => {
    return (Math.round((f/1024/1024/1024)*100)/100);
}

console.log(`Host: ${os.hostname()}`);

console.log(`10 min. load average: ${os.loadavg()[2]}`);

console.log(`${toMb(os.freemem())} of ${toMb(os.totalmem())} MB free`);