document.addEventListener('DOMContentLoaded', function () {
	let minDollars = 500;
	let maxDollars = 15000;

	let minSlider = document.querySelector('#min');
	let maxSlider = document.querySelector('#max');

	function numberWithSpaces(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}

	function updateDollars() {
		let fromValue = ((maxDollars - minDollars) * minSlider.value) / 100 + minDollars;
		let toValue = ((maxDollars - minDollars) * maxSlider.value) / 100 + minDollars;

		document.querySelector('#from').value = `${numberWithSpaces(Math.floor(fromValue))}`;
		document.querySelector('#to').value = `${numberWithSpaces(Math.floor(toValue))}`;
	}

	if (maxSlider) {
		maxSlider.addEventListener('input', () => {
			let minValue = parseInt(minSlider.value);
			let maxValue = parseInt(maxSlider.value);

			if (maxValue < minValue + 5) {
				minSlider.value = maxValue - 5;

				if (minValue === parseInt(minSlider.min)) {
					maxSlider.value = 5;
				}
			}

			updateDollars();
		});
	}

	if (minSlider) {
		minSlider.addEventListener('input', () => {
			let minValue = parseInt(minSlider.value);
			let maxValue = parseInt(maxSlider.value);

			if (minValue > maxValue - 5) {
				maxSlider.value = minValue + 5;

				if (maxValue === parseInt(maxSlider.max)) {
					minSlider.value = parseInt(maxSlider.max) - 5;
				}
			}

			updateDollars();
		});
	}

	const filters_catalog = document.querySelector('.filters_catalog');

	if (filters_catalog) {
		filters_catalog.addEventListener('click', function (e) {
			if (e.target.classList.contains('filter_open')) {
				if (e.target.classList.contains('open_f')) {
					e.target.classList.remove('open_f');
					e.target.parentElement.children[1].classList.add('expanded_f');
				} else {
					e.target.classList.add('open_f');
					e.target.parentElement.children[1].classList.remove('expanded_f');
				}
			}
		});
	}
	const filter_line = document.querySelector('.filters_display_line');
	window.deleteFilter = function (e) {
		e.parentElement.remove();

		document.getElementById(`${e.id.split('_')[1]}`).checked = false;
	};
	window.applyFilter = function (e) {
		if (e.checked) {
			filter_line.innerHTML += `
        <div class="catalog_filter_applied">
            <div class="filter_a_text">${e.parentElement.children[1].innerText}</div>
            <img onclick="deleteFilter(this)" id="cb_${e.id}" src="images/filter_rm.svg" alt="" />
        </div>
        `;
		} else {
			filter_line.querySelector(`#cb_${e.id}`).click();
		}
	};
	window.removeMF = () => {
		document.querySelector('.overlay').remove();
	};
	window.displayMobileFilter = (e) => {
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		overlay.innerHTML = `
            <div class="popup_cart">
                <div class="popup_cart_head">
                    <div class="popup_cart_title">
                        Filters
                       
                    </div>
                    <div onclick="removeMF()" class="popup_cart_close"><img src="images/close.svg" alt="" /></div>
                </div>
                <div class="filters_catalog" style="width:100%;display:block; padding:20px 0;">
							<div class="filter_item">
								<div class="filter_open">Price range</div>
								<div class="filter_content expanded_f" style>
									<div class="center">
										<div class="price"><input id="from_m" value="500"><span> - </span><input value="15000" id="to_m"></div>

										<div class="multi-range">
											<input id="min_m" type="range" min="0" max="100" value="0" step="0.0001"><input id="max_m" type="range" min="0" max="100" value="100" step="0.0001">
										</div>
									</div>
								</div>
							</div>
							<div class="filter_item">
								<div class="filter_open">Type</div>
								<div class="filter_content expanded_f">
									<div class="filter_cb_container">
										<div class="filter_checkbox">
											<input id="11" type="checkbox" oninput="applyFilter(this)">
											<label for="11">Baby cots</label>
										</div>
									</div>
									<div class="filter_cb_container">
										<div class="filter_checkbox">
											<input id="22" type="checkbox" oninput="applyFilter(this)">
											<label for="22">Teen cribs</label>
										</div>
									</div>
									<div class="filter_cb_container">
										<div class="filter_checkbox">
											<input id="33" type="checkbox" oninput="applyFilter(this)">
											<label for="33">Cradles</label>
										</div>
									</div>
								</div>
							</div>
							<div class="filter_item">
								<div class="filter_open">Brand</div>
								<div class="filter_content expanded_f">
									<div class="filter_cb_container">
										<div class="filter_checkbox">
											<input id="1212" type="checkbox" oninput="applyFilter(this)">
											<label for="1212">Pali</label>
											<img class="catalog_info" src="images/info.svg" alt="">
										</div>
										<div class="filter_checkbox">
											<input id="1313" type="checkbox" oninput="applyFilter(this)">
											<label for="1313">4moms</label>
											<img class="catalog_info" src="images/info.svg" alt="">
										</div>
										<div class="filter_checkbox">
											<input id="1414" type="checkbox" oninput="applyFilter(this)">
											<label for="1414">Happy Baby</label>
											<img class="catalog_info" src="images/info.svg" alt="">
										</div>
									</div>
								</div>
							</div>
							<div class="filter_item">
								<div class="filter_open">Country of origin</div>
								<div class="filter_content expanded_f">
									<div class="filter_cb_container">
										<div class="filter_checkbox">
											<input id="44" type="checkbox" oninput="applyFilter(this)">
											<label for="44">Georgia</label>
										</div>
									</div>
									<div class="filter_cb_container">
										<div class="filter_checkbox">
											<input id="55" type="checkbox" oninput="applyFilter(this)">
											<label for="55">Italy</label>
										</div>
									</div>
									<div class="filter_cb_container">
										<div class="filter_checkbox">
											<input id="66" type="checkbox" oninput="applyFilter(this)">
											<label for="66">Spain</label>
										</div>
									</div>
								</div>
							</div>
						</div>
            </div>
        `;
		document.body.appendChild(overlay);

		let minSlider_m = document.querySelector('#min_m');
		let maxSlider_m = document.querySelector('#max_m');

		function numberWithSpaces_m(number) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		}

		function updateDollars_m() {
			let fromValue = ((maxDollars - minDollars) * minSlider_m.value) / 100 + minDollars;
			let toValue = ((maxDollars - minDollars) * maxSlider_m.value) / 100 + minDollars;

			document.querySelector('#from_m').value = `${numberWithSpaces_m(Math.floor(fromValue))}`;
			document.querySelector('#to_m').value = `${numberWithSpaces_m(Math.floor(toValue))}`;
		}

		maxSlider_m.addEventListener('input', () => {
			let minValue = parseInt(minSlider_m.value);
			let maxValue = parseInt(maxSlider_m.value);

			if (maxValue < minValue + 5) {
				minSlider_m.value = maxValue - 5;

				if (minValue === parseInt(minSlider_m.min)) {
					maxSlider_m.value = 5;
				}
			}

			updateDollars_m();
		});

		minSlider_m.addEventListener('input', () => {
			let minValue = parseInt(minSlider_m.value);
			let maxValue = parseInt(maxSlider_m.value);

			if (minValue > maxValue - 5) {
				maxSlider_m.value = minValue + 5;

				if (maxValue === parseInt(maxSlider_m.max)) {
					minSlider_m.value = parseInt(maxSlider_m.max) - 5;
				}
			}

			updateDollars_m();
		});

		const filters_catalog = document.querySelectorAll('.filters_catalog')[1];

		filters_catalog.addEventListener('click', function (e) {
			if (e.target.classList.contains('filter_open')) {
				if (e.target.classList.contains('open_f')) {
					e.target.classList.remove('open_f');
					e.target.parentElement.children[1].classList.add('expanded_f');
				} else {
					e.target.classList.add('open_f');
					e.target.parentElement.children[1].classList.remove('expanded_f');
				}
			}
		});
	};

	async function updateSubCatalog(catalog_container) {
		const container = document.querySelector(catalog_container);
		const minPrice = 0;
		const maxPrice = 750;
		// const brand
		container.innerHTML = '';

		await fetch('products.json')
			.then((response) => response.json())
			.then((data) => {
				for (const id of Object.keys(data)) {
					if (data[id].price > minPrice && data[id].price < maxPrice) {
						container.innerHTML += `
							<div class="card" data-index="${id}">
								<a href="/product.html" class="card__img radius">
									<img src="${data[id].sourceImg}" alt="" />
								</a>
								<div class="card__info">
									<a href="/product.html" class="card__info-name">${data[id].name}</a>
									<div class="card__info-category">Cradles</div>
									<div class="card__info-stock ${data[id].inStock == 'Not In Stock' ? 'red-text' : ''} ">${data[id].inStock}</div>
									<div class="card__info-price">${data[id].price} ₾</div>
								</div>
							</div>
						`;
					}
				}
			});
	}
	async function updateCatalog(catalog_container) {
		const container = document.querySelector(catalog_container);
		const minPrice = 0;
		const maxPrice = 750;
		// const brand
		container.innerHTML = '';

		await fetch('products.json')
			.then((response) => response.json())
			.then((data) => {
				for (const id of Object.keys(data)) {
					if (data[id].price > minPrice && data[id].price < maxPrice) {
						container.innerHTML += `
						<div class="card">
							<a href="/subcatalog.html" class="card__img radius">
								<img src="${data[id].sourceImg}" alt="" />
							</a>
							<div class="card__info">
								<div class="card__info-name">${data[id].category} <sup style="color: #828282">${data[id].amount}</sup></div>
							</div>
						</div>
						`;
					}
				}
			});
	}
	if (window.location.pathname != '/catalog.html') {
		if (document.querySelector('.catalog_container ')) {
			updateSubCatalog('.catalog_container');
		}
	}
	if (window.location.pathname === '/catalog.html') {
		updateCatalog('.catalog_container');
	}
});
