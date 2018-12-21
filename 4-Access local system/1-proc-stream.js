process.stdin.resume('Input data here: ');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
    process.stdin.write(`Data -> ${chunk}`);
});

process.stdin.on('end', () => {
    process.stderr.write('End!\n');
});