const modal = document.querySelector('.modal');
const modalOpen = document.getElementById('openModalButton');
const modalClose = document.getElementById('closeModalButton');
const modalMenuOverlay = document.querySelector('.modal-menu-overlay');

const checkbox = document.getElementById('checkbox');
const additionalWindow = document.getElementById('additionalWindow');
const successModal = document.getElementById('my-success-Modal');
const continueBtn = document.getElementById('continue');
const successClose = document.getElementById('success_close');

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

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    additionalWindow.style.display = 'block';
  } else {
    additionalWindow.style.display = 'none';
  }
});

continueBtn.addEventListener('click', onSuccess);

function onSuccess() {
  successModal.classList.remove('is-hidden');
  modal.classList.add('is-hidden');
  setTimeout(() => {
    location.reload(); // Перезавантажити сторінку
  }, 3000);
}

successClose.addEventListener('click', onSuccessClose);

function onSuccessClose() {
  successModal.classList.add('is-hidden');
  modalMenuOverlay.classList.add('is-hidden');
  location.reload();
}
