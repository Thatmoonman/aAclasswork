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


function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele < pivot))
    let right = quickSort(arr.filter(ele => ele >= pivot))
    return left.concat([pivot], right)
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid,))
    return merge(left,right)
}
function merge(left, right) {
    let merged = []
    while (left.length && right.length) {
        if (left[0]<right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left,right)
}

function binarySearch(arr, target) {
    if (arr.length === 0 || (arr.length === 1 && arr[0] !== target)) {
        return -1
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid+1,)
    if (arr[mid] === target) {
        return mid
    } else if(arr[mid] > target) {
        return binarySearch(left, target)
    } else {
        let res = binarySearch(right, target)
        return res + 1 + mid
    }
}


////////////////////////////////////////////////////////////////////
function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
                sorted = false
            }
        }
    }
    return arr;
}
function anagram(word1, word2) {
    if (word1.length !== word2.length) return false;

    let obj = {}

    for (let i = 0; i < word1.length; i++) {
        let chr1 = word1[i]
        let chr2 = word2[i]
        if (obj[ch1]) {
            obj[chr1]++
        } else {
            obj[chr2] = 1
        }
        if (obj[chr2]) {
            obj[chr2]--
        } else {
            obj[chr2] = -1
        }
    }
    for (let key in obj) {
        if (obj[key]) {
            return false;
        }
    }
    return true;
}
////////////////////////////////////////////////////////////////////////
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele < pivot))
    let right = quickSort(arr.filter(ele => ele >= pivot))
    return left.concat([pivot], right)
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid,))
    return merge(left, right)
}
function merge(left, right){
    let merged = []
    if (left[0] < right[0]) {
        merged.push(left.shift())
    } else {
    merged.push(right.shift())
    }
    return merged.concat(left,right)
}

function binarySearch(arr, target) {
    if (arr.length === 0 || (arr.length === 1 & arr[0] !== target)) return -1
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
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

function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i+1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }
    return arr;
}

function anagrams(word1, word2) {
    if (word1.length !== word2.length) return false;

    let obj = {}
    for (let i = 0; i < word1.length; i++) {
        let chr1 = word1[i]
        let chr2 = word2[i]

        if (obj[chr1]) {
            obj[chr1]++
        } else {
            obj[chr1] = 1
        }
        if (obj[chr2]) {
            obj[chr2]--
        }else{
            obj[chr2] = -1
        }
    }
    for (let key in obj) {
        if (obj[key]) {
            return false;
        }
    }
    return true;
}