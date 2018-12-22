process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
    process.stdin.write(`Data -> ${chunk}`);
});

process.stdin.on('end', () => {
    process.stderr.write('End!\n');
});

process.on('SIGTERM', () => {
    process.stderr.write(`Why are you trying to terminate me?... :-)`);
});

console.log(`Node is running as process # ${process.pid}`);