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

console.log(testObj())
