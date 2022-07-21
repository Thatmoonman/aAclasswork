/***********************************************************************
Write a function `censor(sentence, curseWords)` that censors
the given sentence by replacing the vowels in curse words with
"*". Assume no punctuation.

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
result1; //=> "D*rn you Harold you son of a g*n"

var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"
***********************************************************************/
function  noVows(word) {
    let vowels = 'aeiou'
    let newWord = ''
    
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            newWord += '*'
        } else {
            newWord += word[i]
        }
    }
    return newWord;
}

function censor(sentence, curseWords) {
    let senArray = sentence.split(" ")
    let newSen = []

    for (let j = 0; j < senArray.length; j++) {
        if (curseWords.includes(senArray[j].toLowerCase())) {
            newSen.push(noVows(senArray[j]))
        } else {
            newSen.push(senArray[j])
        }
    }
    return newSen.join(" ");

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = censor;
