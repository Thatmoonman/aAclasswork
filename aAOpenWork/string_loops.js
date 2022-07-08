// your code here
function hasVowel(str) {
    let vowels = 'aeiou'
    
    for (let i = 0; i<str.length; i++) {
        let letter = str[i]
        
        if (vowels.includes(letter)) {
            return true
        }
    }
    return false
    
}





console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
///////////////////////////////////////////////////////
function countVowels(word) {
    // your code here...
    let vowels = 'aeiou'
    let count = 0
    
    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        
        if (vowels.includes(letter)) {
            count += 1
        }
    }
    return count
    
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2
///////////////////////////////////////////////////////
// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    let vowels = 'aeioi'
    
    if (vowels.includes(word[0])) {
        return word + "yay"
    }
    for (let i = 1; i < word.length; i++) {
        let letter = word[i]
        
        if (vowels.includes(letter)) {
            return word.slice(i,word.length) + word.slice(0,i) + "ay"
        }
    }
  };
  
  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////