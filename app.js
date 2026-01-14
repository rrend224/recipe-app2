const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(2)';
  });
  link.addEventListener('mouseleave', () => {
    cursor.style.transform = cursor.style.transform.replace(' scale(2)', '');
  });
});
