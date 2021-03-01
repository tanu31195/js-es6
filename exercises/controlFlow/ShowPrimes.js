// Prime (Factors are only 1 and itself)

function showPrimes(limit) {
    for (let number = 2; number < limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
            }
        }
        if (isPrime) console.log(number);
    }

}

showPrimes(20);
