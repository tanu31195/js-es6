function countTruthy(array) {
    let truthyItems = 0
    for (let val of array)
        if (val)
            truthyItems++
    return truthyItems;
}

const array = [1, 2, 3, 4, 0, '', null, undefined, 100, 'Tanu']
console.log(countTruthy(array));
