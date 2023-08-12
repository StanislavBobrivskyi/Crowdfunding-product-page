// const mobileMenuButton = document.querySelector('.menu');
// const mobileMenu = document.querySelector('#mobileMenu'); // Виберіть меню за його ідентифікатором

// mobileMenuButton.addEventListener('click', toggleMobileMenu);

// function toggleMobileMenu() {
//   mobileMenu.classList.toggle('is-hidden');
// }

const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('#mobileMenu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu); // Закрити меню на клік поза меню

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-hidden');
  mobileMenuOverlay.classList.toggle('is-hidden');
}

function closeMobileMenu(event) {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    mobileMenu.classList.add('is-hidden');
    mobileMenuOverlay.classList.add('is-hidden');
  }
}
