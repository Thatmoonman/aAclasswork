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

function noVowels(letterArray) {
    let vowels = "aeiou"
    let newWord = []

    for (q=0; q<letterArray.length; q++) {
        if (vowels.includes(letterArray[q])) {
            continue
        } else {
            newWord.push(letterArray[q])
        }
    }
    return newWord.join("")

}

function abbreviate(sentence) {
    let words = sentence.split(" ")
    let abbrLetters = []
    let abbrWords = []


    for(i=0; i<words.length; i++) {
        let letters = words[i].split("")

        if (letters.length > 4) {
            abbr = noVowels(letters)
            abbrLetters.push(abbr)
        } else {
            abbr = letters.join("")
            abbrLetters.push(abbr)
        }

    }
    return abbrWords = abbrLetters.join(" ")

}

// console.log(abbreviate('bootcamp prep is fun')); // => 'btcmp prep is fun'
// console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
// console.log(abbreviate('hello world')); // => 'hll wrld'
// console.log(abbreviate('how are you')); // => 'how are you'

//Problem 5
/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/
function firstLastCap(sentence) {
    let words = sentence.split(" ")
    let newSentence = []

    for (i=0; i<words.length; i++) {
        let letters = words[i]
        let firstLetter = letters[0].toUpperCase()
        let middleLetter = letters.slice(1,-1).toLowerCase()
        let lastLetter = letters[letters.length-1].toUpperCase()
        newSentence.push(firstLetter+middleLetter+lastLetter)
    }
    
    return newSentence.join(" ")
}


console.log(firstLastCap('hello BOOTCAMP PrEp')); // =>'HellO BootcamP PreP'
console.log(firstLastCap('what is on the radio')); // =>'WhaT IS ON ThE RadiO'