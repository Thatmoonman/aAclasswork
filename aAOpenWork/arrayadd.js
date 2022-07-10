function addToArray(location, element, arr) {
    if (location === "FRONT") {
        arr.unshift(element)
    } else if (location === "BACK") {
        arr.push(element)
    } else if (location !== "FRONT" && location !== "BACK") {
        console.log("ERROR")
    }
    return arr
    
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]

/////////////////////////////////////////////////////////////
function range(min,max) {
    let arr = []
    
    for (let i = min; i <= max; i++) {
        arr.push(i)
    }
    return arr
    
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []
/////////////////////////////////////////////////////////////
let evenNumbers = function(max) {
    let arr = []
    
    for (let i = 2; i < max; i += 2) {
        arr.push(i)
    }
    return arr
    
}


console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
/////////////////////////////////////////////////////////////
function logBetweenStepper(min, max, step) {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15
/////////////////////////////////////////////////////////////
let factorsOf = function(num) {
    let arr = []
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    return arr
    
}

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]
/////////////////////////////////////////////////////////////
function fizzBuzz(max) {
    let arr = []
    
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            continue;
        } else if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
    
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
/////////////////////////////////////////////////////////////
function pitPat(max) {
    let arr = [] 
    
    for (let i = 1; i <= max; i++) {
        if (i % 4 === 0 & i % 6 == 0) {
            continue;
        } else if (i % 4 === 0 || i % 6 === 0) {
            arr.push(i)
        }
    }
    return arr
    
 }
 
 console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
 console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
/////////////////////////////////////////////////////////////
function tripleSequence(start, length) {
    let arr = []
    
    for (let i = start; arr.length < length; i *= 3) {
        arr.push(i)
    }
    return arr
    
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
/////////////////////////////////////////////////////////////
function unique(array) {
    let newArray = [... new Set(array)]
    
    return newArray
}


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
/////////////////////////////////////////////////////////////
function yeller(words) {
    let array = words.map(word => word.toUpperCase() + "!")
    
    return array
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
/////////////////////////////////////////////////////////////
function tripler(nums) {
    let array = nums.map(number => number * 3)

    return array
}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
/////////////////////////////////////////////////////////////
function longWords(words) {
    let array = []
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        
        if (word.length > 5) {
            array.push(word)
        }
    }
    return array
    
}

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
/////////////////////////////////////////////////////////////
function chooseyEndings(array, suffix) {
    let newArray = []
    
    for (let i = 0; i < array.length; i ++) {
        let word = array[i]
        
        if(word.slice(word.length-suffix.length,) === suffix) {
            newArray.push(word)
        }
    }
    return newArray
}

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]
/////////////////////////////////////////////////////////////
function commonFactors(num1,num2) {
    let array = []
    
    for (let i = 0; i < num1 + num2; i++) {
        
        if (num1 % i === 0 && num2 % i === 0) {
            array.push(i)
        }
    }
    return array
    
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]
/////////////////////////////////////////////////////////////
function adjacentSums(array) {
    let newArray =[]
    
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i] + array[i+1])
    }
    return newArray
    
}

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]
/////////////////////////////////////////////////////////////
// Your code here
function fibonacciSequence(number) {
    let array = [1,1]
    
    if (number === 0) {
        return []
    } else if (number === 1) {
        return [1]
    } else {
        for (let i = 2; array.length < number; i++) {
            array.push(array[i-1]+array[i-2])
        }
    }
    return array
    
}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
/////////////////////////////////////////////////////////////
function pickPrimes(array) {
    let newArray = []
    let test
    
    for (let i = 0; i < array.length; i++) {
        test = true
        
        if (array[i] < 2) {
            test = false
            
        } else {
            for (let j = 2; j < array[i]; j++) {
                if (array[i] % j === 0) {
                    test = false
                }
            }
        }
        if (test === true) {
            newArray.push(array[i])
        }
    }
    return newArray

}


console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
/////////////////////////////////////////////////////////////
function greatestFactorArray(array) {
    let newArray = []
    
    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        
        if (num % 2 !== 0) {
            newArray.push(num)
        } else {
            for (let j = num - 1; j >= 2; j--) {
                if (num % j === 0) {
                    newArray.push(j)
                    break;
                    
                }
            }
        }
    }
    return newArray;
    
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
/////////////////////////////////////////////////////////////
function summationSequence(start, length) {
    let array = []
    array.push(start)
    
    for (i = 0; i < length-1; i++) {
        let sum = 0
        
        for (let j = 1; j <= array[i]; j++) {
            sum += j    
        }
        array.push(sum)
    }
    return array
    
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]