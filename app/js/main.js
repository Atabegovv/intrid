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
document.querySelector('.menu').onclick = function(){
  document.querySelector('.menu').classList.remove('active');
  document.querySelector('.burger-line').classList.remove('active');
};



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

  // const select = document.getElementsByClassName("tab");
  // for (let i = 0; i < select.length; i++) {
  //   select[i].addEventListener("click", function() {
  //     this.classList.remove("active");
  //   });
  // };





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