const mil = document.getElementById('fr-mil');
const btnHitung = document.getElementById('btn-hitung');
const hasil = document.getElementById('txt-hasil');
const satuMil = 1.60934;

function hitungKilometer(jarakMil) {
  return jarakMil * satuMil;
}

btnHitung.addEventListener('click', function () {
  hasil.textContent = hitungKilometer(Number(mil.value)).toFixed(2);
});