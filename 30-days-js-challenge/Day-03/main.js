 
 function findLongestWord(sentence){
    let word= sentence.split(" ");
    let longestWord = "";
    for(let i = 0; i < word.length; i++){
        if(word[i]. length > longestWord.length){
            longestWord = word[i];
        }
    }
    return longestWord;

}
let sentence = "Practice makes you perfect";
console.log(findLongestWord(sentence));