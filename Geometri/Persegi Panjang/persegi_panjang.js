const panjang = document.getElementById('fr-panjang')
const lebar = document.getElementById('fr-lebar')
const btnHitung = document.getElementById('btn-hitung')
const luas = document.getElementById('txt-luas')
const keliling = document.getElementById('txt-keliling')

function hitungLuas(panjang, lebar){
  return panjang * lebar
}

function hitungKeliling(panjang, lebar){
  return 2 * (panjang + lebar)
}

btnHitung.addEventListener('click', function(){
  luas.textContent = hitungLuas(panjang.value, lebar.value)
  keliling.textContent = hitungKeliling(panjang.value, lebar.value)
})