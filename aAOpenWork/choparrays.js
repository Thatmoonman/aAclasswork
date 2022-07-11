///////////////////////////////////////////////////
function removeFromArray(location, arr) {
    if (location === "FRONT") {
        arr.shift(arr[0])
    } else if (location === "BACK") {
        arr.pop(arr[arr.length-1])
    } else {
        console.log("ERROR")
    }
    return arr

}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]

///////////////////////////////////////////////////
let popper = function(array,num) {
    let newArray = []
    
    for (let i = 1; i <= num; i++) {
        let ele = array.length
        newArray.push(array[ele-1])
        array.pop(array[ele-1])
        
    }
    return newArray
    
}

let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
///////////////////////////////////////////////////
function rotateRight(array,num) {
    let newArray = []
    
    for (let i = 0; i < array.length; i++) {
        let shift = array.length - num
        let index = i + shift
        let newIndex = index % array.length
        
        newArray.push(array[newIndex])
    }
    return newArray
}



let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
///////////////////////////////////////////////////

///////////////////////////////////////////////////

///////////////////////////////////////////////////

///////////////////////////////////////////////////

///////////////////////////////////////////////////

///////////////////////////////////////////////////