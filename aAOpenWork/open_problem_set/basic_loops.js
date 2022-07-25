function logBetween(lowNum,highNum) {
    for (let i = lowNum; i <= highNum; i++) {
        console.log(i)
    }
}


logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out:
// 4
// 5
// 6

////////////////////////////////////////////////////
function printFives(max) {
    // for (let i = 0; i < max; i++) {
    //     if (i % 5 === 0) {
    //         console.log (i)
            // }
        for (let i = 0; i < max; i += 5) {
            console.log(i)    
    }
}
// Example:

printFives(20) // prints out:
// 0
// 5
// 10
// 15
////////////////////////////////////////////////////
function logBetweenStepper(min, max, step) {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9


logBetweenStepper(-10, 15, 5)  // prints out:
// -10
// -5
// 0
// 5
// 10
// 15
////////////////////////////////////////////////////
function fizzBuzz(max) {
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            continue
        } else if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
}
// Examples:

fizzBuzz(20); // prints out:
3
5
6
9
10
12
18
////////////////////////////////////////////////////
// Your code here
function dynamicFizzBuzz(max,num1,num2) {
    let array = []
    
    for (let i = 0; i < max; i++) {
        if (i % num1 === 0 && i % num2 === 0){
            continue
        } else if (i % num1 === 0||i % num2 === 0) {
            array.push(i)
        }
    }
    return array
}



console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]
////////////////////////////////////////////////////
// your code here
function leastCommonMultiple(num1,num2) {
    for (let i = 1; i <= (num1*num2); i++) {
        if (i % num1 === 0 && i % num2 ===0)
        return i
    }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
////////////////////////////////////////////////////
function isPrime(number) {
    if (number < 2) {
        return false
    }
    
    for (let i = 2; i < number; i++) {
        if (number % i ===0) {
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
////////////////////////////////////////////////////
// your code here
function isPerfectSquare(num) {
    for (let i = 0; i <= num; i++) {
        if (i*i === num) {
            return true
        }
    }
    return false
}


console.log(isPerfectSquare(1))     // true
console.log(isPerfectSquare(4))     // true
console.log(isPerfectSquare(64))    // true
console.log(isPerfectSquare(100))   // true
console.log(isPerfectSquare(169))   // true
console.log(isPerfectSquare(2))     // false
console.log(isPerfectSquare(40))    // false
console.log(isPerfectSquare(32))    // false
console.log(isPerfectSquare(50))    // false
////////////////////////////////////////////////////
function fibonacci(length) {
    // your code here
    let array = []
    
    if (length === 0 ) {
        return array
    } else if (length === 1) {
        array.push(1)
    } else {
        array = [1,1]
        
        for (let i = 2; i < length; i++) {
        array.push(array[i-2] + array[i-1])
        }    
    }
    return array
    
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
////////////////////////////////////////////////////