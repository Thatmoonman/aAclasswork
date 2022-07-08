/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  let words = sentence.split(" ")
  let length = 100
  let short

  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    if (word.length < length) {
      length = word.length
      short = word
    }
  }
  return short
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
