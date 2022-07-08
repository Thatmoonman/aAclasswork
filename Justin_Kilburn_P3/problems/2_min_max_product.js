/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/
function minMaxProduct(array){
  let largest
  let smallest

  for (let i = 0; i < array.length; i++) {
    let num = array[i]

    if (smallest === undefined) {
      smallest = num
      largest = num
    }
    if (num < smallest) {
      smallest = num
    } else if (num > largest)
    largest = num
  }
  return largest*smallest
  
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
