// ---------------- Project data ----------------
const PROJECTS = [
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-4.jpg',  title: 'Samruddhi — Brand Identity',        cat: 'branding', catLabel: 'Branding' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-5.jpg',  title: 'MealWheel — App UI',                cat: 'ui',        catLabel: 'UI / UX' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-6.jpg',  title: 'MealWheel — Web UI',                cat: 'ui',        catLabel: 'UI / UX' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-7.jpg',  title: 'Logo Design — Set 1',               cat: 'logo',      catLabel: 'Logo' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-8.jpg',  title: 'Logo Design — Set 2',               cat: 'logo',      catLabel: 'Logo' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-9.jpg',  title: 'Samruddhi — Packaging',             cat: 'packaging', catLabel: 'Packaging' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-10.jpg', title: 'Voltage — Skincare Packaging',      cat: 'packaging', catLabel: 'Packaging' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-11.jpg', title: 'Maccha.in — T-Shirt Design',        cat: 'apparel',   catLabel: 'Apparel' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-12.jpg', title: 'Maccha.in — Post Design',           cat: 'social',    catLabel: 'Social Media' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-13.jpg', title: 'Live Events — Flyers & Posters',    cat: 'posters',   catLabel: 'Posters' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-14.jpg', title: 'Film Posters — Set 1',              cat: 'posters',   catLabel: 'Posters' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-15.jpg', title: 'Film Posters — Set 2',              cat: 'posters',   catLabel: 'Posters' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-16.jpg', title: 'Photo Compilation — Set 1',         cat: 'photo',     catLabel: 'Photo Editing' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-17.jpg', title: 'Photo Compilation — Set 2',         cat: 'photo',     catLabel: 'Photo Editing' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-18.jpg', title: 'Maccha.in — Banner Design',         cat: 'banner',    catLabel: 'Banners' },
  { img: 'E:\SURYA DESIGNS\portfolio\Portfolio new\suraj-ari-portfolio\site\assets\work\project-19.jpg', title: 'Team India — Sample Banner',        cat: 'banner',    catLabel: 'Banners' },
];

// ---------------- Render gallery ----------------
const gallery = document.getElementById('gallery');
const visibleCount = document.getElementById('visibleCount');

function renderGallery() {
  gallery.innerHTML = PROJECTS.map((p, i) => `
    <figure class="g-item" data-cat="${p.cat}" data-index="${i}" tabindex="0" role="button" aria-label="View ${p.title}">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <figcaption class="g-item__overlay">
        <p class="g-item__cat">${p.catLabel}</p>
        <p class="g-item__title">${p.title}</p>
      </figcaption>
    </figure>
  `).join('');
}
renderGallery();

// ---------------- Filters ----------------
const filterBtns = document.querySelectorAll('.filter');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const val = btn.dataset.filter;
    const items = document.querySelectorAll('.g-item');
    let count = 0;
    items.forEach(item => {
      const match = val === 'all' || item.dataset.cat === val;
      item.classList.toggle('is-hidden', !match);
      if (match) count++;
    });
    visibleCount.textContent = count;
  });
});

// ---------------- Lightbox ----------------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
let currentIndex = 0;

function getVisibleIndices() {
  return Array.from(document.querySelectorAll('.g-item:not(.is-hidden)')).map(el => Number(el.dataset.index));
}

function openLightbox(index) {
  currentIndex = index;
  const p = PROJECTS[index];
  lightboxImg.src = p.img;
  lightboxImg.alt = p.title;
  lightboxCaption.textContent = `${p.title} — ${p.catLabel}`;
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
}
function step(dir) {
  const visible = getVisibleIndices();
  const pos = visible.indexOf(currentIndex);
  const next = visible[(pos + dir + visible.length) % visible.length];
  openLightbox(next);
}

gallery.addEventListener('click', e => {
  const item = e.target.closest('.g-item');
  if (item) openLightbox(Number(item.dataset.index));
});
gallery.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('g-item')) {
    e.preventDefault();
    openLightbox(Number(e.target.dataset.index));
  }
});

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => step(-1));
document.getElementById('lightboxNext').addEventListener('click', () => step(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});

// ---------------- Nav scroll state ----------------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

// ---------------- Mobile menu ----------------
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
burger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open);
});
navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navMobile.classList.remove('is-open');
  burger.setAttribute('aria-expanded', false);
}));
