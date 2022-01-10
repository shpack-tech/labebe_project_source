document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelector('.reviewsandquestions__tabs');
	const content = document.querySelectorAll('.tabs__item');

	const changeClass = (el) => {
		for (let i = 0; i < tabs.children.length; i++) {
			tabs.children[i].classList.remove('active__tab');
		}
		el.classList.add('active__tab');
	};

	tabs.addEventListener('click', (e) => {
		if (e.target.dataset.btn) {
			const currTab = e.target.dataset.btn;
			changeClass(e.target);
			for (let i = 0; i < content.length; i++) {
				content[i].classList.remove('show');
				if (content[i].dataset.content === currTab) {
					content[i].classList.add('show');
				}
			}
		}
	});
});
