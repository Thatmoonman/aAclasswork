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
// nums = [1,1,1,2,2,3], k = 2
// console.log(frequent(nums,k));
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// console.log(frequent(nums,k));
// Output: [1]
// nums = [-1,0,-1,4,5,5,5,5,9,10,-1,10], k = 3
// console.log(frequent(nums,k));

//Problem 12 - M
// Given an integer array nums, 
// return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
function exceptProduct(array) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        let product = 1

        for (let j = 0; j < array.length; j++) {
            let num = array[j]

            if (i === j) {
                continue;
            } else {
                product *= num
            }
        }
        newArray.push(product)
    }
    return newArray

}
 

// Example 1:


// Input: nums = [1,2,3,4]
// console.log(exceptProduct(nums))
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// console.log(exceptProduct(nums))
// Output: [0,0,9,0,0]

// Problem 13 - M
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function checkRow(array,num,index) {
    for (let d = 0; d < array.length; d++){
        if (array[d] === num && d !== index) {
            return false
        }
    }
    return true
}

function checkColumn(board,num,indexColumn,indexRow){
    for (let e = 0; e < board.length; e++) {
        let array = board[e]

        if (e !== indexColumn) {
            for (let f = 0; f < array.length; f++) {

                if (array[f] === num && array[f] !== indexRow) {
                    return false
                }
            }
        }
    }
    return true

}

function checkBox(board,num,indexColumn,indexRow){
    let a = [1,2,3]
    let b = [4,5,6]
    let c = [7,8,9]

    for (let i = 0; i < board.length; i++) {
        let array = board[i]

        if (a.includes(indexColumn) === true && a.includes(indexRow) === true) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (checkRow(board[0], num, j) === false) {
                        return false
                    }else if (checkRow(board[1], num, j) === false) {
                        return false
                    }else if (checkRow(board[2], num, j) === false) {
                        return false
                    } else if (checkColumn(board, num, i, k) === false) {
                    return false
                    }
                }
            }
        } //else if 
        
    }
    return true

}

function sudokuChecker(board) {
    
    for (let m = 0; m < board.length; m++) {
        let array = board[m]
        let paraRow
        let paraCol
        let paraBox

        for (let l = 0; l < array.length; l++) {
            let num = array[l]

            if (array[l].includes(".") === false) {
                paraRow = checkRow(array, num, l)
                paraCol = checkColumn(board, array, m, l)
                paraBox = checkBox(board, array, m, l)
                if (paraRow === false || paraCol === false || paraBox === false) {
                    return false
                }
            }
        }
    }
    return true

}

// Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
// console.log(sudokuChecker(board))
// Output: true
// Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
// console.log(sudokuChecker(board))
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.

//////////////////////////////////////////////////////////////////////////
// Problem 13 - M

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

function targetPairs(array, target) {
    
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }
}


// Example 1:
// numbers = [2,7,11,15], target = 9
// console.log(targetPairs(numbers,target))
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// numbers = [2,3,4], target = 6
// console.log(targetPairs(numbers,target))
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// numbers = [-1,0], target = -1
// console.log(targetPairs(numbers,target))
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

///////////////////////////////////////////////////////////////
//Problem 14 - M
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
 function triplets(array) {
    let returnArray = []

    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                let num1 = array[i]
                let num2 = array[j]
                let num3 = array[k]
                let subArray = [num1, num2, num3]
                subArray = subArray.sort()

                if (num1 + num2 + num3 === 0) {
                    returnArray.push(subArray)
                }
            }
        }
    }
    return returnArray

 }
 

// Example 1:
nums = [-1,0,1,2,-1,-4]
console.log(triplets(nums))
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:
nums = [0,1,1]
console.log(triplets(nums))
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
nums = [0,0,0]
console.log(triplets(nums))
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.