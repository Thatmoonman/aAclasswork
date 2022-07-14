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

function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) { //checking if element is larger than the one to its right
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; // swithcing them if it is
                sorted = false;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort(arr))

function binarySearch(arr, target) {
    if (arr.length === 0 || (arr.length === 1 && arr[0] !== target)) {
        return -1
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1);

    if (arr[mid] === target) {
        return mid
    } else if (target < arr[mid]) {
        return binarySearch(left, target) 
    } else {
        let res = binarySearch(right, target);
        return res + 1 + mid;
    }
}

// console.log(binarySearch(quickSort(arr), 100))

function mergeSort(arr) {
    if (arr.length <= 1) return arr; // base case!
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return mergeSort(left, right);
}

function merge(left, right) {
    let merged = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left,right)
}

console.log(mergeSort(arr))