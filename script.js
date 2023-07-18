//---------------------------------------------------------------------------------
//           showing cart number after refresh
//---------------------------------------------------------------------------------

bagCount = document.querySelector(".bag-count")
mobileBagCount = document.querySelector(".mobile-bag-count")
console.log(bagCount)
let onLoadCartNum = ()=>{
  let itemsNumber = parseInt(localStorage.getItem("cartnumbers"));

  if(itemsNumber){
  bagCount.innerHTML = itemsNumber;
  mobileBagCount.innerHTML=itemsNumber;
  }else{
    bagCount.innerHTML = 0;
    mobileBagCount.innerHTML = 0;
  }
}



onLoadCartNum()

//-------------------------------------------------------------------------------
                    // modal variables and operations for newsletter
//-------------------------------------------------------------------------------

const modal = document.querySelector("[data-model]");
const modalCloseBtn = document.querySelector(".modal-close-overlay")
const modalCloseOverlay = document.querySelector(".modal-close-btn");


const modelCloseFunct = ()=>{
    modal.classList.add('closed')
}

modalCloseOverlay.addEventListener('click', modelCloseFunct);
modalCloseBtn.addEventListener('click', modelCloseFunct); 

// ----------------------------------------------------------
                         // mobile menu
// -----------------------------------------------------------


const mobileMenuOpenBtn = document.querySelector(".open-btn");
const mobileMenuCloseBtn = document.querySelector(".menu-close-btn");
const mobileMenu = document.querySelector(".mobile-navigation-menu");


const openFunc = ()=>{
    mobileMenu.classList.add('active')
}

const closeFunc = ()=>{
    mobileMenu.classList.remove('active')
}

mobileMenuOpenBtn.addEventListener('click', openFunc);
mobileMenuCloseBtn.addEventListener('click', closeFunc);


// menucatogory button

const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');


for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}




// ----------------------------------------------------------
                         // carsoule slideshow
// -----------------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display='none';
  }
 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



