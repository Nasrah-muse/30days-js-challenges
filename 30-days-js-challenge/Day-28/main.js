
// Using await to wait for a promise
async function waitAndLog() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('The promise has been successfully resolved');
    }, 2000);
  });

  const result = await promise; 
  console.log(result);     
}

waitAndLog();
