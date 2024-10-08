 
//  Find the factorial number

function findFactorial(number){
    let factorial = 1;

    for (let i =2; i <= number; i++){
        factorial *= i;

    }
    return factorial;
}

console.log("The factorial of number 6 =",findFactorial(6))
console.log("The factorial of number 8 =",findFactorial(8))
console.log("The factorial of number 3 =",findFactorial(3))