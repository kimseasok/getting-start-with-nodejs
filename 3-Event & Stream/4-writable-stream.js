console.log(`Stdout is writeable? ${process.stdout.writable}`);

process.stdout.write('Hello ');

process.stdout.write('World!...');