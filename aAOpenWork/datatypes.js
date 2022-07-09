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
function firstVowel(str) {
    let vowels = 'aeiou'
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]){
                return vowels[j]
            }
        }
    }
    return null
    
}


console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
////////////////////////////////////////////
function lastVowel(str) {
    let vowels = 'aeiouAEIOU'
    
    for (let i = str.length-1; i >= 0; i--) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]){
                return vowels[j]
            }
        }
    }
    return null
    
}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
////////////////////////////////////////////
function minValue(nums) {
    let small = nums[0]
    
    if (nums.length === 0) {
        return null
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < small) {
            small = nums[i]
        }
    }
    return small
    
}


console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
////////////////////////////////////////////
function avgVal(arr) {
    let sum = 0
    
    if (arr.length === 0) {
        return null
    }
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum/arr.length
    
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
////////////////////////////////////////////
function maxValue(nums) {
    let largest = 0
    
    if (nums.length === 0) {
        return null
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i]
        }
    }
    return largest
    
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
////////////////////////////////////////////
function reverb(word) {
    let vowels = 'aeiouAEIOU'
    
    if (typeof word !== 'string') {
        return null
    }
    
    for (let i = word.length -1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word + word.slice(i,)
        }
    }
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
////////////////////////////////////////////
function isPrime(number) {
    if (number < 2) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

function prevPrime(num) {
    if (num <= 2) {
        return null
    }
    for (let i = num - 1; i > 2; i--) {
        if(isPrime(i) === true) {
            return i
        }
    }
}


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
////////////////////////////////////////////
function additionMutator(arr,num) {
    let newArr = arr.map(number => number + num)
    return newArr
}

let nums1 = [3, 7, 1, 2];
console.log(additionMutator(nums1, 4));
// console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
console.log(additionMutator(nums2, -1));
// console.log(nums2);     // [ 10, 8, 3 ]
////////////////////////////////////////////
function alternatingWords(arr) {
    let newArray = []
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        
        if (i % 2 === 0) {
            newArray.push(word.toUpperCase())
        } else {
            newArray.push(word.toLowerCase())
        }
    }
    return newArray
    
}


let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
console.log(alternatingWords(words1));
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
console.log(alternatingWords(words2));
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
////////////////////////////////////////////
function reverseString(str){
    let newStr = ''
    
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
    
}



console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
////////////////////////////////////////////
// your code here
function removeLastVowel(word) {
    let vowels = 'aeiou'
    
    for (let i = word.length-1; i >= 0; i--) {
        if (vowels.includes(word[i]) === true) {
            return word.slice(0,i) + word.slice(i+1,)
        }
    }
    return word
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
////////////////////////////////////////////
function removeEWords(sentence) {
    let words = sentence.split(" ")
    let newSen = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes('e') === false) {
            newSen.push(words[i])
        }
    }
    return newSen.join(" ")
    
}




console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
////////////////////////////////////////////

