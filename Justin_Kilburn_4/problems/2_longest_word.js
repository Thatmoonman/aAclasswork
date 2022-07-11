/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  let words = sentence.split(" ")
  let longest = words[0].length
  let index = 0

  for (let i = 1; i < words.length; i++) {
    let word = words[i]

    if (word.length >= longest) {
      longest = word.length
      index = i
    }
  }
  return words[index];

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
