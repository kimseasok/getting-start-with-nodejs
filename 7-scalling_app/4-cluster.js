var cluster = require('cluster');
var http = require('http');
var numWorkers = 2;

if (cluster.isMaster) {
    for (var i = 0; i < numWorkers; i++) {
        console.log('Master: about to fork a worker');
        cluster.fork();
    }

    cluster.on('fork', (worker) => {
        console.log(`Master: fork event (worker ${worker.id})`);
    });

    cluster.on('online', (worker) => {
        console.log(`Master: online event (worker ${worker.id})`);
    });

    cluster.on('listening', (worker, address) => {
        console.log(`Master: listening event (worker ${worker.i}, pid ${worker.process.pid}, ${address.address}:${address.port})`);
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Master: exit event (worker ${worker.id})`);
    });
} else {
    console.log(`Worker: worker \#${cluster.worker.id} ready!)`);

    var count = 0;

    http.createServer((req, res) => {
        res.writeHead(200);

        count++;

        console.log(`Worker: worker \#${cluster.worker.id} is incrementing count to ${count}`);
        res.end(`Hello world from worker \#${cluster.worker.id} (pid ${cluster.worker.process.pid} with count = ${count}) \n`);

        if (count === 3) {
            cluster.worker.destroy();
        }
    }).listen(3000, '127.0.0.1');
}