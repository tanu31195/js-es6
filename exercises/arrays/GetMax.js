const numbers = [1, 2, 3, 4, 5];

function getMax(array) {
    if (array.length === 0) return undefined;
    // array.sort();
    // return array[array.length-1];
    return array.reduce((accumulator, currentValue) => (accumulator > currentValue) ? accumulator : currentValue);
}

const max = getMax(numbers);

console.log(max);
