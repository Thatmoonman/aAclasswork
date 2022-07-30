/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed. 

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/
const arrowReverseString = (str) => {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr 
}
// your code here!

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

let result1 = arrowReverseString("hello"); // returns "olleh"
console.log(result1)
let result2 = arrowReverseString("garden"); // returns "nedrag"
console.log(result2)
let result3 = arrowReverseString("potato"); // returns "otatop"
console.log(result3)
