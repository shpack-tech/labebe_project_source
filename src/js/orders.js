import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', function () {
	const order_swiper = new Swiper('.order_images_slider_1', {
		slidesPerView: 3,
		spaceBetween: 10,
		pagination: {
			el: '.o_pag_1',
			type: 'progressbar',
			progressbarFillClass: 'swiper-pagination-progressbar-fill',
		},
		breakpoints: {
			425: {
				slidesPerView: 4,
			},
		},
	});
});
