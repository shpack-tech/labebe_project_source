document.addEventListener('DOMContentLoaded', function () {

  const tabs = document.querySelector('.profile__tabs');
  const content = document.querySelectorAll('.profile__content-inner');

  const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
      tabs.children[i].classList.remove('profile__tabs-item-active');
    }
    el.classList.add('profile__tabs-item-active');
  };
  
  tabs.addEventListener('click', e => {
    if(e.target.classList.contains('profile__tabs-item')){
      const currTab = e.target.dataset.tab;
      changeClass(e.target);
      for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('show');
        if(content[i].dataset.content === currTab) {
          content[i].classList.add('show');
        }
      }
    }
  });
 

});