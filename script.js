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

function reorderProjects() {
  const projectsSection = document.querySelector('#projects .container');
  const featuredProjects = document.querySelector('#projects .featured-projects');
  const compactProjects = document.querySelector('#projects .compact-projects');

  if (!projectsSection || !featuredProjects || !compactProjects) return;

  const featuredItems = Array.from(featuredProjects.querySelectorAll('.featured-project'));
  const autismProject = featuredItems.find((item) =>
    item.querySelector('h3')?.textContent.includes('اضطراب طيف التوحد')
  );
  const nakhilnaProject = featuredItems.find((item) =>
    item.querySelector('h3')?.textContent.includes('نخيلنا')
  );

  if (autismProject) {
    autismProject.classList.remove('reverse');
    featuredProjects.prepend(autismProject);
  }

  if (nakhilnaProject) {
    nakhilnaProject.classList.add('reverse');
    projectsSection.appendChild(nakhilnaProject);
  }
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

reorderProjects();
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
