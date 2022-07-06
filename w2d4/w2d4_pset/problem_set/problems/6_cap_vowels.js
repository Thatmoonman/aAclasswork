/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
    let vowels = "aeiou"
    let word = string.toLowerCase().split("")
    let newString = []

    for (let i=0;i<word.length;i++) {
        let letters = word[i]

        if (vowels.includes(letters)){
            newString.push(letters.toUpperCase())
        } else {
        newString.push(letters)
        }
    }
    return newString.join("")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
