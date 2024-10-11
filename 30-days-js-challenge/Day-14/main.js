 
//   Generate an array randow numbers between 1 to 100

function generateRandomArray(){
    let arrayRandomNumbers = [];

    for(let i = 1; i <= 10; i++){
        arrayRandomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return arrayRandomNumbers;
}

console.log(generateRandomArray())
console.log(generateRandomArray())
console.log(generateRandomArray())

