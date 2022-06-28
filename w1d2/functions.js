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

// function plusFive(num) {
//     let sum = num + 5
//   console.log(sum)
// }
// plusFive(5)
// plusFive(0)
// plusFive(-5)

// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
// function threeOrSeven(num) {
//   if (num % 3 === 0) {
//     console.log("true")
//   } else if (num % 7 === 0) {
//     console.log("true")
//   } else {
//     console.log("false")
//   }
// }
// threeOrSeven(21)
// threeOrSeven(14)
// threeOrSeven(5)

// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
function hello(str) {
  console.log("hello, " + str)
}
hello("JUSTIN")
// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
  console.log(string.toUpperCase())
}
yell("i'm late")
// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(string) {
console.log(string.toLowerCase())
}
whisper("THIS IS A LIBRARY!")