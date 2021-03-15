const numbers = [1,2,3,4,1];

function countOccurrences(array,  searchElement) {
    if (!Array.isArray(array)) return new Error('First Argument is not an array')
    return array.reduce((accumulator, currentValue) => {
        const occurrence = currentValue === searchElement ? 1 : 0;
        return accumulator += occurrence;
    }, 0)

}

try {
    console.log(countOccurrences(numbers,1));
} catch (e) {
    console.error(e);
}

