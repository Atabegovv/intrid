"use strict";


const favoriteBtn = document.getElementsByClassName("favorite");
for (let i = 0; i < favoriteBtn.length; i++) {
  favoriteBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}


document.querySelector('.burger-menu').onclick = function(){
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('.burger-line').classList.toggle('active');
};



const swiper = new Swiper('.swiper', {
  navigation:{
    prevEl: '.exclusive-slider-button-prev',
    nextEl: '.exclusive-slider-button-next',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  grabCursor: true,
  spaceBetween: 30,
  speed: 1000,
  // freeMode: true,
  slidesPerView: 1,
  breakpoints:{
    1050: {
      slidesPerView: 1.2,
    },
  },
});