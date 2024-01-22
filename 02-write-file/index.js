const fs = require('fs');
const path = require('path');
const {stdin, stdout, exit} = require('process');

const way = path.join(__dirname, 'text2.txt');
const writeStream = fs.createWriteStream(way, 'utf-8');

stdout.write('Hello! How are you! \n');

stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') {
    stdout.write('Good bye! \n');
    exit();
  } else {
    writeStream.write(chunk, 'utf-8');
  }
});

process.on('SIGINT', () => {
  stdout.write('\nGood bye!');
  exit();
});
