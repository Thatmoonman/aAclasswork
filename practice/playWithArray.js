let arr = [1,2,3,4,5,6,7,8,9,10]
// filter for evens
console.log(arr)
let evens = arr.filter(number => {
    return number % 2 === 0;
});
console.log(evens)
// make odds even
let allEvens = []
arr.forEach(number => {
    if (number % 2 !== 0) {
        allEvens.push(number + 1);
    }
    else allEvens.push(number);
});
console.log(allEvens)
// remove repeats
let noReps = [...new Set(allEvens)]
console.log(noReps)
// limit range
let range = []
noReps.forEach(number => {
    if (number < 10 && number > 2) {
        range.push(number)
    }
});
console.log(range)
// outer range
let outRange = []
noReps.forEach(number => {
    if (number < 4 || number > 8) {
        outRange.push(number)
    }
});
console.log(outRange)