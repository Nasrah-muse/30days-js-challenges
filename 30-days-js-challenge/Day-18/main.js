

//  Checking if a word is present in a sentence

function checkWordInSentence(sentence, word){

    sentence = sentence.toLowerCase();
    word = word.toLowerCase();
    return sentence.split(' ').includes(word);
}
 

console.log(checkWordInSentence("how are you?", "How"))
console.log(checkWordInSentence("Hello world", "hi"))
console.log(checkWordInSentence("Soomaaliya Hanoolaato", "soomaaliya"))



 

 