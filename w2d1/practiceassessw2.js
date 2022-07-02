//Problem 1
/***********************************************************************
Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.

Examples:

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true
***********************************************************************/

function diffArrayLen(arr1, arr2) {
    return !(arr1.length === arr2.length)
}

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

//console.log(diffArrayLen(a1, a2)); // => false
//console.log(diffArrayLen(a1, a3)); // => true

//Problem 2
/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {
    let mirror = array
    for (i=array.length-1; i>=0; i--) {
        mirror.push(array[i])
    }
    return mirror
}

//console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
//console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

// Problem 3
/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue(array) {
    let sum = 0
    for (i=0;i<array.length;i++) {
    sum += array[i]
    }
    return sum/array.length
}

// console.log(avgValue([10, 20])); // => 15
// console.log(avgValue([2, 3, 7])); // => 4
// console.log(avgValue([100, 60, 64])); // => 74.66666666666667

// Problem 4
/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

function abbreviate(sentence) {
    let words = sentence.split(" ")
    let noVows = []

    for (i=0; i<words.length; i++) {
        let letters = words[i].split("")
        if (letters.length >= 4) {
            
        }
    }

}

console.log(abbreviate('bootcamp prep is fun')); // => 'btcmp prep is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'