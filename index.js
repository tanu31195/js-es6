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
