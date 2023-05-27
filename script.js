const Xbtn = document.getElementById('btn');
const Obtn = document.getElementById('btn2');
const header =  document.querySelector('.header-about');
Obtn.addEventListener('click', ()=>{
    const nav =  document.querySelector('nav');
    Obtn.style.display = "none"
    nav.classList.add('animation');
    nav.classList.remove('hidden')
})
Xbtn.addEventListener('click', ()=>{
    const nav =  document.querySelector('nav');
    nav.classList.add('hidden');
    Obtn.style.display = 'inline-block';
    nav.classList.remove('animation');
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

const slide = document.querySelectorAll(".slide")
const course = document.querySelectorAll(".course-box")
window.addEventListener("scroll", ()=>{
  const windowheight = window.innerHeight/5*4;
  slide.forEach((sl)=>{
    const slideTop = sl.getBoundingClientRect().top;
    if(slideTop<windowheight){
      sl.classList.add("scroll-anim")
    }
    else{
      sl.classList.remove("scroll-anim")
    }
  })
  course.forEach((sl)=>{
    const slideTop = sl.getBoundingClientRect().top;
    if(slideTop<windowheight){
      sl.classList.add("scroll-anim")
    }
    else{
      sl.classList.remove("scroll-anim")
    }
  })
})

