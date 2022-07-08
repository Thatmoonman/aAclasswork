function isPrime(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
    
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
///////////////////////////////////////////////
function choosePrimes(nums) {
    let array = []
    
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        if (isPrime(number) === true) {
            array.push(number)
        }
    }
    return array;
    
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
///////////////////////////////////////////////
function nextPrime(number) {
    for (let i = number + 1; ; i++) {
        if (isPrime(i) === true) {
            return i
        }
    }
}



console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
///////////////////////////////////////////////
function primeFactors(number) {
    let array = []
    
    for (let i = 1; i <= number; i++) {
        
        if (isPrime(i) === true && number % i === 0) {
            array.push(i)
        }
    }
    return array
    
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
///////////////////////////////////////////////
function isAntiPrime(number) {
    let count = 0

    for (let i = number; i > 0; i--) {
        if (number % i === 0) {
            count++
        }
    }
        
    for (let j = number -1; j > 3; j--) {
        let counter = 0
        
        for (let k = j; k > 0; k--) {
            if (j % k === 0) {
                counter++
            }
        }
        if (counter > count) {
            return false
        }
    }
    return true
}



console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
///////////////////////////////////////////////

///////////////////////////////////////////////