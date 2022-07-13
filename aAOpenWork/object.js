function printObject(obj) {
    for (let key in obj) {
        console.log(key + " - " + obj[key])
    }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120

////////////////////////////////////////////////////
function catBuilder(name, color, toys) {
    let obj = {}
    
    obj["name"] = name
    obj["color"] = color
    obj["toys"] = toys

    return obj
}

console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
////////////////////////////////////////////////////
let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]]
let array = []
for (let i = 1; i <= bigArray.length; i++) {
    array.push(i)
}
[array] = bigArray

console.log(bigArray[4])
// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
////////////////////////////////////////////////////

 ////////////////////////////////////////////////////

 ////////////////////////////////////////////////////

 ////////////////////////////////////////////////////