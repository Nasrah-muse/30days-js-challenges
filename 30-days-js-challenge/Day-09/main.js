
// Check if number is prime number
function isPrime(num) {
  if (num < 2) {
      console.log("The number " + num + " is not prime");
      return; 
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          console.log("The number " + num + " is not prime");
          return;  
      }
  }

  console.log("The number " + num + " is prime");
}

isPrime(7);    
isPrime(15);   
isPrime(2);   
isPrime(8);   
isPrime(13);   
isPrime(1);   
