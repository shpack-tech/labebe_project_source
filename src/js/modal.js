document.addEventListener('DOMContentLoaded', function() {

  const modal = document.querySelector('.modal');
  const close = document.querySelector('.modal__close');
  const open = document.querySelector('.open__modal');

  function openModal () {
    modal.classList.remove('hide');
    modal.classList.add('show');
  }

  function closeModal () {
    modal.classList.add('hide');
    modal.classList.remove('show');
  }

  open.addEventListener('click', () => {
    openModal();
  });

  close.addEventListener('click', () => {
    closeModal();
  });

});