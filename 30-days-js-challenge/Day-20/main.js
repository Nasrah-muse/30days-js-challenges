
//   Fibonacci Sequence

function fibonacciSequence(n){
    let fibonacci = [0,1];
    if(n <=0){
        return [];
    } 
    if(n === 1){
        return [0];
    }

    while(true){
        let nextFibonacci = fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length - 2];
        if(nextFibonacci > n){
            break;
        }
        fibonacci.push(nextFibonacci);
    }
    return fibonacci;
}
console.log(fibonacciSequence(21));
console.log(fibonacciSequence(8));
console.log(fibonacciSequence(7));
console.log(fibonacciSequence(13));
console.log(fibonacciSequence(5));
