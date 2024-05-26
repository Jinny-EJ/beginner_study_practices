// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {
//     console.log('yum')
// })

// eventEmitter.emit('lunch');
  

// const { readfile, readfileSync } = require('fs');

// // SYNC === BLOCKING 

// const txt = readFileSync('./hello.txt', 'utf8');

// console.log(txt)

readFile( './hello.txt', 'utf8', (err,txt) => {
    console.log(txt)
});

console.log('do this ASAP')