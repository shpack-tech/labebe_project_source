import Swiper, { Navigation, Pagination, EffectCards } from 'swiper';

Swiper.use([Navigation, Pagination, EffectCards]);

document.addEventListener('DOMContentLoaded', function () {
	var rewSwiper = new Swiper('.reviews_slider', {
		slidesPerView: 1.3,
		spaceBetween: 15,
		loop: true,
		draggable: true,
		navigation: {
			nextEl: '.r_n',
			prevEl: '.r_p',
		},
		pagination: {
			el: '.r_pag',
			type: 'progressbar',
			progressbarFillClass: 'swiper-pagination-progressbar-fill',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
	});

	var bestsellersSlider = new Swiper('.bestsellers_swiper', {
		slidesPerView: 2,
		spaceBetween: 15,
		loop: true,
		draggable: true,
		navigation: {
			nextEl: '.b_n',
			prevEl: '.b_p',
		},
		pagination: {
			el: '.b_pag',
			type: 'progressbar',
			progressbarFillClass: 'swiper-pagination-progressbar-fill',
		},
		breakpoints: {
			500: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 2.2,
			},
			1200: {
				slidesPerView: 2.5,
			},
			1920: {
				slidesPerView: 3.2,
				spaceBetween: 20,
			},
		},
	});

	var brandswiper = new Swiper('.manufacturer-swiper', {
		effect: 'cards',
		grabCursor: true,
		// loop: true,
		navigation: {
			nextEl: '.brand_forward',
			prevEl: '.brand_back',
		},
	});

	var index_slider = new Swiper('.mainpage_banner_slider', {
		slidesPerView: 1,
		spaceBetween: 15,
		loop: true,
		draggable: true,
		navigation: {
			nextEl: '.index_n',
			prevEl: '.index_p',
		},
		pagination: {
			el: '.index_pag',
			type: 'progressbar',
			progressbarFillClass: 'swiper-pagination-progressbar-fill',
		},
	});

	// function resizeSwiper() {
	// 	if (window.screen.width > 1200) {
	// 		document.querySelector('.desktop_slider_wrapp').classList.add('container');
	// 	} else {
	// 		document.querySelector('.desktop_slider_wrapp').classList.remove('container');
	// 	}
	// }
	// resizeSwiper();
	// document.addEventListener('resize', resizeSwiper);
});
