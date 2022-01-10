document.addEventListener('DOMContentLoaded', function () {
	const footerCategoryItem = document.querySelectorAll('.footer__category-item');

	function dropDown(list) {
		const footerCategoryList = list.querySelector('.footer__category-list');
		footerCategoryList.classList.toggle('show_f');
	}

	function rotate(item) {
		item.classList.toggle('rotate');
	}

	footerCategoryItem.forEach((item) => {
		item.addEventListener('click', function (e) {
			if (e.target === this.querySelector('.footer__category-title') || e.target === this) {
				dropDown(this);
				rotate(this);
			}
		});
	});
});
