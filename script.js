// Lightbox Script
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('#galerie img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.onclick = () => lightbox.style.display = 'none';

window.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
};
// Animation au scroll
const fadeElems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElems.forEach(el => observer.observe(el));
