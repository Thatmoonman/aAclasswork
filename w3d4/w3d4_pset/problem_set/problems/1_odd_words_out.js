/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/
function oddWordsOut(sentence) {
    let words = sentence.split(" ")

    let newSent = words.filter((word) => {
        if (word.length % 2 === 0 ) {
            return true
        }
        return false
    })

    return newSent.join(" ")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
