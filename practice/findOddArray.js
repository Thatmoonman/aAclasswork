let arr = [1,2,3,4,5,6]
let odds = arr.filter(number => {
    return number % 2 !== 0;
});
console.log(odds);
