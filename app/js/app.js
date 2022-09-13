document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.js-swiper-stock', {
		direction: 'horizontal',
		slidesPerView: 1,
		grid: {
			rows: 2,
			},
		spaceBetween: 30,
		navigation: {
				nextEl: '.js-swiper-stock-button-next',
				prevEl: '.js-swiper-stock-button-prev',
		},
		breakpoints: {
			320: {
			  	slidesPerView: 1,
				  spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			  },
			1024: {
				slidesPerView: 3,
				},
			1399: {
				slidesPerView: 3,
				spaceBetween: 20,
				},
			1440: {
				slidesPerView: 4,
					},
		},
	});
	const swiper1 = new Swiper('.js-swiper-sale', {
		direction: 'horizontal',
		slidesPerView: 4,
		grid: {
			rows: 2,
			},
		spaceBetween: 30,
		navigation: {
			nextEl: '.js-swiper-sale-button-next',
			prevEl: '.js-swiper-sale-button-prev',
		},
		breakpoints: {
			320: {
			  	slidesPerView: 1,
				  spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			  },
			1024: {
				slidesPerView: 3,
				},
			1399: {
				slidesPerView: 3,
				spaceBetween: 20,
				},
			1440: {
				slidesPerView: 4,
					},
		},
	});
	const swiper2 = new Swiper('.js-swiper-present', {
		direction: 'horizontal',
		slidesPerView: 4,
		grid: {
			rows: 2,
			},
		spaceBetween: 30,
		navigation: {
			nextEl: '.js-swiper-present-button-next',
			prevEl: '.js-swiper-present-button-prev',
		},
		breakpoints: {
			320: {
			  	slidesPerView: 1,
				  spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			  },
			1024: {
				slidesPerView: 3,
				},
			1399: {
				slidesPerView: 3,
				spaceBetween: 20,
				},
			1440: {
				slidesPerView: 4,
					},
		},
	});
	const width = window.innerWidth
  	if (width <= 768){
		const swiper3 = new Swiper('.js-swiper-forum', {
			direction: 'horizontal',
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	}
})
let burger = document.querySelector('.burger-menu'),
    menu = document.querySelector('.menu');

burger.addEventListener('click', function(e) {
  	menu.classList.add('active');
});

let burgerclose = document.querySelector('.burger-menu__close'),
    menuclose = document.querySelector('.menu');

	burgerclose.addEventListener('click', function(e) {
		menuclose.classList.remove('active');
});
/* Аккордион */
function initAcc(elem, option){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .a-btn')) return;
        else{
            if(!e.target.parentElement.classList.contains('active')){
                if(option==true){
                    var elementList = document.querySelectorAll(elem+' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }            
                e.target.parentElement.classList.add('active');
            }else{
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}

initAcc('.accordion.v1', true);

function initAcc1(elem, option){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .b-btn')) return;
        else{
            if(!e.target.parentElement.classList.contains('active')){
                if(option==true){
                    var elementList = document.querySelectorAll(elem+' .b-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }            
                e.target.parentElement.classList.add('active');
            }else{
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}

initAcc1('.accordion-catalog', false);
