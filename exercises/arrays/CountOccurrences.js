const numbers = [1, 2, 3, 4, 5, 1, 1, 2, 1];

function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let number of numbers)
    //     if (number === searchElement)
    //         count++;
    // return count;
    return array.reduce((accumulator, currentValue) => {
        // if (currentValue === searchElement)
        //     accumulator++;
        // return accumulator;
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        return accumulator + occurrence;

    }, 0)
}

const count = countOccurrences(numbers, 1);

console.log(count);
