/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false
***********************************************************************/

function canConstruct(ransomNote, magazine) {
    let obj = {}
    let check = 0

    for (let i  = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i]

        if (obj[letter] === undefined) {
            obj[letter] = 1
            check++
        } else {
            obj[letter] += 1
            check++
        }
    }

    for (let j = 0; j < magazine.length; j++) {
        let letterCheck = magazine[j]

        for (let key in obj) {
            if (letterCheck === key && obj[key] > 0) {
                obj[key] -= 1
                check--
            }
        }
    }
    return check === 0;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
