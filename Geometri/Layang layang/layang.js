const d1 = document.getElementById('fr-d1')
const d2 = document.getElementById('fr-d2')
const btnHitung = document.getElementById('btn-hitung')
const luas = document.getElementById('txt-luas')

function hitungLuas(d1, d2) {
  return 1/2 * d1 * d2  
}

btnHitung.addEventListener('click', function() {
  luas.textContent = hitungLuas(d1.value, d2.value)
})