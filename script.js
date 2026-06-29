const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.main-nav');

if (menuButton && menu) {
  menuButton.addEventListener('click', function () {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
