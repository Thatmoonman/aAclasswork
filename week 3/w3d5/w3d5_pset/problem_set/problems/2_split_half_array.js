/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

Example:

splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
***********************************************************************/

function splitHalfArray(array) {
    let half = Math.floor(array.length / 2)
    let left = array.slice(0,half)
    let right = array.slice(half,)

    if (left.length !== right.length) {
        right.shift(0)
    }
    return [left,right]
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = splitHalfArray;
