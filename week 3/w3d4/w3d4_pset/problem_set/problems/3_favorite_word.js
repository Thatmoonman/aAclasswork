/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/

function favoriteWord(favoriteLetter, sentence) {
    let words = sentence.split(" ")
    let favorites = {}
    let favorite = ''
    let fave = 0

    for (let i = 0; i < words.length; i++) {
        let count = 0
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === favoriteLetter) {
                count++
            }
            favorites[words[i]] = count
        }
    }
    
    for (let key in favorites) {
        if (favorites[key] > fave) {
            fave = favorites[key]
            favorite = key
        }
    }
    return favorite;
    
}
// O(2n)
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
