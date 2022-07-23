/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'

Difficulty: Easy
*************************************************************************************/

function reverseString(str) {
    if (str.length === 1) return str;

    return reverseString(str.slice(1,)) + str[0]
    // let newStr = ''

    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i]
    // }
    // return newStr;

}
//O(n)
/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = reverseString;
