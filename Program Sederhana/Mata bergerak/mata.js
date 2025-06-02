const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (e) => {
  pupils.forEach((pupil) => {

    const eye = pupil.parentElement;
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);

    const maxDistance = 15; 
    const pupilX = Math.cos(angle) * maxDistance;
    const pupilY = Math.sin(angle) * maxDistance;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});