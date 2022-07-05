// NOTES//
function testObj() {
    let obj = {
        1: "one",
        2: "two",
        3: "three"
    }

    for (let key in obj) {
    console.log(key + ": " + obj[key])
    }
    return obj

}

console.log(testObj())