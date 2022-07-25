function isFive(num) {
    return num === 5
}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false

//////////////////////////////////////////////////
function isOdd(num) {
    return num % 2 !== 0
  // your code here!
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
//////////////////////////////////////////////////
function isSubstring(searchString, subString) {
    // your code here...
    return searchString.toLowerCase().includes(subString)
  }
  
  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false
//////////////////////////////////////////////////
function threeOrSeven(num) {
    // your code here...
      // if (num % 3 === 0 || num % 7 === 0) {
      //     return true
      // }
      // return false
      
      return num % 3 === 0 || num % 5 === 0
  }
  
  console.log(threeOrSeven(3));   // => true
  console.log(threeOrSeven(42));  // => true
  console.log(threeOrSeven(8));   // => false
//////////////////////////////////////////////////
function eitherStringIncluded(sentence, word1, word2) {
    // your code here...
    return sentence.includes(word1) || sentence.includes(word2)
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
//////////////////////////////////////////////////

