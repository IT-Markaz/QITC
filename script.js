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

const next = document.querySelector(".next");
const prew = document.querySelector(".prew");
const slideContainer = document.querySelector(".slider-container");

next.addEventListener('click', ()=>{
  const widtSlide = document.querySelector(".slide").offsetWidth;
  slideContainer.scrollLeft += widtSlide;
})

prew.addEventListener('click', ()=>{
    const widtSlide = document.querySelector(".slide").offsetWidth;
    slideContainer.scrollLeft -= widtSlide;
})



const next2 = document.querySelector(".next2");
const prew2 = document.querySelector(".prew2");
const slide2 = document.querySelector(".slide2");

next2.addEventListener('click', ()=>{
  const widtSlide = document.querySelector(".slide").offsetWidth;
  slide2.scrollLeft += widtSlide;
})

prew2.addEventListener('click', ()=>{
  const widtSlide = document.querySelector(".slide").offsetWidth;
  slide2.scrollLeft -= widtSlide;
})



