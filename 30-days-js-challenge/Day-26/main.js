// Form Input Validation

const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const result = document.createElement('h3');
form.appendChild(result)

form.addEventListener('submit', (e) => {
   e.preventDefault();
   if (userName.value === "") {   
      alert("Input cannot be empty");
      return;
   }
   else{
      result.textContent =`Username: ${userName.value}`;
   }
});
