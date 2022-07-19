/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.

Examples:

isUniqueAnagram('iceman', 'cinema'); // => true
isUniqueAnagram('abcd', 'adcb'); // => true
isUniqueAnagram('abcd', 'adxb'); // => false
isUniqueAnagram('abcd', 'abcdx'); // => false
***********************************************************************/

function isUniqueAnagram(word1, word2) {
    let letters = {}
    let count = 0
    
    if (word1.length !== word2.length) return false;

    for (let i = 0 ; i < word1.length; i++) {
        if (letters[word1[i]] === undefined) {
            letters[word1[i]] = 1
            count++
        } else {
            letters[word1[i]] += 1
            count++
        }
    }

    for (let j = 0; j < word2.length; j++) {
        for (let key in letters) {
            if (word2[j] === key && letters[key] <= 0) {
                return false;
            } else if (word2[j] === key && letters[key] > 0) {
                letters[key] -= 1
                count--
            }
        }
    }
    return count === 0;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isUniqueAnagram;
