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

if (!document.querySelector('link[href^="hero-showcase.css"]')) {
  const heroStyles = document.createElement('link');
  heroStyles.rel = 'stylesheet';
  heroStyles.href = 'hero-showcase.css?v=1';
  document.head.appendChild(heroStyles);
}

const heroInner = document.querySelector('.hero-inner');

if (heroInner && !heroInner.querySelector('.hero-showcase')) {
  const heroCopy = document.createElement('div');
  heroCopy.className = 'hero-copy';

  while (heroInner.firstChild) {
    heroCopy.appendChild(heroInner.firstChild);
  }

  const showcase = document.createElement('div');
  showcase.className = 'hero-showcase';
  showcase.setAttribute('aria-label', 'نماذج مختارة من الأعمال');
  showcase.innerHTML = `
    <a class="hero-art hero-art-main" href="https://drive.google.com/file/d/1g0vZmepLw4Zis_gEIYdlHH5u77npee6Q/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" aria-label="مشاهدة إعلان نخيلنا">
      <img src="https://drive.google.com/thumbnail?id=1g0vZmepLw4Zis_gEIYdlHH5u77npee6Q&sz=w1600" alt="لقطة من إعلان نخيلنا تمرة تجمعنا" loading="eager">
      <span class="hero-art-label"><strong>نخيلنا — تمرة تجمعنا</strong><span>فيديو إعلاني</span></span>
    </a>
    <a class="hero-art hero-art-autism" href="https://drive.google.com/file/d/1Pjb0iG3_ExG9ny39DaEB9ubFu6Vj7WqZ/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" aria-label="مشاهدة الفيديو التوعوي عن التوحد">
      <img src="https://drive.google.com/thumbnail?id=1Pjb0iG3_ExG9ny39DaEB9ubFu6Vj7WqZ&sz=w1200" alt="لقطة من الفيديو التوعوي عن اضطراب طيف التوحد" loading="eager">
      <span class="hero-art-label"><strong>التوعية باضطراب طيف التوحد</strong><span>فيديو توعوي</span></span>
    </a>
    <a class="hero-art hero-art-hajj" href="https://drive.google.com/file/d/1vQrPM-ox4eomM5IX-AtBNWgXwHMgoIfv/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" aria-label="استعراض حملة حج صحي">
      <img src="https://drive.google.com/thumbnail?id=1vQrPM-ox4eomM5IX-AtBNWgXwHMgoIfv&sz=w1200" alt="صفحة من خطة حملة حج صحي" loading="lazy">
      <span class="hero-art-label"><strong>حملة حج صحي</strong><span>حملة توعوية</span></span>
    </a>
    <a class="hero-art hero-art-study" href="https://drive.google.com/file/d/1M74d0rt2k121cXFTHF6VuSVaA6Xamfs4/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" aria-label="فتح تصميم StudyNest">
      <img src="https://drive.google.com/thumbnail?id=1M74d0rt2k121cXFTHF6VuSVaA6Xamfs4&sz=w1200" alt="التصميم البصري لتطبيق StudyNest" loading="lazy">
      <span class="hero-art-label"><strong>StudyNest App</strong><span>تصور منتج</span></span>
    </a>`;

  heroInner.classList.add('hero-with-showcase');
  heroInner.appendChild(heroCopy);
  heroInner.appendChild(showcase);
}
