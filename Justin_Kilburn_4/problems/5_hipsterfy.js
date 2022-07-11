/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/
function lessVowels(word) {
  let vowels = 'aeiou'

  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i]) === true) {
      return word.slice(0,i) + word.slice(i + 1,);
    }
  }
  return word;
  
}

function hipsterfy(sentence) {
  let words = sentence.split(" ")
  let newSentence = []

  for (let j = 0; j < words.length; j++) {
    newSentence.push(lessVowels(words[j]))
  }
  return newSentence.join(" ")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
