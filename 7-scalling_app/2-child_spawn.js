var spawn = require('child_process').spawn,
    ps = spawn('ps',['ax']),
    grep = spawn('grep', ['node']);

ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data', (data) => {
    console.log(`ps stderr: ${data}`);
});

grep.stderr.on('data', (data) => {
    console.log(`grep error: ${data}`);
});