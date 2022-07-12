console.log("Part 1")
console.log(4 + 4 / 2)
// 6
console.log((2 + -7) * 3)
// -15
console.log(101 % 10)
// 1
console.log(12 - 4 % 3)
// 9 **3 goes into 4 1 time, leaving 12-1=11*
console.log(true && false)
// false
console.log(true && !(false || false))
// true
console.log(!true && !(false || false))
// false
console.log('cat' + 'dog')
// catdog
console.log(2 + 'pizza')
// 7 **string 2pizza**
console.log(2.5 * 'fish')
// NaN
console.log(5 >= 11)
// false
console.log(5 === 5.0)
// true
console.log(7 !== 7.1)
// true
console.log(5 + 5 > 8)
// true
console.log(6 + 6 !== 12)
// false
console.log(2 > 1 || false)
// true
console.log('true' === true)
// false
console.log(10 % 2 === 0)
// true
console.log(21 % 2 === 0)
// false
console.log(21 % 2 !== 0)
// true
console.log(21 % 2 === 1)
// true
console.log(12 % 3 === 0)
// true
console.log(9 % 3 === 0)
// true
console.log(14 % 3 === 0)
// false
console.log('new york'[0])
// n
console.log('new york'[1])
// e
console.log('san francisco'[2 * 3])
// a
console.log('bootcamp'[3].toUpperCase())
// T
console.log('bootcamp'.indexOf('T'))
// -1
console.log('bootcamp'.indexOf('camp'))
// 4
console.log('bootcamp'.indexOf('o') > -1)
// true
console.log('science'.indexOf('x') === -1)
// true
console.log("Part 2")
// 1
var idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // 10
idx * 2;
console.log(idx); // 20 **10, did not change idx with =**
// 2
var num = 33;
var isEven = num % 2 === 0;
console.log(isEven); // false
console.log(!isEven); // true
// 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); // 4
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // C
var char = str2[num].toLowerCase(); // c
console.log(char + '!'); // c!
// 4
var sentence = 'welcome to bootcamp prep';
var lastChar = sentence[sentence.length - 1];
console.log(lastChar); // p
console.log(sentence.indexOf(lastChar)); // 18 **first instance only**
console.log("Part 3")
// 5
var age = 20; // try different numbers here

if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}
// younger than 30
// 6
var str = 'popcorn'; // try different strings here

if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}
// short string
// starts with p
// 7
var num = 52; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
// undefined **logs nothing**
var num = 30; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
// divisible by 3
// 8
var num = 30; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}
// divisible by 3
// divisible by 5
// 9
var str = 'here we go!'; // try different strings here

if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}
// undefined **'!' is a capital!!!**
// 10
var num = 101; // try different numbers here

if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
// positive
// odd