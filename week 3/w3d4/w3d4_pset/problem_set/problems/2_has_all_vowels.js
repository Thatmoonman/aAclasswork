/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

function hasAllVowels(str) {
    let vowels = 'aeiou'.split("")

    for (let i = 0; i < vowels.length; i++) {
        if (str.includes(vowels[i]) === false) {
            return false;

        }
    }
    return true;
}
// O(n)
    // let check = ''
    // let sentence = str.split(" ")

    // for (let i = 0; i < sentence.length; i++) {
    //     let word = sentence[i].split("")

    //     for (let j = 0; j < word.length; j++) {
    //         let letters = word[j]

    //         for (let k = 0; k < vowels.length; k++) {
    //             if (vowels[k] === letters && check.includes(vowels[k]) === false) {
    //                 check += vowels[k]
    //             }
    //         }
    //     }
    // }
    // if (check.length === vowels.length) {
    //     return true;
    // } else {
    //     return false;
    // }
// }
//
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasAllVowels;
