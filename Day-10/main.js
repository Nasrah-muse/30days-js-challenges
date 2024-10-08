 
//   Reverse string without using reverse() function
 function reversedString(str){
    let reversed = '';

    for( let i = str.length -1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed;
 }

 console.log(reversedString('nasro'));
 console.log(reversedString('ahmed'));
 console.log(reversedString('ayaan'));
 console.log(reversedString('muqdisho'));
 console.log(reversedString('soomalia'));
