const a = document.getElementById('fr-suku-pertama')
const b = document.getElementById('fr-suku-beda')
const n = document.getElementById('fr-jumlah-suku')
const btnHitung = document.getElementById('btn-hitung')
const s_n = document.getElementById('txt-S_n')

function hitungS_n(a, b, n) {
  return (n / 2) * (2 * a + (n - 1) * b)
}

btnHitung.addEventListener('click', function(){
  s_n.textContent = hitungS_n(a.value, b.value, n.value)
})