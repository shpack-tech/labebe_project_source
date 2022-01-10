document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tab-group-one');
	const tabs_two = document.querySelectorAll('.tab-group-two');
	const t_content = document.querySelectorAll('.order__content');
	const t_content_two = document.querySelectorAll('.order__content_two');

	const changeClass = (el) => {
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove('active__order-tab');
		}

		el.classList.add('active__order-tab');
	};
	const changeClassTwo = (el) => {
		for (let i = 0; i < tabs_two.length; i++) {
			tabs_two[i].classList.remove('active__order-tab');
		}

		el.classList.add('active__order-tab');
	};

	[...tabs].forEach((el) => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('li').dataset.tab) {
				const currTab = e.target.closest('li').dataset.tab;
				changeClass(e.target.closest('li'));
				for (let i = 0; i < t_content.length; i++) {
					t_content[i].classList.remove('show');
					if (t_content[i].dataset.content === currTab) {
						t_content[i].classList.add('show');
					}
				}
			}
		});
	});
	[...tabs_two].forEach((el) => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('li').dataset.tab) {
				const currTab = e.target.closest('li').dataset.tab;
				changeClassTwo(e.target.closest('li'));
				for (let i = 0; i < t_content_two.length; i++) {
					t_content_two[i].classList.remove('show');
					if (t_content_two[i].dataset.content === currTab) {
						t_content_two[i].classList.add('show');
					}
				}
			}
		});
	});

	let currentStep = 0;
	const content = document.querySelectorAll('.order_content_big');
	const bubbles = document.querySelectorAll('.order_bubble');

	const section = document.querySelector('.order');

	if (section) {
		section.addEventListener('click', function (e) {
			const target = e.target;
			if (target.closest('button').classList.contains('order__btn-continue')) {
				currentStep++;
			}
			if (target.closest('button').classList.contains('order_back') && currentStep > 0) {
				currentStep--;
			}
			if (target.closest('button').classList.contains('to_cart')) {
				window.location.href = '/cart.html';
			}
			if (target.closest('button').classList.contains('to_home')) {
				window.location.href = '/';
			}
			step();
		});
	}

	function step() {
		for (let i = 0; i < content.length; i++) {
			content[i].classList.remove('show');
		}
		for (let i = 0; i < bubbles.length; i++) {
			bubbles[i].classList.remove('order_bubble_current');
		}
		for (let i = 0; i < currentStep; i++) {
			bubbles[i].classList.add('order_bubble_current');
			bubbles[i].classList.add('order_bubble_complete');
			bubbles[i].innerHTML = '<img style="height:30px;width:30px" src="images/check.svg" />';
		}
		content[currentStep].classList.add('show');
		bubbles[currentStep].classList.add('order_bubble_current');
		bubbles[currentStep].innerText = currentStep + 1;
	}
});
