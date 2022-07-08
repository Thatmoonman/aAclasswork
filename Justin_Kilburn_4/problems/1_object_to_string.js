/*******************************************************************************
Write a function `objectToString(count)` that takes in a char count object and
returns a string representing the counts of each character.

Examples:

objectToString({a : 2, b: 4, c: 1}) => 'aabbbbc'
objectToString({b: 1, o: 2, t: 1}) => 'boot'
*******************************************************************************/

function objectToString(count) {
    let array = []

    for (let key in count) {
      let times = count[key]

      for (let i = 0; i < times; i++) {
        array.push(key)
      }
    }
    return array.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = objectToString;
