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
function abbreviate(word) {
    let vowels = 'aeiou'
    let letters = word.split("")
    let newWord = []
    
    for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i].toLowerCase()) === false) {
            newWord.push(letters[i])
        }
    }
    return newWord.join("")
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
///////////////////////////////////////////////////////
function uncompress(str) {
    let string = str.split("")
    let newString = []
    
    for (let i = 0; i < string.length; i += 2) {
        for (let j = 1; j <= string[i+1]; j++) {
            newString.push(string[i])
        }
    }
    return newString.join("")
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
///////////////////////////////////////////////////////
function tripletTrue(string) {
    
    for (let i = 0; i < string.length; i++) {
        let tester = string[i]
        let counter = 1
        
        for (let j = i+1; string[j] === tester; j++) {
            counter += 1
            
            if (counter === 3) {
                return true
            }
        }
    }
    return false
    
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
///////////////////////////////////////////////////////
function sillyString(word) {
    let vowels = 'aeiou'
    let newWord = ''
    
    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        
        if (vowels.includes(letter) === true) {
            newWord = newWord.concat(letter + "b")
            
        }
        newWord = newWord.concat(letter)
    }
    return newWord
}


console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
///////////////////////////////////////////////////////
function moreDotLessDash(string) {
    let dots = '.'
    let dotCount = 0
    let dashes = '-'
    let dashCount = 0
    
    for (let i = 0; i < string.length; i++) {
        let test = string[i]
        
        if (test === dots) {
            dotCount += 1
        } else if (test === dashes) {
            dashCount += 1
        }
    }
    return dotCount > dashCount
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
///////////////////////////////////////////////////////
function hasThreeVowels(str) {
    let vowels = 'aeiou'
    let count = 0
    
    for (let i = 0; i < vowels.length; i++) {
        let vow = vowels[i]
        
        if (str.includes(vow) === true) {
            count++
        }
    }
    return count >= 3
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
///////////////////////////////////////////////////////
function lastIndex(str, char) {
    
    for (let i = str.length-1; i >= 0; i--) {
        if (char === str[i]) {
            return i
        }
    }
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
///////////////////////////////////////////////////////
function doubleLetterCount(string) {
    let count = 0
    
    for (let i = 0; i < string.length; i++) {
        let test = string[i]
        let check = string[i+1]
        
        if (test === check) {
            count++
        }
    }
    return count
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
///////////////////////////////////////////////////////
// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let newStr = ''
    
    for (let i = 0; i < string.length; i++){
        let oldLet = string[i]
        let newLet = alphabet.indexOf(oldLet)
        
        if (alphabet[newLet + num] !== undefined) {
        newStr = newStr.concat(alphabet[newLet + num])
        } else {
            let index = num - (alphabet.length - newLet)
            newStr = newStr.concat(alphabet[index])
        }
    }
    return newStr

}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
///////////////////////////////////////////////////////
function vowelCipher(string) {
    let vowels = 'aeiou'
    let newStr = ''
    
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        
        if (vowels.includes(letter) === true) {
        let oldVow = vowels.indexOf(letter)
        let index = oldVow + 1
        let newVow = vowels[index % vowels.length]
        
        newStr += newVow
        } else {
        newStr += letter
        }
    }
    return newStr
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
///////////////////////////////////////////////////////