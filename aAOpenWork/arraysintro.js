
function wordWithinArray(array, word) {
    if (array.indexOf(word) === -1) {
        return false
    }
    return true
    
};

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false

////////////////////////////////////////////////////////////////////
function firstAndLast(array) {
    
    if (array.length % 2 === 0) {
        return array[0] + array[array.length-1]
    } else {
        return array[0] - array[array.length-1]
    }
}



console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
////////////////////////////////////////////////////////////////////
function combineArray(array1, array2) {
    let newArray = array1.concat(array2)
    
    return newArray
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////