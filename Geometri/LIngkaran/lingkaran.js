const jari = document.getElementById('fr-jari')
const btnHitung = document.getElementById('btn-hitung')
const keliling = document.getElementById('txt-keliling')
const PHI = 3.14

function hitungKeliling(jari) {
  return 2 * PHI * jari
} 

btnHitung.addEventListener('click', function() {
  keliling.textContent = hitungKeliling(jari.value)
})