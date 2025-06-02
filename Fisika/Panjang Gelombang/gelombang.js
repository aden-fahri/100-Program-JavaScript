const kecepatan = document.getElementById('fr-kecepatan');
const frekuensi = document.getElementById('fr-frekuensi');
const btnHitung = document.getElementById('btn-hitung');
const panjang = document.getElementById('txt-panjang');

function hitungPanjangGelombang(kecepatan, frekuensi) {
  return kecepatan / frekuensi;
}

btnHitung.addEventListener('click', function () {
  panjang.textContent = hitungPanjangGelombang(kecepatan.value, frekuensi.value).toFixed(2);
});