# Javascript/ECMAScript 6

Javascript > Programming Language
ECMAScript > Specification

Dynamically typed (not type safe)

JavaScript Engines
FireFox: SpiderMonkey
Google : v8(Used in node)

## Variables

- Default value of variables are undefined
- Case-sensitive
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

- Arithmetic
- Assignment
- Comparison
- Logical
- Bitwise

### Arithmetic operators

- Addition +
- Subtraction -
- Multiplication *
- Division /
- Remainder of division % Modulo
- Exponentiation ** > ( x ** y ) x to the power of y
- Increment ++
- Decrement --

    let x = 10;
    console.log(++10); // output 11
    console.log(10++); // output 10

### Assignment operators

    let x = 10;
    x++; // x = x + 1;
    x += 5; // x = x + 5;

    x *= 4; // x = x * 4;

### Comparison operators

let x = 1;

#### Relational

- Greater than >
- Greater than or equal to >=
- Less than <
- Less than or equal to <=

#### Equality

- Strict Equality === (Checks if type and value are equal) Ensures that both values have same type and value
`1 === 1 // true`
`'1' === 1 // false`

- Lose Equality == (Will convert the type and checks the value)
`1 == 1 //true`
`'1' == 1 //true`

Not equal !==

#### Ternary

`let points = 110`
`let type = points > 100 ? 'Gold' : 'Silver'` //Gold

### Logical operators

- Logical AND && Returns TRUE if both operands are true
- Logical OR || Returns TRUE if one of the operands is true
- Logical NOT ! Returns the opposite
- Can be used with non-booleans as well(truthy or falsy)
- Falsy: undefined, null, 0 ,false, '', NaN
- Anything that is not falsy is truthy
- Short-circuiting: It will return the first value which is truthy when evaluating from left to right
`(false || 1 || 2 || 3)` //Output 1

### BitWise operators

-  BitWise OR | (Add)
-  BitWise AND & (Check)

1 = 00000001  
2 = 00000010

1 | 2 // 3 = 00000011  
1 & 2 // 0 = 00000000

## Operator precedence 

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence>

## Control Flow

### Conditional statements

- If...else (If we only have one statement we don't need to use {})
- Switch...case  (Need to use break; in each switch statement to jump out of the block)

### Loops

Repeats action multiple times until condition is met
- For `for (initialExpression; condition; incrementExpression;)`
- While `initialExpression while(condition) {... incrementExpression}`
- Do...while `initialExpression do{... incrementExpression} while(condition)` do block is executed at least once

Iterate over properties of an object or elements in an array
- For...in `for (let key in object) console.log(key, object[key])` Used for objects but can be used for arrays as well
- For...of `for (let element of array)` (color of colors)

`break;` terminates the current loop/ jump out of a loop
`continue;` terminates execution of the statements in the current iteration and jump to the next iteration of the loop

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
