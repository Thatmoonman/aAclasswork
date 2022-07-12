// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/2_scope.js`

var foo = 5;

function bar(foo) {
  return foo + 65;
}

console.log(foo);     // What is foo on this line? 5
console.log(bar(5));  // What is bar() on this line? 70
console.log(foo);     // What is foo on this line? 5
console.log(bar(5));  // What is bar() on this line? 70
