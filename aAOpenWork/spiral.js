function spiralOrder(matrix) {
    let array = []
    const size = matrix.length * matrix[0].length

    for (let i = array.length; i < size; i = array.length) {
    
        for (let j = 0; j < matrix[0].length; j++) { //strip top row right
            array.push(matrix[0][j])
        }
        matrix.shift(0)
        
            if (array.length === size) { //end of function catch
                    return array;
            }

        for (let k = 0; k < matrix.length - 1; k++) { //strip right column down
            array.push(matrix[k][matrix[k].length - 1])
            matrix[k].pop(matrix[0].length - 1)
        }

            if (array.length === size) { //end of function catch
                return array;
            }

        for (let m = matrix[matrix.length - 1].length - 1; m >= 0; m--) { //strip bottom row left
            array.push(matrix[matrix.length - 1][m])
        }
        matrix.pop(matrix.length - 1)
        
            if (array.length === size) { //end of function catch
                return array;
            }

        for (let n = matrix.length - 1; n >= 0; n--) { //strip left column up
            array.push(matrix[n][0])
            matrix[n].shift(0)
        }
    }
    return array;

}

matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]
console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[ 1, 2, 3, 4],
          [12,13,14, 5],
          [11,16,15, 6],
          [10, 9, 8, 7]]
console.log(spiralOrder(matrix))

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]
console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]