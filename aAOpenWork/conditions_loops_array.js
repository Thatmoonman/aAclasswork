function isFive(num) {
    if (num === 5) {
        return true
    }
    return false
}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false
////////////////////////////////////
function isOdd(num) {
    if (num % 2 === 0) {
        return false
    }
    return true
  }

  function isOdd(num) {
      return num % 2 !== 0
  }
  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true
//////////////////////////////////////////
  function isSubstring(searchString, subString) {
    searchString = searchString.toLowerCase()
    return searchString.includes(subString)
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
///////////////////////////////////////////////
function logBetween(lowNum,highNum) {
    for (i=lowNum; i<=highNum; i++){
        console.log(i)
    }
}

// Examples:
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
//////////////////////////////////////////////
function printFives(max) {
    for (let i=0; i<max; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

function printFives(max) {
    for (let i=0; i<max; i+=5) {
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
    for (i=min; i<=max; i+=step) {
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
    for (i=0;i<max;i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            continue
        } else if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
}
// Examples:

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18
////////////////////////////////////////////////////
function combineArray(array1, array2) {
    let newArray = array1.concat(array2)
    return newArray
}
console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]
////////////////////////////////////////////////////
function doubler(numbers) {
    let array = numbers.map(num => num*2)
    return array
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
////////////////////////////////////////////////////
function countVowels(word) {
    let vowels = 'aeiou'
    let counter = 0
    
    for (let i=0; i<word.length;i++) {
        if (vowels.includes(word[i]) === true) {
            counter += 1
        }
    }
    return counter
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2
////////////////////////////////////////////////////

