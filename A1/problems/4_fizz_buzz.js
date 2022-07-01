/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

function fizzBuzz(max) {
  let arr = []
  for (i=0; i<max; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    continue
  } else {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i)
     }
   }
  } 
  return arr
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
