const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('#mobileMenu'); // Виберіть меню за його ідентифікатором

mobileMenuButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-hidden');
}
