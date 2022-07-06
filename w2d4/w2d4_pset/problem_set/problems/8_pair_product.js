/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

function pairProduct(arr, num) {
    let i = 0
    let pairs = []

    while (i<arr.length) {
        let num1 = arr[i]
        i++
        let j = i+1

        while (j<arr.length) {
            let num2 = arr[j]
            j++

            if (num1 * num2 === num) {
                pairs.push([arr.indexOf(num1), arr.indexOf(num2)])
            }
        }
    }
    return pairs

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairProduct;
