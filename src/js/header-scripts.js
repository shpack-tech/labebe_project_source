document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.menu_header');
	const menu_head = document.querySelectorAll('.mobile_menu');
	const mm_wrap = document.querySelector('.mm_wrap');
	const main = document.querySelector('.main__wrapper');
	const header = document.querySelector('header');
	const shop_link = document.querySelector('.shop_link');
	const catalog_back_mobile = document.querySelector('.catalog_back_mobile');

	burger.addEventListener('click', () => {
		mm_wrap.classList.toggle('open_mm');

		if (burger.classList.contains('close_b')) {
			menu_head[0].classList.remove('open_mm');
			menu_head[1].classList.remove('open_mm');
		} else {
			menu_head[0].classList.add('open_mm');
		}

		header.classList.toggle('header_fixed');

		if (!burger.classList.contains('close_mm')) {
			burger.children[0].src = 'images/close.svg';
			document.body.style.overflowY = 'hidden';
			burger.classList.add('close_b');
		} else {
			burger.children[0].src = 'images/burger.svg';
			document.body.style.overflowY = 'scroll';
			burger.classList.remove('close_b');
		}
		burger.classList.toggle('close_mm');
	});

	shop_link.addEventListener('click', (e) => {
		e.preventDefault();
		menu_head[0].classList.remove('open_mm');
		menu_head[1].classList.add('open_mm');
	});
	catalog_back_mobile.addEventListener('click', (e) => {
		e.preventDefault();
		menu_head[0].classList.add('open_mm');
		menu_head[1].classList.remove('open_mm');
	});

	function displayCartModal() {
		document.body.style.overflowY = 'hidden';
		const products = [
			{
				name: 'Skv company julia light',
				price: '420',
				quantity: 2,
				assembling: 'No',
				sourceImg: 'images/card-img2.png',
			},
			{
				name: 'Pali moses basket birillo',
				price: '554',
				quantity: 1,
				assembling: 'Yes',
				sourceImg: 'images/card-img1.png',
			},
			{
				name: 'Gandylyan gabriella lux',
				price: '110',
				quantity: 3,
				assembling: 'Yes',
				sourceImg: 'images/card-img3.png',
			},
			{
				name: 'Skv company julia light',
				price: '520',
				quantity: 9,
				assembling: 'No',
				sourceImg: 'images/card-img1.png',
			},
		];
		let subtotal = 0;
		for (const product of products) {
			subtotal += +product.price;
		}
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		overlay.innerHTML = `
        <div class="popup_cart">
            <div class="popup_cart_head">
                <div class="popup_cart_title">
                    Your cart
                    <p>${products.length} items</p>
                </div>
                <div class="popup_cart_close"><img src="images/close.svg" alt="" /></div>
            </div>
            <div class="popup_cart_products"></div>
            <div class="pc_subtotal">
                <div class="pc_subtotal_title">Subtotal:</div>
                <div class="pc_subtotal_amount">${subtotal} ₾</div>
            </div>
            <div class="pc_to_bag">
                <button onclick="window.location.href='/cart.html'" class="btn radius btn__white cp">VIEW BAG</button>
            </div>
        </div>
    `;
		if (products.length < 1) {
			overlay.innerHTML = `
            // Your cart is empty
        `;
		}

		document.body.appendChild(overlay);

		const product_list = document.querySelector('.popup_cart_products');
		for (const product of products) {
			product_list.innerHTML += `
            <div class="popup_cart_product">
                <div class="popup_cart_image"><img src="${product.sourceImg}" alt="" /></div>
                <div class="popup_cart_info">
                    <div class="pc_price">${product.price} ₾</div>
                    <div class="pc_name">Skv company julia light</div>
                    <div class="pc_assembling">Assembling:${product.assembling}</div>
                    <div class="pc_quantity">
                        Quantity:
                        <button onclick="removeItemCartPopup(this)" class="pc_minus"><img src="images/popup_cart_minus.svg" alt="" /></button>
                        <input type="number" value="${product.quantity}" name="" id="" />
                        <button onclick="removeItemCartPopup(this)" class="pc_plus"><img src="images/popup_cart_plus.svg" alt="" /></button>
                    </div>
                </div>
                <div class="popup_cart_remove">
                    <button class="remove_pc_item"><img src="images/trash.svg" alt="" /></button>
                    <div class="desktop_pc_price">${product.price} ₾</div>
                    <button class="remove_pc_item_desktop">Remove</button>
                </div>
            </div>
        `;
		}
		function closeModal() {
			document.body.style.overflowY = 'scroll';
			overlay.remove();
		}
		const close = document.querySelector('.popup_cart_close');

		close.addEventListener('click', closeModal);
	}
	window.removeItemCartPopup = function (e) {
		if (e.classList.contains('pc_minus') && e.parentElement.children[1].value > 1) {
			e.parentElement.children[1].value = +e.parentElement.children[1].value - 1;
		}
		if (e.classList.contains('pc_plus')) {
			e.parentElement.children[1].value = +e.parentElement.children[1].value + 1;
		}
	};

	document.querySelector('.basket_header').addEventListener('click', (e) => {
		e.preventDefault();
		displayCartModal();
	});
	document.querySelector('.desktop_cart_link').addEventListener('click', (e) => {
		e.preventDefault();
		displayCartModal();
	});

	function catalogModal() {
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		document.body.style.overflowY = 'hidden';

		overlay.innerHTML = `
			<div class="catalog_modal">
				<h1>Shop</h1>
				<a href="/subcatalog.html">Children's furniture <sup>94</sup></a>
				<a href="/subcatalog.html">Children's mattresses<sup>94</sup></a>
				<a href="/subcatalog.html">Baby bedding <sup>94</sup></a>
				<a href="/subcatalog.html">Child car seats<sup>94</sup></a>
				<a href="/subcatalog.html">Toys <sup>94</sup></a>
				<a href="/subcatalog.html">Gift cards <sup>94</sup></a>
				<a href="/subcatalog.html">Promotional offers <sup>94</sup></a>
				<img class="c_close" style="position: absolute; top:52px;right:100px; cursor:pointer;" src="images/close.svg" />
			</div>
		`;
		document.body.appendChild(overlay);
		function closeModal() {
			document.body.style.overflowY = 'scroll';
			overlay.remove();
		}

		const close = document.querySelector('.c_close');

		close.addEventListener('click', closeModal);
	}

	const dt_catalog_btn = document.querySelector('#dt_catalog_btn');
	dt_catalog_btn.addEventListener('click', (e) => {
		e.preventDefault();
		catalogModal();
	});

	window.loginPopup = function () {
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		document.body.style.overflowY = 'hidden';

		overlay.innerHTML = `
            <div class="multi_modal">
               <form>
                    <h1>${lang_var.logIn.name}</h1>
					<div class="label">${lang_var.logIn.email}<sup class="green">*</sup>
						<input required class="input radius" type="text" placeholder="${lang_var.logIn.emailPlaceholder}*">
					</div>
					<div class="label">${lang_var.logIn.password}<sup class="green">*</sup></span> 
						<input required class="input radius" type="text" placeholder="${lang_var.logIn.passwordPlaceholder}*">
					</div>
                    <button class="btn radius btn__green cp">${lang_var.logIn.button}</button>
                    <div class="filter_checkbox">
    					<input id="remember" name="remember" type="checkbox">
    					<label for="remember">${lang_var.logIn.inputCheckbox} </label>
    				</div>
               </form>
                <div class="close_multi_modal"><img src="images/small_close.svg" /></div>
            </div>
        `;

		const close_multi_modal = overlay.querySelector('.close_multi_modal');

		close_multi_modal.addEventListener('click', () => {
			document.body.style.overflowY = 'scroll';
			overlay.remove();
		});

		document.body.appendChild(overlay);
	};

	window.registerPopup = function () {
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		document.body.style.overflowY = 'hidden';

		overlay.innerHTML = `
            <div class="multi_modal">
               <form>
                    <h1>${lang_var.registration.title}</h1>
                    <div class="label">${lang_var.registration.name}<sup class="green">*</sup>
        			    <input required class="input radius" type="text" placeholder="${lang_var.registration.namePlaceholder}*">
        		    </div>
                    <div class="label">${lang_var.registration.email}<sup class="green">*</sup>
        			    <input required class="input radius" type="text" placeholder="${lang_var.registration.emailPlaceholder}*">
        		    </div>
                    <div class="label">${lang_var.registration.password}<sup class="green">*</sup></span> 
                        <input required class="input radius" type="text" placeholder="${lang_var.registration.passwordPlaceholder}*">
                    </div>
                    <div class="label">${lang_var.registration.confirmPassword}<sup class="green">*</sup></span> 
                        <input required class="input radius" type="text" placeholder="${lang_var.registration.confirmPassword}*">
                    </div>
                    <div class="filter_checkbox">
    					<input id="terms_agree" name="terms_agree" type="checkbox">
    					<label style="font-size:14px" for="terms_agree">${lang_var.registration.inputCheckbox}</label>
    				</div>
                    <button class="btn radius btn__green cp">${lang_var.registration.button}</button>
               </form>
                <div class="close_multi_modal"><img src="images/small_close.svg" /></div>
            </div>
        `;

		const close_multi_modal = overlay.querySelector('.close_multi_modal');

		close_multi_modal.addEventListener('click', () => {
			document.body.style.overflowY = 'scroll';
			overlay.remove();
		});

		document.body.appendChild(overlay);
	};

	const home = document.querySelector('.home');
	home.addEventListener('click', () => (window.location.href = '/'));

	function openSearchModal() {
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		document.body.style.overflowY = 'hidden';

		overlay.innerHTML = `
			<div class="catalog_modal" style="display:flex; align-items:center">
				<form style="max-width:100%; width:100%; margin:0;" class="form__search">
					<input style="" type="text" placeholder="Search product" />
					<button type="submit"><img src="images/arrow-search.svg" alt=""></button>
				</form>
				<img class="c_close" style="" src="images/close.svg" />
			</div>
		`;
		document.body.appendChild(overlay);
		function closeModal() {
			document.body.style.overflowY = 'scroll';
			overlay.remove();
		}

		const close = document.querySelector('.c_close');

		close.addEventListener('click', closeModal);
	}

	document.querySelector('#search_link').addEventListener('click', (e) => {
		e.preventDefault();
		openSearchModal();
	});
	document.querySelector('.search_header').addEventListener('click', (e) => {
		e.preventDefault();
		openSearchModal();
	});

	let lang_var;

	async function implementTranslation() {
		let selected = localStorage.getItem('lang') || 'english';
		let lang_endpoint = selected + '.json';
		const lang = await fetch(lang_endpoint)
			.then((response) => response.json())
			.then((data) => {
				lang_var = data;
				setTranslation('#search_link', data.header.headerBottom.search.search);
				setTranslation('.t_lcab', data.header.headerBottom.myAccount);
				setTranslation('.t_pay', data.header.headerTop.payment);
				setTranslation('.t_deliver', data.header.headerTop.shipping);
				setTranslation('.t_gar', data.header.headerTop.warranty);
				setTranslation('.t_return', data.header.headerTop.returnPolicy);
				setTranslation('.t_contact', data.header.headerTop.contacts);
				setTranslation('.t_gc', data.header.headerTop.giftCards);
				setTranslation('.t_cat', data.header.headerBottom.shop);
				setTranslation('.t_blog', data.header.headerBottom.blog);
				setTranslation('.t_brand', data.header.headerBottom.brands);
				setTranslation('.desktop_cart_link', data.header.headerBottom.cart);
				setTranslation('.t_wl', data.header.headerBottom.wishlist);
				setTranslation('.t_sr', data.cm);
				setTranslation('.t_pwl', data.wl);
				setTranslation('.t_ques', data.qes);
				setTranslation('.reviews', data.rev);
				setTranslation('.t_shar', data.share);
				setTranslation('.vendor_desktop', data.vend);
			});

		function setTranslation(element, translation) {
			if (document.querySelector(element)) {
				document.querySelector(element).innerHTML = translation;
			}
		}
	}

	switch (localStorage.getItem('lang')) {
		case 'english':
			document.querySelector('.lang_name ').innerText = 'EN';
			document.querySelector('.lang_name ').setAttribute('data-selected', 'english');
			break;

		case 'russian':
			document.querySelector('.lang_name ').innerText = 'RU';
			document.querySelector('.lang_name ').setAttribute('data-selected', 'russian');

			break;
		case undefined:
			document.querySelector('.lang_name ').innerText = 'EN';
			document.querySelector('.lang_name ').setAttribute('data-selected', 'english');

			break;
	}

	implementTranslation();
	window.addEventListener('langTrigger', implementTranslation);

	// if (document.querySelector('#dt_lk')) {
	// 	document.querySelector('#dt_lk').addEventListener('click', () => {
	// 		// registerPopup();
	// 	});
	// }

	// if (document.querySelector('#dt_lk')) {
	// 	// document.querySelector('#desktop_login_btn').addEventListener('click', () => {
	// 	// 	// loginPopup();
	// 	// });
	// }
});
