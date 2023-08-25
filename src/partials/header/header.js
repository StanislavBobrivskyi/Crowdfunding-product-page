const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('#mobileMenu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const body = document.body; // або інший елемент, який потрібно заборонити прокручувати

mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu); // Закрити меню на клік поза меню

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-hidden');
  mobileMenuOverlay.classList.toggle('is-hidden');
  body.classList.toggle('overflow-hidden'); // Додайте / видаліть клас для заборони прокручування
}

function closeMobileMenu(event) {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    mobileMenu.classList.add('is-hidden');
    mobileMenuOverlay.classList.add('is-hidden');
    body.classList.remove('overflow-hidden');
    isClosingFromOverlay = true;
    setTimeout(() => {
      if (isClosingFromOverlay) {
        mobileMenuButton.classList.remove('opened');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        isClosingFromOverlay = false;
      }
    });
  }
}
