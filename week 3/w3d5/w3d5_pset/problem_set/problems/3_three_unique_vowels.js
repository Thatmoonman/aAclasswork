/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/

function threeUniqueVowels(string) {
    let vowels = 'aeiou'
    let repeats = ''

    for (let i = 0; i < vowels.length; i++) {
        if (string.includes(vowels[i]) && !repeats.includes(vowels[i])) {
            repeats += vowels[i]
        }
    }
    return repeats.length >= 3 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeUniqueVowels;
