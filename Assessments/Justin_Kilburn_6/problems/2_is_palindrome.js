/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  let noSpace = sentence.split(" ").join("")
  let j = noSpace.length - 1

  for (let i = 0; i < noSpace.length; i++) {
    if (noSpace[i] !== noSpace[j]) {
      return false;

    } else {
      j--
    }
  }
  return true;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
