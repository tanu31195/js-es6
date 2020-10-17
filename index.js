// ECMAScript 6
/*Javascript

1.Hoisting: Js compiler will move variable declarations and functions to the top

2.Call stack: LIFO: When we say that the call stack, operates by the data structure principle of Last In, First Out,
it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns.

3.IIFE: Immediately invoking function expression
(function() {
    var name = 'Tan';
}) ();


4.Scope

Global scope

function scope


5.callbacks, promises and async await*/


//JavaScript let
//The let statement allows you to declare a variable with block scope
var x = 10;
// Here x is 10
{
    let x = 2;
    console.log("let " + x);
    // Here x is 2
}
console.log("var " + x);
// Here x is 10

// JavaScript const
var y = 10;
// Here y is 10
{
    const y = 2;
    console.log("const " + y);
    // Here y is 2
}
console.log("const " + y);
// Here y is 10


//Arrow Functions
// ES5
var z = function(x, y) {
    return x * y;
}

// ES6
const zz = (x, y) => x * y;



// Default Parameter Values
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
myFunction(5); // will return 15



 x = Number.EPSILON;
 console.log("EPSILON " + x);
 x = Number.MIN_SAFE_INTEGER;
console.log("MIN_SAFE_INTEGER " + x);
 x = Number.MAX_SAFE_INTEGER;
console.log("MAX_SAFE_INTEGER " + x);


Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false


Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false


let f = isFinite(10/0);     // returns false
console.log("Finite " + f);
let i =isFinite(10/1);       // returns true
console.log("Finite " + i);

isNaN("Hello"); // returns true

//Exponentiation Operator
{
let x = 5;
let z = x ** 2;
    console.log("** " + z);

let j = 5;
let k = Math.pow(j,2);
    console.log("Math.pow " + k);
}
