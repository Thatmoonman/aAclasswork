// Debug this function below so it passes mocha

// Examples:
//
// unique([1,23,2,4,5,1,23]) //=> [1, 23, 2, 4, 5];

function unique(array) {
  let uniqueArray = [];

  for (let i = 0; i < array.length; i += 1) {
    let ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }
  return uniqueArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = unique;
