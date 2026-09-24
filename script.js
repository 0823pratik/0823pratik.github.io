// Mobile Navigation Toggle
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Smooth Page Transition Trigger
document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (href && href.startsWith('#')) return;
  a.addEventListener('click', () => document.body.classList.add('leaving'));
});