// transisi.js
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');
});

document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');
  if (
    url &&
    !url.startsWith('#') &&
    !url.startsWith('mailto:') &&
    !url.startsWith('tel:')
  ) {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.remove('page-loaded');
      setTimeout(() => {
        window.location.href = url;
      }, 300); // Sesuaikan dengan durasi CSS
    });
  }
});

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  const width = images[0].clientWidth;
  slider.style.transform = `translateX(${-i * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showSlide(index);
});

window.addEventListener('resize', () => showSlide(index));
