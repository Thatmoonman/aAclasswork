function spiralOrder(matrix) {
    let home = matrix[0]
    let height = matrix.length - 1
    let length = home.length - 1
    let array = []

    for (let i = 0; i <= (height+1)*(length+1); i = array.length) {
        array.push(matrix.shift(0,length - 1))
        if (i === 0) {
            matrix.unshift([])
        } else {
            home.push(matrix[1].shift(2,))

        }
        console.log(array)
        if (height > 0) {
            for (let j = 1; j <= height; j++) {
                home.push(matrix[j][length])
                matrix[j].pop(length)
            }
        }
        for (let k = length - 1; k >= 0; k--) {
            home.push(matrix[height][k])
            matrix[height].pop(k)   
        }
        for (let m = height - 1; m > 0; m--) {
            home.push(matrix[m][0])
            matrix[m].shift(0)
            
        }
        // for (let n = 0; n < 2; n++) {
        //     for (let o = 1; o <= height - 1; o++)
        //         matrix[o].unshift("X")
        // }
        
        
    }
    return array;

}

// matrix = [[ 1, 2, 3],
//           [ 4, 5, 6],
//           [ 7, 8, 9]]
// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[ 1, 2, 3, 4],
          [12,13,14, 5],
          [11,16,15, 6],
          [10, 9, 8, 7]]
console.log(spiralOrder(matrix))

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]