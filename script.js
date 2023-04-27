const Xbtn = document.getElementById('btn');
const Obtn = document.getElementById('btn2');
const nav =  document.querySelector('nav');
const header =  document.querySelector('.header-about');
Obtn.addEventListener('click', ()=>{
    Obtn.style.display = 'none';
    Xbtn.style.display = 'block';
    nav.style.display = 'block'  
    header.style.display = 'none'
})
Xbtn.addEventListener('click', ()=>{
    Xbtn.style.display = 'none';
    Obtn.style.display = 'block';
    nav.style.display = 'none'
    header.style.display = 'block'
})