const a = document.getElementById('fr-a')
const b = document.getElementById('fr-b')
const btnHitung = document.getElementById('btn-hitung')
const c = document.getElementById('txt-c')

function hitungC (a, b) {
  return a**2 + b**2
}

btnHitung.addEventListener('click', function() {
  c.textContent = hitungC(a.value, b.value)
})