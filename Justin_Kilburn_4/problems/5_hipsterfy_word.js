/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
  let vowels = 'aeiou'
  let newWord = word.toLowerCase()

  for (let i = newWord.length; i >= 0; i--) {
    let letter = newWord[i]

    if(vowels.includes(letter)) {
      return word.slice(0,i) + word.slice(i+1,)
    }
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
