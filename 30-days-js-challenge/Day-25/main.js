
//   Hide and Show Element

 const para = document.querySelector('#para');

 const btn = document.querySelector("#btn");

 btn.addEventListener('click',()=>{
   if(para.style.display === "none"){
      para.style.display = "block"
   }else{
      para.style.display = "none"

   }
   })


