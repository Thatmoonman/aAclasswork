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
// console.log(anagram("anagram","nagaram")) //Output: true
// Example 2:
// console.log(anagram("rat","car")) //Output: false

//Problem 3
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoNumbers(nums,target) {

    for (i=0;i<nums.length;i++) {
        if (nums[i] + nums[i+1] === target) {
            return [i,i+1]
        } else if (nums[i] + nums[i+2] === target) {
            return [i,i+2]
        }
    }
}

// Example 1:
// console.log(twoNumbers([2,7,11,15], 9)) //Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//Example 2:
// console.log(twoNumbers([3,2,4], 6)) //Output: [1,2]
// Example 3:
// console.log(twoNumbers([3,3], 6)) //Output: [0,1]

//Problem 4
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
//typically using all the original letters exactly once.

//***Need to learn to make an object KEY***

function anagram(stringS,stringT) {
    let substringS = stringS.split("")
    let substringT = stringT.split("")

    for (i=0; i<substringS.length; i++) {
        return (substringS.includes(substringT[i]))
    }
}

function groupAnagrams(str) {
    let groups = []
    
    for (q=0;q<str.length;q++) {
        let word = str[q]
        let smallGroup = []
        
        for (n=0;n<str.length;n++) {
            let otherWord = str[n]

            if (smallGroup.includes(otherWord) === false && anagram(word,otherWord) === true) {
                smallGroup.push(otherWord)                
            }
        }
        groups.push(smallGroup)
    }
    return groups
}

// Example 1:
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
console.log(groupAnagrams([""])) //Output: [[""]]
// Example 3:
console.log(groupAnagrams(["a"])) //Output: [["a"]]