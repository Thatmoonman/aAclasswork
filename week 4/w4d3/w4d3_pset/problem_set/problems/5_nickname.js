/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/

function nickname(name) {
    let vowels = 'aeiou'
    let second = 1

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i]) && second !== 2) {
            second = 2
        } else if (vowels.includes(name[i]) && second === 2) {
            return name.slice(0,i + 1).toUpperCase() + "-" + name.slice(0,i + 1).toUpperCase();
        }
    }
    return name.toUpperCase() + "-" + name.toUpperCase();
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nickname;
