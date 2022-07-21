/***********************************************************************
Write a function `secondLargest(array)` that takes in an array of positive
numbers and returns the seconds largest number in the array. Assume that
there are no duplicate elements in the array. If there is no second
largest number, the function should return -1.

Examples:

secondLargest([3, 1, 5, 4, 7]) => 5;
secondLargest([10, 7]) => 7;
secondLargest([10]) => -1;
secondLargest([]) => -1;
***********************************************************************/

function secondLargest(array) {
    let largest = 0
    let second = -1

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] > second && largest > array[j]) {
            second = array[j]
        }
    }
    return second;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = secondLargest;
