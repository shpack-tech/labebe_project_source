import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', function () {
	const compare_swiper = new Swiper('.compare_swiper', {
		slidesPerView: 2,
		spaceBetween: 32,
		draggable: true,
		// navigation: {
		// 	nextEl: '.r_p',
		// 	prevEl: '.r_n',
		// },
		pagination: {
			el: '.com_p',
			type: 'progressbar',
			progressbarFillClass: 'swiper-pagination-progressbar-fill',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4.3,
			},
		},
	});

	const compare_block = document.querySelector('.compare_results');

	if (compare_block) {
		compare_block.addEventListener('click', function (e) {
			const targ = e.target;
			if (targ.closest('div').classList.contains('compare_result_title')) {
				targ.parentElement.children[1].classList.toggle('c_result_body_open');
				targ.classList.toggle('c_result_open');
			}
		});
		async function compareHandle() {
			const container = document.querySelector('.compare_swiper').querySelector('.swiper-wrapper');

			const compare_list = [];

			await fetch('products.json')
				.then((response) => response.json())
				.then((data) => {
					for (const id of Object.keys(data)) {
						compare_list.push(data[id]);
					}
				});

			const display_differences = document.querySelectorAll('.compare_result_body');
			let pinned_products = JSON.parse(localStorage.getItem('pinned')) || [];

			let max_compare = 4;
			let is_pinned = false;
			window.screen.width < 768 ? (max_compare = 2) : window.screen.width > 767 && window.screen.width < 1024 ? (max_compare = 3) : (max_compare = 4);

			switch (max_compare) {
				case 3:
					if (pinned_products.length > 3) {
						pinned_products.pop();
					}
					break;
				case 2:
					if (pinned_products.length > 2) {
						pinned_products.pop();
					}
					if (pinned_products.length > 3) {
						pinned_products.splice(pinned_products.length - 2, 2);
					}
			}

			container.innerHTML = '';
			for (const [i, product] of compare_list.entries()) {
				for (const el of pinned_products) {
					if (el.id === product.id) {
						is_pinned = true;
					}
				}

				container.innerHTML += `
						<div class="card swiper-slide clip">
							<div class="card__img radius">
								<img src="${product.sourceImg}" alt="" />
							</div>
							<div class="card__info">
								<div class="card__info-name">${product.name}</div>
								<div class="card__info-category">${product.category}</div>
								<div class="card__info-stock">${product.inStock}</div>
								<div class="card__info-price">${product.price} ₾</div>
							</div>
							<div class="pin ${is_pinned ? 'compare_pinned' : ''}" data-compareid="${i}" data-unpin="${product.id}" onclick="handleCompareSelection(this)" ><img src="${
					is_pinned ? 'images/small_close.svg' : 'images/pin.svg'
				}" alt="📌" /></div>
						</div>
					`;
				is_pinned = false;
			}

			function updateDifferences() {
				display_differences[0].innerHTML = '';
				display_differences[1].innerHTML = '';
				display_differences[2].innerHTML = '';
				display_differences[3].innerHTML = '';

				for (const el of pinned_products) {
					display_differences[0].innerHTML += `
					<div class="compared_product_box">
						<div data-pbf="${el.id}" onclick="removeComparedElementByLabel(this)" class="compared_product_name">${el.name}<img src="images/filter_rm.svg" alt="" /></div>
					</div>
					`;
					display_differences[1].innerHTML += `
						<div>${el.material}</div>
					`;
					display_differences[2].innerHTML += `
						<div>${el.swing}</div>
	
					`;
					display_differences[3].innerHTML += `
						<div>${el.depth} X ${el.width} X ${el.height}H</div>
					`;
				}
			}

			window.removeComparedElementByLabel = function (label) {
				pinned_products = pinned_products.filter((el) => el.id !== label.dataset.pbf);
				localStorage.setItem('pinned', JSON.stringify(pinned_products));
				const unpin = document.querySelector(`.compare_pinned[data-unpin="${label.dataset.pbf}"]`);
				unpin.children[0].src = 'images/pin.svg';
				unpin.classList.remove('compare_pinned');
				updateDifferences();
			};

			window.handleCompareSelection = function (pin) {
				pin.classList.toggle('compare_pinned');
				const compared_product = compare_list[+pin.dataset.compareid];
				console.log(compared_product);

				if (pin.classList.contains('compare_pinned')) {
					if (pinned_products.length < max_compare) {
						pin.children[0].src = 'images/small_close.svg';
						pinned_products.push(compared_product);
					}
				} else {
					pin.children[0].src = 'images/pin.svg';
					pinned_products = pinned_products.filter((el) => el.id !== compared_product.id);
				}
				localStorage.setItem('pinned', JSON.stringify(pinned_products));
				updateDifferences();
			};
			updateDifferences();
		}
		compareHandle();
	}
});
