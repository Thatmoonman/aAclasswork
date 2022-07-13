//Quick Sort
let arr = [0, 5, 3, 2, 6, 10, 100, 42]

function quickSort(arr) {
    if (arr.length <= 1) return arr; //checking for end of tree
    let pivot = arr.shift(); //pivot POINT
    let left = quickSort(arr.filter(ele => ele < pivot)); //recursion (less than pivot goes left)
    let right = quickSort(arr.filter(ele => ele >= pivot)); //recursion (greater than pivot goes right)
    return left.concat([pivot], right); //where the sorting happens
}

// console.log(quickSort(arr))

