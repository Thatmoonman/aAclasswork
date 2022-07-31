/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
function flatten(array) {
  let newArray = []
  if (array.length === 0) return [];

  array.forEach(ele => {
    if (Array.isArray(ele)) {
      newArray.push(...flatten(ele))
    } else {
      newArray.push(ele)
    }
  })
  return newArray;
}
// your code here
  
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]