/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/
function primeFinder(num) {
    for (let i=2; i<num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function nextTwoPrimes(num) {
    let twoPrimes = []

    for (let i=num+1; twoPrimes.length <2; i++) {
        if (primeFinder(i) === true) {
            twoPrimes.push(i)
        }
    }
    return twoPrimes

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;