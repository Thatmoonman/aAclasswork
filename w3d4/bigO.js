// n is sample size
// big O refers to the time it takes to run code in a  worst case scenario

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele < pivot))
    let right = quickSort(arr.filter(ele => ele >= pivot))
    return left.concat([pivot], right);
}

// quicksort runs at O(nlog(n)) time
// this means that WORSE CASE the code will look at each element log(n) times 
// ex: if arr.length = 8, O(n) will be log2(8) which is 3
// so WORSE CASE (ie O(n)) will check every element three times

//mergeSort is also nlog(n)

//binarySearch is only O(log(n)) because it only check midpoints
//so an array of 8 would produce at most 3 iterations

//bubbleSearch is O(N^2) because WORST CASE it iterates through the whole array EVERY TIME

//no constants or coefficients
//O(2n) is just O(n)

//constant O(1)
// logorithmic O(n)
//linerithmic O(nlog(n))
//liner O(n)
// quadratic O(n^2)
//exponentional O(n^2)
// factorial O(n!)

// function fibs(n) {
//     if (n === 1 || n === 2) return 1;
//     return fibs(n - 1) + fibs(n - 2)
// }

// console.log(fibs(10))
//exponential O

function fibs(n, memo = {}) { //memo is making a note of every n so it calls that n after running 1 branch
    if (n === 1 || n === 2) return 1
    if (n in memo) return memo[n]
    memo[n] = fibs(n-1,memo)+fibs(n-2,memo)
    return memo[n]
}
console.log(fibs(50))

//DYNAMIC PROGRAMMING
//memo-ization