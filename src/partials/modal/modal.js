const modal = document.querySelector('.modal');
const modalOpen = document.getElementById('openModalButton');
const modalClose = document.getElementById('closeModalButton');
const modalMenuOverlay = document.querySelector('.modal-menu-overlay');

const checkbox = document.getElementById('checkbox');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');

const additionalWindow = document.getElementById('additionalWindow');
const additionalWindow1 = document.getElementById('additionalWindow1');
const additionalWindow2 = document.getElementById('additionalWindow2');
const additionalWindow3 = document.getElementById('additionalWindow3');

const successModal = document.getElementById('my-success-Modal');
const continueBtn = document.getElementById('continue');
const successClose = document.getElementById('success_close');

const borderItem = document.querySelector('.card-item');

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

checkbox1.addEventListener('change', () => {
  additionalWindow1.style.display = checkbox1.checked ? 'block' : 'none';
});

checkbox2.addEventListener('change', () => {
  additionalWindow2.style.display = checkbox2.checked ? 'block' : 'none';
});

checkbox3.addEventListener('change', () => {
  additionalWindow3.style.display = checkbox3.checked ? 'block' : 'none';
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

document.querySelectorAll('#continue').forEach(btn => {
  btn.addEventListener('click', onSuccess);
});
