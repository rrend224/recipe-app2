document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', e => {
e.preventDefault();
document.querySelector(anchor.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});
