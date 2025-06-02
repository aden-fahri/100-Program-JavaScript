const desimal = document.getElementById('fr-desimal');
const btnHitung = document.getElementById('btn-hitung');
const biner = document.getElementById('txt-biner');

function desimalKeBiner(angka) {
  if (angka === 0) return '0';
  let result = '';
  let n = Math.abs(Number(angka));
  while (n > 0) {
    result = (n % 2) + result;
    n = Math.floor(n / 2);
  }
  return result;
}

btnHitung.addEventListener('click', function () {
  biner.textContent = desimalKeBiner(desimal.value);
});