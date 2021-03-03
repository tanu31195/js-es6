# Javascript/ECMAScript 6

Javascript > Programming Language
ECMAScript > Specification

Dynamically typed (not type safe)  
Garbage collection done automatically

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

- String
- Number
- Boolean
- undefined
- null (Used to explicitly clear the value of a variable)
- Symbol (new in ES6)

### Reference Types

- Object
- Function
- Array

#### Objects

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

#### Arrays

Array is an object
Array is a data structure that is used to represent a list of items
Length is dynamic
Can be any type(Elements doesn't need to be the same type)

`let colors = ['red', 'green']`
`colors[2] = 'green'`

`console.log(colors[1])`

#### Functions

    function greet(name) { // name is the Parameter of the function
        console.log('Hello World' + name);
    } // ; not required

`greet('Tanu');` // Argument is passed

##### Types of functions

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

## Objects

- Purpose of an object is to group related variables and functions  
- A function that is a part of an object is called a method  
- Objects are dynamic, we can add or delete new properties and methods  
- const objects cannot be reassigned but can add/delete properties and change the object
- Every object has a constructor(it references to the function that was used to create the object)
- Functions are objects
- Objects are not iterable

### Factory functions

- Produce object instances without diving into the complexities of classes, and the new keyword  
- It simply returns an object
- Camel Notation createCircle()
- Constructor of circle1 is Object() this is an internal constructor function
index.js:107

    function createCircle(radius) {
        return {
            radius,
            draw() {
                console.log('Draw');
            }
        }
    }
    const circle1 = createCircle(1);

### Constructor functions

Pascal notation Circle()  
Under the hood the new keyword will,
- create an empty object
- set this to point to the empty object
- return the object
- Constructor of circle object is Circle(radius) {...}


    function Circle(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('Draw circle');
        }
    }
    const circle = new Circle(1);
    circle.draw();

### Enumerating Properties of an Object

We can use for...in `for (let key in object) console.log(key, object[key])` to iterate properties/methods in an object  
We can also use for...of with `for (let key of Object.keys(obj))` which returns a keys string array []
and `for (let entry of Object.entries(obj))` which returns each key value pair as an array
To check if a given property is in an object `if ('radius' in circle)`

### Cloning an object

#### Old way

    const another = {};
    for (let key in circle)
    another[key] = circle[key]; // another['radius'] = circle['key'];

#### Object.assign 

will take a target object(can be an empty object or an existing object) as the first argument 
and will take one or more source objects.  
This method will copy all the properties/methods of the source objects to the target object  
Can be used to clone an object or to combine multiple objects

    const another = Object.assign({}, circle); //empty object
    const another = Object.assign({color: 'green'}, circle); //existing

### Spread operator ...

Spreads an object(get all properties/methods) and put them into another object

    const another = { ...circle};

## Value(Primitives) vs. Reference(Objects) types

**Primitives** are copied by their **value**

    let x = 10;
    let y = x; // independent copy of the value
    x = 20
    //Output 
    x --> 20
    y --> 10
---

**Objects** are copied by their **reference** /address

    let x = {value : 10};
    let y = x; //copies the reference in memory like 1234
    x.value = 20
    //Output
    x = {value: 20}
    y = {value: 20}

When checking for equality between objects reference is checked

---

Math: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math>  
String: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>  
Javascript has String primitive and String object.  
Javascript engine will wrap the primitive string with a String object internally, so we can use the methods
Template Literals using back tick  
Use multi-line strings and string interpolation
Date: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date>

---

## Arrays

### Adding elements

    const numbers = [3,4]; //[3,4]
    
    //End
    numbers.push(5,6); // [3,4,5,6]

    //Beginning
    numbers.unshift(1,2); // [1,2,3,4,5,6]

    //Middle (start position, delete count, new items)
    numbers.splice(2, 0, 'a', 'b'); // [1, 2, "a", "b", 3, 4, 5, 6]

### Removing Elements

    const numbers = [1,2,3,4,5,6]; //[1,2,3,4,5,6]
    //End
    const last = numbers.pop(); // numbers:[1,2,3,4,5] last: 6

    //Beginning
    const first = numbers.shift(); // numbers:[2,3,4,5] first: 1

    //Middle (start position, delete count, new items)
    numbers.splice(2, 2); // [2, 3]

### Emptying an array

    let numbers = [1, 2, 3, 4, 5, 6];
    let another = numbers;

    //Solution 1: Will not work if there are multiple references. numbers will be pointing to a new array
    numbers = [];

    //Solution 2: Best solution
    numbers.length = 0;

    //Solution 3
    numbers.splice(0, numbers.length);

    //Solution 4: Have performance impact
    while (numbers.length > 0)
        numbers.pop();

### Combining, copying and slicing arrays

    let one = [1, 2, 3];
    let two = [4, 5, 6];

    //Combine
    let combined = one.concat(two); // [1, 2, 3, 4, 5, 6]
    const combined2 = [...one, ...two]; //Using the spread operator

    //Copy
    const copy = [...combined];
    let copy1 = combined.slice(); //[1, 2, 3, 4, 5, 6]

    //Slice
    let sliced1 = combined.slice(2); //[3, 4, 5, 6]
    let sliced2 = combined.slice(2,4); //[3, 4]

If the values are primitive they will be copied by values to the output array  
If the values are reference type(objects) the reference will be copied

### Joining arrays

    const joined = numbers.join(',');

Can use split and join
Default comma is used as separator

### Mapping arrays

    const mapped1 = filtered.map(number => {
    return `<li>${number}</li>`;
    });

### Reducing an array

- Reducing elements of an array to a single value  
- Reduce method have 2 arguments  
- 1st is a callback function  
- 2nd is the initial value of the accumulator  
- If we don't initialize the accumulator it will take the 
  1st element as accumulator and the 
  2nd element as currentValue


    numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    const reduced1 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

### Iterating an array

    for (let number of numbers)
    console.log(number);

    numbers.forEach((number, index) => console.log(index, number)); //when using for each we can also get the index

### Sorting arrays

    numbers.sort();
    numbers.reverse(); //reverses the order(does not sort)

### Checking elements

Returns a boolean, will not check all elements in an array will return if matches

    numbers.every() //Checks if every element matches the given criteria
    
    numbers.some() //Checks if at least one element matches the given criteria


### Finding Elements

#### Primitive types

    numbers.indexOf('a') // 2
    numbers.indexOf('d') // -1
    numbers.indexOf(4) !== -1 // true
    numbers.includes(5) //true
    numbers.indexOf('a', 3) // Passing search starting index from(Start search from index 3) 

#### Reference types(Objects)

    const course = courses.find(function (course) {
        return course.name === 'a';
    });
    const course = courses.findIndex(function (course) {
        return course.name === 'c';
    });

## Arrow functions

When passing a function as a callback/predicate function, or an argument we can use arrow function syntax

- Remove the function keyword and ;
- Add the arrow => to separate the parameters of the function from it's body
- If we only have one parameter we can remove the parenthesis also ()
- If there are no parameters we have to pass empty parenthesis ()
- If the function is a single line of code and is returning a value we can remove the curly braces as well {}
- If we are returning an object `(n => {value: n})` 
  we have to surround it using () `(n => ({value: n})` 
  because by default {} is treated as a code block


    const course = courses.find(function (course) {
        return course.name === 'a';
    });
    //Using arrow function
    const course = courses.find(course => course.name === 'a');

### Chaining of methods

A new array is returned everytime, so we can chain the methods

    const filtered1 = numbers
        .filter(number => number > 0)
        .map(number => `<li>${number}</li>`)
        .join(`\n`);

---

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
