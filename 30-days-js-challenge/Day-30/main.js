 
//  Retrieve to the localstorage
const saveBtn = document.querySelector('#savebtn');
const user = document.querySelector('#user');
 
saveBtn.addEventListener('click', ()=>{
   const userName = document.querySelector('#username').value;
   if(userName){
      localStorage.setItem('userName', userName);
      alert('user name is saved to localstorage');
      displayUser();
   }
   else{
      alert('Please enter username')

    }
})
function displayUser(userName){
   user.textContent = `username: ${userName}`;

}
window.onload = function(){
   const retrieveUser = localStorage.getItem('userName');
   if(retrieveUser){
      displayUser(retrieveUser);
   }
}