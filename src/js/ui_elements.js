document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('langTrigger', () => {
		setTimeout(() => {
			addDescription(
				'#dt_lk',
				'top',
				`
						<p>
							Login to the store to track orders and compare products.
						</p>
						<button onclick=(loginPopup()) style="margin: 10px 0" id="desktop_login_btn" class="btn radius btn__green cp">LOG IN</button>
						<button onclick=(registerPopup()) style="text-align:center; width: 100%; padding: 10px 0" id="desktop_register_btn" class="green">REGISTER</button>
					`,
				'240px',
				'click',
				'mouseleave',
				'-60px'
			);
		}, 200);
	});
	setTimeout(() => {
		addDescription(
			'#dt_lk',
			'top',
			`
					<p>
						Login to the store to track orders and compare products.
					</p>
					<button onclick=(loginPopup()) style="margin: 10px 0" id="desktop_login_btn" class="btn radius btn__green cp">LOG IN</button>
					<button onclick=(registerPopup()) style="text-align:center; width: 100%; padding: 10px 0" id="desktop_register_btn" class="green">REGISTER</button>
				`,
			'240px',
			'click',
			'mouseleave',
			'-60px'
		);
	}, 200);
	if (document.querySelector('.assembling_info')) {
		addDescription(
			'.assembling_info',
			'top',
			`
				<p style="font-weight: normal">
					The assembly is carried out only on the territory of Tbilisi, assembly is not possible in the regions at the moment. In case of purchasing an assembly service, all products are covered by an unlimited warranty for the entire period of their operation!
				</p>
			`,
			'300px',
			'mouseenter',
			'mouseleave',
			'-140px'
		);
	}
	if (document.querySelector('#d_share')) {
		addDescription(
			'#d_share',
			'top',
			`
				<div style="flex-direction:column; display:flex">
					<a style="display:flex; flex-direction:row;align-items:center;width:100%;padding:15px 0;" href=""#><img style="width:20px;height:20px;margin-right:15px" src="images/copy.svg" /> Copy link</a>
					<a style="display:flex; flex-direction:row;align-items:center;width:100%;padding:15px 0;border-top: 1px solid #F2F2F2;border-bottom: 1px solid #F2F2F2;" href=""#><img style="width:20px;height:20px;margin-right:15px" src="images/fb.svg" /> Facebook</a>
					<a style="display:flex; flex-direction:row;align-items:center;width:100%;padding:15px 0;" href=""#><img style="width:20px;height:20px;margin-right:15px" src="images/instagram.svg" /> Instagram</a>
				</div>
			`,
			'150px',
			'mouseenter',
			'mouseleave',
			'-50px'
		);
	}
	if (document.querySelector('#m_share')) {
		addDescription(
			'#m_share',
			'right',
			`
				<div style="flex-direction:column; display:flex">
					<a style="display:flex; flex-direction:row;align-items:center;width:100%;padding:15px 0;" href=""#><img style="width:20px;height:20px;margin-right:15px" src="images/copy.svg" /> Copy link</a>
					<a style="display:flex; flex-direction:row;align-items:center;width:100%;padding:15px 0;border-top: 1px solid #F2F2F2;border-bottom: 1px solid #F2F2F2;" href=""#><img style="width:20px;height:20px;margin-right:15px" src="images/fb.svg" /> Facebook</a>
					<a style="display:flex; flex-direction:row;align-items:center;width:100%;padding:15px 0;" href=""#><img style="width:20px;height:20px;margin-right:15px" src="images/instagram.svg" /> Instagram</a>
				</div>
			`,
			'150px',
			'mouseenter',
			'mouseleave',
			'-150px',
			'-90px'
		);
	}

	// catalogModal();

	// window.closeMultiModal = function (elem) {
	// 	console.log(elem);
	// 	elem.remove();
	// };
	function addDescription(DOMElement, align, markdown, width, event, hide, left, top) {
		const parent = document.querySelector(DOMElement);

		const popup = document.createElement('div');
		const triangle = document.createElement('img');
		const text = document.createElement('div');

		text.innerHTML = markdown;
		// text.style.zIndex = 2;

		parent.style.position = 'relative';
		parent.addEventListener(event, function (e) {
			e.preventDefault();
			popup.style.display = 'flex';
		});
		parent.addEventListener(hide, function () {
			popup.style.display = 'none';
		});

		popup.style.display = 'none';
		popup.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))';
		popup.style.position = 'absolute';
		popup.style.background = 'white';
		popup.style.width = width;
		popup.style.padding = '20px';
		popup.style.boxSizing = 'border-box';
		popup.style.cursor = 'default';
		popup.style.borderRadius = '8px';
		popup.style.zIndex = '2';
		popup.style.left = left;
		popup.style.top = top;

		triangle.src = 'images/witePolygonTriangle.svg';
		triangle.style.height = '40px';
		triangle.style.width = '30px';
		triangle.style.boxSizing = 'content-box';
		triangle.style.position = 'absolute';
		triangle.style.backgroundClip = 'content-box';

		switch (align) {
			case 'left':
				triangle.style.transform = 'rotate(-90deg)';
				triangle.style.left = '-30px';
				triangle.style.top = 'calc(50% - 15px)';
				popup.style.top = `-50%`;
				popup.style.right = `-${width}`;

				break;
			case 'right':
				triangle.style.transform = 'rotate(90deg)';
				triangle.style.right = '-30px';
				triangle.style.top = 'calc(50% - 15px)';
				// popup.style.top = `-50%`;
				popup.style.left = `calc(-${width} - 40px)`;
				break;
			case 'top':
				popup.style.top = '45px';
				triangle.style.left = '0';

				triangle.style.transform = 'rotate(0)';
				triangle.style.padding = '0 45%';
				triangle.style.paddingTop = '10px';
				triangle.style.top = '-30px';

				break;
		}

		popup.appendChild(triangle);
		popup.appendChild(text);
		parent.appendChild(popup);
		// document.dispatchEvent('DOMContentLoaded')
	}

	let notification_counter = 0;
	let notification_id = 0;
	let alert_multiplier;
	window.screen.width >= 768 ? (alert_multiplier = 100) : (alert_multiplier = 80);
	function addBasketAlert() {
		const notification = document.createElement('div');
		// const top = document.querySelectorAll('.basket-alert').length;
		notification.classList.add('basket_alert');
		notification.innerHTML = `
            <div class="basket_alert_image">
                <img src="images/card-img3.png" alt="" />
            </div>
            <div class="basket_alert_info">
                <div class="basket_alert_go">
                    <p>“Skv company julia light” has been added to your bag.</p>
                    <a href="">View Bag <img src="images/arrow-go-small.svg" alt="" /></a>
                </div>
                <div class="basket_alert_close">
                    <button onclick="deleteBasketNotification(this)" class="close_basket_alert"><img src="images/close.svg" alt="" /></button>
                </div>
            </div>
        `;
		notification.id = notification_id;
		notification_id++;
		document.body.appendChild(notification);

		notification.style.top = `calc(${notification_counter * alert_multiplier}px + ${alert_multiplier}px)`;
		notification.style.opacity = `0`;
		setTimeout(() => {
			notification.style.top = `calc(${notification_counter * alert_multiplier}px`;
			notification.style.opacity = `1`;
			notification_counter++;
		}, 300);

		setTimeout(() => {
			notification.querySelector('.close_basket_alert').click();
			document.querySelector('#cart_add').removeEventListener('click', () => {
				addBasketAlert();
			});
			setTimeout(() => {
				document.querySelector('#cart_add').removeEventListener('click', () => {
					addBasketAlert();
				});
			}, 300);
		}, 4000);
	}

	window.deleteBasketNotification = function (e) {
		e.parentElement.parentElement.parentElement.style.right = '-400px';
		e.parentElement.parentElement.parentElement.style.opacity = '0';
		const ind = e.parentElement.parentElement.parentElement.id;
		console.log(ind);
		setTimeout(() => {
			e.parentElement.parentElement.parentElement.remove();
			notification_counter--;
			const elements = document.querySelectorAll('.basket_alert');
			console.log(elements);
			[...elements].forEach((el) => {
				console.log(el);
				if (el.id > ind) {
					// console.log(el.id);
					el.style.top = `calc(${el.offsetTop}px - ${alert_multiplier}px)`;
				}
			});
		}, 300);
	};
	if (document.querySelector('#cart_add')) {
		document.querySelector('#cart_add').addEventListener('click', () => {
			addBasketAlert();
		});
	}

	function createSelection(element, options, width, padding, left_mobile, left_desktop) {
		if (document.querySelector(element)) {
			const parent = document.querySelector(element);
			parent.style.position = 'relative';
			parent.style.cursor = 'pointer';

			const container = document.createElement('div');
			container.classList.add('select_container');
			container.style.bottom = `-${50 * options.length + 5}px`;
			container.style.display = 'none';
			container.style.width = width;
			window.screen.width < 1201 ? (container.style.left = left_mobile) : (container.style.left = left_desktop);

			// container.style.right = `-50%`;

			options.forEach((el) => {
				container.innerHTML += `
				<div style="padding:0 ${padding}" data-name="${el.name}" data-value="${el.value}" class="${
					(parent.dataset.selected === el.value || localStorage.getItem('lang')) === el.value ? 'selected_option' : ''
				}">${el.name}</div>
			`;
			});

			parent.appendChild(container);

			parent.addEventListener('click', () => {
				container.style.display = container.style.display === 'none' ? 'block' : 'none';
				localStorage.setItem('lang', parent.dataset.selected);
				const langTrigger = new Event('langTrigger');
				window.dispatchEvent(langTrigger);
			});
			container.addEventListener('click', (e) => {
				if (e.target.dataset.value) {
					parent.setAttribute('data-selected', e.target.dataset.value);
					parent.getElementsByClassName('selection_title')[0].innerText = e.target.dataset.name;
					[...container.children].forEach((el) => {
						el.classList.remove('selected_option');
						if (parent.dataset.selected === el.dataset.value) {
							el.classList.add('selected_option');
						}
					});
				}
			});
		}
	}
	createSelection(
		'.lang_change',
		[
			{ name: 'RU', value: 'russian' },
			{ name: 'EN', value: 'english' },
		],
		'80px',
		'10px',
		'-51%',
		'-20px'
	);
	createSelection(
		'.filters_sorting',
		[
			{ name: 'Cheap first', value: 'cheap' },
			{ name: 'Expensive first', value: 'expensive' },
			{ name: 'New Goods', value: 'new' },
			{ name: 'Default Sorting', value: 'default' },
		],
		'100%',
		'20px'
	);
	createSelection(
		'#blog_sort',
		[
			{ name: 'Cheap first', value: 'cheap' },
			{ name: 'Expensive first', value: 'expensive' },
			{ name: 'New Goods', value: 'new' },
			{ name: 'Default Sorting', value: 'default' },
		],
		'100%',
		'20px'
	);
});
