# Javascript/ECMAScript 6

Javascript > Programming Language
ECMAScript > Specification

Dynamically typed (not type safe)

JavaScript Engines
FireFox: SpiderMonkey
Google : v8(Used in node)

## Variables

- Case sensitive
- Should be meaningful
- Cannot be a reserved keyword
- Cannot start with a number (1name)
- Cannot contain a space or hyphen (-)
- Use camel notation for naming variables

### Primitive/Value Types

String
Number
Boolean
undefined
null (Used to explicitly clear the value of a variable)

Use const if you don't want to reassign a variable

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
