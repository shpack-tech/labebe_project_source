import Swiper, { Navigation, Pagination, EffectCards, Thumbs } from 'swiper';

Swiper.use([Navigation, Pagination, EffectCards, Thumbs]);

document.addEventListener('DOMContentLoaded', function () {
	var product_pagination = new Swiper('.product_gallery_paginator', {
		loop: true,
		spaceBetween: 32,
		direction: 'vertical',
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var product_gallery = new Swiper('.product_gallery_swiper', {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 1,
		navigation: {
			nextEl: '.p_p_next',
			prevEl: '.p_p_prev',
		},
		thumbs: {
			swiper: product_pagination,
		},
	});

	var mps = new Swiper('.mps', {
		loop: true,
		// spaceBetween: 10,
		slidesPerView: 1,

		pagination: {
			el: '.progress_pag_p',
			type: 'progressbar',
			progressbarFillClass: 'swiper-pagination-progressbar-fill',
		},
	});

	var related = new Swiper('.related_slider', {
		slidesPerView: 2,
		spaceBetween: 15,

		draggable: true,
		navigation: {
			nextEl: '.r_n',
			prevEl: '.r_p',
		},
		pagination: {
			el: '.r_pag',
			progressbarFillClass: 'swiper-pagination-progressbar-fill',
			type: 'progressbar',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			// 1200: {
			// 	slidesPerView: 5,
			// 	spaceBetween: 20,
			// },
		},
	});
	var was = new Swiper('.viewed_slider', {
		slidesPerView: 2,
		spaceBetween: 15,

		draggable: true,
		navigation: {
			nextEl: '.v_n',
			prevEl: '.v_p',
		},
		pagination: {
			el: '.v_pag',
			progressbarFillClass: 'swiper-pagination-progressbar-fill',
			type: 'progressbar',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			// 1200: {
			// 	slidesPerView: 5,
			// 	spaceBetween: 20,
			// },
		},
	});

	const info_containers = document.querySelector('.detailed_product_info');
	if (info_containers) {
		info_containers.addEventListener('click', function (e) {
			if (e.target.closest('div').classList.contains('ib_title')) {
				e.target.closest('div').parentElement.children[1].classList.toggle('ib_content_open');
				e.target.closest('div').children[0].classList.toggle('img_r');
			}
		});
	}

	const colors = document.querySelector('.color_btns');
	const btns = document.querySelectorAll('.color_select_btn');
	if (colors) {
		colors.addEventListener('click', function (e) {
			console.log(e.target);
			if (e.target.classList.contains('color_select_btn')) {
				[...btns].forEach((el) => {
					el.classList.remove('selected_color');
				});
				e.target.classList.add('selected_color');
			}
			if (e.target.tagName == 'IMG') {
				[...btns].forEach((el) => {
					el.classList.remove('selected_color');
				});
				e.target.parentElement.classList.add('selected_color');
			}
		});
	}

	const comment = document.querySelector('#comment');
	const question = document.querySelector('#question');

	function askQuestion() {
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		document.body.style.overflowY = 'hidden';

		overlay.innerHTML = `
            <div class="multi_modal">
               <form>
                    <h1>Ask a Question</h1>
                    <p>
						If you have any questions about a product, then our specialists are always ready to help you. Just write to us and we will answer within 30 minutes.
					</p>
					
					<textarea style="height:130px;" name="question" placeholder="Write your question"></textarea>
                    <button class="btn radius btn__green cp">ASK A QUESTION</button>
                   
                   <p style="font-size: 12px;line-height: 15px;">By clicking the "Submit" button, I accept the privacy policy and consent, agree to the transmission of the review text and the right to display on Labebe.</p>
				</form>
                <div class="close_multi_modal"><img src="images/close.svg" /></div>
            </div>
        `;

		const close_multi_modal = overlay.querySelector('.close_multi_modal');

		close_multi_modal.addEventListener('click', () => {
			document.body.style.overflowY = 'scroll';
			overlay.remove();
		});

		document.body.appendChild(overlay);
	}

	function leaveComment() {
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		document.body.style.overflowY = 'hidden';

		overlay.innerHTML = `
            <div class="multi_modal">
               <form>
                    <h1>Your product review</h1>
                    <p>
						Your review will help someone make a choice. Thank you for sharing your experience!
					</p>
					<div class="rate">
						<div class="rate-text">
							Rate the product *
						</div>
						<div class="rate-stars" style="cursor:pointer">
							<img style="width:25px;height:25px" src="images/empty-start.svg" data-rate="1" />
							<img style="width:25px;height:25px" src="images/empty-start.svg" data-rate="2" />
							<img style="width:25px;height:25px" src="images/empty-start.svg" data-rate="3" />
							<img style="width:25px;height:25px" src="images/empty-start.svg" data-rate="4" />
							<img style="width:25px;height:25px" src="images/empty-start.svg" data-rate="5" />
						</div>
					</div>
					<div class="rate-text">
							Tell us more
					</div>
					<textarea style="height:130px;" name="question" placeholder="Describe your overall impression"></textarea>
                    <button class="btn radius btn__green cp">LEAVE FEEDBACK</button>
                   <p style="font-size: 12px;line-height: 15px;">By clicking the "Submit" button, I accept the privacy policy and consent, agree to the transmission of the review text and the right to display on Labebe.</p>
               </form>
                <div class="close_multi_modal"><img src="images/close.svg" /></div>
            </div>
        `;

		const close_multi_modal = overlay.querySelector('.close_multi_modal');

		close_multi_modal.addEventListener('click', () => {
			document.body.style.overflowY = 'scroll';
			overlay.remove();
		});

		document.body.appendChild(overlay);

		const stars = overlay.querySelector('.rate-stars');
		console.log(stars);

		stars.addEventListener('click', function (e) {
			if (e.target.dataset.rate) {
				const rate = e.target.dataset.rate;
				[...stars.children].forEach((el) => {
					if (el.dataset.rate <= rate) {
						el.src = 'images/star_fill.svg';
					} else {
						el.src = 'images/empty-start.svg';
					}
				});
			}
		});
	}
	if (question) {
		question.addEventListener('click', askQuestion);
	}
	if (comment) {
		comment.addEventListener('click', leaveComment);
	}
});
