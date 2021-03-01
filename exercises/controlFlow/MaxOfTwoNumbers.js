function maxOfTwoNumbers(numberOne, numberTwo) {
    // if (numberOne > numberTwo) return numberOne;
    // return numberTwo;

    return numberOne > numberTwo ? numberOne : numberTwo;
}

let maxNumber = maxOfTwoNumbers(10, 10);
console.log(maxNumber);
