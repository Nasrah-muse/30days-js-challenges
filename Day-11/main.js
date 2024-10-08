
//  Find smallest number in array

function findSmallestNumber(numbers){
    smallestNumber = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] < smallestNumber){
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;

}

const numbers = [100, 45,66,33,12,4,90,5,3,12];
 
console.log("The smallest number in array is",findSmallestNumber(numbers));