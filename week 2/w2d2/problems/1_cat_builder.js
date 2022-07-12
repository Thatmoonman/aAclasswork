/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

function catBuilder(name, color, toys) {
    let cat = {}
    cat.name = name
    cat.color = color
    cat.toys = toys
    return cat
}

console.log(catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']));
// cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }
console.log(catBuilder('Nyan', 'rainbow', ['poptarts']));
// cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
