/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function countRepeats(string) {
    let repeats = ''

    for (let i = 0; i < string.length - 1; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j] && !repeats.includes(string[i])) {
                repeats += string[i]
            }
        }
    }
    return repeats.length;
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
