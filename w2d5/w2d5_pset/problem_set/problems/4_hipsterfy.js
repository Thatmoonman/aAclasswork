/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/
function hipster(word) {
    let vowels = 'aeiou'
    let letters = word.split("")

    for (let i = letters.length-1; i >= 0; i--) {
        if (vowels.includes(letters[i])) {
            let newWord = word.slice(0,i) + word.slice(i+1,)
            return newWord
        }
    }
}

function hipsterfy(sentence) {
    let words = sentence.split(" ")
    let newSentence = []

    for (let i = 0; i < words.length; i++) {
        newSentence.push(hipster(words[i]))
    }
    return newSentence.join(" ")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
