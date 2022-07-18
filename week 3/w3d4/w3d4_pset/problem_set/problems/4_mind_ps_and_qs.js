/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/


function mindPsAndQs(str) {
    test = 'PQ'
    let streak = 0
    let count = 0

    for (let i = 0; i < str.length; i++){
        
        if (test.includes(str[i]) && count === 0) {
            count = 1
        } else if (test.includes(str[i]) && test.includes(str[i - 1])) {
            count++
        } else if (!test.includes(str[i]) && test.includes(str[i - 1]) && count > streak) {
            streak = count
            count = 0
        }
    }
    if (count > streak) streak = count;
    return streak;

}
//O(n)
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mindPsAndQs;
