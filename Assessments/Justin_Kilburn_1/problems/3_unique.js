/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  let arr = []
  for (i=0; i<array.length; i++) {
    if (!arr.includes(array[i])) {
      arr.push(array[i])
    }
  }  
  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
