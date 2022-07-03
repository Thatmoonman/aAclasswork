// Problem 1
// Given an integer array nums, return true if any value appears at least twice in the array
// and return false if every element is distinct.

function duplicates(arrayNums) {
    let newArray = []

    for (i=0;i<arrayNums.length;i++) {
        if (newArray.indexOf(arrayNums[i]) > -1) {
            return true
        } else {
            newArray.push(arrayNums[i])
        }
    }
    return false 

}

// Example 1:
//console.log(duplicates([1,2,3,1]))// Output: true
// Example 2:
//console.log(duplicates([1,2,3,4]))// Output: false
// Example 3:
// console.log(duplicates([1,1,1,3,3,4,3,2,4,2])) // Output: true

// Problem 2
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 function anagram(stringS,stringT) {
    let substringS = stringS.split("")
    let substringT = stringT.split("")

    for (i=0; i<substringS.length; i++) {
        return (substringS.includes(substringT[i]))
    }
 }

// Example 1:
console.log(anagram("anagram","nagaram")) //Output: true
// Example 2:
console.log(anagram("rat","car")) //Output: false
