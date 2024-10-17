
//  Change backgroundcolor of a button

const btn = document.querySelector('button')

 btn.addEventListener('click', ()=>{
    btn.style.background = 'magenta';
    btn.style.color = "white"
    btn.style.width = 200 + "px"
    btn.style.height = 30 + "px";
    btn.style.border = "none";
    btn.style.borderRadius = 10 + 'px';

 })