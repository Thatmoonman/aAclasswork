function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele < pviot))
    let right = quickSort(arr.filter(ele => ele >= pivot))
    return left.concat([pivot], right)
}

function mergeSort(arr) {
    if (arr.lenght <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid,))
    return merge(left, right)
}

function merge(left,right) {
    let merged = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left,right)
}

function binarySearch(arr, target) {
    if (arr.length === 0 || (arr.length === 1 && arr[0] !== target)) return -1
    let mid = Math.floor(arr.length /2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid + 1,)

    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] > target){
        return binarySearch(left, target)
    }else {
        let res =  binarySearch(right, target)
        return res + 1 + mid
    }
}

function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr.shift()
    let left  = quickSort(arr.filter(ele => ele < pivot))
    let right = quickSort(arr.filter(ele => ele >= pivot))
    return left.concat([pivot],right)
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.lenght/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid,))
    return merge(left, right)
}
function merge(left, right){
    let merged = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left,right)
}

function binarySearch(arr, target) {
    if (arr.length === 0 || (arr.length === 1 && arr[0] !== target)) return -1
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid + 1,)
    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] > target) {
        return binarySearch(left, target)
    } else {
        let res = binarySearch(right, target)
        return res + 1 + mid
    }
}