
//    convert the first letter of each word in a string to upppercase(title case) 

function convertUppercase(letter) {
    let words = letter.toLowerCase().split(' ');  
    for (let i = 0; i < words.length; i++) { 
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');  
}

 console.log(convertUppercase('Practice makes you perfect'));
 console.log(convertUppercase('When you feel like quitting thin about why you started'));
 console.log(convertUppercase('Javascript is awesome'));