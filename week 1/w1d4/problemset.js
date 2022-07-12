// Problem 1
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
function logEach(array) {
    for (i=0; i<array.length; i++) {
      console.log(i + ": " + array[i])
    }
  }
  
  // Example:
  //
  //logEach(["Anthony", "John", "Carson"]); // prints
  // 0: Anthony
  // 1: John
  // 2: Carson
  
  //Problem 2
  // Write a function range(start, end) that returns an array that contains all
  // numbers between 'start' and 'end' in sequential order.
  //
  function range(start,end) {
    let array = []
    for (i=start; i<=end; i++) {
      array.push(i)
    } return array
  }
  // Examples:
  //
  //console.log(range(1,4)) //=> [1,2,3,4]
  //console.log(range(4,2)) //=> []
  
  // Problem 3
  // Write a function sumArray(array) that takes in an array of numbers that returns the
  // total sum of them.
  //
  //
  function sumArray(array) {
    let sum = 0
    for (i=0; i<array.length; i++) {
      sum += array[i]
    } return sum
  }
  // Examples:
  //
  //console.log(sumArray([5, 6, 4])); // => 15
  //console.log(sumArray([7, 3, 9, 11])); // => 30
  
  // Problem 4
  // Write a function `capWords(words)` that takes in an array of words and
  // returns a new array where every word is capitalized.
  //
  function capWords(words) {
    let caps = []
    for (i=0;i<words.length;i++) {
        let letters = words[i]
        let capletters = letters.toUpperCase()
        caps.push(capletters)
    }
    return caps;
  }
  // Example:
  //
  //console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']

  // Problem 5
  // Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
function wordPeriods(sentence) {
    let words = sentence.split(" ")
    let periods = words.join(".") + "."
    return periods
}
// Examples:
//
//console.log(wordPeriods('hello world')); // => 'hello. world.'
//console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'

//Problem 6
// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
function maxValue(array) {
    if (array.length === 0) {
        return null
    } else {
    let bigNum = 0
    for (i=0; i<array.length; i++) {
        if (array[i] > bigNum) {
            bigNum = array[i]
            }
        } 
    return bigNum
    }
}
// Examples:
//
//console.log(maxValue([12, 6, 43, 2])); // => 43
//console.log(maxValue([])); // => null
//console.log(maxValue([-4, -10, 0.43])); // => 0.43

//Problem 7
// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
function myIndexOf(array, target) {
    for (i=0; i<array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}
// Examples:
//
//console.log(myIndexOf([1,2,3,4],4)) //=> 3
//console.log(myIndexOf([5,6,7,8],2)) //=> -1

// Problem 8
// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
function factorArray(array, number) {
    let factor =[]
    for (i=0; i<array.length; i++) {
        if (number % array[i] === 0) {
            factor.push(array[i])
        }
    }
    return factor
}
// Examples:
//
//console.log(factorArray([2,3,4,5,6],20)) //=> [2,4,5]
//console.log(factorArray([2,3,4,5,6],35)) //=> [5]
//console.log(factorArray([10,15,20,25],5)) //=> []
