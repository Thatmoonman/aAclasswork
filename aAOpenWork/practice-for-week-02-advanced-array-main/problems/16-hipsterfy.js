/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    let vowels = 'aeiou'
    let index
    let i = -1
    let letters = word.split("")

    letters.forEach(letter => {
        i++

        if (vowels.includes(letter)) {
            index = i
        }
        return index;
    })
    return word.slice(0,index) + word.slice(index + 1,)
};

let hipsterfy = function(sentence) {
    let words = sentence.split(" ")
    let newSen = words.map(word => removeLastVowel(word))
    return newSen.join(" ")
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
