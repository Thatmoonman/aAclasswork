/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

function alternateCase(str) {
    let newStr = ''
    let letter = 'up'
    
    for(let i = 0; i <str.length; i++) {
        if (letter === 'up') {
            newStr += str[i].toUpperCase()
            letter = 'down'
        } else {
            newStr += str[i].toLowerCase()
            letter = 'up'
        }
    }
    return newStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alternateCase;
