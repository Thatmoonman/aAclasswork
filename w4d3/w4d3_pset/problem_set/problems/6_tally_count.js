/***********************************************************************
Write a function tallyCount(array) that takes in an array of strings.
The function should return an object containing a tally count of the
strings in the array.

Examples:

var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }

var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }
***********************************************************************/

function tallyCount(arr) {
    let tallyCount = {}

    for (let i = 0; i < arr.length; i++) {
        if (tallyCount[arr[i]] === undefined) {
            tallyCount[arr[i]] = 'I'
        } else {
            tallyCount[arr[i]] += 'I'
        }
    }
    return tallyCount;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = tallyCount;
