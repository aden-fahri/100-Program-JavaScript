const U_2 = document.getElementById('fr-U_2')
const U_1 = document.getElementById('fr-U_1')
const btnHitung = document.getElementById('btn-hitung')
const rasio = document.getElementById('txt-rasio')

function hitungRasio(U_2, U_1){
  return (U_2 / U_1)
}

btnHitung.addEventListener('click', function(){
  rasio.textContent = hitungRasio(U_2.value, U_1.value)
})