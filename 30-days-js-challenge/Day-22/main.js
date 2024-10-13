
//   Remove Duplicate Charcters from a string

function removeDuplicateChar(str){
    return [...new Set(str)].join(' ');
}

console.log(removeDuplicateChar("Javascript"))
console.log(removeDuplicateChar("do your best"))
console.log(removeDuplicateChar("never give up"))