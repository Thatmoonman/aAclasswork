// NOTES//
function testObj() {
    let obj = {
        1: "one",
        2: "two",
        3: "three"
    };
    obj['funk'] = function (string) {
        return "woof " + string + " woof"
    }

    for (let key in obj) {
        console.log(key + ": " + obj[key])
    }
    console.log(Object.keys(obj))
    console.log(Object.values(obj))
    return obj.funk('Justin')

}

// console.log(testObj())

// console.log([0,1,2,"something"][3])

// ###################################################
// let multiArray = [
//     ["a","b","c"],
//     ["1","2","3"],
//     ["g","h"]
// ]

// for (let i =0; i<multiArray.length; i++) {
//     let innerArray = multiArray[i]

//     for (let j=0; j < innerArray.length; j++)
//         console.log(innerArray[j])
// }

// ###################################################

// let names = ["Wei","Jimmy","Justin"]
// printNames(names)

function printNames(names) {

    for (let i=0;i<names.length;i++) {
        for (let j=0;j<names.length;j++) {
            console.log(names[i],names[j])
        }
    }
}

// ###################################################
// let names = ["Wei","Jimmy","Justin","Jonathon"]
// printUniques(names)

function printUniques(names) {

    for (let i=0;i<names.length;i++) {
        for (let j=i+1;j<names.length;j++) {
            console.log([names[i],names[j]])
        }
    }
}
// ###################################################
let numbers = [0,2,5,-2,7,-7]
console.log(pairZeroSum(numbers))

function pairZeroSum(numbers) {
    array = []

    for (let i=0; i<numbers.length; i++){
        let num1 = numbers[i]

        for(let j=i+1; j<numbers.length; j++) {
            let num2 = numbers[j]

            if (num1 + num2 === 0) {
                array.push([num1,num2])
            }
        }
    }
    return array
}
// ###################################################