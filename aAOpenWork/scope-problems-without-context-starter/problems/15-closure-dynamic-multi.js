/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.


Look below to see how this function is invoked:

const doubler = dynamicMultiply(2); // returns a functions
doubler(5); // returns 10

const tripler = dynamicMultiply(3);
tripler(5); // returns 15

const multiplyByFive = dynamicMultiply(5);
multiplyByFive(5); // returns 25


***********************************************************************/
function dynamicMultiply(num) {
  return function (multiplier) {
    return num * multiplier
  }
}
// your code here!

const doubler = dynamicMultiply(2); // returns a functions
console.log(doubler(5)); // returns 10

const tripler = dynamicMultiply(3);
console.log(tripler(5)); // returns 15

const multiplyByFive = dynamicMultiply(5);
console.log(multiplyByFive(5)); // returns 25