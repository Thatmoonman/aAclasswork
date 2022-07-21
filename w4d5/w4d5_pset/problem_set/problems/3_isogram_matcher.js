/***********************************************************************
An isogram is a word with only unique, non-repeating letters. Given two
isograms of the same length, return an array with two numbers indicating
matches: the first number is the number of letters matched in both words
at the same position, and the second is the number of letters matched in
both words but not in the same position.

isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
***********************************************************************/

function isogramMatcher(string1, string2) {
    let num1 = 0
    let num2 = 0

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === string2[i]) {
            num1++
        }

        for (let j = i + 1; j < string2.length; j++) {
            if (string1[i] === string2[j]) {
                num2++
            }
        }
        for (let k = i - 1; k >=0; k--) {
            if (string1[i] === string2[k]) {
                num2++
            }
        }
    }
    let array = [num1, num2]
    return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isogramMatcher;
