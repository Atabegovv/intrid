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





// const select = document.getElementsByClassName("tab");
//   for (let i = 0; i < select.length; i++) {
//     select[i].addEventListener("click", function() {
//       this.classList.toggle("tab--active");
//     });
//   };


function filterToggle() {
	const filterTitle = document.querySelectorAll('.select-item__title');
	const filterBody = document.querySelectorAll('.select-item__dropdown');

	if (filterBody) {
		filterTitle.forEach(element => {
			element.addEventListener('click', function (event) {
				const filterBodyOpened = element.nextElementSibling;

				if (element.classList.contains('opened')) {
					element.classList.remove('opened');
					filterBodyOpened.classList.remove('opened');
				}
				else {
					filterTitle.forEach(element => {
						element.classList.remove('opened');
					});
					filterBody.forEach(element => {
						element.classList.remove('opened');
					});
					element.classList.add('opened');
					filterBodyOpened.classList.add('opened');
				}
			});
		});
	}
}
filterToggle();





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