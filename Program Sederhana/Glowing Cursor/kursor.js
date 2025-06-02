const glowCursor = document.querySelector('.glow-cursor');

document.addEventListener('mousemove', (e) => {
  glowCursor.style.left = `${e.clientX}px`;
  glowCursor.style.top = `${e.clientY}px`;
});