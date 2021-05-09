## Objects

- Purpose of an object is to group related variables and functions
- A function that is a part of an object is called a method
- Objects are dynamic, we can add or delete new properties and methods
- const objects cannot be reassigned but can add/delete properties and change the object
- Every object has a constructor property(it references to the function that was used to create the object)
- If one or more methods(behavior) are in the object, object literal syntax is not a good way to create objects
- When there are one or more methods in an object, the best way to create an object is factory or constructor functions
- Objects are not iterable

## Creating Objects

### 1. Object Literal Syntax { }

- We use { } to define an object
- We add key: value pairs to it
- Properties are used to hold values
- Functions/Methods are used to define some logic
- Access the members using dot notation
- Constructor property of circle is Object()


    const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 2
        },
        isVisible: true,
        draw: function () {
            console.log('draw');
        }
    };
    circle.draw();

    let x = {};
    //let x = new Object(); //JavaScript converts above line to this

### 2. Factory functions

- Produce object instances without diving into the complexities of classes, and the new keyword
- It simply returns an object
- Camel Notation createCircle()
- Constructor property of circle1 is Object() this is an internal constructor function
  index.js:107


    function createCircle(radius) {
        return {
            radius, //If key and values are same we can just keep the key to simplify the code
            draw() {
                console.log('Draw');
            }
        }
    }
    const circle1 = createCircle(1);
    circle1.draw();

### 3. Constructor functions

- Pascal notation Circle()
- Under the hood the **new** keyword will,
1. create an empty object
2. set 'this' to point to the empty object ('this' is used to reference the object and dot notation is used to set various properties)
3. return the object
- If new keyword is not used it will refer to the Window object in the browser
- Constructor property of circle object is Circle(radius) {....}


    function Circle(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('Draw circle');
        }
    }
    const circle = new Circle(1);
    circle.draw();

Other constructor examples, but we don't use
- new String(); //'', "", ``
- new Boolean(); //true, false
- new Number(); //1,2,3

## Functions are objects

- Functions also have different members(properties and methods)
- Constructor of a Function is Function()
- When declaring a function internally it is represented as below


    //
    const Circle = new Function('radius', `
      this.radius = radius;
      this.draw = function () {
      console.log('Draw circle');
      }
    `);

    const circle1 = new Circle(1);


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

## This keyword

The object that is executing the current function
- If a function is a **method**(function) of an object, this references that **object itself**
- If a function is a **regular function(not part of an object)** this references the **global object(window object in the browser and global object in node)**
- If we call a function using the **new operator(constructor functions)**, this references to a **new empty object**
