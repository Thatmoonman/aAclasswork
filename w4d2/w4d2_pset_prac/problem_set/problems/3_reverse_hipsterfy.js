/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/

function reverseHipsterfy(sentence) {
    let vowels = 'aeiou'
    let words = sentence.split(" ")
    let newSentence = []

    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("")
        let newWord = []
        let first = 0

        for (let j = letters.length - 1; j >= 0; j--) {

            if (vowels.includes(letters[j].toLowerCase()) && first === 0) {
                newWord.unshift(letters[j])
                first = 1
            } else if (vowels.includes(letters[j].toLowerCase()) && first === 1) {
                continue;
            } else {
                newWord.unshift(letters[j])
            }
        }
        newSentence.push(newWord.join(""))
    }
    return newSentence.join(" ");

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
