console.log(
    "%cJavascript",
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
    "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
    "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
);

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
var z = function (x, y) {
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


let f = isFinite(10 / 0);     // returns false
console.log("Finite " + f);
let i = isFinite(10 / 1);       // returns true
console.log("Finite " + i);

isNaN("Hello"); // returns true

//Exponentiation Operator
{
    let x = 5;
    let z = x ** 2;
    console.log("** " + z);

    let j = 5;
    let k = Math.pow(j, 2);
    console.log("Math.pow " + k);
}

{
    let a = 'red';
    let b = 'blue';

    console.log('Before swap a:' + a);
    console.log('Before swap b:' + b);

    [a, b] = [b, a];

    console.log('After swap a:' + a);
    console.log('After swap b:' + b);
}

{
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

}

{
    function createCircle(radius) {
        return {
            radius,
            draw() {
                console.log('Draw');
            }
        }
    }

    const circle1 = createCircle(1);
    const circle2 = createCircle(2);
    console.log(circle1);
    console.log(circle2);
    circle1.draw();
}

{
    function Circle(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('Draw circle');
        }
    }

    const circle = new Circle(1);
    circle.draw();
}

{
    console.log('%cArrays 🚂', 'color:red;');
    console.log('Adding elements');
    const numbers = [3, 4]; //[3,4]

    //End
    numbers.push(5, 6); // [3,4,5,6]

    //Beginning
    numbers.unshift(1, 2); // [1,2,3,4,5,6]

    //Middle (start position, delete count, new items)
    numbers.splice(2, 0, 'a', 'b');

    console.log(numbers);

    console.log('Finding elements');
    console.log(numbers.indexOf('a'));
    console.log(numbers.indexOf('a') !== -1);

    console.log(numbers.includes(15));
    const courses = [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'},
        {id: 3, name: 'c'},
    ];

    console.log(courses.find(function (course) {
        return course.name === 'a';
    }));
    console.log(courses.findIndex(course => {
        return course.name === 'a';
    }));
}

{
    console.log('Removing elements');
    const numbers = [1, 2, 3, 4, 5, 6]; //[1,2,3,4,5,6]
    //End
    const last = numbers.pop(); // numbers:[1,2,3,4,5] last: 6
    console.log(last);
    console.log(numbers);
    //Beginning
    const first = numbers.shift(); // numbers:[2,3,4,5] first: 1
    console.log(first);
    console.log(numbers);
    //Middle (start position, delete count, new items)
    numbers.splice(2, 2); // [2, 3]
    console.log(numbers);
}

{
    console.log('Emptying an array');
    let numbers = [1, 2, 3, 4, 5, 6];
    let another = numbers;

    //Solution 1: Will not work if there is a reference object
    numbers = [];

    //Solution 2: Best solution
    numbers.length = 0;

    //Solution 3
    numbers.splice(0, numbers.length);

    //Solution 4: Have performance impact
    while (numbers.length > 0)
        numbers.pop();
}

{
    console.log('Combining and slicing arrays');
    let one = [1, 2, 3];
    let two = [4, 5, 6];

    let combined = one.concat(two); // [1, 2, 3, 4, 5, 6]
    console.log(combined);

    let sliced3 = combined.slice(); //[1, 2, 3, 4, 5, 6]
    let sliced1 = combined.slice(2); //[3, 4, 5, 6]
    let sliced2 = combined.slice(2, 4); //[3, 4]
    console.log(sliced1, sliced2, sliced3);
}

{
    console.log('Iterating arrays');
    let numbers = [1, 2, 3];

    for (let number of numbers)
        console.log(number);

    numbers.forEach((number, index) => console.log(index, number));
}

{
    console.log('Joining arrays');
    const numbers = [1, 2, 3];
    const joined = numbers.join('#');

    console.log(joined);
}

{
    console.log('Sorting arrays');
    const numbers = [3, 1, 2, 6, 4];
    numbers.sort();

    console.log(numbers);
    numbers.reverse(); //reverses the order
    console.log(numbers);

    const courses = [
        {id: 1, name: 'Node'},
        {id: 2, name: 'javascript'},
        {id: 3, name: 'Mongo'},
    ];

    courses.sort(function (a, b) {
        //case sensitivity affects ordering(Uppercase are higher than lowercase in ascii table)
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) return -1 //a < b
        if (nameA > nameB) return 1 //a > b
        return 0; //a === b
    });

    console.log(courses);
}

{
    console.log('Checking arrays');
    const numbers = [3, -1, 2, 6, 4];

    const allPositive = numbers.every(number => number >= 0);
    console.log(allPositive);
    const atLeastOne = numbers.some(number => number >= 0);
    console.log(atLeastOne);
}

{
    console.log('Filtering arrays');
    const numbers = [3, -1, 2, 6, 4];

    const filtered = numbers.filter(number => number >= 0);
    console.log(filtered);

    const courses = [
        {id: 1, name: 'Node'},
        {id: 2, name: 'javascript'},
        {id: 3, name: 'Mongo'},
    ];

    const filtered1 = courses.filter(course => course.name.includes('o'));
    console.log(filtered1);
}

{
    console.log('Mapping arrays');
    const numbers = [3, -1, 2, 6, 4];

    const filtered = numbers.filter(number => number >= 0);

    const mapped = filtered.map(number => {
        return {value: number};
    });
    const mapped2 = filtered.map(number => ({value: number}));

    const mapped1 = filtered.map(number => {
        return `<li>${number}</li>`;
    });

    //Chaining
    const filtered1 = numbers
        .filter(number => number > 0)
        .map(number => `<li>${number}</li>`)
        .join(`\n`);

    console.log(mapped1.join(`\n`));

    console.log(mapped1);
    console.log(filtered1);
}

{
    console.log('Reducing arrays');
    const numbers = [3, -1, 2];

    //Reduce method have 2 arguments
    //1st is a callback function
    //2nd is the initial value of the accumulator
    //a = 0 c=3 => 3
    //a = 3 c=-1 => 2
    //a = 2 c=2 => 4
    const reduced = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    //a = 3 c=-1 => 2
    //a = 2 c=2 => 4
    const reduced1 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

    console.log(reduced);
}

{
    console.log('Functions');

    //Function Declaration (; is not required)
    function walk() {
        console.log('walk');
    }

    //Anonymous Function Expression
    let run = function () {
        console.log('run');
    }; // When declaring a variable/constant we need to terminate it with a ;
    let x = 1;

    //Named Function Expression
    let jog = function jogging() {
        console.log('jog');
    };

    run();
    let move = run; // move and run are referencing the same anonymous function (one object in memory)
    move();
}

{
    console.log('Arguments');

    function sum(a, b) {
        console.log(arguments);
        return a + b;
    }

    console.log(sum(1 + 2)); //3
    console.log(sum(1)); //NaN (1 + undefined)
    console.log(sum(1, 2, 3, 4, 5)); //3

    function total() {
        console.log(arguments);
        let total = 0;
        for (let value of arguments)
            total += value;
        return total;
    }

    console.log(total(1, 2, 3, 4, 5));
}

{
    console.log('Rest operator');

    function sum1(...args) {
        console.log(args);
        return args.reduce((a, b) => a + b);
    }

    console.log(sum1(1, 2, 3, 4, 5, 10));
}

{
    console.log('Default parameters');
    function interest(principal, rate = 3.5, years = 5) {
        // rate = rate || 3.5;
        // years = years || 5;
        return principal * rate / 100 * years;
    }

    console.log(interest(10000 ));
}
