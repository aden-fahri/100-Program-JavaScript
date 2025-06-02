const rupiah = document.getElementById('fr-rupiah');
const btnHitung = document.getElementById('btn-hitung');
const yen = document.getElementById('txt-yen');
const satuRupiah = 0.0093; 

function hitungYen(nominalRupiah) {
  return nominalRupiah * satuRupiah;
}

btnHitung.addEventListener('click', function () {
  yen.textContent = hitungYen(rupiah.value).toFixed(2);
});