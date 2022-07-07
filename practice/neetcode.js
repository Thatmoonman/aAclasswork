// Problem 1 - E
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

// Problem 2 - E
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

//Problem 3 - E
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

//Problem 4 - M
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
//typically using all the original letters exactly once.

//***Need to learn to make an object KEY***

// function anagram(stringS,stringT) {
//     let substringS = stringS.split("")
//     let substringT = stringT.split("")

//     for (i=0; i<substringS.length; i++) {
//         return (substringS.includes(substringT[i]))
//     }
// }
function alphabet(word) {
    return word.split("").sort().join("")    
}

function groupAnagrams(words) {
    
    let letters = words.map(word => alphabet(word))
    let keys = []
    
    for (i=0;i<letters.length;i++) {
        if (keys.includes(letters[i]) === false) {
            keys.push(letters[i])
        }
    }
    let anagrams = []

    for (n=0;n<keys.length;n++) {
        let key = keys[n]
        let groups = []

        for (p=0;p<words.length;p++) {
            let test = words[p]
            if (key === alphabet(test)) {
                groups.push(test)
            }
        }
        anagrams.push(groups)
    }
    return anagrams
}

// Example 1:
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// console.log(groupAnagrams([""])) //Output: [[""]]
// Example 3:
// console.log(groupAnagrams(["a"])) //Output: [["a"]]

//Problem 5 - E
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
//and removing all non-alphanumeric characters, it reads the same forward and backward.
//Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
function noChars(array) {
    let chars = ",.;:?! "
    let noChar = []

    for (i=0;i<array.length;i++) {
        let letter = array[i].toLowerCase()
         
        if (chars.includes(letter) !== true) {
            noChar.push(letter)
        }
    }
    return noChar
}

function palindrome(str) {
    let string = str.split("")
  
    if (string.length <= 1) {
        return true

    } else {
        let pal = noChars(string)

        for (i=0;i<pal.length;i++) {
            if (pal[i].includes(pal[pal.length-(1+i)]) !== true) {
                return false
            }
        }
    }
    return true
}
 

// Example 1:
// console.log(palindrome("A man, a plan, a canal: Panama")) //Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// console.log(palindrome("race a car")) //Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// console.log(palindrome(" ")) //Output: true
//Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome

// Problem 6 
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock 
//and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function prices(day) {
    let sales = {}
    let difference = 0

    for  (i=0;i<day.length-1;i++) {
        buyDay = day[i]

        for (n=i+1;n<day.length;n++) {
            let sellDay = day[n]

            if (sellDay - buyDay > 0 && sellDay - buyDay > difference) {
            difference = (sellDay - buyDay)
            sales['difference'] = difference
            }
        }
    }
    if (sales.difference === undefined) {
        return 0
    } else {
    return sales.difference

    }
}
 

// Example 1:
// console.log(prices([7,1,5,3,6,4])) //Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// console.log(prices([7,6,4,3,1])) //Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Problem 7
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
function validString(string) {
    let str = string.split("")
    let open = '([{'
    let close = ')]}'
    

    for (i=0;i<str.length; i++) {
        let open = str[i]
        for (j=i+1;j<str.length;j++) {
            let close = str[j]
            
            if (open === '(' && close !== ')') {
                return false
            } else if (open === '[' && close !== ']') {
                return false
            } else if (open === '{') {
                return false
            } else {
                return true
            }
        }
    }
}

// Example 1:
// s = "()"
// console.log(validString(s))
// Output: true
// Example 2:
// s = "()[]{}"
// console.log(validString(s))
// Output: true
// Example 3:
// s = "(]"
// console.log(validString(s))
// Output: false

// Problem 8
// Given an array of integers nums which is sorted in ascending order, and an integer target, 
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

function targetNum(nums,target) {
    if (nums.includes(target) === true) {
        return nums.indexOf(target)
    } else {
        return -1
    }
}
 

// Example 1:
// nums = [-1,0,3,5,9,12], target = 9
// console.log(targetNum(nums,target))
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// nums = [-1,0,3,5,9,12], target = 2
// console.log(targetNum(nums,target))
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Problem 9 ***linked lists?*****
// Given the head of a singly linked list, reverse the list, and return the reversed list.
function reverse(array) {
    let newAray = []

    for (i=array.length-1;i>=0;i--) {
        newAray.push(array[i])
    }
    return newAray
}
 

// Example 1:
// head = [1,2,3,4,5]
// console.log(reverse(head));
// Output: [5,4,3,2,1]
// Example 2:
// head = [1,2]
// console.log(reverse(head));
// Output: [2,1]
// Example 3:
// head = []
// console.log(reverse(head));
// Output: []

// Problem 10 ***linked lists?*****
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. 
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

function mergeList(list1,list2) {
    let newList = []

    for (i=0;i<list1.length;i++) {
        newList.push(list1[i],list2[i])
        newList.push(list2[i])
    }
    return newList
} 

// Example 1:
// list1 = [1,2,4]
// list2 = [1,3,4]
// console.log(mergeList(list1,list2));
// Output: [1,1,2,3,4,4]
// Example 2:
// list1 = []
// list2 = []
// console.log(mergeList(list1,list2));
// Output: []
// Example 3:
// list1 = []
// list2 = [0]
// console.log(mergeList(list1,list2));
// Output: [0]

// Problem 11 - M
// Given an integer array nums and an integer k, 
// return the k most frequent elements. You may return the answer in any order.

function frequent(nums,k) {
    let array = []
    let obj = {}

    for (i=0; i<nums.length; i++) {
        let ele = nums[i]
        if (obj[ele] === undefined) {
            obj[ele] = 1
        } else {
            obj[ele] += 1
        }
    }
    
    for (j=1; j<=k;j++){
        let int = 0

        for (let ele in obj) {
            if (obj[ele] > int === true && array.includes(parseInt(ele)) === false) {
                int = obj[ele]
                num = parseInt(ele)
            }
        }
        array.push(num)
    }
    return array
}
 

// Example 1:
nums = [1,1,1,2,2,3], k = 2
console.log(frequent(nums,k));
// Output: [1,2]
// Example 2:
Input: nums = [1], k = 1
console.log(frequent(nums,k));
// Output: [1]
nums = [-1,0,-1,4,5,5,5,5,9,10,-1,10], k = 3
console.log(frequent(nums,k));