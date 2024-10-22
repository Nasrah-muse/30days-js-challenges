 
//  Save to the localstorage

const saveBtn = document.querySelector('#savebtn');
 
saveBtn.addEventListener('click', ()=>{
   const userName = document.querySelector('#username').value;
   if(userName){
      localStorage.setItem('userName', userName);
      alert('user name is saved to localstorage')
   }
   else{
      alert('Please enter username')

    }
})