/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array) {
    let largest = array[0]
    let smallest = array[0]

    for (let i = 0; i < array.length; i++) {
        let num = array[i]

        if (num > largest) {
            largest = num
        } else if (num < smallest) {
            smallest = num
        }
    }
    return largest - smallest
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
