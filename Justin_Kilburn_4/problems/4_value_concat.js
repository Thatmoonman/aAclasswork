/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/

function valueConcat(array, obj) {
  let newArray = []
  let nameCheck = []

  for (let i = 0; i < array.length; i++) {
    let name = array[i]

    for (let key in obj) {
      let add = obj[key]

      if (name === key) {
        newArray.push(name + add)
        nameCheck.push(name)
      }
    }
    if (nameCheck.includes(name) === false) {
      newArray.push(name)
    }
  }
  return newArray
  
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueConcat;
