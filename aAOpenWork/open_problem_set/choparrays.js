///////////////////////////////////////////////////
function removeFromArray(location, arr) {
    if (location === "FRONT") {
        arr.shift(arr[0])
    } else if (location === "BACK") {
        arr.pop(arr[arr.length-1])
    } else {
        console.log("ERROR")
    }
    return arr

}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]

///////////////////////////////////////////////////
let popper = function(array,num) {
    let newArray = []
    
    for (let i = 1; i <= num; i++) {
        let ele = array.length
        newArray.push(array[ele-1])
        array.pop(array[ele-1])
        
    }
    return newArray
    
}

let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
///////////////////////////////////////////////////
function rotateRight(array,num) {
    let newArray = []
    
    for (let i = 0; i < array.length; i++) {
        let shift = array.length - num
        let index = i + shift
        let newIndex = index % array.length
        
        newArray.push(array[newIndex])
    }
    return newArray
}



let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
///////////////////////////////////////////////////
let rotate = function(array,num) {
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            let ele = array.pop()
            array.unshift(ele)
        }
    } else {
        for (let i = 0; i < -(num); i++) {
            let ele = array.shift()
            array.push(ele)
        }
    }
    return array
    
}

// let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
///////////////////////////////////////////////////
function initials(name) {
    let parts = name.split(" ")
    let intls = parts.map(names => names[0])
    
    return intls.join("").toUpperCase()
}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
///////////////////////////////////////////////////
function longestWord(sentence) {
    let words = sentence.split(" ")
    let longest = words[0]
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }
    return longest
    
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
///////////////////////////////////////////////////
function shortestWord(sentence) {
    let words = sentence.split(" ")
    let shortest = words[0]
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= shortest.length)
        shortest = words[i]
    }
    return shortest;
    
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
///////////////////////////////////////////////////
function reverseSentence(sentence) {
    let words = sentence.split(" ")
    let newSentence = []
    
    for (let i = words.length - 1; i >= 0; i--) {
        newSentence.push(words[i])        
    }
    return newSentence.join(" ");
    
}

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
///////////////////////////////////////////////////
function containsWord(sentence, targetWord) {
    let testWords = sentence.toLowerCase().split(" ")
    
    for (let i = 0; i < testWords.length; i++) {
        if (testWords[i] === targetWord) {
            return true;
        }
    }
    return false;
    
}

console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false
///////////////////////////////////////////////////
function removeVowels(word) {
    let vowels = 'aeiou'
    let letters = word.split("")
    let newWord = ''
    
    for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i]) === false) {
            newWord += letters[i]
        }
    }
    return newWord;
    
}

function abbreviateWords(sentence) {
    let words = sentence.split(" ")
    let newSentence = []
    
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > 4) {
            newSentence.push(removeVowels(words[j]))
        } else {
            newSentence.push(words[j])
        }
    }
    return newSentence.join(" ")
    
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
///////////////////////////////////////////////////
function snakeToCamel(string) {
    let letters = string[0].toUpperCase() + string.slice(1,).toLowerCase()
    let newString = ''
    
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === '_') {
            newString += letters[i+1].toUpperCase()
            i += 1
        } else {
            newString += letters[i]
        }
    }
    return newString;
    
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
///////////////////////////////////////////////////
function hipsterfy(sentence) {
    let words = sentence.split(" ")
    let vowels = 'aeiou'
    let newSentence = []
    
    for (let i = 0; i < words.length; i++) {
        let letters = words[i]
        
        for (let j = letters.length - 1; j >= 0; j--) {
            if (vowels.includes(letters[j]) === true) {
                newSentence.push(letters.slice(0,j) + letters.slice(j + 1,))
                break;
            }
        }
    }
    return newSentence.join(" ");
    
}



console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
///////////////////////////////////////////////////
function repeatingTranslate(sentence) {
    let words = sentence.split(" ")
    let vowels = 'aeiou'
    let newSentence = []
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        
        if (word.length < 3) {
            newSentence.push(word)
        } else {
            for (let j = word.length - 1; j >= 0; j--) {
                
                if (vowels.includes(word[word.length - 1]) === true) {
                    newSentence.push(word + word)
                    break;
                } else if (vowels.includes(word[j]) === true) {
                    newSentence.push(word + word.slice(j,))
                    break;
                }
            }
        }
    }
    return newSentence.join(" ")
}



console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
///////////////////////////////////////////////////
function consonantCancel(sentence) {
    let vowels = 'aeiou'
    let words = sentence.split(" ")
    let newSentence = []
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        
        for (let j = 0; j < word.length; j++) {
            let letters = word[j]
            
            if (vowels.includes(letters) === true) {
                newSentence.push(word.slice(j,))
                break;
            }
        }
    }
    return newSentence.join(" ");
    
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
///////////////////////////////////////////////////
function sameCharCollapse(str) {
    
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            str = str.slice(0,i) + str.slice(i+2,)
            i = 0
        }
    }
    return str;
    
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv