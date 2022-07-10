/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/
 
function royalWe(sentence) {
  let words = sentence.split(" ")
  let royal = []

  for (i=0; i<words.length; i++) {
    if (words[i].indexOf("I") > -1) {
      royal.push("we");
    } else if (words[i].indexOf("mine") > -1) {
      royal.push("ours");
    } else if (words[i].indexOf("my") > -1) {
      royal.push("our");
    } else if (words[i].indexOf("me") > -1) {
      royal.push("us");
    } else {
      royal.push(words[i]);
    }
  }
  
  return royal.join(" ");
}
//OR use word = words[i]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
