'use strict';

console.log('Hello World!');

let name = 'ellie';


// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log('value: ${greeting}, type: ${typeof greeting}');
const helloBob = 'hi ${brendan}!'; //template literals (string)
console.log('value: ${helloBob}, type: ${typeof helloBob}');
console.log('value: '+ helloBob + 'type: '+ typeof helloBob);



// boolean 
// false: 0, null, undefined, NaN, '''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log('value: ${canRead}, type: ${typeof canRead}');
console.log('value: ${test}, type: ${typeof test}');

//null
let nothing = null;
console.log('value: ${nothing}, type: ${typeof nothing}');

// undefined
// let x = undefined;
// let x;
console.undefined

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = symbol('id');