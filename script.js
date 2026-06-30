const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.main-nav');

function closeMenu() {
  if (!menuButton || !menu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
}

function updateHeader() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 16);
}

if (menuButton && menu) {
  menuButton.addEventListener('click', function () {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
