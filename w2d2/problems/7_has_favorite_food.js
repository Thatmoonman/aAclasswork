/***********************************************************************
Write a function `hasFavoriteFood(obj, food)` that takes in an object
and a food string. The function should return true if the object has
that favorite food. See the examples below.

Examples:

var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

hasFavoriteFood(dog, 'sausage'); // => true
hasFavoriteFood(dog, 'cat food'); // => false

var person = {
  name: 'Al',
  favoriteFoods: ['pizza', 'burgers', 'ramen']
}

hasFavoriteFood(person, 'burgers'); // => true
hasFavoriteFood(person, 'fish'); // => false
***********************************************************************/

function hasFavoriteFood(obj, food) {
  return (obj.favoriteFoods.indexOf(food) !== -1)
}

var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

console.log(hasFavoriteFood(dog, 'sausage')); // => true
console.log(hasFavoriteFood(dog, 'cat food')); // => false

var person = {
  name: 'Al',
  favoriteFoods: ['pizza', 'burgers', 'ramen']
}

console.log(hasFavoriteFood(person, 'burgers')); // => true
console.log(hasFavoriteFood(person, 'fish')); // => false