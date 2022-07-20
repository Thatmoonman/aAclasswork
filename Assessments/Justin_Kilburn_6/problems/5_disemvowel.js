/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  let vowels = 'aeiou'
  let noVows = ''

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) {
      noVows += string[i]
    }
  }
  return noVows;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
