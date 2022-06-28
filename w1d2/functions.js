let average = (num1, num2) => {
  return (num1 + num2) / 2
}
//console.log(average(1,2))
//
// isPrime!
//

// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

// Condtionals
// function isOdd(num) {
//   if (num % 2 === 0) {
//     console.log(false)
//   } else console.log(true)
// }
// isOdd(5)
// isOdd(6)

//not conditionals
// function isOdd(num) {
//   return num % 2 !== 0 
// }
// console.log(isOdd(5))
// console.log(isOdd(6))

// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    let sum = num + 5
  console.log(sum)
}
plusFive(5)
plusFive(0)
plusFive(-5)
