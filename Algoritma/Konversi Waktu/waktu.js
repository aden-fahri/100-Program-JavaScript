const detik = document.getElementById('fr-detik');
const btnHitung = document.getElementById('btn-hitung');
const menit = document.getElementById('txt-menit');
const jam = document.getElementById('txt-jam');
const hari = document.getElementById('txt-hari');

const DETIK_PER_MENIT = 60;
const DETIK_PER_JAM = 3600;
const DETIK_PER_HARI = 86400;

function hitungMenit(waktuDetik) {
  return waktuDetik / DETIK_PER_MENIT;
}

function hitungJam(waktuDetik) {
  return waktuDetik / DETIK_PER_JAM;
}

function hitungHari(waktuDetik) {
  return waktuDetik / DETIK_PER_HARI;
}

btnHitung.addEventListener('click', function () {
  menit.textContent = hitungMenit(detik.value).toFixed(2);
  jam.textContent = hitungJam(detik.value).toFixed(2);
  hari.textContent = hitungHari(detik.value).toFixed(2);
});