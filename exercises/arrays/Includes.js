const numbers = [1, 2, 3, 4];

console.log(numbers.includes(3));

function includesElement(array, searchElement) {
    return array.indexOf(searchElement) !== -1;
}

console.log(includesElement( 3));
