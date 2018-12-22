var fs = require('fs');

if (fs.existsSync('temp')) {
    console.log('Directory exists, Removing...');
    if (fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }

    fs.rmdirSync('temp');
}

fs.mkdir('temp', (err) => {
    fs.exists('temp', (exists) => {
        if (exists) {
            process.chdir('temp');

            fs.writeFile('text.txt', 'This is the test text for the file', (err) => {
                fs.rename('text.txt', 'new.txt', (err) => {
                    fs.stat('new.txt', (err, stats) => {
                        console.log(`File has size ${stats.size} bytes`);
                        fs.readFile('new.txt', (err, data) => {
                            console.log(`File contents: ${data.toString()}`);
                        });
                    });
                })
            });
        }
    });
});