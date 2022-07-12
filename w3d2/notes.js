// console.log(ele)
let arr = [1,2,4,5,6]
// console.log(i)

for (var i = 0; i < arr.length; i++) {
    let ele = arr[i]
}
// console.log(i)
// bar ()
// foo()
test()

var foo = function () {
    console.log(" in foo")
}

let bar = () => {
    return foo()
}

function test() {
    console.log("in test")
}

