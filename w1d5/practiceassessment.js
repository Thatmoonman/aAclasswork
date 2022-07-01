//Problem 1
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
function isInside(array, ele) {
    return array.indexOf(ele) !== -1
}
//console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
//console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false

//Problem 2
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
function reverseStr(str) {
    let reverse = str.split("")
    let reverseWord = []
    for (i=reverse.length; i>=0; i--) {
        reverseWord.push(reverse[i])
    }
    return reverseWord.join("")
}
//console.log(reverseStr('bootcamp')); //=> 'pmactoob'
//console.log(reverseStr('App Academy')); //=> 'ymedacA ppA'

//Problem 3
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
function luckySevens(max) {
    let sevens = []
    for (i=1; i<=max; i++) {
        if (i % 7 === 0) {
            sevens.push(i)
        }
    }
    return sevens
}
//console.log(luckySevens(25)); // => [ 7, 14, 21 ]
//console.log(luckySevens(42)); // => [ 7, 14, 21, 28, 35, 42 ]

//Problem 4
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
function copyMachine(element, num) {
    let copy = []
    for (i=0; i<num; i++) {
    copy.push(element)
    }
    return copy
}
//console.log(copyMachine('candy', 0)); // => []
//console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
//console.log(copyMachine('bread', 4)); // => [ 'bread', 'bread', 'bread', 'bread' ]
//console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]

//Problem 5
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
function everyOtherWord(sentence) {
    let everyOther = []
    let words = sentence.split(" ")
    for (i=0; i<words.length; i+=2 ) {
        everyOther.push(words[i])
    }
    return everyOther
}
//console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
//console.log(everyOtherWord('the weather is wonderful')); // => [ 'the', 'is' ]

//Problem 6
// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
function wordYeller(sent) {
    let words = sent.split("")
    let marks = [",",".","!","?",";",":"]
    let yell = []
    for (i=0; i<words.length; i++) {
        if (marks.indexOf(words[i]) !== -1) {
        yell.push(words[i] + " ")
        i++
        } else {
            if (words[i].indexOf(" ") !== -1) {
                yell.push("!" + words[i])
            }
        }
        yell.push(words[i])
    }
    if (marks.indexOf(yell[yell.length-1]) !== -1) {
        yell.push("!")
    }
    return yell.join("")
}

//console.log(wordYeller("Stop it now! Please, wont you stop?"));
//console.log(wordYeller("Go to the store and grab the following: milk, bread, run, and cake"));

// Problem 7
// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
function arraySubstring(words,str) {
    
}
console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"))
// => [true, false, true, true]
console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"))
// => [true, false, false, true]