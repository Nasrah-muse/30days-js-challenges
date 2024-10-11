
//   Checking if an array is a subst of another array

function isArraySubset(array1, array2){
    return array2.every(Element => array1.includes(Element));
}

console.log(isArraySubset([1,2,3,4,5], [2,3,5]));
console.log(isArraySubset([100,200,300], [101,22,4]));
console.log(isArraySubset([34,56,78], [56,78,34]));