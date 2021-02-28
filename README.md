# Javascript/ECMAScript 6

Javascript > Programming Language
ECMAScript > Specification

Dynamically typed (not type safe)

JavaScript Engines
FireFox: SpiderMonkey
Google : v8(Used in node)

## Variables

- Default value of variables are undefined
- Case sensitive
- Should be meaningful
- Cannot be a reserved keyword
- Cannot start with a number (1name)
- Cannot contain a space or hyphen (-)
- Use camel notation for naming variables

Use const if you don't want to reassign a variable

### Primitive/Value Types

String
Number
Boolean
undefined
null (Used to explicitly clear the value of a variable)

### Objects

let person = {
    name: 'Tanushka',
    age: 25
};

Dot notation can be used to assign and read values(shorter and concise)
`person.name = 'Tanu';`

Bracket Notation
`person['name'] = 'Tan';`

This is best used for dynamic assignment on run time
`let selection = 'name';`
`person[selection] = 'T';`

### Arrays

Array is an object
Array is a data structure that is used to represent a list of items
Length is dynamic
Can be any type(Elements doesn't need to be the same type)

`let colors = ['red', 'green']`
`colors[2] = 'green'`

`console.log(colors[1])`

## Functions

    function greet(name) { // name is the Parameter of the function
        console.log('Hello World' + name);
    } // ; not required

`greet('Tanu');` // Argument is passed

### Types of functions

- Performs a task
- Calculates a value and return it

## Operators

By using operators and variables we can create expressions, by using expression we can create algorithms

Operators variables -> expressions -> algorithms

### Types of operators

- Arithmetic
- Assignment
- Comparison
- Logical
- Bitwise

#### Arithmetic operators

- Addition +
- Subtraction -
- Multiplication *
- Division /
- Remainder of division %
- Exponentiation ** > ( x ** y ) x to the power of y
- Increment ++
- Decrement --

    let x = 10;
    console.log(++10); // output 11
    console.log(10++); // output 10

#### Assignment operators

    let x = 10;
    x++; // x = x + 1;
    x += 5; // x = x + 5;

    x *= 4; // x = x * 4;

#### Comparison operators

let x = 1;

##### Relational

Greater than >
Greater than or equal to >=
Less than <
Less than or equal to <=

##### Equality

- Strict Equality === (Checks if type and value are equal) Ensures that both values have same type and value
`1 === 1 // true`
`'1' === 1 // false`

- Lose Equality == (Will convert the type and checks the value)
`1 == 1 //true`
`'1' == 1 //true`

Not equal !==

##### Ternary

`let points = 110`
`let type = points > 100 ? 'Gold' : 'Silver'` //Gold

--

1.Hoisting: Js compiler will move variable declarations and functions to the top

2.Call stack: LIFO: When we say that the call stack, operates by the data structure principle of Last In, First Out,
it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns.

3.IIFE: Immediately invoking function expression
(function() {
    var name = 'Tan';
}) ();

4.Scope

- Global scope
- Function scope

JavaScript let
The let statement allows you to declare a variable with block scope

5.callbacks, promises and async await*/
