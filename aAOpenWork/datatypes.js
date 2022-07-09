// Example:
console.log(4 + 2.5)   // 6.5

// Write 5 more expressions below:

console.log(10 % 3)
console.log(150/25)
console.log(2*4)
console.log(6-5)
console.log(1+1)

//////////////////////////////////

// Example:
console.log(false || false)   // false

// Write 3 more expressions below:

console.log(true && false)
console.log(true || false)
console.log(2 !== 5)

///////////////////////////////////

// 1. Declare a variable called `firstName` and assign it your first name as a string:
let firstName = "Justin"

// 2. Declare a variable called `lastName` and assign it your last name as a string:

let lastName = "Kilburn"
// 3. Declare a variable called `age`:
let age

// 4. Print out the `firstName`, `lastName`, and `age` variables. What do you
//    expect them to be when they get printed?
console.log(firstName + " " + lastName + " " + age)
"Justin Kilburn undefined"
// 5. Assign the `age` variable to a number:
age = 35

// 6. Print out the `firstName`, `lastName`, and `age` variables. What do you
//    expect them to be when they get printed?
console.log(firstName + " " + lastName + " " + age)
"Justin Kilburn 35"

////////////////////////////////////////////
function hasDoubleLetter(str) {
    
    if (typeof str !== 'string') {
        return null
    }
    
    for (let i = 0; i < str.length-1; i++) {
        let letter1 = str[i]
        let letter2 = str[i+1]
        
        if (letter1 === letter2) {
            return true
        }
    }   
    return false
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

////////////////////////////////////////////

