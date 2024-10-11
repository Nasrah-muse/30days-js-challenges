
//  Checking Palindrome

function checkPalindrome(string){
    const lowerCasedString = string.toLowerCase();
    let reversed = lowerCasedString.split('').reverse().join('');
    if(lowerCasedString === reversed){
        return true;
    }
 else{
        return false;
    }}

console.log(checkPalindrome("level"));
console.log(checkPalindrome("Nasro"));
console.log(checkPalindrome("nooN"));
console.log(checkPalindrome("Noon"));
console.log(checkPalindrome("1221")); 
