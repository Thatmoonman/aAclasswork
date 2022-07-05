/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

function isPrime(number) {
  if (number<2) {
    return false
  } else {
    for (i=2;i<number;i++) {
      if (number % i === 0) {
        return false
      }
    }
  }
  return true
}

// console.log(isPrime(2)); // => true
// console.log(isPrime(1693)); // => true
// console.log(isPrime(15)); // => false
// console.log(isPrime(303212)); // => false
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/
function isPrime(number) {
  if (number<2) {
    return false
  } else {
    for (i=2;i<number;i++) {
      if (number % i === 0) {
        return false
      }
    }
  }
  return true
}

function firstNPrimes(n) {
  let array = []

  for (q=2; array.length<=n-1; q++) {
    if (isPrime(q) === true) {
      array.push(q)
    }
  }
  return array

}

// console.log(firstNPrimes(0)); // => []
// console.log(firstNPrimes(1)); // => [2]
// console.log(firstNPrimes(4)); // => [2, 3, 5, 7]
/***********************************************************************
Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/
function isPrime(number) {
  if (number<2) {
    return false
  } else {
    for (i=2;i<number;i++) {
      if (number % i === 0) {
        return false
      }
    }
  }
  return true
}

function firstNPrimes(n) {
  let array = []

  for (q=2; array.length<=n-1; q++) {
    if (isPrime(q) === true) {
      array.push(q)
    }
  }
  return array

}

function sumOfNPrimes(n) {
  let primes = firstNPrimes(n)
  let sum = 0

  for (p=0;p<primes.length;p++) {
    sum += primes[p]
  }
  return sum
  
}

console.log(sumOfNPrimes(0)); // => 0
console.log(sumOfNPrimes(1)); // => 2
console.log(sumOfNPrimes(4)); // => 17