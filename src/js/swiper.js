import Swiper, { Navigation, Pagination, EffectCards } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination, EffectCards]);

if (window.location.pathname == '/blog-post.html') {
	document.addEventListener('DOMContentLoaded', function () {
		const swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: true,
			spaceBetween: 16,
			slidesPerView: 2,

			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
				progressbarFillClass: 'swiper-pagination-progressbar-fill',
			},

			breakpoints: {
				578: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				800: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		});
	});
}
