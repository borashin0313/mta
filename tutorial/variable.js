// 1. Use strict
// added in ES 5
// use this for valina Javascript

'use strict';

// 2. Variable
// let (added in ES6)
let globaName = 'global name'
{
    let name = 'bora';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globaName);
}
// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

console.log(name);
console.log(globaName);

// 3. (immutable)constants 값이 잠겨 있다. <-> mutable
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - specicla numberic values: infinity, - infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(fairly new, don't use it yet)
const bigInt = 1234456789012345678901234567890n; //over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`)

// boolean
// false : 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1; //false
console.log(`value : ${canRead}, type: ${typeof canRead}`)
console.log(`test : ${test} type: ${typeof test}`)

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`)


// undefined
let x;
console.log(`vlaue: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol2}`)

// object, real-life object, data structure
const bora = {name: 'bora', age: 30}
console.log(`value: ${bora.age}, type: ${typeof bora}`)

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`)
text = 1;
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`)
