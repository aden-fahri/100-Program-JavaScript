const dadu = document.getElementById('dadu');
const rollBtn = document.getElementById('rollBtn');
const result = document.getElementById('result');

function rolldadu() {
  const number = Math.floor(Math.random() * 6) + 1;
  document.querySelectorAll('.face').forEach(face => {
    face.classList.remove('active');
  });

  document.querySelector(`.face-${number}`).classList.add('active');

  dadu.classList.add('roll-animation');
  setTimeout(() => {
    dadu.classList.remove('roll-animation');
  }, 500);

  result.textContent = `You rolled: ${number}`;
}
rollBtn.addEventListener('click', rolldadu);
rolldadu();