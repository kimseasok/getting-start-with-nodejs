var mathfun = require('./mathfun');

process.on('message', (m) => {
    if (m.cmd === 'double') {
        console.log(`hs: I was asked to double ${m.number}`);
        mathfun.evenDoubler(m.number, (err, result) => {
            process.send({answer: result});
        });
    } else if (m.cmd === 'done') {
        console.log('Exit the child process');
        process.exit();
    }
});