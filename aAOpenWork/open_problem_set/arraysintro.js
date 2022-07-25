
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
function threeIncreasing(array) {
    for (let i = 0; i < array.length-2; i++) {
        let num1 = array[i]
        let num2 = array[i + 1]
        let num3 = array[i + 2]
        
        if (num1 + 1 === num2 && num1 + 2 === num3) {
            return true
        }
    }
    return false
    
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
////////////////////////////////////////////////////////////////////
function myIncludes(arr,target) {
    // return arr.indexOf(target) !== -1
    return arr.includes(target)
}

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
////////////////////////////////////////////////////////////////////
function myIndexOf(arr, target) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}



console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
////////////////////////////////////////////////////////////////////
function sumArray(array) {
    let sum = 0
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
    
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
////////////////////////////////////////////////////////////////////
unction productWithReduce(nums) {
    let product = 1
    
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i]
    }
    return product
    
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
////////////////////////////////////////////////////////////////////

function doubler(numbers) {
    let newArray = numbers.map(array => array*2)
    
    return newArray
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]