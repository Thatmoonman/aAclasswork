/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/

function oddOnesOut(array) {
    let count = {}
    let evens = []

    for (let i = 0; i < array.length; i++) {
        if (count[array[i]] === undefined) {
            count[array[i]] = 1
        } else {
            count[array[i]] += 1
        }
    }

    for (let key in count) {
        if (count[key] % 2 === 0) {
            evens.push(key)
        }
    }
    return evens;
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddOnesOut;
