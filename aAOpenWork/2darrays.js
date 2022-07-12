function twoDimensionalSum(arr) {
    let sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
        }
    }
    return sum;
    
}


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
////////////////////////////////////////////////////////
function twoDimensionalProduct(array) {
    let product = 1
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            product *= array[i][j]
        }
    }
    return product;
    
}

// let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//     [11, 4],
//     [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88
////////////////////////////////////////////////////////
function maxInMatrix(matrix) {
    let largest = 0
  
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > largest) {
                largest = matrix[i][j]
            }
        }
    }
    return largest;
    
}


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
////////////////////////////////////////////////////////
// function maxColumn(matrix) {
//     let array = []
    
//     for (let i = 0; i < matrix.length; i++) {
        
//         for (let j = 0; j < matrix[i].length; j++) {
//             let largest = 0
            
//             if (matrix[i][j] > matrix[i+1][j] && matrix[i][j] > matrix[i+2][j]) {
//                 largest = matrix[i][j]
//             } else if (matrix[i+1][j] > matrix[i][j] && matrix[i+1][j] > matrix[i+2][j]) {
//                 largest = matrix[i+1][j]
//             } else if (matrix[i+2][j] > matrix[i][j] && matrix[i+2][j] > matrix[i+1][j]) {
//                 largest = matrix[i+2][j]
//             }
//             array.push(largest)
//         }
//         return array;
        
//     }
        
// }

function maxColumn(matrix) {
    let array = []
    
    for (let i = 0; i < matrix[0].length; i++) {
        let largest = matrix[0][i]
        
        for (let j = 1; j < matrix.length; j++) {
            if (matrix[j][i] > largest) {
                largest = matrix[j][i]
            }
        }
        array.push(largest)
    }
    return array;
    
}

matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]
////////////////////////////////////////////////////////
// Your code here
function zip(arr1, arr2) {
    array = arr1.map(ele => [ele,arr2[arr1.indexOf(ele)]])
    return array
}


console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
////////////////////////////////////////////////////////
function zanyZip(arr1, arr2) {
    let array = []
    let length
    
    if (arr1.length > arr2.length) {
        length = arr1.length
    } else {
        length = arr2.length
    }
    
    for (let i = 0; i < length; i++) {
        if (arr1[i] === undefined && arr2[i] !== undefined) {
            array.push([null,arr2[i]])
        } else if (arr1[i] !== undefined && arr2[i] === undefined) {
            array.push([arr1[i],null])
        } else {
            array.push([arr1[i],arr2[i]])
        }
    }
    return array
}


console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
////////////////////////////////////////////////////////
function matrixAddition(max1, max2) {
    let newArray = []
    
    for (let i = 0; i < max1.length; i++) {
        let arr1 = max1[i]
        let arr2 = max2[i]
        let array = []
        
        for (let j = 0; j < arr1.length; j++) {
            array.push(arr1[j]+arr2[j])
        }
        newArray.push(array)
    }
    return newArray;
    
}


let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
////////////////////////////////////////////////////////
function maxColumn(matrix) {
    let array = []
    
    for (let i = 0; i < matrix[0].length; i++) {
        let largest = matrix[0][i]
        
        for (let j = 1; j < matrix.length; j++) {
            if (matrix[j][i] > largest) {
                largest = matrix[j][i]
            }
        }
        array.push(largest)
    }
    return array;
    
}

function minRow(array) {
    let smallest = array[0]
    
    for (let j = 1; j < array.length; j++) {
        if (array[j] < smallest) {
            smallest = array[j]
        }
    }
    return smallest;
    
}

function luckyNumbers(matrix) {
    let min
    let max = maxColumn(matrix)
    let lucky = []
    
    for (let k = 0; k < matrix.length; k++) {
         min = (minRow(matrix[k]))
         
        for (let m = 0; m < max.length; m++) {
            if (max[m] === min && m === matrix[k].indexOf(min)) {
                lucky.push(min)
            }
        }
    }
    return lucky;
    
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
////////////////////////////////////////////////////////
function spiralOrder(matrix) {
    let array = []
    let height = matrix.length
    let width = matrix[0].length
    
    for (let i = 0; i < width; i++) {
        array.push(matrix[0][i])
    }
    for (let j = 1; j < height; j++) {
        array.push(matrix[j][matrix[j].length-1])
    }
    for (let k = width - 2; k >= 0; k--) {
        array.push(matrix[height - 1][k])
    }
    for (let l = height - 2; l > 0; l--) {
        array.push(matrix[l][0])
    }
    for (let m = 1; m < width - 1; m++) {
        array.push(matrix[1][m])
    }
    return array;
    
}


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

////////////////////////////////////////////////////////
function pyramidArray(base) {
    let array = []
    let subArray
    let sums
    array.push(base)
    
    for (let i = 1; i < base.length; i++) {
        subArray = array[0]
        sums = []
        
        for (let j = 0; j < subArray.length - 1; j++) {
            sums.push(subArray[j] + subArray[j+1])
        }
        array.unshift(sums)
    }
    return array;
    
}


let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]
////////////////////////////////////////////////////////