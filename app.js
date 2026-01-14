const cursor = document.querySelector('.cursor');
const hoverTargets = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('is-hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-hover');
  });
});
