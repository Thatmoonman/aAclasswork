/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

let vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

function vowelShift(sentence) {
    let newSentence = ''
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < sentence.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (sentence[i] === vowels[j]) {
                newSentence += vowels[(j + 1) % vowels.length]
                break;
            } else if (!vowels.includes(sentence[i])) {
                newSentence += sentence[i]
                break;
            }
        }
    }
    return newSentence;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
