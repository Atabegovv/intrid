"use strict";


const selectBtn = document.querySelectorAll('.tab');
const selectDwn = document.querySelectorAll('.tab_content');

  selectBtn.forEach((tab, index) => {
    tab.addEventListener('click', ()=> {
      selectBtn.forEach(tab => {tab.classList.remove('active')});
      tab.classList.add('active');

      selectDwn.forEach(tab_content => {tab_content.classList.remove('active')});
      selectDwn[index].classList.add('active');
    });
  });






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
  slidesPerView: 1.2,
});