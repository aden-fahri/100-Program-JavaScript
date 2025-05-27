const U_2 = document.getElementById('fr-U_2')
const U_1 = document.getElementById('fr-U_1')
const btnHitung = document.getElementById('btn-hitung')
const beda = document.getElementById('txt-beda')

function hitungBeda(U_2, U_1){
  return (U_2 - U_1)
}

btnHitung.addEventListener('click', function(){
  beda.textContent = hitungBeda(U_2.value, U_1.value)
})