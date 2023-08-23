const modal = document.querySelector('.modal');

const modalOpen = document.getElementById('openModalButton');
const modalClose = document.getElementById('closeModalButton');

modalOpen.addEventListener('click', onClick);
modalClose.addEventListener('click', onClose);
function onClick() {
  modal.classList.remove('is-hidden');
}

function onClose() {
  modal.classList.add('is-hidden');
}
