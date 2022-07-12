/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop
***********************************************************************/

function peakFinder(array) {
    let peak = []

    for (i=0;i<array.length;i++) {
        let high = array[i]
        let lowOne = array[i-1]
        let lowTwo = array[i+1]
        
        if (lowOne === undefined && high>lowTwo){
            peak.push(i)
        } else if (lowTwo === undefined && high>lowOne) {
            peak.push(i)
        } else if (high > lowOne && high > lowTwo) {
            peak.push(i)
        }
    }
    return peak
}

// console.log(peakFinder([1, 2, 3, 2, 1])); //=> [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); //=> [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); //=> [2, 6, 8]

/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

***********************************************************************/

function divisibleByThreePairSum(array) {
    let threes = []

    for (i=0;i<array.length;i++) {
        let firstPair = array[i]

        for (j=i+1;j<array.length;j++) {
            let secondPair = array[j]

            if ((firstPair + secondPair) % 3 === 0) {
                threes.push([i,j])
            }
        }
    }
    return threes

}

// var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1) //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2) //=> [[1, 3]]

/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.

***********************************************************************/

function zipArray(arr1, arr2) {
    let pairs = []

    for (i=0;i<arr1.length;i++) {
        let one = arr1[i]
        let two = arr2[i]
        pairs.push([one,two])
    }
    return pairs
}

// var a1 = ['a', 'b', 'c', 'd'];
// var a2 = [10, 20, 30, 40];

// console.log(zipArray(a1, a2));
// result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

***********************************************************************/

function twoDimensionalTotal(array) {
    let sums = 0

    for(i=0;i<array.length;i++) {
        let set = array[i]

        for (j=0;j<set.length;j++) {
            sums += set[j]
        }
    }
    return sums
}

// var arr1 = [
//     [5, 2, 5, 3],
//     [12, 13],
//   ];
  
//   console.log(twoDimensionalTotal(arr1)); // => 40
  
//   var arr2 = [
//     [2],
//     [1, 9],
//     [1, 1, 1]
//   ]
  
//   console.log(twoDimensionalTotal(arr2)); // => 15

/***********************************************************************
Write a function `countInnerElement(arr)` that takes in a 2-D array of elements.
Each element of 'arr' is a sub array that contains multiple elements. The number
of elements contained in each sub array are not the same. We can assume each sub
array contains at least one element. We should return an object that counts
how many times each element in each sub array repeats.

***********************************************************************/


function countInnerElement(arr) {
    let repeats = {}

    for (i=0;i<arr.length;i++) {
        let sub = arr[i]

        for (j=0;j<sub.length;j++) {
            let num = sub[j]
            let number = repeats[num]

            if (number > 0) {
                repeats[num] += 1
            } else {
                repeats[num] = 1
            }
        }
    }
    return repeats

}

// var arr1 = [
//   [1,2,4,5],
//   [2,7,4],
//   [1,4,5,2,7]
// ]

// console.log(countInnerElement(arr1)) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

// var arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]

// console.log(countInnerElement(arr2)) // => {a: 4, b: 2, c: 2, d: 2}

/***********************************************************************
Write a function `twoDiff(array)`, given an array of numbers, return a 2-D 
array, where each of the sub array are indices of the two numbers such 
that their difference is 2. If there are no such numbers, return an empty
array.

NOTE: The pairs are unique.
HINT: Account for negative difference too!

***********************************************************************/


function twoDiff(array){
    let differences = []

    for (i=0;i<array.length;i++) {
        for (j=i+1;j<array.length;j++) {
            let one = array[i]
            let two = array[j]

            if (one - two === 2 || two - one === 2) {
                differences.push([i,j])
            }
        }
    }
    return differences
}

// console.log(twoDiff([2, 3, 4, 6, 1, 7])) // => [[0, 2], [1, 4], [2, 3]]
// console.log(twoDiff([0, 2, 4, 3, 5])) // => [[0, 1], [1, 2], [3,4]]
// console.log(twoDiff([])) // => []

/***********************************************************************
Write a function `arrayDiff(arr1, arr2)` that takes in two arrays. The 
function should return a new array, containing the elements of arr1 that
are not also in arr2.

Note: Assume both arrays have unique elements.

***********************************************************************/


function arrayDiff(arr1, arr2){
    let array = []

    for  (i=0;i<arr1.length;i++) {
        let number = arr1[i]
        if (arr2.includes(number) === false) {
            array.push(number)
        }
    }
    return array
}

// array1 = [1,23,2,43,3,4]
// array2 = [3, 23]
// console.log(arrayDiff(array1, array2)) // => [1, 2, 43 ,4]

// array3 = ['a', 'ab', 'c', 'd', 'c']
// array4 = ['d']
// console.log(arrayDiff(array3, array4)) // => ['a', 'ab', 'c', 'c']

/***********************************************************************
Write a function `valueCounter(obj, val)` that takes in an object and a 
value, the function should return the number of times 'val' repeats as a
value in 'obj'.

***********************************************************************/

function valueCounter(obj, val){
    let total = 0

    for (let key in obj) {
        if (obj[key] === val){
            total += 1
        }
  }
  return total
}

// obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
// console.log(valueCounter(obj1, 'Anne')) // => 3

// obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
// console.log(valueCounter(obj2, 88)) // => 0

// pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
// console.log(valueCounter(pairs, 'Roman')) // => 2



