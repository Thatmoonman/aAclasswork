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
// returns true if all letters in ransomNote is found in magazine
// each letter in magazine can only be used once
// order does not matter!

// use an object to create a count of letters in magazine
function eleCount(str) {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] in count) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }

  return count;
}


// solution 1:
function canConstruct(ransomNote, magazine) {     // "aabbc"    mag="aabccd"
  const magCount = eleCount(magazine);            // {a: 2, b: 1, c: 2, d: 1}
  const noteCount = eleCount(ransomNote);         // {a: 2, b: 2, c: 2}

  for (let char in noteCount) {
    const numLetters = noteCount[char];

    if (magCount[char] === undefined || magCount[char] < numLetters) {
      return false;
    }
  }

  return true;
}


// solution 2:
function canConstruct(ransomNote, magazine) { // "aabbc"    "aabcc"
  const count = eleCount(magazine);           // {a:2, b:1, c:2}

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];

    if (char in count) {
      if (count[char] <= 0) return false;     // if char exist in note but ran out of 
      count[char]--;                          // characters in magazine, return false
    } else {
      return false;
    }
  }

  return true;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
