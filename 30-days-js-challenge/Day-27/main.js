
// Simple async function
function waitTwoSeconds() {
   console.log('Starting the 2-second wait...');
 
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       try {
         console.log('Resolved after 2 seconds');
         resolve();  
       } catch (error) {
         reject(error); 
       }
     }, 2000);
   });
 }
 
 waitTwoSeconds()
   .then(() => console.log('Promise resolved successfully'))
   .catch((error) => console.log('Promise rejected:', error));
 