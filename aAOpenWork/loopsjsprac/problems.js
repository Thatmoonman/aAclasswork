function oddIndices(arr) {
    return arr.filter(ele => ele % 2 !== 0)
    // Return an array containing all the odd indices in the array
    // Your code here
}

function oddReverse(arr) {
    let odds = []
    arr.forEach(ele => {if (ele % 2 !== 0) {odds.unshift(ele)}})
    return odds;
    // Return an array containing all the odd indices starting from the end
    // Your code here
}

function secondPower(arr) {
    let powers = []
    arr.forEach(ele => {
        for (let i = 2; i <= ele; i *= 2) {
            if (i === ele) powers.push(ele)
    }})
    return powers
    // Return an array containing all indices that are powers of 2
    // Your code here
}

function nthPower(arr, n) {
    let powers = []
    arr.forEach(ele => {
        for (let i = 1; i <= ele; i *= n) {
            if (i === ele) powers.push(ele)
        }
    })
    return powers
    // Return an array containing all indices that are powers of n
    // Your code here
}

function firstHalf(arr) {
    return arr.slice(0,Math.ceil(arr.length/2))
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    return arr.slice(Math.ceil(arr.length/2))
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}