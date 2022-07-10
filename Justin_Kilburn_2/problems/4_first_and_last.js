/******************************************************************************
Write a function firstAndLast(array) that takes in an array of numbers and
returns either:

- the sum of the first and last elements of the array if there is an even
 number of elements

- the difference between the first and last elements of the array if there is an
 odd number of elements.

You can assume the array contains at least one number.

Examples:

firstAndLast([1, 2, 3, 4]); // => 5
firstAndLast([1, 2, 3, 4, 5]); // => -4
firstAndLast([12, 5]); // => 17
firstAndLast([12]); // => 0
firstAndLast([7, 11, 3]); // => 4
*******************************************************************************/
 
function firstAndLast(array) {
  if (array.length % 2 === 0) {
    return array[0] + array[array.length-1]
  } 
  return array[0] - array[array.length-1]
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstAndLast;
