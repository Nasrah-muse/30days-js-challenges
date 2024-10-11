 

//   Checking if array is sorted in ascending order

function checkingSortedArray(numbers){
    for(let i=0; i< numbers.length; i++){
        if(numbers[i] > numbers[i+2]){
            return false;
        }
    }
    return true;
}

console.log(checkingSortedArray([0,1,4,6,7]))
console.log(checkingSortedArray([5,8,9,0,1]))
console.log(checkingSortedArray([99,100,200,201]))
console.log(checkingSortedArray([88,65,4,3]))
console.log(checkingSortedArray([10,20,30,40,50]))