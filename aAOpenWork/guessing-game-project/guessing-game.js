const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let secretNumber
let askAttempts

function checkGuess(num) {
    if (num === secretNumber) {
        console.log("correct")
        return true
    } else if (num < secretNumber) {
        console.log("too low")
        return false
    } else {
        console.log("too high")
        return false
    }
}

function askGuess() {
    rl.question('Guess a number: ', (guess) => {
        let test = checkGuess(Number(guess))
        if (test) {
            console.log("You Win!")
        } else {
            askAttempts--
            if (askAttempts === 0) {
                console.log('You Lose!')
            } else {
                console.log("You have " + askAttempts + " guesses left, try again")
                return askGuess()
            }
        }
        
        rl.close();
    });
}

let randomInRange = (lowNum, highNum) => {
    return Math.floor(Math.random() * (highNum - lowNum) + lowNum)
}


function askRange() {
    rl.question('enter a low number: ', (low) => {
        let lowNum = low
        
        rl.question('enter a high number:' , (high) => {
            let highNum = high
            console.log("I'm thinking of a number between " + lowNum + " and " + highNum + "?")
            secretNumber = randomInRange(Number(lowNum), Number(highNum))
            return askGuess()
            rl.close();
        });
    });
}

function askLimit() {
    rl.question('how many tries do you want? ', (tries) => {
        askAttempts = tries
        return askRange()
        rl.close();
    });
}

askLimit()