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

let multiArray = [
    ["a","b","c"],
    ["1","2","3"],
    ["g","h"]
]

for (let i =0; i<multiArray.length; i++) {
    let innerArray = multiArray[i]
    for (let j=0; j < innerArray.length; j++)
    console.log(innerArray[j])
}