// 0,3 [2,3,4,1]
// 0,1 [2,1,3,4]
// 1,-1 [2,1,3,4]

const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0)
        return console.error('Invalid Offset')
    const output = [...array];
    let val = output.splice(index, 1)[0];
    output.splice(position, 0, val);
    return output;
}

const output = move(numbers, 0, 1);

console.log(output);
