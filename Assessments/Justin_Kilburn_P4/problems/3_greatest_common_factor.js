/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
  let largest = 0

  for (let i = 0; i < num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      largest = i
    }
  }
  return largest
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
