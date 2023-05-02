const Xbtn = document.getElementById('btn');
const Obtn = document.getElementById('btn2');
const header =  document.querySelector('.header-about');
Obtn.addEventListener('click', ()=>{
    const nav =  document.querySelector('nav');
    Obtn.style.display = "none"
    nav.classList.add('animation');
    nav.classList.remove('hidden')
    setInterval(()=>{
        nav.classList.remove('animation');
    }, 2001)
})
Xbtn.addEventListener('click', ()=>{
    const nav =  document.querySelector('nav');
    nav.classList.add('hidden');
    Obtn.style.display = 'inline-block';
})