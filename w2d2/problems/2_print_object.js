/***********************************************************************
Write a function `printObject(obj)` that prints out all key-value pairs
of an object. HINT: use a for loop.

Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints

`name - App Academy`
`color - Red`
`population - 120`
***********************************************************************/


function printObject(obj) {
    for (let key in obj) {
        let prints = obj[key]
        console.log(key + " - " + prints)
    }
}

console.log(printObject(bootcamp = {
    name: 'App Academy',
    color: 'Red',
    population: 120}));