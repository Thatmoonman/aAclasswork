/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/
function removePunctuation(word) {
    let punctuation = [";", "!", ".", "?", ",", "-"]
    let letters = word.split("")
    let newWord = []
    
    for (i=0; i<letters.length; i++) {
        if (punctuation.includes(letters[i])) {
            continue
        } else {
            newWord.push(letters[i])
        }
    }
    return newWord.join("")
}

function isStopWord(word,stopWords){
    let noPunc = removePunctuation(word).toLowerCase()
    
    if (stopWords.includes(noPunc)) {
        return true
    }
    return false

}

function upperCase(word) {
    let letters = word.split("")
    let words = []

    for (i=0;i<letters.length;i++) {
        if (i===0) {
            words.push(letters[i].toUpperCase())
        } else {
            words.push(letters[i].toLowerCase())
        }
    }
    return words.join("")

}

function titleize(title, stopWords) {
    let titleWords = title.split(" ")
    let newTitle = []

    for (let i=0; i<titleWords.length; i++) {
        let words = titleWords[i]

        if (isStopWord(words,stopWords) === false) {
            let newWord = upperCase(words)
            newTitle.push(newWord)
        } else {
            let stopW = words.toLowerCase()
            newTitle.push(stopW)
        }
    }
    return newTitle.join(" ")
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = titleize;
