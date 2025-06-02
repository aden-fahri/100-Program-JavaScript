const nilai = document.getElementById('fr-nilai');
const total = document.getElementById('fr-total');
const btnHitung = document.getElementById('btn-hitung');
const persen = document.getElementById('txt-persen');

function hitungPersen(nilai, total) {
  return (nilai / total) * 100;
}

btnHitung.addEventListener('click', function () {
  persen.textContent = hitungPersen(nilai.value, total.value).toFixed(2);
});