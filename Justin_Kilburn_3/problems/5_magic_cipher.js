/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher) {
    let newSentence = ''

    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i]
        
        if (cipher[letter] === undefined) {
            newSentence += letter;
        }
        
        for (let key in cipher) {
            if (key === letter) {
                newSentence += cipher[key];
            }
        }
    }
    return newSentence;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
