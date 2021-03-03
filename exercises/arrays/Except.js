const numbers = [1, 2, 3, 4, 1, 5];

const output = except(numbers, [1, 3]);

function except(array, excluded) {
    const output = [];
    // for (let exclude of excluded)
    //     array.splice(array.indexOf(exclude),1);
    for (let n of array)
        if (!excluded.includes(n))
            output.push(n);
    return output;
}

console.log(output);
