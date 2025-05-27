const angka = document.getElementById('fr-angka')
const btnHitung = document.getElementById('btn-hitung')
const hasil = document.getElementById('txt-hasil')

function ganjilGenap(angka) {
  angka = Number(angka)
  if (angka % 2 === 0) {
  return 'Genap'
 } else {
  return 'Ganjil'
 }
}

btnHitung.addEventListener('click', function() {
  hasil.textContent = ganjilGenap(angka.value)
})