const modal = document.querySelector('.modal');
const modalOpen = document.getElementById('openModalButton');
const modalClose = document.getElementById('closeModalButton');
const modalMenuOverlay = document.querySelector('.modal-menu-overlay');

modalOpen.addEventListener('click', onClick);
modalClose.addEventListener('click', onClose);
modalMenuOverlay.addEventListener('click', onCloseOutside);

function onClick() {
  document.body.classList.add('modal-open');
  modalMenuOverlay.classList.remove('is-hidden');
  modal.classList.remove('is-hidden');
}

function onClose() {
  document.body.classList.remove('modal-open');
  modal.classList.add('is-hidden');
  modalMenuOverlay.classList.add('is-hidden');
}

function onCloseOutside(event) {
  if (!modal.contains(event.target) && !modalOpen.contains(event.target)) {
    document.body.classList.remove('modal-open');
    modal.classList.add('is-hidden');
    modalMenuOverlay.classList.add('is-hidden');
  }
}
